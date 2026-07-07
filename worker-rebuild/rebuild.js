/* ============================================================================
 * Dash Rebuild Trigger — Cloudflare Worker
 *
 * A cloud rendezvous point that lets the PUBLIC (static) dashboard ask the Mac
 * to refresh the workout card. The Worker holds NO secrets that can push to git
 * or read VOLM — it only flips a single flag in KV. All privileged work (VOLM
 * sync, git push) stays on the Mac, which polls this Worker and never accepts
 * inbound connections.
 *
 *   Browser (public page)                    Mac poller (launchd, every 120s)
 *   ---------------------                    --------------------------------
 *   POST /api/rebuild        --> KV flag -->  GET  /api/rebuild-status
 *   GET  /api/rebuild-status                  POST /api/rebuild-claim   (token)
 *        (shows progress)                     runs deploy.sh
 *                            <-- KV state <--  POST /api/rebuild-done    (token)
 *
 * Endpoints
 *   POST /api/rebuild         public. Queues a rebuild. Rate-limited BEFORE any
 *                             KV write (bounds abuse + KV write quota). Carries
 *                             NO parameters — it only sets a boolean intent.
 *   GET  /api/rebuild-status  public. Current {status, sessions, error, ...}.
 *   POST /api/rebuild-claim   poller only (Bearer POLLER_TOKEN). queued->building.
 *   POST /api/rebuild-done    poller only. Reports {ok, sessions, error}.
 *   GET  /api/rebuild-health  liveness + token/config presence (never the token).
 *
 * Config / secrets (Wrangler):
 *   wrangler kv namespace create REBUILD_KV     # then paste id into wrangler.toml
 *   wrangler secret put POLLER_TOKEN            # shared with the Mac poller
 *   [vars] ALLOWED_ORIGIN      CORS allowlist (your Pages origin)
 *   [vars] RATE_LIMIT_SECONDS  min seconds between accepted rebuilds (default 600)
 * ==========================================================================*/

const STATE_KEY = 'state';
const DEFAULT_RATE_LIMIT = 600;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request.headers.get('Origin') || '', env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    try {
      switch (url.pathname) {
        case '/api/rebuild':
          return request.method === 'POST'
            ? json(await requestRebuild(env), 200, cors)
            : json({ ok: false, error: 'method_not_allowed' }, 405, cors);

        case '/api/rebuild-status':
          return request.method === 'GET'
            ? json(await getState(env), 200, cors)
            : json({ ok: false, error: 'method_not_allowed' }, 405, cors);

        case '/api/rebuild-claim':
          if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405, cors);
          if (!authPoller(request, env)) return json({ ok: false, error: 'unauthorized' }, 401, cors);
          return json(await claimRebuild(env), 200, cors);

        case '/api/rebuild-done':
          if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405, cors);
          if (!authPoller(request, env)) return json({ ok: false, error: 'unauthorized' }, 401, cors);
          return json(await finishRebuild(env, await safeBody(request)), 200, cors);

        case '/api/rebuild-health':
          return json({
            ok: true,
            hasPollerToken: Boolean(env.POLLER_TOKEN),
            rateLimitSeconds: rateLimit(env),
            time: new Date().toISOString(),
          }, 200, cors);

        default:
          return json({ ok: false, error: 'not_found' }, 404, cors);
      }
    } catch (err) {
      return json({ ok: false, error: 'worker_error', detail: String((err && err.message) || err) }, 500, cors);
    }
  },
};

/* ── state (single KV key) ───────────────────────────────────────────────── */
function emptyState() {
  return { status: 'idle', requested_at: null, claimed_at: null, finished_at: null,
           last_deploy_at: null, sessions: null, error: null };
}
async function getState(env) {
  const raw = await env.REBUILD_KV.get(STATE_KEY);
  if (!raw) return emptyState();
  try { return { ...emptyState(), ...JSON.parse(raw) }; } catch { return emptyState(); }
}
async function putState(env, s) { await env.REBUILD_KV.put(STATE_KEY, JSON.stringify(s)); return s; }

/* ── public: queue a rebuild (rate-limited before any write) ─────────────── */
async function requestRebuild(env) {
  const s = await getState(env);
  if (s.status === 'queued' || s.status === 'building')
    return { ok: true, status: s.status, note: 'already in progress' };

  const now = Date.now();
  const last = tms(s.requested_at);           // rate-limit against the last trigger
  const limitMs = rateLimit(env) * 1000;
  if (last && now - last < limitMs)
    return { ok: false, status: s.status || 'idle', error: 'rate_limited',
             retry_after_seconds: Math.ceil((limitMs - (now - last)) / 1000) };

  await putState(env, { ...s, status: 'queued', requested_at: new Date(now).toISOString(),
                        claimed_at: null, finished_at: null, error: null });
  return { ok: true, status: 'queued' };
}

/* ── poller: claim + report ──────────────────────────────────────────────── */
async function claimRebuild(env) {
  const s = await getState(env);
  if (s.status !== 'queued') return { ok: true, claim: false, status: s.status };
  await putState(env, { ...s, status: 'building', claimed_at: new Date().toISOString() });
  return { ok: true, claim: true, status: 'building' };
}
async function finishRebuild(env, body) {
  const s = await getState(env);
  const ok = Boolean(body && body.ok);
  const nowIso = new Date().toISOString();
  const next = { ...s,
    status: ok ? 'done' : 'error',
    finished_at: nowIso,
    last_deploy_at: ok ? nowIso : s.last_deploy_at,
    sessions: body && body.sessions != null ? body.sessions : s.sessions,
    error: ok ? null : (body && body.error) || 'unknown',
  };
  await putState(env, next);
  return { ok: true, status: next.status };
}

/* ── helpers ─────────────────────────────────────────────────────────────── */
function rateLimit(env) { const n = parseInt(env.RATE_LIMIT_SECONDS, 10); return Number.isFinite(n) && n > 0 ? n : DEFAULT_RATE_LIMIT; }
function authPoller(request, env) {
  const m = (request.headers.get('Authorization') || '').match(/^Bearer\s+(.+)$/i);
  return Boolean(env.POLLER_TOKEN) && m && m[1] === env.POLLER_TOKEN;
}
function tms(iso) { return iso ? Date.parse(iso) : 0; }
async function safeBody(request) { try { return await request.json(); } catch { return {}; } }

function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
  const allow = allowed.length ? (allowed.includes(origin) ? origin : allowed[0]) : '*';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Vary': 'Origin',
  };
}
function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors } });
}

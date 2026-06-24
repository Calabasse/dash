/* ============================================================================
 * CHAD_OS Weather Proxy — Cloudflare Worker
 *
 * Hides the Weather Underground / weather.com PWS API key behind a backend so
 * it is NEVER shipped to the browser. Returns normalized JSON the dashboard
 * (weather.html / weather.js) and a future iOS app consume identically.
 *
 * Endpoints
 *   GET /api/weather/current                       -> normalized current obs
 *   GET /api/weather/history?range=day|week|month|quarter|year|all
 *   GET /api/weather/health                         -> liveness + key presence
 *
 * Secrets / config (Wrangler):
 *   wrangler secret put WEATHER_API_KEY             # required, never returned
 *   [vars] PWS_STATION_ID   = "KVAGAINE55"          # optional, this default
 *   [vars] ALLOWED_ORIGIN   = "https://calabasse.github.io"   # CORS allowlist
 *
 * Notes
 *   - Current obs cached 60–180s (CACHE_SECONDS) via the Cache API.
 *   - Observation marked stale if older than STALE_MINUTES (60).
 *   - Weather.com PWS history requires a paid/keyed plan; if the history call
 *     fails we degrade gracefully to an empty series (dashboard still renders
 *     current + cards).
 * ==========================================================================*/

const WX_BASE = 'https://api.weather.com/v2/pws';
const CACHE_SECONDS = 120;     // 60–180s window
const STALE_MINUTES = 60;
const DEFAULT_STATION = 'KVAGAINE55';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin, env);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'GET') return json({ error: 'method_not_allowed' }, 405, cors);

    const station = (env.PWS_STATION_ID || DEFAULT_STATION).trim();
    try {
      switch (url.pathname) {
        case '/api/weather/health':  return json(await health(env, station), 200, cors);
        case '/api/weather/current': return json(await current(env, station, ctx, request), 200, cors);
        case '/api/weather/history': return json(await history(env, station, url.searchParams.get('range') || 'week'), 200, cors);
        default: return json({ error: 'not_found' }, 404, cors);
      }
    } catch (err) {
      // Never leak the key or upstream internals.
      return json({ error: 'upstream_error', detail: String(err && err.message || err) }, 502, cors);
    }
  },
};

/* ── CORS ──────────────────────────────────────────────────────────────────*/
function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
  // Allow configured origin(s); fall back to echoing origin only if allowlisted.
  let allow = allowed.length ? (allowed.includes(origin) ? origin : allowed[0]) : '*';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}
function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors },
  });
}

/* ── Health ────────────────────────────────────────────────────────────────*/
async function health(env, station) {
  return {
    ok: true,
    stationId: station,
    hasKey: Boolean(env.WEATHER_API_KEY),   // boolean only — never the key
    cacheSeconds: CACHE_SECONDS,
    staleMinutes: STALE_MINUTES,
    time: new Date().toISOString(),
  };
}

/* ── Current observation (cached) ───────────────────────────────────────────*/
async function current(env, station, ctx, request) {
  requireKey(env);
  const cache = caches.default;
  const cacheKey = new Request(`https://cache.local/current/${station}`, request);
  let cached = await cache.match(cacheKey);
  if (cached) return cached.json();

  const u = `${WX_BASE}/observations/current?stationId=${encodeURIComponent(station)}&format=json&units=e&apiKey=${env.WEATHER_API_KEY}`;
  const res = await fetch(u, { cf: { cacheTtl: CACHE_SECONDS } });
  if (!res.ok) {
    const body = await safeText(res);
    return { stationId: station, status: 'offline', error: 'wx_' + res.status, detail: scrub(body, env), current: null };
  }
  const data = await res.json();
  const obs = (data.observations && data.observations[0]) || null;
  const out = normalizeCurrent(obs, station);

  const resp = json(out, 200, {});  // store a plain JSON copy in cache
  resp.headers.set('Cache-Control', `max-age=${CACHE_SECONDS}`);
  ctx.waitUntil(cache.put(cacheKey, resp.clone()));
  return out;
}

function normalizeCurrent(obs, station) {
  if (!obs) return { stationId: station, status: 'offline', current: null };
  const e = obs.imperial || {};
  const observedUtc = obs.obsTimeUtc || new Date().toISOString();
  const ageMin = (Date.now() - Date.parse(observedUtc)) / 60000;
  const status = ageMin > STALE_MINUTES ? 'stale' : 'online';
  return {
    stationId: obs.stationID || station,
    status,
    observedAtUtc: observedUtc,
    observedAtLocal: obs.obsTimeLocal || localFromUtc(observedUtc),
    freshnessMinutes: Math.max(0, Math.round(ageMin)),
    units: 'imperial',
    current: {
      temperature: num(e.temp),
      dewpoint: num(e.dewpt),
      humidity: num(obs.humidity),
      pressure: num(e.pressure),
      windSpeed: num(e.windSpeed),
      windGust: num(e.windGust),
      windDirection: num(obs.winddir),
      rainRate: num(e.precipRate),
      rainToday: num(e.precipTotal),
      uv: num(obs.uv),
      solarRadiation: num(obs.solarRadiation),
    },
    derived: { heatIndex: num(e.heatIndex), wetBulb: null, pressureTendency: null,
               rainIntensity: null, rain24h: null, rain72h: null },
  };
}

/* ── History ────────────────────────────────────────────────────────────────
 * weather.com PWS history endpoints (require an appropriate key/plan):
 *   /v2/pws/observations/hourly/7day?stationId=...   (recent)
 *   /v2/pws/history/hourly?stationId=...&date=YYYYMMDD
 *   /v2/pws/history/daily?stationId=...&date=YYYYMMDD
 * We try the rolling 7-day hourly feed for short ranges; for longer ranges the
 * caller should batch /history/* per day. To keep the Worker simple and avoid
 * surprising upstream cost, ranges beyond what one feed returns degrade to the
 * data available. The dashboard renders whatever series it receives.          */
async function history(env, station, range) {
  requireKey(env);
  const feed = `${WX_BASE}/observations/hourly/7day?stationId=${encodeURIComponent(station)}&format=json&units=e&apiKey=${env.WEATHER_API_KEY}`;

  const res = await fetch(feed, { cf: { cacheTtl: 300 } });
  if (!res.ok) {
    // Graceful: empty series, dashboard still shows current + cards.
    return { stationId: station, range, units: 'imperial', observations: [], note: 'history_unavailable_' + res.status };
  }
  const data = await res.json();
  const rows = data.observations || [];
  const observations = rows.map(normalizeHistoryRow).filter(Boolean);
  return { stationId: station, range, units: 'imperial', observations };
}

function normalizeHistoryRow(o) {
  if (!o) return null;
  const e = o.imperial || o; // hourly summaries nest under imperial too
  return {
    observedAtUtc: o.obsTimeUtc || (o.epoch ? new Date(o.epoch * 1000).toISOString() : null),
    values: {
      temperature: num(e.temp ?? e.tempAvg),
      dewpoint: num(e.dewpt ?? e.dewptAvg),
      humidity: num(o.humidity ?? o.humidityAvg),
      pressure: num(e.pressure ?? e.pressureMax ?? e.pressureTrend),
      windSpeed: num(e.windSpeed ?? e.windspeedAvg),
      windGust: num(e.windGust ?? e.windgustHigh),
      windDirection: num(o.winddir ?? o.winddirAvg),
      rainRate: num(e.precipRate),
      precipIncr: num(e.precipTotal), // per-row total; dashboard buckets/sums
      rainAccum: num(e.precipTotal),
      uv: num(o.uvHigh ?? o.uv),
      solarRadiation: num(o.solarRadiationHigh ?? o.solarRadiation),
    },
  };
}

/* ── helpers ────────────────────────────────────────────────────────────────*/
function requireKey(env) { if (!env.WEATHER_API_KEY) throw new Error('WEATHER_API_KEY not configured'); }
function num(v) { return (v == null || v === '' || isNaN(+v)) ? null : +v; }
function localFromUtc(utc) { try { return new Date(utc).toLocaleString('en-US'); } catch { return utc; } }
async function safeText(res) { try { return await res.text(); } catch { return ''; } }
// Strip the API key from any upstream error text before returning it.
function scrub(text, env) { if (!text || !env.WEATHER_API_KEY) return text; return String(text).split(env.WEATHER_API_KEY).join('***'); }

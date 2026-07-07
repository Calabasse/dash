# Dash Rebuild Trigger — Cloudflare Worker

Lets the **public** (static, GitHub Pages) workout card ask the Mac to refresh
itself. The Mac is not reachable from the internet, so this Worker is a small
cloud rendezvous: the browser flips a flag, the Mac polls the flag and does the
real work (VOLM sync + build + `git push`), then reports the result back.

The Worker holds **no** secret that can push to git or read VOLM. Compromising it
buys an attacker exactly one thing: the ability to *request* a rebuild of Chad's
own public data — which is rate-limited and idempotent (`deploy.sh` no-ops when
nothing changed).

## Flow
```
Browser (public page)                     Mac poller (launchd, every 120s)
POST /api/rebuild        ── KV flag ──▶    GET  /api/rebuild-status
GET  /api/rebuild-status                   POST /api/rebuild-claim   (Bearer token)
     (shows progress)                      runs deploy.sh
                         ◀─ KV state ──    POST /api/rebuild-done     (Bearer token)
```

## Endpoints
| Method | Path | Auth | Purpose |
|---|---|---|---|
| POST | `/api/rebuild` | public | Queue a rebuild. Rate-limited **before** any KV write. Carries no params. |
| GET | `/api/rebuild-status` | public | `{status, sessions, error, last_deploy_at, …}` |
| POST | `/api/rebuild-claim` | poller | `queued → building`; returns `{claim:true}` once |
| POST | `/api/rebuild-done` | poller | Report `{ok, sessions, error}` |
| GET | `/api/rebuild-health` | public | Liveness + `hasPollerToken` (never the token) |

`status`: `idle → queued → building → done` (or `error`).

## Security model (chosen: open + rate-limited)
- The trigger endpoint is **open** — any visitor can queue a rebuild. Backstop:
  `RATE_LIMIT_SECONDS` (default 600) rejects triggers inside the window *before*
  writing KV, bounding both abuse and Cloudflare KV write quota.
- The request has **no parameters**. It only sets a boolean intent; the Mac
  decides what to run (`deploy.sh`). No user input reaches the Mac → no injection.
- `deploy.sh` is idempotent: unchanged data → no commit, no push. Stray triggers
  cost at most one throttled VOLM API call.
- To lock it to you later: add an owner token check in `requestRebuild` and have
  the button send it from `localStorage`.

## Deploy
```bash
npm i -g wrangler          # if needed
cd worker-rebuild
wrangler login

# 1) Create the KV namespace, then paste the printed id into wrangler.toml
wrangler kv namespace create REBUILD_KV

# 2) Set the shared poller secret (also goes in ../private/rebuild.env)
python3 -c "import secrets; print(secrets.token_urlsafe(32))"   # generate one
wrangler secret put POLLER_TOKEN                                # paste it

# 3) (optional) edit wrangler.toml vars: ALLOWED_ORIGIN, RATE_LIMIT_SECONDS

wrangler deploy            # prints https://dash-rebuild.<you>.workers.dev
```

## Wire it up
1. **Public page** — in `../workout.html` set `REBUILD_API` to the deployed URL.
2. **Mac poller** — `cp ../rebuild.env.example ../private/rebuild.env`, fill in
   `WORKER_URL` (the deployed URL) and the same `POLLER_TOKEN`.
3. **launchd** — install `../com.chad.dashsite.poller.plist` (see its header).

## Verify
```bash
curl -s $URL/api/rebuild-health                      # {"ok":true,"hasPollerToken":true,...}
curl -s -X POST $URL/api/rebuild                      # {"ok":true,"status":"queued"}
python3 ../poll_rebuild.py --dry-run                  # claims + marks done, no deploy
curl -s $URL/api/rebuild-status                       # {"status":"done",...}
```

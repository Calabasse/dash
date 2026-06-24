# Weather Proxy — Cloudflare Worker

Backend that hides the Weather Underground / weather.com PWS API key from the
browser and returns normalized JSON for `weather.html` (and a future iOS app).

## Why a proxy
The PWS key must never ship in static GitHub Pages source. The Worker holds the
key as a secret, calls weather.com server-side, and returns only normalized
fields. The dashboard talks to the Worker, never to weather.com.

## Endpoints
| Method | Path | Returns |
|---|---|---|
| GET | `/api/weather/current` | normalized current observation + status |
| GET | `/api/weather/history?range=day\|week\|month\|quarter\|year\|all` | time-series observations |
| GET | `/api/weather/health` | liveness + `hasKey` boolean (never the key) |

Normalized `current` shape matches the contract in the repo `README.md`.

## Deploy
```bash
npm i -g wrangler          # if not installed
cd worker
wrangler login

# 1) Set the secret key (NEVER commit it):
wrangler secret put WEATHER_API_KEY     # paste your weather.com PWS API key

# 2) (optional) edit wrangler.toml vars:
#    PWS_STATION_ID  default "KVAGAINE55"
#    ALLOWED_ORIGIN  your GitHub Pages origin, e.g. https://calabasse.github.io

wrangler deploy
```
Deploy prints a URL like `https://weather-proxy.<you>.workers.dev`.

## Wire the dashboard to the Worker
In `../weather.js`, set:
```js
const CONFIG = {
  API_BASE_URL: 'https://weather-proxy.<you>.workers.dev',
  STATION_ID:   'KVAGAINE55',
  DEFAULT_UNITS:'imperial',
  REFRESH_SECONDS: 120,
};
```
Leave `API_BASE_URL: ''` to run the dashboard on built-in mock data (no backend,
no key) — useful for local preview and first deploy.

## CORS
`ALLOWED_ORIGIN` (in `wrangler.toml`) is the allowlist. Set it to your exact
Pages origin with no trailing slash. Multiple origins: comma-separate them
(e.g. `https://calabasse.github.io,http://localhost:8080`).

## Security
- The key is a Wrangler **secret**, not in `wrangler.toml`, not in any response.
- Upstream error text is scrubbed of the key before being returned.
- `/health` reports only `hasKey: true|false`.

## Caching / freshness
- Current obs cached `CACHE_SECONDS` (120s) via the Cache API.
- Observation marked `stale` when older than `STALE_MINUTES` (60); the
  dashboard shows the stale/offline state in the header.

## iOS app
The same three endpoints are the mobile contract. An iOS client calls the same
Worker URL, parses the identical normalized JSON, and (optionally) sends its own
allowed `Origin`/headers. No key ever lives on the device. Keep response shapes
additive-only so web and iOS stay in sync.

## History plan note
weather.com PWS history beyond the rolling 7-day feed requires the appropriate
API plan and per-day `/v2/pws/history/*` calls. The Worker uses the 7-day feed
for short ranges and degrades to whatever the feed returns for longer ranges; if
history is unavailable it returns an empty series and the dashboard still renders
current conditions + cards.

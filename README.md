# Public dashboard site

Static, read-only dashboards served from GitHub Pages. The Mac is the data factory:
it builds the data files and pushes them here. No server or database runs online.

## Pages
- `index.html` — landing / nav
- `workout.html` + `workout-card.data.js` — training (read-only). Built from VOLM/duckdb.
- `ped.html` — owner's PED cycle + full serum estimator, preloaded with the owner's
  cycle. Fully interactive (edit / recalc / save). Generated from `templates/ped.html`
  with the owner's cycle injected at the `@@PED_DATA@@` marker. Links back to the hub.
- `weight.html` — Withings body composition (self-contained, copied as-is).
- `weather.html` + `weather.js` — **Personal Weather Station (KVAGAINE55)**: CHAD_OS
  weather / stormwater monitor. Temperature first, rainfall row second. Live data via
  a private Cloudflare Worker proxy (`worker/`) that hides the weather.com PWS API key;
  runs on built-in demo/mock data when no backend is configured. See "Weather station"
  below.
- `tracker.html` — **independent public tool**, standalone (no link back to the hub):
  same full feature set, starts empty, each visitor builds their own cycle and saves /
  loads it to a plain-text file on their own device. Nothing is uploaded.

Both PED pages share the same feature set and IO (plain-text save/load + JSON / APE
export). They differ only in: `ped.html` preloads the owner's cycle and links home;
`tracker.html` starts empty and stands alone.

## Deploy
```
./deploy.sh        # rebuild data + commit + push (manual)
```
Network steps (VOLM sync, Withings) are best-effort; last good data is kept on failure.

## Tuning the prescription engine
`tuning.html` edits `prescription_config.json` (training philosophy + every parameter
of `prescribe_hypertrophy.py`). To apply:
1. On the page: pick philosophy, tweak, **Save** (downloads `prescription_config.json`).
2. Run `./deploy.sh` — it auto-picks the file up from `~/Downloads`, validates it,
   copies it into the repo + engine (`APE/tools/`), rebuilds, and pushes. The applied
   Downloads copy is renamed `prescription_config.applied-<timestamp>.json` so it isn't
   re-applied. (Or just replace `prescription_config.json` in the repo manually.)

### Owner PED data (optional)
Drop an exported cycle JSON at `private/ped-cycles.json` (gitignored). `deploy.sh`
injects it into `ped.html`. Without it, `ped.html` shows a demo seed. Export the JSON
from the local `ped-tracker.html` ("export for APE").

## Daily automation (macOS launchd)
```
cp com.chad.dashsite.deploy.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.chad.dashsite.deploy.plist
launchctl start com.chad.dashsite.deploy   # test now
```
Runs `deploy.sh` daily at 06:30. Logs to `deploy.log`.

## Weather station (weather.html + worker/)

Personal Weather Station dashboard for **KVAGAINE55**, modeled on `weight.html`
(same SVG charts, controls, imperial/metric toggle, no CDN). Temperature first,
rainfall row immediately below.

### Frontend (GitHub Pages)
`weather.html` is static. Drop it (with `weather.js`) at the repo root; it's served
by Pages like every other page. With no backend it renders deterministic **demo
data**, so it works on Pages immediately. Config lives at the top of `weather.js`:
```js
const CONFIG = {
  API_BASE_URL: '',          // '' = demo/mock; set to your Worker URL for live data
  STATION_ID:   'KVAGAINE55',
  DEFAULT_UNITS:'imperial',  // 'imperial' | 'metric'
  REFRESH_SECONDS: 120,
};
```

### Backend proxy (Cloudflare Worker) — `worker/`
The weather.com PWS API key must **never** ship in browser source. The Worker holds
it as a secret and returns normalized JSON. Deploy:
```bash
cd worker
wrangler login
wrangler secret put WEATHER_API_KEY      # paste the PWS key — never committed
# edit wrangler.toml: PWS_STATION_ID (default KVAGAINE55), ALLOWED_ORIGIN
wrangler deploy                          # prints https://weather-proxy.<you>.workers.dev
```
Then set `API_BASE_URL` in `weather.js` to that URL.

- **WEATHER_API_KEY**: `wrangler secret put WEATHER_API_KEY` (secret, not in toml/responses).
- **Allowed CORS origin**: `ALLOWED_ORIGIN` var in `worker/wrangler.toml`, set to your
  exact Pages origin (e.g. `https://calabasse.github.io`, no trailing slash; comma-
  separate multiples).

Endpoints: `GET /api/weather/current`, `/api/weather/history?range=…`,
`/api/weather/health`. Full details in `worker/README.md`.

### Normalized contract (web + future iOS app share it)
```json
{ "stationId":"KVAGAINE55", "status":"online", "observedAtUtc":"…",
  "observedAtLocal":"…", "freshnessMinutes":3, "units":"imperial",
  "current": { "temperature":69.1, "dewpoint":68.7, "humidity":99, "pressure":29.8,
    "windSpeed":0, "windGust":0, "windDirection":208, "rainRate":0, "rainToday":0,
    "uv":0, "solarRadiation":43 },
  "derived": { "heatIndex":null, "wetBulb":null, "pressureTendency":null,
    "rainIntensity":"none", "rain24h":null, "rain72h":null } }
```
The **iOS app** calls the same Worker URL and parses this identical JSON — no key on
the device. Keep response fields additive-only so web and iOS stay in lockstep.

## One-time GitHub Pages setup
1. Create the repo and push (see below).
2. Repo → Settings → Pages → Source: `main` branch, root.
3. Site goes live at `https://<user>.github.io/<repo>/`.

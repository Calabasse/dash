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

## One-time GitHub Pages setup
1. Create the repo and push (see below).
2. Repo → Settings → Pages → Source: `main` branch, root.
3. Site goes live at `https://<user>.github.io/<repo>/`.

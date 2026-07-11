#!/usr/bin/env bash
# deploy.sh — rebuild the public dashboard data on this Mac and push to GitHub Pages.
# Run manually any time, or via the daily launchd job. Network steps are best-effort:
# if VOLM/Withings are unreachable, the last good data is kept and the rest still deploys.
set -uo pipefail

SITE="$HOME/repos/dash-site"
APE="$HOME/forge/projects/APE"
CHAD_OS="$HOME/knowledge/CHAD_OS"
VENV="$APE/.venv311/bin/python"
PED_SRC="$SITE/private/ped-cycles.json"   # owner's exported cycle (gitignored); optional
LOG(){ echo "[$(date '+%H:%M:%S')] $*"; }

cd "$SITE" || { echo "no site dir"; exit 1; }

# 0a) PICK UP a freshly-saved config from Downloads (from the tuning web page).
# Validated, copied into the repo, then stamped so it isn't re-applied next run.
DL="$HOME/Downloads/prescription_config.json"
if [ -f "$DL" ]; then
  if python3 -c "import json,sys; d=json.load(open('$DL')); assert d.get('profiles') and d.get('active_profile')" 2>/dev/null; then
    cp "$DL" "$SITE/prescription_config.json"
    mv "$DL" "$HOME/Downloads/prescription_config.applied-$(date +%Y%m%d-%H%M%S).json"
    LOG "picked up new tuning config from Downloads"
  else
    LOG "Downloads/prescription_config.json invalid — ignored"
  fi
fi

# 0b) PRESCRIPTION CONFIG — push the tuned philosophy/params to the engine
if [ -f "$SITE/prescription_config.json" ]; then
  cp "$SITE/prescription_config.json" "$APE/tools/prescription_config.json"
  LOG "prescription config synced to engine"
fi

# 1) TRAINING — rebuild the card data file. VOLM sync is OPT-IN (--sync only),
# because each sync consumes a short-lived VOLM token. Default deploy just
# republishes the last-synced data — no VOLM call.
if [ "${1:-}" = "--sync" ]; then
  LOG "training: VOLM sync (--sync given)"
  ( cd "$APE" && "$VENV" -c "from app.api.routes.sync import run_sync; run_sync()" ) \
    || LOG "  sync failed (rate limit / offline) — keeping last data"
else
  LOG "training: skipping VOLM sync (no --sync) — republishing last data"
fi
LOG "training: build card data"
( cd "$APE" && "$VENV" tools/build_card_data.py ) \
  || LOG "  build_card_data failed — keeping last data"
[ -f "$CHAD_OS/tools/workout-card.data.js" ] && cp "$CHAD_OS/tools/workout-card.data.js" "$SITE/workout-card.data.js"

# 2) WEIGHT — refresh Withings dashboard (self-contained html), best-effort
LOG "weight: refresh withings"
( cd "$APE" && ./refresh_withings_dashboard.sh --no-fetch ) \
  || LOG "  withings refresh failed — keeping last weight.html"
[ -f "$APE/dashboards/withings_body_composition.html" ] && cp "$APE/dashboards/withings_body_composition.html" "$SITE/weight.html"

# 3) PED — generate ped.html from template, injecting the owner's cycle if present
LOG "ped: render from template"
"$VENV" <<PY
import json, re, pathlib
site = pathlib.Path("$SITE")
tpl  = (site/"templates"/"ped.html").read_text()
src  = pathlib.Path("$PED_SRC")
if src.exists():
    data = json.loads(src.read_text())
    line = "window.PED_DATA = %s;  /* injected by deploy.sh */" % json.dumps(data)
else:
    line = "window.PED_DATA = null;  /* no cycle file — showing demo seed */"
out = re.sub(r'^.*@@PED_DATA@@.*$', line, tpl, count=1, flags=re.M)
(site/"ped.html").write_text(out)
print("  ped.html written (%s)" % ("owner data" if src.exists() else "demo seed"))
PY

# 4) commit + push
LOG "git: commit + push"
git add -A
if git diff --cached --quiet; then
  LOG "  no changes to deploy"
else
  git commit -m "daily refresh $(date '+%Y-%m-%d %H:%M')" >/dev/null
  git push && LOG "deployed." || LOG "  push failed — commit is local"
fi

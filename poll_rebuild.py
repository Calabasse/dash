#!/usr/bin/env python3
"""Poll the rebuild Worker; when a rebuild is queued, run deploy.sh and report back.

Runs ONE poll cycle per invocation — launchd (com.chad.dashsite.poller) drives the
cadence (every 120s). Pull-only: the Mac never accepts inbound connections; it asks
the Worker whether a rebuild was requested and, if so, does the privileged work
(VOLM sync + build + git push, all inside deploy.sh) and reports the result back.

Config — private/rebuild.env (gitignored), or environment:
    WORKER_URL=https://dash-rebuild.<you>.workers.dev
    POLLER_TOKEN=<the same secret set on the Worker via `wrangler secret put`>

Usage:
    poll_rebuild.py            # one poll cycle (what launchd runs)
    poll_rebuild.py --dry-run  # claim + report 'done', but do NOT run deploy.sh
"""
from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path

SITE = Path(__file__).resolve().parent
ENV_FILE = SITE / "private" / "rebuild.env"
DEPLOY = SITE / "deploy.sh"
DATA_JS = SITE / "workout-card.data.js"
LOG = SITE / "poller.log"


def load_cfg() -> dict:
    cfg = {"WORKER_URL": os.environ.get("WORKER_URL", ""),
           "POLLER_TOKEN": os.environ.get("POLLER_TOKEN", "")}
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                cfg[k.strip()] = v.strip().strip('"').strip("'")
    return cfg


def log(msg: str) -> None:
    line = f"[{datetime.now():%Y-%m-%d %H:%M:%S}] {msg}"
    print(line)
    try:
        with LOG.open("a") as f:
            f.write(line + "\n")
    except Exception:
        pass


def api(cfg: dict, path: str, method: str = "GET", body: dict | None = None, token: bool = False) -> dict:
    url = cfg["WORKER_URL"].rstrip("/") + path
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Content-Type", "application/json")
    # Cloudflare's edge 403s the default "Python-urllib" UA as a bot.
    req.add_header("User-Agent", "dash-poller/1.0")
    if token:
        req.add_header("Authorization", "Bearer " + cfg.get("POLLER_TOKEN", ""))
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


def count_sessions() -> int | None:
    try:
        m = re.search(r"window\.PROGRAM\s*=\s*(\{.*\});", DATA_JS.read_text(), re.S)
        return len(json.loads(m.group(1))["sessions"]) if m else None
    except Exception:
        return None


def main() -> int:
    dry = "--dry-run" in sys.argv
    cfg = load_cfg()
    if not cfg.get("WORKER_URL") or not cfg.get("POLLER_TOKEN"):
        log("no WORKER_URL / POLLER_TOKEN (private/rebuild.env) — poller idle")
        return 0

    # 1) Is a rebuild queued?
    try:
        st = api(cfg, "/api/rebuild-status")
    except Exception as e:
        log(f"status check failed: {e}")
        return 0
    if st.get("status") != "queued":
        return 0

    # 2) Claim it (so a later tick — or another machine — won't double-run).
    try:
        claim = api(cfg, "/api/rebuild-claim", method="POST", body={}, token=True)
    except urllib.error.HTTPError as e:
        log(f"claim failed: HTTP {e.code}")
        return 0
    except Exception as e:
        log(f"claim failed: {e}")
        return 0
    if not claim.get("claim"):
        return 0

    # 3) Do the work (or skip it under --dry-run) and report back.
    if dry:
        log("rebuild claimed — DRY RUN, skipping deploy.sh")
        try:
            api(cfg, "/api/rebuild-done", method="POST",
                body={"ok": True, "sessions": count_sessions()}, token=True)
        except Exception as e:
            log(f"report-back failed: {e}")
        return 0

    log("rebuild claimed — running deploy.sh")
    try:
        r = subprocess.run(["/bin/bash", str(DEPLOY)], cwd=str(SITE),
                            capture_output=True, text=True, timeout=900)
        ok = r.returncode == 0
        tail = (r.stdout + r.stderr)[-400:]
    except Exception as e:
        ok, tail = False, str(e)
    sessions = count_sessions()
    log(f"deploy {'ok' if ok else 'FAILED'} — sessions={sessions}")
    try:
        api(cfg, "/api/rebuild-done", method="POST",
            body={"ok": ok, "sessions": sessions, "error": None if ok else tail}, token=True)
    except Exception as e:
        log(f"report-back failed: {e}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())

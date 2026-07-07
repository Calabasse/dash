# Workout card — data workflow

Where the data lives and how it reaches GitHub Pages.

## Source of truth → local DB → card data → GitHub

```mermaid
flowchart TD
  subgraph CLOUD["VOLM cloud"]
    VOLM["api.volm.app<br/>logged workouts = source of truth"]
  end

  subgraph MAC["Mac — the data factory (nothing runs online)"]
    ENV[".env — VOLM_API_KEY<br/>~/forge/projects/APE/"]
    DUCK[("volm.duckdb<br/>raw_workouts + sessions<br/>~/forge/projects/APE/")]
    BUILD["build_card_data.py<br/>reads last ≤7 sessions → JS"]
    DATAJS["workout-card.data.js<br/>~/knowledge/CHAD_OS/tools/"]
    SERVER["server.py on :8787<br/>POST /api/sync · /api/analyze"]
    LIVE["workout-card.html (LIVE)<br/>opened at localhost:8787"]
    DEPLOY["deploy.sh"]
    CRON["launchd 06:30 daily<br/>com.chad.dashsite.deploy"]
    SITE["~/repos/dash-site/<br/>workout.html + workout-card.data.js"]
  end

  subgraph GH["GitHub Pages — public, static, read-only"]
    PAGES["calabasse.github.io/dash/workout.html<br/>(PUBLIC card)"]
  end

  ENV -. key .-> VOLM
  VOLM -->|run_sync| DUCK
  DUCK --> BUILD --> DATAJS --> LIVE

  SERVER -->|"Load from VOLM (live only)"| VOLM
  SERVER --> BUILD

  CRON --> DEPLOY
  DEPLOY -->|"1 VOLM sync"| VOLM
  DEPLOY -->|"2 build"| BUILD
  DEPLOY -->|"3 copy data.js into repo"| SITE
  DEPLOY -->|"4 git commit + push"| PAGES

  classDef gap stroke:#e5534b,stroke-width:2px;
  class PAGES,SERVER gap;
```

## Two cards exist (they had drifted)

| | LIVE card | PUBLIC card |
|---|---|---|
| File | `~/knowledge/CHAD_OS/tools/workout-card.html` | `~/repos/dash-site/workout.html` |
| Served by | `server.py` at `localhost:8787` | GitHub Pages (static) |
| "Load from VOLM" | works → `POST /api/sync` | inert ("static mode") |
| Reaches GitHub? | **No** — only rebuilds the local `data.js` | Yes, but only when `deploy.sh` runs |

## The gap you're feeling

- The public page's **Load from VOLM** button can't do anything: GitHub Pages is
  static, there is no `/api/sync` there, and the `SERVED` guard only allows sync
  from `localhost`.
- The live launcher's button **does** sync VOLM and rebuild the card — but
  `server.py` **never git-pushes**, so the public site is unchanged.
- So today the only paths to update the public "last 4" are: wait for the
  06:30 launchd job, or run `./deploy.sh` by hand.

## Proposed: one-click "Load from VOLM → live on GitHub"

Add `POST /api/deploy` to `server.py` that runs `deploy.sh`, and chain it after a
successful sync in the LIVE card's button. Then: open the live launcher → click
**Load from VOLM** → sync + rebuild + `git push` → public site live in ~1 min.
No secrets leave the Mac; reuses the existing `deploy.sh`.

```mermaid
flowchart LR
  BTN["Load from VOLM<br/>(live card)"] --> SYNC["/api/sync<br/>VOLM → duckdb → data.js"]
  SYNC -->|ok| DEP["/api/deploy<br/>runs deploy.sh"]
  DEP --> PUSH["git push"] --> PAGES["calabasse.github.io/dash<br/>updated"]
  SYNC -->|fail| STOP["surface error, no push"]
```

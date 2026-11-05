// Shared helpers for the baseline capture script and the Playwright specs.
const fs = require('fs');
const path = require('path');

const PORT = 8765;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const PAGES = ['templates/ped.html', 'tracker.html'];
const FIXTURES = path.join(__dirname, '..', 'fixtures');
// Fixed clock so the chart's "today" marker cannot move between runs.
// 2026-11-05 is outside the fixture's date range, so no marker is drawn.
const FIXED_NOW = '2026-11-05T12:00:00Z';

const MODELS = ['bateman', 'mono'];

// Grid used to capture the pre-change contrib() output (I6).
const CONTRIB_GRID = {
  D: [0, 100, 200],
  tau: [-1, 0, 0.125, 0.5, 1, 3.5, 7, 30],
  hl: [0.2, 0.8, 1.5, 5, 7, 14, 20.9],
};

function readState() {
  return fs.readFileSync(path.join(FIXTURES, 'state.json'), 'utf8');
}

// Seed ped_tracker_v1 once per tab, before the page script runs, then leave it alone.
async function seedStorage(context, stateJson) {
  await context.addInitScript(([json]) => {
    if (!sessionStorage.getItem('__seeded')) {
      localStorage.clear();
      if (json !== null) localStorage.setItem('ped_tracker_v1', json);
      sessionStorage.setItem('__seeded', '1');
    }
  }, [stateJson]);
}

// Reads buildSeries() for every model with tail = 0 (R1 procedure).
async function captureSeries(page) {
  return page.evaluate((models) => {
    document.getElementById('tail').value = '0';
    const out = {};
    for (const m of models) {
      document.getElementById('model').value = m;
      const r = buildSeries();
      out[m] = { days: r.days, series: r.series.map(s => ({ label: s.label, vals: s.vals })) };
    }
    return out;
  }, MODELS);
}

module.exports = { PORT, ORIGIN, PAGES, FIXTURES, FIXED_NOW, MODELS, CONTRIB_GRID, readState, seedStorage, captureSeries };

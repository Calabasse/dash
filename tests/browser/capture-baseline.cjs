// One-shot baseline capture, run BEFORE any source change (spec Section 0.5, R1, R7, I6).
// Usage (server must be running from the repo root on PORT):
//   node tests/browser/capture-baseline.cjs
// Writes tests/fixtures/{state.json, baseline.json, contrib-table.json, chart-<page>.png}.
// Refuses to overwrite existing fixtures.
const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');
const H = require('./helpers.cjs');

const out = f => path.join(H.FIXTURES, f);
for (const f of ['state.json', 'baseline.json', 'contrib-table.json']) {
  if (fs.existsSync(out(f))) { console.error(`refusing to overwrite ${f}`); process.exit(1); }
}

(async () => {
  const browser = await chromium.launch();

  // 1. Fixture state: unmodified tracker.html, cleared storage, take load(), replace protocol.
  {
    const ctx = await browser.newContext();
    await H.seedStorage(ctx, null);
    const page = await ctx.newPage();
    await page.goto(`${H.ORIGIN}/tracker.html`);
    const state = await page.evaluate(() => {
      const s = load();
      const conc = n => s.compounds.find(c => c.name === n).conc;
      const row = (comp, dose, freq) => ({ comp, conc: conc(comp), dose, freq, start: '2026-01-05', end: '2026-03-30' });
      s.protocol = [
        row('Testosterone Cypionate', 200, 'Weekly'),
        row('Testosterone Enanthate', 125, 'Twice weekly (E3.5D)'),
        row('Nandrolone Decanoate (Deca)', 100, 'Twice weekly (E3.5D)'),
      ];
      return JSON.stringify(s);
    });
    fs.writeFileSync(out('state.json'), state);
    await ctx.close();
  }
  const stateJson = H.readState();

  // 2. R1 series + R7 screenshots + I6 contrib table, per page.
  const baseline = { capturedFrom: 'pre-change pages', pages: {} };
  let contribTable = null;
  for (const p of H.PAGES) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    await H.seedStorage(ctx, stateJson);
    const page = await ctx.newPage();
    await page.clock.setFixedTime(H.FIXED_NOW);
    await page.goto(`${H.ORIGIN}/${p}`);
    // R7: screenshot first, with page defaults (model, units, tail 28), before captureSeries mutates controls.
    await page.locator('#chart').screenshot({ path: out(`chart-${path.basename(p, '.html')}.png`) });
    baseline.pages[p] = await H.captureSeries(page);
    if (!contribTable) {
      contribTable = await page.evaluate((g) => {
        const rows = [];
        for (const model of ['mono', 'bateman']) for (const D of g.D) for (const tau of g.tau) for (const hl of g.hl)
          rows.push({ D, tau, hl, model, v: contrib(D, tau, hl, model) });
        return rows;
      }, H.CONTRIB_GRID);
    }
    await ctx.close();
  }
  fs.writeFileSync(out('baseline.json'), JSON.stringify(baseline));
  fs.writeFileSync(out('contrib-table.json'), JSON.stringify(contribTable));
  await browser.close();
  console.log('baseline captured:', Object.keys(baseline.pages).join(', '),
    '| series per model:', baseline.pages['tracker.html'].mono.series.length,
    '| samples:', baseline.pages['tracker.html'].mono.days.length,
    '| contrib rows:', contribTable.length);
})().catch(e => { console.error(e); process.exit(1); });

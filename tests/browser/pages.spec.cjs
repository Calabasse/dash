// Browser tests R1-R7 (spec Section 6) against templates/ped.html and tracker.html over HTTP.
const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');
const H = require('./helpers.cjs');

const REPO = path.join(__dirname, '..', '..');
const STATE = H.readState();
const BASELINE = JSON.parse(fs.readFileSync(path.join(H.FIXTURES, 'baseline.json'), 'utf8'));
const CONTRIB = JSON.parse(fs.readFileSync(path.join(H.FIXTURES, 'contrib-table.json'), 'utf8'));

// Open a page with fixed clock and seeded storage (null = cleared). The template is served
// from /templates/, where its relative "pk.js" resolves to /templates/pk.js; in production
// deploy.sh writes ped.html to the root next to pk.js. Tests map that one path to the real file.
async function open(browser, testInfo, page_, stateJson) {
  const ctx = await browser.newContext({ ...testInfo.project.use, baseURL: H.ORIGIN, acceptDownloads: true });
  await ctx.route('**/templates/pk.js', r => r.fulfill({ path: path.join(REPO, 'pk.js'), contentType: 'application/javascript' }));
  await H.seedStorage(ctx, stateJson);
  const page = await ctx.newPage();
  const problems = [];
  page.on('console', m => { if (m.type() === 'error') problems.push('console: ' + m.text()); });
  page.on('pageerror', e => problems.push('pageerror: ' + e.message));
  page.on('requestfailed', r => problems.push('requestfailed: ' + r.url()));
  page.on('response', r => { if (r.status() >= 400) problems.push(`http ${r.status()}: ${r.url()}`); });
  await page.clock.setFixedTime(H.FIXED_NOW);
  await page.goto('/' + page_);
  return { ctx, page, problems };
}
const setNum = async (page, sel, v) => { await page.fill(sel, String(v)); await page.dispatchEvent(sel, 'change'); };
const storage = page => page.evaluate(() => localStorage.getItem('ped_tracker_v1'));

// Every simulator control, once (used by R3 and R5).
async function exerciseSimulator(page) {
  await page.selectOption('#simComp', 'Testosterone Enanthate');
  await page.selectOption('#simComp', 'Sustanon 250 (blend)');
  await page.selectOption('#simComp', 'Testosterone Cypionate');
  await setNum(page, '#simW', 300);
  await page.check('#simScaleQ');
  await setNum(page, '#simW', 150);
  await page.uncheck('#simScaleQ');
  await setNum(page, '#simHl', 6);
  await page.selectOption('#simFreq', 'Twice weekly (E3.5D)');
  await setNum(page, '#simN', 4);
  await setNum(page, '#simQ', 80);
  await setNum(page, '#simDur', 60);
  await page.selectOption('#simUnits', 'pct');
  await page.selectOption('#simUnits', 'mg');
  for (const id of 'ABCD') { await page.uncheck('#simShow' + id); await page.check('#simShow' + id); }
  await page.check('#simTrough'); await page.uncheck('#simTrough');
  await page.locator('#simChart').hover({ position: { x: 200, y: 100 } });
  const dl = page.waitForEvent('download'); await page.click('#simCsvBtn'); await dl;
  await setNum(page, '#simW', -5);                 // invalid input path
  await page.click('#simUseProto');
  await page.click('#simToggle'); await page.click('#simToggle');
  await page.click('#simResetBtn');
}

for (const p of H.PAGES) {
  test.describe(p, () => {
    test(`R1 cycle chart series identical to baseline: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, STATE);
      const now = await H.captureSeries(page);
      expect(JSON.stringify(now)).toBe(JSON.stringify(BASELINE.pages[p]));
      // I6, browser half: exact equality with the table captured from the pre-change function
      const mismatches = await page.evaluate(t => t.filter(r => PK.contrib(r.D, r.tau, r.hl, r.model) !== r.v).length, CONTRIB);
      expect(mismatches).toBe(0);
      expect(problems).toEqual([]);
      await ctx.close();
    });

    test(`R2 fresh load shows sourced Test Cyp half-life: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, null);
      const want = await page.evaluate(() => PK.COMPOUND_META['Testosterone Cypionate'].tHalf);
      const row = page.locator('#libTable tbody tr').filter({ has: page.locator('input[value="Testosterone Cypionate"]') });
      await expect(row.locator('td:nth-child(2) input')).toHaveValue(String(want));
      await expect(page.locator('#simCompInfo')).toContainText('apparent (depot-limited)');
      expect(problems).toEqual([]);
      await ctx.close();
    });

    test(`R3 no console errors or failed requests on load and simulator use: ${p}`, async ({ browser }, ti) => {
      for (const st of [null, STATE]) {
        const { ctx, page, problems } = await open(browser, ti, p, st);
        await exerciseSimulator(page);
        expect(problems).toEqual([]);
        await ctx.close();
      }
    });

    test(`R4 four curves, toggles, units, CSV equals toCSV: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, STATE);
      await expect(page.locator('#simLegend > span')).toHaveCount(5);          // A-D + SS peak
      expect(await page.evaluate(() => simLast.res.map(r => r.id).join(''))).toBe('ABCD');
      const shot = () => page.locator('#simChart').screenshot();
      const before = await shot();
      await page.uncheck('#simShowB');
      await expect(page.locator('#simLegend > span')).toHaveCount(4);
      expect((await shot()).equals(before)).toBe(false);
      await page.selectOption('#simUnits', 'pct');
      expect(await page.evaluate(() => sim.units)).toBe('pct');
      const pctShot = await shot();
      await page.selectOption('#simUnits', 'mg');
      expect((await shot()).equals(pctShot)).toBe(false);
      await page.locator('#simChart').hover({ position: { x: 300, y: 100 } });
      await expect(page.locator('#simHover')).toContainText('t = ');
      // CSV: visible curves only (B is off)
      const dl = page.waitForEvent('download'); await page.click('#simCsvBtn');
      const file = await (await dl).path();
      const got = fs.readFileSync(file, 'utf8');
      const want = await page.evaluate(() => PK.toCSV(simLast.res.filter(r => sim.show[r.id])
        .map(r => ({ id: r.id, points: r.points, ssPeak: simLast.ss.peak }))));
      expect(got).toBe(want);
      expect(got.split('\n')[0]).toBe('scenario,kind,t_days,amount_mg,pct_of_ss_peak');
      expect(new Set(got.trim().split('\n').slice(1).map(l => l[0]))).toEqual(new Set(['A', 'C', 'D']));
      // validation: inline message, nothing computed, no alert
      let dialogs = 0; page.on('dialog', d => { dialogs++; d.dismiss(); });
      await setNum(page, '#simHl', 400);
      await expect(page.locator('#simMsg')).toContainText('Half-life must be between');
      expect(await page.evaluate(() => simLast)).toBeNull();
      expect(dialogs).toBe(0);
      expect(problems).toEqual([]);
      await ctx.close();
    });

    test(`R5 ped_tracker_v1 byte-identical after every simulator control: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, STATE);
      const before = await storage(page);
      expect(before).toBe(STATE);
      await exerciseSimulator(page);
      // "Use my protocol" pre-fills from the first row: Test Cyp 200 mg weekly -> 200 mg/wk, saved hl 5
      await page.click('#simUseProto');
      expect(await page.evaluate(() => [Number(sim.W), Number(sim.hl), sim.freq])).toEqual([200, 5, 'Weekly']);
      await expect(page.locator('#simCompNotice')).toContainText('Your saved library lists Testosterone Cypionate at 5 d');
      expect(await storage(page)).toBe(before);
      expect(await page.evaluate(() => localStorage.getItem('ped_sim_v1') !== null)).toBe(true);
      expect(problems).toEqual([]);
      await ctx.close();
    });

    test(`R5b Use my protocol with an empty protocol fills nothing: ${p}`, async ({ browser }, ti) => {
      const empty = JSON.stringify(Object.assign(JSON.parse(STATE), { protocol: [] }));
      const { ctx, page } = await open(browser, ti, p, empty);
      const w0 = await page.inputValue('#simW');
      await page.click('#simUseProto');
      await expect(page.locator('#simMsg')).toContainText('protocol is empty');
      expect(await page.inputValue('#simW')).toBe(w0);
      expect(await storage(page)).toBe(empty);
      await ctx.close();
    });
  });
}

test('R6 intentional template/tracker differences survive', async ({ browser }, ti) => {
  const tpl = fs.readFileSync(path.join(REPO, 'templates/ped.html'), 'utf8');
  const trk = fs.readFileSync(path.join(REPO, 'tracker.html'), 'utf8');
  expect(tpl).toContain('<a href="index.html"'); expect(trk).not.toContain('<a href="index.html"');
  expect(tpl).toContain('<h1>PED Cycle <span'); expect(trk).toContain('<h1>PED Cycle Tool <span');
  expect(tpl).toContain('Your cycle auto-saves in this browser between visits.');
  expect(trk).toContain('Your cycle stays in this browser between visits');
  expect(tpl.match(/^.*@@PED_DATA@@.*$/gm)).toHaveLength(1); expect(trk).not.toContain('PED_DATA');
  expect(tpl).toContain('protocol:seedProtocol()'); expect(trk).toContain('protocol:[]');
  expect(tpl).toContain('function seedProtocol()'); expect(trk).toContain('function seedProtocol()');
  // runtime: fresh template shows the demo seed rows; fresh tracker starts empty
  for (const [p, rows] of [['templates/ped.html', 2], ['tracker.html', 0]]) {
    const { ctx, page } = await open(browser, ti, p, null);
    await expect(page.locator('#protoTable tbody tr')).toHaveCount(rows);
    await ctx.close();
  }
});

test('R7 cycle chart pixels unchanged (1440x900, dsf 1)', async ({ browser }, ti) => {
  test.skip(ti.project.name !== 'w1440', 'R7 is defined at 1440x900 only');
  for (const p of H.PAGES) {
    const { ctx, page, problems } = await open(browser, ti, p, STATE);
    const shot = await page.locator('#chart').screenshot();
    expect(shot).toMatchSnapshot(`chart-${path.basename(p, '.html')}.png`, { maxDiffPixels: 0, threshold: 0 });
    expect(problems).toEqual([]);
    await ctx.close();
  }
});

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
  await setNum(page, '#simConc', 200);
  await setNum(page, '#simConc', 250);
  await setNum(page, '#simW', 300);
  await setNum(page, '#simHl', 6);
  await page.selectOption('#simFreq', 'Twice weekly (E3.5D)');
  await setNum(page, '#simDur', 60);
  await page.selectOption('#simModel', 'depot');
  await setNum(page, '#simKa', 0.9);
  await page.uncheck('#simCmp'); await page.check('#simCmp');
  await setNum(page, '#simCmpHl', 10);
  await page.locator('#simChart').hover({ position: { x: 150, y: 90 } });
  await page.selectOption('#simModel', 'instant');
  await page.selectOption('#simUnits', 'pct');
  await page.selectOption('#simUnits', 'mg');
  for (const id of 'AD') { await page.uncheck('#simShow' + id); await page.check('#simShow' + id); }
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
      await expect(page.locator('#simLegend > span')).toHaveCount(3);          // A, D, SS peak (comparison is opt-in)
      await expect(page.locator('#simCmp')).not.toBeChecked();
      expect(await page.evaluate(() => simLast.res.map(r => r.id).join(''))).toBe('AD');
      await expect(page.locator('#simShowB')).toHaveCount(0);
      await expect(page.locator('#simN')).toHaveCount(0);
      const shot = () => page.locator('#simChart').screenshot();
      const before = await shot();
      await page.uncheck('#simShowA');
      await expect(page.locator('#simLegend > span')).toHaveCount(2);
      expect((await shot()).equals(before)).toBe(false);
      await page.selectOption('#simUnits', 'pct');
      expect(await page.evaluate(() => sim.units)).toBe('pct');
      const pctShot = await shot();
      await page.selectOption('#simUnits', 'mg');
      expect((await shot()).equals(pctShot)).toBe(false);
      await page.locator('#simChart').hover({ position: { x: 300, y: 100 } });
      await expect(page.locator('#simHover')).toContainText('t = ');
      // CSV: visible curves only (A is off)
      const dl = page.waitForEvent('download'); await page.click('#simCsvBtn');
      const file = await (await dl).path();
      const got = fs.readFileSync(file, 'utf8');
      const want = await page.evaluate(() => PK.toCSV(simLast.res.filter(r => sim.show[r.id])
        .map(r => ({ id: r.id, points: r.points, ssPeak: simLast.ss.peak }))));
      expect(got).toBe(want);
      expect(got.split('\n')[0]).toBe('scenario,kind,t_days,amount_mg,pct_of_ss_peak');
      expect(new Set(got.trim().split('\n').slice(1).map(l => l[0]))).toEqual(new Set(['D']));
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

test.describe('dose plan and explanation', () => {
  for (const p of H.PAGES) {
    test(`R8 up-front dose, daily mg, mL at 250 mg/mL, why-181.6 text: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, null);
      // defaults: 200 mg/wk, daily, t1/2 4.05 d, Test Cyp at 250 mg/mL
      const ss = await page.evaluate(() => PK.steadyState({ W: 200, tau: 1, tHalf: 4.05 }));
      const mg = x => (Math.round(x * 10) / 10).toFixed(1);
      const plan = page.locator('#simPlan');
      await expect(plan).toContainText(`${mg(200 / 7)} mg/day`);
      await expect(plan).toContainText(`${mg(ss.load)} mg`);
      const rows = plan.locator('tbody tr');
      await expect(rows).toHaveCount(2);
      await expect(rows.nth(0).locator('td').nth(1)).toContainText(`${mg(ss.dTau)} mg`);        // A up-front = regular dose
      await expect(rows.nth(1).locator('td').nth(1)).toContainText(`${mg(ss.load)} mg`);        // D up-front = L
      await expect(rows.nth(1).locator('td').nth(1)).toContainText(`${(ss.load / 250).toFixed(3)} mL`);
      await expect(rows.nth(0).locator('td').nth(2)).toContainText(`${(ss.dTau / 250).toFixed(3)} mL`);
      await expect(page.inputValue('#simConc')).resolves.toBe('250');
      // headline injection volumes: up-front and regular dose, nearest whole unit and the mg it delivers
      const uUp = Math.round(ss.load / 250 * 100), uReg = Math.round(ss.dTau / 250 * 100);
      await expect(plan).toContainText(`${(ss.load / 250).toFixed(3)} mL · ${(ss.load / 250 * 100).toFixed(1)} units`);
      await expect(plan).toContainText(`nearest whole unit: ${uUp} units = ${(uUp / 100).toFixed(2)} mL = ${mg(uUp / 100 * 250)} mg`);
      await expect(plan).toContainText(`${(ss.dTau / 250).toFixed(3)} mL · ${(ss.dTau / 250 * 100).toFixed(1)} units`);
      await expect(plan).toContainText(`nearest whole unit: ${uReg} units = ${(uReg / 100).toFixed(2)} mL = ${mg(uReg / 100 * 250)} mg`);
      await expect(plan).toContainText('needs a 1 mL (100-unit) syringe');
      await expect(plan).toContainText(`${(ss.dTau / 250 * 7).toFixed(3)} mL per week`);
      await expect(page.locator('#simWhyBody')).toContainText(`SS peak = ${ss.dTau.toFixed(2)} ÷ ${(1 - ss.r).toFixed(4)} = ${mg(ss.peak)} mg`);
      const why = page.locator('#simWhyBody');
      await expect(why).toContainText(`holds about ${(4.05 / Math.LN2).toFixed(2)} days' worth of dosing`);
      await expect(why).toContainText(`${mg(ss.mean)} mg on average`);
      await expect(why.locator('tr', { hasText: '(average = weekly amount)' })).toContainText('200.0 mg');
      await expect(why).toContainText(`${(7 * Math.LN2).toFixed(2)} days (7 × ln 2)`);
      expect(await why.innerHTML()).toMatch(/^<p><b>200\.0 mg\/wk and 181\.6 mg measure different things/);
      // concentration is remembered per compound and changes only the volumes
      await setNum(page, '#simConc', 200);
      await expect(rows.nth(1).locator('td').nth(1)).toContainText(`${(ss.load / 200).toFixed(3)} mL`);
      await expect(rows.nth(1).locator('td').nth(1)).toContainText(`${mg(ss.load)} mg`);
      expect(await page.evaluate(() => JSON.parse(localStorage.getItem('ped_sim_v1')).concBy['Testosterone Cypionate'])).toBe('200');
      expect(problems).toEqual([]);
      await ctx.close();
    });
  }
});

test('R9b older saves with the comparison on are switched off once', async ({ browser }, ti) => {
  const { ctx, page } = await open(browser, ti, 'tracker.html', null);
  await page.evaluate(() => { localStorage.setItem('ped_sim_v1', JSON.stringify({ cmp: true, W: 300 })); });
  await page.reload();
  expect(await page.evaluate(() => [sim.cmp, Number(sim.W), sim.cmpOffV2])).toEqual([false, 300, true]);
  await page.check('#simCmp'); await page.reload();
  expect(await page.evaluate(() => sim.cmp)).toBe(true);      // a choice made after the switch is kept
  await ctx.close();
});

test.describe('decay model and half-life comparison', () => {
  for (const p of H.PAGES) {
    test(`R9 depot model, sourced ka, half-life comparison: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, null);
      const mg = x => (Math.round(x * 10) / 10).toFixed(1);
      // comparison is opt-in; when ticked for Test Cyp it uses the other end of the sourced range (8 d)
      await expect(page.locator('#simCmpTable')).toBeEmpty();
      await page.check('#simCmp');
      await expect(page.locator('#simLegend')).toContainText('dotted curves: the same doses if the half-life were 8 d');
      const inst8 = await page.evaluate(() => PK.steadyState({ W: 200, tau: 1, tHalf: 8 }));
      const cmp = page.locator('#simCmpTable');
      await expect(cmp).toContainText('half-life 8 d');
      await expect(cmp).toContainText(mg(inst8.load));
      await expect(page.locator('#simKaWrap')).toBeHidden();
      // depot model
      await page.selectOption('#simModel', 'depot');
      await expect(page.locator('#simKaWrap')).toBeVisible();
      expect(await page.inputValue('#simKa')).toBe('1.22');
      await expect(page.locator('#simKaInfo')).toContainText('sourced: Bi 2018');
      const want = await page.evaluate(() => PK.steadyStateAbsorption({ W: 200, tau: 1, tHalf: 4.05, ka: 1.22 }));
      const got = await page.evaluate(() => ({ peak: simLast.ss.peak, first: simLast.res.find(r => r.id === 'D').points[0].a, model: simLast.model }));
      expect(got.model).toBe('depot'); expect(got.peak).toBe(want.peak); expect(got.first).toBe(0);
      await expect(page.locator('#simWhyBody')).toContainText('Depot absorption (ka 1.22 per day)');
      await expect(page.locator('#simWhyBody')).toContainText(`${mg(want.mean)} mg`);
      await expect(page.locator('#simPlan')).toContainText('does not put the body at the plateau on day 0');
      // custom ka is labelled custom and persists; picking the compound again restores the sourced value
      await setNum(page, '#simKa', 0.5);
      await expect(page.locator('#simKaInfo')).toContainText('custom');
      await page.selectOption('#simComp', 'Testosterone Cypionate');
      expect(await page.inputValue('#simKa')).toBe('1.22');
      // comparison off: no table, no ghost legend
      await page.uncheck('#simCmp');
      await expect(cmp).toBeEmpty();
      await expect(page.locator('#simLegend')).not.toContainText('dashed curves');
      expect(problems).toEqual([]);
      await ctx.close();
    });
  }
});

test.describe('single-dose frequency', () => {
  for (const p of H.PAGES) {
    test(`R10 single-dose row: one injection, "once" stat, supply line, old saves migrated: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, STATE);   // fixture saved before the option existed
      expect(await page.evaluate(() => state.frequencies.filter(f => f.days === 0).map(f => f.label))).toEqual(['Single dose (once)']);
      await page.evaluate(() => { state.protocol.push({ comp: 'Testosterone Cypionate', conc: 250, dose: 182, freq: 'Single dose (once)',
        start: '2026-01-05', end: '2026-03-30' }); renderProtocol(); redraw(); });
      const r = await page.evaluate(() => { document.getElementById('model').value = 'mono'; const b = buildSeries(); const s = b.series[3];
        return { events: s.events, weekly: s.weekly, ok: s.vals.every((v, i) => v === PK.contrib(182, b.days[i], s.hl, 'mono')) }; });
      expect(r).toEqual({ events: 1, weekly: 0, ok: true });
      expect(await page.evaluate(() => buildSeries().series.map(s => s.single))).toEqual([false, false, false, true]);
      await expect(page.locator('#stats')).toContainText('mg once');
      await page.getByRole('button', { name: 'Calculate', exact: true }).click();
      await expect(page.locator('#supplyOut')).toContainText('One-time doses');
      await expect(page.locator('#supplyOut')).toContainText('0.728 mL (72.8 units)');
      expect(await page.evaluate(() => document.body.innerText.includes('Infinity'))).toBe(false);
      // simulator: not counted as a malformed preset, and "Use my protocol" explains a single-dose first row
      await expect(page.locator('#simFreqNote')).toBeHidden();
      await page.evaluate(() => { state.protocol.unshift(state.protocol.pop()); });
      await page.click('#simUseProto');
      await expect(page.locator('#simMsg')).toContainText('single dose');
      expect(problems).toEqual([]);
      await ctx.close();
    });
  }
});

test.describe('protocol: single-date rows and curve modes', () => {
  for (const p of H.PAGES) {
    test(`R11 single-dose row has one date; chart curves each row / combined / both: ${p}`, async ({ browser }, ti) => {
      const { ctx, page, problems } = await open(browser, ti, p, STATE);
      // add a one-time Test Cyp dose on the first row's start date (fixture: TC weekly, TE, Deca)
      await page.evaluate(() => { state.protocol.push({ comp: 'Testosterone Cypionate', conc: 250, dose: 182, freq: 'Single dose (once)',
        start: '2026-01-05', end: '2025-12-01' }); renderProtocol(); redraw(); });   // End before Start must not drop the dose
      const last = page.locator('#protoTable tbody tr').nth(3);
      await expect(last.locator('input[type=date]')).toHaveCount(1);
      await expect(last).toContainText('once, no end date');
      const s = await page.evaluate(() => buildSeries().series[3]);
      expect(s.events).toBe(1);
      const legend = page.locator('#legend > span');
      // each row (default): 4 rows + total; duplicate names carry their frequency
      await expect(legend).toHaveCount(5);
      await expect(page.locator('#legend')).toContainText('Testosterone Cypionate · Single dose (once)');
      await expect(page.locator('#legend')).toContainText('Testosterone Cypionate · Weekly');
      const rowsShot = await page.locator('#chart').screenshot();
      // combined per compound: TC rows added into one curve
      await page.selectOption('#curveMode', 'compound');
      await expect(legend).toHaveCount(4);
      await expect(page.locator('#legend')).toContainText('Testosterone Cypionate (combined)');
      expect((await page.locator('#chart').screenshot()).equals(rowsShot)).toBe(false);
      // both: 4 rows + 1 combined + total
      await page.selectOption('#curveMode', 'both');
      await expect(legend).toHaveCount(6);
      // single dose alone still gets a decay window: about 5 half-lives
      await page.evaluate(() => { state.protocol = [state.protocol[3]]; renderProtocol(); document.getElementById('tail').value = '0'; });
      const b = await page.evaluate(() => { const r = buildSeries(); return { last: r.days[r.days.length - 1], hl: r.series[0].hl }; });
      expect(b.last).toBe(Math.ceil(5 * b.hl));
      expect(problems).toEqual([]);
      expect(await page.evaluate(() => localStorage.getItem('ped_tracker_v1'))).toBe(STATE);   // test edits were in memory only
      await ctx.close();
    });
  }
});

test('R6 intentional template/tracker differences survive', async ({ browser }, ti) => {
  const tpl = fs.readFileSync(path.join(REPO, 'templates/ped.html'), 'utf8');
  const trk = fs.readFileSync(path.join(REPO, 'tracker.html'), 'utf8');
  // Home link: listed as an intentional difference in spec v3 section 0.3; superseded 2026-11-05 by
  // Chad ("tracker.html does not have a button to take us back"). Both pages now carry it.
  expect(tpl).toContain('<a href="index.html"'); expect(trk).toContain('<a href="index.html"');
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

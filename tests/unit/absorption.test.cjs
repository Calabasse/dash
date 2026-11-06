// Depot-absorption model tests (A1-A7). Run: node --test "tests/unit/*.test.cjs"
// Expected values come from closed forms or brute-force superposition, not from pk.js internals.
const test = require('node:test');
const assert = require('node:assert/strict');
const PK = require('../../pk.js');

const REL = 1e-9;
const close = (a, e, msg, scale) => {
  const s = scale != null ? scale : Math.max(Math.abs(e), 1e-300);
  assert.ok(Math.abs(a - e) <= REL * s, `${msg}: got ${a}, expected ${e}`);
};
const O = { W: 200, tau: 1, tHalf: 4.05, ka: 1.22, n: 1, Q: 0, duration: 42 };
const sched = (id, o) => PK.scenarioDoses(Object.assign({ id }, O, o || {}));
// independent: body amount by superposition of single-dose Bateman curves
function bateman(mg, k, ka, dt) {
  if (dt < 0) return 0;
  return Math.abs(ka - k) < 1e-12 ? mg * ka * dt * Math.exp(-k * dt)
    : mg * ka / (ka - k) * (Math.exp(-k * dt) - Math.exp(-ka * dt));
}
const superpose = (doses, k, ka, t) => doses.reduce((a, d) => a + bateman(d.mg, k, ka, t - d.t), 0);

test('A1 simulateAbsorption equals superposed single-dose curves', () => {
  for (const [id, o] of [['A', {}], ['D', {}], ['A', { tau: 3.5 }], ['D', { ka: 0.3 }], ['A', { ka: Math.LN2 / 4.05 }]]) {
    const oo = Object.assign({}, O, o), ss = PK.steadyState(oo), s = sched(id, o);
    const pts = PK.simulateAbsorption(s, ss.k, oo.ka, 42, 8).points;
    const scale = Math.max(...pts.map(p => p.a));
    pts.forEach(p => close(p.a, superpose(s.doses, ss.k, oo.ka, p.t), `${id} ${JSON.stringify(o)} t=${p.t}`, scale));
    // body amount is continuous at dose times; it starts at 0
    for (let i = 0; i < pts.length; i++) if (pts[i].kind === 'pre') assert.equal(pts[i + 1].a, pts[i].a);
    assert.equal(pts[0].a, 0);
  }
});

test('A2 steady state: trough, peak, mean, peak time', () => {
  for (const o of [{}, { tau: 7 }, { tau: 3.5, ka: 0.5 }, { ka: Math.LN2 / 4.05 }]) {
    const oo = Object.assign({}, O, o), a = PK.steadyStateAbsorption(oo), k = a.k;
    // brute force: the cycle after many doses
    const many = Array.from({ length: 3000 }, (_, i) => ({ t: i * oo.tau, mg: a.dTau }));
    const t0 = 2999 * oo.tau;
    close(a.trough, superpose(many.slice(0, 2999), k, oo.ka, t0), `trough ${JSON.stringify(o)}`, a.peak);
    let best = 0; for (let i = 0; i <= 4000; i++) best = Math.max(best, superpose(many, k, oo.ka, t0 + oo.tau * i / 4000));
    assert.ok(a.peak >= best - REL * a.peak && a.peak - best <= 1e-6 * a.peak, `peak ${a.peak} vs sampled ${best}`);
    close(superpose(many, k, oo.ka, t0 + a.peakAfter), a.peak, 'value at peakAfter', a.peak);
    close(a.mean, a.dTau / (k * oo.tau), 'mean equals dose rate / k (absorption does not change it)');
    assert.ok(a.trough <= a.mean && a.mean <= a.peak);
  }
});

test('A3 fast absorption converges to the instant-input model', () => {
  const inst = PK.steadyState(O), fast = PK.steadyStateAbsorption(Object.assign({}, O, { ka: 1000 }));
  assert.ok(Math.abs(fast.peak - inst.peak) / inst.peak < 2e-3, `${fast.peak} vs ${inst.peak}`);
  assert.ok(Math.abs(fast.trough - inst.trough) / inst.peak < 2e-3);
});

test('A4 interval peaks, AUC and thresholds against brute force', () => {
  for (const [id, o] of [['A', {}], ['D', {}], ['A', { tau: 7 }], ['D', { tau: 3.5, ka: 0.6 }]]) {
    const oo = Object.assign({}, O, o), a = PK.steadyStateAbsorption(oo), s = sched(id, o);
    const m = PK.metricsAbsorption(s, a.k, oo.ka, 42, a);
    // interval peaks by dense sampling
    s.doses.forEach((d, i) => {
      const end = i + 1 < s.doses.length ? s.doses[i + 1].t : 42;
      let best = 0; for (let q = 0; q <= 2000; q++) best = Math.max(best, superpose(s.doses, a.k, oo.ka, d.t + (end - d.t) * q / 2000));
      assert.ok(m.peaks[i] >= best - REL * a.peak && m.peaks[i] - best <= 1e-6 * a.peak, `${id} peak ${i + 1}`);
    });
    // AUC: per-dose closed-form integral to the end of the chart
    const auc = s.doses.reduce((acc, d) => {
      const T = 42 - d.t, k = a.k, ka = oo.ka;
      return acc + d.mg * ka / (ka - k) * ((1 - Math.exp(-k * T)) / k - (1 - Math.exp(-ka * T)) / ka);
    }, 0);
    close(m.auc, auc, `${id} AUC`);
    // thresholds: explicit full-interval peaks over a long horizon
    const amt = j => (id === 'D' && j === 1 ? a.load : a.dTau);
    const long = Array.from({ length: 1500 }, (_, i) => ({ t: i * oo.tau, mg: amt(i + 1) }));
    const P = long.slice(0, 1400).map((d, i) => {
      let best = 0; const sub = long.slice(0, i + 1);
      for (let q = 0; q <= 400; q++) best = Math.max(best, superpose(sub, a.k, oo.ka, d.t + oo.tau * q / 400));
      return best;
    });
    m.thresholds.forEach(th => {
      const lo = th.p * a.peak, hi = (2 - th.p) * a.peak;
      const first = P.findIndex(v => v >= lo * (1 + 1e-7)) + 1;
      let entry = P.length; while (entry > 1 && P[entry - 2] >= lo * (1 + 1e-7) && P[entry - 2] <= hi) entry--;
      assert.ok(Math.abs(th.firstCrossing.index - first) <= 1, `${id} ${JSON.stringify(o)} p=${th.p} first ${th.firstCrossing.index} vs ${first}`);
      assert.ok(Math.abs(th.sustainedEntry.index - entry) <= 1, `${id} ${JSON.stringify(o)} p=${th.p} entry ${th.sustainedEntry.index} vs ${entry}`);
    });
  }
});

test('A5 D under absorption does not sit at the plateau from day 0', () => {
  const a = PK.steadyStateAbsorption(O), s = sched('D');
  const pts = PK.simulateAbsorption(s, a.k, O.ka, 42, 8).points;
  assert.equal(pts[0].a, 0);
  const day1 = pts.find(p => p.t === 1 && p.kind === 'pre').a;
  assert.ok(day1 < 0.9 * a.peak, `day-1 body amount ${day1} is below 90% of SS peak ${a.peak}`);
  close(a.tmaxSingle, Math.log(O.ka / a.k) / (O.ka - a.k), 'single-dose Tmax');
});

test('A6 validation: ka', () => {
  for (const ka of [0, -1, NaN, Infinity, 1001]) {
    assert.throws(() => PK.steadyStateAbsorption(Object.assign({}, O, { ka })), RangeError, String(ka));
    assert.throws(() => PK.simulateAbsorption(sched('A'), 0.17, ka, 42, 8), RangeError, String(ka));
  }
  PK.steadyStateAbsorption(Object.assign({}, O, { ka: 1000 }));
  assert.throws(() => PK.steadyStateAbsorption(Object.assign({}, O, { ka: 1e-7, tau: 1 })), RangeError);
});

test('A7 Test Cyp absorption metadata and illustrative rule', () => {
  const m = PK.COMPOUND_META['Testosterone Cypionate'];
  assert.equal(m.ka, 1.22); assert.deepEqual([...m.kaRange], [0.785, 2.67]);
  assert.ok(m.kaRange[0] <= m.ka && m.ka <= m.kaRange[1]);
  close(PK.illustrativeKa(4.05), Math.LN2 / 0.6, 'cycle-chart Bateman rule at 4.05 d');
  close(PK.illustrativeKa(1), Math.LN2 / 0.4, 'rule for short half-lives');
  close(PK.interpAt([{ t: 0, a: 0 }, { t: 2, a: 4 }], 0.5), 1, 'interpAt');
});

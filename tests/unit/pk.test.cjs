// Unit tests U1-U9 for pk.js (spec Section 6). Run: node --test tests/
// Expected values are computed from the Section 2 formulas, never from the reference literals.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const PK = require('../../pk.js');

const ROOT = path.join(__dirname, '..', '..');
const REL = 1e-9;
function close(actual, expected, msg, scale) {
  const s = scale != null ? scale : Math.max(Math.abs(expected), 1e-300);
  assert.ok(Math.abs(actual - expected) <= REL * s, `${msg}: got ${actual}, expected ${expected}`);
}
const DEF = { W: 200, tau: 1, tHalf: 8, n: 3, Q: 100, duration: 42 };
const sched = (id, o) => PK.scenarioDoses(Object.assign({ id }, DEF, o || {}));
function formulas(W, tau, tHalf) {
  const k = Math.LN2 / tHalf, r = Math.exp(-k * tau), D = W * tau / 7, peak = D / (1 - r);
  return { k, r, D, peak, trough: peak * r, L: peak };
}

test('U1 steady-state quantities, daily and weekly', () => {
  for (const [W, tau, tHalf] of [[200, 1, 8], [200, 7, 8]]) {
    const ss = PK.steadyState({ W, tau, tHalf }), f = formulas(W, tau, tHalf);
    close(ss.k, f.k, 'k'); close(ss.r, f.r, 'r'); close(ss.dTau, f.D, 'D_tau');
    close(ss.peak, f.peak, 'SS_peak'); close(ss.trough, f.trough, 'SS_trough'); close(ss.load, f.L, 'L');
    close(ss.mean, f.D / (f.k * tau), 'interval mean');
    close(ss.residence, tHalf / Math.LN2, 'residence = t_half / ln 2');
    close(ss.mean, (W / 7) * ss.residence, "average = daily amount x days' worth held");
    const eq = PK.steadyState({ W, tau, tHalf: PK.WEEK_EQUIV_HALF_LIFE });
    close(eq.mean, W, 'average equals weekly amount at t_half = 7 ln 2');
    const m = PK.metrics(sched('A', { W, tau }), ss.k, 42, ss);
    close(m.loadOverD, f.L / f.D, 'L/D'); close(m.loadOverW, f.L / W, 'L/W');
  }
  // display rounding rules
  assert.equal(PK.FMT.mg(344.2508487), '344.3');
  assert.equal(PK.FMT.ratio(12.0487797), '12.05');
  assert.equal(PK.FMT.pct(60.2262111), '60.2');
  assert.equal(PK.FMT.days(2.25), '2.3');
});

test('U2 scenario dose lists: counts, times, amounts, replace-not-add', () => {
  const f = formulas(200, 1, 8);
  const A = sched('A'), B = sched('B'), C = sched('C'), D = sched('D');
  for (const s of [A, B, C, D]) {
    assert.equal(s.doses.length, 42);
    s.doses.forEach((d, j) => { assert.equal(d.i, j + 1); close(d.t, j * 1, 't', 1); });
  }
  A.doses.forEach(d => close(d.mg, f.D, 'A mg'));
  assert.equal(B.doses[0].mg, 200, 'B dose 1 = W, not W + D');
  B.doses.slice(1).forEach(d => close(d.mg, f.D, 'B mg'));
  C.doses.slice(0, 3).forEach(d => assert.equal(d.mg, 100, 'C loading = Q, not Q + D'));
  C.doses.slice(3).forEach(d => close(d.mg, f.D, 'C mg'));
  close(D.doses[0].mg, f.L, 'D dose 1 = L');
  D.doses.slice(1).forEach(d => close(d.mg, f.D, 'D mg'));
  assert.deepEqual([A, B, C, D].map(s => s.maintStart), [1, 2, 4, 2]);
  // uneven division and endpoint exclusion
  const tw = sched('A', { tau: 3.5 });
  assert.equal(tw.doses.length, 12); close(tw.doses[11].t, 38.5, 'last t');
  const wk = sched('A', { tau: 7 });
  assert.equal(wk.doses.length, 6, 'dose at t = duration (42) is excluded');
});

test('U3 scenario C post-dose 3 value and Q scaling', () => {
  const f = formulas(200, 1, 8), ss = PK.steadyState({ W: 200, tau: 1, tHalf: 8 });
  const m = PK.metrics(sched('C'), ss.k, 42, ss);
  close(m.peaks[2], 100 * (1 + f.r + f.r * f.r), 'post-dose 3');
  assert.equal(PK.scaleQ(100, 200, 300, true), 150);
  assert.equal(PK.scaleQ(100, 200, 300, false), 100);
  assert.equal(PK.scaleQ(100, 0, 300, true), 100, 'no scaling from an invalid old W');
});

test('U4 overshoot fixture (C, Q = 200)', () => {
  const f = formulas(200, 1, 8), ss = PK.steadyState({ W: 200, tau: 1, tHalf: 8 });
  const m = PK.metrics(sched('C', { Q: 200 }), ss.k, 42, ss);
  const max = 200 * (1 + f.r + f.r * f.r);
  close(m.maxPost, max, 'max'); close(m.peaks[2], max, 'max is at dose 3');
  assert.equal(m.peaks.indexOf(Math.max(...m.peaks)), 2);
  close(m.overshootPct, (max / f.peak - 1) * 100, 'overshoot %');
});

// brute force: explicit peaks over a long horizon, scanned directly
function bruteThresholds(id, o, p) {
  const f = formulas(o.W, o.tau, o.tHalf);
  const amt = j => (id === 'B' && j === 1 ? o.W : id === 'C' && j <= o.n ? o.Q : id === 'D' && j === 1 ? f.L : f.D);
  const P = []; for (let j = 1; j <= 20000; j++) P.push((P.length ? P[P.length - 1] * f.r : 0) + amt(j));
  const lo = p * f.peak, hi = (2 - p) * f.peak;
  const first = P.findIndex(v => v >= lo) + 1;
  let entry = P.length; while (entry > 1 && P[entry - 2] >= lo && P[entry - 2] <= hi) entry--;
  return { first, entry };
}
test('U5 first crossing vs sustained entry, incl. entry beyond duration', () => {
  const cases = [['A', {}], ['C', {}], ['D', {}], ['C', { Q: 200 }]];
  let sawBeyond = false, sawDiffer = false;
  for (const [id, over] of cases) {
    const o = Object.assign({}, DEF, over), ss = PK.steadyState(o);
    const m = PK.metrics(sched(id, over), ss.k, o.duration, ss);
    for (const th of m.thresholds) {
      const b = bruteThresholds(id, o, th.p);
      assert.equal(th.firstCrossing.index, b.first, `${id} ${JSON.stringify(over)} p=${th.p} first`);
      assert.equal(th.sustainedEntry.index, b.entry, `${id} ${JSON.stringify(over)} p=${th.p} entry`);
      close(th.sustainedEntry.t, (b.entry - 1) * o.tau, 'entry time', 1);
      assert.equal(th.sustainedEntry.beyondChart, b.entry > 42);
      if (th.sustainedEntry.beyondChart) sawBeyond = true;
      if (b.first !== b.entry) sawDiffer = true;
    }
  }
  assert.ok(sawBeyond, 'at least one sustained entry beyond duration');
  assert.ok(sawDiffer, 'overshoot fixture separates first crossing from sustained entry');
  // loading phase longer than the chart: C with n = 60 on a 10-day chart
  const o = Object.assign({}, DEF, { n: 60, Q: 50, duration: 10 }), ss = PK.steadyState(o);
  const m = PK.metrics(PK.scenarioDoses(Object.assign({ id: 'C' }, o)), ss.k, 10, ss);
  m.thresholds.forEach(th => assert.equal(th.sustainedEntry.index, bruteThresholds('C', o, th.p).entry));
});

test('U6 AUC, cumulative input, endpoint dose excluded', () => {
  for (const [id, over] of [['A', {}], ['B', { tau: 3.5 }], ['C', { tau: 7 }], ['D', { tau: 2 }]]) {
    const o = Object.assign({}, DEF, over), ss = PK.steadyState(o), s = sched(id, over);
    const m = PK.metrics(s, ss.k, o.duration, ss);
    // per-dose analytic integral, independent of the per-interval sum in pk.js
    const expected = s.doses.reduce((a, d) => a + d.mg * (1 - Math.exp(-ss.k * (o.duration - d.t))) / ss.k, 0);
    close(m.auc, expected, `${id} AUC`);
    close(m.cumulativeInput, s.doses.reduce((a, d) => a + d.mg, 0), `${id} cumulative`);
  }
  const ss = PK.steadyState({ W: 200, tau: 7, tHalf: 8 });
  const m = PK.metrics(sched('A', { tau: 7 }), ss.k, 42, ss);
  close(m.cumulativeInput, 6 * 200, 'weekly over 42 d: 6 doses, not 7');
});

test('U7 validation: RangeError on bad values, boundaries accepted', () => {
  const ok = { W: 200, tau: 1, tHalf: 8 };
  const bad = (o) => assert.throws(() => PK.steadyState(Object.assign({}, ok, o)), RangeError, JSON.stringify(o));
  bad({ W: 0 }); bad({ W: -1 }); bad({ W: NaN }); bad({ W: Infinity });
  bad({ tau: 0 }); bad({ tau: NaN });
  bad({ tHalf: 0.049 }); bad({ tHalf: 365.1 }); bad({ tHalf: NaN });
  PK.steadyState(Object.assign({}, ok, { tHalf: 0.05 })); PK.steadyState(Object.assign({}, ok, { tHalf: 365 }));
  PK.steadyState(Object.assign({}, ok, { W: 1e-9 }));   // smallest positive W class: accepted
  // near-singular: 1 - r < 1e-6
  const tSing = 1e-6 * 365 / Math.LN2 * 0.5;          // k * tau below 1e-6
  assert.throws(() => PK.steadyState({ W: 200, tau: tSing, tHalf: 365 }), RangeError);
  PK.steadyState({ W: 200, tau: 1e-6 * 365 / Math.LN2 * 2, tHalf: 365 });  // just above, accepted

  const sd = (o) => PK.scenarioDoses(Object.assign({ id: 'C' }, DEF, o));
  const sbad = (o) => assert.throws(() => sd(o), RangeError, JSON.stringify(o));
  sbad({ id: 'E' }); sbad({ id: 'a' });
  sbad({ n: 0 }); sbad({ n: 61 }); sbad({ n: 2.5 }); sd({ n: 1 }); sd({ n: 60 });
  sbad({ Q: -0.1 }); sbad({ Q: NaN }); sd({ Q: 0 });
  sbad({ duration: 0 }); sbad({ duration: 1001 }); sbad({ duration: 4.5 }); sd({ duration: 1 }); sd({ duration: 1000 });
  sd({ tau: 0.2, duration: 1000 });                    // exactly 5000 doses: accepted
  sbad({ tau: 0.19, duration: 1000 });                 // 5264 doses: refused
  assert.equal(sd({ tau: 0.2, duration: 1000 }).doses.length, 5000);

  const s = sd({}), ss = PK.steadyState(ok);
  for (const spd of [0, 49, 2.5, NaN]) assert.throws(() => PK.simulate(s, ss.k, 42, spd), RangeError, String(spd));
  PK.simulate(s, ss.k, 42, 1); PK.simulate(s, ss.k, 42, 48);
});

function parseCSV(text) {
  const lines = text.split('\n'); assert.equal(lines.pop(), '', 'trailing newline');
  return { header: lines[0], rows: lines.slice(1).map(l => l.split(',')) };
}
test('U8 toCSV deterministic, exact header, ordered rows, values recoverable', () => {
  const ss = PK.steadyState({ W: 200, tau: 3.5, tHalf: 8 });
  const make = () => ['D', 'B', 'A', 'C'].map(id => {
    const s = sched(id, { tau: 3.5 });
    return { id, points: PK.simulate(s, ss.k, 42, 2).points, ssPeak: ss.peak };
  });
  const a = PK.toCSV(make()), b = PK.toCSV(make());
  assert.equal(a, b, 'identical bytes');
  assert.ok(!a.includes('\r'), 'LF only');
  const { header, rows } = parseCSV(a);
  assert.equal(header, 'scenario,kind,t_days,amount_mg,pct_of_ss_peak');
  const order = { pre: 0, sample: 1, post: 2 };
  for (let i = 1; i < rows.length; i++) {
    const [s0, k0, t0] = rows[i - 1], [s1, k1, t1] = rows[i];
    assert.ok(s0 < s1 || (s0 === s1 && (+t0 < +t1 || (+t0 === +t1 && order[k0] < order[k1]))), `row order at ${i}`);
  }
  assert.deepEqual([...new Set(rows.map(r => r[0]))], ['A', 'B', 'C', 'D']);
  const res = make().sort((x, y) => (x.id < y.id ? -1 : 1));
  const flat = res.flatMap(r => r.points.map(p => ({ id: r.id, ...p })));
  assert.equal(rows.length, flat.length);
  rows.forEach((r, i) => {
    const p = flat[i];
    assert.equal(r[0], p.id); assert.equal(r[1], p.kind);
    const rel6 = (s, v) => assert.ok(Math.abs(+s - v) <= 5e-6 * Math.abs(v) + 1e-300, `${s} vs ${v}`);
    rel6(r[2], p.t); rel6(r[3], p.a); rel6(r[4], p.a / ss.peak * 100);
    assert.ok(!/[eE]/.test(r.slice(2).join(',')), 'no exponent notation');
  });
  // empty pct field when ssPeak is 0
  const z = parseCSV(PK.toCSV([{ id: 'A', points: [{ t: 0, a: 1, kind: 'sample' }], ssPeak: 0 }]));
  assert.equal(z.rows[0][4], '');
});

test('U9 both pages seed Testosterone Cypionate at the COMPOUND_META value', () => {
  const meta = PK.COMPOUND_META['Testosterone Cypionate'];
  const re = /\{name:"Testosterone Cypionate", cls:"Test", hl:([0-9.]+),/;
  for (const f of ['templates/ped.html', 'tracker.html']) {
    const m = fs.readFileSync(path.join(ROOT, f), 'utf8').match(re);
    assert.ok(m, `${f}: seed row found`);
    if (meta) assert.equal(+m[1], meta.tHalf, `${f} seed equals COMPOUND_META`);
    else assert.equal(+m[1], 5, `${f} seed still hl:5`);
  }
  assert.ok(Object.isFrozen(PK.COMPOUND_META) && Object.isFrozen(meta) && Object.isFrozen(meta.sources));
});

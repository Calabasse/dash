// Invariant tests I1-I6 for pk.js (spec Section 6). Run: node --test tests/
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const PK = require('../../pk.js');

const REL = 1e-9;
const DEF = { W: 200, tau: 1, tHalf: 8, n: 3, Q: 100, duration: 42 };
const ss = PK.steadyState(DEF);
const sched = (id, o) => PK.scenarioDoses(Object.assign({ id }, DEF, o || {}));
const run = (s, dur, spd) => PK.simulate(s, ss.k, dur || 42, spd || 8).points;
const posts = pts => pts.filter(p => p.kind === 'post');
const pres = pts => pts.filter(p => p.kind === 'pre');

test('I1 scenario A peaks follow SS_peak(1 - r^j)', () => {
  posts(run(sched('A'))).forEach((p, i) => {
    const want = ss.peak * (1 - Math.pow(ss.r, i + 1));
    assert.ok(Math.abs(p.a - want) <= REL * ss.peak, `dose ${i + 1}: ${p.a} vs ${want}`);
  });
});

test('I2 scenario D sits on the steady-state cycle from dose 1', () => {
  const pts = run(sched('D'));
  posts(pts).forEach((p, i) => assert.ok(Math.abs(p.a - ss.peak) <= REL * ss.peak, `post ${i + 1}`));
  const pr = pres(pts);
  assert.equal(pr[0].a, 0, 'pre-dose 1 is 0');
  pr.slice(1).forEach((p, i) => assert.ok(Math.abs(p.a - ss.trough) <= REL * ss.peak, `pre ${i + 2}`));
});

test('I3 every scenario converges to the same cycle after maintStart', () => {
  for (const [id, o] of [['A', {}], ['B', {}], ['C', {}], ['C', { Q: 200 }], ['C', { Q: 0 }], ['D', {}], ['B', { tau: 3.5 }]]) {
    const s = sched(id, o), S = PK.steadyState(Object.assign({}, DEF, o));
    const P = posts(PK.simulate(s, S.k, 42, 8).points).map(p => p.a), m = s.maintStart;
    for (let j = m; j <= P.length; j++) {
      const lhs = P[j - 1] - S.peak, rhs = (P[m - 1] - S.peak) * Math.pow(S.r, j - m);
      assert.ok(Math.abs(lhs - rhs) <= REL * S.peak, `${id} ${JSON.stringify(o)} j=${j}`);
    }
  }
});

test('I4 doses add exactly their mg; amount never rises between doses', () => {
  for (const [id, o] of [['A', {}], ['B', {}], ['C', {}], ['C', { Q: 0 }], ['D', {}], ['A', { tau: 3.5 }]]) {
    const pts = PK.simulate(sched(id, o), PK.steadyState(Object.assign({}, DEF, o)).k, 42, 8).points;
    const doses = sched(id, o).doses;
    let di = 0;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (p.kind === 'pre') {
        const q = pts[i + 1];
        assert.equal(q.kind, 'post'); assert.equal(q.t, p.t);
        assert.ok(Math.abs((q.a - p.a) - doses[di].mg) <= REL * Math.max(1, q.a), `${id} dose ${di + 1} step`);
        di++;
      }
      if (i > 0 && p.kind !== 'post') {
        const prev = pts[i - 1];
        assert.ok(p.t > prev.t, 'time strictly increases between events');
        assert.ok(p.a <= prev.a, `${id} rose between doses at t=${p.t}`);
        if (prev.a > 0) assert.ok(p.a < prev.a, `${id} not strictly decreasing at t=${p.t}`);
      }
    }
    assert.equal(di, doses.length, 'every dose emitted pre then post');
  }
});

test('I5 deterministic, and scenarios independent of each other', () => {
  const all = o => ['A', 'B', 'C', 'D'].map(id => run(sched(id, o)));
  assert.deepEqual(all({}), all({}));
  const base = all({}), changed = all({ Q: 250, n: 5 });   // n and Q only affect scenario C
  assert.deepEqual(changed[0], base[0]); assert.deepEqual(changed[1], base[1]); assert.deepEqual(changed[3], base[3]);
  assert.notDeepEqual(changed[2], base[2]);
});

test('I6 contrib matches the table captured from the pre-change inline function', () => {
  const table = require(path.join(__dirname, '..', 'fixtures', 'contrib-table.json'));
  assert.equal(table.length, 336);
  // The table was captured in Chromium. Node's Math.exp can differ from Chromium's by 1 ULP
  // (observed: 22 of 336 rows, max relative 6.9e-16), so Node uses the spec's 1e-9 relative
  // tolerance. The browser suite repeats this check with exact equality in Chromium.
  for (const row of table) {
    const v = PK.contrib(row.D, row.tau, row.hl, row.model);
    assert.ok(Math.abs(v - row.v) <= REL * Math.max(Math.abs(row.v), 1e-300), JSON.stringify(row) + ' got ' + v);
  }
  assert.deepEqual([...new Set(table.map(r => r.model))].sort(), ['bateman', 'mono']);
});

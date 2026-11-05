/* pk.js: shared pharmacokinetic math for ped.html and tracker.html.
 * Pure functions only: no DOM, no page state, no clock. Loaded with <script src="pk.js">
 * in the browser (exposes window.PK) and with require() in Node tests.
 *
 * Two models live here:
 *  1. The cycle chart's per-dose curve, contrib() ("mono" decay or the illustrative
 *     "bateman" absorption shape), and protocolSeries(), which sums it per protocol row.
 *  2. The simulator's reference model: an effective apparent-decay model with
 *     instantaneous input and first-order decay, k = ln 2 / t_half_apparent.
 *     With a depot-limited half-life this is phenomenological, not mechanistic.
 */
(function (root) {
  'use strict';

  // ---------------------------------------------------------------- cycle chart
  // Contribution of a single dose D given tau days ago. Moved verbatim from the pages.
  function contrib(D, tau, hl, model) {
    if (tau < 0) return 0;
    const ke = Math.LN2 / hl;                 // ester / elimination rate
    if (model === "mono") return D * Math.exp(-ke * tau);
    // Bateman: absorption (fast) + ester decay (slow terminal). ka>ke.
    const riseHl = Math.min(0.6, hl * 0.4);   // absorption half-life (illustrative, unsourced)
    const ka = Math.LN2 / riseHl;
    if (Math.abs(ka - ke) < 1e-6) return D * ke * tau * Math.exp(-ke * tau);
    const f = ka / (ka - ke) * (Math.exp(-ke * tau) - Math.exp(-ka * tau));
    return D * f;
  }

  // Injection day offsets within [startOff, endOff]. Same float accumulation as the
  // original page loop, so the cycle chart's values stay bit-identical.
  function doseTimes(startOff, endOff, intervalDays) {
    const events = [];
    for (let t = startOff; t <= endOff + 1e-6; t += intervalDays) events.push(t);
    return events;
  }

  // rows: [{dose, hl, startOff, endOff, intervalDays}], opts: {days[], model}.
  // Returns one values array per row, in row order.
  function protocolSeries(rows, opts) {
    const days = opts.days, model = opts.model;
    return rows.map(function (p) {
      const events = doseTimes(p.startOff, p.endOff, p.intervalDays);
      const dose = p.dose, hl = p.hl;
      return days.map(function (d) {
        let sum = 0;
        for (const ev of events) { if (ev <= d) sum += contrib(dose, d - ev, hl, model); }
        return sum;
      });
    });
  }

  // ---------------------------------------------------------------- validation
  const LIMITS = Object.freeze({
    tHalfMin: 0.05, tHalfMax: 365, nMin: 1, nMax: 60, durationMin: 1, durationMax: 1000,
    maxDoses: 5000, singular: 1e-6, spdMin: 1, spdMax: 48,
  });
  const fin = v => typeof v === 'number' && Number.isFinite(v);
  function need(ok, msg) { if (!ok) throw new RangeError(msg); }
  function checkW(W) { need(fin(W) && W > 0, 'Weekly amount must be a number greater than 0.'); }
  function checkTau(tau) { need(fin(tau) && tau > 0, 'Dosing interval must be a number of days greater than 0.'); }
  function checkTHalf(t) {
    need(fin(t) && t >= LIMITS.tHalfMin && t <= LIMITS.tHalfMax,
      'Half-life must be between ' + LIMITS.tHalfMin + ' and ' + LIMITS.tHalfMax + ' days.');
  }
  function checkN(n) {
    need(Number.isInteger(n) && n >= LIMITS.nMin && n <= LIMITS.nMax,
      'Loading dose count n must be a whole number from ' + LIMITS.nMin + ' to ' + LIMITS.nMax + '.');
  }
  function checkQ(Q) { need(fin(Q) && Q >= 0, 'Loading amount Q must be a number of at least 0.'); }
  function checkDuration(d) {
    need(Number.isInteger(d) && d >= LIMITS.durationMin && d <= LIMITS.durationMax,
      'Duration must be a whole number of days from ' + LIMITS.durationMin + ' to ' + LIMITS.durationMax + '.');
  }

  // ---------------------------------------------------------------- reference model
  function steadyState(o) {
    const W = o.W, tau = o.tau, tHalf = o.tHalf;
    checkW(W); checkTau(tau); checkTHalf(tHalf);
    const k = Math.LN2 / tHalf;
    const r = Math.exp(-k * tau);
    need(1 - r >= LIMITS.singular,
      'Interval is too short for this half-life (1 - r < 1e-6); steady state is not computed.');
    const dTau = W * tau / 7;
    const peak = dTau / (1 - r);
    return { k: k, r: r, dTau: dTau, peak: peak, trough: peak * r, load: peak };
  }

  // Amount of dose number i (one-based) for a scenario. Loading amounts replace the
  // scheduled dose, never add to it.
  function doseAmount(id, i, W, dTau, n, Q, L) {
    if (id === 'B' && i === 1) return W;
    if (id === 'C' && i <= n) return Q;
    if (id === 'D' && i === 1) return L;
    return dTau;
  }
  const MAINT_START = { A: () => 1, B: () => 2, C: n => n + 1, D: () => 2 };

  function scenarioDoses(o) {
    need(['A', 'B', 'C', 'D'].indexOf(o.id) >= 0, 'Scenario id must be A, B, C or D.');
    const ss = steadyState(o);                      // validates W, tau, tHalf, near-singular
    checkN(o.n); checkQ(o.Q); checkDuration(o.duration);
    const tau = o.tau, duration = o.duration;
    const count = Math.ceil(duration / tau - 1e-9);  // doses at i*tau strictly before duration
    need(count <= LIMITS.maxDoses,
      'Too many doses (' + count + '); the limit is ' + LIMITS.maxDoses + '. Use a longer interval or a shorter duration.');
    const doses = [];
    for (let j = 0; j < count; j++) {
      const t = j * tau;
      if (t >= duration) break;
      doses.push({ i: j + 1, t: t, mg: doseAmount(o.id, j + 1, o.W, ss.dTau, o.n, o.Q, ss.load) });
    }
    return { doses: doses, tau: tau, dTau: ss.dTau, maintStart: MAINT_START[o.id](o.n),
             // extra, read-only context used by metrics() to extend the schedule past the chart
             _scn: { id: o.id, W: o.W, n: o.n, Q: o.Q, L: ss.load } };
  }

  // Q scaling for scenario C ("scale Q with weekly amount").
  function scaleQ(Q, wOld, wNew, on) {
    if (!on || !(wOld > 0) || !fin(wNew)) return Q;
    return Q * wNew / wOld;
  }

  function simulate(schedule, k, duration, samplesPerDay) {
    need(Number.isInteger(samplesPerDay) && samplesPerDay >= LIMITS.spdMin && samplesPerDay <= LIMITS.spdMax,
      'Samples per day must be a whole number from ' + LIMITS.spdMin + ' to ' + LIMITS.spdMax + '.');
    const spd = samplesPerDay, nS = Math.round(duration * spd);
    const doses = schedule.doses;
    const skip = new Set();
    doses.forEach(d => { const j = Math.round(d.t * spd); if (Math.abs(j / spd - d.t) < 1e-9) skip.add(j); });
    // merged event list: samples and doses, in time order
    const ev = [];
    for (let j = 0; j <= nS; j++) if (!skip.has(j)) ev.push({ t: j / spd, dose: null });
    doses.forEach(d => ev.push({ t: d.t, dose: d }));
    ev.sort((a, b) => a.t - b.t || (a.dose ? -1 : 1));
    const points = [];
    let S = 0, T = 0;
    for (const e of ev) {
      const a = S * Math.exp(-k * (e.t - T));
      if (e.dose) {
        points.push({ t: e.t, a: a, kind: 'pre' });
        S = a + e.dose.mg; T = e.t;
        points.push({ t: e.t, a: S, kind: 'post' });
      } else {
        points.push({ t: e.t, a: a, kind: 'sample' });
      }
    }
    return { points: points };
  }

  // Exact post-dose peaks for the doses on the chart.
  function postPeaks(schedule, k) {
    const out = []; let S = 0, T = 0;
    schedule.doses.forEach(d => { S = S * Math.exp(-k * (d.t - T)) + d.mg; T = d.t; out.push(S); });
    return out;
  }

  // Smallest m >= 0 with |e0| * r^m <= band (monotone tail of a geometric approach to SS).
  function tailSteps(e0, r, band) {
    const a = Math.abs(e0);
    if (a <= band) return 0;
    let m = Math.max(0, Math.ceil(Math.log(band / a) / Math.log(r)));
    while (m > 0 && a * Math.pow(r, m - 1) <= band) m--;
    while (a * Math.pow(r, m) > band) m++;
    return m;
  }

  function metrics(schedule, k, duration, ss, thresholds) {
    const ps = thresholds || [0.90, 0.95, 0.97, 0.99];
    const tau = schedule.tau, dTau = schedule.dTau, SS = ss.peak, r = Math.exp(-k * tau);
    const W = dTau * 7 / tau;
    const peaks = postPeaks(schedule, k);
    const N = peaks.length;

    // Explicit peaks through every loading dose (may extend past the chart), then a
    // geometric tail P_{J0+m} - SS = (P_{J0} - SS) r^m, solved analytically.
    const scn = schedule._scn;
    const ext = peaks.slice();
    const J0 = Math.max(N, schedule.maintStart);
    for (let j = N + 1; j <= J0; j++) {
      const mg = scn ? doseAmount(scn.id, j, scn.W, dTau, scn.n, scn.Q, scn.L) : dTau;
      ext.push((ext.length ? ext[ext.length - 1] * r : 0) + mg);
    }
    const e0 = ext[J0 - 1] - SS;
    const timeOf = j => (j - 1) * tau;
    const at = j => ({ index: j, t: timeOf(j), beyondChart: j > N });

    let maxPost = 0; peaks.forEach(v => { if (v > maxPost) maxPost = v; });
    const cumulativeInput = schedule.doses.reduce((a, d) => a + d.mg, 0);
    let auc = 0;
    schedule.doses.forEach((d, i) => {
      const end = i + 1 < N ? schedule.doses[i + 1].t : duration;
      auc += peaks[i] * (1 - Math.exp(-k * (end - d.t))) / k;
    });

    const thresholds_ = ps.map(p => {
      const lo = p * SS, hi = (2 - p) * SS, band = (1 - p) * SS;
      // first crossing: first post-dose amount >= p * SS
      let first = null;
      for (let j = 1; j <= J0; j++) if (ext[j - 1] >= lo) { first = at(j); break; }
      if (!first && e0 < 0) first = at(J0 + tailSteps(e0, r, band));
      // sustained entry: first j with every later peak inside [lo, hi]
      const m = tailSteps(e0, r, band);
      let entry;
      if (m > 0) entry = J0 + m;
      else {
        let j = J0;
        while (j > 1 && ext[j - 2] >= lo && ext[j - 2] <= hi) j--;
        entry = j;
      }
      return { p: p, firstCrossing: first, sustainedEntry: at(entry) };
    });

    return {
      ssPeak: SS, ssTrough: ss.trough, load: ss.load, loadOverD: ss.load / dTau, loadOverW: ss.load / W,
      maxPost: maxPost, overshootPct: Math.max(0, maxPost / SS - 1) * 100,
      cumulativeInput: cumulativeInput, auc: auc, peaks: peaks, thresholds: thresholds_,
    };
  }

  // ---------------------------------------------------------------- CSV
  function num6(x) {
    if (x === 0) return '0';
    const v = Number(x.toPrecision(6));
    let s = String(v);
    if (/e/i.test(s)) {
      const e = Math.floor(Math.log10(Math.abs(v)));
      s = e < 0 ? v.toFixed(Math.min(100, 5 - e)) : v.toFixed(0);
      if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    }
    return s;
  }
  const KIND_RANK = { pre: 0, sample: 1, post: 2 };
  function toCSV(results) {
    const lines = ['scenario,kind,t_days,amount_mg,pct_of_ss_peak'];
    results.slice().sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)).forEach(res => {
      res.points.slice().sort((a, b) => a.t - b.t || KIND_RANK[a.kind] - KIND_RANK[b.kind]).forEach(p => {
        const pct = res.ssPeak ? num6(p.a / res.ssPeak * 100) : '';
        lines.push([res.id, p.kind, num6(p.t), num6(p.a), pct].join(','));
      });
    });
    return lines.join('\n') + '\n';
  }

  // ---------------------------------------------------------------- compound metadata
  // Only entries meeting the spec's Section 5 source bar (two distinct human datasets).
  function deepFreeze(o) { Object.values(o).forEach(v => { if (v && typeof v === 'object') deepFreeze(v); }); return Object.freeze(o); }
  const COMPOUND_META = deepFreeze({
    "Testosterone Cypionate": {
      tHalf: 4.05,
      tHalfRange: [4.05, 8],
      hlType: "apparent (depot-limited)",
      evidence: "Two distinct datasets disagree: FDA labels state about 8 d (no study, n or method given); " +
        "a population PK analysis of 31 healthy men on IM testosterone cypionate estimated 4.05 d.",
      rationale: "Spec rule: on disagreement, default to the source with human IM PK data at the larger " +
        "sample size. Bi 2018 (n=31, 14 weekly IM injections, 299 post-dose samples) is the only source " +
        "with a stated sample size behind its half-life; the labels give none. Its 4.05 d is the median " +
        "post hoc value with endogenous testosterone modelled; the same paper reports 6.87 d if endogenous " +
        "secretion is ignored and cites 6.9 d from a noncompartmental analysis. Subjects took 100 to 500 mg/wk, " +
        "above replacement doses. The 8 d label value is kept as the top of the range.",
      sources: [
        { cite: "Bi Y, Perry PJ, Ellerby M, Murry DJ. Population pharmacokinetic/pharmacodynamic modeling of depot " +
                "testosterone cypionate in healthy male subjects. CPT Pharmacometrics Syst Pharmacol. 2018;7(4):259-268. " +
                "doi:10.1002/psp4.12287 (PMC5915615). n=31, IM; median post hoc t1/2 4.05 d.",
          published: "2018-03-01", accessed: "2026-11-05" },
        { cite: "Depo-Testosterone (testosterone cypionate injection) prescribing information, Pfizer, LAB-0245-13.2, " +
                "section Pharmacokinetics: \"approximately eight days\" after IM injection. No study cited. " +
                "accessdata.fda.gov/drugsatfda_docs/label/2018/085635s040lbl.pdf. The Azmiro label (Azurity, rev 07/2025, " +
                "216318s005) repeats the same sentence; its own N=26 PK table reports no half-life, so it is not counted separately.",
          published: "2018-07", accessed: "2026-11-05" },
      ],
    },
  });

  // Amount at time t on a simulate() curve: the last event at or before t, decayed to t.
  // At a dose time this is the post-dose amount.
  function amountAt(points, k, t) {
    let lo = 0, hi = points.length - 1, i = 0;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (points[mid].t <= t) { i = mid; lo = mid + 1; } else hi = mid - 1; }
    const p = points[i];
    if (p.kind === 'pre') return points[i + 1].a;
    return p.t === t ? p.a : p.a * Math.exp(-k * (t - p.t));
  }

  // ---------------------------------------------------------------- display rounding
  // mg 0.1, ratios 2 decimals, percentages 1 decimal, days 0.1.
  const fixed = d => x => (fin(x) ? (Math.round(x * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d) : '');
  const FMT = Object.freeze({ mg: fixed(1), ratio: fixed(2), pct: fixed(1), days: fixed(1) });

  const PK = {
    contrib: contrib, doseTimes: doseTimes, protocolSeries: protocolSeries,
    steadyState: steadyState, scenarioDoses: scenarioDoses, scaleQ: scaleQ,
    simulate: simulate, amountAt: amountAt, metrics: metrics, toCSV: toCSV, COMPOUND_META: COMPOUND_META, LIMITS: LIMITS,
    FMT: FMT,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = PK; else root.PK = PK;
})(typeof globalThis !== 'undefined' ? globalThis : this);

/* ============================================================================
 * CHAD_OS Personal Weather Station — dashboard logic
 * Self-contained, no CDN. Models weight.html (SVG charts, vanilla JS).
 *
 * Data: a private backend proxy (Cloudflare Worker) that hides the Weather
 * Underground / weather.com PWS API key. If API_BASE_URL is blank the page
 * runs fully on deterministic mock data so it stays usable on GitHub Pages
 * with no backend configured.
 * ==========================================================================*/
(function () {
'use strict';

/* ═══ CONFIG ════════════════════════════════════════════════════════════════
 * Edit these for your deployment. Same contract an iOS app would consume.   */
const CONFIG = {
  // Cloudflare Worker base, e.g. 'https://weather-proxy.<you>.workers.dev'.
  // Leave '' to run on demo/mock data (no backend, no key needed).
  API_BASE_URL: 'https://weather-proxy.chad-dash.workers.dev',
  STATION_ID:   'KVAGAINE55',
  DEFAULT_UNITS:'imperial',   // 'imperial' | 'metric'
  REFRESH_SECONDS: 120,       // auto-refresh of current obs
};

/* ═══ Units ═════════════════════════════════════════════════════════════════
 * Canonical storage is IMPERIAL (Weather.com PWS units=e). Convert to metric
 * for display only.                                                          */
const UNITS = {
  temperature:    { imp:'°F',    met:'°C',    toMet:f=>(f-32)*5/9,    dp:1 },
  dewpoint:       { imp:'°F',    met:'°C',    toMet:f=>(f-32)*5/9,    dp:1 },
  heatIndex:      { imp:'°F',    met:'°C',    toMet:f=>(f-32)*5/9,    dp:1 },
  wetBulb:        { imp:'°F',    met:'°C',    toMet:f=>(f-32)*5/9,    dp:1 },
  humidity:       { imp:'%',     met:'%',     toMet:v=>v,             dp:0 },
  pressure:       { imp:'inHg',  met:'hPa',   toMet:v=>v*33.8638867,  dp:2, dpMet:1 },
  windSpeed:      { imp:'mph',   met:'km/h',  toMet:v=>v*1.609344,    dp:1 },
  windGust:       { imp:'mph',   met:'km/h',  toMet:v=>v*1.609344,    dp:1 },
  windDirection:  { imp:'°',     met:'°',     toMet:v=>v,             dp:0 },
  rainRate:       { imp:'in/hr', met:'mm/hr', toMet:v=>v*25.4,        dp:2, dpMet:1 },
  rainAccum:      { imp:'in',    met:'mm',    toMet:v=>v*25.4,        dp:2, dpMet:1 },
  uv:             { imp:'UVI',   met:'UVI',   toMet:v=>v,             dp:1 },
  solarRadiation: { imp:'W/m²',  met:'W/m²',  toMet:v=>v,             dp:0 },
};
function conv(metric, v){
  const u = UNITS[metric]; if(!u || v==null || isNaN(v)) return v;
  return S.units==='metric' ? u.toMet(v) : v;
}
function unitLabel(metric){ const u=UNITS[metric]; if(!u) return ''; return S.units==='metric'?u.met:u.imp; }
function dpFor(metric){ const u=UNITS[metric]; if(!u) return 1; return (S.units==='metric'&&u.dpMet!=null)?u.dpMet:(u.dp!=null?u.dp:1); }
function fmtVal(metric, v, withUnit){
  if(v==null||isNaN(v)) return '—';
  const dv=conv(metric,v).toFixed(dpFor(metric));
  return withUnit ? `${dv} ${unitLabel(metric)}` : dv;
}

/* ═══ State ═════════════════════════════════════════════════════════════════*/
const S = {
  range:    'week',
  endMs:    null,        // null = snap to latest
  customStart: null,
  customEnd:   null,
  units:    (localStorage.getItem('chad_os.weather.units') || CONFIG.DEFAULT_UNITS),
  showTrend:   true,
  showHighLow: true,
  rawOnAgg:    false,
  showGaps:    true,
};

// Loaded dataset: { stationId, status, current, derived, freshnessMinutes,
//                   observedAtLocal, source, observations:[{t, ...metrics}] }
let DATA = null;
let refreshTimer = null;
let lastGoodLive = null;

/* ═══ Time utils ════════════════════════════════════════════════════════════*/
const MIN=60000, HOUR=3600000, DAY=86400000;
function nowMs(){ return Date.now(); }
function fmtClock(ms){ return new Date(ms).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}); }
function fmtDay(ms){ return new Date(ms).toLocaleDateString('en-US',{month:'short',day:'numeric'}); }
function fmtTick(ms, range){
  const d=new Date(ms);
  if(range==='day') return d.toLocaleTimeString('en-US',{hour:'numeric'});
  if(range==='week'||range==='month'||range==='custom') return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
  return d.toLocaleDateString('en-US',{month:'short',year:'2-digit'});
}

/* ═══ Derived metrics ═══════════════════════════════════════════════════════*/
// NOAA heat index (T in °F, RH %). Only diverges meaningfully above ~80°F.
function heatIndex(tF, rh){
  if(tF==null||rh==null) return null;
  if(tF<80) return tF;
  const T=tF, R=rh;
  let hi = -42.379 + 2.04901523*T + 10.14333127*R - 0.22475541*T*R
    - 0.00683783*T*T - 0.05481717*R*R + 0.00122874*T*T*R
    + 0.00085282*T*R*R - 0.00000199*T*T*R*R;
  if(R<13 && T>=80 && T<=112) hi -= ((13-R)/4)*Math.sqrt((17-Math.abs(T-95))/17);
  if(R>85 && T>=80 && T<=87)  hi += ((R-85)/10)*((87-T)/5);
  return hi;
}
// Stull wet-bulb approximation. Returns °F (inputs converted from canonical °F).
function wetBulb(tF, rh){
  if(tF==null||rh==null) return null;
  const T=(tF-32)*5/9, R=Math.max(1,Math.min(100,rh));
  const Tw = T*Math.atan(0.151977*Math.sqrt(R+8.313659))
    + Math.atan(T+R) - Math.atan(R-1.676331)
    + 0.00391838*Math.pow(R,1.5)*Math.atan(0.023101*R) - 4.686035;
  return Tw*9/5 + 32;
}
// Rainfall intensity class from rate (in/hr).
function rainIntensity(rateInHr){
  if(rateInHr==null||rateInHr<=0) return 'none';
  if(rateInHr<0.1)  return 'light';
  if(rateInHr<0.3)  return 'moderate';
  if(rateInHr<2.0)  return 'heavy';
  return 'violent';
}
// Pressure tendency over last ~3h, in inHg. Class by ±0.06 inHg (~2 hPa)/3h.
function pressureTendency(obs, latestMs){
  const cutoff=latestMs-3*HOUR;
  let ref=null;
  for(const o of obs){ if(o.t<=cutoff && o.pressure!=null) ref=o; else if(o.t>cutoff) break; }
  const cur=lastWith(obs,'pressure');
  if(!ref||!cur) return { delta:null, dir:'steady' };
  const delta=cur.pressure-ref.pressure;
  let dir='steady';
  if(delta> 0.06) dir='rising';
  else if(delta<-0.06) dir='falling';
  return { delta, dir };
}
// Sum incremental precip over the last `hours`.
function rainTotal(obs, latestMs, hours){
  const cutoff=latestMs-hours*HOUR;
  let sum=0, any=false;
  for(const o of obs){ if(o.t>=cutoff && o.precipIncr!=null){ sum+=o.precipIncr; any=true; } }
  return any?sum:null;
}
function lastWith(obs, field){ for(let i=obs.length-1;i>=0;i--) if(obs[i][field]!=null) return obs[i]; return null; }

function computeDerived(d){
  const obs=d.observations||[];
  const c=d.current||{};
  const latestMs=obs.length?obs[obs.length-1].t:nowMs();
  d.derived = {
    heatIndex: heatIndex(c.temperature, c.humidity),
    wetBulb:   wetBulb(c.temperature, c.humidity),
    pressure:  pressureTendency(obs, latestMs),
    rainIntensity: rainIntensity(c.rainRate),
    rain24h:   rainTotal(obs, latestMs, 24),
    rain72h:   rainTotal(obs, latestMs, 72),
  };
  return d;
}

/* ═══ Range / aggregation ═══════════════════════════════════════════════════*/
function extent(){
  const o=DATA.observations;
  if(!o.length) return { min:nowMs()-DAY, max:nowMs() };
  return { min:o[0].t, max:o[o.length-1].t };
}
function getRange(){
  const ext=extent();
  const latest=S.endMs||ext.max;
  if(S.range==='all') return { start:ext.min, end:ext.max };
  if(S.range==='custom') return { start:S.customStart||latest-7*DAY, end:S.customEnd||latest };
  const span={ day:DAY, week:7*DAY, month:30*DAY, quarter:91*DAY, year:365*DAY }[S.range]||7*DAY;
  return { start:latest-span, end:latest };
}
// Bucket size (ms) so charts stay legible. raw when window is small.
function bucketSize(start,end){
  const span=end-start;
  if(span<=2*DAY)   return 0;          // raw
  if(span<=10*DAY)  return HOUR;
  if(span<=40*DAY)  return 6*HOUR;
  if(span<=120*DAY) return DAY;
  if(span<=400*DAY) return 3*DAY;
  return 7*DAY;
}
// Extract one metric series within window; aggregate by bucket.
// agg: 'mean' (instantaneous metrics) or 'sum' (precip increments).
function series(field, start, end, agg){
  const out=[];
  for(const o of DATA.observations){
    if(o.t<start||o.t>end) continue;
    if(o[field]==null||isNaN(o[field])) continue;
    out.push({ t:o.t, v:o[field] });
  }
  const bs=bucketSize(start,end);
  if(!bs) return out;
  const buckets=new Map();
  for(const p of out){
    const key=Math.floor(p.t/bs)*bs;
    if(!buckets.has(key)) buckets.set(key,[]);
    buckets.get(key).push(p.v);
  }
  const agged=[...buckets.entries()].sort((a,b)=>a[0]-b[0]).map(([k,vals])=>{
    const v = agg==='sum' ? vals.reduce((a,b)=>a+b,0) : median(vals);
    return { t:k+bs/2, v, agg:true, n:vals.length };
  });
  return agged;
}
function median(a){ if(!a.length) return NaN; const s=[...a].sort((x,y)=>x-y); const m=s.length>>1; return s.length%2?s[m]:(s[m-1]+s[m])/2; }
function isAgg(start,end){ return bucketSize(start,end)>0; }

/* ═══ Trend (least squares) ═════════════════════════════════════════════════*/
function linregress(pts){
  if(pts.length<2) return null;
  const x0=pts[0].t; let n=0,sx=0,sy=0,sxx=0,sxy=0;
  for(const p of pts){ const x=(p.t-x0)/DAY, y=p.v; n++; sx+=x; sy+=y; sxx+=x*x; sxy+=x*y; }
  const d=n*sxx-sx*sx; if(d===0) return null;
  const slope=(n*sxy-sx*sy)/d, intercept=(sy-slope*sx)/n;
  return { slope, intercept, x0 };  // slope per day (canonical units)
}

/* ═══ SVG chart engine ══════════════════════════════════════════════════════*/
const CHART_H=230, M={ t:35, r:54, b:48, l:62 };
const POINT_STORE=new Map();
function sv(tag,attrs,inner){
  const a=Object.entries(attrs||{}).map(([k,v])=>`${k}="${v}"`).join(' ');
  return inner!=null?`<${tag} ${a}>${inner}</${tag}>`:`<${tag} ${a}/>`;
}
function niceTicks(min,max,target){
  if(min===max){ min-=1; max+=1; }
  const range=max-min, raw=range/target, mag=Math.pow(10,Math.floor(Math.log10(raw)));
  let step; for(const f of[1,2,2.5,5,10]){ if(raw<=f*mag){ step=f*mag; break; } } step=step||mag*10;
  const nMin=Math.floor(min/step)*step, nMax=Math.ceil(max/step)*step, ticks=[];
  for(let t=nMin;t<=nMax+step*1e-3;t+=step) ticks.push(Math.round(t*1e9)/1e9);
  return { min:nMin, max:nMax, ticks };
}
function timeTicks(start,end,maxT){
  maxT=maxT||6; const span=end-start, ticks=[]; let step;
  if(span<=DAY) step=3*HOUR; else if(span<=3*DAY) step=12*HOUR;
  else if(span<=14*DAY) step=2*DAY; else if(span<=70*DAY) step=7*DAY;
  else if(span<=200*DAY) step=30*DAY; else step=Math.ceil(span/maxT/DAY)*DAY;
  let c=Math.ceil(start/step)*step;
  while(c<=end){ ticks.push(c); c+=step; }
  while(ticks.length>maxT+2 && ticks.length>3) ticks.splice(0,ticks.length,...ticks.filter((_,i)=>i%2===0));
  return ticks;
}

/*  Generic multi-series line chart with optional second (right) Y axis and
 *  optional precip bars. seriesDefs:[{field,label,color,axis,metric,agg}]    */
function lineChart(panelId, title, seriesDefs, opts){
  opts=opts||{};
  const panel=document.getElementById(panelId); if(!panel) return;
  const { start, end }=getRange();
  const agg=isAgg(start,end);

  const sData=seriesDefs.map(def=>({ def, pts:series(def.field, start, end, def.agg||'mean') }));
  const hasAny=sData.some(s=>s.pts.length);
  if(!hasAny){ panel.innerHTML=`<div class="chart-panel-title">${title}</div><div class="chart-no-data">No data in this window</div>`; return; }

  const W=panel.clientWidth-32||760, IW=W-M.l-M.r, IH=CHART_H-M.t-M.b;
  const xFn=t=>M.l+(t-start)/(end-start)*IW;

  // left/right value scales
  function scaleFor(axis, fixed){
    const vals=[];
    for(const s of sData) if((s.def.axis||'left')===axis) for(const p of s.pts) vals.push(conv(s.def.metric,p.v));
    // precip bars live on the left axis with a baseline at 0
    if(opts.barsField && axis==='left'){
      vals.push(0);
      for(const b of series(opts.barsField, start, end, 'sum')){ const dv=conv(opts.barsMetric,b.v); if(dv>0) vals.push(dv); }
    }
    if(!vals.length) return fixed ? niceTicks(fixed[0],fixed[1],5) : null;
    let mn=Math.min(...vals), mx=Math.max(...vals);
    if(fixed){ mn=fixed[0]; mx=fixed[1]; }
    else { const pad=Math.max((mx-mn)*0.12,0.5); mn-=pad; mx+=pad; }
    return niceTicks(mn,mx,5);
  }
  const leftScale=scaleFor('left', opts.fixedLeft);
  const rightDefs=seriesDefs.filter(d=>d.axis==='right');
  const rightScale=rightDefs.length?scaleFor('right', opts.fixedRight):null;
  const yL=v=>M.t+IH-(v-leftScale.min)/(leftScale.max-leftScale.min)*IH;
  const yR=rightScale?(v=>M.t+IH-(v-rightScale.min)/(rightScale.max-rightScale.min)*IH):null;

  const parts=[`<svg class="chart-svg" viewBox="0 0 ${W} ${CHART_H}" height="${CHART_H}">`];
  for(const t of leftScale.ticks) parts.push(sv('line',{x1:M.l,y1:yL(t).toFixed(1),x2:M.l+IW,y2:yL(t).toFixed(1),class:'grid-line'}));
  for(const t of timeTicks(start,end)) parts.push(sv('line',{x1:xFn(t).toFixed(1),y1:M.t,x2:xFn(t).toFixed(1),y2:M.t+IH,class:'grid-line'}));

  const store=new Map(); let idx=0;

  // optional precip bars (left axis, baseline at value 0)
  if(opts.barsField){
    const bars=series(opts.barsField, start, end, 'sum');
    const y0=yL(0);
    const bw=Math.max(2,(IW/Math.max(bars.length,1))*0.7);
    for(const b of bars){
      const dv=conv(opts.barsMetric,b.v); if(dv<=0) continue;
      const x=xFn(b.t), y=yL(dv);
      parts.push(sv('rect',{x:(x-bw/2).toFixed(1),y:Math.min(y,y0).toFixed(1),width:bw.toFixed(1),height:Math.abs(y0-y).toFixed(1),fill:'var(--rain)',class:'rain-bar','data-pt':idx,'data-panel':panelId}));
      store.set(idx++,{ t:b.t, metric:opts.barsMetric, v:b.v, label:opts.barsLabel||'Precip', n:b.n });
    }
  }

  // line series
  sData.forEach(s=>{
    const def=s.def, yf=(def.axis==='right')?yR:yL;
    const sc=(def.axis==='right')?rightScale:leftScale;
    if(!sc||!s.pts.length) return;
    let path='', prev=null;
    const gapMs=(end-start)/14;
    for(const p of s.pts){
      const x=xFn(p.t), y=yf(conv(def.metric,p.v));
      const gap=prev&&(p.t-prev)>gapMs;
      path+=(prev&&!gap)?`L${x.toFixed(1)},${y.toFixed(1)}`:`M${x.toFixed(1)},${y.toFixed(1)}`;
      prev=p.t;
    }
    const cls=def.field==='rainAccum'?'accum-path':'line-path';
    parts.push(`<path d="${path}" class="${cls}" style="stroke:${def.color}"/>`);

    // gap markers
    if(S.showGaps){ let pr=null; for(const p of s.pts){ if(pr&&(p.t-pr)>gapMs){ const xg=((xFn(pr)+xFn(p.t))/2).toFixed(1); parts.push(sv('line',{x1:xg,y1:M.t,x2:xg,y2:M.t+IH,class:'gap-marker-line'})); } pr=p.t; } }

    // trend (first left line series only)
    if(S.showTrend && def.axis!=='right' && def===seriesDefs.find(d=>(d.axis||'left')==='left')){
      const tr=linregress(s.pts.map(p=>({t:p.t,v:conv(def.metric,p.v)})));
      if(tr){
        const v0=tr.intercept, v1=tr.intercept+tr.slope*((end-start)/DAY);
        parts.push(`<path d="M${xFn(start).toFixed(1)},${yf(v0).toFixed(1)}L${xFn(end).toFixed(1)},${yf(v1).toFixed(1)}" class="trend-path"/>`);
        const perDay=tr.slope, lab=Math.abs(perDay)<1e-6?'flat':`${perDay>0?'↑':'↓'} ${Math.abs(perDay).toFixed(2)} ${unitLabel(def.metric)}/day`;
        parts.push(sv('text',{x:M.l+IW-4,y:M.t-8,'text-anchor':'end',class:'trend-label'},`Trend: ${lab}`));
      }
    }

    // points + tooltip store
    for(const p of s.pts){
      const x=xFn(p.t), y=yf(conv(def.metric,p.v));
      if(isNaN(x)||isNaN(y)) continue;
      const showRaw = !agg || S.rawOnAgg || s.pts.length<=60;
      if(showRaw) parts.push(sv('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:2.6,fill:def.color,class:'pt-dot','data-pt':idx,'data-panel':panelId}));
      store.set(idx++,{ t:p.t, metric:def.metric, v:p.v, label:def.label, n:p.n });
    }

    // high/low on first left series
    if(S.showHighLow && def===seriesDefs.find(d=>(d.axis||'left')==='left')){
      let hi=s.pts[0], lo=s.pts[0];
      for(const p of s.pts){ if(p.v>hi.v) hi=p; if(p.v<lo.v) lo=p; }
      for(const [hp,c2,lc] of [[hi,'pt-hi','hi-label'],[lo,'pt-lo','lo-label']]){
        const x=xFn(hp.t), y=yf(conv(def.metric,hp.v));
        parts.push(sv('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:4,class:c2}));
        const anchor=x>M.l+IW-70?'end':'start', lx=(anchor==='end'?x-7:x+7).toFixed(1);
        parts.push(sv('text',{x:lx,y:(y-9).toFixed(1),'text-anchor':anchor,class:lc},`${fmtVal(def.metric,hp.v)} · ${fmtDay(hp.t)}`));
      }
    }
  });
  POINT_STORE.set(panelId,store);

  // axes
  parts.push(sv('line',{x1:M.l,y1:M.t+IH,x2:M.l+IW,y2:M.t+IH,class:'axis-line'}));
  for(const t of timeTicks(start,end)){
    const x=xFn(t);
    parts.push(sv('line',{x1:x.toFixed(1),y1:M.t+IH,x2:x.toFixed(1),y2:(M.t+IH+4).toFixed(1),stroke:'#3a3a50','stroke-width':1}));
    parts.push(sv('text',{x:x.toFixed(1),y:(M.t+IH+17).toFixed(1),'text-anchor':'middle',class:'axis-text'},fmtTick(t,S.range)));
  }
  parts.push(sv('line',{x1:M.l,y1:M.t,x2:M.l,y2:M.t+IH,class:'axis-line'}));
  for(const t of leftScale.ticks){ const y=yL(t); parts.push(sv('text',{x:(M.l-7).toFixed(1),y:y.toFixed(1),'text-anchor':'end','dominant-baseline':'middle',class:'axis-text'},(+t).toFixed(leftScale.max>=100?0:1))); }
  parts.push(sv('text',{x:(M.l-48).toFixed(1),y:(M.t+IH/2).toFixed(1),transform:`rotate(-90,${(M.l-48).toFixed(1)},${(M.t+IH/2).toFixed(1)})`,'text-anchor':'middle',class:'y-label-svg'},opts.leftLabel||unitLabel(seriesDefs[0].metric)));
  if(rightScale){
    parts.push(sv('line',{x1:M.l+IW,y1:M.t,x2:M.l+IW,y2:M.t+IH,class:'axis-line'}));
    for(const t of rightScale.ticks){ const y=yR(t); parts.push(sv('text',{x:(M.l+IW+7).toFixed(1),y:y.toFixed(1),'text-anchor':'start','dominant-baseline':'middle',class:'axis-text'},(+t).toFixed(rightScale.max>=100?0:1))); }
    parts.push(sv('text',{x:(M.l+IW+44).toFixed(1),y:(M.t+IH/2).toFixed(1),transform:`rotate(90,${(M.l+IW+44).toFixed(1)},${(M.t+IH/2).toFixed(1)})`,'text-anchor':'middle',class:'y-label-svg'},opts.rightLabel||''));
  }
  parts.push('</svg>');

  const legend=`<div class="legend">${seriesDefs.map(d=>`<div class="leg-item"><span class="leg-line" style="background:${d.color}"></span>${d.label}</div>`).join('')}${opts.barsField?`<div class="leg-item"><span class="leg-dot" style="background:var(--rain)"></span>${opts.barsLabel}</div>`:''}</div>`;
  const aggBadge=agg?` <span style="font-size:11px;color:var(--muted)">[aggregated]</span>`:'';
  panel.innerHTML=`<div class="chart-panel-title">${title}${aggBadge}</div>${legend}<div class="chart-wrap">${parts.join('')}</div>`;
  attachTooltips(panel,panelId);
}

/*  Wind direction scatter (fixed 0–360 axis with compass ticks).            */
function windDirChart(panelId,title){
  const panel=document.getElementById(panelId); if(!panel) return;
  const { start, end }=getRange();
  const pts=series('windDirection', start, end, 'mean');
  if(!pts.length){ panel.innerHTML=`<div class="chart-panel-title">${title}</div><div class="chart-no-data">No wind data in this window</div>`; return; }
  const W=panel.clientWidth-32||760, IW=W-M.l-M.r, IH=CHART_H-M.t-M.b;
  const xFn=t=>M.l+(t-start)/(end-start)*IW;
  const yFn=v=>M.t+IH-(v/360)*IH;
  const compass=[[0,'N'],[90,'E'],[180,'S'],[270,'W'],[360,'N']];
  const parts=[`<svg class="chart-svg" viewBox="0 0 ${W} ${CHART_H}" height="${CHART_H}">`];
  for(const [v] of compass) parts.push(sv('line',{x1:M.l,y1:yFn(v).toFixed(1),x2:M.l+IW,y2:yFn(v).toFixed(1),class:'grid-line'}));
  for(const t of timeTicks(start,end)) parts.push(sv('line',{x1:xFn(t).toFixed(1),y1:M.t,x2:xFn(t).toFixed(1),y2:M.t+IH,class:'grid-line'}));
  const store=new Map(); let idx=0;
  for(const p of pts){ const x=xFn(p.t),y=yFn(p.v); parts.push(sv('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:2.6,fill:'var(--winddir)',class:'pt-dot','data-pt':idx,'data-panel':panelId})); store.set(idx++,{ t:p.t, metric:'windDirection', v:p.v, label:'Wind dir', n:p.n }); }
  POINT_STORE.set(panelId,store);
  parts.push(sv('line',{x1:M.l,y1:M.t+IH,x2:M.l+IW,y2:M.t+IH,class:'axis-line'}));
  for(const t of timeTicks(start,end)){ const x=xFn(t); parts.push(sv('text',{x:x.toFixed(1),y:(M.t+IH+17).toFixed(1),'text-anchor':'middle',class:'axis-text'},fmtTick(t,S.range))); }
  parts.push(sv('line',{x1:M.l,y1:M.t,x2:M.l,y2:M.t+IH,class:'axis-line'}));
  for(const [v,lab] of compass){ const y=yFn(v); parts.push(sv('text',{x:(M.l-7).toFixed(1),y:y.toFixed(1),'text-anchor':'end','dominant-baseline':'middle',class:'axis-text'},lab)); }
  parts.push('</svg>');
  panel.innerHTML=`<div class="chart-panel-title">${title}</div><div class="chart-wrap">${parts.join('')}</div>`;
  attachTooltips(panel,panelId);
}

/* ═══ Tooltip ═══════════════════════════════════════════════════════════════*/
function attachTooltips(panel,panelId){
  panel.addEventListener('mouseover',e=>{ const el=e.target.closest('[data-pt]'); if(!el) return; const store=POINT_STORE.get(panelId); if(!store) return; const p=store.get(parseInt(el.dataset.pt)); if(!p) return; showTooltip(p,e.clientX,e.clientY); });
  panel.addEventListener('mouseleave',hideTooltip);
  panel.addEventListener('mousemove',e=>{ const tt=document.getElementById('tooltip'); if(tt.style.display==='none') return; posTooltip(e.clientX,e.clientY); });
}
function showTooltip(p,cx,cy){
  const tt=document.getElementById('tooltip');
  const extra=p.n>1?` · n=${p.n}`:'';
  tt.innerHTML=`<div class="tt-date">${fmtClock(p.t)} · ${p.label}${extra}</div><div class="tt-val">${fmtVal(p.metric,p.v,true)}</div>`;
  tt.style.display='block'; posTooltip(cx,cy);
}
function posTooltip(cx,cy){ const tt=document.getElementById('tooltip'),w=tt.offsetWidth,h=tt.offsetHeight; let x=cx+14,y=cy-10; if(x+w>innerWidth-10) x=cx-w-14; if(y+h>innerHeight-10) y=cy-h-10; tt.style.left=x+'px'; tt.style.top=y+'px'; }
function hideTooltip(){ document.getElementById('tooltip').style.display='none'; }

/* ═══ Header + status ═══════════════════════════════════════════════════════*/
function buildHeader(){
  document.getElementById('station-badge').textContent=DATA.stationId||CONFIG.STATION_ID;
  const pill=document.getElementById('status-pill'), txt=document.getElementById('status-text');
  pill.className='status-pill status-'+(DATA.status||'offline');
  txt.textContent=DATA.status||'offline';
  document.getElementById('mock-badge').style.display=DATA.source==='mock'?'':'none';
  const fresh=DATA.freshnessMinutes;
  const freshStr=fresh==null?'unknown':(fresh<1?'just now':`${Math.round(fresh)} min ago`);
  const staleWarn=(DATA.status==='stale'||DATA.status==='offline')?` <b style="color:var(--stale)">⚠ stale observation</b>`:'';
  const note=DATA.note?` <span style="color:var(--stale)">${DATA.note}</span>`:'';
  document.getElementById('hdr-meta').innerHTML=
    `<span>Last updated: <b>${DATA.observedAtLocal||'—'}</b> (${freshStr})${staleWarn}</span>
     <span>Source: <b>${DATA.source==='mock'?'Demo / mock':'Weather.com PWS (proxied)'}</b></span>
     <span>Observations: <b>${(DATA.observations||[]).length}</b>${note}</span>`;
}

/* ═══ Summary cards ═════════════════════════════════════════════════════════*/
function card(label, metric, value, sub, accentHtml){
  const valStr = (metric&&value!=null) ? `${fmtVal(metric,value)} <span class="unit">${unitLabel(metric)}</span>` : (value!=null?value:'—');
  return `<div class="card"><div class="card-label">${label}</div>
    <div class="card-value">${valStr}</div>
    ${accentHtml?`<div class="card-accent">${accentHtml}</div>`:''}
    <div class="card-sub">${sub||''}</div></div>`;
}
function buildCards(){
  const c=DATA.current||{}, dv=DATA.derived||{};
  const el=document.getElementById('summary-cards');
  const dir=c.windDirection;
  const dirCardinal=dir==null?'':['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'][Math.round(dir/22.5)%16];
  const tend=dv.pressure||{};
  const tendStr=tend.dir==='steady'||tend.delta==null?'steady':`${tend.dir} ${fmtVal('pressure',Math.abs(tend.delta))} ${unitLabel('pressure')}/3h`;
  const intensity=dv.rainIntensity||'none';

  el.innerHTML=
    `<div class="card-section-label">Conditions</div>
     <div class="card-row">
       ${card('Temperature','temperature',c.temperature,'Air temperature', dv.heatIndex!=null&&conv('temperature',dv.heatIndex)-conv('temperature',c.temperature)>1?`Feels ${fmtVal('heatIndex',dv.heatIndex,true)}`:'')}
       ${card('Dewpoint','dewpoint',c.dewpoint,'Moisture / comfort', dv.wetBulb!=null?`Wet bulb ${fmtVal('wetBulb',dv.wetBulb,true)}`:'')}
       ${card('Humidity','humidity',c.humidity,'Relative humidity')}
       ${card('Pressure','pressure',c.pressure,'Barometric', `<span class="tendency-${tend.dir||'steady'}">${tendStr}</span>`)}
     </div>
     <div class="card-section-label">Rainfall / Stormwater</div>
     <div class="card-row">
       ${card('Rain Today','rainAccum',c.rainToday,'Event / since midnight', `<span class="chip chip-${intensity}">${intensity}</span>`)}
       ${card('Rainfall Rate','rainRate',c.rainRate,'Instantaneous intensity')}
       ${card('24h Rain','rainAccum',dv.rain24h,'Trailing 24 hours')}
       ${card('72h Rain','rainAccum',dv.rain72h,'Trailing 72 hours')}
     </div>
     <div class="card-section-label">Wind / Solar</div>
     <div class="card-row">
       ${card('Wind Speed','windSpeed',c.windSpeed,'Sustained')}
       ${card('Wind Gust','windGust',c.windGust,'Peak gust')}
       ${card('Wind Direction',null,dir==null?'—':`${dir.toFixed(0)}° <span class="unit">${dirCardinal}</span> <span class="compass" style="transform:rotate(${dir}deg);display:inline-block">↑</span>`,'From')}
       ${card('UV / Solar','uv',c.uv, c.solarRadiation!=null?`Solar ${fmtVal('solarRadiation',c.solarRadiation,true)}`:'UV index')}
     </div>`;
}

/* ═══ Render ════════════════════════════════════════════════════════════════*/
function renderAll(){
  if(!DATA) return;
  buildHeader();
  buildCards();
  lineChart('panel-temp','Temperature + Dewpoint',
    [{field:'temperature',label:'Temperature',color:'var(--temp)',metric:'temperature'},
     {field:'dewpoint',label:'Dewpoint',color:'var(--dew)',metric:'dewpoint'}],
    { leftLabel:unitLabel('temperature') });
  lineChart('panel-rain','Rainfall Rate + Accumulation',
    [{field:'rainAccum',label:'Accumulation',color:'var(--rainaccum)',metric:'rainAccum',axis:'right',agg:'mean'}],
    { barsField:'precipIncr', barsMetric:'rainAccum', barsLabel:'Precip / bucket',
      leftLabel:unitLabel('rainAccum'), rightLabel:`Accum ${unitLabel('rainAccum')}`, fixedLeft:null });
  lineChart('panel-pressure','Pressure',
    [{field:'pressure',label:'Pressure',color:'var(--press)',metric:'pressure'}],
    { leftLabel:unitLabel('pressure') });
  lineChart('panel-humidity','Humidity',
    [{field:'humidity',label:'Humidity',color:'var(--humid)',metric:'humidity'}],
    { leftLabel:'%', fixedLeft:[0,100] });
  lineChart('panel-wind','Wind Speed + Gust',
    [{field:'windSpeed',label:'Wind Speed',color:'var(--wind)',metric:'windSpeed'},
     {field:'windGust',label:'Wind Gust',color:'var(--gust)',metric:'windGust'}],
    { leftLabel:unitLabel('windSpeed') });
  windDirChart('panel-winddir','Wind Direction');
  lineChart('panel-solar','Solar Radiation + UV',
    [{field:'solarRadiation',label:'Solar Radiation',color:'var(--solar)',metric:'solarRadiation'},
     {field:'uv',label:'UV Index',color:'var(--uv)',metric:'uv',axis:'right'}],
    { leftLabel:'W/m²', rightLabel:'UVI', fixedRight:[0,12] });
}

/* ═══ Controls ══════════════════════════════════════════════════════════════*/
function savePrefs(){ try{
  localStorage.setItem('chad_os.weather.units',S.units);
  localStorage.setItem('chad_os.weather.prefs',JSON.stringify({range:S.range,showTrend:S.showTrend,showHighLow:S.showHighLow,rawOnAgg:S.rawOnAgg,showGaps:S.showGaps}));
}catch(e){} }
function loadPrefs(){ try{
  const p=JSON.parse(localStorage.getItem('chad_os.weather.prefs')||'{}');
  if(p.range) S.range=p.range;
  ['showTrend','showHighLow','rawOnAgg','showGaps'].forEach(k=>{ if(k in p) S[k]=p[k]; });
}catch(e){} }
function setRange(r){
  S.range=r;
  document.getElementById('custom-range').style.display=r==='custom'?'flex':'none';
  if(r!=='custom') S.endMs=null;
  document.querySelectorAll('.btn-range').forEach(b=>b.classList.toggle('active',b.dataset.range===r));
  renderAll(); savePrefs();
}
function setUnits(u){ S.units=u; document.querySelectorAll('.btn-unit').forEach(b=>b.classList.toggle('active',b.dataset.units===u)); renderAll(); savePrefs(); }
function stepPeriod(dir){
  if(S.range==='all') return;
  const { start, end }=getRange(), w=end-start, ext=extent();
  if(S.range==='custom'){
    S.customStart=(S.customStart||start)+dir*w; S.customEnd=(S.customEnd||end)+dir*w;
    document.getElementById('inp-cstart').value=new Date(S.customStart).toISOString().slice(0,10);
    document.getElementById('inp-cend').value=new Date(S.customEnd).toISOString().slice(0,10);
  } else {
    const newEnd=(S.endMs||ext.max)+dir*w;
    S.endMs=newEnd>ext.max?ext.max:(newEnd<ext.min+w?ext.min+w:newEnd);
  }
  renderAll();
}
function initControls(){
  document.querySelectorAll('.btn-range').forEach(b=>b.addEventListener('click',()=>setRange(b.dataset.range)));
  document.querySelectorAll('.btn-unit').forEach(b=>b.addEventListener('click',()=>setUnits(b.dataset.units)));
  document.getElementById('btn-prev').addEventListener('click',()=>stepPeriod(-1));
  document.getElementById('btn-next').addEventListener('click',()=>stepPeriod(1));
  document.getElementById('btn-latest').addEventListener('click',()=>{ S.endMs=null; renderAll(); });
  const tg=(id,k)=>document.getElementById(id).addEventListener('change',e=>{ S[k]=e.target.checked; renderAll(); savePrefs(); });
  tg('tog-trend','showTrend'); tg('tog-highlow','showHighLow'); tg('tog-rawonAgg','rawOnAgg'); tg('tog-gaps','showGaps');
  document.getElementById('inp-cstart').addEventListener('change',e=>{ S.customStart=Date.parse(e.target.value); renderAll(); });
  document.getElementById('inp-cend').addEventListener('change',e=>{ S.customEnd=Date.parse(e.target.value)+DAY-1; renderAll(); });
  document.addEventListener('keydown',e=>{ if(e.target.matches('input')) return; if(e.key==='ArrowLeft') stepPeriod(-1); if(e.key==='ArrowRight') stepPeriod(1); if(e.key==='Escape') hideTooltip(); });
  // sync UI
  document.querySelectorAll('.btn-range').forEach(b=>b.classList.toggle('active',b.dataset.range===S.range));
  document.querySelectorAll('.btn-unit').forEach(b=>b.classList.toggle('active',b.dataset.units===S.units));
  document.getElementById('tog-trend').checked=S.showTrend;
  document.getElementById('tog-highlow').checked=S.showHighLow;
  document.getElementById('tog-rawonAgg').checked=S.rawOnAgg;
  document.getElementById('tog-gaps').checked=S.showGaps;
}

/* ═══ Data loading ══════════════════════════════════════════════════════════
 * Live: GET {API_BASE_URL}/api/weather/current  +  /api/weather/history?range
 * Fallback: deterministic mock so the page always renders.                    */
async function loadData(){
  if(CONFIG.API_BASE_URL){
    try{
      const range=S.range==='custom'||S.range==='day'?'week':S.range;
      const [curR,histR]=await Promise.allSettled([
        fetch(`${CONFIG.API_BASE_URL}/api/weather/current`),
        fetch(`${CONFIG.API_BASE_URL}/api/weather/history?range=${encodeURIComponent(range)}`),
      ]);
      if(curR.status!=='fulfilled' || !curR.value.ok) {
        const status=curR.status==='fulfilled'?curR.value.status:'network';
        throw new Error('current '+status);
      }
      const cur=await curR.value.json();
      if(!cur.current) throw new Error('current '+(cur.error||cur.status||'empty'));

      let hist={ observations: [] };
      let note='';
      if(histR.status==='fulfilled' && histR.value.ok) {
        hist=await histR.value.json();
        if(hist.note) note='History unavailable; current conditions live.';
      } else {
        const status=histR.status==='fulfilled'?histR.value.status:'network';
        note=`History unavailable (${status}); current conditions live.`;
      }

      const live={
        stationId:cur.stationId, status:cur.status, units:cur.units,
        observedAtLocal:cur.observedAtLocal, freshnessMinutes:cur.freshnessMinutes,
        current:cur.current, source:'live',
        note,
        observations:(hist.observations||[]).map(o=>({ t:Date.parse(o.observedAtUtc||o.t), ...o.values||o })),
      };
      DATA=computeDerived(live);
      lastGoodLive=JSON.parse(JSON.stringify(DATA));
      return;
    }catch(e){
      console.warn('Live current fetch failed:',e);
      if(lastGoodLive){
        DATA=JSON.parse(JSON.stringify(lastGoodLive));
        DATA.status='stale';
        DATA.note='Using last good live observation; refresh failed.';
        computeDerived(DATA);
        return;
      }
    }
  }
  DATA=buildMock();
  computeDerived(DATA);
}

/* deterministic PRNG so mock is stable across reloads */
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return((t^t>>>14)>>>0)/4294967296; }; }
function buildMock(){
  const rnd=mulberry32(0x5EED1234);
  const now=nowMs();
  const obs=[];
  const SPAN_DAYS=420;
  // hourly for the full span, then 10-min for the last 2 days for a rich "Day" view
  const start=now-SPAN_DAYS*DAY;
  let precipToday=0, lastDay=-1;
  function push(t){
    const d=new Date(t);
    const doy=(t-Date.parse(d.getFullYear()+'-01-01'))/DAY;
    const hour=d.getHours()+d.getMinutes()/60;
    const season=Math.sin((doy/365)*2*Math.PI-1.4);              // -1 winter .. +1 summer
    const diurnal=Math.sin((hour/24)*2*Math.PI-1.7);
    const temp=58+season*22+diurnal*12+(rnd()-0.5)*4;            // °F
    const spread=4+ (1-Math.max(0,diurnal))*6 + rnd()*3;
    const dew=temp-spread;
    const es=t=>6.112*Math.exp((17.62*t)/(243.12+t));
    const tC=(temp-32)*5/9, dC=(dew-32)*5/9;
    let humidity=Math.max(8,Math.min(100,100*es(dC)/es(tC)));
    const press=29.92+Math.sin(doy/9)*0.18+Math.sin(doy/2.3)*0.07+(rnd()-0.5)*0.03;
    // rain events: ~3.5% of hours are storm hours; humidity rises during rain
    const wet=rnd()<0.035;
    if(wet) humidity=Math.min(100,Math.max(humidity,90+rnd()*10));
    const rainRate=wet?+(0.02+rnd()*rnd()*1.4).toFixed(3):0;
    const dayIdx=Math.floor(t/DAY);
    if(dayIdx!==lastDay){ precipToday=0; lastDay=dayIdx; }
    const dtHr=(obs.length?(t-obs[obs.length-1].t):HOUR)/HOUR;
    const precipIncr=+(rainRate*dtHr).toFixed(4);
    precipToday=+(precipToday+precipIncr).toFixed(4);
    const solarMax=Math.max(0,Math.sin((hour-6)/12*Math.PI))*(700+season*200);
    const solar=+Math.max(0,solarMax*(wet?0.3:1)+(rnd()-0.5)*20).toFixed(0);
    const uv=+Math.max(0,(solar/100)*(1+season*0.3)).toFixed(1);
    const windSpeed=+Math.max(0,4+season*2+(rnd()-0.3)*8+(wet?6:0)).toFixed(1);
    const windGust=+(windSpeed*(1.3+rnd()*0.6)).toFixed(1);
    const windDirection=+(((doy*7+hour*10)%360+(rnd()-0.5)*40+360)%360).toFixed(0);
    obs.push({ t, temperature:+temp.toFixed(1), dewpoint:+dew.toFixed(1), humidity:+humidity.toFixed(0),
      pressure:+press.toFixed(2), windSpeed, windGust, windDirection,
      rainRate, precipIncr, rainAccum:precipToday, rainToday:precipToday,
      uv, solarRadiation:solar });
  }
  for(let t=start;t<now-2*DAY;t+=HOUR) push(t);
  for(let t=now-2*DAY;t<=now-3*MIN;t+=10*MIN) push(t);
  const last=obs[obs.length-1];
  const freshnessMinutes=(now-last.t)/MIN;
  return {
    stationId:CONFIG.STATION_ID, status:freshnessMinutes>60?'stale':'online', units:'imperial',
    observedAtLocal:fmtClock(last.t), freshnessMinutes,
    current:{ temperature:last.temperature, dewpoint:last.dewpoint, humidity:last.humidity,
      pressure:last.pressure, windSpeed:last.windSpeed, windGust:last.windGust,
      windDirection:last.windDirection, rainRate:last.rainRate, rainToday:last.rainToday,
      uv:last.uv, solarRadiation:last.solarRadiation },
    source:'mock', observations:obs,
  };
}

/* ═══ Init + auto-refresh ═══════════════════════════════════════════════════*/
async function init(){
  loadPrefs(); initControls();
  await loadData();
  S.endMs=null;
  renderAll();
  if(CONFIG.API_BASE_URL && CONFIG.REFRESH_SECONDS>0){
    clearInterval(refreshTimer);
    refreshTimer=setInterval(async()=>{ await loadData(); if(S.endMs===null) renderAll(); }, CONFIG.REFRESH_SECONDS*1000);
  }
  let rt; addEventListener('resize',()=>{ clearTimeout(rt); rt=setTimeout(renderAll,150); });
}
document.addEventListener('DOMContentLoaded',init);

})();

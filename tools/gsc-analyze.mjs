// Groups Search Console query export into topics and finds "striking distance" keywords and pages.
// node tools/gsc-analyze.mjs <export-folder>
import fs from 'node:fs';
const dir = process.argv[2];
const csv = f => fs.readFileSync(`${dir}/${f}`, 'utf8').trim().split(/\r?\n/).slice(1).map(l => { const p = l.match(/("([^"]|"")*"|[^,]+)/g); return { key: p[0].replace(/^"|"$/g, ''), clicks: +p[1], imp: +p[2], pos: +p[4] }; });
const q = csv('Queries.csv'), pages = csv('Pages.csv');
const topics = [
  ['brand', /neon/], ['cost / price / calculator', /cost|price|how much|calculator|quote|estimate|cheap|afford/],
  ['open transport', /open (auto|car|carrier|transport)/], ['enclosed', /enclosed/], ['terminal', /terminal/], ['door to door', /door/],
  ['another state / cross country', /another state|cross country|across|out of state|interstate/], ['military', /military|pcs/], ['motorcycle', /motorcycle/], ['snowbird', /snowbird|snow bird/],
  ['near me / company', /near me|compan|service|best|top/], ['california', /california|\bca\b|los angeles|san /], ['texas', /texas|dallas|houston|austin/], ['florida', /florida|miami|tampa|orlando/],
  ['new york', /new york|\bny\b|nyc/], ['virginia/dc', /virginia|\bva\b|dc|washington|arlington|richmond|woodbridge/], ['other states/cities', /alabama|arizona|colorado|georgia|illinois|ohio|carolina|mobile|denver|chicago|atlanta|seattle|oregon|nevada|utah|michigan|jersey|maryland|delaware|hawaii|alaska/],
];
const agg = {};
for (const r of q) { const t = (topics.find(([, re]) => re.test(r.key)) || ['other'])[0]; const a = agg[t] = agg[t] || { q: 0, clicks: 0, imp: 0, posw: 0 }; a.q++; a.clicks += r.clicks; a.imp += r.imp; a.posw += r.pos * r.imp; }
console.log('TOPIC'.padEnd(34), 'queries impressions clicks avgPos');
Object.entries(agg).sort((a, b) => b[1].imp - a[1].imp).forEach(([t, a]) => console.log(t.padEnd(34), String(a.q).padStart(7), String(a.imp).padStart(11), String(a.clicks).padStart(6), (a.posw / a.imp).toFixed(1).padStart(6)));
console.log('\nSTRIKING DISTANCE (pos 8-30, >=40 impressions):');
q.filter(r => r.pos >= 8 && r.pos <= 30 && r.imp >= 40).sort((a, b) => b.imp - a.imp).slice(0, 25).forEach(r => console.log(String(r.imp).padStart(5), r.pos.toFixed(1).padStart(5), r.key));
console.log('\nBIG VOLUME, FAR (pos > 30, top impressions):');
q.filter(r => r.pos > 30).sort((a, b) => b.imp - a.imp).slice(0, 25).forEach(r => console.log(String(r.imp).padStart(5), r.pos.toFixed(1).padStart(5), r.key));
console.log('\nTOP PAGES BY IMPRESSIONS:');
pages.sort((a, b) => b.imp - a.imp).slice(0, 25).forEach(r => console.log(String(r.imp).padStart(5), String(r.clicks).padStart(3), r.pos.toFixed(1).padStart(5), r.key.replace('https://neonautotransport.com', '')));
const byType = {}; for (const p of pages) { const u = p.key.replace('https://neonautotransport.com', ''); const t = /^\/routes\/city\/[a-z-]+-to-/.test(u) ? 'city-to-city' : /^\/routes\/city\//.test(u) ? 'city' : /-to-[a-z-]+-car-shipping/.test(u) ? 'state-to-state' : /-car-shipping\/?$/.test(u) ? 'state' : /^\/services\//.test(u) ? 'service' : /^\/blog\//.test(u) ? 'blog' : u === '/' ? 'home' : 'other'; const a = byType[t] = byType[t] || { n: 0, imp: 0, clicks: 0, posw: 0 }; a.n++; a.imp += p.imp; a.clicks += p.clicks; a.posw += p.pos * p.imp; }
console.log('\nPAGE TYPES:'); Object.entries(byType).sort((a, b) => b[1].imp - a[1].imp).forEach(([t, a]) => console.log(t.padEnd(16), String(a.n).padStart(4), 'pages', String(a.imp).padStart(6), 'imp', String(a.clicks).padStart(3), 'clicks', (a.posw / a.imp).toFixed(1), 'pos'));

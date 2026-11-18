// For each URL path in a Search Console TSV, report what the page is now:
// file on disk, noindex or not, in sitemap or not, redirected, and the last git change date.
//   node tools/page-status.mjs seo/data/gsc-pages-90d-2026-11-16.tsv [minImpressions]
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const [tsv, minImp = '20'] = process.argv.slice(2);
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const redirects = (vercel.redirects || []).map(r => [r.source.replace(/\/$/, ''), r.destination]);

function fileFor(p) {
  const clean = p.split('?')[0].replace(/\/+$/, '').replace(/\.html$/, '');
  const cands = clean === '' ? ['index.html'] : [clean.slice(1) + '/index.html', clean.slice(1) + '.html'];
  return cands.find(f => fs.existsSync(f)) || null;
}
const rows = fs.readFileSync(tsv, 'utf8').trim().split('\n').slice(1).map(l => l.split('\t'))
  .filter(c => !/rwg_token/.test(c[0]) && +c[2] >= +minImp);
const out = [];
for (const [p, clicks, imp, pos] of rows) {
  const clean = p.split('?')[0].replace(/\/+$/, '/');
  const red = redirects.find(([s]) => s === clean.replace(/\/$/, ''));
  const f = fileFor(p);
  let noindex = '', last = '';
  if (f) {
    const html = fs.readFileSync(f, 'utf8');
    noindex = /<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html) ? 'NOINDEX' : '';
    last = execSync(`git log -1 --format=%ad --date=short -- "${f}"`, { encoding: 'utf8' }).trim();
  }
  const inMap = sitemap.includes(`<loc>https://neonautotransport.com${clean}</loc>`);
  out.push([p, clicks, imp, (+pos).toFixed(1), red ? 'redirect->' + red[1] : (f || 'MISSING'), noindex, inMap ? 'sitemap' : 'not-in-sitemap', last].join('\t'));
}
console.log('page\tclicks\timpr\tpos\tfile\tnoindex\tsitemap\tlast_change');
console.log(out.join('\n'));

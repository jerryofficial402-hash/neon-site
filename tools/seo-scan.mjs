// Full-site on-page SEO scan of the static build (every .html page).
//   node tools/seo-scan.mjs > seo/data/seo-scan-YYYY-MM-DD.json
// Checks: title / meta description presence + length + duplicates, H1 count, canonical
// (present, absolute, self), noindex, broken internal links, images without alt, thin pages.
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const ROOT = process.cwd();
const SKIP = /^(node_modules|tools|seo|\.git|\.claude|api|css|js|images|fonts|models)$/;
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP.test(e.name)) walk(path.join(d, e.name)); }
    else if (e.name.endsWith('.html')) files.push(path.join(d, e.name));
  }
})(ROOT);

const vercel = fs.existsSync('vercel.json') ? JSON.parse(fs.readFileSync('vercel.json', 'utf8')) : {};
const redirects = new Set((vercel.redirects || []).map(r => r.source.replace(/\/$/, '')));
const toUrl = f => {
  let r = '/' + path.relative(ROOT, f).split(path.sep).join('/');
  if (r.endsWith('/index.html')) r = r.slice(0, -10);
  return r;
};
const exists = new Set(files.map(toUrl));
const resolves = u => {
  u = u.split('#')[0].split('?')[0];
  if (!u || u === '/') return true;
  const n = u.replace(/\/$/, '');
  if (exists.has(n + '/') || exists.has(n) || exists.has(n + '.html') || redirects.has(n)) return true;
  return fs.existsSync(path.join(ROOT, decodeURIComponent(u)));
};

const pages = [], titles = {}, descs = {}, broken = {};
for (const f of files) {
  const url = toUrl(f);
  const $ = cheerio.load(fs.readFileSync(f, 'utf8'));
  const robots = ($('meta[name="robots"]').attr('content') || '').toLowerCase();
  const title = $('title').first().text().trim();
  const desc = ($('meta[name="description"]').attr('content') || '').trim();
  const canon = $('link[rel="canonical"]').attr('href') || '';
  const h1 = $('h1').length;
  $('script,style,noscript,header,footer,nav').remove();
  const words = $('main').length ? $('main').text().split(/\s+/).filter(Boolean).length : $('body').text().split(/\s+/).filter(Boolean).length;
  const noAlt = cheerio.load(fs.readFileSync(f, 'utf8'))('img:not([alt])').length;
  const p = { url, title, tlen: title.length, desc: desc.length, canon, h1, words, noindex: robots.includes('noindex'), noAlt };
  pages.push(p);
  if (!p.noindex) { (titles[title] ||= []).push(url); if (desc) (descs[desc] ||= []).push(url); }
  const $$ = cheerio.load(fs.readFileSync(f, 'utf8'));
  $$('a[href]').each((_, a) => {
    let h = $$(a).attr('href');
    if (/^https?:\/\/(www\.)?neonautotransport\.com/i.test(h)) h = h.replace(/^https?:\/\/(www\.)?neonautotransport\.com/i, '') || '/';
    if (!h.startsWith('/') || h.startsWith('//')) return;
    if (!resolves(h)) (broken[h.split('#')[0]] ||= new Set()).add(url);
  });
}
const idx = pages.filter(p => !p.noindex);
const out = {
  pages: pages.length, indexable: idx.length,
  missingTitle: idx.filter(p => !p.title).map(p => p.url),
  titleTooLong: idx.filter(p => p.tlen > 60).map(p => [p.url, p.tlen]),
  titleTooShort: idx.filter(p => p.tlen && p.tlen < 30).map(p => [p.url, p.tlen]),
  missingDesc: idx.filter(p => !p.desc).map(p => p.url),
  descTooLong: idx.filter(p => p.desc > 160).map(p => [p.url, p.desc]),
  descTooShort: idx.filter(p => p.desc && p.desc < 70).map(p => [p.url, p.desc]),
  dupTitles: Object.entries(titles).filter(([, v]) => v.length > 1),
  dupDescs: Object.entries(descs).filter(([, v]) => v.length > 1).map(([k, v]) => [k.slice(0, 80), v]),
  h1Missing: idx.filter(p => p.h1 === 0).map(p => p.url),
  h1Multiple: idx.filter(p => p.h1 > 1).map(p => [p.url, p.h1]),
  canonMissing: idx.filter(p => !p.canon).map(p => p.url),
  canonOther: idx.filter(p => p.canon && !p.canon.replace(/^https:\/\/neonautotransport\.com/, '').replace(/\/$/, '').startsWith(p.url.replace(/\.html$/, '').replace(/\/$/, '') || '/')).map(p => [p.url, p.canon]),
  thin: idx.filter(p => p.words < 300).map(p => [p.url, p.words]),
  imgNoAlt: idx.filter(p => p.noAlt).map(p => [p.url, p.noAlt]),
  brokenLinks: Object.entries(broken).map(([k, v]) => [k, [...v].length, [...v].slice(0, 3)]),
};
console.log(JSON.stringify(out, null, 1));

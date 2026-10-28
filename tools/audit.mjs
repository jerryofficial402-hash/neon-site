// Site audit: broken internal links, SEO tags, duplicates. Run: node tools/audit.mjs [--json out.json]
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..');
const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const vercel = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

// URL path ("/foo/") for a file, as Vercel cleanUrls + trailingSlash serves it
function urlFor(file) {
  let rel = path.relative(ROOT, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel.replace(/\.html$/, '') + '/';
}

const files = walk(ROOT);
const byUrl = new Map();
const dupFiles = [];
for (const f of files) {
  const u = urlFor(f);
  if (byUrl.has(u)) dupFiles.push([u, path.relative(ROOT, byUrl.get(u)), path.relative(ROOT, f)]);
  else byUrl.set(u, f);
}

const redirectSources = (vercel.redirects || []).map(r => r.source);
const rewriteSources = (vercel.rewrites || []).filter(r => !r.has).map(r => r.source);
function matchesRule(p, sources) {
  return sources.some(s => {
    if (!/[(:*]/.test(s)) return s === p || s + '/' === p || s === p + '/';
    try { return new RegExp('^' + s.replace(/:\w+\*?/g, '.*') + '$').test(p); } catch { return false; }
  });
}

function resolves(p) {
  if (byUrl.has(p)) return true;
  const disk = path.join(ROOT, decodeURIComponent(p));
  if (fs.existsSync(disk) && fs.statSync(disk).isFile()) return true;
  if (!p.endsWith('/') && byUrl.has(p + '/')) return true;
  return matchesRule(p, redirectSources) || matchesRule(p, rewriteSources);
}

const pages = [];
const broken = new Map();
for (const [url, file] of byUrl) {
  const html = fs.readFileSync(file, 'utf8');
  const $ = cheerio.load(html);
  const pg = {
    url, file: path.relative(ROOT, file),
    title: $('head title').first().text().trim(),
    desc: $('meta[name="description"]').attr('content') || '',
    canonical: $('link[rel="canonical"]').attr('href') || '',
    robots: $('meta[name="robots"]').attr('content') || '',
    h1: $('h1').length,
    imgNoAlt: $('img').filter((_, el) => !$(el).attr('alt')).length,
    titles: $('title').length,
    ldjson: $('script[type="application/ld+json"]').length,
    words: $('body').text().split(/\s+/).filter(Boolean).length,
  };
  pages.push(pg);
  $('a[href], link[rel="stylesheet"][href], script[src], img[src]').each((_, el) => {
    let h = $(el).attr('href') || $(el).attr('src');
    if (!h) return;
    if (/^https?:\/\/(www\.)?neonautotransport\.com/i.test(h)) h = h.replace(/^https?:\/\/(www\.)?neonautotransport\.com/i, '') || '/';
    if (!h.startsWith('/') || h.startsWith('//')) return;
    h = h.split('#')[0].split('?')[0];
    if (!h || resolves(h)) return;
    if (!broken.has(h)) broken.set(h, new Set());
    broken.get(h).add(url);
  });
}

const titleCount = new Map();
for (const p of pages) titleCount.set(p.title, (titleCount.get(p.title) || 0) + 1);
const canonicalHost = pages.filter(p => p.canonical && !p.canonical.startsWith('https://neonautotransport.com/'));
const canonMismatch = pages.filter(p => p.canonical && p.canonical.replace('https://neonautotransport.com', '') !== p.url);

// Sitemap
const sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
const smPaths = new Set(smUrls.map(u => u.replace(/^https?:\/\/(www\.)?neonautotransport\.com/, '') || '/'));
const smBroken = [...smPaths].filter(p => !byUrl.has(p));
const notInSitemap = pages.filter(p => !smPaths.has(p.url) && !/noindex/i.test(p.robots)).map(p => p.url);

const report = {
  pages: pages.length,
  duplicateFilesForSameUrl: dupFiles,
  brokenLinks: [...broken].map(([h, s]) => ({ href: h, count: s.size, from: [...s].slice(0, 3) })).sort((a, b) => b.count - a.count),
  missingTitle: pages.filter(p => !p.title).map(p => p.url),
  multipleTitleTags: pages.filter(p => p.titles > 1).map(p => p.url),
  longTitle: pages.filter(p => p.title.length > 65).length,
  duplicateTitles: [...titleCount].filter(([t, c]) => c > 1).map(([t, c]) => ({ t, c })),
  missingDesc: pages.filter(p => !p.desc).map(p => p.url),
  longDesc: pages.filter(p => p.desc.length > 165).length,
  missingCanonical: pages.filter(p => !p.canonical).map(p => p.url),
  canonicalWrongHost: canonicalHost.map(p => [p.url, p.canonical]),
  canonicalMismatch: canonMismatch.map(p => [p.url, p.canonical]),
  noindex: pages.filter(p => /noindex/i.test(p.robots)).map(p => p.url),
  h1Zero: pages.filter(p => p.h1 === 0).map(p => p.url),
  h1Multi: pages.filter(p => p.h1 > 1).map(p => [p.url, p.h1]),
  imgNoAltPages: pages.filter(p => p.imgNoAlt).length,
  thinPages: pages.filter(p => p.words < 400).map(p => [p.url, p.words]),
  sitemapCount: smUrls.length,
  sitemapBroken: smBroken,
  notInSitemap,
};

const out = process.argv.indexOf('--json');
if (out > -1) fs.writeFileSync(process.argv[out + 1], JSON.stringify(report, null, 2));
for (const [k, v] of Object.entries(report)) {
  const n = Array.isArray(v) ? v.length : v;
  console.log(k.padEnd(28), n, Array.isArray(v) && v.length ? JSON.stringify(v.slice(0, 4)) : '');
}

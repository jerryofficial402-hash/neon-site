// Technical SEO audit of the LIVE site, driven by sitemap.xml + the local HTML files.
//   node tools/tech-audit.mjs [baseUrl] > seo/data/tech-audit-YYYY-MM-DD.json
// Checks per sitemap URL: HTTP status (no redirect), X-Robots-Tag / meta robots noindex,
// exactly one canonical pointing to itself, one H1, JSON-LD parses, FAQPage questions
// visible on the page, images without width/height, lazy-loaded hero/first image,
// text that only shows on desktop (hidden md:block etc.).
// Site-wide: internal links that 404 or go through a redirect, indexable local pages
// missing from the sitemap, sitemap pages with no internal links pointing to them.
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const BASE = (process.argv[2] || 'https://neonautotransport.com').replace(/\/$/, '');
const HOST = 'https://neonautotransport.com';
const UA = 'Mozilla/5.0 (compatible; NeonTechAudit/1.0)';
const sm = fs.readFileSync('sitemap.xml', 'utf8');
const sitemap = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
const smPaths = new Set(sitemap.map(u => new URL(u).pathname));

async function pool(items, n, fn) {
  const out = new Array(items.length); let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}
const get = async (p) => {
  for (let t = 0; t < 3; t++) {
    try {
      const r = await fetch(BASE + p, { redirect: 'manual', headers: { 'user-agent': UA } });
      const body = r.status === 200 ? await r.text() : '';
      return { status: r.status, location: r.headers.get('location'), xrobots: r.headers.get('x-robots-tag') || '', body };
    } catch (e) { if (t === 2) return { status: 0, error: e.message, body: '' }; }
  }
};

const issues = {}; const add = (k, v) => (issues[k] ||= []).push(v);
const inlinks = {}; const linkSet = new Set();
const norm = (href, from) => {
  try {
    const u = new URL(href, HOST + from);
    if (u.origin !== HOST) return null;
    return u.pathname;
  } catch { return null; }
};

const pages = await pool([...smPaths], 8, async (p) => {
  const r = await get(p);
  if (r.status !== 200) { add('sitemapNot200', [p, r.status, r.location]); return null; }
  const $ = cheerio.load(r.body);
  const robots = ($('meta[name="robots"]').attr('content') || '') + ' ' + r.xrobots;
  if (/noindex/i.test(robots)) add('sitemapNoindex', p);
  const canons = $('link[rel="canonical"]').map((_, e) => $(e).attr('href')).get();
  if (canons.length !== 1) add('canonicalCount', [p, canons.length]);
  else if (canons[0] !== HOST + p) add('canonicalNotSelf', [p, canons[0]]);
  const h1 = $('h1').length; if (h1 !== 1) add('h1Count', [p, h1]);
  // JSON-LD
  const faqQs = [];
  $('script[type="application/ld+json"]').each((_, e) => {
    try {
      const j = JSON.parse($(e).text());
      const walk = (o) => { if (!o || typeof o !== 'object') return; if (Array.isArray(o)) return o.forEach(walk);
        if (o['@type'] === 'Question' && o.name) faqQs.push(o.name);
        if (o['@type'] === 'AggregateRating') add('aggregateRating', [p, o.ratingValue, o.reviewCount]);
        Object.values(o).forEach(walk); };
      walk(j);
    } catch { add('jsonLdInvalid', p); }
  });
  const visible = $('body').clone(); visible.find('script,style,noscript').remove();
  const text = visible.text().replace(/\s+/g, ' ');
  const flat = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const ft = flat(text);
  const missingQ = faqQs.filter(q => !ft.includes(flat(q)));
  if (missingQ.length) add('faqSchemaNotVisible', [p, missingQ.length, missingQ.slice(0, 2)]);
  // images
  const imgs = $('img');
  const noDims = imgs.filter((_, e) => !$(e).attr('width') || !$(e).attr('height')).map((_, e) => $(e).attr('src')).get();
  if (noDims.length) add('imgNoDims', [p, noDims.length, noDims.slice(0, 3)]);
  const firstMainImg = $('main img').first();
  if (firstMainImg.length && firstMainImg.attr('loading') === 'lazy') {
    // only an issue if it's in the first section (hero)
    const inHero = firstMainImg.closest('section').is($('main section').first()) || firstMainImg.closest('#hero-section,.nx-ihero,.nx-hero').length;
    if (inHero) add('heroLazy', [p, firstMainImg.attr('src')]);
  }
  // desktop-only text
  let hiddenWords = 0;
  $('[class*="hidden md:"], [class*="hidden lg:"], [class*="hidden sm:"]').each((_, e) => {
    const c = ($(e).attr('class') || '').split(/\s+/);
    if (c.includes('hidden') && c.some(x => /^(sm|md|lg):(block|flex|grid|inline|table)/.test(x))) hiddenWords += $(e).text().trim().split(/\s+/).filter(Boolean).length;
  });
  if (hiddenWords > 15) add('desktopOnlyText', [p, hiddenWords]);
  // content in HTML
  const mainWords = $('main').text().replace(/\s+/g, ' ').trim().split(' ').length;
  if (mainWords < 150) add('thinHtmlMain', [p, mainWords]);
  // links
  $('a[href]').each((_, e) => {
    const t = norm($(e).attr('href'), p); if (!t) return;
    linkSet.add(t); if (t !== p) (inlinks[t] ||= new Set()).add(p);
  });
  return p;
});

// internal link targets
const targets = [...linkSet].filter(t => !/\.(pdf|jpg|jpeg|png|webp|svg|xml|txt|md|css|js|ico)$/i.test(t));
const linkRes = await pool(targets, 8, async (t) => [t, await get(t)]);
for (const [t, r] of linkRes) {
  if (r.status === 404 || r.status === 410 || r.status >= 500 || r.status === 0) add('linkBroken', [t, r.status, [...(inlinks[t] || [])].slice(0, 3)]);
  else if (r.status >= 300 && r.status < 400) add('linkRedirects', [t, r.status, r.location, (inlinks[t] || new Set()).size, [...(inlinks[t] || [])].slice(0, 2)]);
}

// local indexable pages not in sitemap
const SKIP = /^(node_modules|tools|seo|\.git|\.claude|api|css|js|images|fonts|models)$/;
const local = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (e.isDirectory()) { if (!SKIP.test(e.name)) walk(path.join(d, e.name)); }
  else if (e.name.endsWith('.html')) local.push(path.join(d, e.name)); } })('.');
for (const f of local) {
  const h = fs.readFileSync(f, 'utf8');
  if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(h)) continue;
  const c = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!c || !c.startsWith(HOST)) { add('localNoCanonical', f); continue; }
  const cp = new URL(c).pathname;
  if (!smPaths.has(cp)) add('indexableNotInSitemap', [cp, f]);
}
// orphans: sitemap pages with no inlinks from other sitemap pages
for (const p of smPaths) if (p !== '/' && !(inlinks[p] && inlinks[p].size)) add('orphan', p);

const summary = Object.fromEntries(Object.entries(issues).map(([k, v]) => [k, v.length]));
console.log(JSON.stringify({ base: BASE, sitemapUrls: smPaths.size, crawled: pages.filter(Boolean).length, linkTargets: targets.length, summary, issues }, null, 1));

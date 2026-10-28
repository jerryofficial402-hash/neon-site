// One-pass link/SEO fixes found by tools/audit.mjs. Safe to re-run.
import fs from 'node:fs';
import path from 'node:path';

const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');

// 1) vercel.json: hubs that 404 but are used in breadcrumbs, and the thank-you page
const vj = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const addRedirect = (source, destination) => { if (!vj.redirects.some(r => r.source === source)) vj.redirects.unshift({ source, destination, permanent: true }); };
addRedirect('/routes/', '/locations/');
addRedirect('/routes', '/locations/');
addRedirect('/author/', '/author/shazil-ali/');
addRedirect('/author', '/author/shazil-ali/');
fs.writeFileSync('vercel.json', JSON.stringify(vj, null, 2) + '\n');

// Simple (non-pattern) redirects: internal links should point straight at the destination
const redirectMap = new Map();
for (const r of vj.redirects) {
  if (/[(:*]/.test(r.source) || /^https?:/.test(r.destination)) continue;
  const s = r.source.endsWith('/') ? r.source : r.source + '/';
  if (['/routes/', '/author/'].includes(s)) continue; // breadcrumb hubs keep their URL
  redirectMap.set(s, r.destination);
}

const linkFixes = {
  '/services/enclosed-car-shipping/': '/services/enclosed-auto-transport/',
  '/routes/california-to-florida-enclosed/': '/california-to-florida-car-shipping/',
  '/routes/texas-to-florida-enclosed/': '/texas-to-florida-car-shipping/',
};
// Links to city pages that were never built: keep the text, drop the link
const unlink = ['/routes/city/boulder-co/', '/routes/city/roanoke-va/'];

let changed = 0, retargeted = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  const before = s;
  for (const [from, to] of Object.entries(linkFixes)) s = s.split(`href="${from}"`).join(`href="${to}"`);
  for (const u of unlink) s = s.replace(new RegExp(`<a[^>]*href="${u.replace(/\//g, '\\/')}"[^>]*>([\\s\\S]*?)<\\/a>`, 'g'), '$1');
  s = s.replace(/href="(?:https:\/\/neonautotransport\.com)?(\/[^"#?]*?)\/?"/g, (m, p) => {
    const key = p.endsWith('/') ? p : p + '/';
    if (!redirectMap.has(key)) return m;
    retargeted++;
    return `href="${redirectMap.get(key)}"`;
  });
  if (s !== before) { fs.writeFileSync(f, s); changed++; }
}

// 2) Canonicals
const setCanonical = (file, url) => {
  let s = fs.readFileSync(file, 'utf8');
  s = s.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  fs.writeFileSync(file, s);
};
setCanonical('author/shazil-ali.html', 'https://neonautotransport.com/author/shazil-ali/');
// Near-duplicate of /cost-calculator/ (same title + calculator); consolidate ranking signals there
setCanonical('car-shipping-cost-calculator/index.html', 'https://neonautotransport.com/cost-calculator/');

console.log({ filesChanged: changed, linksRetargeted: retargeted, redirects: vj.redirects.length });

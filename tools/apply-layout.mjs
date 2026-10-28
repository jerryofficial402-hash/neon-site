// Applies the shared header/footer + theme to every page. Safe to re-run.
// node tools/apply-layout.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const DRY = process.argv.includes('--dry');
const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const header = fs.readFileSync('tools/partials/header.html', 'utf8').trim();
const footer = fs.readFileSync('tools/partials/footer.html', 'utf8').trim();
// Bump when any /css or /js file changes: Vercel serves those with a 1-year immutable cache
const ASSET_VERSION = '20261029b';
const FONTS = 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&amp;family=Geist+Mono:wght@400;500&amp;display=swap';
const THEME = `<link rel="stylesheet" href="/css/theme.css?v=${ASSET_VERSION}">`;

// Inline scripts that only drove the old dark header / old mobile menu (md5 of whitespace-collapsed body)
const OLD_HEADER_SCRIPTS = new Set(['adcb8d', '0461cd', 'ee1941', '727756', '0f0f9d']);
const hash = s => crypto.createHash('md5').update(s.replace(/\s+/g, ' ')).digest('hex').slice(0, 6);

// Windows can briefly lock a file (indexer/antivirus); retry a few times
function writeSafe(f, data) {
  for (let i = 0; ; i++) {
    try { return fs.writeFileSync(f, data); }
    catch (e) { if (i >= 8) throw e; Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 250); }
  }
}

function files(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function replaceBlock(html, tag, replacement, last = false) {
  const open = last ? html.lastIndexOf(`<${tag}`) : html.search(new RegExp(`<${tag}[\\s>]`));
  if (open < 0) return null;
  const close = html.indexOf(`</${tag}>`, open);
  if (close < 0) return null;
  return html.slice(0, open) + replacement + html.slice(close + tag.length + 3);
}

const stats = { pages: 0, changed: 0, noHeader: [], noFooter: [], scriptsRemoved: 0, cdn: 0 };
for (const f of files('.')) {
  if (f.includes('route-template')) continue;
  stats.pages++;
  let html = fs.readFileSync(f, 'utf8');
  const before = html;

  const oldHeader = html.match(/<header[^>]*>/)?.[0] || '';
  const flow = oldHeader && !/\bfixed\b/.test(oldHeader) && !oldHeader.includes('nx-header');
  const hdr = flow ? header.replace('class="nx-header"', 'class="nx-header" data-nx-flow') : header;
  const h2 = replaceBlock(html, 'header', hdr);
  if (h2) html = h2; else stats.noHeader.push(f);
  const f2 = replaceBlock(html, 'footer', footer, true);
  if (f2) html = f2; else stats.noFooter.push(f);

  html = html.replace(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>\s*/g, (m, attrs, body) => {
    if (OLD_HEADER_SCRIPTS.has(hash(body))) { stats.scriptsRemoved++; return ''; }
    return m;
  });

  // Tailwind Play CDN is not for production; use the compiled stylesheet instead
  if (html.includes('cdn.tailwindcss.com')) {
    html = html.replace(/<script[^>]*src="https:\/\/cdn\.tailwindcss\.com[^"]*"[^>]*><\/script>/g, '<link rel="stylesheet" href="/css/tailwind.css">');
    stats.cdn++;
  }

  // /js/mobile-menu.js never existed (404); the shared header has its own menu script
  html = html.replace(/<script[^>]*src="\/js\/mobile-menu\.js"[^>]*><\/script>\s*/g, '');
  html = html.replace(/((?:src|href)=")(\/(?:js|css)\/[\w.-]+\.(?:js|css))(?:\?v=[^"]*)?"/g, (m, a, p) => `${a}${p}?v=${ASSET_VERSION}"`);

  // Typeface: Geist for text, Geist Mono for small labels
  html = html.replace(/https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^"']*/g, FONTS);
  if (!html.includes('family=Geist')) {
    html = html.replace(/<\/head>/i, `  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link rel="stylesheet" href="${FONTS}">\n</head>`);
  }

  if (!html.includes('/css/theme.css')) html = html.replace(/<\/head>/i, `  ${THEME}\n</head>`);

  if (html !== before) {
    stats.changed++;
    if (!DRY) writeSafe(f, html);
  }
}
console.log(JSON.stringify(stats, null, 1));

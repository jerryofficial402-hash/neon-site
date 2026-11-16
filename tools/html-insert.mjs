// Inserts an HTML snippet into a page, N lines above the line that contains a heading text,
// and adds the same content (as markdown) to the page's .md copies before that heading.
// node tools/html-insert.mjs <page.html> <snippet.html> "<heading text>" <linesAbove> [--class <marker-class>]
// Safe to re-run: skips pages that already contain the snippet's marker class.
import fs from 'node:fs';
import { htmlToMd } from './html-to-md.mjs';

const [file, snip, heading, up] = process.argv.slice(2);
const snippet = fs.readFileSync(snip, 'utf8');
const marker = (snippet.match(/(nx-[a-z0-9-]+-local)/) || [])[1];
const raw = fs.readFileSync(file, 'utf8');
const nl = raw.includes('\r\n') ? '\r\n' : '\n';
if (marker && raw.includes(marker)) { console.log('already has', marker, file); process.exit(0); }
const lines = raw.split(/\r?\n/);
const h = lines.findIndex(l => l.includes(heading));
if (h < 0) { console.error('heading not found', heading); process.exit(1); }
const at = h - (+up || 0);
if (!/^\s*<(div|section)/.test(lines[at])) { console.error('target line is not a block start:', lines[at]); process.exit(1); }
lines.splice(at, 0, ...snippet.replace(/\s+$/, '').split(/\r?\n/), '');
fs.writeFileSync(file, lines.join(nl));
console.log('inserted', marker, 'into', file, 'at line', at + 1);

// markdown copies
const base = file.replace(/\/index\.html$/, '').replace(/\.html$/, '');
const md = htmlToMd(`<main>${snippet}</main>`).trim();
const mdHeading = heading.replace(/&amp;/g, '&');
for (const m of [`${base}.md`, `${base}/index.md`]) {
  if (!fs.existsSync(m)) continue;
  const r = fs.readFileSync(m, 'utf8'); const n2 = r.includes('\r\n') ? '\r\n' : '\n';
  const L = r.split(/\r?\n/);
  if (L.includes(md.split('\n')[0])) continue;
  let i = L.findIndex(l => l.startsWith('#') && l.includes(mdHeading));
  if (i < 0) { console.log('  md heading not found, appended at end:', m); i = L.length; }
  L.splice(i, 0, md, '');
  fs.writeFileSync(m, L.join(n2));
  console.log('  md updated', m);
}

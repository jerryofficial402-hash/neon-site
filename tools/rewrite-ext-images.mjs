// Points every hot-linked Wikimedia/Unsplash image at its self-hosted copy (tools/out/ext-map.json) and drops the
// preconnect/dns-prefetch hints for those hosts. Safe to re-run.
import fs from 'node:fs';
import path from 'node:path';
const map = JSON.parse(fs.readFileSync('tools/out/ext-map.json', 'utf8'));
const SKIP = new Set(['node_modules', '.git', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : /\.(html|md)$/.test(e.name) && files.push(p); } })('.');
const pairs = Object.entries(map).flatMap(([u, v]) => [[u, v.local], [u.replace(/&/g, '&amp;'), v.local]]).sort((a, b) => b[0].length - a[0].length);
let changed = 0, swaps = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8'); const before = s;
  for (const [u, l] of pairs) if (s.includes(u)) { swaps += s.split(u).length - 1; s = s.split(u).join(l); }
  s = s.replace(/[ \t]*<link rel="(?:dns-prefetch|preconnect)" href="https:\/\/(?:upload\.wikimedia\.org|images\.unsplash\.com)"[^>]*>[ \t]*\r?\n?/g, '');
  if (s !== before) { fs.writeFileSync(f, s); changed++; }
}
console.log({ filesChanged: changed, urlsReplaced: swaps });

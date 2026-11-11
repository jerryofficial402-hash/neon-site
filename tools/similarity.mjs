// Near-duplicate check: word 5-gram shingles of each page's main text, Jaccard vs. its most similar sibling.
// node tools/similarity.mjs <glob-ish prefix regex>   e.g.  "^[a-z-]+-car-shipping/index.html$"
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
const re = new RegExp(process.argv[2]);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (/^(node_modules|\.git|tools|\.claude)$/.test(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : p.endsWith('.html') && re.test(p.split(path.sep).join('/')) && files.push(p); } })('.');
const pages = files.map(f => {
  const $ = cheerio.load(fs.readFileSync(f, 'utf8'));
  $('script,style,header,footer,nav,noscript,form,.nx-ihero-facts,.nx-mini-quote').remove();
  const name = f.split(path.sep).join('/').replace(/\/index\.html$|\.html$/, '');
  // neutralise the page's own place names so templates with swapped names still match
  const words = $('main').text().toLowerCase().replace(/[^a-z0-9$ ]+/g, ' ').split(/\s+/).filter(Boolean);
  const sh = new Set(); for (let i = 0; i + 5 <= words.length; i++) sh.add(words.slice(i, i + 5).join(' '));
  return { name, n: words.length, sh };
});
const rows = pages.map(p => {
  let best = 0, who = '';
  for (const q of pages) { if (q === p) continue; let inter = 0; for (const s of p.sh) if (q.sh.has(s)) inter++; const j = inter / (p.sh.size || 1); if (j > best) { best = j; who = q.name; } }
  return { page: p.name, words: p.n, sharedWithClosest: +(best * 100).toFixed(0), closest: who };
}).sort((a, b) => b.sharedWithClosest - a.sharedWithClosest);
fs.writeFileSync('tools/out/similarity.json', JSON.stringify(rows, null, 1));
const b = [0, 20, 40, 60, 80, 101]; for (let i = 0; i < b.length - 1; i++) console.log(`${b[i]}-${b[i + 1] - 1}% shared:`, rows.filter(r => r.sharedWithClosest >= b[i] && r.sharedWithClosest < b[i + 1]).length);
rows.slice(0, 12).forEach(r => console.log(r.sharedWithClosest + '%', r.words, r.page, '~', r.closest));
console.log('...least:'); rows.slice(-6).forEach(r => console.log(r.sharedWithClosest + '%', r.words, r.page));

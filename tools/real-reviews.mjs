// Replaces every testimonial grid that contains made-up reviews with the three verified Google reviews
// (tools/partials/real-reviews.html). A grid is the lowest common ancestor of the reviewer-name elements
// inside one <section>. reviews.html is handled separately. Safe to re-run.
// node tools/real-reviews.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const DRY = process.argv.includes('--dry');
const CARDS = fs.readFileSync('tools/partials/real-reviews.html', 'utf8').trimEnd() + '\n    ';
const FAKE = ['David Miller', 'Carlos Rodriguez', 'Sarah Jenkins', 'Marcus T.', 'Jennifer R.', 'David K.', 'Capt. Daniel K.', 'Elena R.', 'Lisa W.', 'Ryan P.'];
const REAL = ['Semih Akay', 'Mike Hainsworth', 'Viola Willoughby'];
const SKIP = new Set(['node_modules', '.git', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && p !== 'reviews.html' && files.push(p); } })('.');

const text = n => n.nodeName === '#text' ? n.value : (n.childNodes || []).map(text).join('');
const own = n => (n.childNodes || []).filter(c => c.nodeName === '#text').map(c => c.value).join('').replace(/\s+/g, ' ').replace(/^[—–-]\s*|&mdash;\s*/g, '').replace(/^\W+/, '').replace(/\s*\(.*$/, '').trim();
const ancestors = n => { const a = []; for (let p = n; p; p = p.parentNode) a.push(p); return a; };
const stats = { pages: 0, grids: 0, fakeCardsReplaced: 0 };

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  if (!FAKE.some(n => src.includes(n))) continue;
  const doc = parse(src, { sourceCodeLocationInfo: true });
  const sections = [];
  (function walk(n) { for (const c of n.childNodes || []) { if (c.tagName === 'section') sections.push(c); walk(c.content || c); } })(doc);
  const edits = [];
  for (const sec of sections) {
    const nameEls = [];
    (function walk(n) { for (const c of n.childNodes || []) { if (c.tagName) { const t = own(c); if (FAKE.includes(t) || REAL.includes(t)) nameEls.push({ el: c, fake: FAKE.includes(t) }); walk(c); } } })(sec);
    if (nameEls.length < 2 || !nameEls.some(x => x.fake)) continue;
    // lowest common ancestor of all reviewer-name elements
    const chains = nameEls.map(x => ancestors(x.el));
    const grid = chains[0].find(a => chains.every(c => c.includes(a)));
    if (!grid || !grid.sourceCodeLocation || !grid.sourceCodeLocation.endTag || grid === sec) continue;
    const l = grid.sourceCodeLocation;
    edits.push([l.startTag.endOffset, l.endTag.startOffset, CARDS, grid]);
    stats.grids++; stats.fakeCardsReplaced += nameEls.filter(x => x.fake).length;
    // headings that tie the reviews to one route ("What Customers Say About X to Y Shipping") become generic
    (function walk(n) { for (const c of n.childNodes || []) { if (c.tagName === 'h2' && /What Customers Say About/i.test(text(c))) { const h = c.sourceCodeLocation; edits.push([h.startTag.endOffset, h.endTag.startOffset, 'What Our Customers Say', null]); } walk(c); } })(sec);
  }
  if (!edits.length) continue;
  // grid wrapper: make it the shared review grid
  for (const [, , , grid] of edits.filter(e => e[3])) {
    const a = grid.sourceCodeLocation.attrs && grid.sourceCodeLocation.attrs.class;
    if (a) edits.push([a.startOffset, a.endOffset, 'class="nx-reviews"', null]);
    else { const at = grid.sourceCodeLocation.startTag.startOffset + 1 + grid.tagName.length; edits.push([at, at, ' class="nx-reviews"', null]); }
  }
  edits.sort((a, b) => b[0] - a[0]);
  let out = src; for (const [s, e, t] of edits) out = out.slice(0, s) + t + out.slice(e);
  stats.pages++;
  if (!DRY) fs.writeFileSync(f, out);
}
console.log({ ...stats, dry: DRY });

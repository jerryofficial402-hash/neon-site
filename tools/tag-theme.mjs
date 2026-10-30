// Adds cheap marker classes for css/theme.css so the theme doesn't need expensive substring/ancestor selectors.
// Markers (computed from each element's own classes/inline style, tag and position):
//   nx-flip        old dark container (navy/slate/black section, box, table row) shown light
//   nx-flip-card   ...that is a card/box (gets the soft card look)
//   nx-navy        brand-blue panel that stays dark (white text)
//   nx-fill        filled dark/brand link or button (white text)
//   nx-overlay     black overlay on a photo (white text)
//   nx-grad        old purple/indigo gradient card
//   nx-ghost       outline link written for a dark background
//   nx-deco        decorative glow/texture layer to hide
//   nx-quote-card  the box around the quote calculator form
//   nx-pill-tint   dark translucent pill that sat on a photo (shown as a light blue tag)
//   nx-row-hl      highlighted table row
//   nx-hero / nx-hero-wrap   first section of the page and its container
// Only class attributes change; the rest of each file is left byte-for-byte. Safe to re-run.
// node tools/tag-theme.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const DRY = process.argv.includes('--dry');
const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');

const FLIP_TAGS = new Set(['section', 'div', 'aside', 'article', 'header', 'main', 'table', 'thead', 'tbody', 'tr', 'td', 'th']);
const NAVY_TAGS = new Set(['section', 'div', 'aside', 'article', 'span', 'p']);
const DARK = new Set(['bg-[#0a2540]', 'bg-[#1a385a]', 'bg-[#103056]', 'bg-[#050a10]', 'bg-[#0f172a]', 'bg-[#1a1f36]', 'bg-[#112235]', 'bg-slate-900', 'bg-slate-800', 'bg-gray-900', 'bg-black', 'bg-cyan-950', 'stripe-gradient-bg']);
const DARK_PREFIX = ['bg-slate-900/', 'bg-slate-800/', 'bg-gray-900/', 'bg-[#0a2540]/', 'bg-cyan-950/', 'bg-cyan-900/'];
const DARK_FROM = ['from-[#0a2540]', 'from-[#1a1f36]', 'from-slate-900', 'from-slate-800'];
const NAVY = new Set(['bg-[#468de6]', 'bg-[#468DE6]', 'bg-[#635bff]', 'bg-[#39FF14]', 'bg-[#39ff14]', 'bg-[#3273c5]', 'bg-[#0a5fb4]', 'bg-[#053c87]', 'bg-blue-600', 'bg-blue-700', 'bg-indigo-600', 'bg-indigo-700', 'bg-[#32e612]', 'bg-[#32e011]', 'bg-[#00d4ff]', 'bg-[#00D4FF]']);
const GRAD = ['from-[#635bff]', 'from-[#4338ca]', 'from-indigo-', 'from-purple-', 'from-violet-'];
const GLOW_BG = ['bg-[#39FF14]', 'bg-[#00d4ff]', 'bg-[#635bff]'];
const INLINE_DARK = /background(?:-color)?\s*:\s*(?:#0a2540|#1a1f36|#0f172a|linear-gradient\(135deg,\s*#0a2540)/i;

const attr = (el, n) => (el.attrs || []).find(a => a.name === n);
const classes = el => ((attr(el, 'class') || {}).value || '').split(/\s+/).filter(Boolean);

function markersFor(el, ctx) {
  const tag = el.tagName;
  const cls = classes(el);
  const has = c => cls.includes(c);
  const pre = p => cls.some(c => c.startsWith(p));
  const style = (attr(el, 'style') || {}).value || '';
  const abs = has('absolute') || has('fixed');
  const isBtn = tag === 'a' || tag === 'button';
  const m = [];
  const dark = cls.some(c => DARK.has(c)) || DARK_PREFIX.some(pre) || (!abs && DARK_FROM.some(pre)) || INLINE_DARK.test(style);
  const navy = cls.some(c => NAVY.has(c));
  if (isBtn) {
    if (dark || navy) m.push('nx-fill');
    else if (tag === 'a' && (pre('hover:bg-white') || pre('bg-white/') || pre('hover:bg-[rgba(255')) && !pre('bg-[#')) m.push('nx-ghost');
  } else if (!(tag === 'header' && has('nx-header'))) {
    if (tag === 'tr' && (pre('bg-cyan') || has('bg-slate-700') || pre('bg-[#00d4ff]'))) m.push('nx-row-hl');
    else if (dark && !abs && FLIP_TAGS.has(tag)) {
      m.push('nx-flip');
      if (['div', 'aside', 'article', 'section'].includes(tag) && cls.some(c => /^rounded/.test(c) || /^(md:|lg:)?p-(6|8|10|12)$/.test(c))) m.push('nx-flip-card');
    } else if (navy && NAVY_TAGS.has(tag)) m.push('nx-navy');
    if (pre('bg-black/') || pre('from-black')) m.push(!abs && cls.some(c => /^rounded/.test(c)) ? 'nx-pill-tint' : 'nx-overlay');
    if (GRAD.some(pre)) m.push('nx-grad');
  }
  // decorative layers: glows, textures and gradient overlays behind the old dark heroes
  if (abs) {
    const blur = cls.some(c => c.startsWith('blur'));
    if ((blur && (GLOW_BG.some(pre) || has('rounded-full'))) || DARK_FROM.some(pre) || pre('bg-[#0a2540]/') || (ctx.parentFlip && has('inset-0'))) m.push('nx-deco');
  }
  return m;
}

let changedFiles = 0, added = 0;
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const doc = parse(src, { sourceCodeLocationInfo: true });
  const edits = []; // [offset, text] insert, or [start, end, text] replace
  let firstSectionDone = false;
  const bodyEl = (function find(n) { if (n.tagName === 'body') return n; for (const c of n.childNodes || []) { const r = find(c); if (r) return r; } return null; })(doc);

  function addMarkers(el, list) {
    const loc = el.sourceCodeLocation;
    if (!loc || !loc.startTag) return;
    const have = classes(el);
    const add = list.filter(x => !have.includes(x));
    if (!add.length) return;
    added += add.length;
    const a = loc.attrs && loc.attrs.class;
    if (a) {
      const raw = src.slice(a.startOffset, a.endOffset); // class="..."
      const q = raw.match(/^class\s*=\s*(["'])([\s\S]*)\1$/);
      if (q) { edits.push([a.startOffset, a.endOffset, `class=${q[1]}${(q[2].trim() + ' ' + add.join(' ')).trim()}${q[1]}`]); return; }
      edits.push([a.startOffset, a.endOffset, `class="${add.join(' ')}"`]); return;
    }
    const at = loc.startTag.startOffset + 1 + el.tagName.length;
    edits.push([at, at, ` class="${add.join(' ')}"`]);
  }

  (function walk(node, ctx) {
    for (const el of node.childNodes || []) {
      if (!el.tagName || el.tagName === 'template' || el.tagName === 'svg') continue;
      const list = markersFor(el, ctx);
      // first section of <main> (or of <body> when there is no main)
      if (!firstSectionDone && el.tagName === 'section' && (node.tagName === 'main' || node === bodyEl)) {
        firstSectionDone = true;
        list.push('nx-hero');
        const wrap = (el.childNodes || []).find(c => c.tagName && classes(c).some(k => k === 'container' || /^max-w-(7xl|6xl|screen)/.test(k)));
        if (wrap) addMarkers(wrap, ['nx-hero-wrap']);
      }
      if ((attr(el, 'id') || {}).value === 'advancedCalcForm') {
        for (let p = el.parentNode; p && p.tagName; p = p.parentNode) { const c = classes(p); if (c.includes('stripe-card') || c.some(k => /^rounded-(lg|xl|2xl|3xl)/.test(k))) { addMarkers(p, ['nx-quote-card']); break; } }
      }
      addMarkers(el, list);
      walk(el.content || el, { parentFlip: list.includes('nx-flip') });
    }
  })(doc, { parentFlip: false });

  if (!edits.length) continue;
  // merge edits on the same class attribute (hero-wrap + own markers) by applying from the end
  edits.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
  let out = src, lastStart = Infinity;
  for (const [s, e, t] of edits) {
    if (e > lastStart) continue; // overlapping edit on the same attribute: re-run picks it up
    out = out.slice(0, s) + t + out.slice(e); lastStart = s;
  }
  if (out !== src) { changedFiles++; if (!DRY) fs.writeFileSync(f, out); }
}
console.log({ files: files.length, changedFiles, markersAdded: added, dry: DRY });

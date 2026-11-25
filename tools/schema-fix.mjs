// Schema clean-up so structured data matches visible content.
//  1. Removes the bare microdata Question (itemscope/itemtype + itemprop="text") from "Quick Answer" boxes:
//     it has no name, so it's invalid, and the same text is already plain HTML.
//  2. For FAQPage JSON-LD whose questions aren't on the page: rebuilds mainEntity from the visible
//     FAQ section (h2 "FAQ"/"Frequently Asked" → h3 question + following text). If no visible FAQ
//     can be read, drops the questions that aren't visible (and the FAQPage if none are left).
//   node tools/schema-fix.mjs [--write]
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const WRITE = process.argv.includes('--write');
const SKIP = /^(node_modules|tools|seo|\.git|\.claude|api|css|js|images|fonts|models)$/;
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (e.isDirectory()) { if (!SKIP.test(e.name)) walk(path.join(d, e.name)); }
  else if (e.name.endsWith('.html')) files.push(path.join(d, e.name)); } })('.');

const flat = (s) => s.toLowerCase().replace(/&[a-z#0-9]+;/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
const stats = { microdataRemoved: 0, faqRebuilt: 0, faqTrimmed: 0, faqRemoved: 0, files: 0, rebuilt: [], trimmed: [] };

for (const f of files) {
  let h = fs.readFileSync(f, 'utf8'); const orig = h;
  // 1. bare microdata Question in quick answer
  const qa = h.match(/(<div[^>]*class="[^"]*quick-answer-content[^"]*"[^>]*?)\s+itemscope(?:="")?\s+itemtype="https:\/\/schema\.org\/Question"([^>]*>)([\s\S]*?)<\/div>/);
  if (qa) {
    const inner = qa[3].replace(/\s+itemprop="text"/, '');
    h = h.replace(qa[0], qa[1] + qa[2] + inner + '</div>');
    stats.microdataRemoved++;
  }
  // 2. FAQPage JSON-LD vs visible text
  const $ = cheerio.load(h);
  const body = $('body').clone(); body.find('script,style,noscript').remove();
  const visible = flat(body.text());
  // visible FAQ pairs
  const pairs = [];
  $('h2').each((_, e) => {
    if (!/faq|frequently asked/i.test($(e).text())) return;
    const scope = $(e).closest('section').length ? $(e).closest('section') : $(e).parent().parent();
    scope.find('h3, summary').each((_, q) => {
      const qc = $(q).clone(); qc.find('span,svg').remove();
      const qt = qc.text().replace(/\s+/g, ' ').trim();
      let ans = '';
      if (q.tagName === 'summary') ans = $(q).parent().clone().children('summary').remove().end().text();
      else { let n = $(q).next(); while (n.length && !/^h[1-3]$/i.test(n[0].tagName)) { ans += ' ' + n.text(); n = n.next(); } }
      ans = ans.replace(/\s+/g, ' ').trim();
      if (qt.endsWith('?') && ans.length > 20) pairs.push([qt, ans]);
    });
  });
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const b of blocks) {
    let j; try { j = JSON.parse(b[1]); } catch { continue; }
    let changed = false;
    const fix = (node) => {
      if (!node || typeof node !== 'object') return node;
      if (Array.isArray(node)) return node.map(fix).filter(x => x !== null);
      if (node['@type'] === 'FAQPage' && Array.isArray(node.mainEntity)) {
        const qs = node.mainEntity;
        const missing = qs.filter(q => !visible.includes(flat(q.name || '')));
        if (!missing.length) return node;
        changed = true;
        if (pairs.length >= 2) {
          node.mainEntity = pairs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }));
          stats.faqRebuilt++; stats.rebuilt.push(f);
        } else {
          node.mainEntity = qs.filter(q => visible.includes(flat(q.name || '')));
          if (!node.mainEntity.length) { stats.faqRemoved++; return null; }
          stats.faqTrimmed++; stats.trimmed.push(f);
        }
        return node;
      }
      for (const k of Object.keys(node)) { const v = fix(node[k]); if (v === null) delete node[k]; else node[k] = v; }
      return node;
    };
    let nj = fix(j);
    if (!changed) continue;
    if (nj && nj['@graph'] && !nj['@graph'].length) nj = null;
    const indent = /\n\s+"/.test(b[1]) ? 2 : 0;
    const rep = nj ? `<script type="application/ld+json">${indent ? '\n' + JSON.stringify(nj, null, 2) + '\n' : JSON.stringify(nj)}</script>` : '';
    h = h.replace(b[0], rep);
  }
  if (h !== orig) { stats.files++; if (WRITE) fs.writeFileSync(f, h); }
}
console.log(JSON.stringify({ ...stats, rebuilt: stats.rebuilt.slice(0, 40), trimmed: stats.trimmed, write: WRITE }, null, 1));

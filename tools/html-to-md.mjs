// Rebuilds the markdown copy of a page from its HTML <main> (headings, paragraphs, lists, tables, links).
// Keeps the existing front matter, refreshes `modified`. Writes every md path given after the html path.
// node tools/html-to-md.mjs <page.html> <copy.md> [<copy2.md> ...]
import fs from 'node:fs';
import * as cheerio from 'cheerio';

export function htmlToMd(html) {
  const $ = cheerio.load(html);
  const main = $('main');
  main.find('script, style, noscript, form, svg, iframe, .nx-mini-quote, nav[aria-label^="Bread"]').remove();
  const inline = el => $(el).contents().toArray().map(n => {
    if (n.type === 'text') return n.data;
    if (n.tagName === 'a') { const t = inline(n).trim(); const h = $(n).attr('href') || ''; return t && h && !h.startsWith('#') ? `[${t}](${h})` : t; }
    if (n.tagName === 'strong' || n.tagName === 'b') { const t = inline(n).trim(); return t ? `**${t}**` : ''; }
    if (n.tagName === 'br') return ' ';
    return inline(n);
  }).join('').replace(/\s+/g, ' ');
  const out = [];
  const seen = new Set();
  (function walk(el) {
    $(el).children().each((i, n) => {
      const tag = n.tagName;
      if (/^h[1-4]$/.test(tag)) { const t = inline(n).trim(); if (t) out.push(`${'#'.repeat(+tag[1])} ${t}`); }
      else if (tag === 'p') { const t = inline(n).trim(); if (t && !seen.has(t)) { seen.add(t); out.push(t); } }
      else if (tag === 'ul' || tag === 'ol') { const items = $(n).children('li').toArray().map(li => inline(li).trim()).filter(Boolean); if (items.length) out.push(items.map((t, j) => tag === 'ol' ? `${j + 1}. ${t}` : `- ${t}`).join('\n')); }
      else if (tag === 'table') {
        const rows = $(n).find('tr').toArray().map(tr => $(tr).children('th,td').toArray().map(c => inline(c).trim().replace(/\|/g, '/')));
        if (rows.length) { const w = Math.max(...rows.map(r => r.length)); const pad = r => [...r, ...Array(w - r.length).fill('')]; out.push([`| ${pad(rows[0]).join(' | ')} |`, `|${' --- |'.repeat(w)}`, ...rows.slice(1).map(r => `| ${pad(r).join(' | ')} |`)].join('\n')); }
      }
      else walk(n);
    });
  })(main);
  return out.join('\n\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

if (process.argv[1] && process.argv[1].endsWith('html-to-md.mjs')) {
  const [src, ...targets] = process.argv.slice(2);
  const body = htmlToMd(fs.readFileSync(src, 'utf8'));
  for (const t of targets) {
    const old = fs.existsSync(t) ? fs.readFileSync(t, 'utf8') : '';
    const fm = (old.replace(/\r\n/g, '\n').match(/^---\n[\s\S]*?\n---\n/) || [''])[0].replace(/^modified: .*$/m, `modified: ${new Date().toISOString().slice(0, 10)}`);
    fs.writeFileSync(t, `${fm}\n${body}`);
  }
}

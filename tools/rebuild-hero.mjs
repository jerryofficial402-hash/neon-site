// Rebuilds the first (hero) section of inner pages into one layout:
//   hero:  breadcrumb, eyebrow, title, short lead, quote/call buttons, trust facts | mini quote card (GET -> /cost-calculator/)
//   intro: Quick Answer box, long intro paragraph(s), anything else the old hero held | hero image
// Nothing is dropped except the old CTA buttons and decorative background layers. Skips the homepage, pages whose hero
// holds the full calculator, and pages listed in EXCLUDE. Safe to re-run (rebuilt heroes carry .nx-ihero).
// node tools/rebuild-hero.mjs [--dry] [file ...]
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import * as cheerio from 'cheerio';

const DRY = process.argv.includes('--dry');
const only = process.argv.slice(2).filter(a => !a.startsWith('--'));
const EXCLUDE = /^(index\.html|contact\.html|thank-you\.html|image-credits\.html|reviews\.html|privacy|terms|blog[\\/]|author[\\/]|es[\\/]|compare[\\/]|faqs|locations|resources|how-it-works|why-neon|insurance)/;
const SKIP = new Set(['node_modules', '.git', 'tools', '.agents', '.vercel', 'api']);
const files = [];
if (only.length) files.push(...only);
else (function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');

const FACTS = `<ul class="nx-ihero-facts">
          <li>FMCSA-licensed broker</li><li>$0 upfront deposit</li><li>$500,000 cargo insurance</li><li>5.0 on Google</li>
        </ul>`;
const QUOTE = `<form class="nx-mini-quote" action="/cost-calculator/" method="get">
        <p class="nx-mini-quote-h">Get your price in a minute</p>
        <p class="nx-mini-quote-p">Instant estimate. No deposit, no obligation.</p>
        <div class="nx-mini-quote-row">
          <label>Pickup ZIP<input name="from" inputmode="numeric" pattern="[0-9]{5}" maxlength="5" placeholder="e.g. 22191" autocomplete="postal-code" required></label>
          <label>Delivery ZIP<input name="to" inputmode="numeric" pattern="[0-9]{5}" maxlength="5" placeholder="e.g. 75001" required></label>
        </div>
        <label>Vehicle<select name="vehicle"><option value="sedan">Car / sedan</option><option value="suv">SUV</option><option value="truck">Pickup truck</option><option value="motorcycle">Motorcycle</option><option value="classic">Classic / exotic</option></select></label>
        <button type="submit" class="nx-btn nx-btn-block">See my estimate</button>
      </form>`;

const stats = { pages: 0, skipped: 0, leftovers: 0, noTitle: [] };
for (const f of files) {
  const rel = f.replace(/^\.[\\/]/, '');
  if (EXCLUDE.test(rel)) { stats.skipped++; continue; }
  const src = fs.readFileSync(f, 'utf8');
  if (!src.includes('nx-hero') || src.includes('nx-ihero')) { stats.skipped++; continue; }
  const doc = parse(src, { sourceCodeLocationInfo: true });
  let hero = null;
  (function walk(n) { for (const c of n.childNodes || []) { if (hero) return; if (c.tagName === 'section' && (c.attrs || []).some(a => a.name === 'class' && /\bnx-hero\b/.test(a.value))) hero = c; else walk(c.content || c); } })(doc);
  if (!hero) { stats.skipped++; continue; }
  const loc = hero.sourceCodeLocation;
  const html = src.slice(loc.startOffset, loc.endOffset);
  if (/advancedCalcForm|reviews-hero/.test(html)) { stats.skipped++; continue; }

  const $ = cheerio.load(html, null, false);
  const sec = $('section').first();
  const take = el => { const h = $.html(el); $(el).remove(); return h; };
  $('.nx-deco').remove();
  const crumb = sec.find('nav[aria-label^="Bread"]').first();
  const crumbHtml = crumb.length ? take(crumb) : '';
  const qa = sec.find('.quick-answer').first();
  const qaHtml = qa.length ? take(qa) : '';
  // title: the h1 if it is in the hero, otherwise the big display text that stood in for it
  let title = sec.find('h1').first();
  let titleHtml = '';
  if (title.length) { title.attr('class', 'nx-ihero-title'); titleHtml = take(title); }
  else {
    const big = sec.find('div, p, span').filter((i, e) => /\btext-(4|5|6)xl\b/.test($(e).attr('class') || '') && $(e).children().length <= 1).first();
    if (big.length) { titleHtml = `<p class="nx-ihero-title">${big.html().trim()}</p>`; big.remove(); }
    else { stats.noTitle.push(rel); continue; } // not a real hero (title lives outside it): leave the page alone
  }
  // eyebrow badge (skip if it only repeats the licence numbers shown in the facts list)
  const badge = sec.find('div, span').filter((i, e) => /\brounded-full\b/.test($(e).attr('class') || '') && /\binline-flex\b/.test($(e).attr('class') || '') && $(e).text().trim().length > 3).first();
  let eyebrow = '';
  if (badge.length) { const t = badge.text().replace(/\s+/g, ' ').trim(); if (!/USDOT|MC #|MC No/i.test(t)) eyebrow = `<p class="nx-eyebrow">${cheerio.load('')('<i>').text(t).html()}</p>`; badge.remove(); }
  // old CTAs -> replaced by the standard pair
  sec.find('a').filter((i, e) => /calculator|quote|tel:/i.test($(e).attr('href') || '') && /\bpx-\d/.test($(e).attr('class') || '')).remove();
  // image (non-decorative)
  const img = sec.find('img').first();
  const imgHtml = img.length ? $.html(img.attr('loading', 'lazy').attr('class', 'nx-intro-img')) : '';
  if (img.length) img.remove();
  // paragraphs: a short first one becomes the lead, the rest goes to the intro band
  const paras = sec.find('p').toArray().filter(p => $(p).text().trim());
  let lead = '';
  const intro = [];
  paras.forEach((p, i) => { const t = $(p).text().trim(); if (i === 0 && t.length <= 300) { lead = `<p class="nx-ihero-lead">${$(p).html().trim()}</p>`; } else intro.push(`<p>${$(p).html().trim()}</p>`); $(p).remove(); });
  // leftovers with real text (lists, stats, notes) are kept in the intro band
  // Walk down through pure layout wrappers; keep grids, lists, tables and content blocks whole.
  const hasText = e => $(e).text().trim().length > 0;
  const ownText = e => $(e).contents().filter((j, n) => n.type === 'text' && n.data.trim()).length > 0;
  const isAtomic = e => /^(ul|ol|table|dl|p|h[2-6]|blockquote|figure)$/.test(e.tagName) || /\bgrid\b/.test($(e).attr('class') || '');
  const isWrapper = e => /^(div|section)$/.test(e.tagName) && !ownText(e) && !isAtomic(e);
  const rest = [];
  (function collect(el) { $(el).children().each((j, k) => { if (!hasText(k)) return; if (isWrapper(k) && $(k).children().filter((x, y) => hasText(y)).length) collect(k); else rest.push(k); }); })(sec[0]);
  const restHtml = rest.map(n => $.html(n));
  stats.leftovers += restHtml.length;

  const id = sec.attr('id') ? ` id="${sec.attr('id')}"` : '';
  const out = `<section class="nx-ihero nx-hero"${id}>
    <div class="nx-wrap nx-ihero-in">
      <div class="nx-ihero-copy">
        ${crumbHtml}
        ${eyebrow}
        ${titleHtml}
        ${lead}
        <div class="nx-actions-row"><a href="/cost-calculator/" class="nx-btn">Get a free quote</a><a href="tel:+15715767711" class="nx-btn nx-btn-ghost">Call (571) 576-7711</a></div>
        ${FACTS}
      </div>
      ${QUOTE}
    </div>
  </section>
  <section class="nx-intro">
    <div class="nx-wrap nx-intro-in${imgHtml ? '' : ' nx-intro-solo'}">
      <div class="nx-intro-text">
        ${qaHtml}
        ${intro.join('\n        ')}
        ${restHtml.join('\n        ')}
      </div>
      ${imgHtml ? `<figure class="nx-intro-fig">${imgHtml}</figure>` : ''}
    </div>
  </section>`.replace(/\n\s*\n/g, '\n');
  const next = src.slice(0, loc.startOffset) + out + src.slice(loc.endOffset);
  stats.pages++;
  if (!DRY) fs.writeFileSync(f, next);
}
console.log({ ...stats, noTitle: stats.noTitle.length, noTitleSample: stats.noTitle.slice(0, 5), dry: DRY });

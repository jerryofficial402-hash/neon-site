// 38 state pages (<state>-car-shipping/index.html) shared 54-72% of their text with each other.
// This removes the copied blocks (Tips & Tricks, Factors that Affect…, the generic FAQ and its schema, the
// templated "Planning to ship a car to or from X?" intro) and adds state-specific sections from tools/state-data.mjs.
// Safe to re-run (pages already carrying .nx-state-local are rebuilt in place). node tools/state-content.mjs [--dry]
import fs from 'node:fs';
import * as cheerio from 'cheerio';
import { STATES } from './state-data.mjs';

const DRY = process.argv.includes('--dry');
const SITE = 'https://neonautotransport.com';
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cityName = s => { const m = s.match(/^(.*)-([a-z]{2})$/); return m[1].split('-').map(w => w === 'st' ? 'St.' : w[0].toUpperCase() + w.slice(1)).join(' ') + ', ' + m[2].toUpperCase(); };

// the block that holds one heading and nothing else of its kind
function block($, h, tag) {
  let b = h;
  while (b.parent().length && !b.parent().is('section, main') && b.parent().find(tag).length === 1) b = b.parent();
  return b;
}

function sections(s) {
  const cities = s.cities.filter(c => fs.existsSync(`routes/city/${c}.html`));
  return `
    <section class="nx-section nx-city nx-state-local">
      <div class="nx-wrap nx-split nx-city-split">
        <div class="nx-city-prose">
          <h2>Shipping a car in ${esc(s.name)}</h2>
          ${s.about.map(p => `<p>${esc(p)}</p>`).join('\n          ')}
        </div>
        <div class="nx-card nx-city-box">
          <h3>Good to know in ${esc(s.name)}</h3>
          <ul class="nx-ticks">
            ${s.tips.map(t => `<li>${esc(t)}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>
    <section class="nx-section nx-section-soft nx-city nx-state-local">
      <div class="nx-wrap nx-city-narrow">
        <h2>When to book in ${esc(s.name)}</h2>
        <p>${esc(s.season)}</p>
        <h2>Registering a car in ${esc(s.name)}</h2>
        <p>New ${esc(s.name)} residents register with ${esc(s.office)}. Check what that office needs from you before your car arrives.</p>
        <h2>${esc(s.name)} car shipping questions</h2>
        <div class="nx-city-faq">
          ${s.faq.map(([q, a]) => `<h3>${esc(q)}</h3>\n          <p>${esc(a)}</p>`).join('\n          ')}
        </div>
        ${cities.length ? `<h2>${esc(s.name)} city guides</h2>
        <ul class="nx-city-links">
          ${cities.map(c => `<li><a href="/routes/city/${c}/">${esc(cityName(c))} car shipping</a></li>`).join('\n          ')}
        </ul>` : ''}
      </div>
    </section>
  `;
}

const stats = { pages: 0, removedWords: 0, addedWords: 0, missing: [] };
for (const [slug, s] of Object.entries(STATES)) {
  const f = `${slug}-car-shipping/index.html`;
  if (!fs.existsSync(f)) { stats.missing.push(f); continue; }
  const $ = cheerio.load(fs.readFileSync(f, 'utf8'), { decodeEntities: false });
  $('.nx-state-local').remove();
  const words = el => el.text().split(/\s+/).filter(Boolean).length;
  for (const re of [/^Tips & Tricks/, /^Factors that Affect/, /Vehicle Transport FAQs$/]) {
    const h = $('main h2').filter((i, e) => re.test($(e).text().trim())).first();
    if (!h.length) continue;
    const b = block($, h, 'h2');
    stats.removedWords += words(b);
    b.remove();
  }
  // templated intro sentence ("Planning to ship a car to or from Ohio? Whether you're relocating to the Buckeye State…")
  $('main p').filter((i, e) => /^Planning to ship a car to or from /.test($(e).text().trim())).each((i, e) => { stats.removedWords += words($(e)); $(e).remove(); });
  // Quick Answer: the state's own opening line instead of the shared template sentence
  const qa = $('.quick-answer-content p').first();
  if (qa.length && /ships cars to and from|door-to-door service covering all major cities/.test(qa.text())) {
    const first = s.about[0].match(/^.*?[.!?](\s|$)/)[0].trim();
    qa.text(`${first} Neon Auto Transport arranges door-to-door shipping anywhere in ${s.name} with licensed, insured carriers and no upfront deposit. Get an instant quote at neonautotransport.com/cost-calculator/ or call (571) 576-7711.`);
  }
  // generic FAQ schema -> this page's own questions
  $('script[type="application/ld+json"]').filter((i, e) => /"FAQPage"/.test($(e).html())).remove();
  $('head').append(`<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${SITE}/${slug}-car-shipping/#faq`,
    mainEntity: s.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) })}</script>\n`);
  // new sections right after the routes/hub block (3rd child of main), before nearby cities and videos
  const anchor = $('main > section').filter((i, e) => !/nx-ihero|nx-intro/.test($(e).attr('class') || '')).first();
  const html = sections(s);
  stats.addedWords += cheerio.load(html).text().split(/\s+/).filter(Boolean).length;
  anchor.length ? anchor.after(html) : $('main').append(html);
  stats.pages++;
  if (!DRY) fs.writeFileSync(f, $.html());
}
console.log({ ...stats, dry: DRY });

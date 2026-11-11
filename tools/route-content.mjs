// Thin state-to-state pages (<a>-to-<b>-car-shipping/index.html, ~195 words of template text):
//  - the 20 in tools/route-data.mjs get real route content, their own title/description, Quick Answer and FAQ schema
//  - the other thin ones get noindex,follow and leave sitemap.xml / llms-full.txt
// Small California town pages: sacramento-ca-car-shipping redirects to /routes/city/sacramento-ca/;
// chico, gridley and oroville (172 near-identical words) get noindex.
// Safe to re-run. node tools/route-content.mjs [--dry]
import fs from 'node:fs';
import * as cheerio from 'cheerio';
import { ROUTES } from './route-data.mjs';

const DRY = process.argv.includes('--dry');
const SITE = 'https://neonautotransport.com';
const TODAY = new Date().toISOString().slice(0, 10);
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const REDIRECT = { '/sacramento-ca-car-shipping/': '/routes/city/sacramento-ca/' };
const NOINDEX_EXTRA = ['chico-ca-car-shipping', 'gridley-ca-car-shipping', 'oroville-ca-car-shipping'];

function miles(a, b, c, d) {
  const r = x => x * Math.PI / 180, R = 3959;
  const h = Math.sin(r(c - a) / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(r(d - b) / 2) ** 2;
  const m = 2 * R * Math.asin(Math.sqrt(h)) * 1.2;
  return Math.round(m / (m < 1000 ? 10 : 50)) * (m < 1000 ? 10 : 50);
}
const days = m => m < 300 ? '1–2 days' : m < 700 ? '2–3 days' : m < 1200 ? '3–5 days' : m < 1800 ? '4–6 days' : m < 2400 ? '6–8 days' : '7–10 days';
const words = el => el.text().split(/\s+/).filter(Boolean).length;

function sections(r) {
  const title = `${r.from} to ${r.to}`;
  const pairs = r.pairs.map(([a, la, lo, b, lb, lob]) => { const m = miles(la, lo, lb, lob); return { a, b, m, d: days(m) }; });
  const table = pairs.length ? `
        <div class="nx-grid nx-grid-3 nx-city-routes">
          ${pairs.map(p => `<div class="nx-card nx-card-plain"><h3>${esc(p.a)} to ${esc(p.b)}</h3><p>${r.ocean ? 'Truck leg: about' : 'About'} ${p.m.toLocaleString('en-US')} miles &middot; ${p.d} on the truck</p></div>`).join('\n          ')}
        </div>
        <p class="nx-city-note">Approximate road distance and time after pickup. Your price depends on the exact cities, the season, the vehicle and the trailer type. <a href="/cost-calculator/">Get an exact quote</a> for your dates.</p>` : `
        <p class="nx-city-note">Your price depends on the sailing, the ports used, the vehicle and any truck leg on the mainland. <a href="/cost-calculator/">Get a quote</a> or call us to plan the trip.</p>`;
  return `
    <section class="nx-section nx-city nx-route-local">
      <div class="nx-wrap nx-split nx-city-split">
        <div class="nx-city-prose">
          <h2>How a car gets from ${esc(r.from)} to ${esc(r.to)}</h2>
          <p>${esc(r.path)}</p>
          <p>${esc(r.why)}</p>
        </div>
        <div class="nx-card nx-city-box">
          <h3>Before you book</h3>
          <ul class="nx-ticks">
            ${r.tips.map(t => `<li>${esc(t)}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>
    <section class="nx-section nx-section-soft nx-city nx-route-local">
      <div class="nx-wrap">
        <div class="nx-sec-head nx-left"><p class="nx-eyebrow">Distance and timing</p><h2>${esc(title)}: how long it takes</h2>
          <p>${esc(r.time)}</p></div>${table}
      </div>
    </section>
    <section class="nx-section nx-city nx-route-local">
      <div class="nx-wrap nx-city-narrow">
        <h2>Best time to ship</h2>
        <p>${esc(r.season)}</p>
        <h2>${esc(title)} car shipping questions</h2>
        <div class="nx-city-faq">
          ${r.faq.map(([q, a]) => `<h3>${esc(q)}</h3>\n          <p>${esc(a)}</p>`).join('\n          ')}
        </div>
        <h2>Related</h2>
        <ul class="nx-city-links">
          ${r.links.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>
    <section class="nx-cta-band nx-route-local">
      <div class="nx-wrap nx-cta-in">
        <div><h2>Get your ${esc(title)} quote</h2><p>Instant estimate, no deposit, no obligation.</p></div>
        <div class="nx-actions-row"><a href="/cost-calculator/" class="nx-btn nx-btn-light">Get a free quote</a><a href="tel:+15715767711" class="nx-btn nx-btn-outline-light">Call (571) 576-7711</a></div>
      </div>
    </section>
  `;
}

function markdown(slug, r, title, desc, body) {
  return `---\ntitle: "${title}"\nurl: ${SITE}/${slug}-car-shipping/\nmodified: ${TODAY}\nauthor: "Neon Auto Transport"\ndescription: "${desc}"\ntype: "service"\ncompany: "Neon Auto Transport LLC"\nmc_number: "1703787"\nusdot_number: "4355879"\nphone: "(571) 576-7711"\nemail: "info@neonautotransport.com"\nheadquarters: "2709 Neabsco Common Pl Suite 101, Woodbridge, VA 22191"\n---\n\n${body}`;
}

const stats = { rich: 0, noindex: 0, extraNoindex: 0, redirected: 0 };
const drop = new Set(); // url paths to remove from sitemap / llms
const { htmlToMd } = await import('./html-to-md.mjs');

const dirs = fs.readdirSync('.').filter(d => /^[a-z-]+-to-[a-z-]+-car-shipping$/.test(d) && fs.existsSync(`${d}/index.html`));
for (const d of dirs) {
  const slug = d.replace(/-car-shipping$/, '');
  const f = `${d}/index.html`;
  const src = fs.readFileSync(f, 'utf8');
  const $ = cheerio.load(src, { decodeEntities: false });
  const r = ROUTES[slug];
  if (!r) {
    const probe = cheerio.load(src); probe('script,style,header,footer,nav,noscript,form').remove();
    const thin = words(probe('main')) < 400 || /noindex/.test($('meta[name="robots"]').attr('content') || '');
    if (!thin) continue;
    $('meta[name="robots"]').attr('content', 'noindex, follow');
    if (!$('meta[name="robots"]').length) $('title').after('\n  <meta name="robots" content="noindex, follow">');
    drop.add(`/${d}/`); stats.noindex++;
    if (!DRY) fs.writeFileSync(f, $.html());
    continue;
  }
  const t = `${r.from} to ${r.to}`;
  const title = `${t} Car Shipping: Route & Timing | Neon`;
  const desc = `Shipping a car from ${r.from} to ${r.to}: the route carriers take, how long it takes, the best time to book and what to prepare. $0 deposit, insured transport.`;
  $('title').text(title);
  $('meta[name="description"]').attr('content', desc);
  $('meta[name="robots"]').attr('content', 'index, follow');
  $('meta[property="og:title"]').attr('content', title);
  $('meta[property="og:description"]').attr('content', desc);
  $('.nx-ihero-lead').text(`${r.ocean ? 'Ocean and truck' : 'Door-to-door'} car shipping from ${r.from} to ${r.to} with licensed, insured carriers and no upfront deposit.`);
  $('.nx-ihero-copy .nx-eyebrow').text('State-to-state route');
  const qa = $('.quick-answer-content p').first();
  if (qa.length) qa.text(`${r.path.match(/^.*?[.!?](\s|$)/)[0].trim()} ${r.time} Neon Auto Transport arranges the trip with licensed, insured carriers and no upfront deposit. Get an instant quote at neonautotransport.com/cost-calculator/ or call (571) 576-7711.`);
  const intro = $('main > section.nx-intro').first();
  intro.nextAll().remove();
  intro.after(sections(r));
  $('script[type="application/ld+json"]').filter((i, e) => /"FAQPage"/.test($(e).html())).remove();
  $('head').append(`<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${SITE}/${d}/#faq`,
    mainEntity: r.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) })}</script>\n`);
  const html = $.html();
  stats.rich++;
  if (!DRY) {
    fs.writeFileSync(f, html);
    const md = markdown(slug, r, title, desc, htmlToMd(html));
    for (const m of [`${d}/index.md`, `${d}.md`]) if (fs.existsSync(m) || m.endsWith('index.md')) fs.writeFileSync(m, md);
  }
}

// small California town pages
for (const d of NOINDEX_EXTRA) {
  const f = `${d}/index.html`;
  if (!fs.existsSync(f)) continue;
  let h = fs.readFileSync(f, 'utf8');
  if (/name="robots"/.test(h)) h = h.replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, follow">');
  else h = h.replace(/<\/title>/, '</title>\n  <meta name="robots" content="noindex, follow">');
  drop.add(`/${d}/`); stats.extraNoindex++;
  if (!DRY) fs.writeFileSync(f, h);
}
for (const p of Object.keys(REDIRECT)) { drop.add(p); stats.redirected++; }

const sm = fs.readFileSync('sitemap.xml', 'utf8');
const sm2 = sm.replace(/\s*<url>\s*<loc>https:\/\/neonautotransport\.com(\/[^<]*)<\/loc>[\s\S]*?<\/url>/g, (u, p) => drop.has(p) ? '' : u)
  .replace(/(<loc>https:\/\/neonautotransport\.com\/([a-z-]+)-car-shipping\/<\/loc>\s*<lastmod>)[^<]*/g, (u, a, s) => ROUTES[s] ? a + TODAY : u);
const llms = fs.readFileSync('llms-full.txt', 'utf8');
const llms2 = llms.split('\n').filter(l => { const m = l.match(/neonautotransport\.com(\/\S*)\s*$/); return !(m && drop.has(m[1])); }).join('\n');
const vj = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
for (const [from, to] of Object.entries(REDIRECT)) {
  for (const src of [from, from.replace(/\/$/, '')]) if (!vj.redirects.some(x => x.source === src)) vj.redirects.unshift({ source: src, destination: to, permanent: true });
}
if (!DRY) {
  fs.writeFileSync('sitemap.xml', sm2);
  fs.writeFileSync('llms-full.txt', llms2);
  fs.writeFileSync('vercel.json', JSON.stringify(vj, null, 2) + '\n');
}
console.log({ ...stats, sitemapUrls: (sm2.match(/<url>/g) || []).length, llmsDropped: llms.split('\n').length - llms2.split('\n').length, dry: DRY });

// Thin city pages (routes/city/*.html, ~340 words of template text):
//  - the 20 in tools/city-data.mjs get real local content, their own title/description/H1 and FAQ schema
//  - the rest get noindex,follow and leave sitemap.xml / llms-full.txt (they stay live for visitors and links)
//  - arlington-va is redirected to the stronger /car-shipping-arlington-va/ page (vercel.json)
//  - every thin page: fix the "City, ST/INDEX" breadcrumb and the broken Quick Answer sentence
// Safe to re-run. node tools/city-content.mjs [--dry]
import fs from 'node:fs';
import * as cheerio from 'cheerio';
import { CITIES } from './city-data.mjs';

const DRY = process.argv.includes('--dry');
const DIR = 'routes/city';
const SITE = 'https://neonautotransport.com';
const REDIRECT = { 'arlington-va': '/car-shipping-arlington-va/' };

const DEST = {
  LA: ['Los Angeles, CA', 34.05, -118.24], SF: ['San Francisco, CA', 37.77, -122.42], SD: ['San Diego, CA', 32.72, -117.16],
  SEA: ['Seattle, WA', 47.61, -122.33], PDX: ['Portland, OR', 45.52, -122.68], LV: ['Las Vegas, NV', 36.17, -115.14],
  PHX: ['Phoenix, AZ', 33.45, -112.07], DEN: ['Denver, CO', 39.74, -104.99], DAL: ['Dallas, TX', 32.78, -96.8],
  HOU: ['Houston, TX', 29.76, -95.37], CHI: ['Chicago, IL', 41.88, -87.63], ATL: ['Atlanta, GA', 33.75, -84.39],
  ORL: ['Orlando, FL', 28.54, -81.38], NY: ['New York, NY', 40.71, -74.01], BOS: ['Boston, MA', 42.36, -71.06],
  DC: ['Washington, DC', 38.91, -77.04],
};
const DEST_PAGE = { 'Chicago, IL': 'chicago-il', 'Dallas, TX': 'dallas-tx', 'Houston, TX': 'houston-tx', 'Phoenix, AZ': 'phoenix-az', 'Seattle, WA': 'seattle-wa',
  'Denver, CO': 'denver-co', 'Atlanta, GA': 'atlanta-ga', 'Washington, DC': 'washington-dc', 'Las Vegas, NV': 'las-vegas-nv', 'San Diego, CA': 'san-diego-ca',
  'Boston, MA': 'boston-ma', 'San Francisco, CA': 'san-francisco-ca', 'Portland, OR': 'portland-or' };

// Road miles ~ great-circle x 1.2, rounded; transit counted from pickup
function miles([a, b], [c, d]) {
  const r = x => x * Math.PI / 180, R = 3959;
  const h = Math.sin(r(c - a) / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(r(d - b) / 2) ** 2;
  const m = 2 * R * Math.asin(Math.sqrt(h)) * 1.2;
  return Math.round(m / (m < 1000 ? 10 : 50)) * (m < 1000 ? 10 : 50);
}
const days = m => m < 300 ? '1–2 days' : m < 700 ? '2–3 days' : m < 1200 ? '3–5 days' : m < 1800 ? '4–6 days' : m < 2400 ? '6–8 days' : '7–10 days';
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const exists = slug => fs.existsSync(`${DIR}/${slug}.html`);
const href = n => n.startsWith('/') ? n : `/routes/city/${n}/`;
function label(n) {
  if (n.startsWith('/')) return { '/car-shipping-arlington-va/': 'Arlington, VA', '/car-shipping-woodbridge-va/': 'Woodbridge, VA', '/chico-ca-car-shipping/': 'Chico, CA', '/florida-car-shipping/': 'All of Florida' }[n] || n;
  const m = n.match(/^(.*)-([a-z]{2})$/);
  return m[1].split('-').map(w => w === 'st' ? 'St.' : w[0].toUpperCase() + w.slice(1)).join(' ') + ', ' + m[2].toUpperCase();
}
const stateSlug = st => st.toLowerCase().replace(/ /g, '-') + '-car-shipping';

function content(slug, c) {
  const city = `${c.name}, ${c.st}`;
  const routes = c.routes.map(k => { const [n, la, lo] = DEST[k]; const m = miles(c.ll, [la, lo]); return { n, m, d: days(m) }; });
  const near = c.near.filter(n => n.startsWith('/') ? fs.existsSync(n.slice(1, -1) + (n.includes('routes') ? '.html' : '/index.html')) || fs.existsSync(n.slice(1, -1) + '.html') : exists(n));
  const card = r => {
    const p = DEST_PAGE[r.n];
    const inner = `<h3>${esc(c.name)} to ${esc(r.n)}</h3><p>About ${r.m.toLocaleString('en-US')} miles &middot; ${r.d} in transit</p>`;
    return p && exists(p) ? `<a class="nx-card nx-card-plain" href="/routes/city/${p}/">${inner}<span class="nx-more">${esc(r.n)} car shipping</span></a>` : `<div class="nx-card nx-card-plain">${inner}</div>`;
  };
  return `
    <section class="nx-section nx-city">
      <div class="nx-wrap nx-split nx-city-split">
        <div class="nx-city-prose">
          <h2>Shipping a car to or from ${esc(city)}</h2>
          ${c.about.map(p => `<p>${esc(p)}</p>`).join('\n          ')}
        </div>
        <div class="nx-card nx-city-box">
          <h3>Pickup and delivery in ${esc(c.name)}</h3>
          <ul class="nx-ticks">
            ${c.local.map(l => `<li>${esc(l)}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>
    <section class="nx-section nx-section-soft nx-city">
      <div class="nx-wrap">
        <div class="nx-sec-head nx-left"><p class="nx-eyebrow">Popular routes</p><h2>Common ${esc(c.name)} car shipping routes</h2>
          <p>Approximate road distance and time on the truck after pickup. Your price depends on the route, season, vehicle and trailer type, so <a href="/cost-calculator/">get an exact quote</a> for your dates.</p></div>
        <div class="nx-grid nx-grid-3 nx-city-routes">
          ${routes.map(card).join('\n          ')}
        </div>
      </div>
    </section>
    <section class="nx-section nx-city">
      <div class="nx-wrap nx-city-narrow">
        <h2>When to book in ${esc(c.name)}</h2>
        <p>${esc(c.season)}</p>
        <p>Most pickups happen within one to five business days of booking. Every shipment is door-to-door with a licensed, insured carrier, there is no upfront deposit, and you sign an inspection report at pickup and again at delivery.</p>
        <h2>${esc(c.name)} car shipping questions</h2>
        <div class="nx-city-faq">
          ${c.faq.map(([q, a]) => `<h3>${esc(q)}</h3>\n          <p>${esc(a)}</p>`).join('\n          ')}
        </div>
        <h2>Nearby and related</h2>
        <ul class="nx-city-links">
          ${near.map(n => `<li><a href="${href(n)}">${esc(label(n))} car shipping</a></li>`).join('\n          ')}
          <li><a href="/${stateSlug(c.state)}/">${esc(c.state)} car shipping</a></li>
          ${c.links.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>
    <section class="nx-cta-band">
      <div class="nx-wrap nx-cta-in">
        <div><h2>Get your ${esc(c.name)} quote</h2><p>Instant estimate, no deposit, no obligation.</p></div>
        <div class="nx-actions-row"><a href="/cost-calculator/" class="nx-btn nx-btn-light">Get a free quote</a><a href="tel:+15715767711" class="nx-btn nx-btn-outline-light">Call (571) 576-7711</a></div>
      </div>
    </section>
  `;
}

function faqLd(slug, c) {
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${SITE}/routes/city/${slug}/#faq`,
    mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) })}</script>`;
}

function markdown(slug, c, title, desc) {
  const city = `${c.name}, ${c.st}`;
  const routes = c.routes.map(k => { const [n, la, lo] = DEST[k]; const m = miles(c.ll, [la, lo]); return `| ${c.name} to ${n} | ~${m.toLocaleString('en-US')} miles | ${days(m)} |`; });
  return `---
title: "${title}"
url: ${SITE}/routes/city/${slug}/
modified: ${new Date().toISOString().slice(0, 10)}
author: "Neon Auto Transport"
description: "${desc}"
type: "service"
company: "Neon Auto Transport LLC"
mc_number: "1703787"
usdot_number: "4355879"
phone: "(571) 576-7711"
email: "info@neonautotransport.com"
headquarters: "2709 Neabsco Common Pl Suite 101, Woodbridge, VA 22191"
---

# ${city} Car Shipping

## Shipping a car to or from ${city}

${c.about.join('\n\n')}

## Pickup and delivery in ${c.name}

${c.local.map(l => `- ${l}`).join('\n')}

## Common ${c.name} car shipping routes

Approximate road distance and time in transit after pickup. Get an exact quote at ${SITE}/cost-calculator/.

| Route | Distance | Transit |
|---|---|---|
${routes.join('\n')}

## When to book in ${c.name}

${c.season}

## ${c.name} car shipping questions

${c.faq.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n')}

Get a free quote: ${SITE}/cost-calculator/ or call (571) 576-7711.
`;
}

const stats = { rich: 0, noindex: 0, redirected: 0, fixed: 0 };
const dropFromSitemap = new Set();
const thin = fs.readdirSync(DIR).filter(f => f.endsWith('.html') && !f.includes('-to-')).map(f => f.slice(0, -5)).filter(slug => {
  if (CITIES[slug]) return true;
  const $ = cheerio.load(fs.readFileSync(`${DIR}/${slug}.html`, 'utf8'));
  $('script,style,header,footer,nav,noscript,form').remove();
  return $('main').text().split(/\s+/).filter(Boolean).length < 500;
});

for (const slug of thin) {
  const f = `${DIR}/${slug}.html`;
  let html = fs.readFileSync(f, 'utf8');
  const before = html;
  const c = CITIES[slug];
  const m = slug.match(/^(.*)-([a-z]{2})$/);
  const nameGuess = label(slug).replace(/, [A-Z]{2}$/, '');
  // template bugs on every thin page
  html = html.replace(/(, [A-Z]{2})\/INDEX/g, '$1');
  html = html.replace(/door-to-door car shipping for [^.<]*? Made Simple and all surrounding areas/, `door-to-door car shipping in ${nameGuess}, ${m[2].toUpperCase()} and all surrounding areas`);

  if (c) {
    const city = `${c.name}, ${c.st}`;
    const title = `${city} Car Shipping: Routes & Local Tips | Neon`;
    const desc = `Ship a car to or from ${city}: local pickup tips, common routes with distances and transit times, and when to book. $0 deposit, insured door-to-door transport.`;
    const $ = cheerio.load(html, { decodeEntities: false });
    $('title').text(title);
    $('meta[name="description"]').attr('content', desc);
    $('meta[name="robots"]').attr('content', 'index, follow');
    $('meta[property="og:title"]').attr('content', title);
    $('meta[property="og:description"]').attr('content', desc);
    $('h1.nx-ihero-title').html(`${esc(city)} Car Shipping`);
    $('.nx-ihero-copy .nx-eyebrow').text(`${c.state} auto transport`);
    $('.nx-ihero-lead').text(`Door-to-door car shipping in ${c.name} and the surrounding area, with licensed, insured carriers and no upfront deposit.`);
    // replace everything after the intro band with the local content
    const intro = $('main > section.nx-intro').first();
    intro.nextAll().remove();
    intro.after(content(slug, c));
    $(`script[type="application/ld+json"]`).filter((i, e) => $(e).html().includes('"FAQPage"')).remove();
    $('head').append(faqLd(slug, c) + '\n');
    html = $.html();
    if (!DRY) fs.writeFileSync(`${DIR}/${slug}.md`, markdown(slug, c, title, desc));
    stats.rich++;
  } else {
    html = html.replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, follow">');
    if (!/name="robots"/.test(html)) html = html.replace('</title>', '</title>\n  <meta name="robots" content="noindex, follow">');
    dropFromSitemap.add(slug);
    REDIRECT[slug] ? stats.redirected++ : stats.noindex++;
  }
  if (html !== before) { stats.fixed++; if (!DRY) fs.writeFileSync(f, html); }
}

// sitemap + llms-full: only indexable city pages
const sm = fs.readFileSync('sitemap.xml', 'utf8');
const sm2 = sm.replace(/\s*<url>\s*<loc>https:\/\/neonautotransport\.com\/routes\/city\/([a-z0-9-]+)\/<\/loc>[\s\S]*?<\/url>/g, (u, s) => dropFromSitemap.has(s) ? '' : u)
  .replace(/(<loc>https:\/\/neonautotransport\.com\/routes\/city\/([a-z0-9-]+)\/<\/loc>\s*<lastmod>)[^<]*/g, (u, a, s) => CITIES[s] ? a + new Date().toISOString().slice(0, 10) : u);
const llms = fs.readFileSync('llms-full.txt', 'utf8');
const llms2 = llms.split('\n').filter(l => { const s = l.match(/\/routes\/city\/([a-z0-9-]+)\/\s*$/); return !(s && dropFromSitemap.has(s[1])); }).join('\n');

// vercel.json redirect
const vj = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
for (const [s, to] of Object.entries(REDIRECT)) {
  const src = `/routes/city/${s}`;
  if (!vj.redirects.some(r => r.source === src || r.source === src + '/')) vj.redirects.unshift({ source: src, destination: to, permanent: true }, { source: src + "/", destination: to, permanent: true });
}
if (!DRY) {
  fs.writeFileSync('sitemap.xml', sm2);
  fs.writeFileSync('llms-full.txt', llms2);
  fs.writeFileSync('vercel.json', JSON.stringify(vj, null, 2) + '\n');
}
console.log({ thin: thin.length, ...stats, sitemapUrls: (sm2.match(/<url>/g) || []).length, llmsDropped: llms.split('\n').length - llms2.split('\n').length, dry: DRY });

// SEO/GEO quick wins (Nov 2026):
//  1. Quick Answer boxes that read "ships cars to and from <page title> with door-to-door service…" on
//     service/guide/hub pages get a real answer for that page's topic.
//  2. One set of price figures sitewide: the distance tiers on /car-shipping-cost/ are the source
//     (open coast to coast $1,200–$1,800). The old "$700–$1,500 coast-to-coast" claim is replaced.
//  3. "| |" double separators in titles, and meta descriptions cut off mid-sentence.
//  4. The markdown copies of pages changed by 1 and 3 are rebuilt from the HTML (price-only edits are applied to the .md directly).
// Safe to re-run. node tools/quick-wins.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const DRY = process.argv.includes('--dry');
const TAIL = 'Get an instant quote at neonautotransport.com/cost-calculator/ or call (571) 576-7711.';
const CO = 'Neon Auto Transport (MC 1703787, USDOT 4355879)';

const QA = {
  'services/terminal-to-terminal-car-shipping.html': `Terminal-to-terminal car shipping means you drop your car at a storage hub near you and collect it from a hub near your destination, instead of having it picked up and delivered at your address. It usually costs $100–$300 less than door-to-door, but you need a ride to and from each terminal and may pay daily storage if you collect late. ${CO} arranges both options with $0 upfront deposit. ${TAIL}`,
  'services/door-to-door-car-shipping.html': `Door-to-door car shipping means the carrier picks your car up at your address and delivers it to the address you choose, or the nearest safe spot a large truck can reach. It is the standard way cars are shipped in the US and costs about $250–$500 for local moves and $1,200–$1,800 coast to coast on an open carrier. ${CO} books it with $0 upfront deposit. ${TAIL}`,
  'services/car-shipping-to-another-state.html': `Shipping a car to another state usually costs $400–$800 for 500–1,000 miles and $1,200–$1,800 coast to coast on an open carrier, and takes 2–10 days on the truck depending on distance. You book a pickup window, the car is inspected and loaded at your address, and delivered door to door. ${CO} arranges interstate transport in all 50 states with $0 upfront deposit. ${TAIL}`,
  'services/college-car-shipping.html': `Shipping a student's car to campus usually costs $400–$1,300 on an open carrier, depending on distance, and takes 2–7 days on the truck. Book 2–3 weeks before move-in or the end of term, when demand peaks, and make sure someone 18 or older can hand over and receive the car. ${CO} ships cars to and from colleges nationwide with $0 upfront deposit. ${TAIL}`,
  'services/military-car-shipping.html': `Military members can ship a personally owned vehicle for a PCS move either through the government program (one car, to or from approved processing centers) or privately with door-to-door service when they need a second car moved or a different timeline. Private shipping usually costs $400–$1,800 on an open carrier depending on distance. ${CO} offers a military discount and $0 upfront deposit. ${TAIL}`,
  'services/rental-car-shipping.html': `Rental car shipping moves rental and fleet vehicles between branches, airports and markets on multi-car carriers, usually in batches to balance inventory for the season. Price depends on the number of vehicles, distance and timing, and multi-car loads cost less per vehicle. ${CO} coordinates single and batch rental relocations nationwide. ${TAIL}`,
  'services/luxury-car-shipping.html': `Luxury and exotic cars are usually shipped in an enclosed trailer, often with liftgate loading for low cars, which protects them from weather, road debris and other vehicles. Enclosed shipping costs roughly 30–60% more than open, about $1,700–$2,500 coast to coast. ${CO} arranges enclosed, insured transport for luxury, exotic and classic cars with $0 upfront deposit. ${TAIL}`,
  'services/international-overseas-car-shipping-services.html': `International car shipping combines a truck leg to a US port, ocean freight (roll-on/roll-off or container) and customs clearance at the destination. Cost depends mostly on the destination country, port and shipping method, and the ocean leg typically takes several weeks. ${CO} coordinates the US truck leg and works with ocean carriers for overseas moves. ${TAIL}`,
  'services/car-resellers-auto-transport.html': `Car resellers and flippers ship vehicles bought at auctions, dealers and private sales to their lot or to the buyer, usually on open multi-car carriers. Price depends on distance, whether the car runs and how many vehicles move together, from about $250–$500 for short hauls to $1,200–$1,800 coast to coast. ${CO} offers priority scheduling for repeat resellers with $0 upfront deposit. ${TAIL}`,
  'services/corporate-relocation.html': `Corporate relocation car shipping moves employees' vehicles as part of a company-paid move, with one point of contact, invoicing to the employer and pickup timed to the move. Each car is priced by distance and vehicle type, about $400–$800 for 500–1,000 miles and $1,200–$1,800 coast to coast on an open carrier. ${CO} coordinates single and multi-employee relocations nationwide. ${TAIL}`,
  'services/fleet-management-transportation-services.html': `Fleet transport moves several company vehicles at once, from 5 cars to hundreds, on multi-car carriers scheduled around your operations. Per-vehicle rates drop when cars share a route and pickup window. ${CO} coordinates fleet moves nationwide with one point of contact and $0 upfront deposit. ${TAIL}`,
  'car-shipping-quote/index.html': `A car shipping quote is based on the pickup and delivery ZIP codes, the vehicle, whether it runs, open or enclosed transport, and your dates. Typical open-carrier prices run $250–$500 for under 500 miles and $1,200–$1,800 coast to coast. ${CO} gives instant online estimates with no deposit or obligation. ${TAIL}`,
  'car-shipping-transit-times/index.html': `Car shipping usually takes 1–4 days for under 500 miles, 3–7 days for 1,000–1,500 miles and 7–14 days coast to coast, counted from pickup. Pickup itself is usually scheduled within a 1–5 day window, and weather, rural addresses and peak seasons can add time. ${CO} gives you the carrier's estimate and direct driver contact for every shipment. ${TAIL}`,
  'blog/true-cost-of-car-shipping-2026.html': `In 2026, shipping a car typically costs $250–$500 for under 500 miles, $600–$1,100 for 1,000–1,500 miles and $1,200–$1,800 coast to coast on an open carrier; enclosed costs about 30–60% more. The real total also depends on deposits, cancellation terms and whether the quote is locked, so compare those, not just the headline price. ${CO} charges no upfront deposit. ${TAIL}`,
  'car-shipping-arlington-va/index.html': `Neon Auto Transport ships cars to and from Arlington, VA and the rest of Northern Virginia, with door-to-door pickup in neighborhoods, apartment buildings and military housing. Our office is in Woodbridge, about 20 miles south, and we ship Arlington cars to every state on open or enclosed carriers. ${CO} requires $0 upfront deposit. ${TAIL}`,
  'car-shipping-woodbridge-va/index.html': `Neon Auto Transport is based in Woodbridge, VA (2709 Neabsco Common Pl, Suite 101) and ships cars to and from Woodbridge, Prince William County and all of Northern Virginia. We arrange door-to-door transport to every state on open or enclosed carriers. ${CO} requires $0 upfront deposit. ${TAIL}`,
  'marysville-ca-car-shipping/index.html': `Neon Auto Transport ships cars to and from Marysville, CA and the rest of Yuba County, with door-to-door pickup or a nearby meeting point when a large carrier can't reach your street. Most long-distance trips leave through Sacramento and Interstate 5 or 80. ${CO} requires $0 upfront deposit. ${TAIL}`,
  'arkansas-car-shipping-cities/index.html': `Neon Auto Transport ships cars to and from every city in Arkansas, including Little Rock, Fayetteville, Springdale, Jonesboro and Fort Smith, with door-to-door service. Interstates 40 and 30 carry most Arkansas car shipments, so cities near them usually get faster pickups. ${CO} requires $0 upfront deposit. ${TAIL}`,
  'colorado-car-shipping-cities/index.html': `Neon Auto Transport ships cars to and from every city in Colorado, including Denver, Colorado Springs, Aurora, Fort Collins and Boulder, with door-to-door service. Front Range cities along Interstate 25 get the most carrier traffic, while mountain towns can need more time in winter. ${CO} requires $0 upfront deposit. ${TAIL}`,
  'florida-car-shipping-cities/index.html': `Neon Auto Transport ships cars to and from every city in Florida, including Miami, Orlando, Tampa, Jacksonville and Fort Lauderdale, with door-to-door service. Prices into Florida rise in fall and prices out rise in spring, following snowbird season. ${CO} requires $0 upfront deposit. ${TAIL}`,
  'new-york-car-shipping-cities/index.html': `Neon Auto Transport ships cars to and from every city in New York State, including New York City, Buffalo, Rochester, Syracuse and Albany, with door-to-door service. In Manhattan and dense parts of the boroughs, pickup is often at a nearby street a large carrier can reach. ${CO} requires $0 upfront deposit. ${TAIL}`,
  'texas-car-shipping-cities/index.html': `Neon Auto Transport ships cars to and from every city in Texas, including Houston, Dallas, San Antonio, Austin and El Paso, with door-to-door service. Texas sits on busy north-south and east-west carrier routes, so major cities usually get quick pickups. ${CO} requires $0 upfront deposit. ${TAIL}`,
};

const DESC = {
  'arizona-car-shipping/index.html': 'Ship your car to or from Arizona with Neon Auto Transport. See real costs and popular routes, and get a free instant quote for open or enclosed transport.',
  'connecticut-car-shipping/index.html': 'Ship your car to or from Connecticut with Neon Auto Transport. Insured door-to-door transport from Bridgeport, Hartford, New Haven and the rest of the state.',
  'florida-car-shipping/index.html': 'Florida car shipping costs $500–$1,700 for most trips. Door-to-door auto transport across Miami, Orlando, Tampa, Jacksonville and the rest of Florida.',
  'florida-car-shipping-cities/index.html': 'A city-by-city guide to shipping a car to or from Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale and other Florida cities, with routes and timing.',
  'massachusetts-car-shipping/index.html': 'Ship your car to or from Massachusetts with Neon Auto Transport. Insured door-to-door transport from Boston, Worcester, Springfield and the rest of the state.',
  'pennsylvania-car-shipping/index.html': 'Ship your car to or from Pennsylvania with Neon Auto Transport. Insured door-to-door transport from Philadelphia, Pittsburgh, Harrisburg and across the state.',
  'services/fleet-management-transportation-services.html': 'Fleet vehicle transport for businesses: move 5 to 500+ vehicles on scheduled multi-car carriers with one point of contact. Nationwide, $0 upfront deposit.',
  'services/international-overseas-car-shipping-services.html': 'Ship a car overseas with Neon Auto Transport: truck transport to a US port, ocean freight and customs coordination. Get a quote for your destination.',
  'services/luxury-car-shipping.html': 'Enclosed, insured transport for luxury, exotic and collector cars, with liftgate loading for low vehicles. Door-to-door nationwide, $0 upfront deposit.',
  'services/rental-car-shipping.html': 'Rental car relocation for agencies and fleets: move vehicles between branches, airports and markets on multi-car carriers. Nationwide, fast scheduling.',
  'services/corporate-relocation.html': 'Corporate relocation car shipping: we move employee vehicles during company moves with one point of contact, employer invoicing and volume pricing.',
};

const TITLE = {
  'services/terminal-to-terminal-car-shipping.html': 'Terminal to Terminal Car Shipping: Cost, Pros & Cons | Neon',
  'services/car-resellers-auto-transport.html': 'Car Reseller & Flipper Auto Transport | Neon Auto Transport',
  'services/corporate-relocation.html': 'Corporate Relocation Car Shipping | Neon Auto Transport',
  'services/fleet-management-transportation-services.html': 'Fleet Vehicle Transport Services | Neon Auto Transport',
};

// one set of price figures: /car-shipping-cost/ distance tiers
const REPLACE = [
  [/\(\$700–\$1,500 coast-to-coast\)/g, '($1,200–$1,800 coast to coast)'],
  [/Open averages \$700–\$1,500 coast-to-coast/g, 'Open averages $1,200–$1,800 coast to coast'],
  [/Cross-country shipments from California generally run \$700–\$1,500 depending on destination/g, 'Cross-country shipments from California generally run $1,000–$1,800 depending on destination'],
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (/^(node_modules|tools|\.git|\.claude|api)$/.test(e.name)) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (/\.(html|md|txt)$/.test(e.name)) files.push(p.split(path.sep).join('/'));
  }
})('.');

const touched = new Set(); // html touched by the price fix only: its .md was fixed by the same replace
const rebuild = new Set();
const stats = { priceFiles: 0, qa: 0, desc: 0, title: 0, md: 0 };
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  let out = src;
  for (const [re, to] of REPLACE) out = out.replace(re, to);
  if (out !== src) { stats.priceFiles++; if (!DRY) fs.writeFileSync(f, out); if (f.endsWith('.html')) touched.add(f); }
}

const setAttr = ($, sel, v) => $(sel).attr('content', v);
for (const f of new Set([...Object.keys(QA), ...Object.keys(DESC), ...Object.keys(TITLE)])) {
  const $ = cheerio.load(fs.readFileSync(f, 'utf8'), { decodeEntities: false });
  if (QA[f]) {
    const p = $('.quick-answer-content p').first();
    if (p.length) { p.text(QA[f]); stats.qa++; } else console.warn('no quick answer in', f);
  }
  if (DESC[f]) {
    for (const s of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) setAttr($, s, DESC[f]);
    stats.desc++;
  }
  if (TITLE[f]) {
    $('title').text(TITLE[f]);
    for (const s of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) setAttr($, s, TITLE[f]);
    stats.title++;
  }
  if (!DRY) fs.writeFileSync(f, $.html());
  rebuild.add(f);
}

// markdown copies: <x>.html -> <x>.md and <x>/index.md ; <x>/index.html -> <x>/index.md and <x>.md
// Patched in place (front matter + the Quick Answer paragraph): rebuilding them from HTML would drop the FAQ answers.
for (const f of rebuild) {
  const base = f.replace(/\/index\.html$/, '').replace(/\.html$/, '');
  if (DRY) continue;
  const $ = cheerio.load(fs.readFileSync(f, 'utf8'));
  const q = s => s.replace(/"/g, '\\"');
  for (const m of [`${base}.md`, `${base}/index.md`]) {
    if (!fs.existsSync(m)) continue;
    const raw = fs.readFileSync(m, 'utf8');
    const crlf = /\r\n/.test(raw);
    let t = raw.replace(/\r\n/g, '\n');
    t = t.replace(/^title: .*$/m, `title: "${q($('title').text())}"`)
      .replace(/^description: .*$/m, `description: "${q($('meta[name="description"]').attr('content') || '')}"`)
      .replace(/^modified: .*$/m, `modified: ${new Date().toISOString().slice(0, 10)}`);
    if (QA[f]) {
      const re = /(^#+\s*Quick Answer[^\n]*\n+)([^\n#][^\n]*)/m;
      if (re.test(t)) t = t.replace(re, (x, h) => h + QA[f]); else console.warn('no quick answer in', m);
    }
    for (const [re, to] of REPLACE) t = t.replace(re, to);
    fs.writeFileSync(m, crlf ? t.replace(/\n/g, '\r\n') : t);
    stats.md++;
  }
}
console.log({ ...stats, priceHtml: touched.size, rebuilt: rebuild.size, dry: DRY });

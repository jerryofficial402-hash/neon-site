// One-off update for /california-car-shipping/ (2026-11-19):
// prices match the dedicated CA route pages and the /car-shipping-cost/ tiers, smog claim fixed,
// new FAQs (Hawaii, Live Oak office), title/description, dates. Safe to re-run.
import fs from 'node:fs';

const HTML = 'california-car-shipping/index.html';
const MDS = ['california-car-shipping/index.md', 'california-car-shipping.md'].filter(f => fs.existsSync(f));

const OLD_TITLE = 'California Car Shipping To &amp; From CA | Neon Auto Transport';
const TITLE = 'California Car Shipping Cost, Routes &amp; Times | Neon Auto Transport';
const OLD_DESC_RE = /Ship a car to or from California with Neon Auto Transport\. FMCSA-licensed broker, open &amp; enclosed carriers, \$0 deposit, instant quotes for LA, SF, San Diego &amp; statewide routes\./g;
const DESC = 'Ship a car to, from or within California: route prices and transit times, Hawaii to California shipping, DMV and smog rules, and our Live Oak, CA office. FMCSA-licensed, $0 deposit.';

// [old, new] pairs applied to HTML and md (plain text in both)
const PAIRS = [
  // at-a-glance and hero line
  ['Typical in-state routes: $350–$650', 'Typical in-state routes: $250–$500 (most trips under 500 miles)'],
  ['Cross-country (CA → East Coast): $1,300–$1,750', 'Cross-country (CA → East Coast): $1,200–$1,800'],
  ['Transit time: 1–4 days regional, 7–10 days cross-country', 'Transit time: 1–2 days in-state, 7–10 days cross-country'],
  ['From $350 for in-state moves and $1,300+ for cross-country', 'From $250 for in-state moves and $1,200+ for cross-country'],
  // outbound routes (cards + table)
  ['$1,075 – $1,450', '$950 – $1,300'],
  ['$1,225 – $1,650', '$1,200 – $1,650'],
  ['$750 – $1,025', '$700 – $1,100'],
  ['$500 – $675', '$300 – $550'],
  ['$1,275 – $1,725', '$1,250 – $1,700'],
  // inbound routes
  ['$975 – $1,375', '$950 – $1,300'],
  ['$1,175 – $1,600', '$1,200 – $1,650'],
  ['$1,225 – $1,675', '$1,250 – $1,700'],
  ['$700 – $975', '$700 – $1,100'],
  ['$425 – $625', '$300 – $550'],
  ['Inbound estimates typically run 5–10% below outbound rates on the same corridor because more carriers are seeking California-bound loads.', 'Inbound prices can run a little below outbound on the same lane when more carriers are looking for California-bound loads.'],
  // metro text
  ['Open-carrier LA shipments typically run $350–$1,600 depending on destination', 'Open-carrier LA shipments typically run $250–$1,800 depending on destination'],
  // smog
  ['Most vehicles need a smog certification before registration. Model year 1975 and older, electric vehicles, and cars under four model years old are typically exempt.', "Most vehicles coming from another state need a California smog certificate before registration. Exemptions include gasoline cars from 1975 or older and electric vehicles — check the DMV's smog rules for your vehicle."],
  ['unless your vehicle is exempt (model year 1975 or older, electric, or under four model years old).', "unless your vehicle is exempt (for example, gasoline cars from 1975 or older and electric vehicles). Check the DMV's smog rules for your vehicle."],
  // FAQ cost
  ['California car shipping costs typically range between $350 and $1,750 for open-carrier transport, depending on distance and origin city. Short in-state routes (under 150 miles) start around $350–$450, regional West Coast routes run $400–$950, and cross-country East Coast routes run $1,300–$1,750.',
   'California car shipping usually costs $250–$1,800 for open-carrier transport, depending on distance. Most in-state trips under 500 miles run $250–$500, California to Texas runs about $950–$1,300, and coast-to-coast routes to the East Coast run $1,200–$1,800.'],
  ['Last updated: September 2026', 'Last updated: November 2026'],
];
// city cost table: same ranges as the route pages for every major city
const CITY_NOTE_OLD = /Open-carrier estimates\. San Francisco and coastal cities run slightly higher on eastbound lanes due to deadhead distance from the I-5 corridor\./;
const CITY_NOTE = 'Open-carrier estimates. Prices are similar from all major California cities; remote and mountain addresses can cost more.';
const CITY_CELLS = { tx: '$950 – $1,300', fl: '$1,200 – $1,650', ny: '$1,250 – $1,700', wa: '$700 – $1,100' };

const NEW_FAQ = [
  ['How much does it cost to ship a car from Hawaii to California?', 'Shipping a car from Hawaii to California usually costs $1,200–$2,500. The car goes by ship from Honolulu or a neighbor-island port to a California port such as Long Beach, Oakland or San Diego; the price depends on vehicle size, the island and whether you add door delivery in California.'],
  ['How long does it take to ship a car from Hawaii to California?', 'Plan for about 2–3 weeks from port drop-off to delivery. Sailing schedules, neighbor-island transfers and the truck trip from the California port to your door all affect the total time.'],
  ['Does Neon Auto Transport have an office in California?', 'Yes. Neon has a Northern California office at 8333 CA-99, Office 101, Live Oak, CA 95953, phone (530) 725-5383, serving the Sacramento Valley and shipments statewide. The main office is in Woodbridge, Virginia.'],
];

let n = 0;
const rep = (s, a, b) => { if (typeof a === 'string' ? s.includes(a) : a.test(s)) { n++; return typeof a === 'string' ? s.split(a).join(b) : s.replace(a, () => b); } return s; };

// ---------- HTML ----------
let h = fs.readFileSync(HTML, 'utf8');
h = rep(h, `<title>${OLD_TITLE}</title>`, `<title>${TITLE}</title>`);
h = rep(h, `content="${OLD_TITLE}"`, `content="${TITLE}"`);
h = rep(h, OLD_DESC_RE, DESC.replace(/&/g, '&amp;'));
for (const [a, b] of PAIRS) h = rep(h, a, b);
// transit days on the TX and AZ lanes (cards: "4 to 7 Days", tables: "4 to 7 days"; AZ "2 to 4")
h = rep(h, /4 to 7 Days/g, '3 to 6 Days');
h = rep(h, /4 to 7 days/g, '3 to 6 days');
h = rep(h, /2 to 4 days/g, '1 to 2 days');
h = rep(h, /2 to 4 Days/g, '1 to 2 Days');
// city table
const ci = h.indexOf('Car Shipping Cost From Major California Cities');
const ce = h.indexOf('Choosing a Reliable California Auto Transporter');
if (ci > 0 && ce > ci) {
  let seg = h.slice(ci, ce);
  seg = seg.replace(/(<tr[^>]*>\s*<td[^>]*>[^<]*<\/td>)\s*<td([^>]*)>[^<]*<\/td>\s*<td([^>]*)>[^<]*<\/td>\s*<td([^>]*)>[^<]*<\/td>\s*<td([^>]*)>[^<]*<\/td>/g,
    (m, first, a1, a2, a3, a4) => `${first}\n                    <td${a1}>${CITY_CELLS.tx}</td>\n                    <td${a2}>${CITY_CELLS.fl}</td>\n                    <td${a3}>${CITY_CELLS.ny}</td>\n                    <td${a4}>${CITY_CELLS.wa}</td>`);
  seg = rep(seg, CITY_NOTE_OLD, CITY_NOTE);
  h = h.slice(0, ci) + seg + h.slice(ce); n++;
}
// FAQ JSON-LD + visible FAQ
for (const [q, a] of NEW_FAQ) {
  if (h.includes(q)) continue;
  h = h.replace(/("@type": "FAQPage",[\s\S]*?"mainEntity": \[)/, m => m + `\n    {\n      "@type": "Question",\n      "name": ${JSON.stringify(q)},\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": ${JSON.stringify(a)}\n      }\n    },`);
  n++;
}
h = h.replace(/"dateModified": "[^"]*"/g, '"dateModified": "2026-11-19T12:00:00-05:00"');
fs.writeFileSync(HTML, h);

// ---------- md ----------
for (const f of MDS) {
  let m = fs.readFileSync(f, 'utf8');
  m = m.replace(/^title: .*$/m, `title: "${TITLE.replace(/&amp;/g, '&')}"`);
  m = m.replace(/^description: .*$/m, `description: ${JSON.stringify(DESC)}`);
  m = m.replace(/^modified: .*$/m, 'modified: 2026-11-19');
  for (const [a, b] of PAIRS) m = rep(m, a, b);
  m = m.replace(/4 to 7 Days/g, '3 to 6 Days').replace(/4 to 7 days/g, '3 to 6 days').replace(/2 to 4 days/g, '1 to 2 days').replace(/2 to 4 Days/g, '1 to 2 Days');
  m = m.replace(CITY_NOTE_OLD, CITY_NOTE);
  fs.writeFileSync(f, m);
}
console.log('changes:', n, 'md files:', MDS.join(', '));

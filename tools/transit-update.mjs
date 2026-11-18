// One-off update for /car-shipping-transit-times/ (2026-11-19):
// align day ranges with the /car-shipping-cost/ tiers, new title/description, new FAQ, dates.
// Safe to re-run (each replacement checks for the old text).
import fs from 'node:fs';

const HTML = 'car-shipping-transit-times/index.html';
const MDS = ['car-shipping-transit-times/index.md', 'car-shipping-transit-times.md'];

const OLD_TITLE = 'Car Shipping Transit Times | How Long Does Auto Transport Take?';
const TITLE = 'How Long Does Car Shipping Take? Transit Times &amp; Delivery Dates | Neon';
const TITLE_MD = 'How Long Does Car Shipping Take? Transit Times & Delivery Dates | Neon';
const OLD_DESC = 'Learn how long car shipping takes by distance, route, and transport type. See typical transit estimates, pickup-window guidance, common delay factors, and get a free auto transport quote.';
const DESC = "Car shipping takes 1–2 days under 500 miles and 7–10 days coast to coast after pickup. Transit times by distance and route, why delivery dates aren't guaranteed, and how to speed it up.";

const OLD_QA = /Car shipping usually takes 1–4 days for under 500 miles, 3–7 days for 1,000–1,500 miles and 7–14 days coast to coast, counted from pickup\. Pickup itself is usually scheduled within a 1–5 day window, and weather, rural addresses and peak seasons can add time\./;
const QA = "Car shipping usually takes 1–2 days for under 500 miles, 3–5 days for 1,000–1,500 miles and 7–10 days coast to coast, counted from pickup. Pickup is usually within 1–5 days of booking. Delivery dates are estimates, not guarantees: federal rules don't set them, and weather, rural addresses and peak seasons can add time.";

const TIERS = [
  ['Under 500 Miles', '1–2 days', 'Los Angeles to San Francisco, Houston to Dallas, Northern Virginia to New York'],
  ['500–1,000 Miles', '2–3 days', 'New York to Atlanta, Chicago to New York'],
  ['1,000–1,500 Miles', '3–5 days', 'New York to Miami, Chicago to Tampa'],
  ['1,500–2,000 Miles', '4–7 days', 'New York to Dallas, Chicago to Phoenix'],
  ['2,000–2,500 Miles', '5–9 days', 'Chicago to Los Angeles, Atlanta to Los Angeles'],
  ['2,500+ Miles', '7–10 days', 'New York to Los Angeles, Boston to Seattle'],
];

const FAQ_CC_OLD = 'Cross-country car shipping commonly takes approximately 7–14 days in transit after pickup.';
const FAQ_CC = 'Cross-country car shipping usually takes 7–10 days in transit after pickup; winter storms or remote addresses can push it toward two weeks.';
const FAQ_1K_OLD = 'A 1,000-mile vehicle shipment often takes approximately 2–5 days in transit after pickup.';
const FAQ_1K = 'A 1,000-mile vehicle shipment usually takes about 2–4 days in transit after pickup.';
const NEW_Q = 'Are car shipping delivery dates guaranteed?';
const NEW_A = "No. In auto transport, pickup and delivery dates are estimates. FMCSA registers brokers and carriers and enforces safety rules, but it does not set delivery dates; they come from your shipping agreement. Neon's terms state that estimated pickup and delivery dates are approximate and not guaranteed, including for expedited shipping. If a company promises a guaranteed date, ask in writing what you get if it is missed.";

let changed = 0;
function rep(s, from, to, label) {
  const hit = typeof from === 'string' ? s.includes(from) : from.test(s);
  if (!hit) { console.log('  (skip) ' + label); return s; }
  changed++;
  return typeof from === 'string' ? s.split(from).join(to) : s.replace(from, () => to);
}

// ---------- HTML ----------
let h = fs.readFileSync(HTML, 'utf8');
h = rep(h, `<title>${OLD_TITLE}</title>`, `<title>${TITLE}</title>`, 'title');
h = rep(h, `content="${OLD_TITLE}"`, `content="${TITLE}"`, 'og/twitter title');
h = rep(h, `content="${OLD_DESC}"`, `content="${DESC}"`, 'meta descriptions');
h = rep(h, OLD_QA, QA, 'quick answer');
// summary list
const listOld = /<ul class="space-y-3 text-sm text-\[#425466\]">[\s\S]*?7–14 days in transit after carrier pickup\.<\/span>\s*<\/li>\s*<\/ul>/;
const listNew = '<ul class="space-y-3 text-sm text-[#425466]">\n' + TIERS.map(([d, t]) =>
  `            <li class="flex items-start gap-2">\n              <span class="text-[#39FF14] font-black">✓</span>\n              <span><strong>${d}:</strong> ${t} in transit after carrier pickup.</span>\n            </li>`).join('\n') + '\n          </ul>';
h = rep(h, listOld, listNew, 'summary list');
// distance table body
const tbodyOld = /(<th class="p-4">Sample Routes<\/th>[\s\S]*?<tbody class="divide-y divide-\[#e6e6e6\] bg-white">)[\s\S]*?(<\/tbody>)/;
if (tbodyOld.test(h) && h.includes('7 – 14 Days')) {
  h = h.replace(tbodyOld, (m, a, b) => a + '\n' + TIERS.map(([d, t, r]) =>
    `                <tr class="hover:bg-[#f6f9fc]">\n                  <td class="p-4 font-bold text-[#0a2540]">${d}</td>\n                  <td class="p-4">${t}</td>\n                  <td class="p-4">${r}</td>\n                </tr>`).join('\n') + '\n              ' + b);
  changed++;
} else console.log('  (skip) distance table');
h = rep(h, FAQ_CC_OLD, FAQ_CC, 'faq cross-country');
h = rep(h, FAQ_1K_OLD, FAQ_1K, 'faq 1000 miles');
// new FAQ in JSON-LD (first in list) and in the visible FAQ
if (!h.includes(NEW_Q)) {
  h = h.replace(/("@type": "FAQPage",[\s\S]*?"mainEntity": \[)/, (m) => m + `\n          {\n            "@type": "Question",\n            "name": "${NEW_Q}",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": ${JSON.stringify(NEW_A)}\n            }\n          },`);
  h = h.replace(/(Frequently Asked Questions About Car Shipping Timing\s*<\/h2>\s*<div class="space-y-4">)/, (m) => m + `\n            <div class="faq-item border border-[#e6e6e6] rounded-xl overflow-hidden active">\n              <button type="button" aria-expanded="true" aria-controls="faq-answer-0" class="w-full p-5 text-left font-bold text-[#0a2540] flex justify-between items-center bg-[#f6f9fc]">\n                <span>${NEW_Q}</span>\n                <span class="faq-icon text-xl text-[#4338ca]">+</span>\n              </button>\n              <div id="faq-answer-0" class="faq-answer p-5 text-xs text-[#425466] leading-relaxed bg-white border-t border-[#e6e6e6]">\n                ${NEW_A}\n              </div>\n            </div>\n`);
  changed++;
}
h = rep(h, '"dateModified": "2026-08-15T17:00:00-04:00"', '"dateModified": "2026-11-19T12:00:00-05:00"', 'dateModified');
h = rep(h, 'Last Updated: August 2026', 'Last Updated: November 2026', 'last updated');
fs.writeFileSync(HTML, h);

// ---------- MD copies ----------
for (const f of MDS) {
  if (!fs.existsSync(f)) continue;
  let m = fs.readFileSync(f, 'utf8');
  m = rep(m, `title: "${OLD_TITLE}"`, `title: "${TITLE_MD}"`, f + ' title');
  m = rep(m, `description: "${OLD_DESC}"`, `description: ${JSON.stringify(DESC)}`, f + ' description');
  m = m.replace(/^modified: .*$/m, 'modified: 2026-11-19');
  m = rep(m, OLD_QA, QA, f + ' quick answer');
  m = m.replace(/(  \* ✓ \*\*Regional Moves[\s\S]*?7–14 days in transit after carrier pickup\.)/, () =>
    TIERS.map(([d, t]) => `  * ✓ **${d}:** ${t} in transit after carrier pickup.`).join('\n'));
  m = m.replace(/100 – 500 Miles \| 1 – 4 Days[\s\S]*?2,500\+ Miles \| 7 – 14 Days \| [^\n]*/, () =>
    TIERS.map(([d, t, r]) => `${d} | ${t} | ${r}  `).join('\n'));
  m = rep(m, FAQ_CC_OLD, FAQ_CC, f + ' faq cc');
  m = rep(m, FAQ_1K_OLD, FAQ_1K, f + ' faq 1k');
  if (!m.includes(NEW_Q)) m = m.replace(/(How long does it take to ship a car across the country\? \+)/, () => `${NEW_Q} +\n\n${NEW_A}\n\n$1`.replace('$1', 'How long does it take to ship a car across the country? +'));
  m = m.replace('Last Updated: August 2026', 'Last Updated: November 2026');
  fs.writeFileSync(f, m);
}
console.log('replacements:', changed);

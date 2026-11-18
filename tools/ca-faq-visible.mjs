// Add the 3 new California FAQs (already in the FAQ schema) to the visible FAQ list and the md copies.
import fs from 'node:fs';
const FAQ = [
  ['How much does it cost to ship a car from Hawaii to California?', 'Shipping a car from Hawaii to California usually costs $1,200–$2,500. The car goes by ship from Honolulu or a neighbor-island port to a California port such as Long Beach, Oakland or San Diego; the price depends on vehicle size, the island and whether you add door delivery in California.'],
  ['How long does it take to ship a car from Hawaii to California?', 'Plan for about 2–3 weeks from port drop-off to delivery. Sailing schedules, neighbor-island transfers and the truck trip from the California port to your door all affect the total time.'],
  ['Does Neon Auto Transport have an office in California?', 'Yes. Neon has a Northern California office at 8333 CA-99, Office 101, Live Oak, CA 95953, phone (530) 725-5383, serving the Sacramento Valley and shipments statewide. The main office is in Woodbridge, Virginia.'],
];
const f = 'california-car-shipping/index.html';
let h = fs.readFileSync(f, 'utf8');
const anchor = /(Frequently Asked Questions About California Car Shipping<\/h2>\s*<div class="space-y-4">)/;
const items = FAQ.filter(([q]) => !h.includes(`>${q}</h3>`)).map(([q, a]) => `
                <div class="bg-[#f8fafc] rounded-2xl p-6 border border-[#e6e6e6]">
                  <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-2">${q}</h3>
                  <p class="text-xs sm:text-sm text-[#425466] leading-relaxed">${a}</p>
                </div>
`).join('');
if (items && anchor.test(h)) { h = h.replace(anchor, m => m + items); fs.writeFileSync(f, h); console.log('visible FAQ added'); } else console.log('nothing to add / anchor missing');

for (const m of ['california-car-shipping/index.md', 'california-car-shipping.md']) {
  if (!fs.existsSync(m)) continue;
  let s = fs.readFileSync(m, 'utf8');
  const add = FAQ.filter(([q]) => !s.includes(q)).map(([q, a]) => `### ${q}\n\n${a}\n`).join('\n');
  if (!add) continue;
  const i = s.search(/^#+ .*Frequently Asked Questions.*$/m);
  if (i >= 0) { const e = s.indexOf('\n', i) + 1; s = s.slice(0, e) + '\n' + add + '\n' + s.slice(e); }
  else s += '\n\n## Frequently Asked Questions\n\n' + add;
  fs.writeFileSync(m, s); console.log('md FAQ added', m);
}

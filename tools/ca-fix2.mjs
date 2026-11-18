// Follow-up fixes for /california-car-shipping/ that ca-update.mjs missed (different markup).
import fs from 'node:fs';
const edits = {
  'california-car-shipping/index.html': [
    ['<span><strong>Typical in-state routes:</strong> $350–$650</span>', '<span><strong>Typical in-state routes:</strong> $250–$500 (most trips under 500 miles)</span>'],
    ['Last Updated: <span class="text-[#0a2540] font-semibold">September 2026</span>', 'Last Updated: <span class="text-[#0a2540] font-semibold">November 2026</span>'],
  ],
  'california-car-shipping/index.md': [
    ['Vehicles model year 1975 or older, electric vehicles, and most cars under four model years old are typically exempt.', "Exemptions include gasoline cars from 1975 or older and electric vehicles; check the DMV's smog rules for your vehicle."],
    ['Vehicles model year 1975 or older, electric vehicles, and most vehicles under four model years old are typically exempt.', "Exemptions include gasoline cars from 1975 or older and electric vehicles; check the DMV's smog rules for your vehicle."],
  ],
  'california-car-shipping.md': [
    ['- **Typical in-state routes:** $350–$650', '- **Typical in-state routes:** $250–$500 (most trips under 500 miles)'],
  ],
};
for (const [f, pairs] of Object.entries(edits)) {
  let s = fs.readFileSync(f, 'utf8');
  for (const [a, b] of pairs) { if (s.includes(a)) { s = s.split(a).join(b); console.log('fixed in', f); } else console.log('not found in', f, ':', a.slice(0, 50)); }
  fs.writeFileSync(f, s);
}

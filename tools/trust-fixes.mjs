// Trust fixes (Nov 2026). Facts confirmed by the owner:
//  - Neon Auto Transport LLC started in 2025 (FMCSA registration Feb 2025), not 2015
//  - 47 Google reviews (schema said 25 on some pages, 46 on others; sitemap.md said "500+")
//  - remove the "shipped more than 150,000 vehicles over 9+ years" claim and disclose that the
//    "best companies" guide is published by Neon itself
// Update REVIEWS when the Google count changes, then re-run. node tools/trust-fixes.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';

const DRY = process.argv.includes('--dry');
const REVIEWS = 47;

const R = [
  [/("foundingDate":\s*")2015(")/g, (m, a, b) => `${a}2025${b}`],
  [/TRUSTED NATIONWIDE SINCE 2015/g, () => 'FMCSA-LICENSED BROKER'],
  [/("reviewCount":\s*"?)(?:25|46)("?)/g, (m, a, b) => `${a}${REVIEWS}${b}`],
  [/\b(?:25|46) (Google reviews|customer reviews)\b/g, (m, w) => `${REVIEWS} ${w}`],
  [/— 500\+ verified customer reviews and video testimonials/g, () => `— 5.0 rating on Google from ${REVIEWS} customer reviews, plus video testimonials`],
  // "best auto transport company" guide: the Neon entry
  [/Neon Auto Transport has shipped more than 150,000 vehicles over 9\+ years in(\s+)business, and is fully licensed by the FMCSA and U\.S\. Department of(\s+)Transportation\./g,
    (m, s1, s2) => `Neon Auto Transport is an FMCSA-licensed broker (MC 1703787) founded in 2025 in${s1}Woodbridge, Virginia. It arranges shipments with vetted, insured carriers rather than${s2}running its own trucks.`],
  [/Neon holds a 4\.9-star rating from(\s+)verified customer reviews, with especially strong marks for communication(\s+)and honoring quoted prices\./g,
    (m, s1, s2) => `Neon holds a 5.0-star rating on Google from ${REVIEWS} customer reviews, with${s1}reviewers often mentioning communication and honoring quoted prices.${s2}As a newer company, it has a shorter track record than the companies below.`],
  [/(<td class="p-4 font-bold text-\[#0a2540\]">)4\.9★(<\/td>)/g, (m, a, b) => `${a}5.0★ (${REVIEWS} Google)${b}`],
  [/Ratings and figures compiled from company-published information and third-party review platforms as of 2026\. Always confirm current details directly with each provider before booking\./g,
    () => 'Ratings and figures compiled from company-published information and third-party review platforms as of 2026. Disclosure: this guide is published by Neon Auto Transport, so we are not a neutral reviewer. Always confirm current details directly with each provider before booking.'],
  // BBB: the profile is "Not BBB Accredited" (rating A-), and the old link opened another business
  [/\* \*\*BBB Accredited\*\* with a 4\.9\/5 customer rating/g, () => `* **5.0 on Google** from ${REVIEWS} customer reviews`],
  [/<li><strong>BBB Accredited<\/strong> with a 4\.9\/5 customer rating<\/li>/g, () => `<li><strong>5.0 on Google</strong> from ${REVIEWS} customer reviews</li>`],
  [/\[BBB Accredited\]\(/g, () => '[BBB profile]('],
  [/https:\/\/www\.bbb\.org\/us\/va\/woodbridge\/profile\/auto-transporters\/neon-auto-transport-0241-236024907/g,
    () => 'https://www.bbb.org/us/va/woodbridge/profile/auto-transportation/neon-auto-transport-llc-0241-236097573'],
  [/[45]\.[09] out of 5 based on verified Google Reviews across Google, Trustpilot, and BBB/g, () => `5.0 out of 5 on Google from ${REVIEWS} customer reviews`],
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (/^(node_modules|tools|\.git|\.claude|api)$/.test(e.name)) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (/\.(html|md|txt|json)$/.test(e.name)) files.push(p);
  }
})('.');

const hits = new Map();
let changed = 0;
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  let out = src;
  R.forEach(([re, fn], i) => { out = out.replace(re, (...a) => { hits.set(i, (hits.get(i) || 0) + 1); return fn(...a); }); });
  if (out !== src) { changed++; if (!DRY) fs.writeFileSync(f, out); }
}
console.log({ files: changed, hitsPerRule: R.map((_, i) => hits.get(i) || 0), dry: DRY });

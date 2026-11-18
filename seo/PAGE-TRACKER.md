# Neon — Page Tracker (SEO / GEO)

Har page jis par kaam hota hai, yahan darj hota hai: **pehle ke numbers → kya badla → index request → 2 aur 4 hafte baad nateeja.**
Aakhri update: **19 Nov 2026**. Search Console data 16 Nov tak ka hai (Google ~2-3 din peeche chalta hai).

Numbers ka matlab: **Clicks / Impressions / Position** (Google Search Console, pichle 90 din: 18 Aug – 16 Nov 2026).
Position 1–10 = Google ka page 1, 11–20 = page 2, 50 = page 5.

---

## 1. Kaam karne ka tareeqa (har page ke liye yahi steps)

1. **Baseline:** page ke 90-din aur 28-din ke clicks, impressions, position yahan likhna. Lead tracking (19 Nov se) se us page ki leads bhi.
2. **Kaam:** sirf ek page. Asli maloomat add karna, title/description behtar karna. URL **kabhi nahi** badalna.
3. **Aap ki manzoori** ke baad deploy.
4. **Index:** Search Console mein "Request indexing" + Bing ke liye IndexNow. Tareekh yahan likhna.
5. **Nateeja:** 14 din baad pehla check, 28 din baad faisla:
   - ✅ behtar hua → rakhein
   - ➖ farq nahi → aur maloomat / internal links
   - ❌ bura hua → git se purana version wapas (minton ka kaam)
6. **Ek waqt mein ek bara page**, taake pata rahe kis change ka kya asar hua.

---

## 2. Mehfooz pages (jo abhi clicks/leads la rahe hain) — sirf chhote, soche samjhe kaam

| Page | 90 din | Kyun mehfooz |
|---|---|---|
| `/` (homepage) | 60 / 3,339 / 24.8 | Sab se zyada clicks (zyada tar "Neon" naam se search) |
| `/reviews/` | 6 / 607 / 4.7 | Page 1 par |
| `/services/` | 4 / 706 / 8.5 | Page 1 par |
| `/car-shipping-woodbridge-va/` | 4 / 225 / 14.6 | Local office page |
| `/contact/` | 2 / 678 / 8.0 | Lead form |
| `/why-neon/` | 2 / 522 / 4.7 | Page 1 par |
| `/how-it-works/` | 2 / 276 / 10.3 | Page 1–2 |
| `/cost-calculator/` | 2 / 1,326 / 54.9 | Main quote form — design/URL nahi badlega |

Rule: in pages ka URL, form aur design nahi badlega. Sirf maloomat barhegi, woh bhi ek ek kar ke.

**Mehfooz pages par kiye gaye badlav (nazar rakhni hai):**

| Tareekh | Page | Badlav | Kya dekhna hai | Wapas kaise |
|---|---|---|---|---|
| 19 Nov 2026 | `/` homepage | Hero ke peeche car-carrier photo + white fade (owner ki farmaish). Text, form, buttons same. Photo 147KB desktop / 60KB mobile | Homepage se leads (CRM "Lead origin" / GA4 generate_lead by landing page) aur homepage clicks — pehle 2 hafte | Commit a2a55f5 revert, ya `nx-hero-photo` class `index.html` se hatana |

Note: photo abhi site ki purani 1024px "illustrative" tasveer se bani hai. Owner ki asli high-quality photo mile to `node tools/make-hero-bg.mjs <photo>` se badal dein.

---

## 3. Jin pages par kaam ho chuka hai → nateeje ka intezar

Index request: **19 Nov 2026**. Pehla check: **3 Dec 2026**. Faisla: **17 Dec 2026**.

| Page | Kya kiya (tareekh) | Pehle: 90 din | Google ne aakhri baar parha | Index status (19 Nov) | 3 Dec | 17 Dec |
|---|---|---|---|---|---|---|
| `/car-shipping-cost/` | Distances theek, Florida–Michigan season price, "season ke hisaab se cost", "quote se pehle kya poochhein", quote form (17 Nov) | 1 / 603 / 52.9 | 26 Oct | Indexed → request bheji | | |
| `/services/terminal-to-terminal-car-shipping/` | Route prices, nuqsanaat, "worth it?" check, terminal kaise dhoondein, naya title (17 Nov) | 2 / 618 / 24.9 | 15 Nov | Indexed (Merchant listing issue) → request bheji | | |
| `/services/open-auto-transport/` | Price table 5 tiers, naya title/description (17 Nov) | 0 / 1,739 / 43.9 | 26 Oct | Indexed → request bheji | | |
| `/services/military-car-shipping/` | PCS kaun pay karta hai, NoVA price table, bases, checklist (17 Nov) | 0 / 1,483 / 48.5 | **10 Oct** | Indexed (issue) → request bheji | | |
| `/services/snow-bird-car-shipping/` | Calendar, ship vs drive vs Auto Train, round-trip tips (17 Nov) | 0 / 705 / 33.9 | 25 Oct | Indexed → request bheji | | |
| `/services/car-shipping-to-another-state/` | Distance price/time table, registration deadlines (17 Nov) | — (Google mein nahi) | **Kabhi nahi** | ❌ "Discovered – currently not indexed" → request bheji | | |
| `/virginia-car-shipping/` | NoVA, Richmond, Hampton Roads section (17 Nov) | 0 / 792 / 49.6 | **23 Sep** | Indexed → request bheji | | |

### 3a. `/car-shipping-transit-times/` — page #1 (detail)

**Baseline (pehle):**
- 90 din: 1 click / 951 impressions / position 16.3
- 28 din (22 Sep–19 Oct → 20 Oct–16 Nov): 371 → 131 impressions, position 12.2 → 35.1
- Google ne aakhri baar parha: 25 Oct 2026 (indexed, "URL is on Google")

**Log kya search kar rahe thay (90 din):**
- "fmcsa auto transport delivery dates estimate(s) not guaranteed" aur milte-julte: ~85 impressions, position ~9 (page 1!), 0 clicks — page par is ka jawab hi nahi tha
- "how long does car transport/shipping take": ~90 impressions, position 38–85
- "car shipping timeframes / time estimate / timeline": ~65 impressions, position 22–26

**Kya badla (19 Nov, commit neeche):**
- Naya section: **"Are Car Shipping Delivery Dates Guaranteed? What FMCSA Rules Say"** — FMCSA kya karta hai aur kya nahi, Neon ke terms, guaranteed date wali company se kya poochhein, estimate ke hisaab se planning
- Naya section: **booking se delivery tak timeline** (4 steps) + **9 popular routes** ki table (3 Northern Virginia routes)
- Naya section: **saal ke kaunse mahine shipping slow hoti hai** + **car jaldi kaise pohnche**
- Din ki ranges site ke baaqi 100+ pages (cost page) ke mutabiq: 1–2 / 2–3 / 3–5 / 4–7 / 5–9 / 7–10 din (pehle 1–4 … 7–14 likha tha — contradiction tha)
- Nayi FAQ: "Are car shipping delivery dates guaranteed?" (FAQ schema mein bhi)
- Title: "How Long Does Car Shipping Take? Transit Times & Delivery Dates | Neon"; nayi description; "Last updated" Nov 2026
- URL, quote form, design: koi badlav nahi
- Content ~1,130 → ~1,900 words

**Status:** ✅ Live 19 Nov 2026 (commit b8759d7) · Google "Request indexing" ✅ 19 Nov · IndexNow (Bing) ✅ 19 Nov
**Check:** pehla **3 Dec 2026**, faisla **17 Dec 2026**

| Check | Clicks | Impressions | Position | "FMCSA… not guaranteed" position | Note |
|---|---|---|---|---|---|
| Baseline (90 din) | 1 | 951 | 16.3 | ~9 | |
| 3 Dec | | | | | |
| 17 Dec | | | | | |

### 3b. `/california-car-shipping/` — page #2 (detail)

**Baseline (pehle):**
- 90 din: 3 clicks / 8,990 impressions / position 58.5
- 28 din: 3,660 → 3,529 impressions, position 53 → 69.3
- Google ne aakhri baar parha: 9 Nov 2026 (indexed, "URL is on Google")

**Log kya search kar rahe thay (929 searches, 90 din):**
- ~4,650 impressions generic ("car shipping cost", "car shipping") — yeh asal mein cost page ke liye hain, California page ke nahi
- ~2,900 impressions California wali ("california car shipping", "auto transport california", "car shipping to and from california") — position ~57
- **Hawaii → California: 451 impressions** ("cost/how long to ship car from hawaii to california") — page par is ka koi section nahi tha
- Cities ~600 (San Francisco, Los Angeles, Napa, San Diego, Bay Area, Fresno); "best car shipping companies in california" ~200

**Kya badla (19 Nov):**
- Naya section: **Shipping a Car Within California** — 6 in-state routes (LA–SD, LA–Fresno, SF–LA, Sacramento–LA, SD–Sacramento, SD–Redding) qeemat + din
- Naya section: **Our Northern California Office in Live Oak** — address, phone, Sutter/Yuba/Butte counties, rural pickup, CA-99/I-5/I-80 routes (pehle page par Live Oak office ka zikr hi nahi tha)
- Naya section: **Shipping a Car from Hawaii to California** — Matson/Pasha, ports, $1,200–$2,500, 2–3 hafte, port drop-off checklist
- 3 nayi FAQs (Hawaii cost, Hawaii time, California office) — schema + page par dikhti hain
- **Qeematein theek:** CA↔TX $950–1,300 / 3–6 din, CA↔FL $1,200–1,650, CA↔NY $1,250–1,700, CA↔WA $700–1,100, CA↔AZ $300–550 / 1–2 din, in-state $250–500 — ab dedicated route pages se milti hain (pehle CA→TX $1,075–1,450 tha, route page par $950–1,300)
- City cost table: har city ke liye $25–50 ka farq hata diya (asal data par mabni nahi tha)
- **Smog claim theek:** "4 saal se nayi cars exempt" hataya (yeh rule California ke andar transfer ka hai, doosri state se aane wali car ka nahi)
- Title: "California Car Shipping Cost, Routes & Times | Neon Auto Transport"; nayi description (Hawaii + Live Oak)
- URL, quote form, design: koi badlav nahi

**Status:** ✅ Live 19 Nov 2026 (commit 036b1b5) · Google "Request indexing" ✅ 19 Nov · IndexNow (Bing) ✅ 19 Nov
**Check:** pehla **3 Dec 2026**, faisla **17 Dec 2026**

| Check | Clicks | Impressions | Position | Hawaii→CA searches | Note |
|---|---|---|---|---|---|
| Baseline (90 din) | 3 | 8,990 | 58.5 | 451 impr, pos ~58 | |
| 3 Dec | | | | | |
| 17 Dec | | | | | |

Pehle ke kaam (12 Nov): 38 state pages ka copy-paste text hata kar har state ka apna content; 20 city pages aur 20 route pages par local content; 226 patle (thin) city/route pages `noindex`. In mein se jin pages ko impressions mil rahe thay unhein check kiya: noindex wale pages ko sirf 20–60 impressions aur 0 clicks milte thay, is liye koi nuqsan nahi.

Site-wide (har page): naya layout, footer mein dono offices, sahi founding year / reviews / BBB, business hours, lead tracking + GTM (19 Nov).

---

## 4. Agla kaam — priority list (ek ek kar ke)

| # | Page | 90 din | Kyun | Kya add karna hai |
|---|---|---|---|---|
| ~~1~~ | `/car-shipping-transit-times/` | 1 / 951 / 16.3 | **Kaam ho gaya 19 Nov — neeche section 3a dekhein** | |
| ~~2~~ | `/california-car-shipping/` | 3 / 8,990 / 58.5 | **Kaam ho gaya 19 Nov — section 3b** | |
| **3** | `/how-to-ship-a-car-to-another-state/` + `/services/car-shipping-to-another-state/` | 0 / 1,929 / 49.2 | Do pages ek hi topic par — Google confuse. Services wala index hi nahi | Dono ko ek mazboot page banana (faisla us waqt) |
| **4** | `/car-shipping-quote/` | 1 / 1,264 / 53.2 | Quote search karne wale = leads | Quote mein kya hota hai, qeemat kaise banti hai, jaldi quote |
| **5** | `/best-car-shipping-companies/` | 0 / 368 / **17.9** | Page 2; AI tools "best company" lists se jawab dete hain | Sach-mutch comparison, criteria, Neon ki jagah imaandari se |
| **6** | `/delaware-car-shipping/` | 1 / 738 / 34.5 | Achhi impressions, page 3–4 | Delaware routes, ports, local notes |
| **7** | `/new-york-car-shipping/` | 0 / 489 / 40.1 | 351 → 37 impressions gira | NY state content |

Baad mein: `/services/enclosed-auto-transport/` (206 / 36), `/washington-dc-car-shipping/` (190 / 28.6), `/florida-to-new-york-car-shipping/` (670 / 78), `/california-to-new-york-car-shipping/` (541 / 54).

---

## 5. Girne wale pages (watch list) — 28 din vs pichle 28 din

(22 Sep–19 Oct vs 20 Oct–16 Nov. Poori site: 38 → 29 clicks, 13.8K → 12.2K impressions.)

| Page | Impressions | Position | Note |
|---|---|---|---|
| `/car-shipping-transit-times/` | 371 → 131 | 12.2 → 35.1 | Priority #1 |
| `/services/military-car-shipping/` | 695 → 430 | 38.9 → 59.4 | Kaam ho chuka, Google ne abhi nahi parha |
| `/how-to-ship-a-car-to-another-state/` | 347 → 193 | 40 → 72 | Priority #3 |
| `/new-york-car-shipping/` | 351 → 37 | 43 → 40 | Priority #7 |
| `/routes/city/fresno-ca/` | 351 → 13 | 9.9 → 11.4 | Check karna hai |
| `/services/snow-bird-car-shipping/` | 305 → 177 | 30 → 47 | Kaam ho chuka (season shuru — wapas aana chahiye) |
| `/contact/` | 241 → 136 | 6.4 → 12.7 | Mehfooz page — nazar rakhni hai |
| `/california-car-shipping/` | 3,660 → 3,529 | 53 → 69 | Priority #2 |

Yeh girawat 12 Nov ke changes se **pehle** shuru hui thi (data Oct tak ka hai), is liye yeh hamare kaam ki wajah se nahi.
Google ne bhi alert diya: "how much does it cost to ship a car" search par impressions 88% kam.

Barhne wale: homepage (698 → 1,510 impressions), `/car-shipping-quote/` (227 → 702), `/cost-calculator/` (449 → 667).

---

## 6. Technical masle (alag se theek karne hain)

| Masla | Asar | Status |
|---|---|---|
| Service pages par "Product" schema → Google unhein "Merchant listing" samajhta hai (21 invalid, terminal + military mein dikha) | Search Console mein errors; service ko product batana ghalat | Theek karna hai |
| `/services/car-shipping-to-another-state/` index nahi + `/how-to-ship-a-car-to-another-state/` same topic | Do pages ek doosre se muqabla | Priority #3 mein |
| Google kai URLs `//` aur `.html` ke saath bhi dikhata hai (redirect 308 hota hai) | Halka — redirect sahi hai | Nazar |
| `/routes/route-template/` Google mein (1 impression) | Template page — ab 404 deta hai, Google khud hata dega | ✅ Theek (deploy se bahar) |
| `?rwg_token=…` URLs | Google Business Profile ke links — normal | Kuch nahi karna |
| **Qeematein site par ek jaisi nahi** — e.g. WA→CA page $550–950 / 2–4 din, CA→WA page $750–1,300 / 3–6 din; `/hawaii-car-shipping/` Hawaii→CA "6–10 din" (asal 2–3 hafte) | Google/AI ko contradiction dikhta hai | Alag "price consistency" kaam — route pages ek ek kar ke |
| Route pages par har city pair ki distance same (e.g. CA→TX table: LA–Houston aur SF–Houston dono "~1,618 mi") | Ghalat lagta hai | Route pages ke kaam ke saath |
| "4 saal se nayi cars smog se exempt" wala claim `/routes/city/los-angeles-ca/` aur `/routes/city/fresno-ca/` par bhi | Ghalat maloomat | Un pages ke kaam ke saath theek karna |

---

## 7. Change log

| Tareekh | Kya hua | Commit |
|---|---|---|
| 12 Nov 2026 | 38 state pages unique content; 20 city + 20 route pages content; 226 thin pages noindex; naya layout | a595302, c2c6a46, 96e0aff, 07b6e10 |
| 17 Nov 2026 | Quick wins (42 pages), cost page form, trust fixes, military/snowbird/another-state/Virginia content, footer addresses, hours | d4c46b0 … c4143ff |
| 19 Nov 2026 | Lead tracking (har lead ka source/page), GTM 39 pages par, GA4 key event | 71370a8 |
| 19 Nov 2026 | 7 worked pages ke liye Google "Request indexing" | — |
| 19 Nov 2026 | Page #1 transit times: guarantee/FMCSA section, timeline + routes, seasons, din ki ranges theek; live + index request | b8759d7 |
| 19 Nov 2026 | Page #2 California: in-state routes, Live Oak office, Hawaii→CA, qeematein route pages ke mutabiq, smog claim theek; live + index request | 036b1b5 |
| 19 Nov 2026 | Homepage hero: car-carrier photo background (protected page — nazar) | a2a55f5 |

Data files: `seo/data/` (Search Console exports). Har check par nayi file add hogi.
Yeh poora `seo/` folder sirf hamare liye hai — `.vercelignore` ki wajah se website par public nahi hota.
Tools: `node tools/page-status.mjs <gsc.tsv>` (har page ka noindex/sitemap/aakhri change), `node tools/gsc-save.mjs` (Search Console table ko TSV banana).

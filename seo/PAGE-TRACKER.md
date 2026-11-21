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
| 20 Nov 2026 | `/` homepage | Dhundli photo ki jagah HD photo (Unsplash, Cooper White, 3912px original; truck par doosri company ka naam/USDOT/MC mitaya). 130KB desktop / 46KB mobile; Image Credits par credit | Wahi — homepage leads aur clicks | Commit 9bc2a39 revert (purani photo wapas) |
| 20 Nov 2026 | `/` homepage | **LIVE (f6b9513)**: hero waisa hi (light photo + poora quote form, owner ki pasand). Naya: 6 bare HD photo service cards (Unsplash, credits) aur "How it works" 5 saade step cards. Tesla dark hero, 3D/WebGL animation aur Flow AI videos owner ne reject kiye, hata diye. Purana 8-card services grid hataya (links neeche "Also" line mein) | Homepage leads (CRM "Lead origin" / GA4 generate_lead), clicks, page speed — 4 Dec aur 18 Dec ko dekhna | `git revert` f6b9513..aad6499 range |

Note: 20 Nov se hero photo HD hai (`tools/make-hero-bg2.mjs`, original file `C:/Users/DYNABOOK/neon-downloads/unsplash-q36Yp9RpHa0/`). Owner ki apni asli photo mile to usi script se badal sakte hain.

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

### 3c. `/florida-to-california-car-shipping/` — page #3, audit ka pehla thin page (detail)

**Kyun yeh page:** 21 Nov audit mein 27 thin pages. Keyword data (OpenSEO): "florida to california car shipping" **320 searches/mahina, KD 0, commercial** — thin route pages mein sab se zyada demand. Page sirf 298 words ka template tha.

**Baseline (pehle):**
- 90 din (GSC 16 Nov export): **0 impressions** — page Google mein dikh hi nahi raha tha
- Content: 298 words; qeemat $1,000–1,800 / 7–10 din (site ke baaqi pages se alag); table aur CTA box mein safed text safed background par

**Kya badla (21 Nov):**
- Naya layout: hero + mini quote form (California page jaisa), breadcrumb
- City-pair table: Miami/Orlando/Jacksonville → LA, Tampa → San Diego ($1,200–1,650 / 6–10 din), Fort Lauderdale → Bay Area aur Miami → Sacramento ($1,250–1,700 / 7–10 din) — **qeematein California page ke mutabiq**
- Naye sections: I-10 route kaise chalta hai (hours-of-service, 400–500 mi/din), saal ka behtar waqt (spring snowbird mehnga, Oct–Jan sasta, hurricane season), Florida pickup checklist (SunPass, HOA/75 ft truck), California arrival (20 din registration, VIN verification, smog — CA page jaisa), open vs enclosed, 3 steps
- Sam ka asli Florida → California video review (VideoObject schema)
- 6 FAQs (schema ke saath), related routes/guides links, chatbot + video script add
- Title: "Florida to California Car Shipping: Cost & Transit | Neon" (57); nayi description (148); .md copies aur sitemap lastmod update
- Content 298 → ~1,430 words. URL same

**Status:** ✅ Live 21 Nov 2026 (commit c19639d) · Google "Request indexing" ✅ 21 Nov · IndexNow (Bing) ✅ 21 Nov
**Index status (21 Nov):** ❌ "Discovered – currently not indexed", Google ne **kabhi crawl nahi kiya**, referring page "None detected" (jabke ab 8 pages link karte hain: homepage, California, Florida, CA→FL waghera). Baqi 14 thin `.html` route pages ka bhi shayad yahi haal hai — un par kaam karte waqt check karna.
**Check:** 5 Dec 2026 (+14 din), 19 Dec 2026 (+28 din)

| Check | Clicks | Impressions | Position | Note |
|---|---|---|---|---|
| Baseline (90 din) | 0 | 0 | — | |
| 5 Dec | | | | |
| 19 Dec | | | | |

### 3d. `/insurance/` — page #4, thin page (detail)

**Kyun:** "car shipping insurance" 210 searches/mahina, KD 10, commercial. `/insurance/` (246 words) aur `/blog/car-shipping-insurance-explained/` (304 words) dono ek hi topic par — dono ke 90 din mein **0 impressions**.

**Owner se confirm kiye facts (22 Nov):** $500,000 **carrier ki** cargo insurance hai (Neon ki apni policy nahi); damage par deductible **carrier** deta hai; claim = delivery par BOL par damage likhna + photos + info@neonautotransport.com email, Neon carrier ke saath claim file karta hai.

**Kya badla (22 Nov):**
- `/insurance/` naya: hero + quote form, insurance kaise kaam karti hai (broker vs carrier, federal $750K liability vs cargo ki koi federal minimum nahi), covered / not covered, deductible kaun deta hai, apni insurance rakhein ya nahi, pickup se pehle claim kaise mehfooz karein, damage par 5 steps, open vs enclosed, 6 FAQs
- Purana galat FAQ schema (menu text paste hua tha) aur "Locations" breadcrumb hataya; nayi BreadcrumbList + FAQPage
- Title: "Car Shipping Insurance: What's Covered & Claims | Neon" (54); description (152). 246 → ~1,250 words
- Blog post `/blog/car-shipping-insurance-explained/` → **301 redirect** `/insurance/` (vercel.json), files hataye, sitemap + llms.txt update
- **Site-wide sach:** 63 files / 144 jagah "Neon maintains $500,000 … in addition to the carrier policy" aur "$500,000 Secondary Policy" likha tha — ghalat (Neon ki apni policy nahi). Sab jagah: "Every carrier Neon Auto Transport books must carry $500,000 in cargo insurance…"

**Status:** ✅ Live 22 Nov 2026 (commit 1993053) · Google "Request indexing" ✅ 22 Nov · IndexNow ✅ 22 Nov · blog URL 308 → /insurance/ live
**Index status (22 Nov, pehle):** ❌ "Crawled – currently not indexed" (aakhri crawl 31 Aug — Google ne patla page parh kar chhod diya tha)
**Check:** 6 Dec 2026 (+14 din), 20 Dec 2026 (+28 din)

| Check | Clicks | Impressions | Position | Note |
|---|---|---|---|---|
| Baseline (90 din) | 0 | 0 | — | dono insurance pages |
| 6 Dec | | | | |
| 20 Dec | | | | |

### 3e. `/compare/neon-vs-montway/` — page #5, thin page (detail)

**Kyun:** "montway auto transport reviews" **5,400 searches/mahina, KD 4** (OpenSEO). Page sirf ~150 words; 90 din: 0 clicks / 15 impressions / position 38.

**Purane page ke masle:** Montway ke baare mein bina saboot ke claims — "driver contact nahi, dispatch ke through", "booking fee leta hai", "price carrier bidding par" (teeno ghalat: Montway bhi carrier assign hone par charge karta hai, 30-din TruePrice Guarantee hai, carrier ka contact deta hai); Neon "top 10% carriers" (saboot nahi). og/twitter title "About Neon…" aur AboutPage schema copy-paste; do H1.

**Kya badla (22 Nov):** imaandar, sourced comparison — table (since, offices, payment, guarantee, insurance, driver contact, BBB, reviews), "Montway reviews" section (BBB A+ accredited 2007, 893 reviews, 288 complaints/3 saal; Trustpilot 3.2/5, 2,132 reviews — Nov 2026), payment/cancellation ($249 broker fee — U.S. News), price guarantees, kaun Montway chune / kaun Neon, quotes compare karne ka tareeqa, 5 FAQs, sources section. Neon facts: 2025, Google 5.0 (47), BBB A- not accredited, 2 offices. ~1,160 words; title "Neon vs Montway Auto Transport: Reviews & Comparison (2026)".

**Dhyan:** baaqi compare pages (AmeriFreight, Easy Auto Ship, Nexus, RoadRunner, SGT, Sherpa) mein bhi shayad yahi unverified claims hain — ek ek kar ke isi tarah sourced banana.

**Status:** ✅ Live 22 Nov 2026 (commit 2d89d51) · Google "Request indexing" ✅ 22 Nov (page pehle se indexed thi — recrawl) · IndexNow ✅ 22 Nov
**Check:** 6 Dec 2026 (+14 din), 20 Dec 2026 (+28 din)

| Check | Clicks | Impressions | Position | Note |
|---|---|---|---|---|
| Baseline (90 din) | 0 | 15 | 38.3 | |
| 6 Dec | | | | |
| 20 Dec | | | | |

### 3f. `/compare/neon-vs-nexus/` — page #6, thin page (detail)

**Kyun:** "nexus auto transport reviews" **3,600 searches/mahina, KD 10** (OpenSEO) — baaqi compare pages mein sab se zyada (RoadRunner/SGT reviews 2,400 agle).

**Purane page ke masle:** "Nexus booking par 25% deposit leta hai" (ghalat — deposit driver assign hone par), Nexus ke USDOT/MC numbers doosre sources se nahi milte, "secondary $500,000 insurance" (ghalat).

**Kya badla (22 Nov):** sourced comparison — table (2015, Schaumburg IL, BBB A accredited 2016, Trustpilot 4.2 / 2,355, BBB 1,270 reviews, 163 complaints/3 saal; deposit driver assign par, customers ~20–30% batate hain), reviews section, deposits, kaun Nexus / kaun Neon, broker se poochhne wale 5 sawal, 5 FAQs, sources. Nexus ke USDOT/MC hataye (confirm nahi). ~1,030 words.

**Saath mein:** 21 files / 27 jagah aur "secondary $500,000" wording variants theek (compare pages + `/car-shipping-cost/`).

**Status:** ✅ Live 22 Nov 2026 (commit 9824dab) · Google "Request indexing" ✅ 22 Nov · IndexNow ✅ 22 Nov (Nexus + cost page + 5 compare pages)
**Index status (22 Nov, pehle):** ❌ "Discovered – currently not indexed" — Google ne kabhi crawl nahi kiya
**Check:** 6 Dec 2026 (+14 din), 20 Dec 2026 (+28 din)

| Check | Clicks | Impressions | Position | Note |
|---|---|---|---|---|
| Baseline (90 din) | — | — | — | GSC export mein nahi |
| 6 Dec | | | | |
| 20 Dec | | | | |

### 3g. `/new-york-to-california-car-shipping/` — page #7, route page (pehla "route priority" page)

**Kyun:** owner ka faisla (22 Nov): leads ke liye route pages. 164 route keywords mein sab se zyada demand — "new york to california car shipping" **1,300/mahina** + "ship car from new york to california" **1,300**, transactional, **KD 0**, CPC $14. Saath: "how much to ship…" 140, "cost to ship…" 70, "driving from nyc/ny to la" **590 + 590**.

**Baseline:** 90 din **0 impressions**; Google: ❌ "Discovered – currently not indexed" (kabhi crawl nahi). Page 1,550 words lekin template (har route jaisa), 4 cities sab "~2,794 mi". NY state page par NY→CA $1,350–1,850 / 6–8 din (contradiction).

**Competitors (Google top 10, 22 Nov):** MoveBuddha & FreightWaves (city-pair price pages, e.g. NYC→Long Beach $1,683–2,615), Montway, AmeriFreight ($1,300–1,500 open), Nexus, uShip (avg $1,900), Corsia, Execuship, Reddit/Facebook threads (California emissions worry). Jeetne wali cheezein: city pairs + miles + din, ship vs drive, NYC pickup, emissions.

**Kya badla (22 Nov):** naya page ~1,700 words — 6 city pairs alag distance (NYC→LA 2,790, →SD 2,770, Long Island→OC 2,820, NYC→Bay Area 2,900, Albany→Sacramento 2,830, Buffalo→LA 2,550), vehicle/option price table, transit + I-80 / I-70-I-15 / I-40 routes + winter Donner Pass, **NYC pickup** (75 ft truck, parkways ban, alternate-side, E-ZPass), **ship vs drive table** (590+590 searches), best time, California arrival (20 din, VIN, smog, NY = California emission standards, 10 din license), open vs enclosed, 3 steps, 7 FAQs (schema), related links. Title "New York to California Car Shipping: Cost & Time | Neon"; nayi description. Qeemat $1,250–1,700 (CA page jaisi); NY state page ki row bhi $1,250–1,700 / 6–10 din / 2,790 mi + link.

**Status:** ✅ Live 22 Nov 2026 (commit 424e4e3) · Google "Request indexing" ✅ 22 Nov · IndexNow ✅ 22 Nov (+ /new-york-car-shipping/)
**Check:** 6 Dec 2026 (+14 din), 20 Dec 2026 (+28 din)

| Check | Clicks | Impressions | Position | Note |
|---|---|---|---|---|
| Baseline (90 din) | 0 | 0 | — | crawl hi nahi hua |
| 6 Dec | | | | |
| 20 Dec | | | | |

### 3h. `/texas-to-california-car-shipping/` — page #8, route page

**Keywords:** "ship car from texas to california" **720**, "texas to california car shipping" **590**, "how much to ship a car from texas to california" 140, "cost to…" 20 — sab KD 0.

**Baseline (90 din):** 0 clicks / **255 impressions / position 57.5** (indexed). Queries: "texas to california car shipping" 52 (64), "auto transport" 22, "ship car from texas…" 18, "ship car from houston to los angeles" 11, **"buy a new car from texas to california" 8**. Page template, 4 cities sab "~1,618 mi". Texas state page par TX↔CA ki teen alag qeematein ($1,100–1,500, $1,050–1,425, $740–1,000).

**Competitors (22 Nov):** kamzor SERP — Reddit/Facebook 5–6 jagah; MileAutoTransport, Wave, FreightWaves (Dallas→LA $1,082–1,642, Houston→Sacramento $1,308–2,006), MoveBuddha (Houston→SF $1,346–2,127), HomeMovingNow ($850–1,250).

**Kya badla (22 Nov):** ~1,720 words — 7 city pairs asli distance (Houston→LA 1,550, DFW→LA 1,440, San Antonio→SD 1,280, Austin→OC 1,380, Houston→Bay Area 1,930, DFW→Sacramento 1,750, El Paso→LA 800), price factors, I-10 / I-20 / I-40 routes, **Texas car California mein register — emissions (Texas CARB state nahi, 7,500 miles rule, 50-state label)**, Texas pickup (toll tags, hail season, Houston hurricanes), **imaandar ship vs drive (yahan drive sasta)**, best time, California arrival, open vs enclosed, 6 FAQs. Texas state page ki teeno qeematein $950–1,300 / 3–6 din + link.

**Status:** ⏳ Local (live ka OK baaqi)

| Check | Clicks | Impressions | Position | Note |
|---|---|---|---|---|
| Baseline (90 din) | 0 | 255 | 57.5 | indexed |
| +14 din | | | | |
| +28 din | | | | |

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
| `/florida-car-shipping/` par Florida → California ke do alag ranges ($1,225–1,650 / 6–10 din aur $1,175–1,700 / 4–9 din, distance 2,550–2,735) jabke CA page aur naya FL→CA page $1,200–1,650 / 6–10 din | Contradiction | Florida page ke kaam ke saath |
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
| 20 Nov 2026 | Homepage hero: HD Unsplash photo (lettering removed), asset version 20261120 | 9bc2a39, 6d08ac4 |
| 20 Nov 2026 | Homepage: service photo cards + 5 step cards live; asset version 20261121; IndexNow / and /image-credits/ | aad6499..f6b9513 |
| 20 Nov 2026 | Site-wide hover effects (buttons lift/glow/shine, cards lift + blue top line) + homepage scroll reveal; asset version 20261122. Content/URLs unchanged | de8cdf8 |
| 21 Nov 2026 | SEO audit (OpenSEO + full scan, `seo/AUDIT-2026-11-21.md`). Quick fixes live: descriptive "Learn more" links on homepage, blog/author WebP thumbnails + lazy loading, 1280px hero for 1x desktops, h4→h3 on Woodbridge, Arlington, cheapest-way, Woodbridge blog; asset version 20261123; IndexNow 7 URLs | 5102575 |
| 21 Nov 2026 | `/florida-to-california-car-shipping/` thin page rebuild live (298 → ~1,430 words); request indexing + IndexNow | c19639d |
| 22 Nov 2026 | `/insurance/` rebuild live (246 → ~1,250 words), insurance blog 301 → /insurance/, site-wide "$500K secondary policy" claim theek (63 files); request indexing + IndexNow | 1993053 |
| 22 Nov 2026 | `/compare/neon-vs-montway/` honest sourced comparison live (~150 → ~1,160 words); request indexing + IndexNow | 2d89d51 |
| 22 Nov 2026 | `/compare/neon-vs-nexus/` sourced comparison live (~1,030 words) + 21 files "secondary $500K" wording theek; request indexing + IndexNow 7 URLs | 9824dab |
| 22 Nov 2026 | `/new-york-to-california-car-shipping/` research-based rebuild live (~1,700 words) + NY state page row aligned/linked; request indexing + IndexNow | 424e4e3 |

Data files: `seo/data/` (Search Console exports). Har check par nayi file add hogi.
Yeh poora `seo/` folder sirf hamare liye hai — `.vercelignore` ki wajah se website par public nahi hota.
Tools: `node tools/page-status.mjs <gsc.tsv>` (har page ka noindex/sitemap/aakhri change), `node tools/gsc-save.mjs` (Search Console table ko TSV banana).

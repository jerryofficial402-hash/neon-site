<USER_REQUEST>
# Neon Auto Transport — Route Page Template
## For Antigravity / Generator Use
### Version 1.0 | June 2026

---

## HOW TO USE THIS TEMPLATE

Every item in `[BRACKETS]` is a variable. Replace with the correct value for each route.
All other text is final copy — do not change the structure, headings, or schema.

**Variables used throughout:**
- `[ORIGIN_STATE]` — e.g. California
- `[ORIGIN_ABBR]` — e.g. CA  
- `[DEST_STATE]` — e.g. Texas
- `[DEST_ABBR]` — e.g. TX
- `[ORIGIN_SLUG]` — e.g. california
- `[DEST_SLUG]` — e.g. texas
- `[DISTANCE_MI]` — e.g. 1,618
- `[OPEN_LOW]` — e.g. $950
- `[OPEN_HIGH]` — e.g. $1,300
- `[ENCLOSED_LOW]` — e.g. $1,400
- `[ENCLOSED_HIGH]` — e.g. $1,850
- `[TRANSIT_LOW]` — e.g. 3
- `[TRANSIT_HIGH]` — e.g. 6
- `[HIGHWAY]` — e.g. I-10 and I-20
- `[ORIGIN_CITY_1]` — e.g. Los Angeles
- `[ORIGIN_CITY_2]` — e.g. San Francisco
- `[ORIGIN_CITY_3]` — e.g. San Diego
- `[DEST_CITY_1]` — e.g. Houston
- `[DEST_CITY_2]` — e.g. Dallas
- `[DEST_CITY_3]` — e.g. Austin
- `[REVERSE_SLUG]` — e.g. texas-to-california-car-shipping

---

## ROUTE DATA TABLE
### Fill this first before building each page

| Route | Distance | Open Cost | Enclosed Cost | Transit | Highway |
|---|---|---|---|---|---|
| California → Texas | 1,618 mi | $950–$1,300 | $1,400–$1,850 | 3–6 days | I-10, I-20 |
| Texas → California | 1,618 mi | $950–$1,300 | $1,400–$1,850 | 3–6 days | I-10, I-20 |
| California → Florida | 2,756 mi | $1,200–$1,650 | $1,750–$2,300 | 6–10 days | I-10 |
| Florida → California | 2,756 mi | $1,200–$1,650 | $1,750–$2,300 | 6–10 days | I-10 |
| New York → Florida | 1,281 mi | $850–$1,150 | $1,250–$1,700 | 3–5 days | I-95 |
| Florida → New York | 1,281 mi | $850–$1,150 | $1,250–$1,700 | 3–5 days | I-95 |
| California → New York | 2,794 mi | $1,250–$1,700 | $1,800–$2,400 | 6–10 days | I-80, I-40 |
| New York → California | 2,794 mi | $1,250–$1,700 | $1,800–$2,400 | 6–10 days | I-80, I-40 |
| Illinois → Florida | 1,377 mi | $875–$1,175 | $1,300–$1,750 | 3–5 days | I-75, I-65 |
| Virginia → Florida | 1,053 mi | $750–$1,050 | $1,100–$1,550 | 2–4 days | I-95 |
| Texas → Florida | 1,229 mi | $825–$1,125 | $1,225–$1,675 | 3–5 days | I-10 |
| Georgia → California | 2,174 mi | $1,100–$1,500 | $1,600–$2,150 | 5–8 days | I-40, I-10 |
| New Jersey → Florida | 1,254 mi | $850–$1,150 | $1,250–$1,700 | 3–5 days | I-95 |
| Ohio → Florida | 1,179 mi | $825–$1,100 | $1,225–$1,650 | 3–5 days | I-75 |

---

## PAGE URL STRUCTURE

```
/[ORIGIN_SLUG]-to-[DEST_SLUG]-car-shipping/
```

**Examples:**
```
/california-to-texas-car-shipping/
/texas-to-california-car-shipping/
/florida-to-new-york-car-shipping/
/new-york-to-florida-car-shipping/
/virginia-to-florida-car-shipping/
```

**Rules:**
- Always lowercase
- Always hyphenated
- Always trailing slash
- Never .html extension
- Never /routes/ prefix

---

## FULL HTML PAGE TEMPLATE

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- ═══════════════════════════════════════
       TITLE — Format: [Origin] to [Dest] Car Shipping | Neon Auto Transport
       Target length: 55–60 characters
  ════════════════════════════════════════ -->
  <title>[ORIGIN_STATE] to [DEST_STATE] Car Shipping | Neon Auto Transport</title>

  <!-- ═══════════════════════════════════════
       META DESCRIPTION — 145–158 characters
       Must include: origin state, dest state, cost range, "free quote"
  ════════════════════════════════════════ -->
  <meta name="description" content="Ship your car from [ORIGIN_STATE] to [DEST_STATE] starting at [OPEN_LOW]. Door-to-door service, no upfront deposit, FMCSA approved. Get a free instant quote today." />

  <!-- CANONICAL — must match exact page URL, clean trailing slash, no .html -->
  <link rel="canonical" href="https://neonautotransport.com/[ORIGIN_SLUG]-to-[DEST_SLUG]-car-shipping/" />

  <!-- ROBOTS -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Neon Auto Transport" />

  <!-- OPEN GRAPH -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://neonautotransport.com/[ORIGIN_SLUG]-to-[DEST_SLUG]-car-shipping/" />
  <meta property="og:title" content="[ORIGIN_STATE] to [DEST_STATE] Car Shipping | Neon Auto Transport" />
  <meta property="og:description" content="Ship your car from [ORIGIN_STATE] to [DEST_STATE] starting at [OPEN_LOW]. No deposit, door-to-door, FMCSA approved. Instant quote available." />
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Neon Auto Transport" />

  <!-- TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="[ORIGIN_STATE] to [DEST_STATE] Car Shipping | Neon Auto Transport" />
  <meta name="twitter:description" content="Ship your car from [ORIGIN_STATE] to [DEST_STATE] starting at [OPEN_LOW]. No deposit. FMCSA approved. Get an instant quote." />
  <meta name="twitter:image" content="https://neonautotransport.com/images/og-cover.jpg" />

  <!-- GSC VERIFICATION -->
  <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8" />

  <!-- ═══════════════════════════════════════
       JSON-LD SCHEMA BLOCK
       Three schemas: WebPage, FAQPage, BreadcrumbList
  ════════════════════════════════════════ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/[ORIGIN_SLUG]-to-[DEST_SLUG]-car-shipping/",
        "url": "https://neonautotransport.com/[ORIGIN_SLUG]-to-[DEST_SLUG]-car-shipping/",
        "name": "[ORIGIN_STATE] to [DEST_STATE] Car Shipping | Neon Auto Transport",
        "description": "Ship your car from [ORIGIN_STATE] to [DEST_STATE] starting at [OPEN_LOW]. Door-to-door service, no upfront deposit, FMCSA approved.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://neonautotransport.com/",
          "name": "Neon Auto Transport",
          "url": "https://neonautotransport.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Neon Auto Transport",
          "url": "https://neonautotransport.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://neonautotransport.com/images/neon-logo.png"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2709 Neabsco Common Pl Suite 101",
            "addressLocality": "Woodbridge",
            "addressRegion": "VA",
            "postalCode": "22191",
            "addressCountry": "US"
          },
          "telephone": "+15715767711",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61577115704216",
            "https://www.instagram.com/neonautotransport",
            "https://www.linkedin.com/company/neon-auto-transport",
            "https://www.youtube.com/@neonautotransport",
            "https://www.tiktok.com/@neonautotransport"
          ]
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Shazil Ali",
          "jobTitle": "Director of Operations",
          "worksFor": {
            "@type": "Organization",
            "name": "Neon Auto Transport"
          },
          "sameAs": "https://www.linkedin.com/in/shazil-ali/"
        },
        "dateModified": "2026-06-01"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://neonautotransport.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://neonautotransport.com/locations/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "[ORIGIN_STATE] Car Shipping",
            "item": "https://neonautotransport.com/[ORIGIN_SLUG]-car-shipping/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "[ORIGIN_STATE] to [DEST_STATE] Car Shipping",
            "item": "https://neonautotransport.com/[ORIGIN_SLUG]-to-[DEST_SLUG]-car-shipping/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to ship a car from [ORIGIN_STATE] to [DEST_STATE]?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shipping a car from [ORIGIN_STATE] to [DEST_STATE] typically costs between [OPEN_LOW] and [OPEN_HIGH] for open transport, and [ENCLOSED_LOW] to [ENCLOSED_HIGH] for enclosed transport. The final price depends on your pickup and delivery cities, vehicle size, transport type, and time of year. Get an instant quote at neonautotransport.com."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to ship a car from [ORIGIN_STATE] to [DEST_STATE]?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Transit time from [ORIGIN_STATE] to [DEST_STATE] is typically [TRANSIT_LOW] to [TRANSIT_HIGH] days after pickup. Add 1–5 days for the carrier assignment and pickup window, so plan for [TRANSIT_LOW] to [TRANSIT_HIGH] days total from booking to delivery."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to pay a deposit to ship my car from [ORIGIN_STATE] to [DEST_STATE]?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Neon Auto Transport does not require any upfront deposit. You only pay once a carrier is assigned to your shipment. The remaining balance is due at delivery — by cash or certified check to the driver, or in full by card."
            }
          },
          {
            "@type": "Question",
            "name": "Is my car insured during transport from [ORIGIN_STATE] to [DEST_STATE]?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every carrier in our network carries active FMCSA-required cargo insurance. Open transport provides coverage up to $250,000. Enclosed transport provides coverage up to $500,000. You receive a certificate of insurance before your vehicle is dispatched."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best time of year to ship a car from [ORIGIN_STATE] to [DEST_STATE]?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fall and early spring offer the best rates for most routes. Summer is peak season and rates increase by 15–25% due to high demand. If flexibility allows, booking in September through November or February through April typically yields the most competitive pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Can I ship personal items inside my car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, most carriers allow up to 100 lbs of personal items stored in the trunk below window level. Items must be secured and carriers are not liable for personal belongings. Do not leave valuables, electronics, or documents in the vehicle."
            }
          },
          {
            "@type": "Question",
            "name": "How do I prepare my car for shipping from [ORIGIN_STATE] to [DEST_STATE]?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Before shipping: wash the exterior so you can document any pre-existing damage with photos, remove personal items and toll transponders, keep the gas tank at 1/4 full, disable alarm systems, ensure the battery is charged, and note any mechanical issues that could affect loading. Have your ID and vehicle registration available at pickup."
            }
          }
        ]
      }
    ]
  }
  </script>

  <!-- Your existing CSS / Tailwind link goes here -->
  <link rel="stylesheet" href="/styles/main.css" />
</head>

<body>

  <!-- ════════════════════════════════════════════════
       NAVIGATION — copy from your existing state page nav
  ═════════════════════════════════════════════════ -->
  [EXISTING NAV COMPONENT]


  <!-- ════════════════════════════════════════════════
       SECTION 1: HERO
       H1 target: "[Origin State] to [Dest State] Car Shipping"
       Keep H1 exact — this is the primary keyword
  ═════════════════════════════════════════════════ -->
  <section class="hero-section bg-[#0a2540] py-16 px-6">
    <div class="max-w-5xl mx-auto">

      <!-- Breadcrumb -->
      <nav class="text-sm text-[#468de6] mb-6" aria-label="Breadcrumb">
        <a href="/" class="hover:text-white">Home</a>
        <span class="mx-2 text-gray-500">/</span>
        <a href="/locations/" class="hover:text-white">Locations</a>
        <span class="mx-2 text-gray-500">/</span>
        <a href="/[ORIGIN_SLUG]-car-shipping/" class="hover:text-white">[ORIGIN_STATE]</a>
        <span class="mx-2 text-gray-500">/</span>
        <span class="text-white">[ORIGIN_STATE] to [DEST_STATE]</span>
      </nav>

      <!-- Badge -->
      <div class="inline-block bg-[#635bff] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
        FMCSA Approved · No Upfront Deposit
      </div>

      <!-- H1 — DO NOT CHANGE THIS FORMAT -->
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
        [ORIGIN_STATE] to [DEST_STATE] Car Shipping
      </h1>

      <p class="text-lg text-[#c9d6e3] mb-8 max-w-2xl">
        Ship your vehicle from [ORIGIN_STATE] to [DEST_STATE] with a fully vetted, FMCSA-licensed carrier. 
        [DISTANCE_MI] miles of coverage, door-to-door delivery, and a locked-in price with no deposit required.
      </p>

      <!-- Quick Stats Bar -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div class="bg-white/10 rounded-xl p-4 text-center">
          <div class="text-2xl font-bold text-[#635bff]">[OPEN_LOW]–[OPEN_HIGH]</div>
          <div class="text-xs text-[#c9d6e3] mt-1">Open Transport</div>
        </div>
        <div class="bg-white/10 rounded-xl p-4 text-center">
          <div class="text-2xl font-bold text-[#635bff]">[TRANSIT_LOW]–[TRANSIT_HIGH] Days</div>
          <div class="text-xs text-[#c9d6e3] mt-1">Transit Time</div>
        </div>
        <div class="bg-white/10 rounded-xl p-4 text-center">
          <div class="text-2xl font-bold text-[#635bff]">[DISTANCE_MI] mi</div>
          <div class="text-xs text-[#c9d6e3] mt-1">Route Distance</div>
        </div>
        <div class="bg-white/10 rounded-xl p-4 text-center">
          <div class="text-2xl font-bold text-[#635bff]">$0</div>
          <div class="text-xs text-[#c9d6e3] mt-1">Upfront Deposit</div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="/cost-calculator/" class="bg-[#635bff] text-white font-bold px-8 py-4 rounded-xl text-center hover:bg-[#4f46e5] transition text-lg">
          Get My Locked-In Price →
        </a>
        <a href="tel:5715767711" class="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-center hover:bg-white hover:text-[#0a2540] transition text-lg">
          Call (571) 576-7711
        </a>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 2: ROUTE PRICING TABLE
       H2 keyword: "Cost to Ship a Car from [Origin] to [Dest]"
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-white">
    <div class="max-w-5xl mx-auto">

      <h2 class="text-3xl font-bold text-[#0a2540] mb-4">
        Cost to Ship a Car from [ORIGIN_STATE] to [DEST_STATE]
      </h2>
      <p class="text-gray-600 mb-8 max-w-3xl">
        The [ORIGIN_STATE] to [DEST_STATE] route covers approximately [DISTANCE_MI] miles, 
        primarily via [HIGHWAY]. It is one of the busiest car shipping corridors in the United States, 
        which keeps carrier availability high and prices competitive year-round.
      </p>

      <!-- Pricing Table -->
      <div class="overflow-x-auto mb-10">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#0a2540] text-white">
              <th class="text-left p-4 rounded-tl-xl">Route</th>
              <th class="text-left p-4">Distance</th>
              <th class="text-left p-4">Open Transport</th>
              <th class="text-left p-4">Enclosed Transport</th>
              <th class="text-left p-4 rounded-tr-xl">Transit Time</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-100 bg-[#f8fafc]">
              <td class="p-4 font-semibold text-[#0a2540]">[ORIGIN_CITY_1] to [DEST_CITY_1]</td>
              <td class="p-4 text-gray-600">~[DISTANCE_MI] mi</td>
              <td class="p-4 font-semibold text-[#635bff]">[OPEN_LOW] – [OPEN_HIGH]</td>
              <td class="p-4 text-gray-600">[ENCLOSED_LOW] – [ENCLOSED_HIGH]</td>
              <td class="p-4 text-gray-600">[TRANSIT_LOW]–[TRANSIT_HIGH] days</td>
            </tr>
            <tr class="border-b border-gray-100">
              <td class="p-4 font-semibold text-[#0a2540]">[ORIGIN_CITY_1] to [DEST_CITY_2]</td>
              <td class="p-4 text-gray-600">~[DISTANCE_MI] mi</td>
              <td class="p-4 font-semibold text-[#635bff]">[OPEN_LOW] – [OPEN_HIGH]</td>
              <td class="p-4 text-gray-600">[ENCLOSED_LOW] – [ENCLOSED_HIGH]</td>
              <td class="p-4 text-gray-600">[TRANSIT_LOW]–[TRANSIT_HIGH] days</td>
            </tr>
            <tr class="border-b border-gray-100 bg-[#f8fafc]">
              <td class="p-4 font-semibold text-[#0a2540]">[ORIGIN_CITY_2] to [DEST_CITY_1]</td>
              <td class="p-4 text-gray-600">~[DISTANCE_MI] mi</td>
              <td class="p-4 font-semibold text-[#635bff]">[OPEN_LOW] – [OPEN_HIGH]</td>
              <td class="p-4 text-gray-600">[ENCLOSED_LOW] – [ENCLOSED_HIGH]</td>
              <td class="p-4 text-gray-600">[TRANSIT_LOW]–[TRANSIT_HIGH] days</td>
            </tr>
            <tr class="border-b border-gray-100">
              <td class="p-4 font-semibold text-[#0a2540]">[ORIGIN_CITY_3] to [DEST_CITY_3]</td>
              <td class="p-4 text-gray-600">~[DISTANCE_MI] mi</td>
              <td class="p-4 font-semibold text-[#635bff]">[OPEN_LOW] – [OPEN_HIGH]</td>
              <td class="p-4 text-gray-600">[ENCLOSED_LOW] – [ENCLOSED_HIGH]</td>
              <td class="p-4 text-gray-600">[TRANSIT_LOW]–[TRANSIT_HIGH] days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-xs text-gray-400">
        * Prices reflect current market rates as of 2026 and vary based on vehicle size, pickup/delivery 
        location, seasonal demand, and fuel costs. Get an instant quote for your exact route.
      </p>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 3: WHAT AFFECTS YOUR PRICE
       H2 keyword: "What Affects [Origin] to [Dest] Car Shipping Costs"
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-[#f8fafc]">
    <div class="max-w-5xl mx-auto">

      <h2 class="text-3xl font-bold text-[#0a2540] mb-4">
        What Affects Your [ORIGIN_STATE] to [DEST_STATE] Shipping Cost
      </h2>
      <p class="text-gray-600 mb-10 max-w-3xl">
        Five factors determine the final price of your shipment on this route. 
        Understanding them helps you book at the right time and choose the right service.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="text-[#635bff] text-2xl mb-3">📍</div>
          <h3 class="font-bold text-[#0a2540] text-lg mb-2">Pickup & Delivery City</h3>
          <p class="text-gray-600 text-sm">
            Shipping from a major metro like [ORIGIN_CITY_1] costs less than a rural pickup. 
            Large cities have more carriers running the route, creating better pricing and faster pickup windows.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="text-[#635bff] text-2xl mb-3">🚗</div>
          <h3 class="font-bold text-[#0a2540] text-lg mb-2">Vehicle Size</h3>
          <p class="text-gray-600 text-sm">
            Standard sedans and coupes are the most affordable. SUVs, trucks, and vans take up more 
            trailer space and add 10–20% to the base rate. Oversized or modified vehicles may require 
            special equipment.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="text-[#635bff] text-2xl mb-3">🚚</div>
          <h3 class="font-bold text-[#0a2540] text-lg mb-2">Open vs. Enclosed Transport</h3>
          <p class="text-gray-600 text-sm">
            Open transport ([OPEN_LOW]–[OPEN_HIGH]) is the standard and most affordable method — 
            97% of vehicles are shipped this way. Enclosed transport ([ENCLOSED_LOW]–[ENCLOSED_HIGH]) 
            provides full weather protection for luxury, classic, or exotic vehicles.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="text-[#635bff] text-2xl mb-3">📅</div>
          <h3 class="font-bold text-[#0a2540] text-lg mb-2">Time of Year</h3>
          <p class="text-gray-600 text-sm">
            Summer (June–August) is peak season and prices rise 15–25%. Fall and early spring 
            offer the most competitive rates. Booking 1–2 weeks in advance always secures better pricing 
            than last-minute requests.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="text-[#635bff] text-2xl mb-3">⚡</div>
          <h3 class="font-bold text-[#0a2540] text-lg mb-2">Standard vs. Expedited</h3>
          <p class="text-gray-600 text-sm">
            Standard service includes a 1–5 day pickup window, which allows carriers to optimize routes 
            and reduce your cost. Expedited service guarantees pickup within 24–48 hours and typically 
            adds 20–40% to the rate.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="text-[#635bff] text-2xl mb-3">⛽</div>
          <h3 class="font-bold text-[#0a2540] text-lg mb-2">Fuel Prices</h3>
          <p class="text-gray-600 text-sm">
            Diesel prices directly affect carrier rates on long-haul routes like [ORIGIN_STATE] to 
            [DEST_STATE]. Our instant quote tool uses live market data so the price you see reflects 
            current fuel conditions — no surprise charges at delivery.
          </p>
        </div>

      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 4: HOW IT WORKS
       H2 keyword: "How to Ship a Car from [Origin] to [Dest]"
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-white">
    <div class="max-w-5xl mx-auto">

      <h2 class="text-3xl font-bold text-[#0a2540] mb-4">
        How to Ship a Car from [ORIGIN_STATE] to [DEST_STATE]
      </h2>
      <p class="text-gray-600 mb-12 max-w-3xl">
        Our process is built to be simple. No confusing steps, no hidden fees, no deposit required 
        until a carrier is assigned.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="text-center">
          <div class="w-16 h-16 bg-[#635bff] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
          <h3 class="font-bold text-[#0a2540] text-xl mb-3">Get Your Instant Quote</h3>
          <p class="text-gray-600 text-sm">
            Enter your pickup ZIP in [ORIGIN_STATE] and delivery ZIP in [DEST_STATE]. 
            Select your vehicle type and preferred transport method. 
            Get a locked-in price in under 30 seconds — no personal info required.
          </p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-[#635bff] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
          <h3 class="font-bold text-[#0a2540] text-xl mb-3">Carrier Assignment</h3>
          <p class="text-gray-600 text-sm">
            Once you confirm your booking, our dispatch team matches your shipment to a 
            vetted, FMCSA-licensed carrier running the [ORIGIN_STATE]–[DEST_STATE] corridor. 
            You pay nothing until your carrier is assigned.
          </p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-[#635bff] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
          <h3 class="font-bold text-[#0a2540] text-xl mb-3">Pickup, Transport & Delivery</h3>
          <p class="text-gray-600 text-sm">
            Your carrier arrives at your [ORIGIN_STATE] location, completes a Bill of Lading inspection, 
            and loads your vehicle. You can contact your driver directly for updates. 
            Delivery to your [DEST_STATE] door in [TRANSIT_LOW]–[TRANSIT_HIGH] days.
          </p>
        </div>

      </div>

      <div class="text-center mt-12">
        <a href="/cost-calculator/" class="bg-[#635bff] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#4f46e5] transition text-lg inline-block">
          Start My [ORIGIN_STATE] to [DEST_STATE] Quote →
        </a>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 5: OPEN VS ENCLOSED
       H2 keyword: "Open vs Enclosed Transport: [Origin] to [Dest]"
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-[#f8fafc]">
    <div class="max-w-5xl mx-auto">

      <h2 class="text-3xl font-bold text-[#0a2540] mb-10">
        Open vs. Enclosed Transport: Which Is Right for Your [ORIGIN_STATE] to [DEST_STATE] Shipment?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Open Transport -->
        <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-[#e8f4ff] text-[#635bff] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          </div>
          <h3 class="text-2xl font-bold text-[#0a2540] mb-2">Open Transport</h3>
          <div class="text-3xl font-extrabold text-[#635bff] mb-4">[OPEN_LOW] – [OPEN_HIGH]</div>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Most affordable option for standard vehicles</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Highest carrier availability on [ORIGIN_STATE]–[DEST_STATE] route</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Faster pickup windows — typically 1–3 days</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Safe and reliable — 97% of all vehicles shipped this way</li>
            <li class="flex items-start gap-2"><span class="text-gray-400 font-bold mt-0.5">–</span> Vehicle exposed to weather and road elements</li>
          </ul>
          <p class="text-xs text-gray-400 mt-4">
            Best for: Standard sedans, SUVs, trucks, and any vehicle under $80,000 in value.
          </p>
        </div>

        <!-- Enclosed Transport -->
        <div class="bg-white rounded-2xl p-8 border-2 border-[#635bff] shadow-sm">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-[#635bff] text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM PROTECTION</span>
          </div>
          <h3 class="text-2xl font-bold text-[#0a2540] mb-2">Enclosed Transport</h3>
          <div class="text-3xl font-extrabold text-[#635bff] mb-4">[ENCLOSED_LOW] – [ENCLOSED_HIGH]</div>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Full protection from weather, dust, and road debris</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Coverage up to $500,000 per vehicle</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Soft-tie restraints protect suspension and paintwork</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">✓</span> Ideal for luxury, exotic, classic, and modified vehicles</li>
            <li class="flex items-start gap-2"><span class="text-gray-400 font-bold mt-0.5">–</span> Costs 30–40% more than open transport</li>
          </ul>
          <p class="text-xs text-gray-400 mt-4">
            Best for: Luxury cars, classic vehicles, exotics, and high-value vehicles over $80,000.
          </p>
        </div>

      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 6: WHY NEON
       Trust signals specific to this route
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-[#0a2540]">
    <div class="max-w-5xl mx-auto">

      <h2 class="text-3xl font-bold text-white mb-4">
        Why Choose Neon for [ORIGIN_STATE] to [DEST_STATE] Car Shipping?
      </h2>
      <p class="text-[#c9d6e3] mb-10 max-w-3xl">
        Hundreds of brokers serve this route. Here's what makes Neon different.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div class="flex gap-4">
          <div class="text-[#635bff] text-2xl flex-shrink-0">🔒</div>
          <div>
            <h3 class="font-bold text-white mb-1">No Upfront Deposit</h3>
            <p class="text-[#c9d6e3] text-sm">You pay nothing until a carrier is assigned. Most competitors charge $100–$250 just to book. We don't.</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="text-[#635bff] text-2xl flex-shrink-0">💬</div>
          <div>
            <h3 class="font-bold text-white mb-1">Direct Driver Contact</h3>
            <p class="text-[#c9d6e3] text-sm">You get your assigned driver's contact information. Call or text them directly for real-time updates — not a call center.</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="text-[#635bff] text-2xl flex-shrink-0">✅</div>
          <div>
            <h3 class="font-bold text-white mb-1">FMCSA Licensed & Verified</h3>
            <p class="text-[#c9d6e3] text-sm">DOT: 4355879 · MC: 1703787. Every carrier in our network is verified against FMCSA records before dispatch.</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="text-[#635bff] text-2xl flex-shrink-0">🛡️</div>
          <div>
            <h3 class="font-bold text-white mb-1">Full Cargo Insurance</h3>
            <p class="text-[#c9d6e3] text-sm">Open transport up to $250K. Enclosed up to $500K. You receive a certificate of insurance before your vehicle moves.</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="text-[#635bff] text-2xl flex-shrink-0">💰</div>
          <div>
            <h3 class="font-bold text-white mb-1">Price Lock Guarantee</h3>
            <p class="text-[#c9d6e3] text-sm">The quote you receive is the price you pay. No fuel surcharges added at delivery. No surprise fees.</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="text-[#635bff] text-2xl flex-shrink-0">🌐</div>
          <div>
            <h3 class="font-bold text-white mb-1">10,000+ Vetted Carriers</h3>
            <p class="text-[#c9d6e3] text-sm">Our nationwide carrier network means faster pickup windows and more route options on high-demand corridors like [ORIGIN_STATE]–[DEST_STATE].</p>
          </div>
        </div>

      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 7: CUSTOMER REVIEWS
       Use route-specific review if available, otherwise generic
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-white">
    <div class="max-w-5xl mx-auto">

      <h2 class="text-3xl font-bold text-[#0a2540] mb-10">
        What Customers Say About [ORIGIN_STATE] to [DEST_STATE] Shipping
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">
          <div class="text-[#f59e0b] text-lg mb-3">★★★★★</div>
          <p class="text-gray-700 text-sm mb-4">
            "Shipped my car from [ORIGIN_CITY_1] to [DEST_CITY_1] without a single issue. 
            The driver called ahead of time, arrived on schedule, and delivered in perfect condition. 
            No deposit required sealed the deal for me."
          </p>
          <div class="text-xs text-gray-500">
            <span class="font-semibold text-[#0a2540]">— Marcus T.</span><br />
            Verified Customer · Google Reviews
          </div>
        </div>

        <div class="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">
          <div class="text-[#f59e0b] text-lg mb-3">★★★★★</div>
          <p class="text-gray-700 text-sm mb-4">
            "I was nervous about shipping my car cross-country for the first time. 
            Neon made it completely painless. The price they quoted was exactly what I paid — 
            nothing added at delivery. Vehicle arrived in [TRANSIT_LOW] days."
          </p>
          <div class="text-xs text-gray-500">
            <span class="font-semibold text-[#0a2540]">— Jennifer R.</span><br />
            Verified Customer · Trustpilot
          </div>
        </div>

        <div class="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">
          <div class="text-[#f59e0b] text-lg mb-3">★★★★★</div>
          <p class="text-gray-700 text-sm mb-4">
            "Used enclosed transport for my classic car from [ORIGIN_STATE] to [DEST_STATE]. 
            Zero scratches, delivered exactly as promised. Being able to text the driver directly 
            for updates made all the difference."
          </p>
          <div class="text-xs text-gray-500">
            <span class="font-semibold text-[#0a2540]">— David K.</span><br />
            Verified Customer · BBB
          </div>
        </div>

      </div>

      <!-- Aggregate Rating Display -->
      <div class="text-center mt-8">
        <div class="text-[#f59e0b] text-2xl mb-1">★★★★★</div>
        <p class="text-sm text-gray-500">4.9 out of 5 based on 1,247 verified reviews across Google, Trustpilot, and BBB</p>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 8: FAQ
       H2 keyword: "[Origin] to [Dest] Car Shipping FAQs"
       These must match the FAQPage schema above exactly
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-[#f8fafc]">
    <div class="max-w-3xl mx-auto">

      <h2 class="text-3xl font-bold text-[#0a2540] mb-10">
        [ORIGIN_STATE] to [DEST_STATE] Car Shipping FAQs
      </h2>

      <div class="space-y-4">

        <details class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group">
          <summary class="font-bold text-[#0a2540] cursor-pointer flex justify-between items-center">
            How much does it cost to ship a car from [ORIGIN_STATE] to [DEST_STATE]?
            <span class="text-[#635bff] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            Shipping a car from [ORIGIN_STATE] to [DEST_STATE] typically costs between 
            <strong>[OPEN_LOW] and [OPEN_HIGH]</strong> for open transport, and 
            <strong>[ENCLOSED_LOW] to [ENCLOSED_HIGH]</strong> for enclosed transport. 
            The final price depends on your specific pickup and delivery cities, your vehicle size, 
            transport type, and the time of year. Get an instant quote for your exact route above.
          </p>
        </details>

        <details class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group">
          <summary class="font-bold text-[#0a2540] cursor-pointer flex justify-between items-center">
            How long does it take to ship a car from [ORIGIN_STATE] to [DEST_STATE]?
            <span class="text-[#635bff] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            Transit time is typically <strong>[TRANSIT_LOW] to [TRANSIT_HIGH] days</strong> after pickup. 
            Factor in an additional 1–5 days for the carrier assignment and pickup window. 
            Total time from booking to vehicle delivery is usually [TRANSIT_LOW] to [TRANSIT_HIGH] days 
            for standard service. Expedited shipping can reduce pickup time to 24–48 hours.
          </p>
        </details>

        <details class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group">
          <summary class="font-bold text-[#0a2540] cursor-pointer flex justify-between items-center">
            Do I need to pay a deposit to ship my car?
            <span class="text-[#635bff] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            <strong>No deposit required.</strong> Neon Auto Transport does not charge any upfront deposit. 
            You only pay once a carrier is assigned to your shipment. 
            The remaining balance is due at delivery — by cash or certified check to the driver, 
            or paid in full by card when the carrier is confirmed.
          </p>
        </details>

        <details class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group">
          <summary class="font-bold text-[#0a2540] cursor-pointer flex justify-between items-center">
            Is my car insured during transport?
            <span class="text-[#635bff] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            Yes. Every carrier in our network carries active FMCSA-required cargo insurance. 
            Open transport provides coverage up to <strong>$250,000</strong>. 
            Enclosed transport provides coverage up to <strong>$500,000</strong>. 
            You receive a certificate of insurance before your vehicle is dispatched.
          </p>
        </details>

        <details class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group">
          <summary class="font-bold text-[#0a2540] cursor-pointer flex justify-between items-center">
            What is the best time of year to ship a car on this route?
            <span class="text-[#635bff] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            Fall (September–November) and early spring (February–April) offer the most competitive rates. 
            Summer is peak season and prices typically increase 15–25% due to high demand. 
            Booking 1–2 weeks in advance secures better pricing regardless of season.
          </p>
        </details>

        <details class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group">
          <summary class="font-bold text-[#0a2540] cursor-pointer flex justify-between items-center">
            Can I ship personal items inside my car?
            <span class="text-[#635bff] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            Most carriers allow up to <strong>100 lbs</strong> of personal items stored in the trunk 
            below the window line. Items must be secured and carriers are not liable for personal belongings. 
            Do not leave valuables, electronics, documents, or fragile items in the vehicle.
          </p>
        </details>

        <details class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group">
          <summary class="font-bold text-[#0a2540] cursor-pointer flex justify-between items-center">
            How do I prepare my car for shipping?
            <span class="text-[#635bff] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            Before your carrier arrives: wash the exterior and document any pre-existing damage with photos, 
            remove personal items and toll transponders, keep the gas tank at 1/4 full, disable alarm systems, 
            ensure the battery is charged, and have your ID and vehicle registration available at pickup. 
            Note any leaks or mechanical issues that could affect loading.
          </p>
        </details>

      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 9: INTERNAL LINKING HUB
       Critical for SEO — links to related pages
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-white">
    <div class="max-w-5xl mx-auto">

      <h2 class="text-2xl font-bold text-[#0a2540] mb-8">Related Auto Transport Routes & Resources</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Origin State Links -->
        <div>
          <h3 class="font-bold text-[#635bff] text-sm uppercase tracking-wider mb-4">
            More [ORIGIN_STATE] Routes
          </h3>
          <ul class="space-y-2 text-sm">
            <!-- These links must be real pages that exist -->
            <li><a href="/[ORIGIN_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540] font-semibold">[ORIGIN_STATE] Car Shipping Hub</a></li>
            <li><a href="/[ORIGIN_SLUG]-to-[DEST2_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">[ORIGIN_STATE] to [DEST2_STATE]</a></li>
            <li><a href="/[ORIGIN_SLUG]-to-[DEST3_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">[ORIGIN_STATE] to [DEST3_STATE]</a></li>
            <li><a href="/[ORIGIN_SLUG]-to-[DEST4_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">[ORIGIN_STATE] to [DEST4_STATE]</a></li>
          </ul>
        </div>

        <!-- Destination State Links -->
        <div>
          <h3 class="font-bold text-[#635bff] text-sm uppercase tracking-wider mb-4">
            More [DEST_STATE] Routes
          </h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/[DEST_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540] font-semibold">[DEST_STATE] Car Shipping Hub</a></li>
            <li><a href="/[DEST_SLUG]-to-[ORIGIN_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">[DEST_STATE] to [ORIGIN_STATE] ↩</a></li>
            <li><a href="/[DEST2_SLUG]-to-[DEST_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">[DEST2_STATE] to [DEST_STATE]</a></li>
            <li><a href="/[DEST3_SLUG]-to-[DEST_SLUG]-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">[DEST3_STATE] to [DEST_STATE]</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="font-bold text-[#635bff] text-sm uppercase tracking-wider mb-4">
            Resources
          </h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/services/open-auto-transport/" class="text-[#468de6] hover:text-[#0a2540]">Open Transport Guide</a></li>
            <li><a href="/services/enclosed-auto-transport/" class="text-[#468de6] hover:text-[#0a2540]">Enclosed Transport Guide</a></li>
            <li><a href="/services/expedited-auto-transport/" class="text-[#468de6] hover:text-[#0a2540]">Expedited Shipping</a></li>
            <li><a href="/faqs/" class="text-[#468de6] hover:text-[#0a2540]">Auto Transport FAQs</a></li>
            <li><a href="/cost-calculator/" class="text-[#468de6] hover:text-[#0a2540]">Shipping Cost Calculator</a></li>
          </ul>
        </div>

      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════
       SECTION 10: FINAL CTA
  ═════════════════════════════════════════════════ -->
  <section class="py-16 px-6 bg-[#635bff]">
    <div class="max-w-3xl mx-auto text-center">

      <h2 class="text-3xl font-bold text-white mb-4">
        Ready to Ship Your Car from [ORIGIN_STATE] to [DEST_STATE]?
      </h2>
      <p class="text-white/80 mb-8 text-lg">
        Get a locked-in price in under 30 seconds. No deposit. No hidden fees. 
        FMCSA licensed and fully insured.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/cost-calculator/" class="bg-white text-[#635bff] font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition text-lg">
          Get My Free Quote →
        </a>
        <a href="tel:5715767711" class="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:te
<truncated 5382 bytes>

NOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need.
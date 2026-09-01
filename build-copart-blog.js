import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Read base template
const templatePath = path.join(__dirname, 'blog', 'true-cost-of-car-shipping-2026.html');
let html = fs.readFileSync(templatePath, 'utf8');

// ============================================================
// 1. HEAD SEO TAGS & STRUCTURED MULTI-ENTITY SCHEMA
// ============================================================

// Title
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>How to Ship a Car from Copart Richmond VA (2026 Guide) | Neon Auto Transport</title>'
);

// Meta description
html = html.replace(
  /<meta name="description" content=".*?">/,
  '<meta name="description" content="Step-by-step guide to shipping a car from Copart Richmond VA. Learn about yard locations, storage fees, costs, and how to book fast pickup from Sandston or Charles City.">'
);

// Canonical
html = html.replace(
  /<link rel="canonical" href=".*?"\s*\/?>/,
  '<link rel="canonical" href="https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/">'
);

// Alternate markdown link
if (html.includes('<link rel="alternate" type="text/markdown"')) {
  html = html.replace(
    /<link rel="alternate" type="text\/markdown" href=".*?"\s*\/?>/,
    '<link rel="alternate" type="text/markdown" href="https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va.md">'
  );
} else {
  html = html.replace(
    '</head>',
    '  <link rel="alternate" type="text/markdown" href="https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va.md">\n</head>'
  );
}

// Open Graph
html = html.replace(
  /<meta property="og:title" content=".*?">/,
  '<meta property="og:title" content="How to Ship a Car from Copart Richmond VA (2026 Guide)">'
);

html = html.replace(
  /<meta property="og:description" content=".*?">/,
  '<meta property="og:description" content="Step-by-step guide to shipping a car from Copart Richmond VA. Learn about yard locations, storage fees, costs, and how to book fast pickup from Sandston or Charles City.">'
);

html = html.replace(
  /<meta property="og:url" content=".*?">/,
  '<meta property="og:url" content="https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/">'
);

// Twitter
html = html.replace(
  /<meta name="twitter:title" content=".*?">/,
  '<meta name="twitter:title" content="How to Ship a Car from Copart Richmond VA (2026 Guide)">'
);

html = html.replace(
  /<meta name="twitter:description" content=".*?">/,
  '<meta name="twitter:description" content="Step-by-step guide to shipping a car from Copart Richmond VA. Learn about yard locations, storage fees, costs, and how to book fast pickup from Sandston or Charles City.">'
);

// Add custom CSS for sleek FAQ accordion and callout styling
const customCss = `
  <style>
    /* Clean Sleek FAQ Details Reset */
    details.faq-item summary::-webkit-details-marker {
      display: none !important;
    }
    details.faq-item summary {
      list-style: none !important;
    }
    details.faq-item[open] summary .faq-chevron {
      transform: rotate(180deg);
      background-color: #635bff;
      color: #ffffff;
      border-color: #635bff;
    }
    details.faq-item summary:hover .faq-chevron {
      border-color: #635bff;
      color: #635bff;
    }
  </style>
`;

html = html.replace('</head>', customCss + '\n</head>');

// JSON-LD Multi-Entity Schema (BlogPosting + FAQPage + BreadcrumbList)
const newSchema = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/"
      },
      "headline": "How to Ship a Car from Copart Richmond VA: Complete 2026 Guide",
      "name": "How to Ship a Car from Copart Richmond VA: Complete 2026 Guide",
      "url": "https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/",
      "datePublished": "2026-09-01T08:00:00+00:00",
      "dateModified": "2026-09-01T14:30:00+00:00",
      "inLanguage": "en-US",
      "wordCount": 1350,
      "description": "Step-by-step guide to shipping a car from Copart Richmond VA. Learn about yard locations, storage fees, costs, and how to book fast pickup from Sandston or Charles City.",
      "articleSection": "Auto Auction Shipping",
      "author": {
        "@type": "Organization",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neonautotransport.com/logo.png"
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://neonautotransport.com/images/open-auto-transport-hero.jpg",
        "width": 1200,
        "height": 675
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I ship a car from Copart Richmond VA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pay your invoice in full, download your Gate Pass PIN from your Copart account, then book a Copart-approved carrier with your lot number and gate PIN. The carrier schedules a pickup appointment at the Sandston or Charles City yard and delivers your vehicle door-to-door."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most shipments from Copart Richmond range from $250 to $1,500+, depending on distance and vehicle condition. Short regional moves (DC, Northern VA) often fall between $250–$400, while long-distance runs to Florida or Texas can reach $950–$1,800+."
          }
        },
        {
          "@type": "Question",
          "name": "Can I ship a non-running car from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most Copart vehicles are non-running or damaged. Carriers use winches, flatbeds, or yard forklifts to load inoperable cars from Copart Richmond and transport them safely to your location."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can a carrier pick up from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neon Auto Transport typically arranges same-day or next-day dispatch once your payment has cleared and your gate pass is issued. Faster pickup helps you avoid daily Copart storage fees."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be present when the car is picked up from Copart?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. As long as your carrier has the correct Gate Pass PIN, lot number, and authorization, they can pick up the vehicle without you being on-site. You’ll receive updates from the carrier during transit."
          }
        }
      ]
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
          "name": "Blog",
          "item": "https://neonautotransport.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How to Ship a Car from Copart Richmond VA",
          "item": "https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/"
        }
      ]
    }
  ]
}
</script>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
html = html.replace('</head>', newSchema + '\n</head>');

// ============================================================
// 2. MAIN BLOG CONTENT
// ============================================================
const mainContent = `
  <main class="bg-[#f8fafc] pb-24 relative pt-32 lg:pt-36">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
      
      <!-- Top Navigation & Meta Header -->
      <div class="mb-10">
        <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 flex-wrap">
          <a href="https://neonautotransport.com/" class="hover:text-[#635bff] transition-colors">Home</a>
          <span class="text-slate-300">/</span>
          <a href="https://neonautotransport.com/blog/" class="hover:text-[#635bff] transition-colors">Blog</a>
          <span class="text-slate-300">/</span>
          <span class="text-slate-900 font-bold">Copart Richmond Guide</span>
        </nav>

        <span class="inline-block px-3.5 py-1 rounded-full bg-[#e0e7ff] text-[#4338ca] text-xs font-bold uppercase tracking-wider mb-4">
          Auction Logistics &bull; 2026 Guide
        </span>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 text-[#0a2540] tracking-tight">
          How to Ship a Car from Copart Richmond VA: Complete 2026 Guide
        </h1>

        <div class="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#425466] font-medium border-b border-slate-200 pb-8">
          <span class="font-bold text-[#0a2540]">By Neon Auto Transport</span>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>September 1, 2026</span>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>6 min read</span>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <span class="text-[#16a34a] font-semibold">✓ Verified for 2026 Auction Protocols</span>
        </div>
      </div>

      <!-- Article Body -->
      <article class="prose prose-lg max-w-none text-[#425466]">
        
        <p class="text-lg sm:text-xl text-[#0a2540] font-medium leading-relaxed mb-8">
          Winning a salvage or clean-title vehicle at <strong>Copart Richmond</strong> is exciting, but arranging transport quickly is critical to avoid hefty yard storage penalties. Whether you bought a repairable vehicle for personal use, inventory for your dealership, or an export unit, this comprehensive guide explains how to release and ship your vehicle from Copart’s Sandston and Charles City facilities directly to your destination.
        </p>

        <!-- 2. AEO / AI Overview Quick Answer Box -->
        <div class="bg-white border border-slate-200 border-l-4 border-l-[#635bff] rounded-2xl p-6 sm:p-8 my-8 shadow-sm not-prose">
          <h2 class="text-lg sm:text-xl font-bold text-[#0a2540] mb-3 flex items-center gap-2">
            <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Quick Answer: How to Ship a Car from Copart Richmond VA
          </h2>
          <ul class="space-y-2.5 text-sm sm:text-base text-slate-700 font-medium">
            <li class="flex items-start gap-2">
              <span class="text-[#635bff] font-black shrink-0">1.</span>
              <span><strong>Pay your invoice in full</strong> and wait for funds to clear (wire transfer, ePay, or debit).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#635bff] font-black shrink-0">2.</span>
              <span><strong>Download your Gate Pass PIN</strong> from your Copart Member account.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#635bff] font-black shrink-0">3.</span>
              <span><strong>Book a Copart-approved carrier</strong> (e.g., Neon Auto Transport) with your Lot # and Gate PIN.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#635bff] font-black shrink-0">4.</span>
              <span>The carrier schedules a pickup appointment in the <strong>Copart Transportation App</strong> and loads your vehicle at the Sandston or Charles City yard.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#635bff] font-black shrink-0">5.</span>
              <span>Your car is delivered <strong>door-to-door</strong> to your home, auto repair shop, dealership, or maritime port.</span>
            </li>
          </ul>
        </div>

        <!-- Section 1 -->
        <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mt-12 mb-4">
          Understand the Two Copart Richmond Yard Locations
        </h2>
        <p class="leading-relaxed mb-4">
          Copart operates two distinct auction facilities in the greater Richmond, Virginia metropolitan area. Before scheduling dispatch, always inspect your buyer sales invoice to confirm the exact facility holding your vehicle:
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span class="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase mb-3">Primary Yard #42</span>
            <h3 class="font-bold text-lg text-[#0a2540] mb-2">Copart – Richmond (Sandston)</h3>
            <p class="text-sm text-slate-600 mb-2"><strong>Address:</strong> 5701 Whiteside Rd, Sandston, VA 23150</p>
            <p class="text-sm text-slate-600 mb-2"><strong>Direct Phone:</strong> (804) 328-1023</p>
            <p class="text-xs text-slate-500"><strong>Hours:</strong> Mon–Fri, 8:00 AM – 5:00 PM EST (Gate cutoff at 4:30 PM).</p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span class="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase mb-3">East Yard #134</span>
            <h3 class="font-bold text-lg text-[#0a2540] mb-2">Copart – Richmond East (Charles City)</h3>
            <p class="text-sm text-slate-600 mb-2"><strong>Address:</strong> 6300 Chambers Road, Charles City, VA 23030</p>
            <p class="text-sm text-slate-600 mb-2"><strong>Direct Phone:</strong> (804) 829-9160</p>
            <p class="text-xs text-slate-500"><strong>Hours:</strong> Mon–Fri, 8:00 AM – 5:00 PM EST (Heavy loaders on site).</p>
          </div>
        </div>

        <p class="leading-relaxed mb-4">
          Most Copart Richmond yards operate <strong>Monday through Friday, 8:00 AM to 5:00 PM EST</strong>; gate check-in closes promptly at 4:30 PM. Both yards handle salvage, insurance write-offs, and clean-title fleet vehicles; your invoice will clearly display the designated yard number.
        </p>

        <!-- Section 2 -->
        <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mt-12 mb-4">
          Step-by-Step Pickup Process
        </h2>
        <p class="leading-relaxed mb-4">
          Auction pickups require stricter coordination than standard private vehicle shipping. Follow this 5-step release sequence:
        </p>

        <ol class="list-decimal pl-6 space-y-4 my-6">
          <li>
            <strong>Complete Invoice Payment:</strong> Pay your vehicle invoice in full via secure wire transfer, ePay, or debit. Copart will not release any lot or generate release credentials until funds have 100% cleared.
          </li>
          <li>
            <strong>Generate Your Gate Pass PIN:</strong> In your Copart Member portal, navigate to your won lots and download the official <strong>Gate Pass / Buyer Release PIN</strong>. Confirm the yard address.
          </li>
          <li>
            <strong>Book an Auction Carrier:</strong> Partner with a specialized transport broker like Neon Auto Transport. Provide your Lot #, 6-digit Gate PIN, vehicle operable status, and delivery address.
          </li>
        </ol>

        <!-- In-Content CTA Box after Step 3 -->
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm my-8 not-prose flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#635bff] block mb-1">Instant Auction Dispatch</span>
            <h3 class="text-lg sm:text-xl font-bold text-[#0a2540]">Need a carrier now for Copart Richmond?</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1">Get an instant quote for Sandston or Charles City pickup in under 60 seconds.</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <a href="/cost-calculator/" style="background-color: #635bff; color: #ffffff; font-weight: 800; text-decoration: none;" class="px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#534be8] transition shadow-sm whitespace-nowrap">
              Get Instant Quote &rarr;
            </a>
            <a href="tel:5715767711" style="background-color: #f0f5fa; color: #0a2540; font-weight: 700; text-decoration: none;" class="px-5 py-3 rounded-xl text-xs hover:bg-[#0a2540] hover:text-white transition whitespace-nowrap">
              (571) 576-7711
            </a>
          </div>
        </div>

        <ol start="4" class="list-decimal pl-6 space-y-4 my-6">
          <li>
            <strong>Copart Transportation App Scheduling:</strong> Your assigned carrier books an exact gate arrival window via the Copart Transportation App to prevent long yard queuing.
          </li>
          <li>
            <strong>Gate Check-In, Inspection &amp; Delivery:</strong> The driver presents the Gate PIN, conducts a Bill of Lading (BOL) inspection, safely loads the car (ramp, winch, or forklift), and transports it to your destination.
          </li>
        </ol>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 not-prose">
          <h4 class="font-bold text-sm text-[#0a2540] mb-2 uppercase tracking-wide">Documents the Carrier Needs for Gate Release:</h4>
          <ul class="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-5">
            <li>Gate Pass PIN (6-digit alphanumeric code)</li>
            <li>Copart Lot Number</li>
            <li>Buyer Name and Account Number (as stated on invoice)</li>
            <li>Carrier MC/USDOT numbers entered into Copart’s system</li>
          </ul>
          <p class="text-xs text-slate-500 mt-3">Your carrier must be registered in Copart’s system with valid MC numbers and active cargo insurance; Neon Auto Transport handles this verification and registration for you.</p>
        </div>

        <!-- Section 3 -->
        <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mt-12 mb-4">
          How Copart Storage Fees Work
        </h2>
        <p class="leading-relaxed mb-4">
          Copart grants a limited free storage window—typically <strong>2 to 3 business days</strong> following the sale date (depending on your buyer membership tier). Once this grace period expires, daily storage charges accumulate rapidly at <strong>$30 to $50+ per day</strong>.
        </p>

        <div class="bg-[#fef3c7] p-6 rounded-2xl border-l-4 border-[#f59e0b] my-6 text-[#78350f] not-prose">
          <p class="text-sm font-semibold mb-1"><strong>Concrete Storage Fee Example:</strong></p>
          <p class="text-xs sm:text-sm leading-relaxed">
            If your free storage window ends on Thursday at 5:00 PM and your carrier arrives for pickup on Monday morning, you could owe <strong>3 to 4 days of storage charges ($120–$200+)</strong> plus weekend facility surcharges. Booking dispatch within 24 hours of payment ensures your carrier is scheduled well before fees trigger.
          </p>
        </div>

        <p class="leading-relaxed mb-4">
          To learn more about optimizing transport timing, explore our guide on <a href="/copart-richmond-va-car-shipping/" class="text-[#635bff] font-bold hover:underline">how to avoid Copart storage fees</a> through dedicated broker dispatch.
        </p>

        <!-- Section 4 -->
        <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mt-12 mb-4">
          Shipping Inoperable &amp; Damaged Vehicles
        </h2>
        <p class="leading-relaxed mb-4">
          Over 60% of inventory sold at Copart Richmond consists of non-running, salvage, or collision-damaged units. Vehicle condition dictates the required carrier equipment:
        </p>

        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Runs &amp; Drives:</strong> Operable vehicles that steer, brake, and drive under their own power are loaded onto standard multi-car <a href="/services/open-auto-transport/" class="text-[#635bff] font-bold hover:underline">open auto transport</a> carriers using steel ramps.</li>
          <li><strong>Rolls &amp; Steers (Inoperable):</strong> Vehicles with mechanical or electrical faults whose tires hold air and steering functions. These require carriers equipped with an electric winch.</li>
          <li><strong>Severe Collision Damage / Missing Wheels:</strong> Immobile salvage requiring Copart heavy yard forklifts to load onto dedicated flatbeds.</li>
        </ul>

        <p class="leading-relaxed mb-4">
          <em>Cost Impact:</em> Non-running vehicles typically cost <strong>$100 to $300 more to ship</strong> than operable cars due to winch labor, specialized equipment, and extended yard loading time. When <a href="/services/auto-auction-shipping/" class="text-[#635bff] font-bold hover:underline">shipping salvage vehicles</a>, always declare the exact operable status upfront so the carrier arrives properly equipped.
        </p>

        <!-- Section 5 -->
        <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mt-12 mb-4">
          What Does Copart Richmond Car Shipping Cost?
        </h2>
        <p class="leading-relaxed mb-4">
          Auto transport pricing from Copart Richmond depends on total mileage, vehicle size, operable status, and trailer type (<a href="/services/open-auto-transport/" class="text-[#635bff] font-bold hover:underline">open</a> vs. <a href="/services/enclosed-auto-transport/" class="text-[#635bff] font-bold hover:underline">enclosed</a>). Below are typical market rate estimates:
        </p>

        <!-- Pricing Table -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6 my-6 shadow-sm not-prose">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-slate-100 text-[#0a2540] border-b border-slate-200">
                  <th class="p-3.5 font-bold">Delivery Destination</th>
                  <th class="p-3.5 font-bold">Distance</th>
                  <th class="p-3.5 font-bold">Running (Open)</th>
                  <th class="p-3.5 font-bold">Inoperable (Winch)</th>
                  <th class="p-3.5 font-bold">Transit Time</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr class="hover:bg-slate-50">
                  <td class="p-3.5 font-semibold text-slate-900">Washington DC / Northern VA</td>
                  <td class="p-3.5 text-slate-500">~100 mi</td>
                  <td class="p-3.5 font-bold text-slate-900">$250 – $400</td>
                  <td class="p-3.5 font-bold text-[#635bff]">$350 – $550</td>
                  <td class="p-3.5">1 Day</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3.5 font-semibold text-slate-900">Philadelphia, PA / New Jersey</td>
                  <td class="p-3.5 text-slate-500">~250 mi</td>
                  <td class="p-3.5 font-bold text-slate-900">$450 – $650</td>
                  <td class="p-3.5 font-bold text-[#635bff]">$600 – $850</td>
                  <td class="p-3.5">1–2 Days</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3.5 font-semibold text-slate-900">New York / New England</td>
                  <td class="p-3.5 text-slate-500">~350–500 mi</td>
                  <td class="p-3.5 font-bold text-slate-900">$550 – $800</td>
                  <td class="p-3.5 font-bold text-[#635bff]">$750 – $1,050</td>
                  <td class="p-3.5">2–3 Days</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3.5 font-semibold text-slate-900">Atlanta, GA / Southeast</td>
                  <td class="p-3.5 text-slate-500">~530 mi</td>
                  <td class="p-3.5 font-bold text-slate-900">$600 – $850</td>
                  <td class="p-3.5 font-bold text-[#635bff]">$800 – $1,100</td>
                  <td class="p-3.5">2–3 Days</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3.5 font-semibold text-slate-900">Miami / Orlando, FL</td>
                  <td class="p-3.5 text-slate-500">~850–950 mi</td>
                  <td class="p-3.5 font-bold text-slate-900">$750 – $1,100</td>
                  <td class="p-3.5 font-bold text-[#635bff]">$950 – $1,400</td>
                  <td class="p-3.5">3–4 Days</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3.5 font-semibold text-slate-900">Dallas / Houston, TX</td>
                  <td class="p-3.5 text-slate-500">~1,300 mi</td>
                  <td class="p-3.5 font-bold text-slate-900">$950 – $1,350</td>
                  <td class="p-3.5 font-bold text-[#635bff]">$1,250 – $1,750</td>
                  <td class="p-3.5">4–6 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 mt-4">
            <p class="text-xs text-slate-500">Copart adds a standard $50–$75 gate/loading fee billed directly to your buyer account.</p>
            <a href="/cost-calculator/" style="background-color: #ffc72c; color: #0a2540; font-weight: 900; text-decoration: none;" class="px-5 py-2.5 text-xs rounded-xl hover:bg-[#e0b020] transition shadow-sm whitespace-nowrap">
              Calculate Exact Route Rate &rarr;
            </a>
          </div>
        </div>

        <p class="leading-relaxed mb-4">
          For full rate breakdowns across all 50 states, visit our dedicated <a href="/copart-richmond-va-car-shipping/" class="text-[#635bff] font-bold hover:underline">Copart Richmond car shipping service</a> hub or check our general <a href="/car-shipping-cost/" class="text-[#635bff] font-bold hover:underline">car shipping cost guide</a>.
        </p>

        <!-- Section 6: Richmond Specific Tips Callout -->
        <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mt-12 mb-4">
          Richmond-Specific Pickup Tips
        </h2>
        
        <div class="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 my-6 not-prose">
          <ul class="space-y-3 text-sm text-slate-700 font-medium">
            <li class="flex items-start gap-2.5">
              <span class="text-[#635bff] font-bold">📍</span>
              <span><strong>Confirm Your Specific Yard:</strong> Always verify whether your car is at Sandston (5701 Whiteside Rd) or Charles City (6300 Chambers Road) before booking to avoid driver rerouting fees.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-[#635bff] font-bold">⏰</span>
              <span><strong>Target Weekday Morning Pickups:</strong> Plan pickup appointments on weekday mornings when yard congestion is lowest and forklift operators are most accessible.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-[#635bff] font-bold">🚢</span>
              <span><strong>Port Delivery for Exporters:</strong> If you are exporting, notify your broker immediately so they can assign a TWIC-card carrier for direct port delivery to Baltimore, Norfolk, or Savannah.</span>
            </li>
          </ul>
        </div>

        <!-- Section 7: FAQs (Exact Match to Requirement) -->
        <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mt-12 mb-4" id="faq">
          Frequently Asked Questions: Shipping from Copart Richmond
        </h2>
        
        <div class="space-y-4 my-8 not-prose" itemscope itemtype="https://schema.org/FAQPage">
          
          <!-- Q1 -->
          <details class="faq-item bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How do I ship a car from Copart Richmond VA?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Pay your invoice in full, download your Gate Pass PIN from your Copart account, then book a Copart-approved carrier with your lot number and gate PIN. The carrier schedules a pickup appointment at the Sandston or Charles City yard and delivers your vehicle door-to-door.</p>
            </div>
          </details>

          <!-- Q2 -->
          <details class="faq-item bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How much does it cost to ship a car from Copart Richmond?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Most shipments from Copart Richmond range from <strong>$250 to $1,500+</strong>, depending on distance and vehicle condition. Short regional moves (DC, Northern VA) often fall between $250–$400, while long-distance runs to Florida or Texas can reach $950–$1,800+.</p>
            </div>
          </details>

          <!-- Q3 -->
          <details class="faq-item bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">Can I ship a non-running car from Copart Richmond?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. Most Copart vehicles are non-running or damaged. Carriers use winches, flatbeds, or yard forklifts to load inoperable cars from Copart Richmond and transport them safely to your location.</p>
            </div>
          </details>

          <!-- Q4 -->
          <details class="faq-item bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How fast can a carrier pick up from Copart Richmond?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Neon Auto Transport typically arranges <strong>same-day or next-day dispatch</strong> once your payment has cleared and your gate pass is issued. Faster pickup helps you avoid daily Copart storage fees.</p>
            </div>
          </details>

          <!-- Q5 -->
          <details class="faq-item bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">Do I need to be present when the car is picked up from Copart?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">No. As long as your carrier has the correct Gate Pass PIN, lot number, and authorization, they can pick up the vehicle without you being on-site. You’ll receive continuous updates from the carrier during transit.</p>
            </div>
          </details>

        </div>

        <!-- Pre-Footer High-Impact CTA Block with Urgency Hook -->
        <div style="background-color: #0a2540;" class="rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl my-12 not-prose">
          <span class="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
            Avoid Daily Storage Fees
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">
            Ready to Ship Your Copart Richmond Vehicle?
          </h2>
          <p class="text-slate-300 text-sm sm:text-base mb-4 max-w-xl mx-auto leading-relaxed font-medium">
            Book within 24 hours of payment to maximize your free storage window and avoid daily Copart fees. Get an instant, locked-in rate quote with $0 upfront deposit and $500,000 cargo insurance.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a href="/cost-calculator/" style="background-color: #39FF14 !important; color: #0a2540 !important; font-weight: 900 !important; text-decoration: none !important;" class="px-8 py-4 rounded-xl text-sm font-black hover:opacity-95 transition shadow-md">
              Calculate Instant Rate &rarr;
            </a>
            <a href="tel:5715767711" style="background-color: #ffffff !important; color: #0a2540 !important; font-weight: 800 !important; text-decoration: none !important;" class="px-8 py-4 rounded-xl text-sm hover:bg-slate-100 transition shadow-sm">
              Call (571) 576-7711
            </a>
            <a href="https://share.google/HsmqJyEArbWjqBI4v" target="_blank" rel="noopener noreferrer" style="background-color: #ffc72c !important; color: #0a2540 !important; font-weight: 900 !important; text-decoration: none !important;" class="px-6 py-4 rounded-xl text-sm hover:opacity-95 transition shadow-sm">
              Google Reviews ⭐ 4.9
            </a>
          </div>
        </div>

      </article>

    </div>
  </main>
`;

// Replace body between </header> and <footer
const headerEndIdx = html.indexOf('</header>');
const footerStartIdx = html.indexOf('<footer');

if (headerEndIdx !== -1 && footerStartIdx !== -1) {
  html = html.substring(0, headerEndIdx + 9) + '\n' + mainContent + '\n  ' + html.substring(footerStartIdx);
} else {
  html = html.replace(/<main[\s\S]*?<\/main>/, mainContent);
}

// Write outputs
const outputDir = path.join(__dirname, 'blog', 'how-to-ship-a-car-from-copart-richmond-va');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'blog', 'how-to-ship-a-car-from-copart-richmond-va.html'), html, 'utf8');

// Also create companion markdown file for LLMs
const markdownContent = `# How to Ship a Car from Copart Richmond VA: Complete 2026 Guide

> Step-by-step guide to shipping a car from Copart Richmond VA. Learn about yard locations, storage fees, costs, and how to book fast pickup from Sandston or Charles City.

## Quick Answer: How to Ship a Car from Copart Richmond VA
1. **Pay your invoice in full** and wait for funds to clear (wire transfer, ePay, or debit).
2. **Download your Gate Pass PIN** from your Copart Member account.
3. **Book a Copart-approved carrier** (e.g., Neon Auto Transport) with your Lot # and Gate PIN.
4. The carrier schedules a pickup appointment in the **Copart Transportation App** and loads your vehicle at the Sandston or Charles City yard.
5. Your car is delivered **door-to-door** to your home, auto repair shop, dealership, or maritime port.

## 1. Understand the Two Copart Richmond Yard Locations
- **Copart Richmond (Sandston - Yard #42):** 5701 Whiteside Rd, Sandston, VA 23150 | Phone: (804) 328-1023
- **Copart Richmond East (Charles City - Yard #134):** 6300 Chambers Road, Charles City, VA 23030 | Phone: (804) 829-9160
- Hours: Mon–Fri, 8:00 AM – 5:00 PM EST (Gate pickup cutoff at 4:30 PM).

## 2. Step-by-Step Pickup Process
1. Complete Invoice Payment
2. Generate Your Gate Pass PIN
3. Book Dispatch with Neon Auto Transport
4. Copart Transportation App Gate Scheduling
5. Gate Check-In, Inspection & Door-to-Door Delivery

## 3. How Copart Storage Fees Work
Copart grants 2–3 business days of free storage. After this, storage fees accumulate daily ($30–$50+/day). Booking dispatch within 24 hours of payment avoids weekend and holiday fee accumulation.

## 4. Shipping Inoperable & Damaged Vehicles
- Runs & Drives (Standard open haul)
- Rolls & Steers ($100–$300 winch loading surcharge)
- Heavy Salvage / Missing Wheels (Copart yard forklift loading onto flatbed)

## 5. Copart Richmond Car Shipping Cost Estimates
- Washington DC / Northern VA (~100 mi): $250 – $400 (Running) | $350 – $550 (Inoperable)
- Philadelphia, PA / NJ (~250 mi): $450 – $650 (Running) | $600 – $850 (Inoperable)
- New York / New England (~350–500 mi): $550 – $800 (Running) | $750 – $1,050 (Inoperable)
- Atlanta, GA / Southeast (~530 mi): $600 – $850 (Running) | $800 – $1,100 (Inoperable)
- Miami / Orlando, FL (~850–950 mi): $750 – $1,100 (Running) | $950 – $1,400 (Inoperable)
- Dallas / Houston, TX (~1,300 mi): $950 – $1,350 (Running) | $1,250 – $1,750 (Inoperable)

## 6. Richmond-Specific Pickup Tips
- Verify whether your lot is at Sandston or Charles City before dispatch.
- Plan pickups for weekday mornings to avoid yard queue bottlenecks.
- Coordinate port delivery (Port of Baltimore, Norfolk) if exporting.

## 7. Frequently Asked Questions
- **How do I ship a car from Copart Richmond VA?** Pay invoice, get Gate PIN, book with Neon Auto Transport for app-scheduled pickup and door-to-door delivery.
- **How much does it cost to ship from Copart Richmond?** $250 to $1,500+ depending on mileage and vehicle operable condition.
- **Can I ship a non-running car?** Yes, via electric winch, forklift loading, or flatbed.
- **How fast can a carrier pick up?** Same-day or 24–48h dispatch once payment clears.
- **Do I need to be present?** No, the driver handles gate check-in with your Gate PIN.
`;

fs.writeFileSync(path.join(__dirname, 'blog', 'how-to-ship-a-car-from-copart-richmond-va.md'), markdownContent, 'utf8');

console.log('✅ Generated optimized Copart Richmond VA Blog Guide with AEO, Schema & Internal Links.');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the clean template from car-shipping-woodbridge-va
const templatePath = path.join(__dirname, 'car-shipping-woodbridge-va', 'index.html');
let html = fs.readFileSync(templatePath, 'utf8');

// ============================================================
// 1. REPLACE <head> SEO TAGS
// ============================================================

// Title
html = html.replace(
  /<title>[^<]*<\/title>/,
  '<title>Copart Richmond VA Car Shipping | Fast Pickup &amp; Delivery | Neon Auto Transport</title>'
);

// Meta description
html = html.replace(
  /<meta name="description" content="[^"]*">/,
  '<meta name="description" content="Need car shipping from Copart Richmond VA? Neon Auto Transport handles gate passes, inoperable vehicles, and fast pickup to avoid storage fees. Get a free quote.">'
);

// Canonical
html = html.replace(
  /<link rel="canonical" href="[^"]*"\s*\/?>/,
  '<link rel="canonical" href="https://neonautotransport.com/copart-richmond-va-car-shipping/">'
);

// Alternate markdown
if (html.includes('<link rel="alternate" type="text/markdown"')) {
  html = html.replace(
    /<link rel="alternate" type="text\/markdown" href="[^"]*">/,
    '<link rel="alternate" type="text/markdown" href="https://neonautotransport.com/copart-richmond-va-car-shipping.md">'
  );
}

// OG Tags
html = html.replace(
  /<meta property="og:url" content="[^"]*"\s*\/?>/,
  '<meta property="og:url" content="https://neonautotransport.com/copart-richmond-va-car-shipping/"/>'
);

html = html.replace(
  /<meta property="og:title" content="[^"]*">/,
  '<meta property="og:title" content="Copart Richmond VA Car Shipping | Fast Pickup &amp; Delivery | Neon Auto Transport">'
);

html = html.replace(
  /<meta property="og:description" content="[^"]*">/,
  '<meta property="og:description" content="Need car shipping from Copart Richmond VA? Neon Auto Transport handles gate passes, inoperable vehicles, and fast pickup to avoid storage fees. Get a free quote.">'
);

// Twitter Tags
html = html.replace(
  /<meta name="twitter:title" content="[^"]*">/,
  '<meta name="twitter:title" content="Copart Richmond VA Car Shipping | Fast Pickup &amp; Delivery | Neon Auto Transport">'
);

html = html.replace(
  /<meta name="twitter:description" content="[^"]*">/,
  '<meta name="twitter:description" content="Need car shipping from Copart Richmond VA? Neon Auto Transport handles gate passes, inoperable vehicles, and fast pickup to avoid storage fees. Get a free quote.">'
);

// ============================================================
// 2. REPLACE JSON-LD SCHEMA
// ============================================================
const newSchema = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://neonautotransport.com/#business",
      "name": "Neon Auto Transport",
      "url": "https://neonautotransport.com",
      "logo": "https://neonautotransport.com/logo.png",
      "telephone": "+15715767711",
      "email": "info@neonautotransport.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2709 Neabsco Common Pl Suite 101",
        "addressLocality": "Woodbridge",
        "addressRegion": "VA",
        "postalCode": "22191",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+15715767711",
        "contactType": "sales",
        "areaServed": "US"
      },
      "sameAs": [
        "https://www.facebook.com/neonautotransport",
        "https://www.instagram.com/neonautotransport"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Copart Richmond VA Car Shipping",
      "name": "Copart Richmond VA Car Shipping",
      "provider": {
        "@id": "https://neonautotransport.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Richmond",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "VA",
          "addressCountry": "US"
        }
      },
      "description": "Car shipping and auto transport services from Copart Richmond VA (Sandston and Charles City yards) to anywhere in the United States.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Copart Richmond Shipping Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Open carrier transport from Copart Richmond"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Non-running vehicle transport with winch"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enclosed car shipping from Copart Richmond VA"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I ship a car from Copart Richmond VA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To ship a car from Copart Richmond, win the auction and pay your invoice, wait for payment to clear, get your gate pass and lot details, then book a carrier like Neon Auto Transport. The carrier schedules a pickup appointment through the Copart Transportation App and delivers your vehicle door-to-door."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical costs range from $300 to $1,500 for standard open carrier transport and $800 to $4,000+ for flatbed or heavy-duty on inoperable vehicles, plus any Copart gate or release fees. Exact pricing depends on distance, vehicle condition, and transport type."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can you pick up from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neon Auto Transport aims for same-day or next-day dispatch once payment has cleared and the gate pass is issued. Faster pickup helps avoid daily storage fees charged by Copart after the free window."
          }
        },
        {
          "@type": "Question",
          "name": "Can you ship non-running cars from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most Copart vehicles are non-running or damaged. Carriers use winches, forklifts, or flatbeds to load inoperable vehicles from Copart Richmond yards and transport them safely to your destination."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a broker to ship from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you don't legally need a broker. However, using a licensed broker like Neon Auto Transport saves time finding Copart-approved carriers, handles gate pass coordination, yard communication, and provides single-point tracking."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for Copart Richmond pickup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your carrier will need the gate pass / buyer authorization from Copart, lot number, yard address, carrier MC/DOT numbers entered into Copart's system, and driver ID."
          }
        },
        {
          "@type": "Question",
          "name": "Can you ship multiple vehicles from Copart Richmond at once?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you've bought several vehicles from the Richmond Sandston or Charles City yards, we can consolidate them into a multi-car load with volume pricing for dealers and rebuilders."
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
          "name": "Auto Auction Shipping",
          "item": "https://neonautotransport.com/services/auto-auction-shipping/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Copart Richmond VA Car Shipping",
          "item": "https://neonautotransport.com/copart-richmond-va-car-shipping/"
        }
      ]
    }
  ]
}
</script>`;

// Replace all existing JSON-LD schemas with newSchema
html = html.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
  ''
);
html = html.replace('</head>', newSchema + '\n</head>');

// ============================================================
// 3. REPLACE <main>...</main> CONTENT
// ============================================================
const newMain = `<main>
    <!-- Hero Section (dark, slant-bottom) -->
    <section class="relative bg-[#0a2540] pt-32 pb-40 overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#163a5f] to-[#0a2540] opacity-90"></div>
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05)_0,transparent_50%)]"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#39FF14] font-bold text-sm tracking-wide mb-6">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Copart Richmond, VA (Sandston &amp; Charles City)
        </div>
        
        <!-- Breadcrumb Navigation -->
        <nav aria-label="Breadcrumbs" class="flex items-center justify-center gap-2 text-xs font-semibold mb-6 flex-wrap text-slate-300">
          <a href="https://neonautotransport.com/" class="text-slate-300 hover:text-[#00D1FF] transition">Home</a><span>/</span>
          <a href="https://neonautotransport.com/services/auto-auction-shipping/" class="text-slate-300 hover:text-[#00D1FF] transition">Auction Shipping</a><span>/</span>
          <span class="text-[#39FF14] font-bold">Copart Richmond VA</span>
        </nav>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
          Copart Richmond VA Car Shipping
        </h1>

        <!-- Quick Answer / AEO Snapshot -->
        <section class="quick-answer bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/30 rounded-xl p-6 my-6 shadow-xl text-left" aria-label="Quick Answer">
          <h2 class="quick-answer-title text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Quick Answer: Shipping from Copart Richmond
          </h2>
          <div class="quick-answer-content text-slate-200 text-base leading-relaxed">
            <p>Neon Auto Transport provides fast, insured vehicle pickup from both Copart Richmond yards (Sandston and Charles City) with door-to-door delivery nationwide. Open transport averages $300–$1,500; non-running winch transport is readily available. We coordinate gate passes and Copart Transportation App scheduling to beat storage fee deadlines. Call (571) 576-7711 or get an instant quote online.</p>
          </div>
        </section>

        <p class="text-lg md:text-xl text-[rgba(255,255,255,0.9)] leading-relaxed mb-10 max-w-3xl mx-auto">
          Neon Auto Transport specializes in car shipping from Copart Richmond, VA, helping buyers move salvage, clean title, and project vehicles from the Richmond-area Copart yards to anywhere in the U.S. Whether you’re a dealer, rebuilder, or individual buyer, we handle gate passes, lot coordination, and inoperable vehicle pickups so you avoid costly storage fees.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="/cost-calculator/" class="btn-primary w-full sm:w-auto text-lg py-4 px-8 justify-center shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]">Get Instant Quote</a>
          <a href="tel:5715767711" class="btn-outline text-white border-white/20 hover:bg-white/10 w-full sm:w-auto text-lg py-4 px-8 justify-center">Call (571) 576-7711</a>
        </div>
      </div>
    </section>

    <!-- Main Content Sections -->
    <section class="py-20 bg-[#f8fafc] -mt-16 relative z-10">
      <div class="container mx-auto px-4 max-w-4xl">
        
        <!-- Section: Why Choose Neon -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Why Choose Neon Auto Transport for Copart Richmond Shipping?</h2>
          <p class="text-[#425466] leading-relaxed mb-8">Shipping vehicles out of auto salvage yards requires specialized carrier dispatch. National generic brokers lack yard-level coordination, leading to delayed releases and mounting storage charges. Neon Auto Transport delivers streamlined logistics built directly for Copart’s release protocols.</p>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6]">
              <div class="w-12 h-12 rounded-lg bg-[#e0e7ff] text-[#635bff] flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">Auction-Specialist Carriers</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Our carriers pick up from Copart Richmond daily. They know how to book appointments via the Copart Transportation App, present gate PINs, and navigate yard security protocols seamlessly.</p>
            </div>

            <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6]">
              <div class="w-12 h-12 rounded-lg bg-[#dcfce7] text-[#16a34a] flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">Fast Pickup to Beat Fees</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Copart allows a limited free storage window before daily late fees accrue ($30–$50+/day). We prioritize same-day or next-day dispatch as soon as your invoice clears.</p>
            </div>

            <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6]">
              <div class="w-12 h-12 rounded-lg bg-[#fef3c7] text-[#ca8a04] flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">Running &amp; Non-Running</h3>
              <p class="text-sm text-[#425466] leading-relaxed">We provide open multi-car haulers for driveable lots, winch-equipped trucks for roll-and-steer salvage, and flatbeds or forklift loading for severely damaged project cars.</p>
            </div>
          </div>
        </div>

        <!-- Section: How to Ship (5 Steps) -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">How to Ship a Car from Copart Richmond VA</h2>
          <p class="text-[#425466] leading-relaxed mb-8">Follow this 5-step process to ensure a hassle-free, expedited vehicle release from Copart Richmond (Sandston or Charles City yards):</p>

          <div class="space-y-6">
            <div class="flex gap-4 p-5 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 class="font-bold text-lg text-[#0a2540] mb-1">Step 1 – Win the Auction and Complete Payment</h3>
                <p class="text-sm text-[#425466] leading-relaxed">Pay your Copart invoice in full using wire transfer, ePay, or debit/credit. Copart's dispatch system will not release your vehicle until payment confirmation clears.</p>
              </div>
            </div>

            <div class="flex gap-4 p-5 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 class="font-bold text-lg text-[#0a2540] mb-1">Step 2 – Obtain Gate Pass &amp; Lot Details</h3>
                <p class="text-sm text-[#425466] leading-relaxed">Log into your Copart Member portal. Note your <strong>Lot Number</strong> and download the <strong>Gate Pass / Buyer Release PIN</strong>. Confirm whether the car is stored at Sandston (Whiteside Rd) or Charles City (Chambers Rd).</p>
              </div>
            </div>

            <div class="flex gap-4 p-5 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 class="font-bold text-lg text-[#0a2540] mb-1">Step 3 – Book Carrier Dispatch with Neon Auto Transport</h3>
                <p class="text-sm text-[#425466] leading-relaxed">Provide our dispatch team with your Lot #, Gate PIN, vehicle condition (runs, rolls/steers, or immobile), and delivery ZIP. We assign an FMCSA-licensed carrier and provide their MC/DOT numbers for Copart 3rd-party authorization.</p>
              </div>
            </div>

            <div class="flex gap-4 p-5 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">4</div>
              <div>
                <h3 class="font-bold text-lg text-[#0a2540] mb-1">Step 4 – Carrier Yard Check-In &amp; Loading</h3>
                <p class="text-sm text-[#425466] leading-relaxed">Our driver schedules a gate appointment via the Copart Transportation App, checks into the Richmond yard, performs an initial condition review (Bill of Lading inspection), and safely loads your vehicle via ramp, winch, or yard loader.</p>
              </div>
            </div>

            <div class="flex gap-4 p-5 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">5</div>
              <div>
                <h3 class="font-bold text-lg text-[#0a2540] mb-1">Step 5 – Direct Door-to-Door Delivery</h3>
                <p class="text-sm text-[#425466] leading-relaxed">Your vehicle is transported directly to your residential driveway, repair facility, body shop, dealership, or shipping port with live driver updates and full cargo insurance protection.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Costs and Pricing -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Copart Richmond Car Shipping Cost</h2>
          <h3 class="text-xl font-bold text-[#0a2540] mb-3">What Influences Your Price?</h3>
          <p class="text-[#425466] leading-relaxed mb-6">Car transport pricing from Copart Richmond is calculated based on exact transit mileage, vehicle operable status, carrier equipment requirements, and destination accessibility.</p>

          <ul class="grid md:grid-cols-2 gap-3 mb-8 text-sm text-[#425466]">
            <li class="flex items-center gap-2 bg-[#f8fafc] p-3 rounded-lg border border-[#e6e6e6]"><span class="text-[#39FF14] font-bold">✓</span> <strong>Distance:</strong> Total miles from Richmond, VA to your delivery ZIP.</li>
            <li class="flex items-center gap-2 bg-[#f8fafc] p-3 rounded-lg border border-[#e6e6e6]"><span class="text-[#39FF14] font-bold">✓</span> <strong>Operable Status:</strong> Running vs non-running (winch loading required).</li>
            <li class="flex items-center gap-2 bg-[#f8fafc] p-3 rounded-lg border border-[#e6e6e6]"><span class="text-[#39FF14] font-bold">✓</span> <strong>Trailer Type:</strong> Open multi-car hauler vs enclosed single/multi trailer.</li>
            <li class="flex items-center gap-2 bg-[#f8fafc] p-3 rounded-lg border border-[#e6e6e6]"><span class="text-[#39FF14] font-bold">✓</span> <strong>Yard Fees:</strong> Copart buyer gate release fees ($50–$75, paid to Copart).</li>
          </ul>

          <h3 class="text-xl font-bold text-[#0a2540] mb-4">Estimated Rates from Copart Richmond, VA</h3>
          <div class="overflow-x-auto -mx-4 px-4 mb-6">
            <table class="w-full min-w-[600px] border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
              <thead>
                <tr class="bg-[#0a2540] text-white">
                  <th class="px-5 py-4 text-left font-bold">Delivery Destination</th>
                  <th class="px-5 py-4 text-left font-bold">Distance</th>
                  <th class="px-5 py-4 text-left font-bold">Running (Open)</th>
                  <th class="px-5 py-4 text-left font-bold">Non-Running (Winch)</th>
                  <th class="px-5 py-4 text-left font-bold">Transit Time</th>
                </tr>
              </thead>
              <tbody class="text-[#425466]">
                <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
                  <td class="px-5 py-4 font-semibold text-[#0a2540]">Washington DC / Northern VA</td>
                  <td class="px-5 py-4">~100 mi</td>
                  <td class="px-5 py-4 font-bold text-[#0a2540]">$250 – $400</td>
                  <td class="px-5 py-4 font-bold text-[#635bff]">$350 – $550</td>
                  <td class="px-5 py-4">1 Day</td>
                </tr>
                <tr class="border-b border-[#e6e6e6] bg-[#f8fafc] hover:bg-[#f0f5fa] transition">
                  <td class="px-5 py-4 font-semibold text-[#0a2540]">Philadelphia, PA / New Jersey</td>
                  <td class="px-5 py-4">~250 mi</td>
                  <td class="px-5 py-4 font-bold text-[#0a2540]">$450 – $650</td>
                  <td class="px-5 py-4 font-bold text-[#635bff]">$600 – $850</td>
                  <td class="px-5 py-4">1–2 Days</td>
                </tr>
                <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
                  <td class="px-5 py-4 font-semibold text-[#0a2540]">New York / New England</td>
                  <td class="px-5 py-4">~350–500 mi</td>
                  <td class="px-5 py-4 font-bold text-[#0a2540]">$550 – $800</td>
                  <td class="px-5 py-4 font-bold text-[#635bff]">$750 – $1,050</td>
                  <td class="px-5 py-4">2–3 Days</td>
                </tr>
                <tr class="border-b border-[#e6e6e6] bg-[#f8fafc] hover:bg-[#f0f5fa] transition">
                  <td class="px-5 py-4 font-semibold text-[#0a2540]">Atlanta, GA / Southeast</td>
                  <td class="px-5 py-4">~530 mi</td>
                  <td class="px-5 py-4 font-bold text-[#0a2540]">$600 – $850</td>
                  <td class="px-5 py-4 font-bold text-[#635bff]">$800 – $1,100</td>
                  <td class="px-5 py-4">2–3 Days</td>
                </tr>
                <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
                  <td class="px-5 py-4 font-semibold text-[#0a2540]">Miami / Orlando, FL</td>
                  <td class="px-5 py-4">~850–950 mi</td>
                  <td class="px-5 py-4 font-bold text-[#0a2540]">$750 – $1,100</td>
                  <td class="px-5 py-4 font-bold text-[#635bff]">$950 – $1,400</td>
                  <td class="px-5 py-4">3–4 Days</td>
                </tr>
                <tr class="border-b border-[#e6e6e6] bg-[#f8fafc] hover:bg-[#f0f5fa] transition">
                  <td class="px-5 py-4 font-semibold text-[#0a2540]">Dallas / Houston, TX</td>
                  <td class="px-5 py-4">~1,300 mi</td>
                  <td class="px-5 py-4 font-bold text-[#0a2540]">$950 – $1,350</td>
                  <td class="px-5 py-4 font-bold text-[#635bff]">$1,250 – $1,750</td>
                  <td class="px-5 py-4">4–6 Days</td>
                </tr>
                <tr class="hover:bg-[#f8fafc] transition">
                  <td class="px-5 py-4 font-semibold text-[#0a2540]">Los Angeles, CA / West Coast</td>
                  <td class="px-5 py-4">~2,650 mi</td>
                  <td class="px-5 py-4 font-bold text-[#0a2540]">$1,350 – $1,800</td>
                  <td class="px-5 py-4 font-bold text-[#635bff]">$1,750 – $2,300</td>
                  <td class="px-5 py-4">7–9 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-[#8ba3ba]">Note: Estimated rates reflect standard market averages. Exact pricing depends on vehicle condition and current diesel freight index.</p>
        </div>

        <!-- Section: Yard Locations -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Copart Richmond Yard Information</h2>
          <p class="text-[#425466] leading-relaxed mb-6">There are two primary Copart auction locations serving the greater Richmond, Virginia metropolitan area. Always check your purchase invoice to confirm which yard is storing your vehicle:</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 rounded-xl border border-[#e6e6e6] bg-[#f8fafc] hover:border-[#635bff] transition">
              <span class="inline-block px-3 py-1 rounded bg-[#0a2540] text-[#39FF14] text-xs font-bold uppercase mb-3">Primary Yard</span>
              <h3 class="text-xl font-bold text-[#0a2540] mb-2">Copart – Richmond (Sandston)</h3>
              <p class="text-sm text-[#425466] mb-4"><strong>Yard Address:</strong><br>5701 Whiteside Rd, Sandston, VA 23150</p>
              <p class="text-sm text-[#425466] mb-2"><strong>Phone:</strong> <a href="tel:8043281023" class="text-[#635bff] font-bold hover:underline">(804) 328-1023</a></p>
              <p class="text-sm text-[#425466]"><strong>Operating Hours:</strong><br>Monday – Friday: 8:00 AM – 5:00 PM EST<br><span class="text-xs text-[#8ba3ba]">Buyer pickup cuts off at 4:30 PM.</span></p>
            </div>

            <div class="p-6 rounded-xl border border-[#e6e6e6] bg-[#f8fafc] hover:border-[#635bff] transition">
              <span class="inline-block px-3 py-1 rounded bg-[#0a2540] text-[#00D1FF] text-xs font-bold uppercase mb-3">East Yard</span>
              <h3 class="text-xl font-bold text-[#0a2540] mb-2">Copart – Richmond East (Charles City)</h3>
              <p class="text-sm text-[#425466] mb-4"><strong>Yard Address:</strong><br>6300 Chambers Road, Charles City, VA 23030</p>
              <p class="text-sm text-[#425466] mb-2"><strong>Phone:</strong> <a href="tel:8048299160" class="text-[#635bff] font-bold hover:underline">(804) 829-9160</a></p>
              <p class="text-sm text-[#425466]"><strong>Operating Hours:</strong><br>Monday – Friday: 8:00 AM – 5:00 PM EST<br><span class="text-xs text-[#8ba3ba]">Check app for heavy loader availability.</span></p>
            </div>
          </div>
        </div>

        <!-- Section: Service Areas -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Nationwide Service Areas from Copart Richmond</h2>
          <p class="text-[#425466] leading-relaxed mb-6">Neon Auto Transport provides direct, door-to-door delivery from Copart Richmond to all 50 U.S. states, including dedicated daily lanes:</p>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-[#f8fafc] p-4 rounded-xl border border-[#e6e6e6]">
              <h4 class="font-bold text-[#0a2540] mb-2 text-sm">Major Metros</h4>
              <p class="text-xs text-[#425466] leading-relaxed">New York, Philadelphia, Washington DC, Baltimore, Charlotte, Atlanta, Miami, Chicago, Dallas, Houston, Phoenix, Los Angeles.</p>
            </div>
            <div class="bg-[#f8fafc] p-4 rounded-xl border border-[#e6e6e6]">
              <h4 class="font-bold text-[#0a2540] mb-2 text-sm">Regional East Coast</h4>
              <p class="text-xs text-[#425466] leading-relaxed">Same-day and 24-hour delivery throughout Virginia, North Carolina, Maryland, Pennsylvania, Delaware, and West Virginia.</p>
            </div>
            <div class="bg-[#f8fafc] p-4 rounded-xl border border-[#e6e6e6]">
              <h4 class="font-bold text-[#0a2540] mb-2 text-sm">Dealers &amp; Export Hubs</h4>
              <p class="text-xs text-[#425466] leading-relaxed">Direct transport to Jacksonville Port, Port of Baltimore, Port of NY/NJ, Savannah Port, and domestic dealer auto auctions.</p>
            </div>
          </div>
        </div>

        <!-- Section: FAQs -->
        <div class="stripe-card bg-[#f8fafc] border border-[#e6e6e6] p-8 md:p-12 rounded-2xl shadow-xl mb-12" itemscope itemtype="https://schema.org/FAQPage">
          <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">Common Questions About Copart Richmond Car Shipping</h2>
          
          <div class="space-y-4">
            <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
              <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
                <span itemprop="name">How do I ship a car from Copart Richmond VA?</span>
                <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">To ship a car from Copart Richmond, first pay your invoice in full. Once payment clears, retrieve your gate pass and lot number from your Copart portal. Contact Neon Auto Transport with your vehicle condition and delivery address. Our team assigns an authorized carrier who schedules a pickup via the Copart Transportation App and delivers your vehicle door-to-door.</p>
              </div>
            </details>

            <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
                <span itemprop="name">How much does it cost to ship a car from Copart Richmond?</span>
                <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Costs vary based on distance and vehicle condition. Standard open transport ranges from $300 to $1,500 for most continental U.S. routes. Non-running vehicles requiring winch loading add $100–$250, while heavy-duty flatbed or long-haul transport ranges from $800 to $4,000+. Copart also charges a standard $50–$75 gate/loading fee.</p>
              </div>
            </details>

            <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
                <span itemprop="name">How fast can you pick up from Copart Richmond?</span>
                <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">We prioritize same-day or 24–48 hour dispatch once payment has cleared and the gate pass is generated. Quick pickup prevents you from incurring Copart's daily storage charges ($30–$50+/day) after the free storage window expires.</p>
              </div>
            </details>

            <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
                <span itemprop="name">Can you ship non-running cars from Copart Richmond?</span>
                <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes. Over 60% of Copart auction vehicles are salvage or inoperable. We dispatch winch-equipped trucks for vehicles that roll and steer, and arrange forklift or yard crane assistance at Copart Richmond for units with broken axles, frame damage, or missing wheels.</p>
              </div>
            </details>

            <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
                <span itemprop="name">Do I need a broker to ship from Copart Richmond?</span>
                <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">While not legally mandatory, partnering with an experienced auto transport broker like Neon Auto Transport ensures access to Copart-vetted carriers, manages gate clearance paperwork, avoids expensive yard storage penalties, and provides full cargo insurance oversight.</p>
              </div>
            </details>

            <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
                <span itemprop="name">What documents do I need for Copart Richmond pickup?</span>
                <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Your assigned carrier requires your Copart Buyer Number, Lot Number, and Gate Pass / Release PIN. The carrier will provide their DOT/MC credentials and driver ID during gate check-in at the Sandston or Charles City yard.</p>
              </div>
            </details>

            <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
                <span itemprop="name">Can you ship multiple vehicles from Copart Richmond at once?</span>
                <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes. We frequently arrange multi-car loads (2 to 9 vehicles) for auto dealers, body shops, and vehicle exporters. Consolidating lots into single-carrier transport reduces total freight costs by 10%–20%.</p>
              </div>
            </details>
          </div>
        </div>

        <!-- Author / Review Byline -->
        <div class="text-sm text-center text-[#8ba3ba] mt-8 mb-8">
          Published by Neon Auto Transport &bull; FMCSA Licensed (MC #1703787 | USDOT #4355879) &bull; Last Updated September 2026
        </div>

      </div>
    </section>
  </main>`;

html = html.replace(
  /<main>[\s\S]*?<\/main>/,
  newMain
);

// Write to destination
const outputDir = path.join(__dirname, 'copart-richmond-va-car-shipping');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'index.html');
fs.writeFileSync(outputPath, html, 'utf8');

console.log('✅ Generated clean dark-theme page: copart-richmond-va-car-shipping/index.html');
console.log('   File size:', (Buffer.byteLength(html) / 1024).toFixed(1), 'KB');

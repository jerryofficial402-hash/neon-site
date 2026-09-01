import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the clean template from services/open-auto-transport.html or car-shipping-woodbridge-va
const templatePath = path.join(__dirname, 'services', 'open-auto-transport.html');
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
} else {
  html = html.replace(
    '</head>',
    '  <link rel="alternate" type="text/markdown" href="https://neonautotransport.com/copart-richmond-va-car-shipping.md">\n</head>'
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
      }
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
      "description": "Car shipping and auto transport services from Copart Richmond VA (Sandston and Charles City yards) to anywhere in the United States."
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

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
html = html.replace('</head>', newSchema + '\n</head>');

// ============================================================
// 3. MINIMALIST, CLEAN, REFINED MAIN CONTENT
// ============================================================
const newMain = `<main class="bg-white">
    
    <!-- Hero Section (Clean Minimalist White Header with Navy Text) -->
    <section class="border-b border-slate-200 bg-[#f8fafc] pt-32 pb-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumb -->
        <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
          <a href="https://neonautotransport.com/" class="hover:text-[#635bff] transition">Home</a>
          <span>/</span>
          <a href="https://neonautotransport.com/services/auto-auction-shipping/" class="hover:text-[#635bff] transition">Auto Auction Shipping</a>
          <span>/</span>
          <span class="text-slate-900 font-medium">Copart Richmond VA</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-6 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#16a34a]"></span>
          Auction Carrier Dispatch &bull; Richmond &amp; Sandston, VA
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight leading-tight mb-6">
          Copart Richmond VA Car Shipping
        </h1>

        <p class="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
          Direct vehicle transport from Copart Richmond yards (Sandston and Charles City) to any location nationwide. We coordinate gate passes, appointment slots, and inoperable vehicle loading to help you avoid daily yard storage fees.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
          <a href="/cost-calculator/" style="background-color: #635bff; color: #ffffff;" class="px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-[#534be8] transition shadow-sm text-center">
            Get Instant Quote &rarr;
          </a>
          <a href="tel:5715767711" class="px-7 py-3.5 rounded-lg font-semibold text-base text-[#0a2540] bg-white border border-slate-300 hover:bg-slate-50 transition text-center flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            (571) 576-7711
          </a>
        </div>

        <!-- Trust Features -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-xs text-slate-600 font-medium">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>$500K Cargo Insurance</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>$0 Upfront Deposit</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Winch &amp; Forklift Loading</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Fast 24–48h Dispatch</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Content Container -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      <!-- AEO Quick Answer Box (Minimalist Clean Callout) -->
      <section class="border-l-4 border-[#635bff] bg-slate-50 p-6 rounded-r-xl border-y border-r border-slate-200" aria-label="Quick Summary">
        <h2 class="text-base font-bold text-[#0a2540] mb-2">Quick Overview: Shipping from Copart Richmond</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          Neon Auto Transport provides insured vehicle pickup from both Copart Richmond yards (<strong>Sandston and Charles City</strong>) with nationwide door-to-door delivery. Standard open car shipping averages <strong>$300–$1,500</strong> depending on mileage; winch loading is available for inoperable lots. We coordinate gate passes and Copart Transportation App appointments so your vehicle is picked up before storage fees accumulate.
        </p>
      </section>

      <!-- Section: Why Choose Neon -->
      <section>
        <h2 class="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-4">Why Choose Neon Auto Transport for Copart Richmond?</h2>
        <p class="text-slate-600 text-base leading-relaxed mb-8">
          Generic auto haulers often reject auction pickups due to gate wait times, inoperable vehicle mechanics, or strict yard protocols. Our specialized auction team manages the entire release process from start to finish.
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-slate-100 text-[#0a2540] flex items-center justify-center font-bold mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="font-bold text-lg text-[#0a2540] mb-2">Auction-Vetted Carriers</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Our drivers pick up from Copart Richmond regularly, using the Copart Transportation App to book exact gate times and prevent gate turnaround issues.
            </p>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-slate-100 text-[#0a2540] flex items-center justify-center font-bold mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="font-bold text-lg text-[#0a2540] mb-2">Fast Pickup to Beat Fees</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Copart grants a limited free storage window (typically 2–3 business days). We schedule fast dispatch to avoid daily storage charges ($30–$50+/day).
            </p>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-slate-100 text-[#0a2540] flex items-center justify-center font-bold mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="font-bold text-lg text-[#0a2540] mb-2">Running &amp; Inoperable Units</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Equipped for clean title drives, roll-and-steer winch loads, and heavily damaged salvage vehicles requiring heavy forklift extraction.
            </p>
          </div>
        </div>
      </section>

      <!-- Section: 5-Step Process -->
      <section>
        <h2 class="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-4">How to Ship a Car from Copart Richmond VA</h2>
        <p class="text-slate-600 text-base leading-relaxed mb-8">
          Follow these 5 steps to ensure prompt vehicle release and hassle-free transit.
        </p>

        <div class="space-y-4">
          <div class="p-5 rounded-xl border border-slate-200 bg-white flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
            <div>
              <h3 class="font-bold text-base text-[#0a2540] mb-1">Win the Auction and Complete Payment</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Pay your Copart invoice in full using wire transfer, ePay, or debit. Copart will not release any vehicle until funds clear.</p>
            </div>
          </div>

          <div class="p-5 rounded-xl border border-slate-200 bg-white flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
            <div>
              <h3 class="font-bold text-base text-[#0a2540] mb-1">Obtain Your Gate Pass &amp; Lot Details</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Log into your Copart Member portal. Download the Gate Pass / Buyer Release PIN and confirm whether your vehicle is at the Sandston or Charles City yard.</p>
            </div>
          </div>

          <div class="p-5 rounded-xl border border-slate-200 bg-white flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
            <div>
              <h3 class="font-bold text-base text-[#0a2540] mb-1">Book Dispatch with Neon Auto Transport</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Provide your Lot #, Gate PIN, vehicle condition (operable, rolls/steers, or immobile), and delivery address. We assign an FMCSA-authorized carrier.</p>
            </div>
          </div>

          <div class="p-5 rounded-xl border border-slate-200 bg-white flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
            <div>
              <h3 class="font-bold text-base text-[#0a2540] mb-1">Carrier Yard Check-In &amp; Loading</h3>
              <p class="text-sm text-slate-600 leading-relaxed">The driver schedules an arrival window via the Copart Transportation App, inspects the vehicle (Bill of Lading), and safely loads it via ramp, winch, or forklift.</p>
            </div>
          </div>

          <div class="p-5 rounded-xl border border-slate-200 bg-white flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0">5</div>
            <div>
              <h3 class="font-bold text-base text-[#0a2540] mb-1">Direct Door-to-Door Delivery</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Your vehicle is delivered directly to your home, auto repair shop, dealership, or shipping port with full cargo insurance coverage.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Cost & Pricing Table -->
      <section>
        <h2 class="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-3">Copart Richmond Car Shipping Cost</h2>
        <p class="text-slate-600 text-base leading-relaxed mb-6">
          Estimated auto transport rates from Copart Richmond based on distance and operable status.
        </p>

        <div class="overflow-x-auto rounded-xl border border-slate-200 mb-4 shadow-sm">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-100 text-[#0a2540] border-b border-slate-200">
                <th class="p-4 font-bold">Delivery Destination</th>
                <th class="p-4 font-bold">Distance</th>
                <th class="p-4 font-bold">Running (Open)</th>
                <th class="p-4 font-bold">Non-Running (Winch)</th>
                <th class="p-4 font-bold">Transit Time</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-medium text-slate-900">Washington DC / Northern VA</td>
                <td class="p-4 text-slate-500">~100 mi</td>
                <td class="p-4 font-semibold text-slate-900">$250 – $400</td>
                <td class="p-4 font-semibold text-[#635bff]">$350 – $550</td>
                <td class="p-4 text-slate-600">1 Day</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-medium text-slate-900">Philadelphia, PA / New Jersey</td>
                <td class="p-4 text-slate-500">~250 mi</td>
                <td class="p-4 font-semibold text-slate-900">$450 – $650</td>
                <td class="p-4 font-semibold text-[#635bff]">$600 – $850</td>
                <td class="p-4 text-slate-600">1–2 Days</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-medium text-slate-900">New York / New England</td>
                <td class="p-4 text-slate-500">~350–500 mi</td>
                <td class="p-4 font-semibold text-slate-900">$550 – $800</td>
                <td class="p-4 font-semibold text-[#635bff]">$750 – $1,050</td>
                <td class="p-4 text-slate-600">2–3 Days</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-medium text-slate-900">Atlanta, GA / Southeast</td>
                <td class="p-4 text-slate-500">~530 mi</td>
                <td class="p-4 font-semibold text-slate-900">$600 – $850</td>
                <td class="p-4 font-semibold text-[#635bff]">$800 – $1,100</td>
                <td class="p-4 text-slate-600">2–3 Days</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-medium text-slate-900">Miami / Orlando, FL</td>
                <td class="p-4 text-slate-500">~850–950 mi</td>
                <td class="p-4 font-semibold text-slate-900">$750 – $1,100</td>
                <td class="p-4 font-semibold text-[#635bff]">$950 – $1,400</td>
                <td class="p-4 text-slate-600">3–4 Days</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-medium text-slate-900">Dallas / Houston, TX</td>
                <td class="p-4 text-slate-500">~1,300 mi</td>
                <td class="p-4 font-semibold text-slate-900">$950 – $1,350</td>
                <td class="p-4 font-semibold text-[#635bff]">$1,250 – $1,750</td>
                <td class="p-4 text-slate-600">4–6 Days</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-medium text-slate-900">Los Angeles, CA / West Coast</td>
                <td class="p-4 text-slate-500">~2,650 mi</td>
                <td class="p-4 font-semibold text-slate-900">$1,350 – $1,800</td>
                <td class="p-4 font-semibold text-[#635bff]">$1,750 – $2,300</td>
                <td class="p-4 text-slate-600">7–9 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500">Note: Copart charges an additional $50–$75 gate/loading fee paid directly to the auction facility. Rates reflect standard market averages.</p>
      </section>

      <!-- Section: Yard Locations (Side-by-Side Clean Cards) -->
      <section>
        <h2 class="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-3">Copart Richmond Yard Locations</h2>
        <p class="text-slate-600 text-base leading-relaxed mb-6">
          Always check your auction invoice to verify whether your vehicle is at the Sandston or Charles City yard.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-6 rounded-xl border border-slate-200 bg-white">
            <span class="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase mb-3">Primary Yard</span>
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Copart – Richmond (Sandston)</h3>
            <p class="text-sm text-slate-600 mb-3">
              <strong>Address:</strong> 5701 Whiteside Rd, Sandston, VA 23150
            </p>
            <p class="text-sm text-slate-600 mb-3">
              <strong>Phone:</strong> <a href="tel:8043281023" class="text-[#635bff] font-semibold hover:underline">(804) 328-1023</a>
            </p>
            <p class="text-sm text-slate-600 mb-4">
              <strong>Hours:</strong> Mon–Fri: 8:00 AM – 5:00 PM EST (Gate pickup cutoff at 4:30 PM).
            </p>
            <a href="https://maps.google.com/?q=5701+Whiteside+Rd,+Sandston,+VA+23150" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-[#635bff] hover:underline inline-flex items-center gap-1">
              View on Google Maps &rarr;
            </a>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-white">
            <span class="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase mb-3">East Yard</span>
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Copart – Richmond East (Charles City)</h3>
            <p class="text-sm text-slate-600 mb-3">
              <strong>Address:</strong> 6300 Chambers Road, Charles City, VA 23030
            </p>
            <p class="text-sm text-slate-600 mb-3">
              <strong>Phone:</strong> <a href="tel:8048299160" class="text-[#635bff] font-semibold hover:underline">(804) 829-9160</a>
            </p>
            <p class="text-sm text-slate-600 mb-4">
              <strong>Hours:</strong> Mon–Fri: 8:00 AM – 5:00 PM EST (Heavy loader access on site).
            </p>
            <a href="https://maps.google.com/?q=6300+Chambers+Road,+Charles+City,+VA+23030" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-[#635bff] hover:underline inline-flex items-center gap-1">
              View on Google Maps &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- Section: Vehicle Conditions -->
      <section>
        <h2 class="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-3">Vehicle Conditions &amp; Equipment</h2>
        <p class="text-slate-600 text-base leading-relaxed mb-6">
          We match the right carrier equipment based on your vehicle's condition.
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-5 rounded-xl border border-slate-200 bg-white">
            <h3 class="font-bold text-base text-[#0a2540] mb-2">Runs &amp; Drives</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Starts and drives under its own power. Loaded onto open multi-car haulers via standard ramps.
            </p>
          </div>

          <div class="p-5 rounded-xl border border-slate-200 bg-white">
            <h3 class="font-bold text-base text-[#0a2540] mb-2">Rolls &amp; Steers (Inoperable)</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Non-running engine or mechanical issue, but tires hold air and steering functions. Loaded via electric winch.
            </p>
          </div>

          <div class="p-5 rounded-xl border border-slate-200 bg-white">
            <h3 class="font-bold text-base text-[#0a2540] mb-2">Severe Damage / Missing Wheels</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Broken axles, missing wheels, or heavy structural damage. Loaded by Copart yard forklift onto dedicated flatbeds.
            </p>
          </div>
        </div>
      </section>

      <!-- Section: FAQs -->
      <section itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-6">Frequently Asked Questions</h2>
        
        <div class="divide-y divide-slate-200 border-y border-slate-200">
          <details class="py-5 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
            <summary class="font-bold text-[#0a2540] text-lg flex justify-between items-center list-none">
              <span itemprop="name">How do I ship a car from Copart Richmond VA?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&#9660;</span>
            </summary>
            <div class="mt-3 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">To ship a car from Copart Richmond, first pay your invoice in full. Once payment clears, retrieve your gate pass and lot number from your Copart portal. Contact Neon Auto Transport with your vehicle condition and delivery address. Our team assigns an authorized carrier who schedules a pickup via the Copart Transportation App and delivers your vehicle door-to-door.</p>
            </div>
          </details>

          <details class="py-5 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-lg flex justify-between items-center list-none">
              <span itemprop="name">How much does it cost to ship a car from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&#9660;</span>
            </summary>
            <div class="mt-3 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Costs vary based on distance and vehicle condition. Standard open transport ranges from $300 to $1,500 for most continental U.S. routes. Non-running vehicles requiring winch loading add $100–$250, while heavy-duty flatbed or long-haul transport ranges from $800 to $4,000+. Copart also charges a standard $50–$75 gate/loading fee.</p>
            </div>
          </details>

          <details class="py-5 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-lg flex justify-between items-center list-none">
              <span itemprop="name">How fast can you pick up from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&#9660;</span>
            </summary>
            <div class="mt-3 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">We prioritize same-day or 24–48 hour dispatch once payment has cleared and the gate pass is generated. Quick pickup prevents you from incurring Copart's daily storage charges ($30–$50+/day) after the free storage window expires.</p>
            </div>
          </details>

          <details class="py-5 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-lg flex justify-between items-center list-none">
              <span itemprop="name">Can you ship non-running cars from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&#9660;</span>
            </summary>
            <div class="mt-3 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. Over 60% of Copart auction vehicles are salvage or inoperable. We dispatch winch-equipped trucks for vehicles that roll and steer, and arrange forklift or yard crane assistance at Copart Richmond for units with broken axles, frame damage, or missing wheels.</p>
            </div>
          </details>

          <details class="py-5 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-lg flex justify-between items-center list-none">
              <span itemprop="name">Do I need a broker to ship from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&#9660;</span>
            </summary>
            <div class="mt-3 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">While not legally mandatory, partnering with an experienced auto transport broker like Neon Auto Transport ensures access to Copart-vetted carriers, manages gate clearance paperwork, avoids expensive yard storage penalties, and provides full cargo insurance oversight.</p>
            </div>
          </details>

          <details class="py-5 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-lg flex justify-between items-center list-none">
              <span itemprop="name">What documents do I need for Copart Richmond pickup?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&#9660;</span>
            </summary>
            <div class="mt-3 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Your assigned carrier requires your Copart Buyer Number, Lot Number, and Gate Pass / Release PIN. The carrier will provide their DOT/MC credentials and driver ID during gate check-in at the Sandston or Charles City yard.</p>
            </div>
          </details>

          <details class="py-5 group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-lg flex justify-between items-center list-none">
              <span itemprop="name">Can you ship multiple vehicles from Copart Richmond at once?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&#9660;</span>
            </summary>
            <div class="mt-3 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. We frequently arrange multi-car loads (2 to 9 vehicles) for auto dealers, body shops, and vehicle exporters. Consolidating lots into single-carrier transport reduces total freight costs by 10%–20%.</p>
            </div>
          </details>
        </div>
      </section>

      <!-- Section: Clean CTA Box -->
      <section style="background-color: #0a2540;" class="rounded-2xl p-8 sm:p-10 text-center text-white shadow-md">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Ship from Copart Richmond?</h2>
        <p class="text-slate-300 text-base mb-6 max-w-xl mx-auto">
          Get a transparent rate quote with $0 upfront deposit and $500,000 cargo insurance coverage.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/cost-calculator/" style="background-color: #635bff; color: #ffffff;" class="px-8 py-3.5 rounded-lg font-bold hover:bg-[#534be8] transition shadow text-center w-full sm:w-auto">
            Calculate Instant Rate &rarr;
          </a>
          <a href="tel:5715767711" class="px-8 py-3.5 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition text-center w-full sm:w-auto">
            Call (571) 576-7711
          </a>
        </div>
      </section>

      <!-- Author / Byline -->
      <div class="text-xs text-center text-slate-400 pt-4">
        Published by Neon Auto Transport &bull; FMCSA Licensed Broker (MC #1703787 | USDOT #4355879) &bull; Updated September 2026
      </div>

    </div>
  </main>`;

// In services/open-auto-transport.html template, replace the entire body content between </header> and <footer
const headerEndIdx = html.indexOf('</header>');
const footerStartIdx = html.indexOf('<footer');

if (headerEndIdx !== -1 && footerStartIdx !== -1) {
  html = html.substring(0, headerEndIdx + 9) + '\n' + newMain + '\n  ' + html.substring(footerStartIdx);
} else {
  html = html.replace(/<main[\s\S]*?<\/main>/, newMain);
}

// Write to both destinations
const outputDir = path.join(__dirname, 'copart-richmond-va-car-shipping');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'copart-richmond-va-car-shipping.html'), html, 'utf8');

console.log('✅ Generated clean minimalist page: copart-richmond-va-car-shipping/index.html & copart-richmond-va-car-shipping.html');

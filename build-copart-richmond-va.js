import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read template from services/open-auto-transport.html
const templatePath = path.join(__dirname, 'services', 'open-auto-transport.html');
let html = fs.readFileSync(templatePath, 'utf8');

// ============================================================
// 1. HEAD SEO TAGS & STRUCTURED SCHEMA
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

// Open Graph
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

// Twitter
html = html.replace(
  /<meta name="twitter:title" content="[^"]*">/,
  '<meta name="twitter:title" content="Copart Richmond VA Car Shipping | Fast Pickup &amp; Delivery | Neon Auto Transport">'
);

html = html.replace(
  /<meta name="twitter:description" content="[^"]*">/,
  '<meta name="twitter:description" content="Need car shipping from Copart Richmond VA? Neon Auto Transport handles gate passes, inoperable vehicles, and fast pickup to avoid storage fees. Get a free quote.">'
);

// JSON-LD Multi-Entity Schema
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
// 2. SPACIOUS, CLEAN, REFINED MAIN CONTENT
// ============================================================
const newMain = `<main class="bg-white min-h-screen">
    
    <!-- Hero Section (Generous Padding & Clear Visual Hierarchy) -->
    <section class="border-b border-slate-200 bg-[#f8fafc] pt-32 pb-20 lg:pt-36 lg:pb-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 flex-wrap">
          <a href="https://neonautotransport.com/" class="hover:text-[#635bff] transition-colors">Home</a>
          <span class="text-slate-300">/</span>
          <a href="https://neonautotransport.com/services/auto-auction-shipping/" class="hover:text-[#635bff] transition-colors">Auto Auction Shipping</a>
          <span class="text-slate-300">/</span>
          <span class="text-slate-900 font-semibold">Copart Richmond VA</span>
        </nav>

        <!-- Status Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow">
          <span class="w-2 h-2 rounded-full bg-[#16a34a]"></span>
          Auction Carrier Dispatch &bull; Sandston &amp; Charles City, VA
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight leading-tight mb-8">
          Copart Richmond VA Car Shipping
        </h1>

        <p class="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl">
          Direct vehicle transport from Copart Richmond yards (Sandston and Charles City) to any location nationwide. We coordinate gate passes, app appointments, and inoperable vehicle loading to help you avoid daily yard storage fees.
        </p>

        <!-- CTA Buttons Box -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
          <a href="/cost-calculator/" style="background-color: #635bff; color: #ffffff;" class="px-8 py-4 rounded-xl font-bold text-base hover:bg-[#534be8] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
            <span>Calculate Instant Rate</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a href="tel:5715767711" class="px-8 py-4 rounded-xl font-bold text-base text-[#0a2540] bg-white border border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            <span>Call (571) 576-7711</span>
          </a>
        </div>

        <!-- Trust Features Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
          <div class="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>$500K Cargo Insurance</span>
          </div>
          <div class="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>$0 Upfront Deposit</span>
          </div>
          <div class="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>Winch &amp; Forklift Loading</span>
          </div>
          <div class="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>Fast 24–48h Dispatch</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Content Flow with Distinct Section Padding & Spacing -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 space-y-24 lg:space-y-32">
      
      <!-- 1. Quick Overview Box (Standalone Clean Callout with Large Bottom Margin) -->
      <section class="border border-slate-200 border-l-4 border-l-[#635bff] bg-slate-50 p-6 sm:p-8 rounded-xl transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5" aria-label="Quick Summary">
        <h2 class="text-base sm:text-lg font-bold text-[#0a2540] mb-3 flex items-center gap-2">
          <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Quick Overview: Shipping from Copart Richmond
        </h2>
        <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
          Neon Auto Transport provides insured vehicle pickup from both Copart Richmond yards (<strong>Sandston and Charles City</strong>) with nationwide door-to-door delivery. Standard open car shipping averages <strong>$300–$1,500</strong> depending on mileage; winch loading is available for inoperable lots. We coordinate gate passes and Copart Transportation App appointments so your vehicle is picked up before storage fees accumulate.
        </p>
      </section>

      <!-- 2. Why Choose Neon Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Dedicated Service</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">Why Choose Neon Auto Transport for Copart Richmond?</h2>
          <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
            Generic auto haulers often reject auction pickups due to gate wait times, inoperable vehicle mechanics, or strict yard protocols. Our specialized auction team manages the entire release process from start to finish.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-slate-100 text-[#0a2540] flex items-center justify-center font-bold mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-3">Auction-Vetted Carriers</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Our drivers pick up from Copart Richmond regularly, using the Copart Transportation App to book exact gate times and prevent gate turnaround issues.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-[#635bff]">
              Gate-pass verified dispatch
            </div>
          </div>

          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-slate-100 text-[#0a2540] flex items-center justify-center font-bold mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-3">Fast Pickup to Beat Fees</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Copart grants a limited free storage window (typically 2–3 business days). We schedule fast dispatch to avoid daily storage charges ($30–$50+/day).
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-[#16a34a]">
              Immediate carrier matching
            </div>
          </div>

          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-slate-100 text-[#0a2540] flex items-center justify-center font-bold mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-3">Running &amp; Inoperable Units</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Equipped for clean title drives, roll-and-steer winch loads, and heavily damaged salvage vehicles requiring heavy forklift extraction.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-[#635bff]">
              Full winch &amp; ramp equipment
            </div>
          </div>
        </div>
      </section>

      <!-- 3. How to Ship (5 Steps Structured Stack with Generous Spacing) -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Step-by-Step Guide</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">How to Ship a Car from Copart Richmond VA</h2>
          <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
            Follow these 5 steps to ensure prompt vehicle release and hassle-free transit.
          </p>
        </div>

        <div class="space-y-6">
          <div class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white flex gap-5 sm:gap-6 items-start transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-0.5">
            <div class="w-9 h-9 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm mt-0.5">1</div>
            <div class="flex-1">
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-1.5">Win the Auction and Complete Payment</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Pay your Copart invoice in full using wire transfer, ePay, or debit. Copart will not release any vehicle until funds clear.</p>
            </div>
          </div>

          <div class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white flex gap-5 sm:gap-6 items-start transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-0.5">
            <div class="w-9 h-9 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm mt-0.5">2</div>
            <div class="flex-1">
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-1.5">Obtain Your Gate Pass &amp; Lot Details</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Log into your Copart Member portal. Download the Gate Pass / Buyer Release PIN and confirm whether your vehicle is at the Sandston or Charles City yard.</p>
            </div>
          </div>

          <div class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white flex gap-5 sm:gap-6 items-start transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-0.5">
            <div class="w-9 h-9 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm mt-0.5">3</div>
            <div class="flex-1">
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-1.5">Book Dispatch with Neon Auto Transport</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Provide your Lot #, Gate PIN, vehicle condition (operable, rolls/steers, or immobile), and delivery address. We assign an FMCSA-authorized carrier.</p>
            </div>
          </div>

          <div class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white flex gap-5 sm:gap-6 items-start transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-0.5">
            <div class="w-9 h-9 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm mt-0.5">4</div>
            <div class="flex-1">
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-1.5">Carrier Yard Check-In &amp; Loading</h3>
              <p class="text-sm text-slate-600 leading-relaxed">The driver schedules an arrival window via the Copart Transportation App, inspects the vehicle (Bill of Lading), and safely loads it via ramp, winch, or forklift.</p>
            </div>
          </div>

          <div class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white flex gap-5 sm:gap-6 items-start transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-0.5">
            <div class="w-9 h-9 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm mt-0.5">5</div>
            <div class="flex-1">
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-1.5">Direct Door-to-Door Delivery</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Your vehicle is delivered directly to your home, auto repair shop, dealership, or shipping port with full cargo insurance coverage.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Pricing Matrix Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Transparent Pricing</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">Copart Richmond Car Shipping Cost</h2>
          <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
            Estimated auto transport rates from Copart Richmond based on distance and operable status.
          </p>
        </div>

        <div class="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-md">
          <div class="overflow-x-auto rounded-xl border border-slate-200 mb-6 shadow-sm">
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
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Washington DC / Northern VA</td>
                  <td class="p-4 text-slate-500">~100 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$250 – $400</td>
                  <td class="p-4 font-semibold text-[#635bff]">$350 – $550</td>
                  <td class="p-4 text-slate-600">1 Day</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Philadelphia, PA / New Jersey</td>
                  <td class="p-4 text-slate-500">~250 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$450 – $650</td>
                  <td class="p-4 font-semibold text-[#635bff]">$600 – $850</td>
                  <td class="p-4 text-slate-600">1–2 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">New York / New England</td>
                  <td class="p-4 text-slate-500">~350–500 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$550 – $800</td>
                  <td class="p-4 font-semibold text-[#635bff]">$750 – $1,050</td>
                  <td class="p-4 text-slate-600">2–3 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Atlanta, GA / Southeast</td>
                  <td class="p-4 text-slate-500">~530 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$600 – $850</td>
                  <td class="p-4 font-semibold text-[#635bff]">$800 – $1,100</td>
                  <td class="p-4 text-slate-600">2–3 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Miami / Orlando, FL</td>
                  <td class="p-4 text-slate-500">~850–950 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$750 – $1,100</td>
                  <td class="p-4 font-semibold text-[#635bff]">$950 – $1,400</td>
                  <td class="p-4 text-slate-600">3–4 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Dallas / Houston, TX</td>
                  <td class="p-4 text-slate-500">~1,300 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$950 – $1,350</td>
                  <td class="p-4 font-semibold text-[#635bff]">$1,250 – $1,750</td>
                  <td class="p-4 text-slate-600">4–6 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
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
        </div>
      </section>

      <!-- 5. Yard Locations Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Facility Directory</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">Copart Richmond Yard Locations</h2>
          <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
            Always check your auction invoice to verify whether your vehicle is at the Sandston or Charles City yard.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <span class="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase mb-4">Primary Yard #42</span>
              <h3 class="text-xl sm:text-2xl font-bold text-[#0a2540] mb-3">Copart – Richmond (Sandston)</h3>
              <p class="text-sm text-slate-600 mb-3 leading-relaxed">
                <strong>Address:</strong> 5701 Whiteside Rd, Sandston, VA 23150
              </p>
              <p class="text-sm text-slate-600 mb-3">
                <strong>Direct Phone:</strong> <a href="tel:8043281023" class="text-[#635bff] font-semibold hover:underline">(804) 328-1023</a>
              </p>
              <p class="text-sm text-slate-600 mb-6 leading-relaxed">
                <strong>Hours:</strong> Mon–Fri: 8:00 AM – 5:00 PM EST<br>
                <span class="text-xs text-slate-500">Gate pickup cutoff is 4:30 PM sharp.</span>
              </p>
            </div>
            <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
              <a href="https://maps.google.com/?q=5701+Whiteside+Rd,+Sandston,+VA+23150" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-[#635bff] hover:underline inline-flex items-center gap-1">
                View on Google Maps &rarr;
              </a>
              <a href="tel:8043281023" class="text-xs font-semibold text-[#0a2540] bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition">Call Yard</a>
            </div>
          </div>

          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <span class="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase mb-4">East Yard #134</span>
              <h3 class="text-xl sm:text-2xl font-bold text-[#0a2540] mb-3">Copart – Richmond East (Charles City)</h3>
              <p class="text-sm text-slate-600 mb-3 leading-relaxed">
                <strong>Address:</strong> 6300 Chambers Road, Charles City, VA 23030
              </p>
              <p class="text-sm text-slate-600 mb-3">
                <strong>Direct Phone:</strong> <a href="tel:8048299160" class="text-[#635bff] font-semibold hover:underline">(804) 829-9160</a>
              </p>
              <p class="text-sm text-slate-600 mb-6 leading-relaxed">
                <strong>Hours:</strong> Mon–Fri: 8:00 AM – 5:00 PM EST<br>
                <span class="text-xs text-slate-500">Heavy front-loader equipment on site.</span>
              </p>
            </div>
            <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
              <a href="https://maps.google.com/?q=6300+Chambers+Road,+Charles+City,+VA+23030" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-[#635bff] hover:underline inline-flex items-center gap-1">
                View on Google Maps &rarr;
              </a>
              <a href="tel:8048299160" class="text-xs font-semibold text-[#0a2540] bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition">Call Yard</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Vehicle Conditions Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Equipment Matching</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">Vehicle Conditions &amp; Equipment</h2>
          <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
            We match the right carrier equipment based on your vehicle's condition.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-2.5">Runs &amp; Drives</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-6">
                Starts and drives under its own power. Loaded onto open multi-car haulers via standard ramps.
              </p>
            </div>
            <span class="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md self-start">Standard Open Haul</span>
          </div>

          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-2.5">Rolls &amp; Steers (Inoperable)</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-6">
                Non-running engine or mechanical issue, but tires hold air and steering functions. Loaded via electric winch.
              </p>
            </div>
            <span class="text-xs font-semibold text-[#635bff] bg-slate-100 px-3 py-1.5 rounded-md self-start">Winch Loading (+ $100–$250)</span>
          </div>

          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-2.5">Severe Damage / Missing Wheels</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-6">
                Broken axles, missing wheels, or heavy structural damage. Loaded by Copart yard forklift onto dedicated flatbeds.
              </p>
            </div>
            <span class="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md self-start">Flatbed / Heavy Haul</span>
          </div>
        </div>
      </section>

      <!-- 7. Delivery Routes Grid -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Route Network</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">Delivery Routes from Copart Richmond</h2>
          <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
            Direct door-to-door carrier routes connecting Richmond, VA to all 50 U.S. states.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-1">
            <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              Major Metro Hubs
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              New York City, Philadelphia, Washington DC, Baltimore, Charlotte, Atlanta, Miami, Orlando, Chicago, Dallas, Houston, Phoenix, Los Angeles.
            </p>
          </div>

          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-1">
            <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
              Regional East Coast
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Fast 24–48 hour direct routes throughout Virginia, North Carolina, Maryland, Pennsylvania, Delaware, West Virginia, and South Carolina.
            </p>
          </div>

          <div class="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-[#635bff]/40 hover:-translate-y-1">
            <h3 class="font-bold text-base sm:text-lg text-[#0a2540] mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
              Ports &amp; Export Terminals
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Direct delivery to Port of Baltimore, Port of NY/NJ, Jacksonville Port (JAXPORT), Savannah Port, and domestic dealer auto auctions.
            </p>
          </div>
        </div>
      </section>

      <!-- 8. Clean FAQs with Generous Padding -->
      <section class="pt-4" itemscope itemtype="https://schema.org/FAQPage">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Common Questions</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">Frequently Asked Questions</h2>
          <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
            Answers to key questions regarding vehicle release, towing, and delivery from Copart Richmond.
          </p>
        </div>
        
        <div class="space-y-5">
          <details class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-sm hover:border-slate-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
            <summary class="font-bold text-[#0a2540] text-base sm:text-lg flex justify-between items-center list-none">
              <span itemprop="name">How do I ship a car from Copart Richmond VA?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4">&#9660;</span>
            </summary>
            <div class="mt-4 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">To ship a car from Copart Richmond, first pay your invoice in full. Once payment clears, retrieve your gate pass and lot number from your Copart portal. Contact Neon Auto Transport with your vehicle condition and delivery address. Our team assigns an authorized carrier who schedules a pickup via the Copart Transportation App and delivers your vehicle door-to-door.</p>
            </div>
          </details>

          <details class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-sm hover:border-slate-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-base sm:text-lg flex justify-between items-center list-none">
              <span itemprop="name">How much does it cost to ship a car from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4">&#9660;</span>
            </summary>
            <div class="mt-4 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Costs vary based on distance and vehicle condition. Standard open transport ranges from $300 to $1,500 for most continental U.S. routes. Non-running vehicles requiring winch loading add $100–$250, while heavy-duty flatbed or long-haul transport ranges from $800 to $4,000+. Copart also charges a standard $50–$75 gate/loading fee.</p>
            </div>
          </details>

          <details class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-sm hover:border-slate-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-base sm:text-lg flex justify-between items-center list-none">
              <span itemprop="name">How fast can you pick up from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4">&#9660;</span>
            </summary>
            <div class="mt-4 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">We prioritize same-day or 24–48 hour dispatch once payment has cleared and the gate pass is generated. Quick pickup prevents you from incurring Copart's daily storage charges ($30–$50+/day) after the free storage window expires.</p>
            </div>
          </details>

          <details class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-sm hover:border-slate-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-base sm:text-lg flex justify-between items-center list-none">
              <span itemprop="name">Can you ship non-running cars from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4">&#9660;</span>
            </summary>
            <div class="mt-4 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. Over 60% of Copart auction vehicles are salvage or inoperable. We dispatch winch-equipped trucks for vehicles that roll and steer, and arrange forklift or yard crane assistance at Copart Richmond for units with broken axles, frame damage, or missing wheels.</p>
            </div>
          </details>

          <details class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-sm hover:border-slate-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-base sm:text-lg flex justify-between items-center list-none">
              <span itemprop="name">Do I need a broker to ship from Copart Richmond?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4">&#9660;</span>
            </summary>
            <div class="mt-4 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">While not legally mandatory, partnering with an experienced auto transport broker like Neon Auto Transport ensures access to Copart-vetted carriers, manages gate clearance paperwork, avoids expensive yard storage penalties, and provides full cargo insurance oversight.</p>
            </div>
          </details>

          <details class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-sm hover:border-slate-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-base sm:text-lg flex justify-between items-center list-none">
              <span itemprop="name">What documents do I need for Copart Richmond pickup?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4">&#9660;</span>
            </summary>
            <div class="mt-4 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Your assigned carrier requires your Copart Buyer Number, Lot Number, and Gate Pass / Release PIN. The carrier will provide their DOT/MC credentials and driver ID during gate check-in at the Sandston or Charles City yard.</p>
            </div>
          </details>

          <details class="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-sm hover:border-slate-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-[#0a2540] text-base sm:text-lg flex justify-between items-center list-none">
              <span itemprop="name">Can you ship multiple vehicles from Copart Richmond at once?</span>
              <span class="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4">&#9660;</span>
            </summary>
            <div class="mt-4 text-slate-600 text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. We frequently arrange multi-car loads (2 to 9 vehicles) for auto dealers, body shops, and vehicle exporters. Consolidating lots into single-carrier transport reduces total freight costs by 10%–20%.</p>
            </div>
          </details>
        </div>
      </section>

      <!-- 9. Pre-Footer Distinct CTA Box (Generous Vertical Margins) -->
      <section style="background-color: #0a2540;" class="rounded-3xl p-10 sm:p-14 text-center text-white shadow-lg transition-all duration-300 hover:shadow-xl mt-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">Ready to Ship from Copart Richmond?</h2>
        <p class="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get a transparent, locked-in rate quote with $0 upfront deposit and $500,000 cargo insurance coverage.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/cost-calculator/" style="background-color: #635bff; color: #ffffff;" class="px-9 py-4 rounded-xl font-bold text-base hover:bg-[#534be8] transition-all duration-300 shadow hover:shadow-md hover:-translate-y-0.5 text-center w-full sm:w-auto">
            Calculate Instant Rate &rarr;
          </a>
          <a href="tel:5715767711" class="px-9 py-4 rounded-xl font-semibold text-base text-white border border-white/30 hover:bg-white/10 transition-all duration-300 text-center w-full sm:w-auto">
            Call (571) 576-7711
          </a>
        </div>
      </section>

      <!-- Author / Byline -->
      <div class="text-xs text-center text-slate-400 pt-8 pb-4">
        Published by Neon Auto Transport &bull; FMCSA Licensed Broker (MC #1703787 | USDOT #4355879) &bull; Updated September 2026
      </div>

    </div>
  </main>`;

// Clean replacement of body content between </header> and <footer
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

console.log('✅ Generated spacious, beautifully structured Copart Richmond page.');

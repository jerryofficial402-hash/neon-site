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

// Add custom CSS for card hover states & clean FAQ accordion styling
const customCss = `
  <style>
    .card-hover-indigo {
      border: 2px solid #e6e6e6 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .card-hover-indigo:hover {
      border-color: #635bff !important;
      transform: translateY(-5px) !important;
      box-shadow: 0 14px 30px rgba(99, 91, 255, 0.16) !important;
    }

    .card-hover-cyan {
      border: 2px solid #e6e6e6 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .card-hover-cyan:hover {
      border-color: #00D1FF !important;
      transform: translateY(-5px) !important;
      box-shadow: 0 14px 30px rgba(0, 209, 255, 0.18) !important;
    }

    .card-hover-green {
      border: 2px solid #e6e6e6 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .card-hover-green:hover {
      border-color: #39FF14 !important;
      transform: translateY(-5px) !important;
      box-shadow: 0 14px 30px rgba(57, 255, 20, 0.18) !important;
    }

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
      "@id": "https://neonautotransport.com/copart-richmond-va-car-shipping/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I ship a car from Copart Richmond VA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To ship a car from Copart Richmond, first pay your invoice in full. Once payment clears, retrieve your gate pass and lot number from your Copart portal. Contact Neon Auto Transport with your vehicle condition and delivery address. Our team assigns an authorized carrier who schedules a pickup appointment through the Copart Transportation App and delivers your vehicle door-to-door."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical auto transport costs range from $300 to $1,500 for standard open carrier transport depending on distance. Inoperable vehicles requiring winch loading add $100–$250, while flatbed or heavy-haul transport ranges from $800 to $4,000+. Copart also charges a standard $50–$75 gate/loading fee."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can you pick up from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neon Auto Transport prioritizes same-day or 24–48 hour dispatch once payment clears and the gate pass is generated. Prompt pickup helps avoid Copart's daily yard storage fees ($30–$50+/day) after the free storage window expires."
          }
        },
        {
          "@type": "Question",
          "name": "Can you ship non-running cars from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most Copart vehicles are salvage or inoperable. We dispatch winch-equipped trucks for vehicles that roll and steer, and arrange forklift or yard crane assistance at Copart Richmond for units with broken axles, frame damage, or missing wheels."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a broker to ship from Copart Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While not legally mandatory, partnering with an experienced auto transport broker like Neon Auto Transport ensures access to Copart-vetted carriers, manages gate clearance paperwork, avoids expensive yard storage penalties, and provides full cargo insurance oversight."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for Copart Richmond pickup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your assigned carrier requires your Copart Buyer Number, Lot Number, and Gate Pass / Release PIN. The carrier will provide their DOT/MC credentials and driver ID during gate check-in at the Sandston or Charles City yard."
          }
        },
        {
          "@type": "Question",
          "name": "Can you ship multiple vehicles from Copart Richmond at once?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We frequently arrange multi-car loads (2 to 9 vehicles) for auto dealers, body shops, and vehicle exporters. Consolidating lots into single-carrier transport reduces total freight costs by 10%–20%."
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
// 2. MAIN CONTENT WITH BEAUTIFULLY REFINED FAQ ACCORDION
// ============================================================
const newMain = `<main class="bg-white min-h-screen text-[#0a2540]">
    
    <!-- Hero Section -->
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

        <p class="text-base sm:text-lg text-[#425466] leading-relaxed mb-10 max-w-3xl font-medium">
          Direct vehicle transport from Copart Richmond yards (Sandston and Charles City) to any location nationwide. We coordinate gate passes, app appointments, and inoperable vehicle loading to help you avoid daily yard storage fees.
        </p>

        <!-- CTA Buttons Box -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
          <a href="/cost-calculator/" style="background-color: #39FF14; color: #0a2540; font-weight: 900;" class="px-8 py-4 rounded-xl font-black text-base hover:bg-[#32e011] transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
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
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>$500K Cargo Insurance</span>
          </div>
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>$0 Upfront Deposit</span>
          </div>
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>Winch &amp; Forklift Loading</span>
          </div>
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>Fast 24–48h Dispatch</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Content Container -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 space-y-24 lg:space-y-32">
      
      <!-- 1. Quick Overview Box -->
      <section class="bg-white p-8 rounded-3xl card-hover-indigo" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;" aria-label="Quick Summary">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
          ℹ️ Quick Overview
        </div>
        <h2 class="text-2xl font-black text-[#0a2540] mb-3">Shipping from Copart Richmond, VA</h2>
        <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
          Neon Auto Transport provides insured vehicle pickup from both Copart Richmond yards (<strong>Sandston and Charles City</strong>) with nationwide door-to-door delivery. Standard open car shipping averages <strong>$300–$1,500</strong> depending on mileage; winch loading is available for inoperable lots. We coordinate gate passes and Copart Transportation App appointments so your vehicle is picked up before storage fees accumulate.
        </p>
        <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
          <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
            Calculate Route Rate →
          </a>
          <a href="tel:5715767711" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
            Call (571) 576-7711
          </a>
        </div>
      </section>

      <!-- 2. Why Choose Neon Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Dedicated Service</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">Why Choose Neon Auto Transport for Copart Richmond?</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Generic auto haulers often reject auction pickups due to gate wait times, inoperable vehicle mechanics, or strict yard protocols. Our specialized auction team manages the entire release process from start to finish.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <!-- Card 1: Indigo -->
          <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
                🛡️ App-Verified
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Auction-Vetted Carriers</h3>
              <p class="text-xs font-bold text-[#4338ca] mb-3">Copart Certified Drivers</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Our drivers pick up from Copart Richmond regularly, using the Copart Transportation App to book exact gate times and prevent gate turnaround issues.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Get Quote →
              </a>
              <a href="tel:5715767711" class="px-5 py-2.5 bg-[#e0e7ff] text-[#4338ca] hover:bg-[#4338ca] hover:text-white font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Call Dispatch →
              </a>
            </div>
          </div>

          <!-- Card 2: Cyan -->
          <div class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full mb-4">
                ⚡ Fast Pickup
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Beat Storage Fees</h3>
              <p class="text-xs font-bold text-[#0891b2] mb-3">24–48h Dispatch Match</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Copart grants a limited free storage window (typically 2–3 business days). We schedule fast dispatch to avoid daily storage charges ($30–$50+/day).
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Get Quote →
              </a>
              <a href="tel:5715767711" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
                Call (571) 576-7711
              </a>
            </div>
          </div>

          <!-- Card 3: Green -->
          <div class="bg-white p-8 rounded-3xl card-hover-green flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full mb-4">
                🚜 Winch &amp; Forklift
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Inoperable Units</h3>
              <p class="text-xs font-bold text-[#15803d] mb-3">All Conditions Handled</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Equipped for clean title drives, roll-and-steer winch loads, and heavily damaged salvage vehicles requiring heavy forklift extraction.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Get Quote →
              </a>
              <a href="/services/auto-auction-shipping/" class="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e011] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
                Auction Services →
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- 3. Step-by-Step Guide: 5-STAGE PROCESS FLOW -->
      <section class="pt-4" id="step-by-step-guide">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">5-Stage Execution Flow</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">How to Ship a Car from Copart Richmond VA</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Follow this step-by-step auction release protocol to prevent yard storage penalties and ensure safe, insured delivery.
          </p>
        </div>

        <div class="space-y-8">
          
          <!-- Stages 1 & 2 -->
          <div class="grid md:grid-cols-2 gap-8">
            
            <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full">
                    💳 Phase 01 &bull; Payment
                  </span>
                  <span class="text-xs font-black text-slate-400">STEP 1 OF 5</span>
                </div>
                <h3 class="text-2xl font-black text-[#0a2540] mb-2">Win &amp; Complete Invoice Payment</h3>
                <p class="text-sm text-[#425466] leading-relaxed font-medium mb-6">
                  Pay your Copart invoice in full via secure wire transfer, ePay, or debit. Copart strictly withholds gate release passes until all auction fees have 100% cleared.
                </p>
              </div>
              <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#4338ca] flex items-center gap-1.5">
                <span>✓ Invoice cleared &bull; Free storage timer begins</span>
              </div>
            </div>

            <div class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full">
                    🔑 Phase 02 &bull; Clearance
                  </span>
                  <span class="text-xs font-black text-slate-400">STEP 2 OF 5</span>
                </div>
                <h3 class="text-2xl font-black text-[#0a2540] mb-2">Obtain Gate Pass &amp; Verify Yard</h3>
                <p class="text-sm text-[#425466] leading-relaxed font-medium mb-6">
                  Log into your Copart Member portal and download your Gate Pass / Buyer PIN. Confirm whether your lot is located at <strong>Sandston (Yard #42)</strong> or <strong>Charles City (Yard #134)</strong>.
                </p>
              </div>
              <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#0891b2] flex items-center gap-1.5">
                <span>✓ Lot # &amp; 6-digit PIN ready for carrier assignment</span>
              </div>
            </div>

          </div>

          <!-- Stage 3: FEATURED CENTRAL ACTION CARD -->
          <div class="bg-white p-8 sm:p-10 rounded-3xl card-hover-green" style="background:#ffffff; border:2px solid #39FF14; border-radius:1.5rem; box-shadow: 0 10px 25px rgba(57, 255, 20, 0.1);">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div class="max-w-2xl">
                <div class="flex items-center gap-3 mb-4">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full">
                    🚀 Phase 03 &bull; Key Action Step
                  </span>
                  <span class="text-xs font-black text-[#15803d] bg-[#dcfce7] px-2.5 py-0.5 rounded-md">DISPATCH BOOKING</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-black text-[#0a2540] mb-3">Book Dispatch with Neon Auto Transport</h3>
                <p class="text-sm sm:text-base text-[#425466] leading-relaxed font-medium">
                  Provide your Lot #, Buyer PIN, vehicle running status (operable, rolls/steers, or heavy salvage), and destination address. We immediately dispatch an FMCSA-authorized auto carrier with active $500,000 cargo insurance.
                </p>
              </div>
              
              <div class="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <a href="/cost-calculator/" style="background-color: #39FF14; color: #0a2540; font-weight: 900; text-decoration: none;" class="px-8 py-3.5 rounded-xl font-black text-sm hover:bg-[#32e011] transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
                  <span>Calculate &amp; Book Rate</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
                <a href="tel:5715767711" class="px-8 py-3.5 rounded-xl font-bold text-sm text-[#0a2540] bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white transition-all duration-300 text-center" style="text-decoration: none;">
                  Call (571) 576-7711
                </a>
              </div>
            </div>
          </div>

          <!-- Stages 4 & 5 -->
          <div class="grid md:grid-cols-2 gap-8">
            
            <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full">
                    🚛 Phase 04 &bull; Yard Loading
                  </span>
                  <span class="text-xs font-black text-slate-400">STEP 4 OF 5</span>
                </div>
                <h3 class="text-2xl font-black text-[#0a2540] mb-2">Carrier App Check-In &amp; Loading</h3>
                <p class="text-sm text-[#425466] leading-relaxed font-medium mb-6">
                  The driver schedules an exact arrival time via the Copart Transportation App, performs a physical condition inspection (BOL), and securely loads the vehicle via ramp, winch, or yard forklift.
                </p>
              </div>
              <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#4338ca] flex items-center gap-1.5">
                <span>✓ Bill of Lading generated &bull; Vehicle secured on carrier</span>
              </div>
            </div>

            <div class="bg-white p-8 rounded-3xl card-hover-green flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full">
                    🏡 Phase 05 &bull; Delivery
                  </span>
                  <span class="text-xs font-black text-slate-400">STEP 5 OF 5</span>
                </div>
                <h3 class="text-2xl font-black text-[#0a2540] mb-2">Direct Door-to-Door Delivery</h3>
                <p class="text-sm text-[#425466] leading-relaxed font-medium mb-6">
                  Your vehicle is delivered directly to your home, auto repair facility, dealership, or ocean port terminal with real-time transit tracking updates and signature confirmation.
                </p>
              </div>
              <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#15803d] flex items-center gap-1.5">
                <span>✓ Final inspection sign-off &bull; 100% completed transit</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- 4. Pricing Matrix Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Transparent Pricing</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">Copart Richmond Car Shipping Cost</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Estimated auto transport rates from Copart Richmond based on distance and operable status.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl card-hover-indigo" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
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
                  <td class="p-4 font-semibold text-[#4338ca]">$350 – $550</td>
                  <td class="p-4 text-slate-600">1 Day</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Philadelphia, PA / New Jersey</td>
                  <td class="p-4 text-slate-500">~250 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$450 – $650</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$600 – $850</td>
                  <td class="p-4 text-slate-600">1–2 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">New York / New England</td>
                  <td class="p-4 text-slate-500">~350–500 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$550 – $800</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$750 – $1,050</td>
                  <td class="p-4 text-slate-600">2–3 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Atlanta, GA / Southeast</td>
                  <td class="p-4 text-slate-500">~530 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$600 – $850</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$800 – $1,100</td>
                  <td class="p-4 text-slate-600">2–3 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Miami / Orlando, FL</td>
                  <td class="p-4 text-slate-500">~850–950 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$750 – $1,100</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$950 – $1,400</td>
                  <td class="p-4 text-slate-600">3–4 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Dallas / Houston, TX</td>
                  <td class="p-4 text-slate-500">~1,300 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$950 – $1,350</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$1,250 – $1,750</td>
                  <td class="p-4 text-slate-600">4–6 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">Los Angeles, CA / West Coast</td>
                  <td class="p-4 text-slate-500">~2,650 mi</td>
                  <td class="p-4 font-semibold text-slate-900">$1,350 – $1,800</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$1,750 – $2,300</td>
                  <td class="p-4 text-slate-600">7–9 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e6e6e6]">
            <p class="text-xs text-[#425466]">Note: Copart charges an additional $50–$75 gate/loading fee paid directly to the auction facility.</p>
            <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
              Calculate Exact Route Rate →
            </a>
          </div>
        </div>
      </section>

      <!-- 5. Yard Locations Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Facility Directory</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">Copart Richmond Yard Locations</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Always check your auction invoice to verify whether your vehicle is at the Sandston or Charles City yard.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          
          <!-- Yard 1: Sandston -->
          <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
                📍 Virginia Location &bull; Yard #42
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Copart – Richmond (Sandston)</h3>
              <p class="text-xs font-bold text-[#4338ca] mb-3">Primary Richmond Facility</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-4 font-medium">
                5701 Whiteside Rd<br>Sandston, VA 23150
              </p>
              <p class="text-sm font-bold text-[#0a2540] mb-2">
                Phone: <a href="tel:8043281023" class="text-[#4338ca] font-black hover:underline">(804) 328-1023</a>
              </p>
              <p class="text-xs text-[#425466] mb-6 font-medium">
                Hours: Mon–Fri: 8:00 AM – 5:00 PM EST (Gate cutoff at 4:30 PM)
              </p>
            </div>
            
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="https://maps.google.com/?q=5701+Whiteside+Rd,+Sandston,+VA+23150" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Get Directions →
              </a>
              <a href="tel:8043281023" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
                Call Yard Direct 📞
              </a>
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#e0e7ff] text-[#4338ca] hover:bg-[#4338ca] hover:text-white font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Sandston Car Shipping →
              </a>
            </div>
          </div>

          <!-- Yard 2: Charles City -->
          <div class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full mb-4">
                📍 Virginia Location &bull; Yard #134
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Copart – Richmond East</h3>
              <p class="text-xs font-bold text-[#0891b2] mb-3">Charles City Facility</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-4 font-medium">
                6300 Chambers Road<br>Charles City, VA 23030
              </p>
              <p class="text-sm font-bold text-[#0a2540] mb-2">
                Phone: <a href="tel:8048299160" class="text-[#0891b2] font-black hover:underline">(804) 829-9160</a>
              </p>
              <p class="text-xs text-[#425466] mb-6 font-medium">
                Hours: Mon–Fri: 8:00 AM – 5:00 PM EST (Heavy loaders on site)
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="https://maps.google.com/?q=6300+Chambers+Road,+Charles+City,+VA+23030" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Get Directions →
              </a>
              <a href="tel:8048299160" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
                Call Yard Direct 📞
              </a>
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e011] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
                Charles City Shipping →
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- 6. Vehicle Conditions Section -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Equipment Matching</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">Vehicle Conditions &amp; Equipment</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            We match the right carrier equipment based on your vehicle's physical condition.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <!-- Condition 1: Indigo -->
          <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
                🚗 Runs &amp; Drives
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Running Units</h3>
              <p class="text-xs font-bold text-[#4338ca] mb-3">Standard Multi-Car Carrier</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Starts and drives under its own power. Loaded onto open multi-car haulers via standard ramps with $0 winch fee.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Get Open Rate →
              </a>
              <a href="tel:5715767711" class="px-5 py-2.5 bg-[#e0e7ff] text-[#4338ca] hover:bg-[#4338ca] hover:text-white font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Book Now →
              </a>
            </div>
          </div>

          <!-- Condition 2: Cyan -->
          <div class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full mb-4">
                🛞 Rolls &amp; Steers
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Inoperable Units</h3>
              <p class="text-xs font-bold text-[#0891b2] mb-3">12K Electric Winch Required</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Non-running engine or mechanical failure, but tires hold air and steering functions properly for cable winching.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Get Winch Rate →
              </a>
              <a href="tel:5715767711" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
                Call (571) 576-7711
              </a>
            </div>
          </div>

          <!-- Condition 3: Green -->
          <div class="bg-white p-8 rounded-3xl card-hover-green flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full mb-4">
                🏗️ Heavy Salvage
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Severe Damage</h3>
              <p class="text-xs font-bold text-[#15803d] mb-3">Copart Forklift Loading</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Broken axles, missing wheels, or heavy structural damage. Loaded by Copart heavy yard forklift onto flatbed transport.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Flatbed Quote →
              </a>
              <a href="tel:5715767711" class="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e011] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
                Heavy Haul Quote →
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- 7. Delivery Routes Grid -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Route Network</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">Delivery Routes from Copart Richmond</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Direct door-to-door carrier routes connecting Richmond, VA to all 50 U.S. states.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
                🏙️ Metro Lanes
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Major Metro Hubs</h3>
              <p class="text-xs font-bold text-[#4338ca] mb-3">Daily Interstate Hauls</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                New York City, Philadelphia, Washington DC, Baltimore, Charlotte, Atlanta, Miami, Orlando, Chicago, Dallas, Houston, Phoenix, Los Angeles.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Calculate Metro Rate →
              </a>
            </div>
          </div>

          <div class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full mb-4">
                🛣️ East Coast
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Regional Routes</h3>
              <p class="text-xs font-bold text-[#0891b2] mb-3">Fast 24–48h Turnaround</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Fast 24–48 hour direct routes throughout Virginia, North Carolina, Maryland, Pennsylvania, Delaware, West Virginia, and South Carolina.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Calculate Regional Rate →
              </a>
            </div>
          </div>

          <div class="bg-white p-8 rounded-3xl card-hover-green flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full mb-4">
                🚢 Port &amp; Export
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Export Terminals</h3>
              <p class="text-xs font-bold text-[#15803d] mb-3">Direct Port Delivery</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Direct delivery to Port of Baltimore, Port of NY/NJ, Jacksonville Port (JAXPORT), Savannah Port, and domestic dealer auto auctions.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
              <a href="/cost-calculator/" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
                Calculate Port Rate →
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- 8. ULTRA-CLEAN, MODERN ACCORDION FAQ SECTION (Match Top Route Pages) -->
      <section class="pt-4" id="faq" itemscope itemtype="https://schema.org/FAQPage">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Got Questions?</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Everything you need to know about vehicle gate release, dispatch appointments, towing fees, and delivery from Copart Richmond VA.
          </p>
        </div>
        
        <!-- Clean Hairline-Bordered Accordion List -->
        <div class="space-y-4">
          
          <!-- FAQ Item 1 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How do I ship a car from Copart Richmond VA?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">To ship a car from Copart Richmond, first pay your auction invoice in full using wire transfer, ePay, or debit. Once funds clear, retrieve your <strong>Gate Pass / Buyer PIN</strong> and confirm your yard location (Sandston #42 or Charles City #134). Book dispatch with Neon Auto Transport — our team assigns an authorized carrier who schedules a pickup window via the Copart Transportation App and delivers your vehicle door-to-door.</p>
            </div>
          </details>

          <!-- FAQ Item 2 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How much does it cost to ship a car from Copart Richmond?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Shipping costs range from <strong>$300 to $1,500</strong> for standard open carrier transport depending on distance. Non-running vehicles requiring winch loading add $100–$250, while heavy-duty flatbed or long-haul transport ranges from $800 to $4,000+. Copart also charges a standard $50–$75 gate/loading fee paid directly to the facility.</p>
            </div>
          </details>

          <!-- FAQ Item 3 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How fast can you pick up from Copart Richmond?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Neon Auto Transport aims for <strong>same-day or 24–48 hour dispatch</strong> once payment has cleared and the gate pass is released. Fast pickup ensures you beat Copart's limited free storage window (2–3 business days) and avoid daily storage penalties ($30–$50+/day).</p>
            </div>
          </details>

          <!-- FAQ Item 4 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">Can you ship non-running cars from Copart Richmond?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. Over 60% of Copart vehicles are inoperable. We dispatch carriers equipped with 12,000 lb winches for units that roll and steer, and coordinate heavy forklift assistance at Copart Richmond for vehicles with broken suspension, missing wheels, or severe collision damage.</p>
            </div>
          </details>

          <!-- FAQ Item 5 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">Do I need a broker to ship from Copart Richmond?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">While not legally required, working with a licensed broker like Neon Auto Transport guarantees access to vetted, insured auction carriers, coordinates the Copart Transportation App gate appointments, protects you with $500,000 cargo insurance, and prevents gate turnaround delays.</p>
            </div>
          </details>

          <!-- FAQ Item 6 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">What documents do I need for Copart Richmond pickup?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Your assigned driver needs your <strong>Copart Buyer Number, Lot Number, and Gate Pass / Release PIN</strong>. The carrier enters their DOT/MC credentials into the Copart system and presents their commercial driver license upon gate check-in.</p>
            </div>
          </details>

          <!-- FAQ Item 7 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">Can you ship multiple vehicles from Copart Richmond at once?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. We frequently arrange multi-car loads (2 to 9 vehicles) from both Richmond yards for auto dealerships, rebuilders, and vehicle exporters. Consolidating lots into single-carrier transport reduces total freight costs by 10%–20%.</p>
            </div>
          </details>

        </div>

        <!-- Sleek Help Card -->
        <div class="mt-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-center sm:text-left">
            <h3 class="font-bold text-[#0a2540] text-base mb-1">Still have questions about your Copart Richmond lot?</h3>
            <p class="text-xs sm:text-sm text-slate-500 font-medium">Our auction dispatch specialists are standing by to check gate status and answer your questions.</p>
          </div>
          <a href="tel:5715767711" style="background-color: #635bff; color: #ffffff;" class="px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#534be8] transition whitespace-nowrap shadow-sm" style="text-decoration:none;">
            Call (571) 576-7711 &rarr;
          </a>
        </div>
      </section>

      <!-- 9. Pre-Footer High-Impact CTA Banner -->
      <section style="background-color: #0a2540;" class="rounded-3xl p-10 sm:p-14 lg:p-16 text-center text-white shadow-2xl transition-all duration-300 hover:shadow-xl mt-12">
        <span class="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5">
          Locked-In Rate Guarantee
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
          Ready to Ship from Copart Richmond?
        </h2>
        <p class="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Get a transparent, locked-in rate quote with $0 upfront deposit and $500,000 cargo insurance coverage.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="/cost-calculator/" style="background-color: #39FF14; color: #0a2540; font-weight: 900; text-decoration: none;" class="px-8 py-4 rounded-xl font-black text-base hover:bg-[#32e011] transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
            <span>Calculate Instant Rate</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a href="tel:5715767711" class="px-8 py-4 rounded-xl font-bold text-base text-[#0a2540] bg-white hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center gap-2" style="text-decoration: none;">
            <svg class="w-4 h-4 text-[#0a2540]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            <span>Call (571) 576-7711</span>
          </a>
          <a href="https://share.google/HsmqJyEArbWjqBI4v" target="_blank" rel="noopener noreferrer" class="px-6 py-4 rounded-xl font-black text-base bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center gap-1.5" style="text-decoration: none;">
            <span>Google Reviews ⭐ 4.9</span>
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

console.log('✅ Generated ultra-clean, modern FAQ accordion and built page.');

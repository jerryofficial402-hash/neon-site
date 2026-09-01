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
// 3. REPLACE <main>...</main> CONTENT WITH ULTRA-CLEAN UI/UX
// ============================================================
const newMain = `<main>
    <!-- Hero Section (Dark, Modern Two-Column Layout) -->
    <section class="relative bg-[#0a2540] pt-32 pb-36 overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);">
      <!-- Ambient Gradient Backdrops -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#103056] to-[#0a2540] opacity-95"></div>
        <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,209,255,0.08)_0,transparent_70%)]"></div>
        <div class="absolute bottom-0 left-10 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[120px]"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          
          <!-- Left Column: Hero Copy & Actions -->
          <div class="lg:w-7/12 text-left text-white">
            
            <!-- Live Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#39FF14]/40 bg-[#39FF14]/10 text-[#39FF14] text-xs font-bold uppercase tracking-wider mb-6">
              <span class="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></span>
              Copart Auction Dispatch &bull; Richmond &amp; Sandston, VA
            </div>

            <!-- Breadcrumbs -->
            <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-semibold text-white/70 mb-4 flex-wrap">
              <a href="https://neonautotransport.com/" class="hover:text-[#00D1FF] transition">Home</a>
              <span class="text-white/40">/</span>
              <a href="https://neonautotransport.com/services/auto-auction-shipping/" class="hover:text-[#00D1FF] transition">Auction Shipping</a>
              <span class="text-white/40">/</span>
              <span class="text-[#39FF14] font-bold">Copart Richmond VA</span>
            </nav>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight mb-6">
              Copart Richmond VA Car Shipping — <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#39FF14] block mt-1">Fast Auction Vehicle Transport</span>
            </h1>

            <!-- AEO / AI Overview Box -->
            <section class="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-5 mb-6 shadow-xl backdrop-blur-md" aria-label="Quick Answer">
              <div class="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Quick Answer: Shipping from Copart Richmond</span>
              </div>
              <p class="text-slate-200 text-sm leading-relaxed">
                Neon Auto Transport provides fast, insured vehicle pickup from both Copart Richmond yards (<strong>Sandston &amp; Charles City</strong>) with nationwide door-to-door delivery. Open transport averages <strong>$300–$1,500</strong>; winch-equipped non-running transport is readily available. We coordinate gate passes and Copart Transportation App scheduling so you beat yard storage fee deadlines.
              </p>
            </section>

            <p class="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl font-normal">
              Specialized auction carrier dispatch for salvage, clean title, and project vehicles. Whether you're a dealer, rebuilder, or individual buyer, we handle release paperwork, gate PINs, and inoperable vehicle loading smoothly.
            </p>

            <!-- CTA Button Row -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-base sm:text-lg hover:bg-[#32e011] transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2 group text-center">
                Get Instant Quote 
                <svg aria-hidden="true" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="tel:5715767711" class="px-6 py-4 rounded-full font-black text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90" style="background-color: #ffc72c !important; color: #0a2540 !important; text-decoration: none !important;">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                (571) 576-7711
              </a>
            </div>

            <!-- Trust Bar / Key Guarantees -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 text-xs text-white/90 font-medium">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>$500K Insurance</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>$0 Upfront Deposit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00D1FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>Winch / Forklift Ready</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00D1FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>24–48h Dispatch</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Glassmorphism Quick Quote & Yard Quick-Info Card -->
          <div class="lg:w-5/12 w-full">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl text-left text-white relative">
              <div class="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#39FF14] animate-ping"></span>
                  <span class="font-bold text-sm tracking-wide uppercase text-[#39FF14]">Copart Dispatch Hub</span>
                </div>
                <span class="text-xs bg-white/20 px-2.5 py-1 rounded-full font-semibold">Virginia Lanes</span>
              </div>

              <!-- Key Yard Summary -->
              <div class="space-y-4 text-sm mb-6">
                <div class="p-3.5 rounded-xl bg-black/30 border border-white/10">
                  <div class="flex justify-between items-start mb-1">
                    <span class="font-bold text-[#00D1FF]">Copart Sandston (Main)</span>
                    <span class="text-[11px] bg-[#39FF14]/20 text-[#39FF14] px-2 py-0.5 rounded font-bold">Open Daily</span>
                  </div>
                  <p class="text-xs text-slate-300">5701 Whiteside Rd, Sandston, VA 23150</p>
                  <p class="text-xs text-slate-400 mt-1">Direct: <a href="tel:8043281023" class="text-cyan-300 font-semibold hover:underline">(804) 328-1023</a> &bull; Gate cutoff: 4:30 PM</p>
                </div>

                <div class="p-3.5 rounded-xl bg-black/30 border border-white/10">
                  <div class="flex justify-between items-start mb-1">
                    <span class="font-bold text-[#00D1FF]">Copart Charles City (East)</span>
                    <span class="text-[11px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded font-bold">Open Daily</span>
                  </div>
                  <p class="text-xs text-slate-300">6300 Chambers Rd, Charles City, VA 23030</p>
                  <p class="text-xs text-slate-400 mt-1">Direct: <a href="tel:8048299160" class="text-cyan-300 font-semibold hover:underline">(804) 829-9160</a> &bull; Heavy loader access</p>
                </div>
              </div>

              <!-- Quick Quote Box -->
              <div class="bg-gradient-to-r from-[#635bff]/40 to-[#00d4ff]/30 p-4 rounded-xl border border-white/20 text-center">
                <p class="text-xs text-slate-200 mb-2 font-medium">Ready to avoid Copart storage fees?</p>
                <a href="/cost-calculator/" class="btn-primary w-full py-3 text-sm font-bold shadow-md justify-center">
                  Instant Rate Calculator &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Main Content Container -->
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl -mt-10 mb-24 relative z-20 space-y-16">
      
      <!-- 1. Why Choose Neon Section (3-Column Feature Cards) -->
      <section class="stripe-card bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-[#e6e6e6]">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <span class="text-[#635bff] text-xs font-black uppercase tracking-widest block mb-2">Built for Auction Buyers</span>
          <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">Why Choose Neon Auto Transport for Copart Richmond?</h2>
          <p class="text-[#425466] mt-3 text-base lg:text-lg">Standard car haulers often reject auction loads due to yard wait times or damage. Our dedicated auction dispatch network specializes in Richmond lot releases.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-[#f8fafc] p-6 lg:p-8 rounded-2xl border border-[#e6e6e6] hover:border-[#635bff] transition duration-300 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 rounded-xl bg-[#e0e7ff] text-[#635bff] flex items-center justify-center mb-6 shadow-sm">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="font-bold text-xl text-[#0a2540] mb-3">Auction-Specialist Carriers</h3>
              <p class="text-sm text-[#425466] leading-relaxed">
                Our drivers visit Copart Richmond yards daily. They know how to book appointment windows via the <strong>Copart Transportation App</strong>, present Gate PINs, and navigate yard security without delays.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#635bff] flex items-center gap-1">
              <span>App-verified check-in</span> &rarr;
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-[#f8fafc] p-6 lg:p-8 rounded-2xl border border-[#e6e6e6] hover:border-[#16a34a] transition duration-300 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 rounded-xl bg-[#dcfce7] text-[#16a34a] flex items-center justify-center mb-6 shadow-sm">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="font-bold text-xl text-[#0a2540] mb-3">Fast Pickup to Beat Storage Fees</h3>
              <p class="text-sm text-[#425466] leading-relaxed">
                Copart's complimentary storage window is typically only <strong>2–3 business days</strong>. After that, storage fees accumulate quickly ($30–$50+/day). We prioritize immediate dispatch as soon as your invoice clears.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#16a34a] flex items-center gap-1">
              <span>Zero delay carrier match</span> &rarr;
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-[#f8fafc] p-6 lg:p-8 rounded-2xl border border-[#e6e6e6] hover:border-[#ca8a04] transition duration-300 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 rounded-xl bg-[#fef3c7] text-[#ca8a04] flex items-center justify-center mb-6 shadow-sm">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 class="font-bold text-xl text-[#0a2540] mb-3">Running &amp; Non-Running Units</h3>
              <p class="text-sm text-[#425466] leading-relaxed">
                Whether your car runs and drives, rolls and steers, or has broken suspension/missing wheels requiring heavy-duty winch or forklift extraction, our fleet is equipped for all salvage conditions.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#ca8a04] flex items-center gap-1">
              <span>Full winch &amp; lift capability</span> &rarr;
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Step-by-Step Pickup Guide (Visual Timeline Stepper) -->
      <section class="stripe-card bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-[#e6e6e6]">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-[#635bff] text-xs font-black uppercase tracking-widest block mb-2">Step-by-Step Process</span>
          <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">How to Ship a Car from Copart Richmond VA</h2>
          <p class="text-[#425466] mt-3 text-base lg:text-lg">Follow these 5 streamlined steps to coordinate carrier dispatch and avoid yard delays.</p>
        </div>

        <div class="grid md:grid-cols-5 gap-6 relative">
          <!-- Step 1 -->
          <div class="bg-[#f8fafc] p-5 rounded-xl border border-[#e6e6e6] relative flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">1</div>
              <h4 class="font-bold text-[#0a2540] text-base mb-2">Complete Payment</h4>
              <p class="text-xs text-[#425466] leading-relaxed">Pay Copart invoice in full via wire, ePay, or debit. Copart will not release any lot until funds clear completely.</p>
            </div>
            <div class="mt-4 text-[11px] text-[#635bff] font-semibold bg-white p-2 rounded border border-[#e6e6e6]">Status: Paid in Full</div>
          </div>

          <!-- Step 2 -->
          <div class="bg-[#f8fafc] p-5 rounded-xl border border-[#e6e6e6] relative flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">2</div>
              <h4 class="font-bold text-[#0a2540] text-base mb-2">Get Gate PIN</h4>
              <p class="text-xs text-[#425466] leading-relaxed">Download your Gate Pass &amp; Buyer Release PIN from your Copart Member portal. Note if vehicle is in Sandston or Charles City.</p>
            </div>
            <div class="mt-4 text-[11px] text-[#635bff] font-semibold bg-white p-2 rounded border border-[#e6e6e6]">Need: Lot # &amp; PIN</div>
          </div>

          <!-- Step 3 -->
          <div class="bg-[#f8fafc] p-5 rounded-xl border border-[#e6e6e6] relative flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">3</div>
              <h4 class="font-bold text-[#0a2540] text-base mb-2">Book Neon</h4>
              <p class="text-xs text-[#425466] leading-relaxed">Submit your details to Neon Auto Transport. We assign a verified carrier and provide their MC/DOT numbers for Copart entry.</p>
            </div>
            <div class="mt-4 text-[11px] text-[#16a34a] font-semibold bg-white p-2 rounded border border-[#e6e6e6]">Dispatch Confirmed</div>
          </div>

          <!-- Step 4 -->
          <div class="bg-[#f8fafc] p-5 rounded-xl border border-[#e6e6e6] relative flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">4</div>
              <h4 class="font-bold text-[#0a2540] text-base mb-2">Carrier Pickup</h4>
              <p class="text-xs text-[#425466] leading-relaxed">Driver reserves app slot, conducts a Bill of Lading (BOL) inspection, and loads the vehicle via ramp, winch, or forklift.</p>
            </div>
            <div class="mt-4 text-[11px] text-[#635bff] font-semibold bg-white p-2 rounded border border-[#e6e6e6]">Loaded &amp; Insured</div>
          </div>

          <!-- Step 5 -->
          <div class="bg-[#f8fafc] p-5 rounded-xl border border-[#e6e6e6] relative flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">5</div>
              <h4 class="font-bold text-[#0a2540] text-base mb-2">Door Delivery</h4>
              <p class="text-xs text-[#425466] leading-relaxed">Direct delivery to your residential driveway, shop, dealership, or export port with live driver updates.</p>
            </div>
            <div class="mt-4 text-[11px] text-[#16a34a] font-semibold bg-white p-2 rounded border border-[#e6e6e6]">Delivered Safely</div>
          </div>
        </div>

        <div class="mt-10 text-center">
          <a href="/cost-calculator/" class="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold shadow-md">
            Calculate Your Copart Route Now &rarr;
          </a>
        </div>
      </section>

      <!-- 3. Pricing Matrix Table -->
      <section class="stripe-card bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-[#e6e6e6]">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <span class="text-[#635bff] text-xs font-black uppercase tracking-widest block mb-2">Transparent Freight Rates</span>
          <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">Copart Richmond Car Shipping Cost</h2>
          <p class="text-[#425466] mt-2 text-base">Estimated rates based on current diesel indices, distance, and vehicle operability.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-[#e6e6e6] mb-6 shadow-sm">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#0a2540] text-white">
                <th class="p-4 font-bold">Delivery Destination</th>
                <th class="p-4 font-bold">Distance</th>
                <th class="p-4 font-bold text-[#39FF14]">Running (Open)</th>
                <th class="p-4 font-bold text-[#00D1FF]">Non-Running (Winch)</th>
                <th class="p-4 font-bold">Transit Time</th>
                <th class="p-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e6e6e6] text-[#425466]">
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="p-4 font-semibold text-[#0a2540]">Washington DC / Northern VA</td>
                <td class="p-4">~100 mi</td>
                <td class="p-4 font-bold text-[#0a2540]">$250 – $400</td>
                <td class="p-4 font-bold text-[#4338ca]">$350 – $550</td>
                <td class="p-4">1 Day</td>
                <td class="p-4 text-center"><a href="/cost-calculator/" class="text-xs bg-[#0a2540] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#635bff] transition">Quote</a></td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition bg-[#f8fafc]/50">
                <td class="p-4 font-semibold text-[#0a2540]">Philadelphia, PA / New Jersey</td>
                <td class="p-4">~250 mi</td>
                <td class="p-4 font-bold text-[#0a2540]">$450 – $650</td>
                <td class="p-4 font-bold text-[#4338ca]">$600 – $850</td>
                <td class="p-4">1–2 Days</td>
                <td class="p-4 text-center"><a href="/cost-calculator/" class="text-xs bg-[#0a2540] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#635bff] transition">Quote</a></td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="p-4 font-semibold text-[#0a2540]">New York / New England</td>
                <td class="p-4">~350–500 mi</td>
                <td class="p-4 font-bold text-[#0a2540]">$550 – $800</td>
                <td class="p-4 font-bold text-[#4338ca]">$750 – $1,050</td>
                <td class="p-4">2–3 Days</td>
                <td class="p-4 text-center"><a href="/cost-calculator/" class="text-xs bg-[#0a2540] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#635bff] transition">Quote</a></td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition bg-[#f8fafc]/50">
                <td class="p-4 font-semibold text-[#0a2540]">Atlanta, GA / Southeast</td>
                <td class="p-4">~530 mi</td>
                <td class="p-4 font-bold text-[#0a2540]">$600 – $850</td>
                <td class="p-4 font-bold text-[#4338ca]">$800 – $1,100</td>
                <td class="p-4">2–3 Days</td>
                <td class="p-4 text-center"><a href="/cost-calculator/" class="text-xs bg-[#0a2540] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#635bff] transition">Quote</a></td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="p-4 font-semibold text-[#0a2540]">Miami / Orlando, FL</td>
                <td class="p-4">~850–950 mi</td>
                <td class="p-4 font-bold text-[#0a2540]">$750 – $1,100</td>
                <td class="p-4 font-bold text-[#4338ca]">$950 – $1,400</td>
                <td class="p-4">3–4 Days</td>
                <td class="p-4 text-center"><a href="/cost-calculator/" class="text-xs bg-[#0a2540] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#635bff] transition">Quote</a></td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition bg-[#f8fafc]/50">
                <td class="p-4 font-semibold text-[#0a2540]">Dallas / Houston, TX</td>
                <td class="p-4">~1,300 mi</td>
                <td class="p-4 font-bold text-[#0a2540]">$950 – $1,350</td>
                <td class="p-4 font-bold text-[#4338ca]">$1,250 – $1,750</td>
                <td class="p-4">4–6 Days</td>
                <td class="p-4 text-center"><a href="/cost-calculator/" class="text-xs bg-[#0a2540] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#635bff] transition">Quote</a></td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="p-4 font-semibold text-[#0a2540]">Los Angeles, CA / West Coast</td>
                <td class="p-4">~2,650 mi</td>
                <td class="p-4 font-bold text-[#0a2540]">$1,350 – $1,800</td>
                <td class="p-4 font-bold text-[#4338ca]">$1,750 – $2,300</td>
                <td class="p-4">7–9 Days</td>
                <td class="p-4 text-center"><a href="/cost-calculator/" class="text-xs bg-[#0a2540] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#635bff] transition">Quote</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-[#8ba3ba]">Note: Copart charges an additional $50–$75 gate/release loading fee paid directly to the auction yard. Severely crushed vehicles requiring crane or flatbed extraction are quoted per project.</p>
      </section>

      <!-- 4. Richmond Yard Information (Side-by-Side Cards) -->
      <section class="stripe-card bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-[#e6e6e6]">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <span class="text-[#635bff] text-xs font-black uppercase tracking-widest block mb-2">Yard Directory</span>
          <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">Copart Richmond Yard Locations &amp; Guidelines</h2>
          <p class="text-[#425466] mt-2 text-base">Check your purchase invoice to verify which specific Richmond-area facility holds your lot.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Yard 1 -->
          <div class="p-6 lg:p-8 rounded-2xl border-2 border-[#00D1FF]/30 bg-[#f8fafc] relative flex flex-col justify-between hover:shadow-lg transition">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-[#0a2540] text-[#39FF14] text-xs font-bold uppercase tracking-wide">Main Facility</span>
                <span class="text-xs text-[#425466] font-semibold">Yard # 42</span>
              </div>
              <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Copart – Richmond (Sandston)</h3>
              <p class="text-sm text-[#425466] mb-3 leading-relaxed">
                <strong>Address:</strong><br>
                5701 Whiteside Rd, Sandston, VA 23150
              </p>
              <p class="text-sm text-[#425466] mb-3">
                <strong>Phone:</strong> <a href="tel:8043281023" class="text-[#635bff] font-bold hover:underline">(804) 328-1023</a>
              </p>
              <p class="text-sm text-[#425466] mb-4">
                <strong>Operating Hours:</strong><br>
                Monday – Friday: 8:00 AM – 5:00 PM EST<br>
                <span class="text-xs text-[#8ba3ba]">Gate pickup cutoff is 4:30 PM sharp.</span>
              </p>
            </div>
            <div class="pt-4 border-t border-[#e6e6e6] flex items-center justify-between">
              <a href="https://maps.google.com/?q=5701+Whiteside+Rd,+Sandston,+VA+23150" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-[#635bff] hover:underline flex items-center gap-1">
                View on Google Maps &rarr;
              </a>
              <a href="tel:8043281023" class="text-xs bg-white px-3 py-1.5 rounded-full border border-[#e6e6e6] font-bold text-[#0a2540] hover:bg-[#f0f5fa] transition">Call Yard</a>
            </div>
          </div>

          <!-- Yard 2 -->
          <div class="p-6 lg:p-8 rounded-2xl border-2 border-[#635bff]/30 bg-[#f8fafc] relative flex flex-col justify-between hover:shadow-lg transition">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-[#0a2540] text-[#00D1FF] text-xs font-bold uppercase tracking-wide">East Facility</span>
                <span class="text-xs text-[#425466] font-semibold">Yard # 134</span>
              </div>
              <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Copart – Richmond East (Charles City)</h3>
              <p class="text-sm text-[#425466] mb-3 leading-relaxed">
                <strong>Address:</strong><br>
                6300 Chambers Road, Charles City, VA 23030
              </p>
              <p class="text-sm text-[#425466] mb-3">
                <strong>Phone:</strong> <a href="tel:8048299160" class="text-[#635bff] font-bold hover:underline">(804) 829-9160</a>
              </p>
              <p class="text-sm text-[#425466] mb-4">
                <strong>Operating Hours:</strong><br>
                Monday – Friday: 8:00 AM – 5:00 PM EST<br>
                <span class="text-xs text-[#8ba3ba]">Heavy front-loader equipment on site.</span>
              </p>
            </div>
            <div class="pt-4 border-t border-[#e6e6e6] flex items-center justify-between">
              <a href="https://maps.google.com/?q=6300+Chambers+Road,+Charles+City,+VA+23030" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-[#635bff] hover:underline flex items-center gap-1">
                View on Google Maps &rarr;
              </a>
              <a href="tel:8048299160" class="text-xs bg-white px-3 py-1.5 rounded-full border border-[#e6e6e6] font-bold text-[#0a2540] hover:bg-[#f0f5fa] transition">Call Yard</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Vehicle Condition Breakdown Cards -->
      <section class="stripe-card bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-[#e6e6e6]">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <span class="text-[#635bff] text-xs font-black uppercase tracking-widest block mb-2">Equipment Matching</span>
          <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">Handling Every Vehicle Condition</h2>
          <p class="text-[#425466] mt-2 text-base">We assign the correct carrier equipment based on your vehicle's physical state.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
            <h4 class="font-bold text-lg text-[#0a2540] mb-2 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#16a34a]"></span>
              Runs &amp; Drives
            </h4>
            <p class="text-xs text-[#425466] leading-relaxed mb-3">Vehicle starts under its own power and steers properly. Loaded directly onto open multi-car trailers via standard steel ramps.</p>
            <span class="text-[11px] font-semibold text-[#16a34a] bg-[#dcfce7] px-2.5 py-1 rounded-full">Standard Open Haul</span>
          </div>

          <div class="p-6 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
            <h4 class="font-bold text-lg text-[#0a2540] mb-2 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#ca8a04]"></span>
              Rolls &amp; Steers (Inoperable)
            </h4>
            <p class="text-xs text-[#425466] leading-relaxed mb-3">Engine does not start or has mechanical failure, but tires hold air and steering functions. Pulled onto trailer via 12,000 lb electric winch.</p>
            <span class="text-[11px] font-semibold text-[#ca8a04] bg-[#fef3c7] px-2.5 py-1 rounded-full">Winch Loading (+ $100–$250)</span>
          </div>

          <div class="p-6 rounded-xl bg-[#f8fafc] border border-[#e6e6e6]">
            <h4 class="font-bold text-lg text-[#0a2540] mb-2 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#e11d48]"></span>
              Severe Damage / Missing Wheels
            </h4>
            <p class="text-xs text-[#425466] leading-relaxed mb-3">Broken axles, rollover frame damage, or missing wheel hubs. Loaded by Copart heavy yard forklift onto dedicated flatbed transport.</p>
            <span class="text-[11px] font-semibold text-[#e11d48] bg-[#ffe4e6] px-2.5 py-1 rounded-full">Flatbed / Heavy Haul</span>
          </div>
        </div>
      </section>

      <!-- 6. Service Areas Grid -->
      <section class="stripe-card bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-[#e6e6e6]">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <span class="text-[#635bff] text-xs font-black uppercase tracking-widest block mb-2">Nationwide Coverage</span>
          <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">Delivery Routes from Copart Richmond</h2>
          <p class="text-[#425466] mt-2 text-base">Direct door-to-door carrier routes connecting Richmond, VA to all 50 U.S. states.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6]">
            <h4 class="font-bold text-base text-[#0a2540] mb-2 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              Major Metro Hubs
            </h4>
            <p class="text-xs text-[#425466] leading-relaxed">
              New York City, Philadelphia, Washington DC, Baltimore, Charlotte, Atlanta, Miami, Orlando, Chicago, Dallas, Houston, Phoenix, Los Angeles.
            </p>
          </div>

          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6]">
            <h4 class="font-bold text-base text-[#0a2540] mb-2 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              Regional East Coast
            </h4>
            <p class="text-xs text-[#425466] leading-relaxed">
              Fast 24–48 hour direct routes throughout Virginia, North Carolina, Maryland, Pennsylvania, Delaware, West Virginia, and South Carolina.
            </p>
          </div>

          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6]">
            <h4 class="font-bold text-base text-[#0a2540] mb-2 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#ca8a04]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              Ports &amp; Export Terminals
            </h4>
            <p class="text-xs text-[#425466] leading-relaxed">
              Direct delivery to Port of Baltimore, Port of NY/NJ, Jacksonville Port (JAXPORT), Savannah Port, and domestic dealer auto auctions.
            </p>
          </div>
        </div>
      </section>

      <!-- 7. Interactive FAQs Section -->
      <section class="stripe-card bg-[#f8fafc] border border-[#e6e6e6] p-8 lg:p-12 rounded-2xl shadow-xl" itemscope itemtype="https://schema.org/FAQPage">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <span class="text-[#635bff] text-xs font-black uppercase tracking-widest block mb-2">Got Questions?</span>
          <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">Frequently Asked Questions</h2>
          <p class="text-[#425466] mt-2 text-base">Everything you need to know about picking up and transporting vehicles from Copart Richmond.</p>
        </div>
        
        <div class="space-y-4 max-w-4xl mx-auto">
          <!-- FAQ 1 -->
          <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md bg-white/70" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
            <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
              <span itemprop="name">How do I ship a car from Copart Richmond VA?</span>
              <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </summary>
            <div class="mt-4 text-[#425466] text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">To ship a car from Copart Richmond, first pay your invoice in full. Once payment clears, retrieve your gate pass and lot number from your Copart portal. Contact Neon Auto Transport with your vehicle condition and delivery address. Our team assigns an authorized carrier who schedules a pickup via the Copart Transportation App and delivers your vehicle door-to-door.</p>
            </div>
          </details>

          <!-- FAQ 2 -->
          <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md bg-white/70" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
              <span itemprop="name">How much does it cost to ship a car from Copart Richmond?</span>
              <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </summary>
            <div class="mt-4 text-[#425466] text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Costs vary based on distance and vehicle condition. Standard open transport ranges from $300 to $1,500 for most continental U.S. routes. Non-running vehicles requiring winch loading add $100–$250, while heavy-duty flatbed or long-haul transport ranges from $800 to $4,000+. Copart also charges a standard $50–$75 gate/loading fee.</p>
            </div>
          </details>

          <!-- FAQ 3 -->
          <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md bg-white/70" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
              <span itemprop="name">How fast can you pick up from Copart Richmond?</span>
              <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </summary>
            <div class="mt-4 text-[#425466] text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">We prioritize same-day or 24–48 hour dispatch once payment has cleared and the gate pass is generated. Quick pickup prevents you from incurring Copart's daily storage charges ($30–$50+/day) after the free storage window expires.</p>
            </div>
          </details>

          <!-- FAQ 4 -->
          <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md bg-white/70" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
              <span itemprop="name">Can you ship non-running cars from Copart Richmond?</span>
              <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </summary>
            <div class="mt-4 text-[#425466] text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. Over 60% of Copart auction vehicles are salvage or inoperable. We dispatch winch-equipped trucks for vehicles that roll and steer, and arrange forklift or yard crane assistance at Copart Richmond for units with broken axles, frame damage, or missing wheels.</p>
            </div>
          </details>

          <!-- FAQ 5 -->
          <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md bg-white/70" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
              <span itemprop="name">Do I need a broker to ship from Copart Richmond?</span>
              <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </summary>
            <div class="mt-4 text-[#425466] text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">While not legally mandatory, partnering with an experienced auto transport broker like Neon Auto Transport ensures access to Copart-vetted carriers, manages gate clearance paperwork, avoids expensive yard storage penalties, and provides full cargo insurance oversight.</p>
            </div>
          </details>

          <!-- FAQ 6 -->
          <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md bg-white/70" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
              <span itemprop="name">What documents do I need for Copart Richmond pickup?</span>
              <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </summary>
            <div class="mt-4 text-[#425466] text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Your assigned carrier requires your Copart Buyer Number, Lot Number, and Gate Pass / Release PIN. The carrier will provide their DOT/MC credentials and driver ID during gate check-in at the Sandston or Charles City yard.</p>
            </div>
          </details>

          <!-- FAQ 7 -->
          <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md bg-white/70" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
              <span itemprop="name">Can you ship multiple vehicles from Copart Richmond at once?</span>
              <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </summary>
            <div class="mt-4 text-[#425466] text-sm leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes. We frequently arrange multi-car loads (2 to 9 vehicles) for auto dealers, body shops, and vehicle exporters. Consolidating lots into single-carrier transport reduces total freight costs by 10%–20%.</p>
            </div>
          </details>
        </div>
      </section>

      <!-- 8. Pre-Footer High-Impact Conversion Banner -->
      <section class="stripe-gradient-bg py-16 px-6 lg:px-12 rounded-3xl text-center text-white relative shadow-2xl overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#103056] to-[#0a2540] opacity-90"></div>
        <div class="relative z-10 max-w-3xl mx-auto">
          <span class="inline-block px-3 py-1 rounded-full bg-[#39FF14]/20 border border-[#39FF14]/50 text-[#39FF14] text-xs font-bold uppercase tracking-wider mb-4">Fast Dispatch Ready</span>
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-white">Get a Free Quote for Copart Richmond Car Shipping</h2>
          <p class="text-base sm:text-lg text-[rgba(255,255,255,0.85)] mb-8">Ready to transport your vehicle from Sandston or Charles City? Lock in your rate today with $0 upfront deposit.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/cost-calculator/" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]">
              Instant Online Quote &rarr;
            </a>
            <a href="tel:5715767711" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> 
              Call (571) 576-7711
            </a>
          </div>
        </div>
      </section>

      <!-- Author / Review Byline -->
      <div class="text-xs text-center text-[#8ba3ba] pt-4">
        Published by Neon Auto Transport &bull; FMCSA Licensed (MC #1703787 | USDOT #4355879) &bull; Verified Review by Director of Operations &bull; Updated September 2026
      </div>

    </div>
  </main>`;

html = html.replace(
  /<main>[\s\S]*?<\/main>/,
  newMain
);

// Write to both destinations
const outputDir = path.join(__dirname, 'copart-richmond-va-car-shipping');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'copart-richmond-va-car-shipping.html'), html, 'utf8');

console.log('✅ Generated ultra-clean page: copart-richmond-va-car-shipping/index.html & copart-richmond-va-car-shipping.html');

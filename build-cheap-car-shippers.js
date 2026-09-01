import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read template from services/open-auto-transport.html
const templatePath = path.join(__dirname, 'services', 'open-auto-transport.html');
let html = fs.readFileSync(templatePath, 'utf8');

// ============================================================
// 1. HEAD SEO TAGS & STRUCTURED MULTI-ENTITY SCHEMA
// ============================================================

// Title
html = html.replace(
  /<title>[^<]*<\/title>/,
  '<title>Cheap Car Shippers | Affordable Auto Transport | Neon Auto Transport</title>'
);

// Meta description
html = html.replace(
  /<meta name="description" content="[^"]*">/,
  '<meta name="description" content="Looking for cheap car shippers? Neon Auto Transport finds affordable, insured auto transport with open carriers, flexible dates, and transparent quotes. Get a free rate.">'
);

// Canonical
html = html.replace(
  /<link rel="canonical" href="[^"]*"\s*\/?>/,
  '<link rel="canonical" href="https://neonautotransport.com/cheap-car-shippers/">'
);

// Alternate markdown
if (html.includes('<link rel="alternate" type="text/markdown"')) {
  html = html.replace(
    /<link rel="alternate" type="text\/markdown" href="[^"]*">/,
    '<link rel="alternate" type="text/markdown" href="https://neonautotransport.com/cheap-car-shippers.md">'
  );
} else {
  html = html.replace(
    '</head>',
    '  <link rel="alternate" type="text/markdown" href="https://neonautotransport.com/cheap-car-shippers.md">\n</head>'
  );
}

// Open Graph
html = html.replace(
  /<meta property="og:url" content="[^"]*"\s*\/?>/,
  '<meta property="og:url" content="https://neonautotransport.com/cheap-car-shippers/"/>'
);

html = html.replace(
  /<meta property="og:title" content="[^"]*">/,
  '<meta property="og:title" content="Cheap Car Shippers | Affordable Auto Transport | Neon Auto Transport">'
);

html = html.replace(
  /<meta property="og:description" content="[^"]*">/,
  '<meta property="og:description" content="Looking for cheap car shippers? Neon Auto Transport finds affordable, insured auto transport with open carriers, flexible dates, and transparent quotes. Get a free rate.">'
);

// Twitter
html = html.replace(
  /<meta name="twitter:title" content="[^"]*">/,
  '<meta name="twitter:title" content="Cheap Car Shippers | Affordable Auto Transport | Neon Auto Transport">'
);

html = html.replace(
  /<meta name="twitter:description" content="[^"]*">/,
  '<meta name="twitter:description" content="Looking for cheap car shippers? Neon Auto Transport finds affordable, insured auto transport with open carriers, flexible dates, and transparent quotes. Get a free rate.">'
);

// Add custom CSS
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
      "priceRange": "$$",
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
      "@id": "https://neonautotransport.com/cheap-car-shippers/#service",
      "serviceType": "Cheap Car Shippers",
      "name": "Cheap Car Shippers & Affordable Auto Transport",
      "provider": {
        "@id": "https://neonautotransport.com/#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Affordable, insured auto transport across the U.S. using open carriers, flexible scheduling, and backhaul lanes to find cheap car shipping rates.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cheap Car Shipping Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cheap open carrier auto transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Discounted backhaul lane shipping"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Flexible-date low-cost car shipping"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://neonautotransport.com/cheap-car-shippers/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the cheapest car shippers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cheapest car shippers in 2026 are typically brokers and carriers that specialize in open transport, flexible scheduling, and backhaul lanes. National averages for open transport range from about $400–$700 for short moves under 500 miles up to $1,100–$1,800+ for cross-country shipments. Companies that focus on price transparency, low deposits, and high carrier competition tend to offer the best cheap rates."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car cheaply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a standard sedan on an open carrier, cheap but realistic 2026 prices are roughly: $400–$700 for 0–500 miles, $600–$1,100 for 500–1,000 miles, $800–$1,500 for 1,000–2,000 miles, and $1,100–$1,800+ for 2,500+ mile cross-country moves."
          }
        },
        {
          "@type": "Question",
          "name": "Are cheap car shippers legit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many cheap car shippers are fully legitimate, FMCSA-licensed, and insured. The key is to verify MC and USDOT numbers, written quotes, reasonable deposits, and real customer reviews. Neon Auto Transport is an FMCSA-licensed broker (MC #1703787 | USDOT #4355879) that focuses on affordable, insured auto transport."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cheapest way to transport a vehicle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cheapest way to transport a vehicle is usually open carrier transport, flexible pickup and delivery dates, off-peak season shipping, and terminal-to-terminal options where available. Combining these methods can reduce your cost by hundreds of dollars compared to expedited, door-to-door, enclosed shipping in peak season."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get cheap car shipping quotes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To get cheap car shipping quotes: gather your route details, request quotes from reputable brokers, ask about open transport and flexible pickup windows, and compare all-in pricing with zero upfront deposit. Neon Auto Transport scans multiple carriers to find the best rate."
          }
        },
        {
          "@type": "Question",
          "name": "Is it cheaper to drive or ship my car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For long distances (1,000+ miles), shipping is often cheaper than driving when factoring in fuel, lodging, meals, tolls, wear-and-tear, and lost work time. Cheap car shipping typically costs about the same as a long road trip with zero fatigue."
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
          "name": "Cheap Car Shippers",
          "item": "https://neonautotransport.com/cheap-car-shippers/"
        }
      ]
    }
  ]
}
</script>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
html = html.replace('</head>', newSchema + '\n</head>');

// ============================================================
// 2. MAIN CONTENT
// ============================================================
const newMain = `<main class="bg-white min-h-screen text-[#0a2540]">
    
    <!-- Hero Section -->
    <section class="border-b border-slate-200 bg-[#f8fafc] pt-32 pb-20 lg:pt-36 lg:pb-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 flex-wrap">
          <a href="https://neonautotransport.com/" class="hover:text-[#635bff] transition-colors">Home</a>
          <span class="text-slate-300">/</span>
          <span class="text-slate-900 font-semibold">Cheap Car Shippers</span>
        </nav>

        <!-- Status Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow">
          <span class="w-2 h-2 rounded-full bg-[#16a34a]"></span>
          Affordable Auto Transport &bull; Live Carrier Rates &bull; All 50 States
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight leading-tight mb-8">
          Cheap Car Shippers
        </h1>

        <p class="text-base sm:text-lg text-[#425466] leading-relaxed mb-10 max-w-3xl font-medium">
          Neon Auto Transport helps you find cheap car shippers that are safe, insured, and reliable. We compare live carrier rates, leverage backhaul lanes, and match you with FMCSA-licensed haulers so you can move your vehicle for less—without risky "too cheap" scams.
        </p>

        <!-- CTA Buttons Box -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
          <a href="/cost-calculator/" style="background-color: #39FF14 !important; color: #0a2540 !important; font-weight: 900 !important; text-decoration: none !important; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;" class="px-8 py-4 rounded-xl text-base hover:opacity-95 transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:-translate-y-0.5 text-center">
            <span>Get a Cheap Quote Now</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a href="tel:5715767711" style="background-color: #ffffff !important; color: #0a2540 !important; font-weight: 800 !important; text-decoration: none !important; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;" class="px-8 py-4 rounded-xl text-base border border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center">
            <svg class="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            <span>Call (571) 576-7711</span>
          </a>
        </div>

        <!-- Trust Features Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>$0 Upfront Deposit</span>
          </div>
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>$500K Cargo Insurance</span>
          </div>
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>Discounted Backhauls</span>
          </div>
          <div class="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold transition-all duration-300 hover:shadow-sm hover:border-slate-300">
            <svg class="w-4 h-4 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>FMCSA MC #1703787</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Content Container -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 space-y-24 lg:space-y-32">
      
      <!-- 1. What Cheap Car Shippers Means -->
      <section class="space-y-6" aria-label="What Cheap Really Means">
        
        <!-- AEO Snippet Callout -->
        <div class="bg-white border border-slate-200 border-l-4 border-l-[#635bff] rounded-2xl p-6 shadow-sm">
          <h2 class="text-base sm:text-lg font-bold text-[#0a2540] mb-2 flex items-center gap-2">
            <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Quick Answer: What are the cheapest car shippers?
          </h2>
          <p class="text-sm text-slate-700 leading-relaxed font-medium">
            The cheapest car shippers in 2026 are licensed brokers and carriers that optimize open carrier freight, backhaul return lanes, and flexible 3–7 day dispatch windows. Typical cheap rates range from <strong>$400–$700</strong> for regional moves under 500 miles, up to <strong>$1,100–$1,800+</strong> for nationwide cross-country transit. Legitimate cheap shippers never demand full upfront payment and maintain active FMCSA cargo insurance.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl card-hover-indigo" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
            💡 Industry Truth
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] mb-4">What “Cheap Car Shippers” Really Means in 2026</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed mb-6 font-medium">
            "Cheap" in auto transport doesn’t mean the lowest fake dollar amount advertised on a shady lead-generation website. It means the <strong>lowest realistic price</strong> that an active, FMCSA-licensed carrier will actually accept to transport your car safely.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 my-6">
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 class="font-bold text-[#0a2540] text-base mb-2">Typical Open Transport Ranges</h3>
              <ul class="text-xs sm:text-sm text-slate-600 space-y-1.5 font-medium">
                <li>&bull; <strong>Under 500 miles:</strong> $400 – $700</li>
                <li>&bull; <strong>500 – 1,000 miles:</strong> $600 – $1,100</li>
                <li>&bull; <strong>1,000 – 2,000 miles:</strong> $800 – $1,500</li>
                <li>&bull; <strong>2,500+ miles (Coast-to-Coast):</strong> $1,100 – $1,800+</li>
              </ul>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 class="font-bold text-[#0a2540] text-base mb-2">Legitimate Cheap Shippers Must Have:</h3>
              <ul class="text-xs sm:text-sm text-slate-600 space-y-1.5 font-medium">
                <li>&bull; Active FMCSA MC &amp; USDOT license verification</li>
                <li>&bull; Full $250,000 to $500,000+ cargo insurance coverage</li>
                <li>&bull; Written transparent quotes with zero hidden gate fees</li>
                <li>&bull; $0 upfront deposit policy prior to carrier dispatch</li>
              </ul>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-500 font-medium pt-4 border-t border-[#e6e6e6]">
            Neon Auto Transport operates as an FMCSA-licensed broker (MC #1703787 | USDOT #4355879) and works exclusively with vetted, insured carriers to keep your shipment affordable and completely protected.
          </p>
        </div>

      </section>

      <!-- 2. How Much Do Cheap Car Shippers Cost? -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">2026 Rate Benchmarks</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">How Much Do Cheap Car Shippers Cost?</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Estimated cheap car shipping rates based on mileage, per-mile averages, and actual interstate routes.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl card-hover-indigo" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
          
          <h3 class="text-xl font-bold text-[#0a2540] mb-4">Average Costs by Distance (Open Transport)</h3>
          
          <div class="overflow-x-auto rounded-xl border border-slate-200 mb-6 shadow-sm">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-slate-100 text-[#0a2540] border-b border-slate-200">
                  <th scope="col" class="p-4 font-bold">Distance</th>
                  <th scope="col" class="p-4 font-bold">Typical Cost (Open)</th>
                  <th scope="col" class="p-4 font-bold">Approx. Price Per Mile</th>
                  <th scope="col" class="p-4 font-bold">Transit Time</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">0 – 500 miles</td>
                  <td class="p-4 font-bold text-slate-900">$400 – $700</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$1.20 – $2.10/mi</td>
                  <td class="p-4 text-slate-600">1–2 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">500 – 1,000 miles</td>
                  <td class="p-4 font-bold text-slate-900">$600 – $1,100</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$0.80 – $1.15/mi</td>
                  <td class="p-4 text-slate-600">2–4 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">1,000 – 2,000 miles</td>
                  <td class="p-4 font-bold text-slate-900">$800 – $1,500</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$0.60 – $0.80/mi</td>
                  <td class="p-4 text-slate-600">4–6 Days</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-900">2,500+ miles (Coast-to-Coast)</td>
                  <td class="p-4 font-bold text-slate-900">$1,100 – $1,800+</td>
                  <td class="p-4 font-semibold text-[#4338ca]">$0.45 – $0.60/mi</td>
                  <td class="p-4 text-slate-600">6–9 Days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-bold text-[#0a2540] mb-4 mt-8">Example Route Prices (2026 Estimates)</h3>
          
          <div class="grid sm:grid-cols-2 gap-4 mb-6">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p class="font-bold text-slate-900 text-sm">New York &rarr; Florida (~1,100 mi)</p>
                <p class="text-xs text-slate-500">Popular East Coast Snowbird Lane</p>
              </div>
              <span class="font-extrabold text-[#16a34a] text-base">$750 – $950</span>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p class="font-bold text-slate-900 text-sm">California &rarr; Texas (~1,400 mi)</p>
                <p class="text-xs text-slate-500">High-Volume Southern Corridor</p>
              </div>
              <span class="font-extrabold text-[#16a34a] text-base">$850 – $1,100</span>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p class="font-bold text-slate-900 text-sm">Chicago &rarr; Los Angeles (~2,000 mi)</p>
                <p class="text-xs text-slate-500">Midwest to West Coast Route</p>
              </div>
              <span class="font-extrabold text-[#16a34a] text-base">$950 – $1,300</span>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p class="font-bold text-slate-900 text-sm">Boston &rarr; Miami (~1,500 mi)</p>
                <p class="text-xs text-slate-500">I-95 Direct Interstate Haul</p>
              </div>
              <span class="font-extrabold text-[#16a34a] text-base">$900 – $1,200</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e6e6e6]">
            <p class="text-xs text-slate-500">Larger vehicles (trucks, SUVs, vans) and inoperable cars add $100–$300 for trailer space or winch equipment.</p>
            <a href="/cost-calculator/" style="background-color: #ffc72c; color: #0a2540; font-weight: 900; text-decoration: none;" class="px-5 py-2.5 hover:bg-[#e0b020] text-xs rounded-xl transition shadow-sm">
              Calculate Exact Route Rate →
            </a>
          </div>
        </div>
      </section>

      <!-- 3. How Neon Finds Cheap Rates -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Our Advantage</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">How Neon Auto Transport Finds Cheap Rates</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            We don’t just throw out a fake lowball quote and pray someone takes it. Neon leverages logistics technology, return hauls, and market relationships:
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          
          <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
                📊 Strategy 01
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-2">Live Carrier Rate Comparison</h3>
              <p class="text-sm text-[#425466] leading-relaxed font-medium mb-4">
                We quote your shipment against real-time load board bids from thousands of FMCSA-verified carriers. We filter out suspiciously low bids that lead to bait-and-switch demands and secure realistic low-end rates.
              </p>
            </div>
            <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#4338ca]">
              ✓ Eliminates bait-and-switch broker pricing
            </div>
          </div>

          <div class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full mb-4">
                🚛 Strategy 02
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-2">Backhaul Lane Matching</h3>
              <p class="text-sm text-[#425466] leading-relaxed font-medium mb-4">
                Carriers hate driving empty trailers on return trips (backhauls). We match your vehicle to haulers heading home who discount remaining trailer spots by 15%–30% just to fill capacity.
              </p>
            </div>
            <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#0891b2]">
              ✓ Deep discounts on return freight routes
            </div>
          </div>

          <div class="bg-white p-8 rounded-3xl card-hover-green flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full mb-4">
                🗓️ Strategy 03
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-2">Flexible Scheduling &amp; Off-Peak Timing</h3>
              <p class="text-sm text-[#425466] leading-relaxed font-medium mb-4">
                Providing a 3-to-7 day pickup window allows drivers to fit your car onto scheduled runs without charging "expedited" or "guaranteed date" premiums, saving you $100–$300+.
              </p>
            </div>
            <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#15803d]">
              ✓ $100–$300 savings on flexible windows
            </div>
          </div>

          <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
                💳 Strategy 04
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-2">$0 Upfront Deposit Model</h3>
              <p class="text-sm text-[#425466] leading-relaxed font-medium mb-4">
                Unlike scam brokers who demand $200 non-refundable deposits upfront, Neon charges $0 until a vetted carrier is assigned and confirmed for pickup.
              </p>
            </div>
            <div class="pt-4 border-t border-[#e6e6e6] text-xs font-semibold text-[#4338ca]">
              ✓ 100% zero-risk pricing transparency
            </div>
          </div>

        </div>
      </section>

      <!-- 4. Cheap Car Shippers vs Scams -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Consumer Protection</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">Cheap Car Shippers vs Scams: How to Stay Safe</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Many shippers searching for "cheap car shippers" fall into bait-and-switch traps. Here is how to distinguish legitimate low-cost haulers from scams:
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          
          <!-- Red Flags -->
          <div class="bg-white p-8 rounded-3xl border-2 border-red-200 shadow-sm" style="background:#ffffff; border-radius:1.5rem;">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-4">
              🚩 Red Flags (Avoid These)
            </div>
            <h3 class="text-xl font-bold text-red-900 mb-4">Signs of "Too Cheap" Scams</h3>
            <ul class="space-y-3 text-sm text-slate-700 font-medium">
              <li class="flex items-start gap-2">
                <span class="text-red-500 font-bold">✗</span>
                <span><strong>No FMCSA Verification:</strong> Cannot provide a valid MC or USDOT registration number.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 font-bold">✗</span>
                <span><strong>Heavy Upfront Deposits:</strong> Demands $200–$500 upfront before assigning any driver.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 font-bold">✗</span>
                <span><strong>Unrealistic Quotes:</strong> Quotes $400 for a 2,000-mile haul (no legitimate driver takes this rate).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 font-bold">✗</span>
                <span><strong>No Written Contract:</strong> Refuses to provide an all-inclusive binding rate agreement.</span>
              </li>
            </ul>
          </div>

          <!-- Green Flags -->
          <div class="bg-white p-8 rounded-3xl border-2 border-[#16a34a]/30 shadow-sm" style="background:#ffffff; border-radius:1.5rem;">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full mb-4">
              ✅ Green Flags (Legit Cheap Shippers)
            </div>
            <h3 class="text-xl font-bold text-[#0a2540] mb-4">Signs of Trustworthy Low-Cost Shippers</h3>
            <ul class="space-y-3 text-sm text-slate-700 font-medium">
              <li class="flex items-start gap-2">
                <span class="text-[#16a34a] font-bold">✓</span>
                <span><strong>Verifiable License:</strong> Transparently publishes FMCSA credentials (e.g. Neon MC #1703787).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#16a34a] font-bold">✓</span>
                <span><strong>$0 Upfront Deposit:</strong> Only charges payment once carrier credentials and dates are locked.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#16a34a] font-bold">✓</span>
                <span><strong>Active Cargo Insurance:</strong> Every driver carries $250,000 to $500,000 in cargo liability.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#16a34a] font-bold">✓</span>
                <span><strong>Real Verified Reviews:</strong> 4.9⭐ Google rating with real customer route feedback.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <!-- 5. Cheapest Ways to Ship a Car in 2026 -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Cost Optimization</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">Cheapest Ways to Ship a Car in 2026</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Use these proven methods to get the lowest possible rate on any auto transport route:
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <div class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
                🚗 Method 01
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Choose Open Carrier</h3>
              <p class="text-xs font-bold text-[#4338ca] mb-3">Save 30% – 50% vs Enclosed</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                <a href="/services/open-auto-transport/" class="text-[#4338ca] font-bold underline">Open car transport</a> is the industry standard for sedans, SUVs, and trucks. It moves 90%+ of all U.S. cars safely at the lowest price.
              </p>
            </div>
            <a href="/cost-calculator/" style="background-color: #f0f5fa; color: #0a2540; font-weight: 700; text-decoration: none;" class="px-5 py-2.5 hover:bg-[#0a2540] hover:text-white font-bold text-xs rounded-xl transition text-center">
              Get Open Rate →
            </a>
          </div>

          <div class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full mb-4">
                📅 Method 02
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Be Flexible on Dates</h3>
              <p class="text-xs font-bold text-[#0891b2] mb-3">Save $100 – $300 on Rush Fees</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Allowing a 3-to-7 day pickup window lets carriers optimize their trailer loads without charging expedited rate premiums.
              </p>
            </div>
            <a href="/cost-calculator/" style="background-color: #f0f5fa; color: #0a2540; font-weight: 700; text-decoration: none;" class="px-5 py-2.5 hover:bg-[#0a2540] hover:text-white font-bold text-xs rounded-xl transition text-center">
              Compare Dates →
            </a>
          </div>

          <div class="bg-white p-8 rounded-3xl card-hover-green flex flex-col justify-between" style="background:#ffffff; border:1px solid #e6e6e6; border-radius:1.5rem;">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-bold rounded-full mb-4">
                🍂 Method 03
              </div>
              <h3 class="text-2xl font-black text-[#0a2540] mb-1">Ship in Off-Peak Months</h3>
              <p class="text-xs font-bold text-[#15803d] mb-3">Avoid Summer &amp; Holiday Spikes</p>
              <p class="text-sm text-[#425466] leading-relaxed mb-6 font-medium">
                Shipping in fall (Sep–Nov) or early spring (Feb–Apr) avoids summer rush and winter snowbird surcharges, saving 15%–25%.
              </p>
            </div>
            <a href="/cheapest-way-to-ship-a-car/" style="background-color: #f0f5fa; color: #0a2540; font-weight: 700; text-decoration: none;" class="px-5 py-2.5 hover:bg-[#0a2540] hover:text-white font-bold text-xs rounded-xl transition text-center">
              Savings Guide →
            </a>
          </div>

        </div>
      </section>

      <!-- 6. FAQ Section -->
      <section class="pt-4" id="faq" itemscope itemtype="https://schema.org/FAQPage">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#635bff] text-xs font-bold uppercase tracking-wider block mb-2">Got Questions?</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight mb-3">
            Frequently Asked Questions About Cheap Car Shippers
          </h2>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Direct answers to the most common questions regarding low-cost, budget, and affordable auto transport.
          </p>
        </div>
        
        <div class="space-y-4">
          
          <!-- Q1 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">What are the cheapest car shippers?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">The cheapest car shippers in 2026 are typically brokers and carriers that specialize in open transport, flexible scheduling, and backhaul lanes. National averages for open transport range from about <strong>$400–$700</strong> for short moves under 500 miles up to <strong>$1,100–$1,800+</strong> for cross-country shipments. Companies that focus on price transparency, low deposits, and high carrier competition tend to offer the best cheap rates.</p>
            </div>
          </details>

          <!-- Q2 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How much does it cost to ship a car cheaply?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">For a standard sedan on an open carrier, cheap but realistic 2026 prices are roughly: <strong>$400–$700</strong> for 0–500 miles, <strong>$600–$1,100</strong> for 500–1,000 miles, <strong>$800–$1,500</strong> for 1,000–2,000 miles, and <strong>$1,100–$1,800+</strong> for 2,500+ mile cross-country moves. Non-running vehicles and heavy SUVs add $100–$300.</p>
            </div>
          </details>

          <!-- Q3 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">Are cheap car shippers legit?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Yes, many cheap car shippers are fully legitimate, FMCSA-licensed, and insured. The key is to verify MC and USDOT numbers, written quotes, reasonable deposits, and real customer reviews. Neon Auto Transport is an FMCSA-licensed broker (MC #1703787 | USDOT #4355879) that focuses on affordable, insured auto transport.</p>
            </div>
          </details>

          <!-- Q4 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">What is the cheapest way to transport a vehicle?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">The cheapest way to transport a vehicle is usually <strong>open carrier transport</strong>, combined with flexible pickup and delivery dates, off-peak season shipping, and terminal-to-terminal options where available. Combining these methods can reduce your cost by hundreds of dollars compared to expedited, door-to-door, enclosed shipping in peak season.</p>
            </div>
          </details>

          <!-- Q5 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">How can I get cheap car shipping quotes?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">Gather your pickup and delivery ZIP codes, vehicle make/model, and running condition. Request quotes from licensed brokers, ask about open vs enclosed pricing and flexible date windows, and check for a $0 upfront deposit policy. Neon Auto Transport scans multiple carriers to find the best cheap rate.</p>
            </div>
          </details>

          <!-- Q6 -->
          <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
              <span itemprop="name" class="pr-4">Is it cheaper to drive or ship my car?</span>
              <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">For trips over 1,000 miles, auto shipping is often cheaper than driving once you calculate fuel costs, hotel stays, food, highway tolls, vehicle depreciation, and lost working days. Read our in-depth <a href="/should-i-ship-or-drive-my-car/" class="text-[#635bff] font-bold underline">ship or drive breakeven analysis</a> for exact math.</p>
            </div>
          </details>

        </div>

        <!-- Help Card -->
        <div class="mt-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-center sm:text-left">
            <h3 class="font-bold text-[#0a2540] text-base mb-1">Want a custom cheap rate comparison for your route?</h3>
            <p class="text-xs sm:text-sm text-slate-500 font-medium">Our transport coordinators match your route with active backhaul lanes in real time.</p>
          </div>
          <a href="tel:5715767711" style="background-color: #635bff; color: #ffffff; font-weight: 800; text-decoration: none;" class="px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#534be8] transition whitespace-nowrap shadow-sm">
            Call (571) 576-7711 &rarr;
          </a>
        </div>
      </section>

      <!-- 7. How to Book with Neon -->
      <section class="pt-4">
        <div class="mb-10 lg:mb-12">
          <span class="text-[#4338ca] text-xs font-bold uppercase tracking-wider block mb-2">Simple 4-Step Process</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-3">How to Book a Cheap Car Shipper with Neon</h2>
          <p class="text-sm sm:text-base text-[#425466] leading-relaxed max-w-3xl font-medium">
            Booking cheap, reliable car shipping with Neon Auto Transport takes less than 2 minutes:
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span class="w-8 h-8 rounded-full bg-[#e0e7ff] text-[#4338ca] font-black text-sm flex items-center justify-center mb-4">1</span>
            <h3 class="font-bold text-base text-[#0a2540] mb-2">Request Quote</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Enter your pickup/delivery ZIPs and vehicle details online or call us.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span class="w-8 h-8 rounded-full bg-[#ecfeff] text-[#0891b2] font-black text-sm flex items-center justify-center mb-4">2</span>
            <h3 class="font-bold text-base text-[#0a2540] mb-2">Compare Live Rates</h3>
            <p class="text-xs text-slate-600 leading-relaxed">We scan live carrier bids and backhaul lanes to find your lowest rate.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span class="w-8 h-8 rounded-full bg-[#dcfce7] text-[#15803d] font-black text-sm flex items-center justify-center mb-4">3</span>
            <h3 class="font-bold text-base text-[#0a2540] mb-2">Carrier Assignment</h3>
            <p class="text-xs text-slate-600 leading-relaxed">We assign a vetted, insured driver and confirm your pickup window.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-800 font-black text-sm flex items-center justify-center mb-4">4</span>
            <h3 class="font-bold text-base text-[#0a2540] mb-2">Insured Delivery</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Your vehicle arrives door-to-door with complete inspection sign-off.</p>
          </div>
        </div>
      </section>

      <!-- 8. Pre-Footer High-Impact CTA Banner -->
      <section style="background-color: #0a2540;" class="rounded-3xl p-10 sm:p-14 lg:p-16 text-center text-white shadow-2xl transition-all duration-300 hover:shadow-xl mt-12">
        <span class="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5">
          Price Match &amp; Zero Risk Guarantee
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
          Ready to Book Cheap, Insured Car Shipping?
        </h2>
        <p class="text-slate-300 text-base sm:text-lg mb-3 max-w-2xl mx-auto leading-relaxed font-medium">
          Get an instant, transparent quote with $0 upfront deposit, $500,000 cargo insurance, and verified FMCSA carrier dispatch.
        </p>
        <p class="text-[#ffc72c] text-xs sm:text-sm font-bold mb-10 max-w-xl mx-auto">
          ⚡ Compare live rates in under 60 seconds — no hidden fees, no obligation.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <!-- Button 1: Vibrant Green -->
          <a href="/cost-calculator/" style="background-color: #39FF14 !important; color: #0a2540 !important; font-weight: 900 !important; text-decoration: none !important; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;" class="px-8 py-4 rounded-xl text-base hover:opacity-95 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:-translate-y-0.5 text-center">
            <span>Get a Cheap Quote Now</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <!-- Button 2: Crisp White -->
          <a href="tel:5715767711" style="background-color: #ffffff !important; color: #0a2540 !important; font-weight: 800 !important; text-decoration: none !important; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;" class="px-8 py-4 rounded-xl text-base hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center">
            <svg class="w-4 h-4 text-[#0a2540]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            <span>Call (571) 576-7711</span>
          </a>
          <!-- Button 3: Golden Yellow Reviews Button -->
          <a href="https://share.google/HsmqJyEArbWjqBI4v" target="_blank" rel="noopener noreferrer" style="background-color: #ffc72c !important; color: #0a2540 !important; font-weight: 900 !important; text-decoration: none !important; display: inline-flex; align-items: center; justify-content: center; gap: 0.375rem;" class="px-6 py-4 rounded-xl text-base hover:opacity-95 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center">
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

// Write outputs
const outputDir = path.join(__dirname, 'cheap-car-shippers');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'cheap-car-shippers.html'), html, 'utf8');

// Generate companion markdown
const markdownContent = `# Cheap Car Shippers: Affordable & Insured Auto Transport (2026 Guide)

> Looking for cheap car shippers? Neon Auto Transport finds affordable, insured auto transport with open carriers, flexible dates, and transparent quotes.

## Quick Answer: What are the cheapest car shippers?
The cheapest car shippers in 2026 are licensed brokers and carriers that optimize open carrier freight, backhaul return lanes, and flexible 3–7 day dispatch windows. Typical cheap rates range from **$400–$700** for regional moves under 500 miles, up to **$1,100–$1,800+** for nationwide cross-country transit. Legitimate cheap shippers never demand full upfront payment and maintain active FMCSA cargo insurance.

## Average Costs by Distance (Open Transport)
- **0 – 500 miles:** $400 – $700 ($1.20 – $2.10/mi)
- **500 – 1,000 miles:** $600 – $1,100 ($0.80 – $1.15/mi)
- **1,000 – 2,000 miles:** $800 – $1,500 ($0.60 – $0.80/mi)
- **2,500+ miles (Coast-to-Coast):** $1,100 – $1,800+ ($0.45 – $0.60/mi)

## Popular Route Estimates
- New York -> Florida (~1,100 mi): $750 – $950
- California -> Texas (~1,400 mi): $850 – $1,100
- Chicago -> Los Angeles (~2,000 mi): $950 – $1,300
- Boston -> Miami (~1,500 mi): $900 – $1,200

## How Neon Auto Transport Finds Cheap Rates
1. **Live Carrier Rate Comparison:** Filter out lowball scams and match with active bids.
2. **Backhaul Lane Optimization:** Secure 15%–30% discounts on return freight routes.
3. **Flexible Scheduling:** Avoid expedited premiums with a 3–7 day window ($100–$300 savings).
4. **$0 Upfront Deposit Model:** Zero financial risk until your driver is confirmed.

## Cheapest Ways to Ship a Car
1. Choose Open Transport (save 30%–50% vs enclosed)
2. Be Flexible With Dates
3. Use Terminal-to-Terminal When Feasible
4. Ship in Off-Peak Seasons (fall/spring)
5. Compare Multiple Legitimate Quotes

## Frequently Asked Questions
- **What are the cheapest car shippers?** Open carriers on high-volume lanes with flexible windows ($400–$1,800+).
- **How much does it cost to ship cheaply?** Sedans range from $0.45–$2.10/mi depending on total distance.
- **Are cheap shippers legit?** Yes, provided they have verifiable FMCSA MC/USDOT licensing, $500K cargo insurance, and $0 upfront deposit.
- **Is driving cheaper than shipping?** Over 1,000 miles, shipping often beats driving once fuel, hotels, food, and car depreciation are factored.
`;

fs.writeFileSync(path.join(__dirname, 'cheap-car-shippers.md'), markdownContent, 'utf8');

console.log('✅ Generated Cheap Car Shippers landing page and markdown.');

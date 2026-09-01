import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nyIndexPath = path.join(__dirname, 'new-york-car-shipping', 'index.html');
let html = fs.readFileSync(nyIndexPath, 'utf8');

// ============================================================
// 1. HEAD SEO TAGS & STRUCTURED MULTI-ENTITY SCHEMA
// ============================================================

// Clean up any stray string artifacts
html = html.replace(/ipt&gt;/g, '');

// Title
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>New York Car Shipping | Door-to-Door Auto Transport | Neon</title>'
);

// Meta description
html = html.replace(
  /<meta content=".*?" name="description"\/>|<meta name="description" content=".*?">/,
  '<meta name="description" content="Ship cars to/from New York with Neon Auto Transport. Door-to-door service, open &amp; enclosed transport, FMCSA-licensed broker, $0 deposit. Get an instant quote.">'
);

// Canonical
html = html.replace(
  /<link href=".*?" rel="canonical"\/>|<link rel="canonical" href=".*?">/,
  '<link rel="canonical" href="https://neonautotransport.com/new-york-car-shipping/">'
);

// Open Graph
html = html.replace(
  /<meta content=".*?" property="og:title"\/>|<meta property="og:title" content=".*?">/,
  '<meta property="og:title" content="New York Car Shipping | Door-to-Door Auto Transport | Neon">'
);

html = html.replace(
  /<meta content=".*?" property="og:description"\/>|<meta property="og:description" content=".*?">/,
  '<meta property="og:description" content="Ship cars to/from New York with Neon Auto Transport. Door-to-door service, open &amp; enclosed transport, FMCSA-licensed broker, $0 deposit. Get an instant quote.">'
);

// Twitter
html = html.replace(
  /<meta content=".*?" name="twitter:title"\/>|<meta name="twitter:title" content=".*?">/,
  '<meta name="twitter:title" content="New York Car Shipping | Door-to-Door Auto Transport | Neon">'
);

html = html.replace(
  /<meta content=".*?" name="twitter:description"\/>|<meta name="twitter:description" content=".*?">/,
  '<meta name="twitter:description" content="Ship cars to/from New York with Neon Auto Transport. Door-to-door service, open &amp; enclosed transport, FMCSA-licensed broker, $0 deposit. Get an instant quote.">'
);

// Add custom CSS for sleek FAQ accordion and button styling
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

if (!html.includes('details.faq-item summary::-webkit-details-marker')) {
  html = html.replace('</head>', customCss + '\n</head>');
}

// Multi-Entity Schema (LocalBusiness + Service + OfferCatalog + FAQPage + BreadcrumbList)
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
      "@id": "https://neonautotransport.com/new-york-car-shipping/#service",
      "serviceType": "New York Car Shipping",
      "name": "New York Car Shipping & Door-to-Door Auto Transport",
      "provider": {
        "@id": "https://neonautotransport.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New York",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "NY",
          "addressCountry": "US"
        }
      },
      "description": "Door-to-door auto transport to and from New York, including NYC, Long Island, and upstate. Open and enclosed transport, terminal and staging-area pickups, and FMCSA-compliant carriers.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "New York Auto Transport Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Open car carrier shipping in New York"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enclosed auto transport for luxury and classic cars"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Terminal-to-terminal and staging-area pickup in NYC"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://neonautotransport.com/new-york-car-shipping/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car from NYC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shipping a car from NYC typically costs $300–$470 for regional Northeast and Mid-Atlantic routes, $500–$900 for the Southeast, Midwest, and Florida, and $1,150–$1,600 for cross-country West Coast routes on an open carrier."
          }
        },
        {
          "@type": "Question",
          "name": "Is affordable vehicle shipping in NYC realistic given how dense the city is?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — density affects where you meet your driver, not necessarily the price. Terminal or staging-area pickup in New Jersey, Long Island, or an outer borough is still standard, affordable open-carrier service. It's true door-to-door delivery to a Manhattan curb that gets harder and occasionally pricier."
          }
        },
        {
          "@type": "Question",
          "name": "Why can't my car be picked up directly at my Manhattan address?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New York's parkway system bans commercial trucks outright, and most residential streets are too narrow for an 80-foot carrier rig to navigate or turn around on safely. Drivers typically arrange a nearby staging point instead, commonly in New Jersey, Long Island, or a wider commercial street in Queens or Brooklyn."
          }
        },
        {
          "@type": "Question",
          "name": "What's the cost to ship a car from NYC to Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The New York-to-Florida corridor typically runs $650–$900 on an open carrier and takes 3–5 days, making it one of the more affordable and well-traveled long-distance routes out of the city, especially during snowbird season in fall and spring."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between open and enclosed car transport in New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open car carrier service is the standard, most affordable option and what the vast majority of vehicles ship on. Enclosed auto transport costs roughly 30–50% more and is the better choice for luxury or classic vehicles, given the added protection from road salt and winter grime."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be present for pickup and delivery in New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you or an authorized representative needs to be present to sign the Bill of Lading at both pickup and delivery. In New York specifically, confirm your staging location in advance so you know exactly where to meet your driver."
          }
        },
        {
          "@type": "Question",
          "name": "Can I ship a car from New York to Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cross-border shipments to cities like Toronto or Montreal typically run north via I-87, and you'll need your title, registration, and proof of ownership documents ready in advance for customs."
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
          "name": "Locations",
          "item": "https://neonautotransport.com/locations/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "New York Car Shipping",
          "item": "https://neonautotransport.com/new-york-car-shipping/"
        }
      ]
    }
  ]
}
</script>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
html = html.replace('</head>', newSchema + '\n</head>');

// ============================================================
// 2. MAIN BODY REFINEMENTS
// ============================================================

// 1. Update Quick Answer Section in Hero
const newQuickAnswer = `
  <div class="space-y-4 my-6 not-prose">
    
    <!-- Specific NYC Cost Snippet Box -->
    <div class="bg-white border border-slate-200 border-l-4 border-l-[#635bff] rounded-xl p-5 shadow-sm">
      <h3 class="text-sm sm:text-base font-bold text-[#0a2540] mb-1 flex items-center gap-2">
        <svg class="w-4 h-4 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        How much does it cost to ship a car from NYC?
      </h3>
      <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
        Typical open-carrier rates from NYC are <strong>$300–$470</strong> for regional Northeast/Mid-Atlantic routes, <strong>$500–$900</strong> for the Southeast/Midwest/Florida, and <strong>$1,150–$1,600</strong> for cross-country West Coast routes.
      </p>
    </div>

    <!-- General Quick Answer -->
    <section class="quick-answer bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/30 rounded-xl p-6 shadow-xl" aria-label="Quick Answer">
      <h2 class="quick-answer-title text-lg sm:text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
        <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Quick answer: New York car shipping
      </h2>
      <div class="quick-answer-content text-slate-200 text-sm sm:text-base leading-relaxed" itemscope itemtype="https://schema.org/Question">
        <p itemprop="text">Neon Auto Transport ships cars to and from New York with door-to-door service covering all major cities and rural routes. Open transport averages $0.50–$1.00 per mile, with enclosed transport available for high-value vehicles. As an FMCSA-licensed broker (MC 1703787 | USDOT 4355879) with $0 deposit, you can get a quote at neonautotransport.com/cost-calculator/ or call (571) 576-7711.</p>
      </div>
    </section>

  </div>
`;

html = html.replace(/<section class="quick-answer[\s\S]*?<\/section>/, newQuickAnswer);

// 2. Trust Line in "Why Choose Neon Auto Transport"
const trustLine = `
      </ul>
      <p class="mt-6 text-xs sm:text-sm text-[#4338ca] font-bold bg-[#e0e7ff]/60 p-4 rounded-xl border border-[#e0e7ff]">
        🛡️ Neon Auto Transport is an FMCSA-licensed broker (MC #1703787 | USDOT #4355879) working with insured, vetted carriers nationwide.
      </p>
    </div>
`;
html = html.replace(/<\/ul>\s*<\/div>\s*<!-- 2\. How New York Auto Shipping Works -->/, trustLine + '\n    <!-- 2. How New York Auto Shipping Works -->');

// 3. Keyword reinforcement in "Understanding New York Car Shipping Costs"
html = html.replace(
  /<h2 class="text-3xl font-black text-\[#0a2540\] border-b-2 border-\[#00D1FF\] pb-3 tracking-tight">Understanding New York Car Shipping Costs<\/h2>/,
  `<h2 class="text-3xl font-black text-[#0a2540] border-b-2 border-[#00D1FF] pb-3 tracking-tight">Understanding New York Car Shipping Costs</h2>
      <p class="text-sm sm:text-base text-[#425466] leading-relaxed font-medium mt-2">
        Understanding New York car shipping costs means looking at distance, pickup location, vehicle type, transport method, and seasonal demand.
      </p>`
);

// 4. Pricing table caption / intro sentences
html = html.replace(
  /<h3 class="text-2xl font-bold mb-6 text-\[#0a2540\]">Cost &amp; Transit Time Examples<\/h3>/,
  `<h3 class="text-2xl font-bold mb-2 text-[#0a2540]">Cost &amp; Transit Time Examples</h3>
   <p class="text-xs sm:text-sm text-slate-600 mb-4 font-medium">Estimated New York car shipping costs and transit times for popular routes (open carrier, standard vehicles).</p>`
);

html = html.replace(
  /<h3 class="text-2xl font-bold mb-4 text-\[#0a2540\]">Ballpark Averages by Corridor<\/h3>/,
  `<h3 class="text-2xl font-bold mb-2 text-[#0a2540]">Ballpark Averages by Corridor</h3>
   <p class="text-xs sm:text-sm text-slate-600 mb-4 font-medium">Average regional auto transport rate estimates connecting New York to major national hubs.</p>`
);

// 5. Urgency hook in "How to Save on New York Car Shipping"
html = html.replace(
  /<li><strong>Consider terminal-to-terminal\.<\/strong> If you're near a hub, this can save \$100–\$300 over door-to-door\.<\/li>\s*<\/ul>/,
  `<li><strong>Consider terminal-to-terminal.</strong> If you're near a hub, this can save $100–$300 over door-to-door.</li>
        </ul>
        <p class="mt-4 text-xs sm:text-sm text-[#0a2540] font-bold bg-[#dcfce7] p-3.5 rounded-xl border border-[#15803d]/20">
          ⚡ Book early and stay flexible on dates to lock in the best New York car shipping rates before peak season demand.
        </p>`
);

// 6. Refine NYC-Specific Subsections (H3s) & Add Mini "NYC Pickup Tips" Callout Box
const oldNycBlockRegex = /<!-- 5\. PARENT H2: Shipping To and From New York City -->[\s\S]*?<!-- 6\. PARENT H2: About New York -->/;

const newNycBlock = `<!-- 5. PARENT H2: Shipping To and From New York City -->
    <div class="mb-12 space-y-10">
      <h2 class="text-3xl font-black text-[#0a2540] border-b-2 border-[#00D1FF] pb-3 tracking-tight">Shipping To and From New York City</h2>

      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-[#0a2540]">Why New York Car Shipping Works Differently</h3>

        <div class="space-y-6 text-[#425466] leading-relaxed">
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Manhattan Streets Aren’t Built for 80-Foot Car Carriers</h3>
            <p class="text-sm text-slate-600">Narrow one-way streets, tight 90-degree turns, low-hanging wires, and constant double-parking make it physically impossible for an 80-foot carrier rig to navigate most residential blocks. Professional drivers won't force a truck down a street where it doesn't safely fit.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">New York Parkways Ban Commercial Trucks</h3>
            <p class="text-sm text-slate-600">Roads like the Belt Parkway, the Grand Central Parkway, the Henry Hudson Parkway, and the FDR Drive were built in the early 20th century for passenger cars, with some overpasses as low as 6'11" — commercial trucks are prohibited by law, and a strike on a low bridge can mean serious fines, towing costs, and infrastructure damage.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">NYC Car Shipping Uses Terminals and Staging Areas</h3>
            <p class="text-sm text-slate-600">That's why it's not always true door-to-door service. Drivers typically meet customers in northern New Jersey, parts of Long Island, or wider commercial zones in Queens or Brooklyn, routing on legal truck corridors like the BQE (I-278), the LIE (I-495), the Cross Bronx Expressway (I-95), the Van Wyck (I-678) toward JFK, and the Major Deegan (I-87) through the Bronx.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Winter Weather and Upstate Delays</h3>
            <p class="text-sm text-slate-600">Lake-effect snow, nor'easters, and icy conditions on I-87 (the New York Thruway) and I-90 can delay pickups from December through March, especially for routes running through Buffalo, Syracuse, or Albany.</p>
          </div>

          <!-- Mini NYC Pickup Tips Callout Box -->
          <div class="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 not-prose my-6">
            <h3 class="text-base font-bold text-[#0a2540] mb-3 flex items-center gap-2">
              <span class="text-lg">🗽</span> NYC Pickup Tips
            </h3>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li class="flex items-start gap-2">
                <span class="text-[#635bff] font-bold">✓</span>
                <span><strong>Have your phone on and ready:</strong> Drivers coordinate exact staging locations by phone call or text on pickup day.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#635bff] font-bold">✓</span>
                <span><strong>Manhattan staging:</strong> If you’re in Manhattan, expect to meet in northern New Jersey, Long Island, or a wider commercial avenue in Queens or Brooklyn.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#635bff] font-bold">✓</span>
                <span><strong>Upstate addresses:</strong> For Buffalo, Syracuse, Rochester, and Albany addresses, true door-to-door delivery is standard unless severe winter storms interfere.</span>
              </li>
            </ul>
          </div>

          <p class="pt-2 text-sm text-slate-600 font-medium">
            New York is a major inbound and outbound market for corporate relocation, driven by the finance, tech, and corporate sectors headquartered in Manhattan, and it also feeds a constant stream of college-related shipments tied to the state's dozens of universities.
          </p>
        </div>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4 text-[#0a2540]">Cities and Regions We Serve</h3>
        <p class="text-[#425466] leading-relaxed mb-6">
          Neon Auto Transport ships to and from every region of New York — from New York City and Long Island to the Adirondacks and Western New York.
        </p>

        <div class="space-y-4 text-sm text-[#425466]">
          <p><strong>New York City &amp; Long Island</strong> — <a href="/routes/city/new-york-city-ny/" class="text-[#4338ca] hover:underline font-bold">New York City</a> (Manhattan, Brooklyn, Queens, the Bronx, Staten Island), Hempstead, Huntington, Babylon, Islip, Long Beach</p>
          <p><strong>Lower Hudson Valley</strong> — <a href="/routes/city/yonkers-ny/" class="text-[#4338ca] hover:underline font-bold">Yonkers</a>, White Plains, New Rochelle, Scarsdale, Mount Vernon, Peekskill</p>
          <p><strong>Hudson Valley</strong> — Poughkeepsie, Kingston, Newburgh, Beacon, Middletown</p>
          <p><strong>Capital Region</strong> — Albany, Schenectady, Troy, Saratoga Springs, Glens Falls</p>
          <p><strong>Western New York</strong> — <a href="/routes/city/buffalo-ny/" class="text-[#4338ca] hover:underline font-bold">Buffalo</a>, Niagara Falls, Amherst, Cheektowaga, Orchard Park</p>
          <p><strong>Central New York</strong> — <a href="/routes/city/rochester-ny/" class="text-[#4338ca] hover:underline font-bold">Rochester</a>, <a href="/routes/city/syracuse-ny/" class="text-[#4338ca] hover:underline font-bold">Syracuse</a>, Ithaca, Auburn</p>
          <p><strong>Southern Tier</strong> — Binghamton, Elmira, Corning</p>
          <p><strong>North Country &amp; Adirondacks</strong> — Watertown, Plattsburgh, Lake Placid</p>
          <p><strong>Finger Lakes</strong> — Geneva, Canandaigua, Seneca Falls</p>
          <p><strong>Catskills &amp; Mohawk Valley</strong> — Monticello, Oneonta, Utica, Rome</p>
        </div>

        <p class="mt-6 text-[#425466] italic">Don't see your city? We ship to and from every city and zip code in New York — <a class="text-[#4338ca] hover:underline font-bold" href="/cost-calculator/">get a free quote</a> for your exact location.</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4 text-[#0a2540]">Major Shipping Corridors</h3>
        <p class="text-[#425466] leading-relaxed">
          New York's extensive interstate network — including <strong>I-87, I-90, and I-95</strong> — makes it one of the most carrier-accessible states in the country. Major hubs like New York City, Buffalo, Syracuse, and Albany see especially strong carrier availability, meaning faster dispatch and more competitive pricing for shipments to and from these metro areas.
        </p>
      </div>
    </div>

    <!-- 6. PARENT H2: About New York -->`;

html = html.replace(oldNycBlockRegex, newNycBlock);

// 7. Interactive Sleek FAQ Accordion Replacement
const oldFaqRegex = /<!-- 8\. New York Car Shipping FAQs -->[\s\S]*?<!-- 9\. Additional Services Block -->/;

const newFaqBlock = `<!-- 8. New York Car Shipping FAQs -->
    <div class="mb-12" id="faq" itemscope itemtype="https://schema.org/FAQPage">
      <h2 class="text-3xl font-black mb-8 text-[#0a2540] tracking-tight">New York Car Shipping FAQs</h2>
      
      <div class="space-y-4">
        
        <!-- Q1 -->
        <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" open>
          <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
            <span itemprop="name" class="pr-4">How much does it cost to ship a car from NYC?</span>
            <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Shipping a car from NYC typically costs <strong>$300–$470</strong> for regional Northeast and Mid-Atlantic routes, <strong>$500–$900</strong> for the Southeast, Midwest, and Florida, and <strong>$1,150–$1,600</strong> for cross-country West Coast routes on an open carrier.</p>
          </div>
        </details>

        <!-- Q2 -->
        <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
            <span itemprop="name" class="pr-4">Is affordable vehicle shipping in NYC realistic given how dense the city is?</span>
            <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Yes — density affects where you meet your driver, not necessarily the price. Terminal or staging-area pickup in New Jersey, Long Island, or an outer borough is still standard, affordable open-carrier service. It's true door-to-door delivery to a Manhattan curb that gets harder and occasionally pricier.</p>
          </div>
        </details>

        <!-- Q3 -->
        <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
            <span itemprop="name" class="pr-4">Why can't my car be picked up directly at my Manhattan address?</span>
            <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">New York's parkway system bans commercial trucks outright, and most residential streets are too narrow for an 80-foot carrier rig to navigate or turn around on safely. Drivers typically arrange a nearby staging point instead, commonly in New Jersey, Long Island, or a wider commercial street in Queens or Brooklyn.</p>
          </div>
        </details>

        <!-- Q4 -->
        <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
            <span itemprop="name" class="pr-4">What's the cost to ship a car from NYC to Florida?</span>
            <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">The New York-to-Florida corridor typically runs <strong>$650–$900</strong> on an open carrier and takes 3–5 days, making it one of the more affordable and well-traveled long-distance routes out of the city, especially during snowbird season in fall and spring.</p>
          </div>
        </details>

        <!-- Q5 -->
        <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
            <span itemprop="name" class="pr-4">What's the difference between open and enclosed car transport in New York?</span>
            <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Open car carrier service is the standard, most affordable option and what the vast majority of vehicles ship on. Enclosed auto transport costs roughly 30–50% more and is the better choice for luxury or classic vehicles, given the added protection from road salt and winter grime.</p>
          </div>
        </details>

        <!-- Q6 -->
        <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
            <span itemprop="name" class="pr-4">Do I need to be present for pickup and delivery in New York?</span>
            <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Yes, you or an authorized representative needs to be present to sign the Bill of Lading at both pickup and delivery. In New York specifically, confirm your staging location in advance so you know exactly where to meet your driver.</p>
          </div>
        </details>

        <!-- Q7 -->
        <details class="faq-item bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-[#635bff]/40 hover:shadow group cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <summary class="font-bold text-base sm:text-lg text-[#0a2540] cursor-pointer flex justify-between items-center select-none group-open:text-[#635bff] transition-colors">
            <span itemprop="name" class="pr-4">Can I ship a car from New York to Canada?</span>
            <span class="faq-chevron w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ml-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Yes. Cross-border shipments to cities like Toronto or Montreal typically run north via I-87, and you'll need your title, registration, and proof of ownership documents ready in advance for customs.</p>
          </div>
        </details>

      </div>
    </div>
    
    <!-- 9. Additional Services Block -->`;

html = html.replace(oldFaqRegex, newFaqBlock);

// 8. Refine Final CTA section note
html = html.replace(
  /<li><a class="text-\[#4338ca\] underline hover:no-underline" href="\/cost-calculator\/">Get a Free Quote<\/a><\/li>/,
  `<li><a class="text-[#4338ca] underline hover:no-underline" href="/cost-calculator/">Calculate Your Rate / Get a Free Quote</a></li>`
);

// Write back updated index.html
fs.writeFileSync(nyIndexPath, html, 'utf8');

// Update companion markdown
const mdPath = path.join(__dirname, 'new-york-car-shipping.md');
const mdContent = `# New York Car Shipping & Door-to-Door Auto Transport (2026 Guide)

> Ship cars to/from New York with Neon Auto Transport. Door-to-door service, open & enclosed transport, FMCSA-licensed broker, $0 deposit.

## Quick Answer: New York Car Shipping
Neon Auto Transport ships cars to and from New York with door-to-door service covering all major cities and rural routes. Open transport averages $0.50–$1.00 per mile, with enclosed transport available for high-value vehicles. As an FMCSA-licensed broker (MC 1703787 | USDOT 4355879) with $0 deposit, you can get an instant quote at neonautotransport.com/cost-calculator/ or call (571) 576-7711.

## How Much Does It Cost to Ship a Car from NYC?
- **Regional Northeast / Mid-Atlantic:** $300 – $470 (Same day – 1 day)
- **Southeast / Midwest / Florida:** $500 – $900 (2 – 5 days)
- **Cross-Country (West Coast / California):** $1,150 – $1,600 (6 – 8 days)

## Why NYC Shipping Works Differently
1. **Manhattan Streets:** Narrow one-way streets and double parking prevent 80-ft carrier entry.
2. **Parkway Commercial Bans:** Parkway overpasses as low as 6'11" prohibit commercial auto haulers.
3. **Staging Areas & Terminals:** Drivers meet customers in northern NJ, Long Island, or wide commercial avenues in Queens and Brooklyn.
4. **Winter Weather:** Lake-effect snow on I-87 and I-90 requires flexible scheduling from December to March.

## NYC Pickup Tips
- Keep your phone ready for driver staging coordination calls or texts.
- Expect to meet at nearby staging areas if shipping to/from Manhattan.
- True door-to-door delivery is standard for Buffalo, Syracuse, Rochester, and Albany.

## Frequently Asked Questions
- **How much to ship from NYC?** $300–$470 regional, $650–$900 to Florida, $1,150–$1,600 cross-country.
- **Can my car be picked up at my Manhattan door?** Due to street width and parkway bans, staging points in NJ, Long Island, or Queens/Brooklyn are standard.
- **Is open or enclosed better?** Open is the affordable standard; enclosed shields against winter road salt and road debris for luxury cars.
`;
fs.writeFileSync(mdPath, mdContent, 'utf8');

console.log('✅ Successfully optimized New York Car Shipping page with AEO snippet, schemas, H2/H3s, NYC tips, and FAQ accordions.');

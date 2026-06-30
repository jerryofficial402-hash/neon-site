const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const templatePath = path.join(rootDir, 'services', 'open-auto-transport.html');
const outDir = path.join(rootDir, 'car-shipping-woodbridge-va');
const outPath = path.join(outDir, 'index.html');

let html = fs.readFileSync(templatePath, 'utf-8');

// 1. Replace SEO Metadata
html = html.replace(
  /<title>.*?<\/title>/g,
  '<title>Car Shipping Woodbridge VA | Auto Transport | Neon Auto Transport</title>'
);

html = html.replace(
  /<meta name="description" content=".*?">/g,
  '<meta name="description" content="Local car shipping company in Woodbridge, VA. Open & enclosed auto transport, no deposit, FMCSA licensed. Serving Prince William County. Free instant quote.">'
);

html = html.replace(
  /<link rel="canonical" href=".*?">/g,
  '<link rel="canonical" href="https://neonautotransport.com/car-shipping-woodbridge-va/">'
);

html = html.replace(
  /<meta property="og:title" content=".*?">/g,
  '<meta property="og:title" content="Car Shipping Woodbridge VA | Auto Transport | Neon Auto Transport">'
);

html = html.replace(
  /<meta property="og:description" content=".*?">/g,
  '<meta property="og:description" content="Local car shipping company in Woodbridge, VA. Open & enclosed auto transport, no deposit, FMCSA licensed. Serving Prince William County. Free instant quote.">'
);

html = html.replace(
  /<meta property="og:url" content=".*?">/g,
  '<meta property="og:url" content="https://neonautotransport.com/car-shipping-woodbridge-va/">'
);

html = html.replace(
  /<meta property="og:image" content=".*?">/g,
  '<meta property="og:image" content="https://neonautotransport.com/images/woodbridge-va-car-shipping.png">'
);

html = html.replace(
  /<meta name="twitter:title" content=".*?">/g,
  '<meta name="twitter:title" content="Car Shipping Woodbridge VA | Auto Transport | Neon Auto Transport">'
);

html = html.replace(
  /<meta name="twitter:description" content=".*?">/g,
  '<meta name="twitter:description" content="Local car shipping company in Woodbridge, VA. Open & enclosed auto transport, no deposit, FMCSA licensed. Serving Prince William County. Free instant quote.">'
);

html = html.replace(
  /<meta name="twitter:image" content=".*?">/g,
  '<meta name="twitter:image" content="https://neonautotransport.com/images/woodbridge-va-car-shipping.png">'
);

// 2. Replace JSON-LD Schema
const schemaStr = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Neon Auto Transport",
      "image": "https://neonautotransport.com/images/og-cover.jpg",
      "url": "https://neonautotransport.com/car-shipping-woodbridge-va/",
      "telephone": "+15715767711",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2709 Neabsco Common Pl Suite 101",
        "addressLocality": "Woodbridge",
        "addressRegion": "VA",
        "postalCode": "22191",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.6282,
        "longitude": -77.2869
      },
      "areaServed": [
        { "@type": "City", "name": "Woodbridge, VA" },
        { "@type": "City", "name": "Dale City, VA" },
        { "@type": "City", "name": "Lake Ridge, VA" },
        { "@type": "City", "name": "Occoquan, VA" },
        { "@type": "City", "name": "Dumfries, VA" }
      ],
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car from Woodbridge, VA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Car shipping from Woodbridge typically costs between $1.00 and $1.40 per mile for open transport. A short regional route like Woodbridge to New York costs $550-$700. A cross-country route to California costs $1,250-$1,650."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to ship a car from Woodbridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transit time depends on distance. Regional East Coast routes take 1-2 days. Mid-range routes like Woodbridge to Texas take 3-5 days. Cross-country routes to California take 6-9 days."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer door-to-door pickup throughout Prince William County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide door-to-door pickup throughout Woodbridge, Dale City, Lake Ridge, Occoquan, Dumfries, Triangle, Montclair, and the surrounding Prince William County area."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to pay a deposit to ship my car from Woodbridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Neon Auto Transport does not require any upfront deposit. You pay nothing until a carrier is assigned to your shipment."
          }
        },
        {
          "@type": "Question",
          "name": "Can you ship a car for military PCS orders from Quantico or Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide priority scheduling for military families near Quantico Marine Corps Base and Fort Belvoir, working around your PCS reporting date."
          }
        }
      ]
    }
  ]
}`;

html = html.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  `<script type="application/ld+json">
${schemaStr}
</script>`
);

// 3. Replace <main>...</main> content
const newMainContent = `
  <main>
    <!-- Hero Section (dark, slant-bottom) -->
    <section class="relative bg-[#0a2540] pt-32 pb-40 overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#163a5f] to-[#0a2540] opacity-90"></div>
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05)_0,transparent_50%)]"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#39FF14] font-bold text-sm tracking-wide mb-8 animate-fadeIn" style="animation-delay: 0.1s;">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Woodbridge, VA
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg animate-fadeIn" style="animation-delay: 0.2s;">
          Car Shipping in Woodbridge, VA — <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff]">Your Local Auto Transport Company</span>
        </h1>
        <p class="text-lg md:text-xl text-[rgba(255,255,255,0.9)] leading-relaxed mb-10 max-w-3xl mx-auto animate-fadeIn" style="animation-delay: 0.3s;">
          Neon Auto Transport is a car shipping company based right here in Woodbridge, Virginia — not a national call center pretending to be local. Located in Prince William County along the I-95 corridor, we provide door-to-door vehicle transport for Woodbridge residents shipping to any of the 50 states. Open transport, enclosed transport, military PCS shipping, and luxury vehicle transport — all with zero upfront deposit and a locked-in price guarantee. FMCSA licensed (DOT: 4355879, MC: 1703787) and based locally at 2709 Neabsco Common Pl, Woodbridge, VA 22191.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fadeIn" style="animation-delay: 0.4s;">
          <a href="/cost-calculator/" class="btn-primary w-full sm:w-auto text-lg py-4 px-8 justify-center shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]">Get Instant Quote</a>
          <a href="tel:5715767711" class="btn-outline text-white border-white/20 hover:bg-white/10 w-full sm:w-auto text-lg py-4 px-8 justify-center">Call (571) 576-7711</a>
        </div>
      </div>
    </section>

    <!-- Main Content Sections -->
    <section class="py-20 bg-[#f8fafc] -mt-16 relative z-10">
      <div class="container mx-auto px-4 max-w-4xl">
        
        <!-- Section: Why Choose Local -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold text-[#0a2540] mb-6 tracking-tight">Why Choose a Local Woodbridge Car Shipping Company?</h2>
          <p class="text-lg text-[#425466] leading-relaxed mb-4">
            Most "Woodbridge" car shipping pages you'll find online belong to national brokers with no actual presence in Virginia — generic city pages auto-generated for every town in the country. Neon Auto Transport is different. Our office sits in Woodbridge, in Prince William County, along the I-95 corridor that connects directly to every major East Coast shipping route.
          </p>
          <p class="text-lg text-[#425466] leading-relaxed">
            Being local means we understand things a national call center never will: the seasonal congestion around Potomac Mills, the PCS timelines for military families near Quantico and Fort Belvoir, the winter road conditions on I-95 that affect open transport scheduling, and the specific neighborhoods throughout Prince William County where pickup logistics matter.
          </p>
        </div>

        <!-- Section: Car Shipping Cost -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold text-[#0a2540] mb-6 tracking-tight">Car Shipping Cost from Woodbridge, VA</h2>
          <p class="text-lg text-[#425466] leading-relaxed mb-8">
            Woodbridge auto transport typically costs between $1.00 and $1.40 per mile, with the I-95 corridor providing steady access to East Coast carrier routes. Here is what that means for the most common routes from Woodbridge:
          </p>
          
          <div class="overflow-x-auto mb-8 rounded-xl border border-[#e6e6e6] shadow-sm">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-[#0a2540] text-white">
                  <th class="p-4 font-bold border-b border-[#0a2540]">Destination</th>
                  <th class="p-4 font-bold border-b border-[#0a2540]">Distance</th>
                  <th class="p-4 font-bold border-b border-[#0a2540]">Open Transport</th>
                  <th class="p-4 font-bold border-b border-[#0a2540]">Transit Time</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#e6e6e6]">
                <tr class="hover:bg-[#f8fafc] transition-colors">
                  <td class="p-4 text-[#0a2540] font-semibold">Florida</td>
                  <td class="p-4 text-[#425466]">~950 mi</td>
                  <td class="p-4 text-[#0a2540] font-bold text-[#635bff]">$750 – $1,050</td>
                  <td class="p-4 text-[#425466]">2–4 days</td>
                </tr>
                <tr class="hover:bg-[#f8fafc] transition-colors">
                  <td class="p-4 text-[#0a2540] font-semibold">New York</td>
                  <td class="p-4 text-[#425466]">~280 mi</td>
                  <td class="p-4 text-[#0a2540] font-bold text-[#635bff]">$550 – $700</td>
                  <td class="p-4 text-[#425466]">1–2 days</td>
                </tr>
                <tr class="hover:bg-[#f8fafc] transition-colors">
                  <td class="p-4 text-[#0a2540] font-semibold">North Carolina</td>
                  <td class="p-4 text-[#425466]">~290 mi</td>
                  <td class="p-4 text-[#0a2540] font-bold text-[#635bff]">$550 – $700</td>
                  <td class="p-4 text-[#425466]">1–2 days</td>
                </tr>
                <tr class="hover:bg-[#f8fafc] transition-colors">
                  <td class="p-4 text-[#0a2540] font-semibold">Texas</td>
                  <td class="p-4 text-[#425466]">~1,400 mi</td>
                  <td class="p-4 text-[#0a2540] font-bold text-[#635bff]">$950 – $1,250</td>
                  <td class="p-4 text-[#425466]">3–5 days</td>
                </tr>
                <tr class="hover:bg-[#f8fafc] transition-colors">
                  <td class="p-4 text-[#0a2540] font-semibold">California</td>
                  <td class="p-4 text-[#425466]">~2,700 mi</td>
                  <td class="p-4 text-[#0a2540] font-bold text-[#635bff]">$1,250 – $1,650</td>
                  <td class="p-4 text-[#425466]">6–9 days</td>
                </tr>
                <tr class="hover:bg-[#f8fafc] transition-colors">
                  <td class="p-4 text-[#0a2540] font-semibold">Georgia</td>
                  <td class="p-4 text-[#425466]">~580 mi</td>
                  <td class="p-4 text-[#0a2540] font-bold text-[#635bff]">$650 – $850</td>
                  <td class="p-4 text-[#425466]">2–3 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p class="text-lg text-[#425466] leading-relaxed">
            Most Woodbridge auto transport shipments fall between $500 and $1,200 for popular East Coast routes. Costs vary based on vehicle size, transport type, and season. <a href="/cost-calculator/" class="text-[#635bff] font-bold hover:underline">Get an exact quote for your specific route using our instant calculator.</a>
          </p>
        </div>

        <!-- Section: Neighborhoods We Serve -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold text-[#0a2540] mb-6 tracking-tight">Neighborhoods We Serve in Woodbridge &amp; Prince William County</h2>
          <p class="text-lg text-[#425466] leading-relaxed mb-6">
            Neon Auto Transport provides door-to-door pickup throughout Woodbridge and the surrounding Prince William County area, including:
          </p>
          <div class="flex flex-wrap gap-3 mb-8">
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Dale City</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Lake Ridge</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Occoquan</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Dumfries</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Triangle</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Montclair</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Belmont Bay</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Marumsco</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Potomac Mills area</span>
            <span class="px-4 py-2 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg border border-[#e6e6e6]">Featherstone</span>
          </div>
          <p class="text-[#425466] leading-relaxed">
            If your neighborhood isn't listed here, we almost certainly still serve it — <a href="/contact/" class="text-[#635bff] font-bold hover:underline">contact us</a> to confirm pickup availability at your exact address.
          </p>
        </div>

        <!-- Section: Open vs Enclosed -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold text-[#0a2540] mb-6 tracking-tight">Open vs. Enclosed Transport — Woodbridge Winter Considerations</h2>
          <p class="text-lg text-[#425466] leading-relaxed mb-8">
            In Woodbridge, VA, shipping often happens in the winter, but road conditions, snow, and ice can slow things down. If weather exposure is a concern, enclosed transportation offers additional protection.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="border border-[#e6e6e6] rounded-xl p-6 bg-[#f8fafc]">
              <h3 class="text-xl font-bold text-[#0a2540] mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-[#468de6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Open Transport
              </h3>
              <p class="text-[#425466] leading-relaxed">
                Open transport is the standard, most affordable option for shipping a standard vehicle from Woodbridge — ideal for sedans, SUVs, and trucks in everyday condition.
              </p>
            </div>
            <div class="border border-[#e6e6e6] rounded-xl p-6 bg-[#f8fafc]">
              <h3 class="text-xl font-bold text-[#0a2540] mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Enclosed Transport
              </h3>
              <p class="text-[#425466] leading-relaxed">
                Enclosed transport is recommended for Woodbridge residents shipping luxury, classic, or high-value vehicles, especially during winter months (November through March) when road salt and snow exposure on I-95 can affect open-trailer vehicles.
              </p>
            </div>
          </div>
        </div>

        <!-- Section: Military PCS -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h2 class="text-3xl font-bold text-[#0a2540] mb-6 tracking-tight">Military PCS Car Shipping from Woodbridge</h2>
          <p class="text-lg text-[#425466] leading-relaxed">
            Woodbridge sits 8 miles from Quantico Marine Corps Base and 18 miles from Fort Belvoir, making it a primary hub for military families managing PCS moves. Neon Auto Transport provides priority scheduling for active duty military and veterans, working around your reporting date. We accept PCS orders and coordinate pickup directly from your Woodbridge or Prince William County address — no need to drive to a terminal or military installation for drop-off.
          </p>
        </div>

        <!-- Section: How It Works -->
        <div class="stripe-card p-8 lg:p-10 bg-white shadow-xl rounded-2xl mb-12 border-t-4 border-t-[#00d4ff]">
          <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight text-center">How to Ship a Car From Woodbridge, VA — 3 Steps</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="relative bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6] hover:shadow-md transition text-center">
              <div class="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#635bff] mx-auto flex items-center justify-center text-xl font-bold shadow-sm mb-4">1</div>
              <h4 class="font-bold text-[#0a2540] text-lg mb-2">Get Your Instant Quote</h4>
              <p class="text-sm text-[#425466] leading-relaxed">Enter your Woodbridge ZIP code and destination. Get a locked-in price in under 30 seconds.</p>
            </div>
            
            <div class="relative bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6] hover:shadow-md transition text-center">
              <div class="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#635bff] mx-auto flex items-center justify-center text-xl font-bold shadow-sm mb-4">2</div>
              <h4 class="font-bold text-[#0a2540] text-lg mb-2">Carrier Assignment</h4>
              <p class="text-sm text-[#425466] leading-relaxed">We match your shipment to an FMCSA-verified carrier serving the I-95 corridor. You pay nothing until a carrier is confirmed.</p>
            </div>
            
            <div class="relative bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6] hover:shadow-md transition text-center">
              <div class="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#635bff] mx-auto flex items-center justify-center text-xl font-bold shadow-sm mb-4">3</div>
              <h4 class="font-bold text-[#0a2540] text-lg mb-2">Pickup &amp; Delivery</h4>
              <p class="text-sm text-[#425466] leading-relaxed">Your carrier arrives at your Woodbridge address, completes a Bill of Lading inspection, and delivers your vehicle door-to-door at the destination.</p>
            </div>
          </div>
          <div class="mt-8 text-center">
            <a href="/cost-calculator/" class="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg">Start your quote <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
          </div>
        </div>

        <!-- Section: FAQs -->
        <div class="stripe-card bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12" itemscope itemtype="https://schema.org/FAQPage">
          <h2 class="text-3xl font-bold text-[#0a2540] mb-8 tracking-tight">Woodbridge, VA Car Shipping FAQs</h2>
          
          <div class="space-y-4">
            <details class="group bg-[#f8fafc] rounded-lg border border-[#e6e6e6] open:border-[#e6e6e6] open:bg-white open:shadow-md transition-all duration-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0a2540] hover:text-[#635bff] transition-colors">
                <span itemprop="name">How much does it cost to ship a car from Woodbridge, VA?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="text-[#425466] px-6 pb-6" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Car shipping from Woodbridge typically costs between $1.00 and $1.40 per mile for open transport. A short regional route like Woodbridge to New York costs $550–$700. A cross-country route to California costs $1,250–$1,650.</p>
              </div>
            </details>

            <details class="group bg-[#f8fafc] rounded-lg border border-[#e6e6e6] open:border-[#e6e6e6] open:bg-white open:shadow-md transition-all duration-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0a2540] hover:text-[#635bff] transition-colors">
                <span itemprop="name">How long does it take to ship a car from Woodbridge?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="text-[#425466] px-6 pb-6" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Transit time depends on distance. Regional East Coast routes take 1–2 days. Mid-range routes like Woodbridge to Texas take 3–5 days. Cross-country routes to California take 6–9 days.</p>
              </div>
            </details>

            <details class="group bg-[#f8fafc] rounded-lg border border-[#e6e6e6] open:border-[#e6e6e6] open:bg-white open:shadow-md transition-all duration-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0a2540] hover:text-[#635bff] transition-colors">
                <span itemprop="name">Is open or enclosed transport better for Woodbridge winters?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="text-[#425466] px-6 pb-6" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Open transport is suitable for most standard vehicles year-round. For vehicles shipping through winter months when I-95 may have snow, ice, or road salt exposure, enclosed transport provides additional protection — especially recommended for luxury or classic vehicles.</p>
              </div>
            </details>
            
            <details class="group bg-[#f8fafc] rounded-lg border border-[#e6e6e6] open:border-[#e6e6e6] open:bg-white open:shadow-md transition-all duration-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0a2540] hover:text-[#635bff] transition-colors">
                <span itemprop="name">Do you offer door-to-door pickup throughout Prince William County?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="text-[#425466] px-6 pb-6" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes. We provide door-to-door pickup throughout Woodbridge, Dale City, Lake Ridge, Occoquan, Dumfries, Triangle, Montclair, and the surrounding Prince William County area.</p>
              </div>
            </details>

            <details class="group bg-[#f8fafc] rounded-lg border border-[#e6e6e6] open:border-[#e6e6e6] open:bg-white open:shadow-md transition-all duration-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0a2540] hover:text-[#635bff] transition-colors">
                <span itemprop="name">Do I need to pay a deposit to ship my car from Woodbridge?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="text-[#425466] px-6 pb-6" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">No. Neon Auto Transport does not require any upfront deposit. You pay nothing until a carrier is assigned to your shipment.</p>
              </div>
            </details>

            <details class="group bg-[#f8fafc] rounded-lg border border-[#e6e6e6] open:border-[#e6e6e6] open:bg-white open:shadow-md transition-all duration-300" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0a2540] hover:text-[#635bff] transition-colors">
                <span itemprop="name">Can you ship a car for military PCS orders from Quantico or Fort Belvoir?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="text-[#425466] px-6 pb-6" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes. We provide priority scheduling for military families near Quantico Marine Corps Base and Fort Belvoir, working around your PCS reporting date.</p>
              </div>
            </details>
          </div>
        </div>

        <!-- Author Review Block -->
        <section class="mt-16 pt-12 border-t border-[#e6e6e6] mb-12">
          <div class="stripe-card p-8 flex flex-col md:flex-row items-start gap-6 border-l-4 border-l-[#39FF14] bg-white rounded-xl shadow-sm">
            <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover shadow-inner flex-shrink-0 border-2 border-[#e0f2fe]">
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <div class="font-bold text-[#0a2540] text-lg">Shazil Ali</div>
                <span class="px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1] text-xs font-bold uppercase tracking-wider">Fact Checked &amp; Reviewed</span>
              </div>
              <div class="text-[#0a2540] text-sm font-bold mb-3">Director of Operations <span class="text-[#8ba3ba] mx-1">|</span> Neon Auto Transport</div>
              <div class="flex items-center gap-4">
                <div class="text-xs text-[#8ba3ba] font-medium">Last Updated: <span class="text-[#0a2540] font-semibold">June 2026</span></div>
                <a href="https://www.linkedin.com/in/shazil-ali/" target="_blank" rel="noopener noreferrer" class="text-[#0a66c2] hover:text-[#004182] transition inline-flex items-center gap-1 text-xs font-bold">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="mt-16 bg-[#0a2540] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl mb-12">
          <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#163a5f] to-[#0a2540] opacity-90"></div>
            <div class="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.1)_0,transparent_70%)]"></div>
          </div>
          <div class="relative z-10 max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-6">Ship Your Car from Woodbridge Today</h2>
            <p class="text-lg text-[rgba(255,255,255,0.8)] mb-8">Get an instant, no-obligation quote from your local auto transport company.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/cost-calculator/" class="btn-primary py-4 px-8 text-lg font-bold shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]">Get Your Free Quote</a>
              <a href="tel:5715767711" class="btn-outline border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.1)] py-4 px-8 text-lg font-bold">Call (571) 576-7711</a>
            </div>
          </div>
        </section>
        
        <!-- Internal Links (Related Services) -->
        <div class="bg-white rounded-xl shadow-sm border border-[#e6e6e6] p-8 mb-12">
          <h3 class="font-bold text-[#0a2540] text-xl mb-6 tracking-tight flex items-center gap-2">
            <svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            Related Services
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/services/enclosed-auto-transport/" class="flex items-center gap-3 p-4 rounded-lg hover:bg-[#f6f9fc] transition border border-transparent hover:border-[#e6e6e6] text-[#468de6] hover:text-[#0a2540] font-semibold">
              Enclosed Auto Transport
            </a>
            <a href="/services/door-to-door-car-shipping/" class="flex items-center gap-3 p-4 rounded-lg hover:bg-[#f6f9fc] transition border border-transparent hover:border-[#e6e6e6] text-[#468de6] hover:text-[#0a2540] font-semibold">
              Door-to-Door Delivery
            </a>
            <a href="/california-to-texas-car-shipping/" class="flex items-center gap-3 p-4 rounded-lg hover:bg-[#f6f9fc] transition border border-transparent hover:border-[#e6e6e6] text-[#468de6] hover:text-[#0a2540] font-semibold">
              Most Popular Route: California to Texas
            </a>
            <a href="/faqs/" class="flex items-center gap-3 p-4 rounded-lg hover:bg-[#f6f9fc] transition border border-transparent hover:border-[#e6e6e6] text-[#468de6] hover:text-[#0a2540] font-semibold">
              Full Auto Transport FAQ
            </a>
            <a href="/cost-calculator/" class="flex items-center gap-3 p-4 rounded-lg hover:bg-[#f6f9fc] transition border border-transparent hover:border-[#e6e6e6] text-[#468de6] hover:text-[#0a2540] font-semibold">
              Get an Instant Transport Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  </main>
`;

html = html.replace(/<main>[\s\S]*?<\/main>/, newMainContent);

// Add the Internal Link to the Footer!
html = html.replace(
  '<li><a href="/faqs/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;"',
  `<li><a href="/car-shipping-woodbridge-va/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Car Shipping Woodbridge VA</a></li>
            <li><a href="/faqs/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;"`
);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(outPath, html, 'utf-8');
console.log('Woodbridge VA page built successfully!');

const fs = require('fs');
const path = require('path');

// Read the template
const templatePath = path.join(__dirname, 'services', 'open-auto-transport.html');
let html = fs.readFileSync(templatePath, 'utf8');

// ============================================================
// 1. REPLACE <head> SEO TAGS
// ============================================================

// Title
html = html.replace(
  /<title>[^<]*<\/title>/,
  '<title>Car Shipping Woodbridge VA | Auto Transport | Neon Auto Transport</title>'
);

// Meta description
html = html.replace(
  /<meta name="description" content="[^"]*">/,
  '<meta name="description" content="Local car shipping company in Woodbridge, VA. Open &amp; enclosed auto transport, no deposit, FMCSA licensed. Serving Prince William County. Free instant quote.">'
);

// Canonical
html = html.replace(
  /<link rel="canonical" href="[^"]*">/,
  '<link rel="canonical" href="https://neonautotransport.com/car-shipping-woodbridge-va/">'
);

// OG URL
html = html.replace(
  /<meta property="og:url" content="[^"]*">/,
  '<meta property="og:url" content="https://neonautotransport.com/car-shipping-woodbridge-va/">'
);

// OG Title
html = html.replace(
  /<meta property="og:title" content="[^"]*">/,
  '<meta property="og:title" content="Car Shipping Woodbridge VA | Auto Transport | Neon Auto Transport">'
);

// OG Description
html = html.replace(
  /<meta property="og:description" content="[^"]*">/,
  '<meta property="og:description" content="Local car shipping company in Woodbridge, VA. Open &amp; enclosed auto transport, no deposit, FMCSA licensed. Serving Prince William County. Free instant quote.">'
);

// OG Image
html = html.replace(
  /<meta property="og:image" content="[^"]*">/,
  '<meta property="og:image" content="https://neonautotransport.com/images/woodbridge-va-car-shipping.png">'
);

// Twitter Title
html = html.replace(
  /<meta name="twitter:title" content="[^"]*">/,
  '<meta name="twitter:title" content="Car Shipping Woodbridge VA | Auto Transport | Neon Auto Transport">'
);

// Twitter Description
html = html.replace(
  /<meta name="twitter:description" content="[^"]*">/,
  '<meta name="twitter:description" content="Local car shipping company in Woodbridge, VA. Open &amp; enclosed auto transport, no deposit, FMCSA licensed. Serving Prince William County. Free instant quote.">'
);

// Twitter Image
html = html.replace(
  /<meta name="twitter:image" content="[^"]*">/,
  '<meta name="twitter:image" content="https://neonautotransport.com/images/woodbridge-va-car-shipping.png">'
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
}
</script>`;

html = html.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  newSchema
);

// ============================================================
// 3. REPLACE <main>...</main> CONTENT
// ============================================================
const newMain = `<main>
    <!-- Hero Section -->
    <section class="stripe-gradient-bg slant-bottom relative pt-36 pb-48 px-4 lg:px-8 text-center text-white">
      <div class="container mx-auto max-w-4xl relative z-10">
        <span class="inline-block px-4 py-1.5 rounded-full bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.5)] text-[#39FF14] text-sm font-bold tracking-wider uppercase mb-6">Woodbridge, VA</span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6">Car Shipping in Woodbridge, VA — Your Local Auto Transport Company</h1>
        <p class="text-lg md:text-xl text-[rgba(255,255,255,0.8)] leading-relaxed max-w-3xl mx-auto mb-10">Neon Auto Transport is a car shipping company based right here in Woodbridge, Virginia — not a national call center pretending to be local. Located in Prince William County along the I-95 corridor, we provide door-to-door vehicle transport for Woodbridge residents shipping to any of the 50 states. Open transport, enclosed transport, military PCS shipping, and luxury vehicle transport — all with zero upfront deposit and a locked-in price guarantee. FMCSA licensed (DOT: 4355879, MC: 1703787) and based locally at 2709 Neabsco Common Pl, Woodbridge, VA 22191.</p>
        <div class="flex flex-col sm:flex-wrap sm:flex-row justify-center gap-4">
          <a href="/cost-calculator/" class="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg">Get Instant Quote <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
          <a href="tel:5715767711" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> Call (571) 576-7711</a>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="container mx-auto px-4 lg:px-8 max-w-4xl -mt-20 relative z-10 pb-16">

<!-- Why Choose a Local Woodbridge Car Shipping Company? -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 reveal">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Why Choose a Local Woodbridge Car Shipping Company?</h2>
  <p class="text-[#425466] leading-relaxed mb-6">Most "Woodbridge" car shipping pages you'll find online belong to national brokers with no actual presence in Virginia — generic city pages auto-generated for every town in the country. Neon Auto Transport is different. Our office sits in Woodbridge, in Prince William County, along the I-95 corridor that connects directly to every major East Coast shipping route.</p>
  <p class="text-[#425466] leading-relaxed">Being local means we understand things a national call center never will: the seasonal congestion around Potomac Mills, the PCS timelines for military families near Quantico and Fort Belvoir, the winter road conditions on I-95 that affect open transport scheduling, and the specific neighborhoods throughout Prince William County where pickup logistics matter.</p>
</div>

<!-- Car Shipping Cost from Woodbridge, VA -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 reveal">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Car Shipping Cost from Woodbridge, VA</h2>
  <p class="text-[#425466] leading-relaxed mb-8">Woodbridge auto transport typically costs between $1.00 and $1.40 per mile, with the I-95 corridor providing steady access to East Coast carrier routes.</p>

  <div class="overflow-x-auto -mx-4 px-4 mb-8">
    <table class="w-full min-w-[600px] border-collapse rounded-xl overflow-hidden shadow-md text-sm">
      <thead>
        <tr class="bg-[#0a2540] text-white">
          <th class="px-5 py-4 text-left font-bold">Destination</th>
          <th class="px-5 py-4 text-left font-bold">Distance</th>
          <th class="px-5 py-4 text-left font-bold">Open Transport</th>
          <th class="px-5 py-4 text-left font-bold">Transit Time</th>
        </tr>
      </thead>
      <tbody class="text-[#425466]">
        <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
          <td class="px-5 py-4 font-semibold text-[#0a2540]">Florida</td>
          <td class="px-5 py-4">~950 mi</td>
          <td class="px-5 py-4 font-bold text-[#0a2540]">$750 – $1,050</td>
          <td class="px-5 py-4">2–4 days</td>
        </tr>
        <tr class="border-b border-[#e6e6e6] bg-[#f8fafc] hover:bg-[#f0f5fa] transition">
          <td class="px-5 py-4 font-semibold text-[#0a2540]">New York</td>
          <td class="px-5 py-4">~280 mi</td>
          <td class="px-5 py-4 font-bold text-[#0a2540]">$550 – $700</td>
          <td class="px-5 py-4">1–2 days</td>
        </tr>
        <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
          <td class="px-5 py-4 font-semibold text-[#0a2540]">North Carolina</td>
          <td class="px-5 py-4">~290 mi</td>
          <td class="px-5 py-4 font-bold text-[#0a2540]">$550 – $700</td>
          <td class="px-5 py-4">1–2 days</td>
        </tr>
        <tr class="border-b border-[#e6e6e6] bg-[#f8fafc] hover:bg-[#f0f5fa] transition">
          <td class="px-5 py-4 font-semibold text-[#0a2540]">Texas</td>
          <td class="px-5 py-4">~1,400 mi</td>
          <td class="px-5 py-4 font-bold text-[#0a2540]">$950 – $1,250</td>
          <td class="px-5 py-4">3–5 days</td>
        </tr>
        <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
          <td class="px-5 py-4 font-semibold text-[#0a2540]">California</td>
          <td class="px-5 py-4">~2,700 mi</td>
          <td class="px-5 py-4 font-bold text-[#0a2540]">$1,250 – $1,650</td>
          <td class="px-5 py-4">6–9 days</td>
        </tr>
        <tr class="hover:bg-[#f8fafc] transition">
          <td class="px-5 py-4 font-semibold text-[#0a2540]">Georgia</td>
          <td class="px-5 py-4">~580 mi</td>
          <td class="px-5 py-4 font-bold text-[#0a2540]">$650 – $850</td>
          <td class="px-5 py-4">2–3 days</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="text-[#425466] leading-relaxed">Most Woodbridge auto transport shipments fall between $500 and $1,200 for popular East Coast routes. Costs vary based on vehicle size, transport type, and season. Get an exact quote for your specific route using our <a href="/cost-calculator/" class="text-[#635bff] font-bold hover:underline">instant calculator</a>.</p>
</div>

<!-- Neighborhoods We Serve -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 reveal">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Neighborhoods We Serve in Woodbridge &amp; Prince William County</h2>
  <div class="flex flex-wrap gap-3 mb-6">
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Dale City</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Lake Ridge</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Occoquan</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Dumfries</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Triangle</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Montclair</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Belmont Bay</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Marumsco</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Potomac Mills area</span>
    <span class="px-4 py-2 rounded-full bg-[#f0f5fa] text-[#0a2540] font-semibold text-sm border border-[#e6e6e6]">Featherstone</span>
  </div>
  <p class="text-[#425466] leading-relaxed text-sm">If your neighborhood isn't listed here, we almost certainly still serve it — <a href="/contact/" class="text-[#635bff] font-bold hover:underline">contact us</a> to confirm pickup availability at your exact address.</p>
</div>

<!-- Open vs. Enclosed Transport -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 reveal">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Open vs. Enclosed Transport — Woodbridge Winter Considerations</h2>
  <p class="text-[#425466] leading-relaxed mb-8">Open transport is the standard, most affordable option for shipping a standard vehicle from Woodbridge — ideal for sedans, SUVs, and trucks in everyday condition.</p>
  <p class="text-[#425466] leading-relaxed mb-8">Enclosed transport is recommended for Woodbridge residents shipping luxury, classic, or high-value vehicles, especially during winter months (November through March) when road salt and snow exposure on I-95 can affect open-trailer vehicles.</p>
  
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-[#f8fafc] rounded-xl p-6 border border-[#e6e6e6] hover:shadow-md transition">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-[#e0e7ff] flex items-center justify-center shrink-0">
          <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 class="font-bold text-lg text-[#0a2540]">Open Transport</h3>
      </div>
      <ul class="space-y-2 text-[#425466] text-sm">
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Most affordable option</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Standard for 90% of shipments</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Faster carrier availability</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Ideal for sedans, SUVs, trucks</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> $550–$1,650 typical range</li>
      </ul>
    </div>
    <div class="bg-[#f8fafc] rounded-xl p-6 border border-[#e6e6e6] hover:shadow-md transition">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0">
          <svg class="w-5 h-5 text-[#ca8a04]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <h3 class="font-bold text-lg text-[#0a2540]">Enclosed Transport</h3>
      </div>
      <ul class="space-y-2 text-[#425466] text-sm">
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Full weather protection</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Best for winter shipping on I-95</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Zero road salt/debris exposure</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> Luxury, classic, exotic vehicles</li>
        <li class="flex gap-2"><span class="text-[#39FF14] font-bold">✓</span> 30–50% premium over open</li>
      </ul>
    </div>
  </div>
</div>

<!-- Military PCS Car Shipping -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 reveal">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Military PCS Car Shipping from Woodbridge</h2>
  <p class="text-[#425466] leading-relaxed">Woodbridge sits 8 miles from Quantico Marine Corps Base and 18 miles from Fort Belvoir, making it a primary hub for military families managing PCS moves. Neon Auto Transport provides priority scheduling for active duty military and veterans, working around your reporting date. We accept PCS orders and coordinate pickup directly from your Woodbridge or Prince William County address — no need to drive to a terminal or military installation for drop-off.</p>
</div>

<!-- How to Ship a Car From Woodbridge, VA — 3 Steps -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 reveal">
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

<!-- Woodbridge, VA Car Shipping FAQs -->
<div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12 reveal" itemscope itemtype="https://schema.org/FAQPage">
  <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">Woodbridge, VA Car Shipping FAQs</h2>
  
  <div class="space-y-4">
    <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
        <span itemprop="name">How much does it cost to ship a car from Woodbridge, VA?</span>
        <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </summary>
      <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Car shipping from Woodbridge typically costs between $1.00 and $1.40 per mile for open transport. A short regional route like Woodbridge to New York costs $550–$700. A cross-country route to California costs $1,250–$1,650.</p>
      </div>
    </details>

    <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
        <span itemprop="name">How long does it take to ship a car from Woodbridge?</span>
        <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </summary>
      <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Transit time depends on distance. Regional East Coast routes take 1–2 days. Mid-range routes like Woodbridge to Texas take 3–5 days. Cross-country routes to California take 6–9 days.</p>
      </div>
    </details>

    <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
        <span itemprop="name">Is open or enclosed transport better for Woodbridge winters?</span>
        <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </summary>
      <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Open transport is suitable for most standard vehicles year-round. For vehicles shipping through winter months when I-95 may have snow, ice, or road salt exposure, enclosed transport provides additional protection — especially recommended for luxury or classic vehicles.</p>
      </div>
    </details>

    <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
        <span itemprop="name">Do you offer door-to-door pickup throughout Prince William County?</span>
        <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </summary>
      <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Yes. We provide door-to-door pickup throughout Woodbridge, Dale City, Lake Ridge, Occoquan, Dumfries, Triangle, Montclair, and the surrounding Prince William County area.</p>
      </div>
    </details>

    <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
        <span itemprop="name">Do I need to pay a deposit to ship my car from Woodbridge?</span>
        <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </summary>
      <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">No. Neon Auto Transport does not require any upfront deposit. You pay nothing until a carrier is assigned to your shipment.</p>
      </div>
    </details>

    <details class="group border border-transparent rounded-xl p-5 transition open:border-[#e6e6e6] open:bg-white open:shadow-md" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <summary class="cursor-pointer font-bold text-[#0a2540] text-lg flex justify-between items-center list-none marker:content-none">
        <span itemprop="name">Can you ship a car for military PCS orders from Quantico or Fort Belvoir?</span>
        <svg class="w-5 h-5 text-[#635bff] transition-transform group-open:rotate-45 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </summary>
      <div class="mt-4 text-[#425466] leading-relaxed" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Yes. We provide priority scheduling for military families near Quantico Marine Corps Base and Fort Belvoir, working around your PCS reporting date.</p>
      </div>
    </details>
  </div>
</div>

<!-- Author review block -->
<div class="text-sm text-center text-[#8ba3ba] mt-8 mb-8">
  Reviewed by Shazil Ali, Director of Operations, Neon Auto Transport — Last Updated June 2026
</div>

    </section>
  </main>`;

html = html.replace(
  /<main>[\s\S]*?<\/main>/,
  newMain
);

// ============================================================
// 4. REPLACE the Customer Reviews and Author Byline sections
//    Replace "Back to All US Locations" link text if present
// ============================================================

// Replace the CTA section between </main> and the footer with our custom CTA
// We need to insert a CTA block. Let's find the area after </main> and before the reviews/footer.
// Actually, the customer reviews + author byline + footer are OUTSIDE <main>.
// Let's replace the customer reviews section with our CTA + reviews.

const ctaBlock = `
  <!-- Ship Your Car from Woodbridge CTA -->
  <section class="stripe-gradient-bg py-20 px-4 lg:px-8 text-center text-white">
    <div class="container mx-auto max-w-4xl relative z-10">
      <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-4">Ship Your Car from Woodbridge Today</h2>
      <p class="text-lg text-[rgba(255,255,255,0.8)] mb-8 max-w-2xl mx-auto">Get an instant, no-obligation quote from your local auto transport company.</p>
      <div class="flex flex-col sm:flex-wrap sm:flex-row justify-center gap-4">
        <a href="/cost-calculator/" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition shadow-[0_0_20px_rgba(57,255,20,0.3)]">Get Your Free Quote <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
        <a href="tel:5715767711" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> Call (571) 576-7711</a>
      </div>
    </div>
  </section>

`;

// Insert the CTA block right before the Customer Reviews section
html = html.replace(
  /<!-- Customer Reviews -->/,
  ctaBlock + '<!-- Customer Reviews -->'
);

// ============================================================
// 5. WRITE THE FILE
// ============================================================
const outputDir = path.join(__dirname, 'car-shipping-woodbridge-va');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'index.html');
fs.writeFileSync(outputPath, html, 'utf8');

console.log('✅ Successfully generated: car-shipping-woodbridge-va/index.html');
console.log('   File size:', (Buffer.byteLength(html) / 1024).toFixed(1), 'KB');

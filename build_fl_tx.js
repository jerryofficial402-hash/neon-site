const fs = require('fs');
const path = require('path');

// 1. Read the template (Florida to California)
const templatePath = path.join(__dirname, 'florida-to-california-car-shipping', 'index.html');
const outDir = path.join(__dirname, 'florida-to-texas-car-shipping');
const outPath = path.join(outDir, 'index.html');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let content = fs.readFileSync(templatePath, 'utf8');

// 2. SEO Tags
content = content.replace(
  /<title>.*?<\/title>/,
  '<title>Florida to Texas Car Shipping | Get a Free Quote – Neon Auto Transport</title>'
);
content = content.replace(
  /<meta name="description" content=".*?"\s*\/>/,
  '<meta name="description" content="Ship your car from Florida to Texas for $650–$1,300. 3–6 day transit via I-10, 10,000+ verified carriers, transparent pricing. Get your free instant quote today." />'
);
content = content.replace(
  /<link rel="canonical" href="https:\/\/neonautotransport.com\/florida-to-california-car-shipping\/"\s*\/>/,
  '<link rel="canonical" href="https://neonautotransport.com/florida-to-texas-car-shipping/" />'
);
content = content.replace(
  /<meta property="og:url" content="https:\/\/neonautotransport.com\/florida-to-california-car-shipping\/"\s*\/>/,
  '<meta property="og:url" content="https://neonautotransport.com/florida-to-texas-car-shipping/" />'
);
content = content.replace(
  /<meta property="og:title" content=".*?"\s*\/>/,
  '<meta property="og:title" content="Florida to Texas Car Shipping | Get a Free Quote – Neon Auto Transport" />'
);
content = content.replace(
  /<meta property="og:description" content=".*?"\s*\/>/,
  '<meta property="og:description" content="Ship your car from Florida to Texas for $650–$1,300. 3–6 day transit via I-10, 10,000+ verified carriers, transparent pricing. Get your free instant quote today." />'
);
content = content.replace(
  /<meta name="twitter:title" content=".*?"\s*\/>/,
  '<meta name="twitter:title" content="Florida to Texas Car Shipping | Get a Free Quote – Neon Auto Transport" />'
);
content = content.replace(
  /<meta name="twitter:description" content=".*?"\s*\/>/,
  '<meta name="twitter:description" content="Ship your car from Florida to Texas for $650–$1,300. 3–6 day transit via I-10, 10,000+ verified carriers, transparent pricing. Get your free instant quote today." />'
);

// 3. Schema Markup
const newSchema = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/"},
    {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://neonautotransport.com/locations/"},
    {"@type": "ListItem", "position": 3, "name": "Florida", "item": "https://neonautotransport.com/florida-car-shipping/"},
    {"@type": "ListItem", "position": 4, "name": "Florida to Texas", "item": "https://neonautotransport.com/florida-to-texas-car-shipping/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Auto Transport / Car Shipping",
  "name": "Florida to Texas Car Shipping",
  "provider": {
    "@type": "Organization",
    "name": "Neon Auto Transport",
    "url": "https://neonautotransport.com/"
  },
  "areaServed": [
    {"@type": "State", "name": "Florida"},
    {"@type": "State", "name": "Texas"}
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceRange": "$650-$1300"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car from Florida to Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shipping a car from Florida to Texas typically costs between $650 and $1,300 on open transport, depending on your exact pickup and delivery cities, vehicle type, and season. Most standard sedans fall in the $700-$1,150 range."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to ship a car from Florida to Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Florida to Texas shipments take 3 to 6 days from pickup to delivery. Dispatch typically takes 1-3 days on this route."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best route for shipping a car from Florida to Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nearly all Florida to Texas shipments run along Interstate 10, passing through Tallahassee, Pensacola, Mobile, Biloxi, and New Orleans before entering Texas."
      }
    },
    {
      "@type": "Question",
      "name": "Can I ship a non-running vehicle from Florida to Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Winch-equipped carriers can load inoperable vehicles on this route, typically at a slightly higher cost."
      }
    },
    {
      "@type": "Question",
      "name": "Is my vehicle insured during transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every carrier in our network carries active cargo insurance, with full coverage details provided before pickup."
      }
    },
    {
      "@type": "Question",
      "name": "When is the cheapest time to ship a car from Florida to Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rates are typically lowest outside the October-November and March-May peak seasons, and with a flexible 5-day pickup window."
      }
    }
  ]
}
</script>`;

content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, newSchema);

// If there was only one big graph schema block in the template:
content = content.replace(/<script type="application\/ld\+json">[\s\S]*?"@graph"[\s\S]*?<\/script>/, newSchema);

// 4. Hero Content
const newHeroContent = `
          <div class="inline-block bg-[#e6f0fa] text-[#468de6] px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-4">
            FMSCA & US Dot Approved
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">Florida to Texas Car Shipping</h1>
          <p class="text-lg text-[#425466] mb-10 leading-relaxed">
Shipping a car from Florida to Texas typically costs <strong>$650–$1,300</strong>
and takes <strong>3 to 6 days</strong>, depending on your exact pickup and
delivery cities, vehicle type, and time of year. This is one of the busiest
auto transport corridors in the country, running primarily along
<strong>I-10</strong> through the Gulf Coast — which means dense carrier
coverage, competitive pricing, and fast dispatch in both directions. Whether
you're relocating for work, buying a vehicle from a Texas or Florida auction,
or a snowbird heading home for the season, Neon Auto Transport connects you
with a vetted carrier network built to handle this route reliably, with
upfront pricing and no hidden fees.
</p>
          <div class="flex">
            <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_15px_rgba(57,255,20,0.4)] flex items-center gap-2">
              Calculate Your Rate Instantly 
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
`;
content = content.replace(/<div class="inline-block bg-\[#e6f0fa\] text-\[#468de6\] px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-4">[\s\S]*?<\/div>\s*<\/div>/, newHeroContent + '\n        </div>');

// 5. Breadcrumb Navigation
content = content.replace(/<nav aria-label="breadcrumb".*?>[\s\S]*?<\/nav>/, `<nav aria-label="breadcrumb" class="mb-6 text-sm text-[#425466]">
  <a href="/" class="hover:text-[#635bff] transition">Home</a> &gt; <a href="/locations/" class="hover:text-[#635bff] transition">Locations</a> &gt; <a href="/florida-car-shipping/" class="hover:text-[#635bff] transition">Florida</a> &gt; Florida to Texas
</nav>`);

// 6. Main Content Sections
const mainSections = `
<div class="mb-12">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Florida to Texas Car Shipping Cost by Route</h2>
  <p class="text-[#425466] mb-6 leading-relaxed">
    Your exact price depends on which Florida and Texas cities you're shipping
    between. Below are estimated costs and transit times for the most common
    city pairs on this corridor, based on open-carrier transport for a standard
    sedan.
  </p>

  <div class="overflow-x-auto mb-6">
    <table class="w-full text-left border-collapse border border-[#e6e6e6]">
      <thead class="bg-[#f0f5fa]">
        <tr>
          <th class="p-4 border border-[#e6e6e6] text-[#0a2540] font-bold">Route</th>
          <th class="p-4 border border-[#e6e6e6] text-[#0a2540] font-bold">Distance</th>
          <th class="p-4 border border-[#e6e6e6] text-[#0a2540] font-bold">Est. Cost</th>
          <th class="p-4 border border-[#e6e6e6] text-[#0a2540] font-bold">Transit Time</th>
        </tr>
      </thead>
      <tbody class="text-[#425466]">
        <tr>
          <td class="p-4 border border-[#e6e6e6]">Jacksonville, FL &rarr; Houston, TX</td>
          <td class="p-4 border border-[#e6e6e6]">~980 mi</td>
          <td class="p-4 border border-[#e6e6e6] font-semibold text-[#468de6]">$700 &ndash; $1,050</td>
          <td class="p-4 border border-[#e6e6e6]">3&ndash;5 days</td>
        </tr>
        <tr class="bg-[#f8fafc]">
          <td class="p-4 border border-[#e6e6e6]">Miami, FL &rarr; Houston, TX</td>
          <td class="p-4 border border-[#e6e6e6]">~1,190 mi</td>
          <td class="p-4 border border-[#e6e6e6] font-semibold text-[#468de6]">$800 &ndash; $1,150</td>
          <td class="p-4 border border-[#e6e6e6]">4&ndash;6 days</td>
        </tr>
        <tr>
          <td class="p-4 border border-[#e6e6e6]">Orlando, FL &rarr; Dallas, TX</td>
          <td class="p-4 border border-[#e6e6e6]">~1,150 mi</td>
          <td class="p-4 border border-[#e6e6e6] font-semibold text-[#468de6]">$775 &ndash; $1,125</td>
          <td class="p-4 border border-[#e6e6e6]">4&ndash;6 days</td>
        </tr>
        <tr class="bg-[#f8fafc]">
          <td class="p-4 border border-[#e6e6e6]">Tampa, FL &rarr; San Antonio, TX</td>
          <td class="p-4 border border-[#e6e6e6]">~1,140 mi</td>
          <td class="p-4 border border-[#e6e6e6] font-semibold text-[#468de6]">$775 &ndash; $1,125</td>
          <td class="p-4 border border-[#e6e6e6]">4&ndash;6 days</td>
        </tr>
        <tr>
          <td class="p-4 border border-[#e6e6e6]">Miami, FL &rarr; Austin, TX</td>
          <td class="p-4 border border-[#e6e6e6]">~1,280 mi</td>
          <td class="p-4 border border-[#e6e6e6] font-semibold text-[#468de6]">$850 &ndash; $1,225</td>
          <td class="p-4 border border-[#e6e6e6]">5&ndash;7 days</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="text-[#425466] leading-relaxed mb-12">
    SUVs, trucks, and larger vehicles typically run 15–25% higher than these
    sedan estimates due to added weight and space on the carrier. <a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline">Enclosed transport</a>
    for luxury, classic, or exotic vehicles adds roughly 40–60% to the base
    open-carrier price on this route.
  </p>
</div>

<div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12">
  <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">The Florida to Texas Route: I-10 Gulf Coast Corridor</h2>
  <p class="text-[#425466] mb-4 leading-relaxed">
    Nearly every Florida to Texas shipment runs along <strong>Interstate 10</strong>,
    one of the most heavily traveled auto transport corridors in the southern
    United States. Carriers typically route through Tallahassee and Pensacola on
    the Florida side, then continue west through Mobile, Alabama; Biloxi,
    Mississippi; and New Orleans and Baton Rouge, Louisiana, before crossing into
    Texas toward Houston, San Antonio, Dallas–Fort Worth, or Austin.
  </p>
  <p class="text-[#425466] mb-0 leading-relaxed">
    Because I-10 carries such consistent freight and carrier traffic, dispatch on
    this lane is typically faster than on less-traveled routes — most vehicles
    are matched with a carrier within 1–3 days of booking, even during moderately
    busy periods.
  </p>
</div>

<div class="mb-12">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Why Florida to Texas Is One of the Busiest Shipping Lanes</h2>
  <ul class="space-y-4 text-[#425466] leading-relaxed mb-6 list-disc pl-6">
    <li><strong>Relocation demand:</strong> Florida and Texas are two of the fastest-growing states in the country, with steady two-way migration between Miami, Orlando, and Tampa on the Florida side and Houston, Dallas, and Austin on the Texas side.</li>
    <li><strong>Snowbird season:</strong> Texans with seasonal homes in Florida ship vehicles south in the fall and back to Texas in spring, adding predictable seasonal volume in both directions.</li>
    <li><strong>Military PCS moves:</strong> With major installations in both states, permanent change of station orders drive consistent year-round demand on this corridor.</li>
    <li><strong>Auction and dealer trade:</strong> Both states rank among the largest vehicle markets in the U.S. by registration volume, so dealer-to-dealer and online auction shipments are common on this lane.</li>
  </ul>
  <p class="text-[#425466] leading-relaxed">
    This steady, diversified demand is part of why carrier availability on
    Florida to Texas stays strong even outside peak snowbird months — a real
    advantage over quieter, less-traveled routes.
  </p>
</div>

<div class="grid md:grid-cols-2 gap-8 mb-12">
  <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e6e6]">
    <h2 class="text-2xl font-bold mb-4 text-[#0a2540]">Best Time to Ship a Car from Florida to Texas</h2>
    <p class="text-[#425466] leading-relaxed">
      Rates on this route rise during <strong>October–November</strong> (southbound
      snowbird season) and <strong>March–May</strong> (northbound return season, plus
      Texas tech and energy-sector relocations). Hurricane season
      (<strong>June–November</strong>) can occasionally add a day to pickup timing
      on Florida's Gulf Coast side. If your shipment isn't time-sensitive, booking
      outside these windows — or offering a flexible 5-day pickup window — typically
      results in a lower quote.
    </p>
  </div>
  <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e6e6]">
    <h2 class="text-2xl font-bold mb-4 text-[#0a2540]">Open vs. Enclosed Transport: Which Should You Choose?</h2>
    <p class="text-[#425466] leading-relaxed">
      <a href="/services/open-auto-transport/" class="text-[#635bff] hover:underline">Open transport</a> is the standard,
      most cost-effective option for this route and what the vast majority of
      carriers run along I-10. It's a safe, reliable choice for daily drivers,
      SUVs, and trucks. If you're shipping a classic car, exotic, or a vehicle
      you'd rather shield from Gulf Coast weather and road debris, <a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline">enclosed transport</a>
      is available at a higher price point.
    </p>
  </div>
</div>

<div class="stripe-card p-8 lg:p-10 border-l-4 border-l-[#468de6] mb-12 bg-white">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">How to Prepare Your Vehicle for Florida to Texas Shipping</h2>
  <ol class="space-y-4 text-[#425466] leading-relaxed list-decimal pl-6">
    <li class="pl-2">Remove all personal items from the vehicle — carriers are not licensed to transport household goods.</li>
    <li class="pl-2">Wash your car so pre-existing scratches or dents are easy to document at pickup.</li>
    <li class="pl-2">Keep the fuel tank to about a quarter full — this keeps the vehicle lighter for loading.</li>
    <li class="pl-2">Disable any aftermarket alarm systems to prevent them from triggering in transit.</li>
    <li class="pl-2">Take timestamped photos of your vehicle from all angles before pickup.</li>
    <li class="pl-2">Have your registration, ID, and any lienholder paperwork ready for the driver.</li>
  </ol>
</div>
`;

// Find where to inject mainSections. In the template, it's after the intro `<p>` or hero `<section>` ends and the first inner `<div>` inside `<main>` or content section.
// Usually there's a `<div class="mb-12">` or similar structure right after the right sidebar layout starts.
// Let's replace everything inside the `<div class="grid lg:grid-cols-3 gap-12">` left column.

const leftColumnRegex = /<div class="lg:col-span-2">[\s\S]*?<!-- Right Sidebar Sticky -->/;
content = content.replace(leftColumnRegex, '<div class="lg:col-span-2">\n' + mainSections + '\n</div>\n\n        <!-- Right Sidebar Sticky -->');

// 7. FAQs Replacement
const newFAQs = `
          <div class="mb-12 mt-12">
            <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">Florida to Texas Car Shipping FAQs</h2>
            <div class="space-y-4">
              <!-- FAQ 1 -->
              <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                  How much does it cost to ship a car from Florida to Texas?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Shipping a car from Florida to Texas typically costs between $650 and $1,300 on open transport, depending on your exact pickup and delivery cities, vehicle type, and season. Most standard sedans fall in the $700–$1,150 range.
                </div>
              </details>
              
              <!-- FAQ 2 -->
              <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                  How long does it take to ship a car from Florida to Texas?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Most Florida to Texas shipments take 3 to 6 days from pickup to delivery, depending on the exact route and carrier scheduling. Dispatch (the time to match your shipment with a carrier) typically takes 1–3 days on this route.
                </div>
              </details>

              <!-- FAQ 3 -->
              <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                  What is the best route for shipping a car from Florida to Texas?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Nearly all Florida to Texas shipments run along Interstate 10, passing through Tallahassee, Pensacola, Mobile, Biloxi, and New Orleans before entering Texas. This high-traffic corridor means strong carrier availability and consistent transit times.
                </div>
              </details>

              <!-- FAQ 4 -->
              <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                  Can I ship a non-running vehicle from Florida to Texas?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes. Winch-equipped carriers can load inoperable vehicles on this route. Non-running vehicles typically cost slightly more due to the additional loading equipment and time required.
                </div>
              </details>

              <!-- FAQ 5 -->
              <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                  Is my vehicle insured during transport?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes. Every carrier in our network carries active cargo insurance, and we provide full coverage details before pickup so you know exactly what's protected on your Florida to Texas shipment.
                </div>
              </details>

              <!-- FAQ 6 -->
              <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                  When is the cheapest time to ship a car from Florida to Texas?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Rates are typically lowest outside the October–November and March–May peak seasons. Choosing a flexible 5-day pickup window also helps lower your quote year-round.
                </div>
              </details>
            </div>
          </div>
`;
content = content.replace(/<div class="mb-12 mt-12">[\s\S]*?<!-- Related Resources/m, newFAQs + '\n<!-- Related Resources');

// 8. Internal Linking Block
const internalLinks = `
<!-- Related Resources -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 border-t-4 border-t-[#39FF14]">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Related Auto Transport Services</h2>
  <ul class="grid md:grid-cols-2 gap-4 text-[#468de6] font-semibold text-sm">
    <li><a href="/florida-car-shipping/" class="hover:text-[#0a2540] transition underline">Florida Car Shipping (State Hub)</a></li>
    <li><a href="/texas-car-shipping/" class="hover:text-[#0a2540] transition underline">Texas Car Shipping (State Hub)</a></li>
    <li><a href="/texas-to-florida-car-shipping/" class="hover:text-[#0a2540] transition underline">Texas to Florida Car Shipping (Reverse Route)</a></li>
    <li><a href="/services/enclosed-auto-transport/" class="hover:text-[#0a2540] transition underline">Enclosed Auto Transport</a></li>
    <li><a href="/services/open-auto-transport/" class="hover:text-[#0a2540] transition underline">Open Auto Transport</a></li>
    <li><a href="/services/snow-bird-car-shipping/" class="hover:text-[#0a2540] transition underline">Snowbird Car Shipping</a></li>
    <li><a href="/insurance/" class="hover:text-[#0a2540] transition underline">Vehicle Transport Insurance</a></li>
    <li><a href="/get-a-quote/" class="hover:text-[#0a2540] transition underline">Get a Free Quote</a></li>
  </ul>
</div>
`;
content = content.replace(/<!-- Related Resources -->[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/m, internalLinks + '\n</div>\n\n    </section>');

// 9. Hero Image
content = content.replace(/<img src=".*?" alt=".*?" class="absolute inset-0 w-full h-full object-cover object-left"\s*\/>|<img src=".*?" alt=".*?" class="absolute inset-0 w-full h-full object-cover object-left">/, '<img src="/images/florida_to_texas_hero.webp" alt="Car carrier truck shipping a vehicle from Florida to Texas along I-10" class="absolute inset-0 w-full h-full object-cover object-left">');

fs.writeFileSync(outPath, content, 'utf8');
console.log('Florida to Texas route page generated successfully.');

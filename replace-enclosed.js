const fs = require('fs');

let openHtml = fs.readFileSync('services/open-auto-transport.html', 'utf8');

// Replace Title
openHtml = openHtml.replace(/<title>.*?<\/title>/, '<title>Enclosed Auto Transport | Enclosed Car Shipping for Luxury & Classic Vehicles | Neon</title>');

// Replace Meta Description
openHtml = openHtml.replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Enclosed auto transport starting at $900. Full protection for luxury, classic, and exotic vehicles. FMCSA approved, $500K insurance, no deposit. Get an instant quote.">');

// Replace Canonical
openHtml = openHtml.replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://neonautotransport.com/services/enclosed-auto-transport/">');

// Generate JSON-LD Schema
const schemaStr = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Enclosed Auto Transport",
      "description": "Premium enclosed car shipping for luxury, classic, and exotic vehicles. FMCSA approved, $500K cargo insurance, no upfront deposit. Door-to-door nationwide delivery.",
      "provider": {
        "@type": "Organization",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://neonautotransport.com/services/enclosed-auto-transport/",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "900",
        "highPrice": "2800",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is enclosed auto transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enclosed auto transport ships your vehicle inside a fully covered trailer, protecting it from weather, road debris, dust, and salt spray. It is the premium method used for luxury, classic, exotic, and high-value vehicles. Enclosed trailers carry 2-6 vehicles and provide cargo insurance up to $500,000."
          }
        },
        {
          "@type": "Question",
          "name": "How much does enclosed auto transport cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enclosed auto transport costs between $900 and $2,800 depending on distance, vehicle size, and route. Short regional routes under 500 miles cost $900-$1,200. Cross-country shipments over 2,000 miles average $2,000-$2,800. Enclosed transport costs 30-60% more than open transport."
          }
        },
        {
          "@type": "Question",
          "name": "Is enclosed auto transport worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for vehicles valued over $80,000, low-clearance vehicles, classic or restored cars, and any vehicle shipping through salt-belt states in winter. The cost difference between open and enclosed is typically $600-$1,000 — far less than repairing paint, rust, or suspension damage on a high-value vehicle."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to pay a deposit for enclosed auto transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not with Neon Auto Transport. We charge no upfront deposit for any shipment including enclosed transport. You pay nothing until a carrier is assigned. Most competitors charge $200-$500 just to book enclosed transport."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between soft-sided and hard-sided enclosed trailers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Soft-sided trailers use heavy-duty vinyl curtains — lighter, more available, adequate for most luxury vehicles. Hard-sided trailers use rigid aluminum or steel walls with air-ride suspension — highest protection level, recommended for irreplaceable classics and seven-figure exotics."
          }
        }
      ]
    }
  ]
}`;
openHtml = openHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '<script type="application/ld+json">\n' + schemaStr + '\n</script>');

// Build the Main Content
const mainContent = '<!-- Hero Section -->\n' +
'    <style>\n' +
'      .slanted-hero-eat {\n' +
'        padding-top: 120px;\n' +
'        padding-bottom: 160px;\n' +
'        clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);\n' +
'      }\n' +
'      @media (min-width: 1024px) {\n' +
'        .slanted-hero-eat {\n' +
'          padding-top: 140px;\n' +
'          padding-bottom: 120px;\n' +
'          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);\n' +
'        }\n' +
'      }\n' +
'    </style>\n' +
'    <section class="relative slanted-hero-eat bg-[#0a2540] overflow-hidden">\n' +
'      <!-- Glow effect -->\n' +
'      <div class="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1a365d] to-[#0a2540] z-0"></div>\n' +
'      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-[#635bff] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3 z-0"></div>\n' +
'\n' +
'      <div class="container mx-auto px-4 lg:px-8 relative z-10">\n' +
'        <div class="grid lg:grid-cols-2 gap-12 items-center">\n' +
'          <!-- Text Content -->\n' +
'          <div class="text-center lg:text-left">\n' +
'            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 text-xs font-bold mb-6 text-[#00d4ff]">\n' +
'              PREMIUM AUTO TRANSPORT\n' +
'            </div>\n' +
'            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">\n' +
'              Enclosed Auto <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#39FF14]">Transport</span>\n' +
'            </h1>\n' +
'            <p class="text-lg sm:text-xl text-[#cdd5df] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">\n' +
'              Premium Enclosed Car Shipping for Luxury, Classic & Exotic Vehicles\n' +
'            </p>\n' +
'            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">\n' +
'              <a href="tel:5715767711" class="w-full sm:w-auto bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-xl font-black text-lg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all flex items-center justify-center gap-2">\n' +
'                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\n' +
'                (571) 576-7711\n' +
'              </a>\n' +
'              <a href="/cost-calculator/" class="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center">\n' +
'                Instant Quote\n' +
'              </a>\n' +
'            </div>\n' +
'          </div>\n' +
'          <!-- Hero Image -->\n' +
'          <div class="relative mt-8 lg:mt-0">\n' +
'             <div class="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10 h-1/2 bottom-0"></div>\n' +
'             <!-- Using an enclosed related image -->\n' +
'             <img src="/images/true-cost-car-shipping-2026.webp" alt="Enclosed Auto Transport Truck" class="w-full h-auto object-cover rounded-2xl shadow-2xl relative z-0">\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'    </section>\n' +
'\n' +
'    <!-- Main Article Content -->\n' +
'    <section class="py-16 -mt-24 relative z-20">\n' +
'      <div class="container mx-auto px-4 lg:px-8 max-w-4xl">\n' +
'        <div class="stripe-card p-6 md:p-12 bg-white rounded-2xl shadow-xl">\n' +
'          \n' +
'          <div class="prose max-w-none text-[#425466] text-lg leading-relaxed space-y-8">\n' +
'            <p><strong>Enclosed auto transport</strong> is the gold standard for shipping high-value, irreplaceable, and low-clearance vehicles across the United States. Unlike open carriers, enclosed trailers fully protect your vehicle from weather, road debris, salt spray, dust, and UV exposure during the entire journey.</p>\n' +
'            <p>Every vehicle that demands more than just safe arrival — show cars, freshly restored classics, six-figure exotics, and low-clearance supercars — ships enclosed. Neon Auto Transport connects you with FMCSA-licensed enclosed carriers with <strong>zero upfront deposit, $500,000 cargo insurance, and a locked-in price guarantee.</strong></p>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">What Is Enclosed Auto Transport?</h2>\n' +
'            <p>Enclosed auto transport ships your vehicle inside a fully covered trailer — completely sealed from outside elements. Where open carriers expose vehicles to weather, dust, and road debris, enclosed trailers create a protected environment from pickup to delivery. Your vehicle travels alone or alongside a handful of other high-value vehicles, handled with soft-tie restraints that protect suspension and paintwork, and loaded via hydraulic lift gates that eliminate ground clearance risk.</p>\n' +
'            <p>Enclosed trailers make up roughly 10% of the auto transport carrier fleet, which means availability is more limited than open transport — but for vehicles where condition is non-negotiable, the premium is worth every dollar.</p>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">Enclosed Auto Transport Cost — 2026 Pricing Guide</h2>\n' +
'            <p>Enclosed carrier transport for a 1,500-mile shipment typically ranges from $1,400 to $1,700, although high-end or oversized vehicles may cost more. Here is the full breakdown by distance:</p>\n' +
'\n' +
'            <div class="overflow-x-auto rounded-xl shadow-sm border border-[#e6e6e6] mb-8">\n' +
'              <table class="w-full text-left border-collapse">\n' +
'                <thead>\n' +
'                  <tr class="bg-gradient-to-r from-[#0a2540] to-[#1a365d] text-white">\n' +
'                    <th class="p-4 font-bold">Distance</th>\n' +
'                    <th class="p-4 font-bold">Typical Route</th>\n' +
'                    <th class="p-4 font-bold text-[#00d4ff]">Enclosed Cost</th>\n' +
'                    <th class="p-4 font-bold">Open Cost</th>\n' +
'                    <th class="p-4 font-bold">Premium</th>\n' +
'                  </tr>\n' +
'                </thead>\n' +
'                <tbody class="divide-y divide-[#e6e6e6] bg-white text-base">\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Under 500 miles</td><td class="p-4">VA to FL, NY to OH</td><td class="p-4 font-bold text-[#635bff]">$900 – $1,200</td><td class="p-4">$550 – $750</td><td class="p-4">~40% more</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">500–1,000 miles</td><td class="p-4">TX to FL, IL to GA</td><td class="p-4 font-bold text-[#635bff]">$1,100 – $1,500</td><td class="p-4">$700 – $950</td><td class="p-4">~40% more</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">1,000–1,500 miles</td><td class="p-4">CA to TX, NY to FL</td><td class="p-4 font-bold text-[#635bff]">$1,400 – $1,900</td><td class="p-4">$900 – $1,200</td><td class="p-4">~45% more</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">1,500–2,000 miles</td><td class="p-4">CA to IL, TX to NY</td><td class="p-4 font-bold text-[#635bff]">$1,700 – $2,300</td><td class="p-4">$1,050 – $1,400</td><td class="p-4">~50% more</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">2,000+ miles</td><td class="p-4">CA to NY, FL to WA</td><td class="p-4 font-bold text-[#635bff]">$2,000 – $2,800</td><td class="p-4">$1,200 – $1,700</td><td class="p-4">~55% more</td></tr>\n' +
'                </tbody>\n' +
'              </table>\n' +
'            </div>\n' +
'            <p class="text-sm italic text-gray-500">2026 market rates for a standard luxury vehicle. Exotic or oversized vehicles may cost more. Get an instant quote for your exact vehicle and route.</p>\n' +
'\n' +
'            <ul class="list-disc pl-6 space-y-3 mt-6">\n' +
'                <li><strong>Cost per mile:</strong> Enclosed car transport costs between $1.00 and $2.50 per mile depending on distance and vehicle type. Longer routes cost less per mile. Short regional routes under 300 miles are the most expensive on a per-mile basis.</li>\n' +
'            </ul>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">What drives the premium over open transport:</h3>\n' +
'            <p>Enclosed transport typically costs 30–60% more than open shipping due to three structural reasons: fewer carriers in the fleet, lower vehicle capacity per trailer (2–6 vehicles vs. 8–10), and higher insurance requirements per shipment.</p>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">Types of Enclosed Auto Transport Trailers</h2>\n' +
'            <p>Not all enclosed carriers are identical. The trailer type significantly affects your pricing, pickup availability, and level of protection:</p>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Soft-Sided Enclosed Trailers</h3>\n' +
'            <p>The most common enclosed trailer type. Heavy-duty vinyl curtains wrap the trailer on all sides, protecting from weather, dust, and road debris. Lighter than hard-sided trailers, making them more fuel-efficient and more widely available. Best for most luxury and classic cars at a moderate premium over open transport. Ideal for vehicles valued $80,000–$250,000.</p>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Hard-Sided Enclosed Trailers</h3>\n' +
'            <p>Fully rigid aluminum or steel walls on all sides. Hard-sided trailers provide a rigid barrier against the outside world and are the most secure option, preferred for high-stakes deliveries. Often equipped with air-ride suspension for the smoothest possible transit. Best for museum-quality classics, seven-figure exotics, and vehicles where any vibration is a concern.</p>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Single-Car Enclosed Trailers</h3>\n' +
'            <p>Single-car enclosed trailers carry one vehicle, usually with a fully padded interior and hydraulic lift — used for million-dollar exotics and irreplaceable classics where any contact with another vehicle is unacceptable. Most expensive option but provides the highest level of individual attention and care.</p>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Air-Ride Suspension Trailers</h3>\n' +
'            <p>A feature available on select hard-sided and soft-sided carriers. Air-ride suspension absorbs road vibrations more effectively than standard spring suspension — critical for restored vehicles with delicate mechanical components or original paint. Ask specifically for air-ride when booking if condition is paramount.</p>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Hydraulic Lift Gate Trailers</h3>\n' +
'            <p>For owners of exotic cars with low ground clearance, a lift gate is mandatory. It allows the car to be loaded perfectly level, eliminating the risk of scraping the undercarriage on a traditional ramp. Any vehicle with ground clearance under 4 inches should request a lift gate equipped carrier at booking.</p>\n' +
'\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">Which Vehicles Need Enclosed Auto Transport?</h2>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Always ship enclosed:</h3>\n' +
'            <ul class="list-disc pl-6 space-y-3">\n' +
'              <li>Exotic and supercar brands — Ferrari, Lamborghini, Bugatti, McLaren, Porsche 911 GT3/RS, Koenigsegg</li>\n' +
'              <li>Classic and vintage vehicles — pre-1980 American muscle, European classics, original unrestored vehicles</li>\n' +
'              <li>Recently restored show cars — any vehicle where paint or mechanical originality is critical</li>\n' +
'              <li>Low-clearance vehicles — ground clearance under 4 inches requires lift gate equipped enclosed carrier</li>\n' +
'              <li>Vehicles valued over $150,000 — insurance peace of mind alone justifies the premium</li>\n' +
'              <li>Electric vehicles on certain routes — most EVs are heavier than equivalent gas vehicles due to battery weight and may exceed open trailer per-vehicle weight limits</li>\n' +
'            </ul>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Consider enclosed:</h3>\n' +
'            <ul class="list-disc pl-6 space-y-3">\n' +
'              <li>Luxury daily drivers valued $80,000–$150,000 — Mercedes S-Class, BMW 7 Series, Audi A8, Lexus LS</li>\n' +
'              <li>Any vehicle shipping through salt-belt states November–March (see salt belt section below)</li>\n' +
'              <li>Recently painted vehicles — fresh paintwork is vulnerable to rock chips on open carriers</li>\n' +
'              <li>Collector vehicles regardless of value — sentimental and historical value exceeds replacement cost</li>\n' +
'            </ul>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Open transport is fine for:</h3>\n' +
'            <ul class="list-disc pl-6 space-y-3">\n' +
'              <li>Standard luxury vehicles under $80,000 in daily driver condition</li>\n' +
'              <li>Any vehicle you would drive through rain without concern</li>\n' +
'              <li>Vehicles where minor cosmetic wear is acceptable</li>\n' +
'            </ul>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">The Salt Belt Warning — Why Winter Route Matters</h2>\n' +
'            <div class="bg-[#fff9e6] border-l-4 border-[#ffc107] p-6 rounded-r-lg mb-8">\n' +
'              <p class="m-0 text-[#0a2540]">This is the single most important factor most shippers never consider. Road salt is the silent threat on Northeast and Midwest open-trailer routes between November and March. Salt spray is corrosive and reaches the underbody of vehicles on open trailers — particularly bad for vehicles with steel components, classic cars with original undercoating, and aluminum-bodied luxury vehicles. The undercarriage exposure during a 1,000+ mile winter route can introduce rust patterns that take months to surface.</p>\n' +
'            </div>\n' +
'            <p>If you are shipping any of the following between November and April through states like Ohio, Pennsylvania, New York, Illinois, Michigan, or Massachusetts — choose enclosed:</p>\n' +
'            <ul class="list-disc pl-6 space-y-3">\n' +
'              <li>Any classic vehicle with original undercoating</li>\n' +
'              <li>Aluminum-bodied vehicles (many modern luxury cars)</li>\n' +
'              <li>Recently restored vehicles</li>\n' +
'              <li>Any vehicle you plan to show or sell</li>\n' +
'            </ul>\n' +
'            <p><strong>The enclosed premium on a winter route is functioning as corrosion insurance — not just weather protection.</strong></p>\n' +
'\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">Enclosed Auto Transport Insurance — What\'s Covered</h2>\n' +
'            <p>Insurance is where enclosed transport provides its clearest financial advantage over open:</p>\n' +
'\n' +
'            <div class="overflow-x-auto rounded-xl shadow-sm border border-[#e6e6e6] mb-8">\n' +
'              <table class="w-full text-left border-collapse">\n' +
'                <thead>\n' +
'                  <tr class="bg-[#f6f9fc] border-b border-[#e6e6e6]">\n' +
'                    <th class="p-4 font-bold text-[#0a2540]">Coverage Type</th>\n' +
'                    <th class="p-4 font-bold text-[#0a2540]">Open Transport</th>\n' +
'                    <th class="p-4 font-bold text-[#635bff]">Enclosed Transport</th>\n' +
'                  </tr>\n' +
'                </thead>\n' +
'                <tbody class="divide-y divide-[#e6e6e6] bg-white text-base">\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Standard cargo coverage</td><td class="p-4">Up to $250,000</td><td class="p-4 font-bold text-[#635bff]">Up to $500,000</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Per-vehicle coverage</td><td class="p-4">Shared across 8–10 vehicles</td><td class="p-4 font-bold text-[#635bff]">Dedicated per vehicle</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Weather damage</td><td class="p-4 text-red-500 font-bold">Standard</td><td class="p-4 font-bold text-[#635bff]">Premium</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">COI provided before dispatch</td><td class="p-4 text-green-500 font-bold">✅ Yes</td><td class="p-4 text-green-500 font-bold">✅ Yes</td></tr>\n' +
'                </tbody>\n' +
'              </table>\n' +
'            </div>\n' +
'\n' +
'            <p>Enclosed carriers typically carry $250,000 to $1,000,000+ per shipment. With only 2–6 vehicles on board, that means $40,000 to $500,000 of coverage per vehicle — appropriate for the luxury, classic, and exotic cars enclosed trailers usually carry.</p>\n' +
'            <p><strong>Your right as a shipper:</strong> Before any vehicle is loaded, you are entitled to request the carrier\'s Certificate of Insurance. Neon provides this automatically before dispatch on every enclosed shipment. If any broker or carrier refuses to provide a COI, treat it as a red flag and do not proceed.</p>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">How to Prepare Your Vehicle for Enclosed Transport</h2>\n' +
'            <p>Enclosed transport customers typically have higher-value vehicles. These preparation steps apply specifically to them:</p>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">Before pickup:</h3>\n' +
'            <ul class="list-disc pl-6 space-y-3">\n' +
'              <li>Detail and photograph the vehicle extensively — every panel, wheel, undercarriage, and interior. Use timestamps.</li>\n' +
'              <li>Document all pre-existing imperfections in writing on the Bill of Lading. Be specific — "hairline scratch, driver door, 3 inches above handle"</li>\n' +
'              <li>Disable aftermarket alarm systems and provide the disarm code to your driver</li>\n' +
'              <li>Remove all personal items, floor mats, and loose accessories</li>\n' +
'              <li>Note any mechanical sensitivities — stiff clutch, sensitive brakes, low-clearance front lip</li>\n' +
'              <li>Ensure the gas tank is at 1/4 full</li>\n' +
'              <li>For low-clearance vehicles — confirm the carrier has a hydraulic lift gate before the booking is finalized</li>\n' +
'              <li>For vehicles with aftermarket exhausts — notify the carrier so they can plan loading positioning</li>\n' +
'              <li>Retract or remove aftermarket spoilers if they affect trailer clearance</li>\n' +
'              <li>Have your title or registration available at pickup for identity verification</li>\n' +
'            </ul>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">At pickup:</h3>\n' +
'            <p>Walk the vehicle with the driver before loading. Review and sign the Bill of Lading together — every noted imperfection should be recorded. Keep your copy. This is your legal protection if any new damage occurs.</p>\n' +
'\n' +
'            <h3 class="text-xl font-bold text-[#0a2540] mt-8 mb-4">At delivery:</h3>\n' +
'            <p>Inspect in daylight before signing the delivery BOL. Check paint under direct light. Verify all panels, glass, and wheels. Any new damage must be noted on the BOL before signing and photographed immediately. Do not sign a clean BOL if you have any concerns.</p>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">Why Choose Neon for Enclosed Auto Transport?</h2>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#635bff] mt-8 mb-2">No upfront deposit — not even for enclosed.</h3>\n' +
'            <p>Most competitors require $200–$500 deposits to book enclosed transport. Neon charges nothing until a vetted carrier is assigned. For a $150,000 Ferrari, you should not be handing money to a broker before your vehicle is actively dispatched.</p>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#635bff] mt-8 mb-2">Direct driver contact.</h3>\n' +
'            <p>You receive your enclosed carrier driver\'s direct phone number. For irreplaceable vehicles, being able to call or text the driver directly — not a call center — is not optional. It\'s a requirement. We build it into every booking.</p>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#635bff] mt-8 mb-2">$500,000 cargo insurance on every enclosed shipment.</h3>\n' +
'            <p>Every enclosed carrier in our network carries the minimum FMCSA-required coverage plus additional cargo insurance up to $500,000. You receive a Certificate of Insurance before your vehicle moves. No exceptions.</p>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#635bff] mt-8 mb-2">Price-lock guarantee.</h3>\n' +
'            <p>The enclosed transport quote you receive is the final price. No fuel surcharges added at delivery. No "market rate adjustment" after booking. Your price is locked.</p>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#635bff] mt-8 mb-2">Carrier vetting for enclosed specifically.</h3>\n' +
'            <p>Not every carrier that runs open transport is qualified for enclosed. Our network vets enclosed carriers separately — confirmed FMCSA authority, valid insurance, clean safety record, appropriate equipment (lift gate, air-ride, soft-tie restraints), and experience with high-value vehicles.</p>\n' +
'            \n' +
'            <h3 class="text-xl font-bold text-[#635bff] mt-8 mb-2">10,000+ carrier network.</h3>\n' +
'            <p>A large network means we find the right enclosed carrier for your specific vehicle — not just the nearest available truck. For a 1930s classic, we find a carrier with padded interiors. For a McLaren 720S, we find a carrier with a hydraulic lift gate. The right carrier for the right vehicle.</p>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-6">Enclosed vs. Open Auto Transport — Complete Comparison</h2>\n' +
'            \n' +
'            <div class="overflow-x-auto rounded-xl shadow-sm border border-[#e6e6e6] mb-12">\n' +
'              <table class="w-full text-left border-collapse">\n' +
'                <thead>\n' +
'                  <tr class="bg-[#f6f9fc] border-b border-[#e6e6e6]">\n' +
'                    <th class="p-4 font-bold text-[#0a2540]">Feature</th>\n' +
'                    <th class="p-4 font-bold text-[#635bff]">Enclosed Transport</th>\n' +
'                    <th class="p-4 font-bold text-[#0a2540]">Open Transport</th>\n' +
'                  </tr>\n' +
'                </thead>\n' +
'                <tbody class="divide-y divide-[#e6e6e6] bg-white text-base">\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Starting cost</td><td class="p-4 font-bold text-[#635bff]">$900</td><td class="p-4">$550</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Cost per mile</td><td class="p-4 text-[#635bff]">$1.00 – $2.50</td><td class="p-4">$0.70 – $0.90</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Vehicle exposure</td><td class="p-4 text-green-500 font-bold">Fully protected</td><td class="p-4 text-red-500 font-bold">Open to elements</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Weather protection</td><td class="p-4 text-green-500 font-bold">Complete</td><td class="p-4 text-red-500 font-bold">None</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Salt spray protection</td><td class="p-4 text-green-500 font-bold">Complete</td><td class="p-4 text-red-500 font-bold">None</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Insurance coverage</td><td class="p-4 font-bold text-[#635bff]">Up to $500,000</td><td class="p-4">Up to $250,000</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Carrier availability</td><td class="p-4 text-orange-500 font-bold">Limited</td><td class="p-4 text-green-500 font-bold">Very high</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Vehicles per trailer</td><td class="p-4 text-[#635bff]">2–6</td><td class="p-4">8–10</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Pickup window</td><td class="p-4">3–7 days typical</td><td class="p-4 text-green-500 font-bold">1–3 days typical</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Best for</td><td class="p-4 font-bold text-[#635bff]">Luxury, classic, exotic</td><td class="p-4">Standard vehicles</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Lift gate available</td><td class="p-4 text-green-500 font-bold">Yes</td><td class="p-4 text-orange-500 font-bold">Rarely</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Air-ride suspension</td><td class="p-4 text-green-500 font-bold">Available</td><td class="p-4 text-orange-500 font-bold">Rarely</td></tr>\n' +
'                  <tr class="hover:bg-[#f6f9fc] transition-colors"><td class="p-4 font-semibold text-[#0a2540]">Soft-tie restraints</td><td class="p-4 text-green-500 font-bold">Standard</td><td class="p-4 text-orange-500 font-bold">Not always</td></tr>\n' +
'                </tbody>\n' +
'              </table>\n' +
'            </div>\n' +
'\n' +
'            <!-- Internal Links Section -->\n' +
'            <div class="bg-[#f6f9fc] p-8 rounded-xl border border-[#e6e6e6] my-12">\n' +
'              <h3 class="text-xl font-bold text-[#0a2540] mb-4">Related Services</h3>\n' +
'              <ul class="space-y-3">\n' +
'                <li><a href="/services/open-auto-transport/" class="text-[#635bff] font-medium hover:underline flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Open Auto Transport — Most Affordable Option</a></li>\n' +
'                <li><a href="/services/luxury-car-shipping/" class="text-[#635bff] font-medium hover:underline flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Luxury Car Shipping Services</a></li>\n' +
'                <li><a href="/services/expedited-auto-transport/" class="text-[#635bff] font-medium hover:underline flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Expedited Auto Transport</a></li>\n' +
'                <li><a href="/services/door-to-door-car-shipping/" class="text-[#635bff] font-medium hover:underline flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Door-to-Door Car Shipping</a></li>\n' +
'                <li><a href="/california-to-texas-car-shipping/" class="text-[#635bff] font-medium hover:underline flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Most Popular Route: California to Texas</a></li>\n' +
'                <li><a href="/faqs/" class="text-[#635bff] font-medium hover:underline flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Full Auto Transport FAQ</a></li>\n' +
'              </ul>\n' +
'            </div>\n' +
'\n' +
'            <!-- Author Block -->\n' +
'            <div class="flex items-center gap-4 py-8 border-y border-[#e6e6e6] mt-12 mb-12">\n' +
'              <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover shadow-inner flex-shrink-0 border-2 border-[#e0e7ff]">\n' +
'              <div>\n' +
'                <div class="font-bold text-[#0a2540]">Reviewed by Shazil Ali</div>\n' +
'                <div class="text-sm text-[#425466]">Director of Operations, Neon Auto Transport — Last Updated June 2026</div>\n' +
'              </div>\n' +
'            </div>\n' +
'\n' +
'            <h2 class="text-3xl font-black text-[#0a2540] mt-12 mb-8">Enclosed Auto Transport FAQs</h2>\n' +
'            \n' +
'            <div class="space-y-6">\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">What is enclosed auto transport?</h3>\n' +
'                <p class="text-[#425466]">Enclosed auto transport ships your vehicle inside a fully covered trailer, protecting it from weather, road debris, dust, and salt spray during transit. It is the premium method used for luxury, classic, exotic, and high-value vehicles that require maximum protection. Enclosed trailers carry 2–6 vehicles and provide cargo insurance coverage up to $500,000.</p>\n' +
'              </div>\n' +
'\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">How much does enclosed auto transport cost?</h3>\n' +
'                <p class="text-[#425466]">Enclosed auto transport costs between $900 and $2,800 depending on the distance, vehicle size, and route. Short regional routes under 500 miles typically cost $900–$1,200. Cross-country shipments over 2,000 miles average $2,000–$2,800. Enclosed transport costs 30–60% more than open transport due to limited carrier availability and higher per-vehicle insurance requirements.</p>\n' +
'              </div>\n' +
'\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">Is enclosed auto transport worth it?</h3>\n' +
'                <p class="text-[#425466]">Yes, for the right vehicle. If your car is valued over $80,000, has low ground clearance, is a classic or restored vehicle, or is shipping through salt-belt states in winter, enclosed transport is worth every dollar of the premium. The cost difference between open and enclosed on a cross-country shipment is typically $600–$1,000 — a fraction of the cost of repairing paint damage, rust, or suspension damage on a high-value vehicle.</p>\n' +
'              </div>\n' +
'\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">What is the difference between soft-sided and hard-sided enclosed trailers?</h3>\n' +
'                <p class="text-[#425466]">Soft-sided trailers use heavy-duty vinyl curtains to protect vehicles — lighter, more fuel-efficient, and more widely available. Hard-sided trailers use rigid aluminum or steel walls — the highest level of protection, often with air-ride suspension, preferred for seven-figure exotics and museum-quality classics. For most luxury vehicles, soft-sided enclosed transport is adequate. For irreplaceable classics, hard-sided is recommended.</p>\n' +
'              </div>\n' +
'\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">Do I need to pay a deposit for enclosed transport?</h3>\n' +
'                <p class="text-[#425466]">Not with Neon Auto Transport. We charge no upfront deposit for any shipment — including enclosed. You pay nothing until a carrier is assigned. Most competitors charge $200–$500 just to book enclosed transport. We don\'t.</p>\n' +
'              </div>\n' +
'\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">How long does enclosed auto transport take?</h3>\n' +
'                <p class="text-[#425466]">Transit time depends on distance. Regional routes under 500 miles take 1–3 days. Mid-range routes of 500–1,500 miles take 3–6 days. Cross-country routes over 2,000 miles take 6–10 days. Enclosed carriers may have slightly longer pickup windows than open — plan for 3–7 days from booking to pickup, especially in rural areas or during peak season.</p>\n' +
'              </div>\n' +
'\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">Can you ship a non-running vehicle in an enclosed trailer?</h3>\n' +
'                <p class="text-[#425466]">Yes. Enclosed carriers can transport inoperable vehicles using winches and hydraulic lift gates. Non-running vehicles may incur an additional fee of $100–$250 depending on the equipment needed to load the vehicle safely.</p>\n' +
'              </div>\n' +
'\n' +
'              <div class="bg-[#f6f9fc] p-6 rounded-xl border border-[#e6e6e6]">\n' +
'                <h3 class="font-bold text-lg text-[#0a2540] mb-3">What vehicles require a hydraulic lift gate for enclosed transport?</h3>\n' +
'                <p class="text-[#425466]">Any vehicle with ground clearance under 4 inches requires a lift gate. This includes most modern supercars (Lamborghini Huracán, Ferrari 488, McLaren 720S, Porsche 911 GT3), extensively lowered vehicles, and vehicles with aftermarket front splitters or lips that would contact a standard loading ramp. Always notify us of your vehicle\'s ground clearance at booking so we confirm lift gate availability before dispatch.</p>\n' +
'              </div>\n' +
'            </div>\n' +
'\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'    </section>\n';

openHtml = openHtml.replace(/<main>[\s\S]*?<\/main>/, '<main>\n' + mainContent + '\n  </main>');

fs.writeFileSync('services/enclosed-auto-transport.html', openHtml);
console.log('Successfully replaced enclosed-auto-transport.html');

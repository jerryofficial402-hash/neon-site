import os
import re

FILE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\virginia-car-shipping\index.html"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description
content = re.sub(
    r'<title>.*?</title>',
    '<title>Virginia Car Shipping | $0 Deposit, Price-Lock Quote</title>',
    content
)
content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Ship your car to or from Virginia for $500–$1,500. $0 upfront deposit, $500K insurance, price locked at booking. Get your free quote in 60 seconds.">',
    content
)
content = re.sub(
    r'<meta property="og:title" content=".*?">',
    '<meta property="og:title" content="Virginia Car Shipping | $0 Deposit, Price-Lock Quote">',
    content
)
content = re.sub(
    r'<meta property="og:description" content=".*?">',
    '<meta property="og:description" content="Ship your car to or from Virginia for $500–$1,500. $0 upfront deposit, $500K insurance, price locked at booking. Get your free quote in 60 seconds.">',
    content
)
content = re.sub(
    r'<meta name="twitter:title" content=".*?">',
    '<meta name="twitter:title" content="Virginia Car Shipping | $0 Deposit, Price-Lock Quote">',
    content
)
content = re.sub(
    r'<meta name="twitter:description" content=".*?">',
    '<meta name="twitter:description" content="Ship your car to or from Virginia for $500–$1,500. $0 upfront deposit, $500K insurance, price locked at booking. Get your free quote in 60 seconds.">',
    content
)

# 2. Update Schemas in <head>
new_schemas = """  <!-- JSON-LD: Service / MovingCompany + FAQPage + BreadcrumbList -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Neon Auto Transport LLC",
  "url": "https://neonautotransport.com/virginia-car-shipping/",
  "telephone": "+1-571-576-7711",
  "priceRange": "$470-$2400",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2709 Neabsco Common Pl Suite 101",
    "addressLocality": "Woodbridge",
    "addressRegion": "VA",
    "postalCode": "22191",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Virginia"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "25"
  }
}
  </script>

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://neonautotransport.com/locations/" },
    { "@type": "ListItem", "position": 3, "name": "Virginia Car Shipping", "item": "https://neonautotransport.com/virginia-car-shipping/" }
  ]
}
  </script>

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car to Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most shipments cost $500 to $1,500, depending on distance. Short regional routes like North Carolina to Virginia run as low as $470-$610, while cross-country routes from California or Washington run $1,150-$2,400."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to ship a car to Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transit time depends on distance: 1-3 days for nearby East Coast routes, 1-4 days from Florida, and 4-10 days for cross-country routes from the West Coast."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be present for pickup and delivery in Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you or an authorized adult (18+) needs to be present to complete the joint inspection and sign the Bill of Lading at pickup, and the Proof of Delivery at drop-off."
      }
    },
    {
      "@type": "Question",
      "name": "Can you ship my car under military PCS orders to or from Norfolk or Quantico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Neon Auto Transport regularly coordinates POV shipments for military families under PCS orders, including scheduling flexibility around report dates."
      }
    },
    {
      "@type": "Question",
      "name": "Is my vehicle insured during transport to or from Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every carrier in the network carries active, verified cargo insurance, and Neon Auto Transport provides up to $500,000 in coverage from pickup through delivery."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between open and enclosed transport for Virginia shipments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open transport is the standard, most affordable option for daily drivers, SUVs, and trucks. Enclosed transport, which costs roughly 30-50% more, is recommended for classic, luxury, or exotic vehicles."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to book a Virginia shipment to avoid delays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book 2-3 weeks ahead of peak snowbird season (October-December southbound, April-May northbound) when I-95 demand is highest."
      }
    }
  ]
}
  </script>"""

# Replace schemas in head
content = re.sub(
    r'<!-- JSON-LD: Service \+ BreadcrumbList -->.*?</script>\s*<script type="application/ld\+json">.*?</script>\s*<script type="application/ld\+json">.*?</script>',
    new_schemas,
    content,
    flags=re.DOTALL
)

# 3. Locate Popular Routes table end (around line 487 in current file)
popular_routes_end_pattern = r'(</table>\s*</div>\s*</div>)'

rich_content_block = """
      <!-- Featured Snippet Answer & Quick Facts Box -->
      <div class="my-12">
        <!-- Breadcrumb Navigation UI -->
        <nav aria-label="Breadcrumb" class="mb-6 text-xs text-[#425466] font-semibold">
          <ol class="flex items-center gap-2 flex-wrap">
            <li><a href="/" class="hover:text-[#4338ca]">Home</a></li>
            <li>/</li>
            <li><a href="/locations/" class="hover:text-[#4338ca]">Locations</a></li>
            <li>/</li>
            <li class="text-[#0a2540] font-bold">Virginia Car Shipping</li>
          </ol>
        </nav>

        <!-- Featured Snippet Direct Answer Card -->
        <div class="bg-[#e0f2fe] border-l-4 border-[#0369a1] p-6 lg:p-8 rounded-r-2xl mb-8 shadow-sm">
          <h2 class="text-xl lg:text-2xl font-black text-[#0a2540] mb-3">How Much Does Virginia Car Shipping Cost & How Long Does It Take?</h2>
          <p class="text-[#0a2540] text-base lg:text-lg leading-relaxed font-medium">
            Shipping a car to or from Virginia typically costs <strong>$500 to $1,500</strong>, depending on distance. Short regional routes (Virginia to North Carolina) run as low as <strong>$470</strong>, while cross-country routes (Virginia to California or Washington) run <strong>$1,150–$2,400</strong>. Most shipments take <strong>1–9 days</strong>, and Neon Auto Transport requires <strong>no upfront deposit</strong>.
          </p>
        </div>

        <!-- Quick Facts / TL;DR Grid Box -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 border border-[#e6e6e6] shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-12">
          <h3 class="text-xs font-black text-[#0369a1] uppercase tracking-widest mb-6 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#39FF14]"></span> QUICK FACTS / AT A GLANCE
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Cost Range</div>
              <div class="font-bold text-[#0a2540] text-base">$500–$1,500 (Regional ~$470, Cross-Country ~$2,400)</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Transit Time</div>
              <div class="font-bold text-[#0a2540] text-base">1–9 Days (Varies by mileage & route)</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Upfront Deposit</div>
              <div class="font-bold text-[#0369a1] text-base">$0 Required at Booking</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Cargo Insurance</div>
              <div class="font-bold text-[#0a2540] text-base">Up to $500,000 Active Coverage</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Major Corridors</div>
              <div class="font-bold text-[#0a2540] text-base">I-95 (East Coast), I-81 (Valley), I-64 (East-West)</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Licensing</div>
              <div class="font-bold text-[#0a2540] text-base">USDOT #4355879 | MC #1703787</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Introduction Section -->
      <div class="bg-white rounded-2xl p-8 lg:p-10 border border-[#e6e6e6] shadow-sm mb-12 space-y-6 text-[#425466] leading-relaxed">
        <h2 class="text-3xl font-black text-[#0a2540] tracking-tight">Virginia Car Shipping — Trusted Auto Transport, No Deposit Required</h2>
        <p class="text-base lg:text-lg">
          Shipping a car in or out of Virginia shouldn't require you to gamble on a quote that changes the day before pickup. That's the single most common complaint we hear from people who've used another broker before finding us — a low number to get the booking, then a call a few days later asking for more money once no carrier will actually take the load at that price.
        </p>
        <p class="text-base lg:text-lg">
          We at <strong>Neon Auto Transport LLC</strong> built our process around removing that risk. We don't collect a deposit until a carrier is actually assigned to your shipment, we verify that carrier's insurance is active before your vehicle ever leaves the driveway, and the price you're quoted is the price you pay. Whether you're a Northern Virginia federal employee relocating to Florida, a Hampton Roads Navy family shipping a POV under PCS orders, or a Richmond dealer moving inventory, this guide covers exactly what to expect — real costs, real timelines, and the specific things that make Virginia auto transport different from shipping in most other states.
        </p>
      </div>

      <!-- How Virginia Car Shipping Works Section -->
      <div class="bg-white rounded-2xl p-8 lg:p-10 border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-3xl font-black text-[#0a2540] tracking-tight mb-8">How Virginia Car Shipping Works With Neon Auto Transport</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
            <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white font-black flex items-center justify-center mb-4">1</div>
            <h3 class="font-bold text-[#0a2540] text-lg mb-2">Request a Quote</h3>
            <p class="text-sm text-[#425466]">Enter your pickup and delivery ZIP codes, vehicle year/make/model, and preferred dates. You'll see an instant, transparent price range.</p>
          </div>
          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
            <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white font-black flex items-center justify-center mb-4">2</div>
            <h3 class="font-bold text-[#0a2540] text-lg mb-2">Book with $0 Upfront Deposit</h3>
            <p class="text-sm text-[#425466]">Nothing is charged until we've matched your shipment to a specific, vetted carrier — not a penny before confirmation.</p>
          </div>
          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
            <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white font-black flex items-center justify-center mb-4">3</div>
            <h3 class="font-bold text-[#0a2540] text-lg mb-2">Carrier Assignment</h3>
            <p class="text-sm text-[#425466]">We match your route to a carrier from our network, verifying their FMCSA operating authority, active cargo insurance, and safety record.</p>
          </div>
          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
            <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white font-black flex items-center justify-center mb-4">4</div>
            <h3 class="font-bold text-[#0a2540] text-lg mb-2">Vehicle Pickup</h3>
            <p class="text-sm text-[#425466]">The carrier calls ahead to confirm timing, then completes a joint inspection with you before you both sign the Bill of Lading.</p>
          </div>
          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
            <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white font-black flex items-center justify-center mb-4">5</div>
            <h3 class="font-bold text-[#0a2540] text-lg mb-2">Safe Transit</h3>
            <p class="text-sm text-[#425466]">Your vehicle travels via open or enclosed carrier along major corridors — I-95 for East Coast, I-81 for Shenandoah/Midwest, or I-64 for points west.</p>
          </div>
          <div class="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
            <div class="w-10 h-10 rounded-full bg-[#0a2540] text-white font-black flex items-center justify-center mb-4">6</div>
            <h3 class="font-bold text-[#0a2540] text-lg mb-2">Final Delivery</h3>
            <p class="text-sm text-[#425466]">A second joint inspection happens at drop-off, and you sign the Proof of Delivery to close out the shipment cleanly.</p>
          </div>
        </div>
      </div>

      <!-- Key Virginia Cities We Serve -->
      <div class="bg-white rounded-2xl p-8 lg:p-10 border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-3xl font-black text-[#0a2540] tracking-tight mb-6">Key Virginia Cities We Serve</h2>
        <div class="grid md:grid-cols-2 gap-6 text-sm text-[#425466] leading-relaxed">
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-lg mb-2 flex items-center gap-2">
              <span class="text-[#0369a1]">📍</span> Richmond & Central Virginia
            </h3>
            <p>Central Virginia's largest metro, dense dealer and corporate relocation traffic, direct I-64 and I-95 access. Connects seamlessly with out-of-state regional hubs.</p>
            <a href="/routes/city/richmond-va/" class="inline-block mt-3 text-xs font-bold text-[#0369a1] hover:underline">Explore Richmond Auto Transport →</a>
          </div>
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-lg mb-2 flex items-center gap-2">
              <span class="text-[#0369a1]">📍</span> Virginia Beach & Norfolk (Hampton Roads)
            </h3>
            <p>The state's largest concentration of military PCS shipments, anchored by Naval Station Norfolk and Joint Base Langley-Eustis. Fast carrier dispatch for military families.</p>
            <div class="flex gap-4 mt-3 text-xs font-bold text-[#0369a1]">
              <a href="/routes/city/virginia-beach-va/" class="hover:underline">Virginia Beach →</a>
              <a href="/routes/city/norfolk-va/" class="hover:underline">Norfolk →</a>
            </div>
          </div>
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-lg mb-2 flex items-center gap-2">
              <span class="text-[#0369a1]">📍</span> Arlington & Alexandria (Northern Virginia)
            </h3>
            <p>Federal employee relocations, DC-metro corporate transfers, and dense proximity to Marine Corps Base Quantico and Fort Belvoir. Local Woodbridge HQ advantage!</p>
            <div class="flex gap-4 mt-3 text-xs font-bold text-[#0369a1]">
              <a href="/car-shipping-arlington-va/" class="hover:underline">Arlington VA →</a>
              <a href="/car-shipping-woodbridge-va/" class="hover:underline">Woodbridge HQ →</a>
            </div>
          </div>
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-lg mb-2 flex items-center gap-2">
              <span class="text-[#0369a1]">📍</span> Shenandoah Valley & I-81 Corridor
            </h3>
            <p>Richmond-to-Roanoke via I-81 — the Shenandoah Valley corridor, a common route for Midwest and Appalachian-bound shipments avoiding I-95 congestion.</p>
            <a href="/routes/city/roanoke-va/" class="inline-block mt-3 text-xs font-bold text-[#0369a1] hover:underline">Explore Roanoke Shipping →</a>
          </div>
        </div>
      </div>

      <!-- Specialized Virginia Auto Transport Services -->
      <div class="bg-white rounded-2xl p-8 lg:p-10 border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-3xl font-black text-[#0a2540] tracking-tight mb-8">Specialized Virginia Auto Transport Services</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-xl mb-3">Open vs. Enclosed Transport</h3>
            <p class="text-sm text-[#425466] leading-relaxed mb-3">
              <strong>Open transport</strong> is the standard, most economical option and what the large majority of Virginia shipments use — daily drivers, SUVs, and trucks all ship safely this way.
            </p>
            <p class="text-sm text-[#425466] leading-relaxed">
              <strong>Enclosed transport</strong> is worth the added cost (typically 30–50% above open rates) for classic cars, exotics, and any vehicle you want fully shielded from road debris and weather — particularly relevant for longer cross-country routes.
            </p>
            <div class="flex gap-4 mt-4 text-xs font-bold text-[#0369a1]">
              <a href="/services/open-auto-transport/" class="hover:underline">Open Auto Transport →</a>
              <a href="/services/enclosed-auto-transport/" class="hover:underline">Enclosed Transport →</a>
            </div>
          </div>
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-xl mb-3">Military POV Shipping — Norfolk, Quantico & Beyond</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Virginia has one of the highest concentrations of military installations of any state — Naval Station Norfolk, Marine Corps Base Quantico, Joint Base Langley-Eustis, and Fort Belvoir all generate steady PCS-driven vehicle shipping demand. We regularly coordinate POV (Privately Owned Vehicle) shipments for military families relocating under government orders, including handling the documentation and scheduling flexibility that comes with a PCS timeline.
            </p>
            <a href="/services/military-car-shipping/" class="inline-block mt-4 text-xs font-bold text-[#0369a1] hover:underline">Military POV Shipping Details →</a>
          </div>
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-xl mb-3">Snowbird & Seasonal Shipping on I-95</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Every fall, Virginia sees a measurable spike in southbound vehicle shipments as seasonal residents head to Florida and the Gulf Coast for winter — peaking October through December, with the reverse migration back north peaking in April and May. Booking 2–3 weeks ahead of these peak windows is the most reliable way to lock in both price and carrier availability.
            </p>
            <a href="/services/snow-bird-car-shipping/" class="inline-block mt-4 text-xs font-bold text-[#0369a1] hover:underline">Snowbird Transport Services →</a>
          </div>
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <h3 class="font-bold text-[#0a2540] text-xl mb-3">Dealership & Auction Transfers</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Virginia's dealer networks — particularly around Richmond and Northern Virginia — regularly move inventory to and from out-of-state auctions and dealer-to-dealer transfers. We support multi-vehicle and recurring shipment scheduling for dealers who need predictable, repeatable logistics rather than a one-off quote each time.
            </p>
            <a href="/services/car-dealer-shipping/" class="inline-block mt-4 text-xs font-bold text-[#0369a1] hover:underline">Dealer & Auction Shipping →</a>
          </div>
        </div>
      </div>

      <!-- Why Choose Neon Auto Transport LLC? -->
      <div class="bg-white rounded-2xl p-8 lg:p-10 border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-3xl font-black text-[#0a2540] tracking-tight mb-6">Why Choose Neon Auto Transport LLC?</h2>
        <p class="text-base text-[#425466] mb-8 leading-relaxed">
          We're a licensed broker, not a marketplace that hands your shipment to the lowest, unverified bidder. That distinction matters more than most people realize until something goes wrong:
        </p>
        <div class="space-y-4 text-sm text-[#425466]">
          <div class="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <span class="w-6 h-6 rounded-full bg-[#39FF14] text-[#0a2540] font-black flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
            <div>
              <strong class="text-[#0a2540] font-bold text-base block mb-1">Vetted Carriers Before Assignment</strong>
              Active operating authority, current cargo and liability insurance, and safety records are all checked before your vehicle is matched to a truck.
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <span class="w-6 h-6 rounded-full bg-[#39FF14] text-[#0a2540] font-black flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
            <div>
              <strong class="text-[#0a2540] font-bold text-base block mb-1">No Bait-and-Switch Pricing</strong>
              The quote you receive reflects what carriers are actually accepting for your route right now, not an artificially low number designed to get you to book.
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <span class="w-6 h-6 rounded-full bg-[#39FF14] text-[#0a2540] font-black flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
            <div>
              <strong class="text-[#0a2540] font-bold text-base block mb-1">$0 Upfront Deposit</strong>
              You're not paying anything until a specific carrier is confirmed for your shipment.
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <span class="w-6 h-6 rounded-full bg-[#39FF14] text-[#0a2540] font-black flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
            <div>
              <strong class="text-[#0a2540] font-bold text-base block mb-1">Direct Communication</strong>
              You get direct access to the team handling your shipment, not a black-box dispatch queue.
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
            <span class="w-6 h-6 rounded-full bg-[#39FF14] text-[#0a2540] font-black flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
            <div>
              <strong class="text-[#0a2540] font-bold text-base block mb-1">$500,000 Cargo Insurance</strong>
              Active from pickup through delivery on every single shipment for complete peace of mind.
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section (Interactive Accordion) -->
      <div class="bg-white rounded-2xl p-8 lg:p-10 border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-3xl font-black text-[#0a2540] tracking-tight mb-8">Virginia Car Shipping FAQs</h2>
        <div class="space-y-4">
          <details class="group bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
              How much does it cost to ship a car to Virginia?
              <span class="text-[#0369a1] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm lg:text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
              Most shipments cost $500 to $1,500, depending on distance. Short regional routes like North Carolina to Virginia run as low as $470–$610, while cross-country routes from California or Washington run $1,150–$2,400.
            </div>
          </details>
          <details class="group bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
              How long does it take to ship a car to Virginia?
              <span class="text-[#0369a1] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm lg:text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
              Transit time depends on distance: 1–3 days for nearby East Coast routes (New York, North Carolina), 1–4 days from Florida, and 4–10 days for cross-country routes from the West Coast.
            </div>
          </details>
          <details class="group bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
              Do I need to be present for pickup and delivery in Virginia?
              <span class="text-[#0369a1] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm lg:text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
              Yes, you or an authorized adult (18+) needs to be present to complete the joint inspection and sign the Bill of Lading at pickup, and the Proof of Delivery at drop-off.
            </div>
          </details>
          <details class="group bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
              Can you ship my car under military PCS orders to or from Norfolk or Quantico?
              <span class="text-[#0369a1] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm lg:text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
              Yes. We regularly coordinate POV shipments for military families under PCS orders, including scheduling flexibility around report dates and assistance with the required documentation.
            </div>
          </details>
          <details class="group bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
              Is my vehicle insured during transport to or from Virginia?
              <span class="text-[#0369a1] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm lg:text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
              Yes. Every carrier in our network carries active, verified cargo insurance, and Neon Auto Transport provides up to $500,000 in coverage from pickup through delivery.
            </div>
          </details>
          <details class="group bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
              What's the difference between open and enclosed transport for Virginia shipments?
              <span class="text-[#0369a1] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm lg:text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
              Open transport is the standard, most affordable option for daily drivers, SUVs, and trucks. Enclosed transport, which costs roughly 30–50% more, is recommended for classic, luxury, or exotic vehicles that need protection from road debris and weather.
            </div>
          </details>
          <details class="group bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
              When is the best time to book a Virginia shipment to avoid delays?
              <span class="text-[#0369a1] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm lg:text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
              Book 2–3 weeks ahead of peak snowbird season (October–December southbound, April–May northbound) when I-95 demand is highest. Outside these windows, 1–2 weeks' notice is typically sufficient.
            </div>
          </details>
        </div>
      </div>

      <!-- Ready to Ship CTA Banner -->
      <div class="bg-[#0a2540] rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl relative overflow-hidden mb-12">
        <div class="relative z-10 max-w-3xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-black mb-4 tracking-tight">Ready to Ship Your Car to or from Virginia?</h2>
          <p class="text-base lg:text-lg text-[#cdd5df] mb-8">
            No deposit. No bait-and-switch. Just a real price for your route, locked in at booking.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/cost-calculator/" class="w-full sm:w-auto bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]">
              Get Your Instant Quote →
            </a>
            <a href="tel:5715767711" class="w-full sm:w-auto border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition">
              Call (571) 576-7711
            </a>
          </div>
        </div>
      </div>
"""

# Replace content from </table></div></div> down to <div class="grid lg:grid-cols-3 gap-12">
if "</table>" in content:
    parts = content.split("</table>")
    table_part = parts[0] + "</table>"
    remainder = parts[1]
    
    # We want to replace from after the popular routes section to before </body>
    # Let's find where <div class="grid lg:grid-cols-3 gap-12"> starts
    grid_index = remainder.find('<div class="grid lg:grid-cols-3 gap-12">')
    if grid_index != -1:
        before_grid = remainder[:grid_index]
        after_grid = remainder[grid_index:]
        
        # We replace after_grid up to </main>
        main_index = after_grid.find('</main>')
        if main_index != -1:
            closing_main = after_grid[main_index:]
            new_content = table_part + before_grid + rich_content_block + closing_main
            
            with open(FILE_PATH, "w", encoding="utf-8") as f:
                f.write(new_content)
            print("SUCCESS: Fully integrated deployment package into virginia-car-shipping/index.html!")
        else:
            print("ERROR: </main> not found in after_grid")
    else:
        print("ERROR: <div class=\"grid lg:grid-cols-3 gap-12\"> not found in remainder")
else:
    print("ERROR: </table> not found")

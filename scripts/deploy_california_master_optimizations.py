import os
import re

CALI_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\california-car-shipping\index.html"

with open(CALI_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description in Head
content = re.sub(
    r'<title>.*?</title>',
    '<title>California Car Shipping | Ship a Car To or From California</title>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Get a California car shipping quote for door-to-door transport to or from Los Angeles, San Diego, San Francisco, Sacramento, San Jose, and Fresno. Compare open and enclosed auto transport rates and estimated transit times.">',
    content,
    flags=re.DOTALL
)

# 2. Fix FMSCA Typo and Replace "FMSCA & US Dot Approved" Badge
content = content.replace("FMSCA & US Dot Approved", "FMCSA Registered • USDOT #4355879 • MC #1703787")
content = content.replace("FMSCA", "FMCSA")

# 3. Update Hero Section Copy and Add EEAT Byline & Broker Disclosure
old_hero_p = r'<p class="text-lg text-\[\#425466\] mb-10 leading-relaxed">Planning to ship a car to or from California\?.*?</p>'

new_hero_copy = """<div class="flex items-center gap-3 text-xs font-semibold text-[#425466] mb-4 bg-white/80 px-3 py-1.5 rounded-lg border border-[#e6e6e6] w-fit">
                            <span>📅 Last updated: August 2026</span>
                            <span>•</span>
                            <span>✍️ Reviewed by: <a href="/why-neon/" class="text-[#2563eb] hover:underline font-bold">Neon Auto Transport Operations Team</a></span>
                        </div>
                        <p class="text-lg text-[#425466] mb-4 leading-relaxed font-normal">
                            Ship a car to or from California with door-to-door open or enclosed auto transport. Neon Auto Transport provides free California car shipping quotes for Los Angeles, San Diego, San Francisco, Sacramento, San Jose, Fresno, and statewide routes.
                        </p>
                        <p class="text-base text-[#425466] mb-8 leading-relaxed font-normal">
                            Estimated open-carrier pricing varies by distance, vehicle type, season, pickup flexibility, and carrier availability. Use our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a> to compare live market pricing for your exact route, or <a href="/car-shipping-quote/" class="text-[#2563eb] font-bold hover:underline">request a free quote</a> from an auto transport specialist.
                        </p>
                        <p class="text-xs text-slate-500 mb-8 font-medium">
                            Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange shipments through independently owned and insured motor carriers.
                        </p>"""

content = re.sub(old_hero_p, new_hero_copy, content, flags=re.DOTALL)

# 4. Add Contextual Links to Interstate Routes in Popular Routes Section
content = content.replace(
    '<h4 class="font-bold text-[#0a2540] text-xl">California</h4>\n                            <p class="text-[#468de6] italic text-[15px] font-semibold">to <span class="text-[#0a2540] not-italic">Texas</span></p>',
    '<h4 class="font-bold text-[#0a2540] text-xl"><a href="/california-to-texas-car-shipping/" class="hover:text-[#2563eb] transition">California to Texas Car Shipping</a></h4>\n                            <p class="text-[#468de6] italic text-[15px] font-semibold">Corridor Route</p>'
)

content = content.replace(
    '<h4 class="font-bold text-[#0a2540] text-xl">California</h4>\n                            <p class="text-[#468de6] italic text-[15px] font-semibold">to <span class="text-[#0a2540] not-italic">Florida</span></p>',
    '<h4 class="font-bold text-[#0a2540] text-xl"><a href="/california-to-florida-car-shipping/" class="hover:text-[#2563eb] transition">California to Florida Car Shipping</a></h4>\n                            <p class="text-[#468de6] italic text-[15px] font-semibold">Cross-Country Route</p>'
)

# 5. Add EEAT External Links to Official California Sources (DMV, CARB, FMCSA SAFER)
eeat_official_links_block = """
      <!-- EEAT Official Source Links -->
      <div class="my-10 p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm">
        <h3 class="text-base font-bold text-[#0a2540] mb-3 flex items-center gap-2">
          <span>🏛️</span> Official California Regulatory & Compliance Resources
        </h3>
        <p class="text-xs text-[#425466] leading-relaxed mb-4">
          When relocating a vehicle to California, make sure to review official state regulations regarding vehicle registration, emissions compliance, and carrier licensing:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold">
          <a href="https://www.dmv.ca.gov/" target="_blank" rel="noopener noreferrer" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] text-[#2563eb] hover:underline flex items-center justify-between">
            <span>California DMV Official Site</span> <span>↗</span>
          </a>
          <a href="https://ww2.arb.ca.gov/" target="_blank" rel="noopener noreferrer" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] text-[#2563eb] hover:underline flex items-center justify-between">
            <span>California Air Resources Board (CARB)</span> <span>↗</span>
          </a>
          <a href="https://safer.fmcsa.dot.gov/" target="_blank" rel="noopener noreferrer" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] text-[#2563eb] hover:underline flex items-center justify-between">
            <span>FMCSA SAFER Carrier Lookup</span> <span>↗</span>
          </a>
        </div>
      </div>
"""

if 'California DMV Official Site' not in content:
    content = content.replace('<!-- Popular Routes Section -->', eeat_official_links_block + '\n      <!-- Popular Routes Section -->')

# 6. Deployed Structured JSON-LD Schema Graph
cali_schema_graph = """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://neonautotransport.com/california-car-shipping/#breadcrumb",
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
            "name": "California Car Shipping",
            "item": "https://neonautotransport.com/california-car-shipping/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/california-car-shipping/#webpage",
        "url": "https://neonautotransport.com/california-car-shipping/",
        "name": "California Car Shipping | Ship a Car To or From California",
        "description": "Get a California car shipping quote for door-to-door auto transport to or from California, including Los Angeles, San Diego, San Francisco, Sacramento, San Jose, and Fresno.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@id": "https://neonautotransport.com/california-car-shipping/#service"
        }
      },
      {
        "@type": "Service",
        "@id": "https://neonautotransport.com/california-car-shipping/#service",
        "name": "California Car Shipping",
        "serviceType": "Auto transport to and from California",
        "provider": {
          "@id": "https://neonautotransport.com/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": "California"
        },
        "url": "https://neonautotransport.com/california-car-shipping/"
      }
    ]
  }
  </script>"""

# Replace old Service JSON-LD script block in <head>
content = re.sub(
    r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": "Service".*?</script>',
    cali_schema_graph.strip(),
    content,
    flags=re.DOTALL
)

with open(CALI_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Deployed master optimizations for California Car Shipping hub page!")

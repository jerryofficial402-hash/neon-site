import os
import re

CITIES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\california-car-shipping-cities\index.html"

with open(CITIES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description
content = re.sub(
    r'<title>.*?</title>',
    '<title>California Car Shipping Cities | Costs, Routes & Local Guides</title>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Compare car shipping costs, pickup timelines, and transport options across California’s major cities, including Los Angeles, San Diego, San Francisco, San Jose, Sacramento, Fresno, Long Beach, Oakland, Anaheim, and Irvine.">',
    content,
    flags=re.DOTALL
)

# 2. Fix Typo and Badge Wording
content = content.replace("FMSCA & US Dot Approved", "FMCSA Registered • USDOT #4355879 • MC #1703787")
content = content.replace("FMSCA", "FMCSA")

# 3. Update H1 and Lead Paragraph for City Hub Intent
old_h1_block = r'<h1 class="font-black text-\[\#0a2540\] mb-6 tracking-tight leading-tight">.*?</h1>\s*<p class="text-lg text-\[\#425466\] mb-10 leading-relaxed">.*?</p>'

new_h1_block = """<h1 class="font-black text-[#0a2540] mb-6 tracking-tight leading-tight">
                            <span class="block text-4xl lg:text-5xl mb-2">California Car Shipping Cities:</span>
                            <span class="block text-2xl lg:text-3xl text-[#468de6] font-bold">Costs, Routes & Local Guides</span>
                        </h1>
                        <p class="text-lg text-[#425466] mb-6 leading-relaxed font-normal">
                            Compare estimated car shipping costs, pickup windows, and open or enclosed transport options for California's largest metro areas. Choose a city below for local pickup details, popular routes, and a free car shipping quote.
                        </p>
                        <p class="text-base text-[#425466] mb-8 leading-relaxed font-normal">
                            For statewide route overviews and interstate corridor pricing, visit our main <a href="/california-car-shipping/" class="text-[#2563eb] font-bold hover:underline">California Car Shipping</a> hub, calculate rates with our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a>, or <a href="/car-shipping-quote/" class="text-[#2563eb] font-bold hover:underline">request a free quote</a>.
                        </p>
                        <p class="text-xs text-slate-500 mb-8 font-medium">
                            Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange shipments through independently owned and insured motor carriers.
                        </p>"""

content = re.sub(old_h1_block, new_h1_block, content, flags=re.DOTALL)

# 4. Replace Duplicated State Route Block with City Directory Grid
city_directory_html = """
      <!-- Find Car Shipping Services in California Cities Directory -->
      <div class="mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-[#0a2540] tracking-tight">Find Car Shipping Services in California Cities</h2>
        <p class="text-base text-[#425466] mb-8 leading-relaxed">
          Choose your pickup or delivery city to see local carrier access, popular routes, estimated transit ranges, and options for <a href="/services/open-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Open Auto Transport</a> or <a href="/services/enclosed-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Enclosed Car Shipping</a>.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Los Angeles Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Major SoCal hub with dense I-5 & I-10 carrier coverage for open & enclosed auto transport.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Los Angeles Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">San Diego Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Southern border corridor access via I-5 & I-15 for cross-country vehicle shipping.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">San Diego Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">San Francisco Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Bay Area door-to-door shipping with designated meeting points for narrow urban streets.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">San Francisco Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">San Jose Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Silicon Valley tech relocation & luxury vehicle transport via US-101 and I-880.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">San Jose Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Sacramento Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Capital corridor hub connecting Northern California via I-5 and I-80 interstate routes.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Sacramento Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Fresno Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Central Valley shipping corridor providing competitive long-distance transport value.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Fresno Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Long Beach Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Port-adjacent vehicle transport with fast connections to the greater LA area.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Long Beach Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Oakland Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">East Bay shipping hub serving industrial, commercial, and residential vehicle relocations.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Oakland Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Anaheim & Irvine Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Orange County vehicle logistics with direct interstate access to I-5 and CA-55.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Orange County Transport &rarr;</a>
          </div>

        </div>
      </div>
"""

# Replace old Popular Routes block
content = re.sub(
    r'<div class="mb-16">\s*<h2 class="text-4xl font-bold mb-6 text-\[\#0a2540\] tracking-tight">Popular Routes from California</h2>.*?</div>\s*</div>\s*</div>',
    city_directory_html.strip(),
    content,
    flags=re.DOTALL
)

# 5. Deploy CollectionPage JSON-LD Schema
collection_schema_json = """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://neonautotransport.com/california-car-shipping-cities/#breadcrumb",
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
            "name": "California Car Shipping",
            "item": "https://neonautotransport.com/california-car-shipping/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "California Car Shipping Cities",
            "item": "https://neonautotransport.com/california-car-shipping-cities/"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://neonautotransport.com/california-car-shipping-cities/#webpage",
        "url": "https://neonautotransport.com/california-car-shipping-cities/",
        "name": "California Car Shipping Cities: Costs, Routes & Local Guides",
        "description": "A collection of local car shipping guides for major California cities, including cost factors, transport options, and route information.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Car shipping in California cities"
        }
      }
    ]
  }
  </script>"""

# Replace old Service JSON-LD script block in <head>
content = re.sub(
    r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": "Service".*?</script>',
    collection_schema_json.strip(),
    content,
    flags=re.DOTALL
)

with open(CITIES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Deployed master optimizations for California Car Shipping Cities hub page!")

import os

routes = [
    {"name": "California to Florida", "url": "/california-to-florida-car-shipping/"},
    {"name": "California to New York", "url": "/california-to-new-york-car-shipping/"},
    {"name": "California to Texas", "url": "/california-to-texas-car-shipping/"},
    {"name": "Florida to California", "url": "/florida-to-california-car-shipping/"},
    {"name": "Florida to New York", "url": "/florida-to-new-york-car-shipping/"},
    {"name": "Georgia to California", "url": "/georgia-to-california-car-shipping/"},
    {"name": "Illinois to Florida", "url": "/illinois-to-florida-car-shipping/"},
    {"name": "New Jersey to Florida", "url": "/new-jersey-to-florida-car-shipping/"},
    {"name": "New York to California", "url": "/new-york-to-california-car-shipping/"},
    {"name": "New York to Florida", "url": "/new-york-to-florida-car-shipping/"},
    {"name": "Ohio to Florida", "url": "/ohio-to-florida-car-shipping/"},
    {"name": "Texas to California", "url": "/texas-to-california-car-shipping/"},
    {"name": "Texas to Florida", "url": "/texas-to-florida-car-shipping/"},
    {"name": "Virginia to Florida", "url": "/virginia-to-florida-car-shipping/"}
]

links_html = ""
for route in routes:
    links_html += f"""     <a href="{route['url']}" class="flex items-center gap-3 p-4 rounded-xl border border-[#e6e6e6] bg-[#f8fafc] hover:border-[#635bff] hover:bg-white hover:shadow-md transition-all group">
      <svg class="w-5 h-5 text-[#468de6] group-hover:text-[#635bff] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
      <span class="font-bold text-[#0a2540] group-hover:text-[#635bff] transition-colors">{route['name']}</span>
     </a>
"""

section_html = f"""
    <!-- Popular Interstate Routes -->
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl mt-24">
     <div class="mb-10 text-center max-w-2xl mx-auto">
      <h2 class="text-3xl font-black text-[#0a2540] tracking-tight mb-4">Popular Interstate Routes</h2>
      <p class="text-lg text-[#425466]">Explore our most frequently requested state-to-state car shipping routes, complete with detailed guides, distance calculators, and average cost estimates.</p>
     </div>
     
     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{links_html}
     </div>
    </div>
"""

filepath = "locations.html"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

if "Popular Interstate Routes" not in content:
    content = content.replace("</main>", section_html + "</main>")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Patched {filepath}")
else:
    print(f"Routes already exist in {filepath}")

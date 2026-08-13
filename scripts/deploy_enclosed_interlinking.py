import os
import re

ROUTE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\california-to-texas-enclosed\index.html"
SERVICE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

# 1. Update Route Page (routes/california-to-texas-enclosed/index.html) with rich contextual body links
with open(ROUTE_FILE, "r", encoding="utf-8") as f:
    route_content = f.read()

# Add link in Section 1 Overview
old_overview_p = r'<p class="text-\[\#425466\] text-base lg:text-lg leading-relaxed font-normal">\s*Enclosed car shipping from California to Texas costs between <strong class="text-\[\#0a2540\]">\$1,400 and \$2,200</strong> in 2026.*?\.\s*</p>'

new_overview_p = """<p class="text-[#425466] text-base lg:text-lg leading-relaxed font-normal">
              Enclosed car shipping from California to Texas costs between <strong class="text-[#0a2540]">$1,400 and $2,200</strong> in 2026, depending on vehicle type, specific cities, and season. The 1,500-mile journey typically takes <strong class="text-[#0a2540]">3–6 days in transit</strong>, with total time from booking to delivery averaging 7–10 days. Looking for nationwide luxury vehicle shipping? Learn more on our main <a href="/services/enclosed-auto-transport/" class="text-[#468de6] font-bold hover:underline">enclosed auto transport services</a> pillar page, or calculate route rates with our <a href="/cost-calculator/" class="text-[#468de6] font-bold hover:underline">car shipping cost calculator</a>.
            </p>"""

route_content = re.sub(old_overview_p, new_overview_p, route_content, flags=re.DOTALL)

with open(ROUTE_FILE, "w", encoding="utf-8") as f:
    f.write(route_content)

print("SUCCESS: Added contextual link to /services/enclosed-auto-transport/ on California to Texas route page!")

# 2. Update Service Pillar Page (services/enclosed-auto-transport.html) with link to California to Texas route page
with open(SERVICE_FILE, "r", encoding="utf-8") as f:
    service_content = f.read()

if '/routes/california-to-texas-enclosed/' not in service_content:
    # Inject popular routes block into service_content before </footer> or in popular routes section
    route_link_block = """
      <!-- Popular Enclosed Shipping Routes Section -->
      <div class="mt-12 p-8 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm">
        <h3 class="text-xl font-bold text-[#0a2540] mb-4">Popular Enclosed Transport Routes</h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold">
          <li>
            <a href="/routes/california-to-texas-enclosed/" class="text-[#468de6] hover:underline flex items-center gap-2">
              <span class="text-[#39FF14] font-black">▶</span> California to Texas Enclosed Auto Transport (1,500 Mi | 3–6 Days)
            </a>
          </li>
          <li>
            <a href="/california-to-texas-car-shipping/" class="text-[#468de6] hover:underline flex items-center gap-2">
              <span class="text-[#39FF14] font-black">▶</span> California to Texas Car Shipping Corridor
            </a>
          </li>
          <li>
            <a href="/new-york-to-florida-car-shipping/" class="text-[#468de6] hover:underline flex items-center gap-2">
              <span class="text-[#39FF14] font-black">▶</span> New York to Florida Auto Shipping
            </a>
          </li>
          <li>
            <a href="/cost-calculator/" class="text-[#468de6] hover:underline flex items-center gap-2">
              <span class="text-[#39FF14] font-black">▶</span> Instant Car Shipping Cost Calculator
            </a>
          </li>
        </ul>
      </div>
    """
    service_content = service_content.replace('</main>', route_link_block + '\n  </main>')
    with open(SERVICE_FILE, "w", encoding="utf-8") as f:
        f.write(service_content)
    print("SUCCESS: Added popular enclosed routes block linking to /routes/california-to-texas-enclosed/ on Enclosed Service pillar page!")

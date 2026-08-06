import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
ROUTES_CITY_DIR = os.path.join(SITE_DIR, "routes", "city")

STATE_HIGHWAYS = {
    'fl': ('I-95, I-4, and I-75', 'Florida Turnpike & Coastal Logistics'),
    'tx': ('I-35, I-10, and I-45', 'Texas Triangle Interstate Freight Corridors'),
    'ca': ('I-5, I-10, and I-80', 'California Highway & Port Transport Corridors'),
    'ny': ('I-95, I-87, and I-90', 'New York Thruway & Tri-State Transit Routes'),
    'ga': ('I-75, I-85, and I-20', 'Atlanta Southeast Logistics Hub'),
    'il': ('I-90, I-94, and I-55', 'Chicago Midwest Transit Junction'),
    'va': ('I-95, I-64, and I-81', 'Virginia Mid-Atlantic Commercial Routes'),
    'nc': ('I-95, I-85, and I-40', 'North Carolina Piedmont Freight Corridors'),
    'az': ('I-10, I-17, and I-40', 'Arizona Southwest Interstate Hub'),
    'co': ('I-25 and I-70', 'Colorado Rocky Mountain Highway Corridors'),
    'wa': ('I-5 and I-90', 'Pacific Northwest Interstate Corridor'),
    'pa': ('I-76, I-80, and I-95', 'Pennsylvania Turnpike Freight Corridors'),
    'oh': ('I-70, I-75, and I-80', 'Ohio Crossroads of America Transport Hub'),
    'mi': ('I-75 and I-94', 'Michigan Auto Belt & Border Transit Routes')
}

DEFAULT_HIGHWAY = ('Interstate Commercial Corridors', 'Nationwide Interstate Logistics Network')

updated_count = 0

if os.path.exists(ROUTES_CITY_DIR):
    for f in os.listdir(ROUTES_CITY_DIR):
        file_path = os.path.join(ROUTES_CITY_DIR, f)
        if os.path.isfile(file_path) and not f.endswith(".png") and not f.endswith(".jpg"):
            city_slug = f.replace(".html", "")
            parts = city_slug.split("-")
            state_code = parts[-1].lower() if len(parts) > 1 else ""
            city_name = " ".join([p.capitalize() for p in parts[:-1]])

            highways, corridor_label = STATE_HIGHWAYS.get(state_code, DEFAULT_HIGHWAY)

            with open(file_path, "r", encoding="utf-8", errors="ignore") as file_in:
                html = file_in.read()

            if "local-highway-corridors" not in html:
                unique_city_section = f'''
  <!-- Unique Local City Highway & Logistics Section -->
  <section class="local-highway-corridors container mx-auto px-4 lg:px-8 max-w-4xl py-8" id="local-highway-corridors">
    <div class="bg-white p-6 md:p-8 rounded-3xl border border-[#e6e6e6] shadow-sm space-y-4 text-[#425466] leading-relaxed text-sm">
      <h3 class="text-xl font-black text-[#0a2540] tracking-tight">{city_name} Auto Shipping Corridors &amp; Local Logistics</h3>
      <p>Vehicles traveling to or from <strong>{city_name}</strong> utilize primary commercial freight routes including <strong>{highways}</strong>. Our licensed carriers schedule regular door-to-door pickups across residential neighborhoods, dealership lots, and commercial hubs in the greater {city_name} area.</p>
      <div class="p-4 bg-[#f6f9fc] rounded-2xl border-l-4 border-l-[#00d4ff] flex items-center justify-between gap-4">
        <div>
          <h4 class="font-bold text-[#0a2540] text-xs mb-0.5">{corridor_label}</h4>
          <p class="text-[11px] text-[#425466] mb-0">Direct door-to-door car transport with 100% insured carriers and zero upfront deposit.</p>
        </div>
        <a href="#calculator" class="px-4 py-2 bg-[#0a2540] text-white text-xs font-bold rounded-xl hover:bg-[#635bff] transition whitespace-nowrap">
          Calculate {city_name} Rate &rarr;
        </a>
      </div>
    </div>
  </section>
'''
                if "</main>" in html:
                    html = html.replace("</main>", f"{unique_city_section}\n</main>")
                elif "<footer" in html:
                    html = re.sub(r'(<footer[^>]*>)', unique_city_section + r'\n\1', html, count=1)

                with open(file_path, "w", encoding="utf-8") as file_out:
                    file_out.write(html)
                updated_count += 1

print(f"SUCCESS: Injected unique city highway & logistics content into {updated_count} city route pages!")

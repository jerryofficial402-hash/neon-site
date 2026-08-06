import os
import re
from collections import defaultdict

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
ROUTES_CITY_DIR = os.path.join(SITE_DIR, "routes", "city")

# 1. Map all city pages to their state
city_files = []
city_url_to_state = {}
state_to_cities = defaultdict(list)

# State abbreviation mapping
STATE_NAMES = {
    'al': 'Alabama', 'ak': 'Alaska', 'az': 'Arizona', 'ar': 'Arkansas', 'ca': 'California',
    'co': 'Colorado', 'ct': 'Connecticut', 'de': 'Delaware', 'fl': 'Florida', 'ga': 'Georgia',
    'hi': 'Hawaii', 'id': 'Idaho', 'il': 'Illinois', 'in': 'Indiana', 'ia': 'Iowa',
    'ks': 'Kansas', 'ky': 'Kentucky', 'la': 'Louisiana', 'me': 'Maine', 'md': 'Maryland',
    'ma': 'Massachusetts', 'mi': 'Michigan', 'mn': 'Minnesota', 'ms': 'Mississippi', 'mo': 'Missouri',
    'mt': 'Montana', 'ne': 'Nebraska', 'nv': 'Nevada', 'nh': 'New Hampshire', 'nj': 'New Jersey',
    'nm': 'New Mexico', 'ny': 'New York', 'nc': 'North Carolina', 'nd': 'North Dakota', 'oh': 'Ohio',
    'ok': 'Oklahoma', 'or': 'Oregon', 'pa': 'Pennsylvania', 'ri': 'Rhode Island', 'sc': 'South Carolina',
    'sd': 'South Dakota', 'tn': 'Tennessee', 'tx': 'Texas', 'ut': 'Utah', 'vt': 'Vermont',
    'va': 'Virginia', 'wa': 'Washington', 'wv': 'West Virginia', 'wi': 'Wisconsin', 'wy': 'Wyoming'
}

STATE_SLUGS = {v.lower().replace(' ', '-'): k for k, v in STATE_NAMES.items()}

if os.path.exists(ROUTES_CITY_DIR):
    for f in os.listdir(ROUTES_CITY_DIR):
        file_path = os.path.join(ROUTES_CITY_DIR, f)
        if os.path.isfile(file_path) and not f.endswith(".png") and not f.endswith(".jpg"):
            city_slug = f.replace(".html", "")
            parts = city_slug.split("-")
            state_code = parts[-1].lower() if len(parts) > 1 else ""
            if state_code in STATE_NAMES:
                city_name = " ".join([p.capitalize() for p in parts[:-1]])
                city_url = f"/routes/city/{city_slug}.html"
                city_files.append((file_path, city_slug, city_name, state_code))
                state_to_cities[state_code].append((city_url, city_name, city_slug))

print(f"Discovered {len(city_files)} city sub-pages across {len(state_to_cities)} states!")

# 2. Build interlinking grid on state hub pages
state_hubs_updated = 0

for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root or "routes" in root:
        continue
    for file in files:
        if file == "index.html" and "-car-shipping" in root:
            dir_name = os.path.basename(root)
            state_name_slug = dir_name.replace("-car-shipping-cities", "").replace("-car-shipping", "")
            state_code = STATE_SLUGS.get(state_name_slug, "")
            
            if not state_code and len(state_name_slug) == 2:
                state_code = state_name_slug
                
            if state_code in state_to_cities:
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    html = f.read()

                if "nearby-cities" not in html:
                    cities_list = state_to_cities[state_code][:8]
                    grid_items = ""
                    for c_url, c_name, c_slug in cities_list:
                        grid_items += f'''          <a href="{c_url}" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#635bff]">
            {c_name} Car Shipping &rarr;
          </a>\n'''

                    module_html = f'''
    <!-- Nearby Cities Module -->
    <section class="nearby-cities py-12 bg-[#f6f9fc] border-t border-[#e6e6e6]" aria-label="Car shipping cities in {STATE_NAMES[state_code]}">
      <div class="container mx-auto px-4 max-w-6xl">
        <h3 class="text-2xl font-black text-[#0a2540] mb-2 text-center">Car Shipping Near You in {STATE_NAMES[state_code]}</h3>
        <p class="text-xs text-[#425466] text-center mb-6">Popular local pickup &amp; delivery hubs across {STATE_NAMES[state_code]}</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
{grid_items}        </div>
      </div>
    </section>
'''
                    if "</main>" in html:
                        html = html.replace("</main>", f"{module_html}\n</main>")
                    elif "</footer>" in html:
                        html = html.replace("</footer>", f"{module_html}\n</footer>")

                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(html)
                    state_hubs_updated += 1

print(f"SUCCESS: Updated {state_hubs_updated} State Hub pages with Nearby Cities Interlinking Grid!")

# 3. Add bidirectional related routes block on each city page
city_pages_updated = 0
for file_path, city_slug, city_name, state_code in city_files:
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()

        if "related-city-routes" not in html:
            state_name = STATE_NAMES.get(state_code, "")
            state_hub_url = f"/{state_name.lower().replace(' ', '-')}-car-shipping/"
            
            sibling_cities = [c for c in state_to_cities[state_code] if c[2] != city_slug][:3]
            sibling_links = ""
            for s_url, s_name, s_slug in sibling_cities:
                sibling_links += f'<li><a href="{s_url}" class="text-[#635bff] font-semibold hover:underline">{s_name} Car Shipping</a></li>\n'

            bidirectional_block = f'''
  <!-- Bidirectional Related City Routes -->
  <section class="related-city-routes container mx-auto px-4 lg:px-8 max-w-4xl py-8 border-t border-[#e6e6e6]">
    <div class="bg-white p-6 rounded-2xl border border-[#e6e6e6]">
      <h4 class="font-bold text-[#0a2540] text-sm mb-3">State &amp; Regional Transport Hubs</h4>
      <ul class="text-xs space-y-2 text-[#425466]">
        <li>&bull; Main State Hub: <a href="{state_hub_url}" class="text-[#635bff] font-bold hover:underline">{state_name} Car Shipping Services</a></li>
        {sibling_links}
      </ul>
    </div>
  </section>
'''
            if "</main>" in html:
                html = html.replace("</main>", f"{bidirectional_block}\n</main>")
            elif "<footer" in html:
                html = re.sub(r'(<footer[^>]*>)', bidirectional_block + r'\n\1', html, count=1)

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(html)
            city_pages_updated += 1
    except Exception as e:
        pass

print(f"SUCCESS: Added Bidirectional Interlinking Blocks to {city_pages_updated} City Route Pages!")

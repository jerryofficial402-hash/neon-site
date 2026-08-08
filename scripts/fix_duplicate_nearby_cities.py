import os
import re
from collections import defaultdict

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
ROUTES_CITY_DIR = os.path.join(SITE_DIR, "routes", "city")

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

# Build unique dictionary of cities per state code
state_unique_cities = defaultdict(dict)

if os.path.exists(ROUTES_CITY_DIR):
    for f in os.listdir(ROUTES_CITY_DIR):
        file_path = os.path.join(ROUTES_CITY_DIR, f)
        if os.path.isfile(file_path) and not f.endswith(".png") and not f.endswith(".jpg"):
            city_slug = f.replace(".html", "")
            parts = city_slug.split("-")
            state_code = parts[-1].lower() if len(parts) > 1 else ""
            if state_code in STATE_NAMES:
                city_name = " ".join([p.capitalize() for p in parts[:-1]])
                city_name_slug = "-".join(parts[:-1])
                state_slug = STATE_NAMES[state_code].lower().replace(' ', '-')
                canonical_url = f"/{state_slug}-car-shipping/{city_name_slug}/"
                
                # Store unique by city_name
                state_unique_cities[state_code][city_name] = canonical_url

print("Discovered unique cities across states:")
for code, cities in state_unique_cities.items():
    print(f" - {STATE_NAMES[code]}: {len(cities)} unique cities")

fixed_count = 0

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

            if state_code in state_unique_cities:
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    html = f.read()

                cities_dict = state_unique_cities[state_code]
                unique_city_items = list(cities_dict.items())[:8]

                grid_items = ""
                for c_name, c_url in unique_city_items:
                    grid_items += f'''          <a href="{c_url}" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#635bff]">
            {c_name} Car Shipping &rarr;
          </a>\n'''

                new_module_html = f'''    <!-- Nearby Cities Module -->
    <section class="nearby-cities py-12 bg-[#f6f9fc] border-t border-[#e6e6e6]" aria-label="Car shipping cities in {STATE_NAMES[state_code]}">
      <div class="container mx-auto px-4 max-w-6xl">
        <h3 class="text-2xl font-black text-[#0a2540] mb-2 text-center">Car Shipping Near You in {STATE_NAMES[state_code]}</h3>
        <p class="text-xs text-[#425466] text-center mb-6">Popular local pickup &amp; delivery hubs across {STATE_NAMES[state_code]}</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
{grid_items}        </div>
      </div>
    </section>'''

                # Remove old duplicate nearby-cities section if present
                if "nearby-cities" in html:
                    html = re.sub(r'<!-- Nearby Cities Module -->\s*<section class="nearby-cities.*?</section>', new_module_html, html, flags=re.DOTALL)
                else:
                    if "</main>" in html:
                        html = html.replace("</main>", f"{new_module_html}\n</main>")

                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(html)
                fixed_count += 1

print(f"SUCCESS: Replaced duplicate nearby-cities modules with 100% unique city links across {fixed_count} State Hub pages!")

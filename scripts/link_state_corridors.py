import os
import re
from collections import defaultdict

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# Map state-to-state corridor pages by origin state
origin_state_corridors = defaultdict(list)

STATE_NAMES = {
    'alabama': 'Alabama', 'alaska': 'Alaska', 'arizona': 'Arizona', 'arkansas': 'Arkansas',
    'california': 'California', 'colorado': 'Colorado', 'connecticut': 'Connecticut', 'delaware': 'Delaware',
    'florida': 'Florida', 'georgia': 'Georgia', 'hawaii': 'Hawaii', 'idaho': 'Idaho',
    'illinois': 'Illinois', 'indiana': 'Indiana', 'iowa': 'Iowa', 'kansas': 'Kansas',
    'kentucky': 'Kentucky', 'louisiana': 'Louisiana', 'maine': 'Maine', 'maryland': 'Maryland',
    'massachusetts': 'Massachusetts', 'michigan': 'Michigan', 'minnesota': 'Minnesota', 'mississippi': 'Mississippi',
    'missouri': 'Missouri', 'montana': 'Montana', 'nebraska': 'Nebraska', 'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico', 'new-york': 'New York',
    'north-carolina': 'North Carolina', 'north-dakota': 'North Dakota', 'ohio': 'Ohio', 'oklahoma': 'Oklahoma',
    'oregon': 'Oregon', 'pennsylvania': 'Pennsylvania', 'rhode-island': 'Rhode Island', 'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota', 'tennessee': 'Tennessee', 'texas': 'Texas', 'utah': 'Utah',
    'vermont': 'Vermont', 'virginia': 'Virginia', 'washington': 'Washington', 'washington-dc': 'Washington D.C.',
    'west-virginia': 'West Virginia', 'wisconsin': 'Wisconsin', 'wyoming': 'Wyoming'
}

for item in os.listdir(SITE_DIR):
    item_path = os.path.join(SITE_DIR, item)
    if os.path.isdir(item_path) and "-to-" in item and "-car-shipping" in item:
        parts = item.replace("-car-shipping", "").split("-to-")
        if len(parts) == 2:
            origin_slug, dest_slug = parts[0], parts[1]
            if origin_slug in STATE_NAMES and dest_slug in STATE_NAMES:
                corridor_url = f"/{item}/"
                dest_name = STATE_NAMES[dest_slug]
                origin_state_corridors[origin_slug].append((corridor_url, dest_name, item))

print(f"Mapped {sum(len(v) for v in origin_state_corridors.values())} corridor pages across {len(origin_state_corridors)} origin states!")

updated_hubs = 0

for origin_slug, corridors in origin_state_corridors.items():
    state_hub_dir = os.path.join(SITE_DIR, f"{origin_slug}-car-shipping")
    state_hub_file = os.path.join(state_hub_dir, "index.html")
    
    if os.path.exists(state_hub_file):
        with open(state_hub_file, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()

        if "state-corridors-module" not in html:
            origin_name = STATE_NAMES[origin_slug]
            cards = ""
            for c_url, d_name, c_slug in corridors:
                cards += f'''          <a href="{c_url}" class="p-4 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] hover:shadow-md transition block text-xs font-bold text-[#0a2540] hover:text-[#635bff]">
            {origin_name} to {d_name} Car Shipping &rarr;
          </a>\n'''

            corridor_module = f'''
    <!-- Popular State-to-State Corridors Module -->
    <section class="state-corridors-module py-12 bg-white border-t border-[#e6e6e6]" aria-label="Interstate car shipping corridors from {origin_name}">
      <div class="container mx-auto px-4 max-w-6xl">
        <h3 class="text-2xl font-black text-[#0a2540] mb-2 text-center">Popular State-to-State Shipping Corridors from {origin_name}</h3>
        <p class="text-xs text-[#425466] text-center mb-6">Direct interstate transport routes connecting {origin_name} nationwide</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{cards}        </div>
      </div>
    </section>
'''
            if "</main>" in html:
                html = html.replace("</main>", f"{corridor_module}\n</main>")
            elif "<footer" in html:
                html = re.sub(r'(<footer[^>]*>)', corridor_module + r'\n\1', html, count=1)

            with open(state_hub_file, "w", encoding="utf-8") as f:
                f.write(html)
            updated_hubs += 1

print(f"SUCCESS: Injected State-to-State Corridor Interlinking Modules into {updated_hubs} State Hub pages!")

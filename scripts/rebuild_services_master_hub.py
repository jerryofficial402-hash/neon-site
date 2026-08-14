import os
import re

SERVICES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\index.html"

with open(SERVICES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title, Meta Description & Canonical Tag
content = re.sub(
    r'<title>.*?</title>',
    '<title>Vehicle Transport Services | Nationwide Auto Shipping | Neon</title>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Explore nationwide vehicle transport services from Neon Auto Transport. Compare open, enclosed, door-to-door, expedited, motorcycle, military, luxury, dealer, and fleet auto shipping options, then request a free quote.">',
    content,
    flags=re.DOTALL
)

# 2. Update H1 and Hero Copy
old_hero_h1_pattern = r'<h1 class="font-black text-\[\#0a2540\] mb-6 tracking-tight leading-tight">.*?</h1>\s*<p class="text-lg text-\[\#425466\] mb-8 leading-relaxed">.*?</p>'

new_hero_h1 = """<h1 class="font-black text-[#0a2540] mb-6 tracking-tight leading-tight text-4xl lg:text-5xl">
              Nationwide Vehicle Transport Services
            </h1>
            <p class="text-lg text-[#425466] mb-4 leading-relaxed font-normal">
              Neon Auto Transport provides nationwide vehicle transport services for cars, SUVs, trucks, motorcycles, luxury vehicles, dealer inventory, and fleet moves. Compare open, enclosed, door-to-door, and expedited auto shipping options, then request a free quote based on your route, vehicle, and preferred pickup date.
            </p>
            <p class="text-xs text-slate-500 mb-8 font-medium">
              Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange transportation through independently owned and insured motor carriers.
            </p>"""

content = re.sub(old_hero_h1_pattern, new_hero_h1, content, flags=re.DOTALL)

# 3. Clean up unverified/overconfident claim phrases sitewide on services page
content = content.replace("exact 2025 market price match", "transparent estimated pricing")
content = content.replace("guarantee prompt pickup", "scheduled pickup windows")
content = content.replace("fast pickup", "scheduled carrier dispatch")
content = content.replace("full insurance", "insured carrier coverage")

with open(SERVICES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Rebuilt services/index.html as canonical target for Vehicle Transport Services!")

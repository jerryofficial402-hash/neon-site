import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
GUIDE_FILE = os.path.join(BASE_DIR, "car-shipping-transit-times", "index.html")

with open(GUIDE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Open Graph & Twitter image alt / caption
content = content.replace(
    'Open multi-car transport carrier trailer transporting vehicles on an interstate highway under clear weather conditions',
    'Open multi-car transport carrier traveling on a U.S. interstate highway'
)

# 2. Update ImageObject schema caption
content = content.replace(
    '"caption": "Open multi-car transport carrier trailer transporting vehicles on an interstate highway under clear weather conditions"',
    '"caption": "Open multi-car transport carrier traveling on a U.S. interstate highway"'
)

# 3. Update img alt text
content = content.replace(
    'alt="Open multi-car transport carrier trailer transporting vehicles on an interstate highway under clear weather conditions"',
    'alt="Open multi-car transport carrier traveling on a U.S. interstate highway"'
)

# 4. Update visual caption bar text
old_caption_bar = '''<div class="p-3 bg-[#f8fafc] border-t border-[#e6e6e6] text-[11px] text-[#64748b] flex justify-between items-center">
            <span><strong>Real Fleet Operations:</strong> Interstate multi-vehicle open carrier transit across U.S. highway corridors.</span>
            <span class="font-semibold text-[#0a2540]">Verified Logistics Visual</span>
          </div>'''

new_caption_bar = '''<div class="p-3 bg-[#f8fafc] border-t border-[#e6e6e6] text-[11px] text-[#64748b] flex justify-between items-center">
            <span>Open multi-car carrier transport on a U.S. interstate.</span>
            <span class="font-semibold text-[#0a2540]">Illustrative vehicle-shipping image.</span>
          </div>'''

if old_caption_bar in content:
    content = content.replace(old_caption_bar, new_caption_bar)
else:
    print("WARNING: Old caption bar exact match not found, performing fallback replacement")
    content = content.replace(
        'Real Fleet Operations:',
        'Open multi-car carrier transport on a U.S. interstate.'
    )

with open(GUIDE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Updated image caption bar and alt text to safer compliance wording")

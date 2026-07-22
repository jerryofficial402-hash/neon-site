import os
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Fix the Meta Keywords (currently Florida)
old_keywords = '<meta content="Florida car shipping, Florida auto transport, ship car to Florida, vehicle transport Florida, car shipping from Florida, Miami auto transport" name="keywords"/>'
new_keywords = '<meta content="New York car shipping, New York auto transport, ship car to New York, vehicle transport New York, car shipping from New York, NYC auto transport" name="keywords"/>'
html = html.replace(old_keywords, new_keywords)

# 2. Fix the multiple H1 issue (make the body H1 into an H2)
old_body_h1 = '<h1 class="text-4xl font-black text-[#0a2540] mb-12 tracking-tight text-center">New York Car Shipping: Costs, Routes &amp; Everything You Need to Know</h1>'
new_body_h2 = '<h2 class="text-4xl font-black text-[#0a2540] mb-12 tracking-tight text-center">New York Car Shipping: Costs, Routes &amp; Everything You Need to Know</h2>'
html = html.replace(old_body_h1, new_body_h2)

# 3. Add visual breadcrumb link to the hero section (Back to Locations)
back_link = '''<div class="mb-4">
    <a href="/locations/" class="text-[#635bff] font-bold text-sm flex items-center gap-1 hover:underline">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to All Locations
    </a>
</div>'''

if "Back to All Locations" not in html:
    html = re.sub(r'(<div class="inline-flex items-center[^>]*>.*?</div>)', r'\1\n' + back_link, html, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("NY State SEO issues fixed.")

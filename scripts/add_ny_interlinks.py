import os
import re

state_file = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping\index.html"
cities_file = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

# 1. Update State File
with open(state_file, "r", encoding="utf-8") as f:
    state_html = f.read()

button_html = '''<a class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_15px_rgba(57,255,20,0.4)] flex items-center gap-2" href="/cost-calculator/">
                                Calculate Your Rate Instantly 
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
</a>'''

new_button_html = button_html + '''
<a class="bg-white border-2 border-[#e6e6e6] text-[#0a2540] px-8 py-3.5 rounded-full font-black text-lg hover:bg-slate-50 transition shadow-sm flex items-center gap-2 ml-4" href="/new-york-car-shipping-cities/">
    View NY City Guides & Routes
</a>'''

# Only replace if not already replaced
if "View NY City Guides" not in state_html:
    state_html = state_html.replace(button_html, new_button_html)

# To ensure the buttons sit side by side on large screens and stack on small screens:
state_html = state_html.replace('<div class="flex">\n<a class="bg-[#39FF14]', '<div class="flex flex-col sm:flex-row gap-4">\n<a class="bg-[#39FF14]')
# Remove the manual ml-4 that I might have just added
state_html = state_html.replace('ml-4"', '"')

with open(state_file, "w", encoding="utf-8") as f:
    f.write(state_html)


# 2. Update Cities File
with open(cities_file, "r", encoding="utf-8") as f:
    cities_html = f.read()

# Add a back link to the hero section, above the H1
back_link = '''<div class="mb-4">
    <a href="/new-york-car-shipping/" class="text-[#635bff] font-bold text-sm flex items-center gap-1 hover:underline">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to New York State Guide
    </a>
</div>'''

if "Back to New York State Guide" not in cities_html:
    cities_html = re.sub(r'(<div class="inline-flex items-center[^>]*>.*?</div>)', r'\1\n' + back_link, cities_html, flags=re.DOTALL)

with open(cities_file, "w", encoding="utf-8") as f:
    f.write(cities_html)

print("Successfully added interlinking between the state and cities pages.")

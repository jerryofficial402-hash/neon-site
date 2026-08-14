import os
import re

CITIES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\california-car-shipping-cities\index.html"

with open(CITIES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the "Explore California Interstate Routes" button with a rock-solid high-visibility solid dark blue button with explicit inline style
old_btn = r'<a href="/california-car-shipping/" class="bg-\[\#2563eb\] text-white font-bold py-3\.5 px-8 rounded-full inline-block hover:bg-\[\#1d4ed8\] transition shadow-sm">View California Statewide Routes &rarr;</a>'

new_btn = '<a href="/california-car-shipping/" class="inline-block px-8 py-3.5 rounded-full font-black text-base transition shadow-md" style="background-color: #0a2540; color: #ffffff !important; text-decoration: none;">View California Statewide Routes &rarr;</a>'

content = re.sub(old_btn, new_btn, content)

# Also check top "View California Statewide Routes & Hub" button
old_top_btn = r'<a href="/california-car-shipping/" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-\[\#0a2540\] text-white font-bold rounded-full hover:bg-\[\#1a3a5a\] transition-all shadow-md group text-sm">'
new_top_btn = '<a href="/california-car-shipping/" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all shadow-md group text-sm" style="background-color: #0a2540; color: #ffffff !important; font-weight: 800; text-decoration: none;">'

content = re.sub(old_top_btn, new_top_btn, content)

with open(CITIES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed CTA button color contrast issue!")

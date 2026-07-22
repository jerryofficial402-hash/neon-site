import os
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Replace the hero image src and alt text
old_img = '<img alt="Neon Auto Transport serving New York State" class="w-full h-auto rounded-2xl object-cover" decoding="async" fetchpriority="high" height="800" loading="eager" src="/images/neon-auto-transport-new-york-car-shipping-cities.jpg" style="max-height: 450px;" width="1200"/>'

new_img = '<img alt="Neon Auto Transport carrier truck hauling vehicles for New York state auto transport and car shipping services" class="w-full h-auto rounded-2xl object-cover" decoding="async" fetchpriority="high" height="800" loading="eager" src="/images/new-york-state-auto-transport-car-shipping.jpg" style="max-height: 450px;" width="1200"/>'

html = html.replace(old_img, new_img)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Image swapped with SEO optimized filename and alt text.")

import os
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Restore items-center to the hero flex container
html = html.replace("items-start gap-12", "items-center gap-12")

# 2. Make sure the h1 has the right bottom margin
html = re.sub(r'(<h1[^>]*text-4xl md:text-5xl lg:text-6xl[^>]*?mb-)[0-9]+', r'\g<1>6', html)

# 3. Remove the manual min-h-[300px] and bg-slate-100 from the image
html = html.replace("min-h-[300px] bg-slate-100 ", "")
html = html.replace('class="w-full h-auto rounded-2xl object-cover min-h-[300px] bg-slate-100"', 'class="w-full h-auto rounded-2xl object-cover"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Hero layout updated to match Dallas.")

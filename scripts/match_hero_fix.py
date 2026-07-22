import os
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Make absolutely sure items-start is replaced with items-center in the hero section flex row
html = re.sub(r'flex-col lg:flex-row([^>]*)items-start', r'flex-col lg:flex-row\1items-center', html)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("items-start successfully replaced with items-center")

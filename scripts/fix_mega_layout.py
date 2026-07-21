import os
from bs4 import BeautifulSoup

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# 1. Remove "overlap-up" class which is causing the text to smash into the hero section
content_section = soup.find("section", class_=lambda x: x and "overlap-up" in x)
if content_section:
    classes = content_section.get("class", [])
    if "overlap-up" in classes:
        classes.remove("overlap-up")
    content_section["class"] = classes

# 2. Remove the stray "Popular Routes from Texas" section
# It is located right before the two-column grid
stray_routes_header = soup.find("h2", string="Popular Routes from Texas")
if stray_routes_header:
    # The header is inside a <div class="mb-16">
    stray_routes_container = stray_routes_header.parent
    stray_routes_container.decompose()

# 3. Save the file
with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Mega page layout overlapping fixed.")

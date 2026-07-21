import os
from bs4 import BeautifulSoup

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# Move the second paragraph out of the hero section to balance the height
hero_div = soup.find("div", class_=lambda x: x and "lg:w-1/2" in x and "flex-col" in x)
if hero_div:
    paragraphs = hero_div.find_all("p")
    if len(paragraphs) > 1:
        # Get the second paragraph
        p2 = paragraphs[1]
        
        # Find the main column
        main_col = soup.find("div", class_=lambda x: x and "lg:col-span-2" in x)
        if main_col:
            # We want to insert it at the very top of the main column, before the NYC section.
            new_p = soup.new_tag("p", attrs={"class": "text-xl text-[#425466] mb-12 leading-relaxed font-medium"})
            new_p.append(BeautifulSoup(p2.decode_contents(), "html.parser"))
            
            main_col.insert(0, new_p)
            
            # Remove p2 from hero
            p2.decompose()

# Align the hero content to top instead of center to prevent the image from being pushed down
hero_flex = soup.find("div", class_=lambda x: x and "lg:flex-row" in x and "items-center" in x)
if hero_flex:
    classes = hero_flex.get("class", [])
    if "items-center" in classes:
        classes.remove("items-center")
        classes.append("items-start")
    hero_flex["class"] = classes

# Add intrinsic aspect ratio or minimum height to the image container so it doesn't collapse
img_tag = soup.find("img", {"alt": "Neon Auto Transport serving New York State"})
if img_tag:
    img_tag["class"] = img_tag.get("class", []) + ["min-h-[300px]", "bg-slate-100"]

# Remove any remaining "Popular Routes from Texas" elements just in case
stray_routes = soup.find("h2", string="Popular Routes from Texas")
if stray_routes:
    if stray_routes.parent:
        stray_routes.parent.decompose()

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Hero layout rebalanced.")

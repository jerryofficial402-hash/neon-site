import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
TARGET_FILE = os.path.join(SITE_DIR, "north-carolina-to-florida-car-shipping", "index.html")

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update BreadcrumbList schema in JSON-LD
old_breadcrumb_json = """"itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://neonautotransport.com/locations/" },
        { "@type": "ListItem", "position": 3, "name": "North Carolina to Florida Car Shipping", "item": "https://neonautotransport.com/north-carolina-to-florida-car-shipping/" }
      ]"""

new_breadcrumb_json = """"itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://neonautotransport.com/locations/" },
        { "@type": "ListItem", "position": 3, "name": "North Carolina Car Shipping", "item": "https://neonautotransport.com/north-carolina-car-shipping/" },
        { "@type": "ListItem", "position": 4, "name": "North Carolina to Florida Car Shipping", "item": "https://neonautotransport.com/north-carolina-to-florida-car-shipping/" }
      ]"""

if old_breadcrumb_json in html:
    html = html.replace(old_breadcrumb_json, new_breadcrumb_json)

# 2. Add Visual Breadcrumb HTML above hero section
visual_breadcrumb_html = """    <!-- Visual Breadcrumb -->
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl pt-4">
      <nav class="text-xs font-semibold text-[#8ba3ba] flex items-center gap-2" aria-label="Breadcrumb">
        <a href="/" class="hover:text-[#00d4ff]">Home</a> &gt;
        <a href="/locations/" class="hover:text-[#00d4ff]">Locations</a> &gt;
        <a href="/north-carolina-car-shipping/" class="hover:text-[#00d4ff]">North Carolina</a> &gt;
        <span class="text-white font-bold">North Carolina to Florida</span>
      </nav>
    </div>
"""

if "visual-breadcrumb" not in html and "<main class=\"pt-24\">" in html:
    html = html.replace("<main class=\"pt-24\">", f"<main class=\"pt-24\">\n{visual_breadcrumb_html}")

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(html)

print("SUCCESS: Added Visual Breadcrumb & Updated BreadcrumbList JSON-LD Schema for NC to FL page!")

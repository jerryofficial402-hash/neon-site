import os
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Fix the Meta Keywords
old_keywords = '<meta content="Texas car shipping, Texas auto transport, ship car to Texas, vehicle transport Texas, car shipping from Texas, Houston auto transport" name="keywords"/>'
new_keywords = '<meta content="New York car shipping, NY auto transport, New York City car shipping, Buffalo auto transport, ship car to New York, vehicle transport NY" name="keywords"/>'
html = html.replace(old_keywords, new_keywords)

# 2. Fix the JSON-LD BreadcrumbList to point to the State page
old_schema = '''      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://neonautotransport.com/locations/"'''

new_schema = '''      "@type": "ListItem",
      "position": 2,
      "name": "New York Auto Transport",
      "item": "https://neonautotransport.com/new-york-car-shipping/"'''

html = html.replace(old_schema, new_schema)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Meta keywords and Schema Breadcrumbs updated.")

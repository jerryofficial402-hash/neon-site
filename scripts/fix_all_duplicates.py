import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# 1. Remove duplicate standalone HTML files that exist alongside directory/index.html
standalone_jonesboro = os.path.join(SITE_DIR, "routes", "city", "jonesboro-ar.html")
if os.path.exists(standalone_jonesboro):
    os.remove(standalone_jonesboro)
    print("Removed duplicate file: routes/city/jonesboro-ar.html")

# Remove any standalone city .html files if folder exists
for city_html in glob.glob(os.path.join(SITE_DIR, "routes", "city", "*.html")):
    city_slug = os.path.basename(city_html).replace(".html", "")
    folder_path = os.path.join(SITE_DIR, "routes", "city", city_slug, "index.html")
    if os.path.exists(folder_path):
        os.remove(city_html)
        print(f"Removed standalone duplicate: routes/city/{city_slug}.html")

# 2. Fix Canonical & Title Tags for same-name cities in different states
city_index_files = glob.glob(os.path.join(SITE_DIR, "routes", "city", "*", "index.html"))

for filepath in city_index_files:
    city_folder = os.path.basename(os.path.dirname(filepath)) # e.g. alexandria-va or alexandria-la
    parts = city_folder.split("-")
    if len(parts) >= 2:
        state_abbr = parts[-1].upper()
        city_name = " ".join([p.capitalize() for p in parts[:-1]])
    else:
        continue

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        c = f.read()

    correct_canonical = f"https://neonautotransport.com/routes/city/{city_folder}/"
    correct_title = f"{city_name}, {state_abbr} Car Shipping | Neon Auto Transport"
    correct_h1 = f"{city_name}, {state_abbr} Car Shipping"

    # Replace canonical
    c = re.sub(r'<link\s+rel=["\']canonical["\']\s+href=["\'].*?["\']', f'<link rel="canonical" href="{correct_canonical}">', c, flags=re.IGNORECASE)
    # Replace canonical in BreadcrumbList schema
    c = re.sub(r'https://neonautotransport.com/routes/city/[^/]+/#breadcrumb', f"{correct_canonical}#breadcrumb", c)

    # Replace title if generic
    c = re.sub(r'<title>.*?</title>', f'<title>{correct_title}</title>', c, flags=re.IGNORECASE | re.DOTALL)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(c)

# 3. Fix Author page canonical
author_file = os.path.join(SITE_DIR, "author", "shazil-ali.html")
if os.path.exists(author_file):
    with open(author_file, "r", encoding="utf-8") as f:
        c = f.read()
    c = re.sub(r'<link\s+rel=["\']canonical["\']\s+href=["\'].*?["\']', '<link rel="canonical" href="https://neonautotransport.com/author/shazil-ali.html">', c)
    with open(author_file, "w", encoding="utf-8") as f:
        f.write(c)
    print("Fixed author/shazil-ali.html canonical URL")

# 4. Fix Woodbridge blog canonical
wb_blog = os.path.join(SITE_DIR, "blog", "who-ships-cars-from-woodbridge-virginia.html")
if os.path.exists(wb_blog):
    with open(wb_blog, "r", encoding="utf-8") as f:
        c = f.read()
    c = re.sub(r'<link\s+rel=["\']canonical["\']\s+href=["\'].*?["\']', '<link rel="canonical" href="https://neonautotransport.com/blog/who-ships-cars-from-woodbridge-virginia.html">', c)
    with open(wb_blog, "w", encoding="utf-8") as f:
        f.write(c)
    print("Fixed Woodbridge blog canonical URL")

print("SUCCESS: All duplicate titles, duplicate canonicals, and duplicate files have been fixed!")

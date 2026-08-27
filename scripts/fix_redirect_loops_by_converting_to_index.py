import os
import shutil

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
ROUTES_CITY_DIR = os.path.join(BASE_DIR, "routes", "city")

print("=== CONVERTING ALL CITY FILES TO DUAL DIRECTORY INDEX.HTML + FLAT .HTML FORMAT ===")

# First pass: find all HTML content for each slug
slug_content_map = {}

for f in os.listdir(ROUTES_CITY_DIR):
    fpath = os.path.join(ROUTES_CITY_DIR, f)
    if f.endswith(".html"):
        slug = f[:-5]
        with open(fpath, "r", encoding="utf-8", errors="ignore") as file:
            slug_content_map[slug] = file.read()
    elif os.path.isdir(fpath):
        index_path = os.path.join(fpath, "index.html")
        if os.path.exists(index_path):
            with open(index_path, "r", encoding="utf-8", errors="ignore") as file:
                slug_content_map[f] = file.read()
    elif not "." in f:
        # Extensionless file — read content if valid HTML, then remove file
        try:
            with open(fpath, "r", encoding="utf-8", errors="ignore") as file:
                txt = file.read()
                if "<!DOCTYPE" in txt or "<html" in txt:
                    slug_content_map[f] = txt
            os.remove(fpath)
            print(f"Removed extensionless file artifact: {f}")
        except Exception:
            pass

print(f"Total unique city slugs identified: {len(slug_content_map)}")

# Second pass: ensure both routes/city/{slug}/index.html AND routes/city/{slug}.html exist for every slug
created_index_count = 0
for slug, content in slug_content_map.items():
    # 1. Directory index.html
    target_dir = os.path.join(ROUTES_CITY_DIR, slug)
    if os.path.isfile(target_dir):
        os.remove(target_dir)
        print(f"Removed blocking file: {slug}")
        
    os.makedirs(target_dir, exist_ok=True)
    target_index = os.path.join(target_dir, "index.html")
    with open(target_index, "w", encoding="utf-8") as file:
        file.write(content)
    created_index_count += 1
    
    # 2. Flat .html file
    flat_path = os.path.join(ROUTES_CITY_DIR, f"{slug}.html")
    with open(flat_path, "w", encoding="utf-8") as file:
        file.write(content)

print(f"SUCCESS: Synchronized {created_index_count} city pages into routes/city/{{slug}}/index.html directories AND flat .html files!")

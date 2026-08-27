import os
import re
import json
import shutil

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
VERCEL_JSON_PATH = os.path.join(BASE_DIR, "vercel.json")

# Map of outlier paths to canonical paths
DUAL_URL_MAP = {
    "/florida-car-shipping/miami/": "/routes/city/miami-fl/",
    "/florida-car-shipping/orlando/": "/routes/city/orlando-fl/",
    "/texas-car-shipping/arlington/": "/routes/city/arlington-tx/",
    "/texas-car-shipping/austin/": "/routes/city/austin-tx/",
    "/texas-car-shipping/corpus-christi/": "/routes/city/corpus-christi-tx/",
    "/texas-car-shipping/dallas/": "/routes/city/dallas-tx/",
    "/texas-car-shipping/el-paso/": "/routes/city/el-paso-tx/",
    "/texas-car-shipping/fort-worth/": "/routes/city/fort-worth-tx/",
    "/texas-car-shipping/houston/": "/routes/city/houston-tx/",
    "/texas-car-shipping/san-antonio/": "/routes/city/san-antonio-tx/",
}

print("=== STEP 1: ADD 301 REDIRECTS TO VERCEL.JSON ===")
with open(VERCEL_JSON_PATH, "r", encoding="utf-8") as f:
    vdata = json.load(f)

existing_redirect_sources = {r["source"] for r in vdata.get("redirects", [])}

new_redirects_added = 0
for src, dst in DUAL_URL_MAP.items():
    if src not in existing_redirect_sources:
        vdata["redirects"].append({
            "source": src,
            "destination": dst,
            "permanent": True
        })
        new_redirects_added += 1

with open(VERCEL_JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(vdata, f, indent=2)

print(f"Added {new_redirects_added} new 301 redirects to vercel.json.")

print("\n=== STEP 2: FIX CANONICAL TAGS ON /ROUTES/CITY/ PAGES ===")
routes_city_dir = os.path.join(BASE_DIR, "routes", "city")

fixed_canonicals_count = 0
for src_path, dst_path in DUAL_URL_MAP.items():
    # Extract city slug e.g. miami-fl
    city_slug = dst_path.split("/")[-2]
    
    # Target files: routes/city/{city_slug}.html and routes/city/{city_slug}/index.html
    target_files = [
        os.path.join(routes_city_dir, f"{city_slug}.html"),
        os.path.join(routes_city_dir, city_slug, "index.html")
    ]
    
    clean_canonical_url = f"https://neonautotransport.com/routes/city/{city_slug}/"
    
    for tf in target_files:
        if os.path.exists(tf):
            with open(tf, "r", encoding="utf-8", errors="ignore") as f:
                c = f.read()
            
            # Replace wrong canonical tag with self-referencing canonical
            new_c = re.sub(
                r'<link\s+rel=["\']canonical["\']\s+href=["\'].*?["\']\s*/?>',
                f'<link rel="canonical" href="{clean_canonical_url}">',
                c,
                flags=re.IGNORECASE
            )
            
            if new_c != c:
                with open(tf, "w", encoding="utf-8") as f:
                    f.write(new_c)
                fixed_canonicals_count += 1
                print(f"Updated canonical tag in {os.path.basename(tf)} -> {clean_canonical_url}")

print(f"Total canonical tags updated to self-referencing: {fixed_canonicals_count}")

print("\n=== STEP 3: UPDATE INTERNAL LINKS SITEWIDE ===")
updated_links_count = 0

for root, dirs, files in os.walk(BASE_DIR):
    if any(ignore in root for ignore in [".git", "node_modules", ".agents", "scripts", "brain"]):
        continue
    for file in files:
        if file.endswith(".html") or file.endswith(".json") or file.endswith(".js"):
            fpath = os.path.join(root, file)
            try:
                with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                
                orig = content
                for old_url, new_url in DUAL_URL_MAP.items():
                    # Replace both trailing slash and non-trailing slash link occurrences
                    old_no_slash = old_url[:-1]
                    new_no_slash = new_url[:-1]
                    
                    content = content.replace(f'href="{old_url}"', f'href="{new_url}"')
                    content = content.replace(f'href="{old_no_slash}"', f'href="{new_url}"')
                    content = content.replace(f"href='{old_url}'", f"href='{new_url}'")
                    content = content.replace(f"href='{old_no_slash}'", f"href='{new_url}'")
                    content = content.replace(f'"{old_url}"', f'"{new_url}"')
                    content = content.replace(f'"{old_no_slash}"', f'"{new_url}"')

                if content != orig:
                    with open(fpath, "w", encoding="utf-8") as f:
                        f.write(content)
                    updated_links_count += 1
            except Exception as e:
                pass

print(f"Updated internal links across {updated_links_count} files sitewide.")

print("\n=== STEP 4: DELETE OUTLIER STATE-SHIPPING CITY DIRECTORIES ===")
outlier_dirs = [
    os.path.join(BASE_DIR, "florida-car-shipping", "miami"),
    os.path.join(BASE_DIR, "florida-car-shipping", "orlando"),
    os.path.join(BASE_DIR, "texas-car-shipping", "arlington"),
    os.path.join(BASE_DIR, "texas-car-shipping", "austin"),
    os.path.join(BASE_DIR, "texas-car-shipping", "corpus-christi"),
    os.path.join(BASE_DIR, "texas-car-shipping", "dallas"),
    os.path.join(BASE_DIR, "texas-car-shipping", "el-paso"),
    os.path.join(BASE_DIR, "texas-car-shipping", "fort-worth"),
    os.path.join(BASE_DIR, "texas-car-shipping", "houston"),
    os.path.join(BASE_DIR, "texas-car-shipping", "san-antonio"),
]

deleted_dirs_count = 0
for od in outlier_dirs:
    if os.path.exists(od):
        shutil.rmtree(od)
        deleted_dirs_count += 1
        print(f"Deleted outlier directory: {os.path.relpath(od, BASE_DIR)}")

print(f"Deleted {deleted_dirs_count} outlier city directories.")

print("\n=== STEP 5: REBUILD CLEAN SITEMAP.XML ===")
sitemap_path = os.path.join(BASE_DIR, "sitemap.xml")

with open(sitemap_path, "r", encoding="utf-8") as f:
    scontent = f.read()

# Parse loc tags and filter out any outlier state-shipping city URLs
urls_in_sitemap = re.findall(r'<loc>(.*?)</loc>', scontent)
clean_sitemap_urls = set()

for u in urls_in_sitemap:
    # Exclude any /florida-car-shipping/miami/, /texas-car-shipping/houston/, etc.
    if any(u.endswith(src) or u == f"https://neonautotransport.com{src}" for src in DUAL_URL_MAP.keys()):
        continue
    clean_sitemap_urls.add(u)

sorted_sitemap = sorted(list(clean_sitemap_urls))

xml_lines = ['<?xml version="1.0" encoding="UTF-8"?>']
xml_lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
for url in sorted_sitemap:
    priority = "1.0" if url == "https://neonautotransport.com/" else "0.8"
    changefreq = "daily" if url == "https://neonautotransport.com/" else "weekly"
    xml_lines.append("  <url>")
    xml_lines.append(f"    <loc>{url}</loc>")
    xml_lines.append("    <lastmod>2026-08-27</lastmod>")
    xml_lines.append(f"    <changefreq>{changefreq}</changefreq>")
    xml_lines.append(f"    <priority>{priority}</priority>")
    xml_lines.append("  </url>")
xml_lines.append("</urlset>")

with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write("\n".join(xml_lines) + "\n")

print(f"Rebuilt sitemap.xml with {len(sorted_sitemap)} clean canonical URLs (0 outlier dual URLs).")

print("\n=== SUCCESS: Completed Dual URL Structure Fix Package ===")

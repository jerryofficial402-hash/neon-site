import os
import glob
import xml.etree.ElementTree as ET

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
sitemap_path = os.path.join(SITE_DIR, "sitemap.xml")

# 1. Parse sitemap.xml
tree = ET.parse(sitemap_path)
root = tree.getroot()
namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

sitemap_urls = set()
for url_elem in root.findall('ns:url', namespace):
    loc = url_elem.find('ns:loc', namespace)
    if loc is not None and loc.text:
        sitemap_urls.add(loc.text.strip())

print(f"Total URLs listed in sitemap.xml: {len(sitemap_urls)}")

# 2. Collect all publishable HTML files on disk
all_html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)

disk_urls = set()
for filepath in all_html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    
    # Skip node_modules or system files
    if any(x in rel for x in ["node_modules", ".git", "scratch", "tmp", ".system_generated"]):
        continue

    # Canonical URL logic
    if rel == "index.html":
        url = "https://neonautotransport.com/"
    elif rel.endswith("/index.html"):
        clean_path = rel[:-10].strip("/")
        url = f"https://neonautotransport.com/{clean_path}/"
    elif rel.endswith(".html"):
        clean_path = rel[:-5].strip("/")
        url = f"https://neonautotransport.com/{clean_path}/"
    else:
        continue
        
    disk_urls.add(url)

print(f"Total publishable HTML pages found on disk: {len(disk_urls)}")

# 3. Check for missing URLs in sitemap.xml
missing_in_sitemap = disk_urls - sitemap_urls
extra_in_sitemap = sitemap_urls - disk_urls

print(f"\nMissing from sitemap.xml: {len(missing_in_sitemap)}")
if missing_in_sitemap:
    print("Sample missing URLs:")
    for u in list(missing_in_sitemap)[:10]:
        print(f"  - {u}")

print(f"Extra in sitemap.xml: {len(extra_in_sitemap)}")

# 4. Check specifically for popular interstate routes in sitemap.xml
popular_routes = [
    "https://neonautotransport.com/california-to-florida-car-shipping/",
    "https://neonautotransport.com/new-york-to-florida-car-shipping/",
    "https://neonautotransport.com/texas-to-florida-car-shipping/",
    "https://neonautotransport.com/new-york-to-california-car-shipping/",
    "https://neonautotransport.com/california-to-texas-car-shipping/",
    "https://neonautotransport.com/illinois-to-florida-car-shipping/",
    "https://neonautotransport.com/georgia-to-california-car-shipping/",
    "https://neonautotransport.com/florida-to-california-car-shipping/"
]

print("\nPopular Interstate Routes Check in sitemap.xml:")
for r in popular_routes:
    status = "PRESENT" if r in sitemap_urls else "MISSING!"
    print(f"  - {r} -> {status}")

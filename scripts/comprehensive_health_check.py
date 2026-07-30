import os
import glob
import re
import json
from xml.etree import ElementTree as ET

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)

broken_internal_links = []
missing_og_tags = []
malformed_json_ld = []
all_internal_hrefs = set()

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if "node_modules" in rel or ".git" in rel or rel.startswith("og-images/"):
        continue

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        c = f.read()

    # 1. Check Open Graph tags
    if 'og:title' not in c or 'og:description' not in c or 'og:image' not in c:
        missing_og_tags.append(rel)

    # 2. Check JSON-LD validity
    json_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', c, re.DOTALL)
    for idx, block in enumerate(json_blocks):
        try:
            json.loads(block.strip())
        except Exception as e:
            malformed_json_ld.append((rel, str(e)))

    # 3. Collect internal links
    hrefs = re.findall(r'href=["\'](/[^"\']*)["\']', c)
    for h in hrefs:
        # Ignore anchor-only links or static assets
        if h.startswith("/#") or h.endswith(".css") or h.endswith(".js") or h.endswith(".png") or h.endswith(".jpg") or h.endswith(".svg") or h.endswith(".ico") or h.startswith("tel:") or h.startswith("mailto:"):
            continue
        
        # Normalize path
        clean_h = h.split("#")[0].split("?")[0]
        if not clean_h:
            continue

        # Check if local file exists
        if clean_h == "/":
            target = os.path.join(SITE_DIR, "index.html")
        elif clean_h.endswith(".html"):
            target = os.path.join(SITE_DIR, clean_h.lstrip("/"))
        else:
            target = os.path.join(SITE_DIR, clean_h.strip("/"), "index.html")

        if not os.path.exists(target):
            broken_internal_links.append((rel, h, target))

# 4. Check sitemap.xml
sitemap_path = os.path.join(SITE_DIR, "sitemap.xml")
sitemap_missing_urls = []
if os.path.exists(sitemap_path):
    with open(sitemap_path, "r", encoding="utf-8") as f:
        sitemap_content = f.read()
    urls_in_sitemap = re.findall(r'<loc>(.*?)</loc>', sitemap_content)
    sitemap_count = len(urls_in_sitemap)
else:
    sitemap_count = 0

print("=== COMPREHENSIVE HEALTH CHECK REPORT ===")
print(f"Total HTML files scanned: {len(html_files)}")
print(f"Broken Internal Links: {len(broken_internal_links)}")
if broken_internal_links:
    print("  Sample broken links:")
    for src, link, targ in broken_internal_links[:10]:
        print(f"   - In {src}: link '{link}' -> missing '{os.path.relpath(targ, SITE_DIR)}'")

print(f"\nPages Missing Complete Open Graph Tags: {len(missing_og_tags)}")
if missing_og_tags:
    print("  Sample pages missing OG tags:")
    for p in missing_og_tags[:10]:
        print(f"   - {p}")

print(f"\nMalformed JSON-LD Schema Blocks: {len(malformed_json_ld)}")
if malformed_json_ld:
    for p, err in malformed_json_ld:
        print(f"   - In {p}: {err}")

print(f"\nSitemap URLs Count: {sitemap_count}")

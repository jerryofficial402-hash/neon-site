import os
import shutil
import xml.etree.ElementTree as ET

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

print("=== STEP 1: DELETING JUNK / DEV ARTIFACT FILES AND FOLDERS ===")
files_to_remove = [
    os.path.join(BASE_DIR, "original_index.html"),
    os.path.join(BASE_DIR, "original_utf8.html"),
    os.path.join(BASE_DIR, "slider.html"),
    os.path.join(BASE_DIR, "services-grid.html"),
    os.path.join(BASE_DIR, "faq.html"),
]

dirs_to_remove = [
    os.path.join(BASE_DIR, "dashboard"),
    os.path.join(BASE_DIR, "og-images"),
    os.path.join(BASE_DIR, "faq"),
]

for fpath in files_to_remove:
    if os.path.exists(fpath):
        os.remove(fpath)
        print(f"Deleted file: {os.path.basename(fpath)}")

for dpath in dirs_to_remove:
    if os.path.exists(dpath):
        shutil.rmtree(dpath)
        print(f"Deleted directory: {os.path.basename(dpath)}")

print("\n=== STEP 2: STANDARDIZING CONTACT URL ACROSS CODEBASE TO /contact.html ===")
modified_files_count = 0
for root, dirs, files in os.walk(BASE_DIR):
    if ".git" in root or "node_modules" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            fpath = os.path.join(root, file)
            with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            
            # Replace /contact/ with /contact.html
            new_content = content.replace('href="/contact/"', 'href="/contact.html"').replace("href='/contact/'", "href='/contact.html'")
            if new_content != content:
                with open(fpath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                modified_files_count += 1

print(f"Standardized contact links in {modified_files_count} HTML files.")

print("\n=== STEP 3: REBUILDING CLEAN SITEMAP.XML ===")
# Exclude list for sitemap generation
exclude_keywords = [
    "dashboard",
    "original_index",
    "original_utf8",
    "slider",
    "services-grid",
    "og-images",
    "faq", # exclude /faq/ or faq.html, keeping /faqs/
]

valid_urls = []
for root, dirs, files in os.walk(BASE_DIR):
    if ".git" in root or "node_modules" in root or ".agents" in root or "scripts" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            rel_path = os.path.relpath(os.path.join(root, file), BASE_DIR).replace("\\", "/")
            
            # Skip excluded files
            if any(kw in rel_path for kw in exclude_keywords):
                continue
            
            if rel_path == "index.html":
                url = "https://neonautotransport.com/"
            elif rel_path.endswith("/index.html"):
                url = f"https://neonautotransport.com/{rel_path[:-10]}/"
            else:
                url = f"https://neonautotransport.com/{rel_path}"
            
            valid_urls.append(url)

# Remove duplicates & sort
valid_urls = sorted(list(set(valid_urls)))
print(f"Total valid production URLs found: {len(valid_urls)}")

# Generate sitemap XML string
xml_lines = ['<?xml version="1.0" encoding="UTF-8"?>']
xml_lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
for url in valid_urls:
    priority = "1.0" if url == "https://neonautotransport.com/" else "0.8"
    changefreq = "daily" if url == "https://neonautotransport.com/" else "weekly"
    xml_lines.append("  <url>")
    xml_lines.append(f"    <loc>{url}</loc>")
    xml_lines.append("    <lastmod>2026-08-25</lastmod>")
    xml_lines.append(f"    <changefreq>{changefreq}</changefreq>")
    xml_lines.append(f"    <priority>{priority}</priority>")
    xml_lines.append("  </url>")
xml_lines.append("</urlset>")

sitemap_content = "\n".join(xml_lines)
sitemap_path = os.path.join(BASE_DIR, "sitemap.xml")
with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write(sitemap_content)

print(f"Successfully generated clean sitemap.xml with {len(valid_urls)} valid 200 OK URLs!")

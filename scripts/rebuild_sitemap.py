import os
import glob
from datetime import datetime

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
sitemap_path = os.path.join(SITE_DIR, "sitemap.xml")

# Find all valid HTML files
all_html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)

url_entries = []
today_str = datetime.now().strftime("%Y-%m-%d")

for filepath in all_html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    
    # Exclude system/internal files
    if any(x in rel for x in ["node_modules", ".git", "scratch", "tmp", ".system_generated"]):
        continue

    # Canonical URL logic
    if rel == "index.html":
        url = "https://neonautotransport.com/"
        priority = "1.0"
        changefreq = "daily"
    elif rel.endswith("/index.html"):
        clean_path = rel[:-10].strip("/")
        url = f"https://neonautotransport.com/{clean_path}/"
        priority = "0.8"
        changefreq = "weekly"
    elif rel.endswith(".html"):
        clean_path = rel[:-5].strip("/")
        url = f"https://neonautotransport.com/{clean_path}/"
        priority = "0.8"
        changefreq = "weekly"
    else:
        continue

    # Priority adjustments
    if url in ["https://neonautotransport.com/", "https://neonautotransport.com/cost-calculator/"]:
        priority = "1.0"
        changefreq = "daily"
    elif any(x in url for x in ["/services/", "/florida-car-shipping/", "/why-neon/", "/contact/", "/reviews/", "/locations/"]):
        priority = "0.9"
        changefreq = "weekly"
    elif "/routes/city/" in url:
        priority = "0.7"
        changefreq = "weekly"
    elif "/blog/" in url or "/author/" in url:
        priority = "0.6"
        changefreq = "monthly"

    url_entries.append((url, priority, changefreq))

# Sort URLs deterministically
url_entries = sorted(list(set(url_entries)), key=lambda x: x[0])

# Generate XML
xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for url, priority, changefreq in url_entries:
    xml_lines.append('  <url>')
    xml_lines.append(f'    <loc>{url}</loc>')
    xml_lines.append(f'    <lastmod>{today_str}</lastmod>')
    xml_lines.append(f'    <changefreq>{changefreq}</changefreq>')
    xml_lines.append(f'    <priority>{priority}</priority>')
    xml_lines.append('  </url>')

xml_lines.append('</urlset>')

xml_content = "\n".join(xml_lines)

with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write(xml_content)

print(f"SUCCESS: Rebuilt sitemap.xml with 100% of published pages! Total URLs: {len(url_entries)}")

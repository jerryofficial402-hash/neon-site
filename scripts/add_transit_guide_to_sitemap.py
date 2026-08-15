import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
SITEMAP_FILE = os.path.join(BASE_DIR, "sitemap.xml")

with open(SITEMAP_FILE, "r", encoding="utf-8") as f:
    content = f.read()

new_url_entry = """  <url>
    <loc>https://neonautotransport.com/car-shipping-transit-times/</loc>
    <lastmod>2026-08-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
"""

if "car-shipping-transit-times" not in content:
    content = content.replace("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n", f"<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n{new_url_entry}")
    with open(SITEMAP_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print("SUCCESS: Added /car-shipping-transit-times/ to sitemap.xml")
else:
    print("ALREADY_EXISTS: /car-shipping-transit-times/ is in sitemap.xml")

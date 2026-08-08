import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
SITEMAP_FILE = os.path.join(SITE_DIR, "sitemap.xml")

with open(SITEMAP_FILE, "r", encoding="utf-8") as f:
    sitemap = f.read()

live_oak_entry = """  <url>
    <loc>https://neonautotransport.com/live-oak-ca-car-shipping/</loc>
    <lastmod>2026-08-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>"""

if "live-oak-ca-car-shipping" not in sitemap:
    sitemap = sitemap.replace("</urlset>", f"{live_oak_entry}\n</urlset>")
    with open(SITEMAP_FILE, "w", encoding="utf-8") as f:
        f.write(sitemap)
    print("SUCCESS: Added Live Oak, CA page to sitemap.xml!")
else:
    print("Live Oak, CA page already in sitemap.xml")

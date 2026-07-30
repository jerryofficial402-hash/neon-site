import os
from bs4 import BeautifulSoup
import json

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\arkansas-car-shipping\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

print("--- SEO AUDIT FOR ARKANSAS STATE PAGE ---")

# 1. Meta Tags
title = soup.title.string if soup.title else None
print(f"Title: {title} (Length: {len(title) if title else 0})")

meta_desc = soup.find('meta', attrs={'name': 'description'})
desc_content = meta_desc['content'] if meta_desc else None
print(f"Meta Description: {desc_content} (Length: {len(desc_content) if desc_content else 0})")

meta_keywords = soup.find('meta', attrs={'name': 'keywords'})
keywords_content = meta_keywords['content'] if meta_keywords else None
print(f"Meta Keywords: {keywords_content}")

canonical = soup.find('link', attrs={'rel': 'canonical'})
canon_href = canonical['href'] if canonical else None
print(f"Canonical URL: {canon_href}")

# 2. Headings
h1s = soup.find_all('h1')
print(f"H1 Count: {len(h1s)} (Should be exactly 1)")
if h1s:
    for h in h1s:
        print(f"  H1 Text: {h.text.strip()}")

# 3. Breadcrumbs
# For state pages we recently added "Back to All Locations" or "Back to All US Locations"
back_link_exists = "Back to All" in html
print(f"Visual Back Link / Breadcrumb Present: {back_link_exists}")

# 4. Schema Markup
scripts = soup.find_all('script', type='application/ld+json')
print(f"JSON-LD Schema Scripts Found: {len(scripts)}")
has_faq = False
has_breadcrumb = False
has_service = False
for script in scripts:
    try:
        data = json.loads(script.string)
        if isinstance(data, dict):
            if data.get('@type') == 'FAQPage':
                has_faq = True
            elif data.get('@type') == 'BreadcrumbList':
                has_breadcrumb = True
            elif data.get('@type') == 'Service' or (isinstance(data.get('@type'), list) and 'Service' in data.get('@type')):
                has_service = True
        elif isinstance(data, list):
            for item in data:
                if item.get('@type') == 'FAQPage':
                    has_faq = True
                elif item.get('@type') == 'BreadcrumbList':
                    has_breadcrumb = True
                elif item.get('@type') == 'Service' or (isinstance(item.get('@type'), list) and 'Service' in item.get('@type')):
                    has_service = True
    except:
        print("Error parsing a schema script")

print(f"Service Schema Present: {has_service}")
print(f"FAQ Schema Present: {has_faq}")
print(f"Breadcrumb Schema Present: {has_breadcrumb}")

# 5. Interlinking
links = soup.find_all('a')
internal_links = [a['href'] for a in links if a.has_attr('href') and str(a['href']).startswith('/')]
print(f"Internal Links Found: {len(internal_links)}")

# 6. Images
images = soup.find_all('img')
missing_alt = [img for img in images if not img.has_attr('alt') or not img['alt'].strip()]
print(f"Images missing ALT text: {len(missing_alt)}")

import os
import json
from bs4 import BeautifulSoup

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\colorado-car-shipping-cities\index.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

issues = []
recommendations = []
passed = []

# 1. Title & Meta
title = soup.find("title")
if title and title.text.strip():
    passed.append(f"Title: {title.text.strip()}")
else:
    issues.append("Missing or empty <title> tag")

meta_desc = soup.find("meta", attrs={"name": "description"})
if meta_desc and meta_desc.get("content"):
    passed.append(f"Meta Description: {meta_desc['content']}")
else:
    issues.append("Missing <meta name='description'>")

canonical = soup.find("link", attrs={"rel": "canonical"})
if canonical and canonical.get("href") == "https://neonautotransport.com/colorado-car-shipping-cities/":
    passed.append(f"Canonical URL correct: {canonical['href']}")
else:
    issues.append(f"Canonical URL missing or incorrect: {canonical.get('href') if canonical else 'None'}")

# 2. JSON-LD Schema
schemas = soup.find_all("script", attrs={"type": "application/ld+json"})
if len(schemas) != 1:
    issues.append(f"Expected exactly 1 combined @graph JSON-LD script tag, found {len(schemas)}")
else:
    try:
        data = json.loads(schemas[0].string)
        if "@graph" in data:
            types_found = [item.get("@type") for item in data["@graph"]]
            passed.append(f"JSON-LD @graph contains schemas: {types_found}")
            if "Service" not in types_found:
                issues.append("Missing 'Service' schema in JSON-LD")
            if "FAQPage" not in types_found:
                issues.append("Missing 'FAQPage' schema in JSON-LD")
            if "BreadcrumbList" not in types_found:
                issues.append("Missing 'BreadcrumbList' schema in JSON-LD")
            
            # Inspect BreadcrumbList
            for item in data["@graph"]:
                if item.get("@type") == "BreadcrumbList":
                    elements = item.get("itemListElement", [])
                    if len(elements) == 3:
                        passed.append(f"BreadcrumbList schema has 3 valid levels: {[e.get('name') for e in elements]}")
                    else:
                        issues.append(f"BreadcrumbList has {len(elements)} items instead of 3")
        else:
            issues.append("JSON-LD does not use @graph structure")
    except Exception as e:
        issues.append(f"JSON-LD JSON parse error: {str(e)}")

# 3. Headings Hierarchy
h1s = soup.find_all("h1")
if len(h1s) == 1:
    passed.append(f"H1 count is exactly 1: '{h1s[0].text.strip()}'")
else:
    issues.append(f"Expected 1 <H1>, found {len(h1s)}")

# 4. Internal Interlinking
all_links = soup.find_all("a", href=True)
hrefs = [a["href"] for a in all_links]
co_links = [h for h in hrefs if "/colorado-car-shipping/" in h]
city_route_links = [h for h in hrefs if "/routes/city/" in h]
service_links = [h for h in hrefs if "/services/" in h]

if co_links:
    passed.append(f"Found {len(co_links)} link(s) back to /colorado-car-shipping/ state hub")
else:
    issues.append("No links found pointing back to /colorado-car-shipping/")

if city_route_links:
    passed.append(f"Found {len(city_route_links)} link(s) to individual city routes ({set(city_route_links)})")
else:
    recommendations.append("No links to /routes/city/ pages found")

if service_links:
    passed.append(f"Found {len(service_links)} link(s) to service pages")
else:
    recommendations.append("No links to /services/ pages found")

# 5. Visual Breadcrumbs
nav_breadcrumbs = soup.find("nav", attrs={"aria-label": "Breadcrumb"})
if not nav_breadcrumbs:
    recommendations.append("Visual HTML Breadcrumb navigation (<nav aria-label='Breadcrumb'>) is not present above the H1 (only a 'Back to' link is present). Adding full visual breadcrumbs (Home > Colorado Car Shipping > Top Cities Guide) improves UX and SEO clarity.")
else:
    passed.append("Visual HTML Breadcrumb navigation present")

# 6. Images & Alt Text
imgs = soup.find_all("img")
missing_alt = [img.get("src", "unknown") for img in imgs if not img.get("alt") or not img.get("alt").strip()]
if missing_alt:
    issues.append(f"Images missing alt text: {missing_alt}")
else:
    passed.append(f"All {len(imgs)} images have descriptive alt text")

# 7. Check parent page link
parent_file = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\colorado-car-shipping\index.html"
with open(parent_file, "r", encoding="utf-8") as pf:
    parent_html = pf.read()
if "/colorado-car-shipping-cities/" in parent_html:
    passed.append("Parent page /colorado-car-shipping/ links to /colorado-car-shipping-cities/")
else:
    issues.append("Parent page /colorado-car-shipping/ DOES NOT link to /colorado-car-shipping-cities/")

print("=== AUDIT RESULTS ===")
print("\n[PASSED CHECKS]:")
for p in passed:
    print("  [PASS]", p)

if issues:
    print("\n[ISSUES FOUND]:")
    for idx, iss in enumerate(issues, 1):
        print(f"  [ERROR] {idx}. {iss}")
else:
    print("\n[NO CRITICAL ISSUES FOUND]")

if recommendations:
    print("\n[RECOMMENDATIONS]:")
    for idx, rec in enumerate(recommendations, 1):
        print(f"  [INFO] {idx}. {rec}")

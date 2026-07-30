import os
from bs4 import BeautifulSoup
import json

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\arkansas-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
issues = []

print(f"--- SEO Audit for {file_path} ---")

# 1. Title Tag
title = soup.find('title')
if title and title.string:
    print(f"[OK] Title: {title.string}")
    if len(title.string) > 60:
        issues.append("Title length might be over 60 characters.")
    if 'Arkansas' not in title.string and 'AR' not in title.string:
        issues.append("Title does not contain 'Arkansas' or 'AR'.")
else:
    issues.append("Missing <title> tag.")

# 2. Meta Description
desc = soup.find('meta', attrs={'name': 'description'})
if desc and desc.get('content'):
    print(f"[OK] Meta Description: {desc['content']}")
    if len(desc['content']) > 160:
        issues.append("Meta description length is over 160 characters.")
    if 'Arkansas' not in desc['content']:
        issues.append("Meta description does not contain 'Arkansas'.")
else:
    issues.append("Missing meta description.")

# 3. Canonical Tag
canonical = soup.find('link', rel='canonical')
if canonical and canonical.get('href'):
    print(f"[OK] Canonical: {canonical['href']}")
    if 'arkansas-car-shipping-cities' not in canonical['href']:
        issues.append(f"Canonical URL might be wrong: {canonical['href']}")
else:
    issues.append("Missing canonical tag.")

# 4. H1 Tag
h1 = soup.find('h1')
if h1:
    print(f"[OK] H1: {h1.text.strip()}")
else:
    issues.append("Missing <h1> tag.")

# 5. Breadcrumbs Schema
scripts = soup.find_all('script', type='application/ld+json')
has_breadcrumb_schema = False
for script in scripts:
    if 'BreadcrumbList' in script.string:
        has_breadcrumb_schema = True
        try:
            data = json.loads(script.string)
            print("[OK] BreadcrumbList Schema found.")
            
            # Check the contents
            items = data.get('itemListElement', [])
            if len(items) >= 2:
                # Assuming item 1 is Home, item 2 should be Arkansas
                if 'Arkansas' not in items[1].get('name', ''):
                    issues.append(f"Breadcrumb schema position 2 name should be 'Arkansas' or similar. Got: {items[1].get('name')}")
                if 'arkansas-car-shipping' not in items[1].get('item', ''):
                    issues.append(f"Breadcrumb schema position 2 URL might be wrong: {items[1].get('item')}")
        except Exception as e:
            issues.append(f"Error parsing BreadcrumbList Schema: {e}")

if not has_breadcrumb_schema:
    issues.append("Missing BreadcrumbList Schema.")

# 6. HTML Breadcrumbs
html_breadcrumb = soup.find('div', class_='mb-4')
if html_breadcrumb:
    back_link = html_breadcrumb.find('a')
    if back_link:
        if 'Arkansas' not in back_link.text:
            issues.append(f"HTML Breadcrumb text does not mention Arkansas. Got: {back_link.text.strip()}")
        if back_link.get('href') != '/arkansas-car-shipping/':
            issues.append(f"HTML Breadcrumb link is not '/arkansas-car-shipping/'. Got: {back_link.get('href')}")
        else:
            print(f"[OK] HTML Breadcrumb points correctly to {back_link.get('href')}")
    else:
        issues.append("HTML Breadcrumb missing <a> tag.")
else:
    issues.append("HTML Breadcrumbs missing.")

# 7. Leftover "New York" references
body_text = soup.body.text if soup.body else ""
if 'New York' in body_text:
    issues.append("Found 'New York' text in the body! Some content was not fully replaced.")
if 'ny-car-shipping' in html or 'new-york' in html:
    # Filter out valid ones if any, but usually there shouldn't be any in an Arkansas page unless linking to NY
    # We copied this from new-york-car-shipping-cities, so any 'new-york' in the HTML might be a missed link.
    # Exclude the "Back to All US Locations" or similar if they point to NY, but wait, usually that points to /locations/.
    # Let's just flag it.
    issues.append("Found 'new-york' or 'ny-car-shipping' URL/text in the HTML.")

print("\n--- Summary of Issues ---")
if issues:
    for i, issue in enumerate(issues, 1):
        print(f"{i}. {issue}")
else:
    print("No obvious SEO or interlinking issues found!")

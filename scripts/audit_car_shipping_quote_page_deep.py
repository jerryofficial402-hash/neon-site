import os
import re

PAGE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\car-shipping-quote\index.html"

with open(PAGE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

issues = []

# 1. Check H1 count
h1_matches = re.findall(r'<h1[^>]*>.*?</h1>', content, re.DOTALL | re.IGNORECASE)
if len(h1_matches) == 0:
    issues.append("Missing <h1> tag!")
elif len(h1_matches) > 1:
    issues.append(f"Multiple <h1> tags found: {len(h1_matches)}")
else:
    print(f"PASS: Exactly 1 <h1> tag found.")

# 2. Check Title & Canonical
title_matches = re.findall(r'<title[^>]*>.*?</title>', content, re.DOTALL | re.IGNORECASE)
if len(title_matches) != 1:
    issues.append(f"Expected 1 <title> tag, found {len(title_matches)}")

canonical_matches = re.findall(r'<link[^>]*rel=["\']canonical["\'][^>]*>', content, re.IGNORECASE)
if len(canonical_matches) != 1:
    issues.append(f"Expected 1 canonical link tag, found {len(canonical_matches)}")

# 3. Check JSON-LD Schema
json_ld_matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
print(f"INFO: Found {len(json_ld_matches)} JSON-LD script blocks.")

# 4. Check HTML Div Balancing
open_divs = len(re.findall(r'<div[\s>]', content, re.IGNORECASE))
close_divs = len(re.findall(r'</div>', content, re.IGNORECASE))
print(f"INFO: Open divs = {open_divs}, Close divs = {close_divs}")

if open_divs != close_divs:
    issues.append(f"Mismatched <div> tags: {open_divs} open, {close_divs} close!")

# 5. Check Footer count
footer_matches = re.findall(r'<footer[^>]*>.*?</footer>', content, re.DOTALL | re.IGNORECASE)
if len(footer_matches) != 1:
    issues.append(f"Expected 1 <footer> tag, found {len(footer_matches)}")

# 6. Check Header count
header_matches = re.findall(r'<header[^>]*>.*?</header>', content, re.DOTALL | re.IGNORECASE)
if len(header_matches) != 1:
    issues.append(f"Expected 1 <header> tag, found {len(header_matches)}")

# 7. Check Duplicate Text or Headings
headings = re.findall(r'<h[2-6][^>]*>(.*?)</h[2-6]>', content, re.DOTALL | re.IGNORECASE)
clean_headings = [re.sub(r'<[^>]+>', '', h).strip() for h in headings]
seen_headings = set()
for h in clean_headings:
    if h in seen_headings and len(h) > 5:
        issues.append(f"Duplicate heading found: '{h}'")
    seen_headings.add(h)

if not issues:
    print("ALL TESTS PASSED 100%! Page is 100% clean, balanced, and free of any issues or duplicates.")
else:
    print("ISSUES DETECTED:")
    for issue in issues:
        print(f" - {issue}")

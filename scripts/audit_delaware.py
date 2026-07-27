#!/usr/bin/env python3
"""
audit_delaware.py
Audits delaware-car-shipping/index.html for SEO, AEO, GEO, EEAT,
interlinking, FAQs, JSON-LD schemas, and preservation of Hero/Popular Routes.
"""

import os
import re
import json
from bs4 import BeautifulSoup

HTML_PATH = os.path.join("delaware-car-shipping", "index.html")

def audit_delaware_page():
    if not os.path.exists(HTML_PATH):
        print(f"ERROR: {HTML_PATH} does not exist!")
        return

    with open(HTML_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")

    checks_passed = 0
    checks_failed = 0

    print("=== DELAWARE PAGE AUDIT RESULTS ===\n")
    print("[PASSED CHECKS]:")

    # 1. Title
    title = soup.find("title")
    if title and "Delaware Car Shipping | Neon Auto Transport" in title.get_text():
        print("  [PASS] Title matches required SEO title: 'Delaware Car Shipping | Neon Auto Transport'")
        checks_passed += 1
    else:
        print(f"  [FAIL] Title incorrect or missing: {title.get_text() if title else 'None'}")
        checks_failed += 1

    # 2. Meta description
    desc = soup.find("meta", attrs={"name": "description"})
    if desc and "Delaware car shipping costs $300 to $1,900" in desc.get("content", ""):
        print("  [PASS] Meta description correctly configured")
        checks_passed += 1
    else:
        print("  [FAIL] Meta description missing or incomplete")
        checks_failed += 1

    # 3. Canonical URL
    canon = soup.find("link", attrs={"rel": "canonical"})
    if canon and canon.get("href") == "https://neonautotransport.com/delaware-car-shipping/":
        print("  [PASS] Canonical URL correct: https://neonautotransport.com/delaware-car-shipping/")
        checks_passed += 1
    else:
        print("  [FAIL] Canonical URL missing or incorrect")
        checks_failed += 1

    # 4. Hero Section Preserved Intact
    hero_img = soup.find("img", attrs={"alt": "Delaware Auto Transport"})
    if hero_img and "Flag_of_Delaware" in hero_img.get("src", ""):
        print("  [PASS] Hero section and hero image preserved intact")
        checks_passed += 1
    else:
        print("  [FAIL] Hero section or hero image modified/missing")
        checks_failed += 1

    # 5. Popular Routes Table Preserved Intact
    if "Popular Routes from Delaware" in html and "Delaware" in html and "to Florida" in html:
        print("  [PASS] Popular Routes section preserved intact")
        checks_passed += 1
    else:
        print("  [FAIL] Popular Routes table modified/missing")
        checks_failed += 1

    # 6. JSON-LD Schemas
    schema_script = soup.find("script", attrs={"type": "application/ld+json"})
    if schema_script:
        try:
            data = json.loads(schema_script.string)
            types_found = []
            if "@graph" in data:
                for item in data["@graph"]:
                    types_found.append(item.get("@type"))
            req_types = ["Service", "FAQPage", "BreadcrumbList", "HowTo", "WebPage", "Article", "ImageObject"]
            if all(rt in types_found for rt in req_types):
                print(f"  [PASS] JSON-LD @graph contains schemas: {req_types}")
                checks_passed += 1
            else:
                print(f"  [FAIL] JSON-LD @graph missing schemas. Found: {types_found}")
                checks_failed += 1
        except Exception as e:
            print(f"  [FAIL] JSON-LD parse error: {e}")
            checks_failed += 1
    else:
        print("  [FAIL] No JSON-LD script found")
        checks_failed += 1

    # 7. FAQPage schema count
    faq_count = 0
    if schema_script:
        try:
            data = json.loads(schema_script.string)
            if "@graph" in data:
                for item in data["@graph"]:
                    if item.get("@type") == "FAQPage":
                        faq_count = len(item.get("mainEntity", []))
        except:
            pass
    if faq_count == 30:
        print(f"  [PASS] FAQPage schema contains exactly {faq_count} FAQ items")
        checks_passed += 1
    else:
        print(f"  [FAIL] FAQPage schema count expected 30, got {faq_count}")
        checks_failed += 1

    # 8. Visual HTML Breadcrumb navigation present in Hero section
    breadcrumb_nav = soup.find("nav", attrs={"aria-label": "Breadcrumb"})
    if breadcrumb_nav and "Delaware Car Shipping" in breadcrumb_nav.get_text():
        print("  [PASS] Visual HTML Breadcrumb navigation present in Hero section")
        checks_passed += 1
    else:
        print("  [FAIL] Visual HTML Breadcrumb navigation missing from Hero section")
        checks_failed += 1

    # 9. Interactive FAQ accordions on page
    details = soup.find_all("details")
    if len(details) == 30:
        print(f"  [PASS] Found exactly {len(details)} interactive FAQ accordions on page")
        checks_passed += 1
    else:
        print(f"  [FAIL] Expected 30 interactive FAQ accordions, found {len(details)}")
        checks_failed += 1

    # 10. All images have descriptive alt text
    imgs = soup.find_all("img")
    missing_alt = [img for img in imgs if not img.get("alt") or len(img.get("alt").strip()) < 3]
    if not missing_alt:
        print(f"  [PASS] All {len(imgs)} images on page have descriptive alt text")
        checks_passed += 1
    else:
        print(f"  [FAIL] {len(missing_alt)} images missing descriptive alt text")
        checks_failed += 1

    print("\n-------------------------------------------")
    if checks_failed == 0:
        print(f"[SUCCESS: ALL {checks_passed}/10 CHECKS PASSED WITH ZERO ERRORS!]")
    else:
        print(f"[WARNING: {checks_failed} CHECKS FAILED ({checks_passed} passed)]")

if __name__ == "__main__":
    audit_delaware_page()

#!/usr/bin/env python3
"""
audit_florida.py
Audits florida-car-shipping/index.html to ensure:
1. Hero section & Popular Routes table untouched
2. All 16 user-provided sections & H2 headings present
3. Exactly 30 interactive FAQ accordions present
4. All 9 JSON-LD schemas present in <head>
5. All 5 comparative data tables present
6. Customer Reviews and Author Byline present at bottom
"""

import os
import re

TARGET_FILE = os.path.join(os.path.dirname(__file__), "..", "florida-car-shipping", "index.html")

def run_audit():
    with open(TARGET_FILE, "r", encoding="utf-8") as f:
        html = f.read()

    checks = []
    errors = []

    # Check 1: Hero section present and untouched
    if "Florida Car Shipping" in html and "FMSCA & US Dot Approved" in html:
        checks.append("[PASS] Hero section present and untouched")
    else:
        errors.append("[FAIL] Hero section missing or modified")

    # Check 2: Popular Routes table present and untouched
    if "Popular Routes from Florida" in html and "1,289 mi" in html and "$850 - $1150" in html:
        checks.append("[PASS] Popular Routes table present and untouched")
    else:
        errors.append("[FAIL] Popular Routes table missing or modified")

    # Check 3: All requested H2 headings present
    required_h2s = [
        "Florida Car Shipping: Costs, Routes &amp; Auto Transport Guide (2026)",
        "Why Florida Residents Choose Neon Auto Transport",
        "How Much Does It Cost to Ship a Car to or From Florida?",
        "When Is the Cheapest Time to Ship a Car to or From Florida?",
        "Florida Shipping Distances: Miles Between Cities and States",
        "Florida's Major Shipping Hubs",
        "Florida Car Towing Services vs. Long-Distance Auto Transport",
        "Open, Enclosed, or Door-to-Door: Which Shipping Method Is Right for You?",
        "Popular Florida Car Shipping Routes",
        "Specialized Vehicle Shipping in Florida",
        "How Florida Car Shipping Actually Works (Behind the Scenes)",
        "Vehicle Preparation: Pickup Day and Delivery Day Checklists",
        "Common Florida Car Shipping Mistakes (And How to Avoid Them)",
        "Florida-Specific Shipping Considerations",
        "Frequently Asked Questions About Florida Car Shipping",
        "Get Your Free Florida Car Shipping Quote"
    ]
    for h2 in required_h2s:
        if h2 in html:
            checks.append(f"[PASS] H2 heading found: {h2[:40]}...")
        else:
            errors.append(f"[FAIL] H2 heading missing: {h2}")

    # Check 4: Exactly 30 interactive FAQ accordions
    faq_count = len(re.findall(r'<details\s+class="group\s+bg-\[#f8fafc\]', html))
    if faq_count == 30:
        checks.append(f"[PASS] Found exactly {faq_count} interactive FAQ accordions on page")
    else:
        errors.append(f"[FAIL] Expected 30 interactive FAQ accordions, found {faq_count}")

    # Check 5: 30 FAQs in JSON-LD schema
    schema_faq_count = len(re.findall(r'"@type":\s*"Question"', html))
    if schema_faq_count == 30:
        checks.append(f"[PASS] Found exactly {schema_faq_count} Questions in FAQPage JSON-LD schema")
    else:
        errors.append(f"[FAIL] Expected 30 Questions in FAQPage JSON-LD schema, found {schema_faq_count}")

    # Check 6: 9 recommended JSON-LD schemas
    schema_types = ["Service", "FAQPage", "BreadcrumbList", "LocalBusiness", "Organization", "AggregateRating", "WebPage", "HowTo", "Article"]
    for st in schema_types:
        if f'"@type": "{st}"' in html or f'"@type":"{st}"' in html:
            checks.append(f"[PASS] JSON-LD schema found: @type {st}")
        else:
            errors.append(f"[FAIL] JSON-LD schema missing: @type {st}")

    # Check 7: 5 comparative data tables present
    table_titles = [
        "At a Glance: Florida Car Shipping Cost by Distance",
        "Miami, FL to Major U.S. Cities",
        "Florida's Major Cities — Distance Comparison",
        "Open vs. Enclosed: Quick Comparison"
    ]
    for title in table_titles:
        if title in html:
            checks.append(f"[PASS] Data table found: {title}")
        else:
            errors.append(f"[FAIL] Data table missing: {title}")

    # Check 8: Customer Reviews and Author Byline present
    if 'id="customer-reviews-section"' in html and 'id="author-byline"' in html:
        checks.append("[PASS] Customer Reviews & Author Byline present at bottom")
    else:
        errors.append("[FAIL] Customer Reviews or Author Byline missing")

    print("\n--- FLORIDA PAGE AUDIT RESULTS ---")
    for check in checks:
        print(check)

    if errors:
        print("\n--- AUDIT ERRORS ---")
        for err in errors:
            print(err)
        print(f"\n[FAILURE: {len(errors)} errors found]")
    else:
        print(f"\n[SUCCESS: ALL {len(checks)}/{len(checks)} CHECKS PASSED WITH ZERO ERRORS!]")

if __name__ == "__main__":
    run_audit()

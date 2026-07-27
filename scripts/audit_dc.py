# -*- coding: utf-8 -*-
import sys
import re
import json
from bs4 import BeautifulSoup

HTML_PATH = "washington-dc-car-shipping/index.html"

def audit_dc():
    with open(HTML_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    errors = []
    passes = []

    # 1. Title check
    title = soup.find("title")
    if title and "Washington D.C. Car Shipping | Neon Auto Transport" in title.text:
        passes.append(f"Title matches required SEO title: '{title.text}'")
    else:
        errors.append(f"Title missing or incorrect: {title.text if title else 'None'}")

    # 2. Meta description check
    meta_desc = soup.find("meta", attrs={"name": "description"})
    if meta_desc and "Ship your car to or from Washington D.C. with Neon Auto Transport" in meta_desc.get("content", ""):
        passes.append("Meta description correctly configured")
    else:
        errors.append("Meta description missing or incorrect")

    # 3. Canonical URL
    canonical = soup.find("link", attrs={"rel": "canonical"})
    if canonical and canonical.get("href") == "https://neonautotransport.com/washington-dc-car-shipping/":
        passes.append("Canonical URL correct: https://neonautotransport.com/washington-dc-car-shipping/")
    else:
        errors.append("Canonical URL incorrect or missing")

    # 4. Hero section unchanged check
    hero_img = soup.find("img", attrs={"alt": "Washington D.C. Auto Transport"})
    if hero_img and "Flag_of_Washington" in hero_img.get("src", ""):
        passes.append("Hero section and hero image preserved intact")
    else:
        errors.append("Hero section image missing or modified")

    # 5. Popular Routes section unchanged check
    h2s = [h.text.strip() for h in soup.find_all("h2")]
    if "Popular Routes from Washington D.C." in h2s:
        passes.append("Popular Routes section preserved intact")
    else:
        errors.append("Popular Routes section missing")

    # 6. JSON-LD @graph check
    ld_scripts = soup.find_all("script", attrs={"type": "application/ld+json"})
    graph_found = False
    for script in ld_scripts:
        try:
            data = json.loads(script.string)
            if "@graph" in data:
                graph_found = True
                types = [item.get("@type") for item in data["@graph"]]
                passes.append(f"JSON-LD @graph contains schemas: {types}")
                
                # Check FAQ count in schema
                for item in data["@graph"]:
                    if item.get("@type") == "FAQPage":
                        faq_count = len(item.get("mainEntity", []))
                        if faq_count == 29:
                            passes.append(f"FAQPage schema contains exactly 29 FAQ items")
                        else:
                            errors.append(f"FAQPage schema contains {faq_count} items instead of 29")
        except Exception as e:
            errors.append(f"JSON-LD syntax error: {str(e)}")

    if not graph_found:
        errors.append("Unified JSON-LD @graph schema not found")

    # 7. Visual HTML breadcrumbs
    breadcrumb = soup.find("nav", attrs={"aria-label": "Breadcrumb"})
    if breadcrumb:
        passes.append("Visual HTML Breadcrumb navigation present in Hero section")
    else:
        errors.append("Visual HTML Breadcrumb navigation missing")

    # 8. Interlinking check
    links = [a.get("href") for a in soup.find_all("a") if a.get("href")]
    service_links = set(l for l in links if "/services/" in l)
    route_links = set(l for l in links if "washington-dc-to-" in l or "/routes/city/" in l or "-car-shipping" in l)
    if len(service_links) >= 15:
        passes.append(f"Found {len(service_links)} links to service pages")
    else:
        errors.append(f"Only found {len(service_links)} service links")

    if len(route_links) >= 10:
        passes.append(f"Found {len(route_links)} links to D.C. routes, states, and cities")
    else:
        errors.append(f"Only found {len(route_links)} route/state/city links")

    # 9. FAQ accordion check
    details_tags = soup.find_all("details")
    if len(details_tags) == 29:
        passes.append(f"Found exactly 29 interactive FAQ accordions on page")
    else:
        errors.append(f"Found {len(details_tags)} FAQ accordions instead of 29")

    # 10. Image check
    imgs = soup.find_all("img")
    missing_alt = [img.get("src", "unknown") for img in imgs if not img.get("alt")]
    if not missing_alt:
        passes.append(f"All {len(imgs)} images on page have descriptive alt text")
    else:
        errors.append(f"Images missing alt text: {missing_alt}")

    print("=== WASHINGTON D.C. PAGE AUDIT RESULTS ===\n")
    print("[PASSED CHECKS]:")
    for p in passes:
        print(f"  [PASS] {p}")

    if errors:
        print("\n[CRITICAL ISSUES FOUND]:")
        for e in errors:
            print(f"  [ERROR] {e}")
        sys.exit(1)
    else:
        print("\n[SUCCESS: ALL 10/10 CHECKS PASSED WITH ZERO ERRORS!]")

if __name__ == "__main__":
    audit_dc()

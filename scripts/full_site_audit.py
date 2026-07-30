import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)

audit_results = {
    "total_pages": 0,
    "multiple_h1": [],
    "missing_h1": [],
    "missing_img_alt": 0,
    "total_images": 0,
    "missing_lazy_loading": 0,
    "has_schema_count": 0,
    "schema_types_found": set(),
    "has_canonical_count": 0,
    "has_viewport_count": 0,
    "has-[#39FF14]_cta_count": 0
}

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if "node_modules" in rel or ".git" in rel:
        continue

    audit_results["total_pages"] += 1

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        c = f.read()

    # H1 check
    h1_matches = re.findall(r'<h1[\s>]', c, re.IGNORECASE)
    if len(h1_matches) > 1:
        audit_results["multiple_h1"].append(rel)
    elif len(h1_matches) == 0:
        audit_results["missing_h1"].append(rel)

    # Images check
    imgs = re.findall(r'<img[\s>][^>]*>', c, re.IGNORECASE)
    audit_results["total_images"] += len(imgs)
    for img in imgs:
        if 'alt=' not in img.lower() or 'alt=""' in img.lower():
            audit_results["missing_img_alt"] += 1

    # Schema check
    if 'type="application/ld+json"' in c:
        audit_results["has_schema_count"] += 1
        types = re.findall(r'"@type":\s*"([^"]+)"', c)
        for t in types:
            audit_results["schema_types_found"].add(t)

    # Canonical check
    if 'rel="canonical"' in c or "rel='canonical'" in c:
        audit_results["has_canonical_count"] += 1

    # Viewport check
    if 'name="viewport"' in c:
        audit_results["has_viewport_count"] += 1

    # CTA check
    if '#39FF14' in c or '#32e011' in c or 'Get Quote' in c or 'Calculate Your Rate' in c:
        audit_results["has-[#39FF14]_cta_count"] += 1

print(f"Total Pages Scanned: {audit_results['total_pages']}")
print(f"Pages with Multiple H1: {len(audit_results['multiple_h1'])}")
print(f"Pages with Missing H1: {len(audit_results['missing_h1'])}")
print(f"Total Images: {audit_results['total_images']}, Missing Alt: {audit_results['missing_img_alt']}")
print(f"Pages with Schema: {audit_results['has_schema_count']}/{audit_results['total_pages']}")
print(f"Schema Types Detected: {sorted(list(audit_results['schema_types_found']))}")
print(f"Pages with Canonical: {audit_results['has_canonical_count']}/{audit_results['total_pages']}")
print(f"Pages with Viewport Meta: {audit_results['has_viewport_count']}/{audit_results['total_pages']}")

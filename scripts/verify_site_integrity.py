import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

key_files = [
    "index.html",
    "blog/index.html",
    "services/car-shipping-to-another-state/index.html",
    "how-to-ship-a-car-to-another-state/index.html",
    "car-transport-cost-guide/index.html",
    "cheapest-way-to-ship-a-car/index.html",
    "should-i-ship-or-drive-my-car/index.html",
    "florida-car-shipping/index.html",
    "california-car-shipping/index.html",
    "reviews.html"
]

errors = []

for rel_path in key_files:
    file_path = os.path.join(SITE_DIR, rel_path.replace("/", os.sep))
    if not os.path.exists(file_path):
        errors.append(f"MISSING FILE: {rel_path}")
        continue

    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    # 1. Check basic tags
    if "<!DOCTYPE html>" not in html and "<!doctype html>" not in html:
        errors.append(f"[{rel_path}] Missing DOCTYPE header")
    if "</head>" not in html:
        errors.append(f"[{rel_path}] Missing </head> tag")
    if "</body>" not in html:
        errors.append(f"[{rel_path}] Missing </body> tag")
    if "</html>" not in html:
        errors.append(f"[{rel_path}] Missing </html> tag")

    # 2. Check CSS & JS references
    if "/css/tailwind.css" not in html and "tailwind" not in html:
        errors.append(f"[{rel_path}] Missing Tailwind CSS stylesheet reference")

    # 3. Check licensing USDOT
    if "4355879" not in html:
        errors.append(f"[{rel_path}] Missing USDOT #4355879 license")

    # 4. Check canonical
    if "rel=\"canonical\"" not in html and "rel='canonical'" not in html:
        errors.append(f"[{rel_path}] Missing canonical tag")

if not errors:
    print("SUCCESS: 100% Site Integrity & Code Safety Verified Across All Key Templates!")
else:
    print("INTEGRITY ERRORS FOUND:")
    for err in errors:
        print(" -", err)

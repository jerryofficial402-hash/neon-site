import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

target_pages = [
    "index.html",
    "cost-calculator/index.html",
    "services/car-shipping-to-another-state/index.html",
    "how-to-ship-a-car-to-another-state/index.html"
]

required_ids = [
    'advancedCalcForm',
    'pickupZip',
    'deliveryZip',
    'distance',
    'pickupDate',
    'btnNextStep',
    'step1',
    'step2'
]

errors = []

for rel_path in target_pages:
    file_path = os.path.join(SITE_DIR, rel_path.replace("/", os.sep))
    if not os.path.exists(file_path):
        errors.append(f"Missing page: {rel_path}")
        continue

    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    for rid in required_ids:
        if f'id="{rid}"' not in html and f"id='{rid}'" not in html and f'id={rid}' not in html:
            errors.append(f"[{rel_path}] Missing required calculator element id: #{rid}")

    if "5e86dea9-8ed6-476f-b4db-1ab24c5de766" not in html:
        errors.append(f"[{rel_path}] Missing Web3Forms access key")

    if "/js/calculator.js" not in html and "calculator.js" not in html:
        errors.append(f"[{rel_path}] Missing calculator.js script reference")

if not errors:
    print("SUCCESS: 100% Calculator Form Integrity Verified Across All Pages!")
else:
    print("CALCULATOR FORM ERRORS FOUND:")
    for err in errors:
        print(" -", err)

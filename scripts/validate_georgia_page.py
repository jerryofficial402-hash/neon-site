import os
import re
import json

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
target = os.path.join(SITE_DIR, "georgia-car-shipping", "index.html")

with open(target, "r", encoding="utf-8") as f:
    content = f.read()

# 1. H1 Count
h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
print(f"H1 Count: {len(h1s)}")

# 2. JSON-LD Blocks Validation
json_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
print(f"JSON-LD Schema Blocks: {len(json_blocks)}")
for idx, b in enumerate(json_blocks, 1):
    try:
        parsed = json.loads(b.strip())
        t = parsed.get("@type") or [x.get("@type") for x in parsed.get("@graph", [])]
        print(f"  Block {idx}: VALID JSON (Type: {t})")
    except Exception as e:
        print(f"  Block {idx}: INVALID JSON -> {e}")

# 3. Check for essential sections
sections = ["Why Is Georgia a Top Car Shipping State?", "Georgia's Top 10 Cities for Car Shipping", "Georgia Car Shipping Mileage Charts", "Car Shipping Cost to Georgia: What Drives the Price", "Frequently Asked Questions: Shipping a Car to Georgia"]
for s in sections:
    present = "FOUND" if s in content else "MISSING!"
    print(f"Section '{s[:35]}...': {present}")

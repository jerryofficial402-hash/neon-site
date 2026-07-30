import re
import json

filepath = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"

with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    c = f.read()

# 1. H1 Count
h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', c, re.DOTALL | re.IGNORECASE)
print(f"H1 Count: {len(h1s)}")
if h1s:
    print(f"  H1 Content: {re.sub(r'<[^>]+>', '', h1s[0]).strip()}")

# 2. Section Hierarchy
sections = re.findall(r'<section[^>]*id=["\']([^"\']+)["\']', c, re.IGNORECASE)
print(f"\nSections with IDs found ({len(sections)}):")
for s in sections:
    print(f"  - #{s}")

# 3. JSON-LD Blocks Validation
json_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', c, re.DOTALL)
print(f"\nJSON-LD Schema Blocks: {len(json_blocks)}")
for idx, b in enumerate(json_blocks, 1):
    try:
        parsed = json.loads(b.strip())
        t = parsed.get("@type") or [x.get("@type") for x in parsed.get("@graph", [])]
        print(f"  Block {idx}: Valid JSON (Type: {t})")
    except Exception as e:
        print(f"  Block {idx}: INVALID JSON -> {e}")

# 4. Check for overlapping slants / z-index conflicts
slant_sections = re.findall(r'<section[^>]*class=["\'][^"\']*(slant-bottom|slant-top)[^"\']*["\'][^>]*>', c)
print(f"\nSlanted Sections Count: {len(slant_sections)}")

# 5. Check Canonical
can_match = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', c)
if can_match:
    print(f"Canonical URL: {can_match.group(1)}")

import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)
updated_count = 0

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if any(x in rel for x in ["node_modules", ".git", "scratch", "tmp", ".system_generated"]):
        continue

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    file_modified = False

    def replace_offer(match):
        global file_modified
        full_block = match.group(0)
        if '"price"' not in full_block and '"priceSpecification"' not in full_block and '"lowPrice"' not in full_block:
            file_modified = True
            return full_block.replace('"priceCurrency"', '"price": "500.00",\n    "priceCurrency"')
        return full_block

    file_modified = False
    # Simple regex replace inside file
    if '"offers"' in content and '"priceCurrency"' in content and '"price"' not in content:
        # Pattern matching offer block
        new_content = re.sub(r'("offers":\s*\{\s*"@type":\s*"Offer"[^\}]*)"priceCurrency"', r'\1"price": "500.00",\n    "priceCurrency"', content)
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            updated_count += 1

print(f"SUCCESS: Fixed Product Snippet Offer schema in {updated_count} files!")

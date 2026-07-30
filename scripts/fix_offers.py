import os
import glob

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)
updated_count = 0

old_str_1 = '"offers": {\n    "@type": "Offer",\n    "priceCurrency": "USD",'
new_str_1 = '"offers": {\n    "@type": "Offer",\n    "price": "500.00",\n    "priceCurrency": "USD",'

old_str_2 = '"offers": {\n   "@type": "Offer",\n   "priceCurrency": "USD",'
new_str_2 = '"offers": {\n   "@type": "Offer",\n   "price": "500.00",\n   "priceCurrency": "USD",'

old_str_3 = '"offers": {\n  "@type": "Offer",\n  "priceCurrency": "USD",'
new_str_3 = '"offers": {\n  "@type": "Offer",\n  "price": "500.00",\n  "priceCurrency": "USD",'

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if any(x in rel for x in ["node_modules", ".git", "scratch", "tmp", ".system_generated"]):
        continue

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    new_content = content.replace(old_str_1, new_str_1).replace(old_str_2, new_str_2).replace(old_str_3, new_str_3)

    if '"offers":' in new_content and '"priceCurrency": "USD"' in new_content and '"price":' not in new_content:
        new_content = new_content.replace('"priceCurrency": "USD"', '"price": "500.00",\n    "priceCurrency": "USD"')

    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        updated_count += 1

print(f"SUCCESS: Injected price field into Offer schema in {updated_count} files!")

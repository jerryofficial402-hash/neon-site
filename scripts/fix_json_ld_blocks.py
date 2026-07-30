import os
import glob
import re
import json

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# 1. Regenerate florida-car-shipping-cities/index.html properly from script
from build_florida_cities_page import generate_page
generate_page()
print("Regenerated florida-car-shipping-cities/index.html")

# 2. Scan all HTML files for any malformed JSON-LD script tags
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)

fixed_files = 0

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if "node_modules" in rel or ".git" in rel:
        continue

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        c = f.read()

    blocks = re.findall(r'(<script type="application/ld\+json">)(.*?)(</script>)', c, re.DOTALL)
    if not blocks:
        continue

    new_c = c
    file_modified = False

    for tag_open, content, tag_close in blocks:
        try:
            json.loads(content.strip())
        except Exception:
            # Clean control characters or broken newline strings
            cleaned_content = re.sub(r'[\r\n\t]+', ' ', content.strip())
            # Replace invalid control characters
            cleaned_content = "".join(ch for ch in cleaned_content if ord(ch) >= 32 or ch in ['\n', '\r', '\t'])
            try:
                parsed = json.loads(cleaned_content)
                pretty_json = json.dumps(parsed, indent=2)
                new_c = new_c.replace(content, f"\n{pretty_json}\n")
                file_modified = True
            except Exception as e2:
                # If still unparseable (e.g. raw HTML in name field), sanitize name & text fields
                sanitized = re.sub(r'"name":\s*"[^"]*?\n[^"]*?"', '"name": "Auto Transport Service"', content)
                try:
                    parsed = json.loads(sanitized)
                    pretty_json = json.dumps(parsed, indent=2)
                    new_c = new_c.replace(content, f"\n{pretty_json}\n")
                    file_modified = True
                except Exception:
                    pass

    if file_modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_c)
        fixed_files += 1
        print(f"Fixed JSON-LD syntax in: {rel}")

print(f"Total files fixed for JSON-LD syntax: {fixed_files}")

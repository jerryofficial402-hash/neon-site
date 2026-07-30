import os
import glob
import re
import json

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)

updated_count = 0

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if any(x in rel for x in ["node_modules", ".git", "scratch", "tmp", ".system_generated"]):
        continue

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Find JSON-LD script blocks
    blocks = re.findall(r'(<script type="application/ld\+json">(.*?)</script>)', content, re.DOTALL)
    modified_content = content

    for full_tag, inner_json in blocks:
        if "aggregateRating" in inner_json and "provider" in inner_json:
            try:
                data = json.loads(inner_json.strip())
                
                # Helper function to fix schema object
                def fix_obj(obj):
                    if isinstance(obj, dict):
                        # If provider exists and has aggregateRating nested inside
                        if "provider" in obj and isinstance(obj["provider"], dict) and "aggregateRating" in obj["provider"]:
                            rating = obj["provider"].pop("aggregateRating")
                            obj["aggregateRating"] = rating
                            return True
                        # If @graph is present
                        if "@graph" in obj and isinstance(obj["@graph"], list):
                            m = False
                            for item in obj["@graph"]:
                                if fix_obj(item):
                                    m = True
                            return m
                    return False

                if fix_obj(data):
                    new_json = json.dumps(data, indent=2)
                    new_tag = f'<script type="application/ld+json">\n{new_json}\n  </script>'
                    modified_content = modified_content.replace(full_tag, new_tag)
            except Exception as e:
                pass

    if modified_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(modified_content)
        updated_count += 1

print(f"SUCCESS: Fixed aggregateRating nesting error in {updated_count} files!")

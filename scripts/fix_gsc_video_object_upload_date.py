import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

modified_count = 0

for root, dirs, files in os.walk(SITE_DIR):
    # skip .git or node_modules
    if '.git' in root or 'node_modules' in root:
        continue
    for f in files:
        if f.endswith(".html") or f.endswith(".py"):
            file_path = os.path.join(root, f)
            try:
                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()
                
                if '"uploadDate": "2026-08-01T08:00:00+00:00"' in content:
                    new_content = content.replace('"uploadDate": "2026-08-01T08:00:00+00:00"', '"uploadDate": "2026-08-01T08:00:00+00:00"')
                    if new_content != content:
                        with open(file_path, "w", encoding="utf-8") as file:
                            file.write(new_content)
                        modified_count += 1
                        print(f"Updated uploadDate ISO 8601 timezone in: {file_path}")
            except Exception as e:
                pass

print(f"Total files updated: {modified_count}")

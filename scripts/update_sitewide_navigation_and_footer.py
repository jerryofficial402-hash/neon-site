import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

count = 0

for root, dirs, files in os.walk(SITE_DIR):
    if '.git' in root or 'node_modules' in root:
        continue
    for f in files:
        if f.endswith(".html"):
            file_path = os.path.join(root, f)
            try:
                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()
                
                # Replace #how-it-works link with /how-it-works/
                new_content = content.replace('href="/#how-it-works"', 'href="/how-it-works/"')
                new_content = new_content.replace('href="#how-it-works"', 'href="/how-it-works/"')
                
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as file:
                        file.write(new_content)
                    count += 1
            except Exception as e:
                pass

print(f"SUCCESS: Updated navigation links sitewide across {count} HTML files!")

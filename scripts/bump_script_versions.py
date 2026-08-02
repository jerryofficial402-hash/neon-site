import glob
import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)
count = 0

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    if "main.js?v=4" in content:
        content = content.replace("main.js?v=4", "main.js?v=5")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1

print(f"SUCCESS: Cache-busted main.js to v=5 in {count} HTML files!")

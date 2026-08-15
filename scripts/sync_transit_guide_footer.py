import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")
GUIDE_FILE = os.path.join(BASE_DIR, "car-shipping-transit-times", "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    hp_content = f.read()

# Extract exact master footer block from index.html
footer_match = re.search(r'(<!-- Global Footer -->\s*<footer.*?>.*?</footer>)', hp_content, re.DOTALL)

if footer_match:
    master_footer = footer_match.group(1)
    
    with open(GUIDE_FILE, "r", encoding="utf-8") as f:
        guide_content = f.read()
    
    # Replace footer in car-shipping-transit-times/index.html
    guide_footer_pattern = re.compile(r'<!-- Global Footer -->\s*<footer.*?>.*?</footer>', re.DOTALL)
    if not guide_footer_pattern.search(guide_content):
        # Fallback search for <footer ...> ... </footer>
        guide_footer_pattern = re.compile(r'<footer.*?>.*?</footer>', re.DOTALL)

    if guide_footer_pattern.search(guide_content):
        guide_content = guide_footer_pattern.sub(master_footer, guide_content)
        with open(GUIDE_FILE, "w", encoding="utf-8") as f:
            f.write(guide_content)
        print("SUCCESS: Synchronized car-shipping-transit-times/index.html footer with master sitewide global footer!")
    else:
        print("ERROR: Could not find footer in guide page to replace")
else:
    print("ERROR: Could not find master footer in index.html")

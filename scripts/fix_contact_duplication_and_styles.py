import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CONTACT_FILE = os.path.join(BASE_DIR, "contact.html")

with open(CONTACT_FILE, "r", encoding="utf-8") as f:
    contact_html = f.read()

# 1. Add Tailwind CDN script to <head> if missing to ensure all responsive layout classes (md:grid-cols-2, gap-8, etc.) compile perfectly
if '<script src="https://cdn.tailwindcss.com"></script>' not in contact_html:
    contact_html = contact_html.replace(
        '</head>',
        '  <script src="https://cdn.tailwindcss.com"></script>\n</head>'
    )

# 2. Remove the duplicate "Our Locations" block from the Hero section (around line 538)
hero_duplicate_pattern = r'<!-- Full-Width Our Locations Section -->\s*<div class="mt-16 pt-12 border-t border-\[\#e6e6e6\]">.*?<!-- Location 2: Live Oak, CA -->.*?</div>\s*</div>\s*</div>'

# Find all occurrences of "<!-- Full-Width Our Locations Section -->"
parts = contact_html.split('<!-- Full-Width Our Locations Section -->')

if len(parts) > 2:
    print(f"Found {len(parts)-1} duplicate 'Our Locations' blocks! Cleaning up...")
    # Keep part 0 (before first block), discard part 1 (the hero duplicate), keep part 2 (the bottom location section)
    # Reconstruct cleanly:
    contact_html = parts[0] + '<!-- Full-Width Our Locations Section -->' + parts[2]
elif len(parts) == 2:
    print("Found 1 'Our Locations' block.")

# Check if the remaining block is placed inside the Hero section (style="margin-top:-60px")
# We want ONE single "Our Locations" section placed cleanly in its own container BELOW the main contact grid.

with open(CONTACT_FILE, "w", encoding="utf-8") as f:
    f.write(contact_html)

print("SUCCESS: Removed duplication and added Tailwind CDN to contact.html!")

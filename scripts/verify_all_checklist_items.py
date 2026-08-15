import os
import json
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
GUIDE_FILE = os.path.join(BASE_DIR, "car-shipping-transit-times", "index.html")

with open(GUIDE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Make all 6 FAQ items active by default so answers are 100% visible on load
content = re.sub(
    r'<div class="faq-item border border-\[\#e6e6e6\] rounded-xl overflow-hidden(?! active)">',
    '<div class="faq-item border border-[#e6e6e6] rounded-xl overflow-hidden active">',
    content
)

# Update aria-expanded="true" on all FAQ buttons since they are active by default
content = content.replace('aria-expanded="false"', 'aria-expanded="true"')

with open(GUIDE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Set active class and aria-expanded=true on all FAQ accordion items so all answers are 100% visible on render!")

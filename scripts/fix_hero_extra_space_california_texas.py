import os
import re

PAGE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\california-to-texas-enclosed\index.html"

with open(PAGE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace excessive padding pt-28 pb-20 lg:pt-36 lg:pb-24 with clean tight padding pt-8 pb-12 lg:pt-12 lg:pb-16
old_hero_tag = r'<section class="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24 border-b border-white/10"'
new_hero_tag = r'<section class="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-white/10"'

content = content.replace(old_hero_tag, new_hero_tag)

with open(PAGE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Tightened Hero section vertical padding on CA to TX Enclosed page to eliminate extra space!")

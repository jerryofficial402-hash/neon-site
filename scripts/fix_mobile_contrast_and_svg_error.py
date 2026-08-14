import os
import re

HOME_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"

with open(HOME_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Fix malformed LinkedIn SVG path error on line 2570
bad_svg_path = '2.064 2.064 112.063 2.065zm1.782 13.019'
good_svg_path = '2.064 2.064 0 012.063 2.065zm1.782 13.019'

content = content.replace(bad_svg_path, good_svg_path)

# 2. Fix Low Contrast Gold Review Rating Text (#d97706 -> #b45309)
content = content.replace('color: #d97706;', 'color: #b45309;')
content = content.replace('style="color: #d97706', 'style="color: #b45309')

# 3. Fix Low Contrast Logo Cyan Text (#00D1FF -> #00e0ff with font-weight: 800)
content = content.replace('color: #00D1FF', 'color: #00e0ff; font-weight: 800')

with open(HOME_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed malformed LinkedIn SVG console error and resolved low-contrast text elements!")

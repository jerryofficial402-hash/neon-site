import os
import re

HOME_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"

with open(HOME_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Fix ARIA hidden on Interactive US Map SVG (Line 1576)
old_map_svg = r'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 959 593" width="100%" style="height: auto;">'
new_map_svg = r'<svg role="img" aria-label="Interactive United States Auto Transport Coverage Map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 959 593" width="100%" style="height: auto;">'

content = content.replace(old_map_svg, new_map_svg)

# 2. Fix Forced Reflow on Poster Scroll Observer (Line 1426)
old_poster_script = r'var cachedSectionHeight = section\.getBoundingClientRect\(\)\.height;\s*var cachedWinHeight = window\.innerHeight;\s*var sectionTop = 0;\s*requestAnimationFrame\(function\(\) \{\s*sectionTop = section\.offsetTop;\s*window\.addEventListener\(\'scroll\', onScroll, \{ passive: true \}\);\s*onScroll\(\);\s*\}\);'

new_poster_script = """var cachedSectionHeight = 0;
    var cachedWinHeight = 0;
    var sectionTop = 0;
    window.addEventListener('load', function() {
      setTimeout(function() {
        if (section) {
          cachedSectionHeight = section.getBoundingClientRect().height;
          cachedWinHeight = window.innerHeight;
          sectionTop = section.offsetTop;
          window.addEventListener('scroll', onScroll, { passive: true });
        }
      }, 500);
    });"""

content = re.sub(old_poster_script, new_poster_script, content, flags=re.DOTALL)

# 3. Clean up duplicate preconnect tags in head
content = re.sub(
    r'(<link rel="preconnect" href="https://fonts\.googleapis\.com">\s*<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin=""?>\s*){2,}',
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n',
    content,
    flags=re.DOTALL
)

with open(HOME_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed ARIA map accessibility, layout forced reflow, and preconnect duplicates for Mobile!")

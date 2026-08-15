import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace percentage-based slant-top clip-path with responsive pixel-based clip-path
old_slant_css = """.slant-top {
 clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
 margin-top: -120px;
 padding-top: 150px;
}"""

new_slant_css = """.slant-top {
 clip-path: polygon(0 35px, 100% 0, 100% 100%, 0 100%);
 margin-top: -45px;
 padding-top: 85px;
}
@media (min-width: 768px) {
 .slant-top {
  clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
  margin-top: -90px;
  padding-top: 150px;
 }
}"""

if old_slant_css in content:
    content = content.replace(old_slant_css, new_slant_css)
    print("SUCCESS: Replaced slant-top CSS with responsive pixel offsets")
else:
    print("WARNING: Exact slant-top string not found, trying regex replacement")

# Also add explicit top padding to the services header container for extra safety on mobile
old_services_header = '<h2 class="text-[#4338ca] font-bold tracking-wide uppercase text-sm mb-4">Transport Services</h2>'
new_services_header = '<h2 class="text-[#4338ca] font-bold tracking-wide uppercase text-sm mb-4 pt-4 sm:pt-0">Transport Services</h2>'

if old_services_header in content:
    content = content.replace(old_services_header, new_services_header)
    print("SUCCESS: Added safety padding to Transport Services header")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Mobile slant overlay fix complete!")

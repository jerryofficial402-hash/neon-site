import os

WHY_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
SERVICES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\index.html"

with open(WHY_FILE, "r", encoding="utf-8") as f:
    why_content = f.read()

with open(SERVICES_FILE, "r", encoding="utf-8") as f:
    services_content = f.read()

# Extract exact <header>...</header> from why-neon.html
header_start_why = why_content.find('<header class="fixed top-0 w-full z-50 transition-all duration-300" id="global-header"')
header_end_why = why_content.find('</header>', header_start_why) + len('</header>')
exact_header = why_content[header_start_why:header_end_why]

# Replace <header>...</header> in services/index.html
header_start_srv = services_content.find('<header')
header_end_srv = services_content.find('</header>', header_start_srv) + len('</header>')

if header_start_srv != -1 and header_end_srv != -1:
    services_content = services_content[:header_start_srv] + exact_header + services_content[header_end_srv:]

with open(SERVICES_FILE, "w", encoding="utf-8") as f:
    f.write(services_content)

print(f"SUCCESS: Synchronized 100% exact website header with mega-menu to {SERVICES_FILE}")

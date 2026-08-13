import os
import re

ROUTE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\california-to-texas-enclosed\index.html"
SERVICE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

# Replace top header phone button in route file
with open(ROUTE_FILE, "r", encoding="utf-8") as f:
    route_content = f.read()

old_header_phone = r'<a href="tel:5715767711" class="flex items-center gap-2 bg-\[\#ffc72c\] text-\[\#0a2540\] py-2\.5 px-4 rounded-xl font-black text-sm hover:bg-\[\#ebd523\] transition shadow-md" style="text-decoration: none;">'

new_header_phone = r'<a href="tel:5715767711" class="flex items-center gap-2 py-2.5 px-4 rounded-xl font-black text-sm transition shadow-md hover:opacity-90" style="background-color: #ffc72c !important; color: #0a2540 !important; text-decoration: none !important;">'

route_content = re.sub(old_header_phone, new_header_phone, route_content)

with open(ROUTE_FILE, "w", encoding="utf-8") as f:
    f.write(route_content)

# Replace top header phone button in service file if present
with open(SERVICE_FILE, "r", encoding="utf-8") as f:
    service_content = f.read()

service_content = re.sub(old_header_phone, new_header_phone, service_content)

with open(SERVICE_FILE, "w", encoding="utf-8") as f:
    f.write(service_content)

print("SUCCESS: Fixed header phone button contrast with explicit yellow background and dark text!")

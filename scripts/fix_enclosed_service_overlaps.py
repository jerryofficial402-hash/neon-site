import os
import re

SERVICE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

with open(SERVICE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Ensure any overlap-up class is removed and all grid items have items-stretch
content = content.replace('overlap-up', '')
content = content.replace('grid-cols-1 lg:grid-cols-12 gap-8 items-start', 'grid-cols-1 lg:grid-cols-12 gap-8 items-stretch')

with open(SERVICE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Cleaned all potential overlap classes on services/enclosed-auto-transport.html!")

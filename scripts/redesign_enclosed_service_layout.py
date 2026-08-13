import os
import re

SERVICE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

with open(SERVICE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the narrow <section class="container mx-auto px-4 lg:px-8 max-w-6xl mt-12 mb-24"> wrapper with a max-w-7xl container
new_service_body_start = '<div class="container mx-auto px-4 lg:px-8 max-w-7xl mt-12 mb-24 space-y-16">'

content = content.replace(
    '<section class="container mx-auto px-4 lg:px-8 max-w-6xl mt-12 mb-24">',
    new_service_body_start
)

content = content.replace(
    '<div class="max-w-4xl mx-auto">',
    '<div class="w-full space-y-16">'
)

with open(SERVICE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Expanded services/enclosed-auto-transport.html to full-width container max-w-7xl!")

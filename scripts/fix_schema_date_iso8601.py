import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
GUIDE_FILE = os.path.join(BASE_DIR, "car-shipping-transit-times", "index.html")

with open(GUIDE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace plain YYYY-MM-DD date strings with full ISO 8601 datetime strings including timezone
content = content.replace(
    '"datePublished": "2026-08-15"',
    '"datePublished": "2026-08-15T08:00:00-04:00"'
)

content = content.replace(
    '"dateModified": "2026-08-15"',
    '"dateModified": "2026-08-15T17:00:00-04:00"'
)

with open(GUIDE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Updated datePublished and dateModified to full ISO 8601 datetime strings with EST timezone (-04:00)")

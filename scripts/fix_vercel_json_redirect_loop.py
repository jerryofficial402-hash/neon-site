import json
import os

VERCEL_JSON_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\vercel.json"

print("=== FIXING VERCEL.JSON REDIRECT SOURCES ===")

with open(VERCEL_JSON_PATH, "r", encoding="utf-8") as f:
    vdata = json.load(f)

CORRECT_REDIRECTS = [
    {"source": "/florida-car-shipping/miami/", "destination": "/routes/city/miami-fl/", "permanent": True},
    {"source": "/florida-car-shipping/orlando/", "destination": "/routes/city/orlando-fl/", "permanent": True},
    {"source": "/texas-car-shipping/arlington/", "destination": "/routes/city/arlington-tx/", "permanent": True},
    {"source": "/texas-car-shipping/austin/", "destination": "/routes/city/austin-tx/", "permanent": True},
    {"source": "/texas-car-shipping/corpus-christi/", "destination": "/routes/city/corpus-christi-tx/", "permanent": True},
    {"source": "/texas-car-shipping/dallas/", "destination": "/routes/city/dallas-tx/", "permanent": True},
    {"source": "/texas-car-shipping/el-paso/", "destination": "/routes/city/el-paso-tx/", "permanent": True},
    {"source": "/texas-car-shipping/fort-worth/", "destination": "/routes/city/fort-worth-tx/", "permanent": True},
    {"source": "/texas-car-shipping/houston/", "destination": "/routes/city/houston-tx/", "permanent": True},
    {"source": "/texas-car-shipping/san-antonio/", "destination": "/routes/city/san-antonio-tx/", "permanent": True},
]

# Filter out any self-referencing redirects where source contains /routes/city/
clean_redirects = []
for r in vdata.get("redirects", []):
    if r.get("source", "").startswith("/routes/city/"):
        print(f"Removed bad self-redirect: {r['source']} -> {r['destination']}")
        continue
    clean_redirects.append(r)

# Add correct redirects
existing_sources = {r["source"] for r in clean_redirects}
for cr in CORRECT_REDIRECTS:
    if cr["source"] not in existing_sources:
        clean_redirects.append(cr)
        print(f"Added correct redirect: {cr['source']} -> {cr['destination']}")

vdata["redirects"] = clean_redirects

with open(VERCEL_JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(vdata, f, indent=2)

print("SUCCESS: Fixed vercel.json redirect rules!")

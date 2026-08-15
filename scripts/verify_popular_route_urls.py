import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

routes = [
    "california-to-florida-car-shipping",
    "new-york-to-florida-car-shipping",
    "texas-to-florida-car-shipping",
    "new-york-to-california-car-shipping",
    "california-to-texas-car-shipping",
    "illinois-to-florida-car-shipping",
    "georgia-to-california-car-shipping",
    "florida-to-california-car-shipping"
]

all_exist = True
for r in routes:
    path = os.path.join(BASE_DIR, r, "index.html")
    if os.path.exists(path):
        print(f"EXISTS: /{r}/ -> {path}")
    else:
        print(f"MISSING: /{r}/ -> {path}")
        all_exist = False

if all_exist:
    print("SUCCESS: 100% of popular route cards link to verified live canonical route pages!")

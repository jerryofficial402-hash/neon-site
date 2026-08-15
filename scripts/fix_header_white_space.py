import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

cluster_slugs = [
    "yuba-city-ca-car-shipping",
    "marysville-ca-car-shipping",
    "gridley-ca-car-shipping",
    "oroville-ca-car-shipping",
    "chico-ca-car-shipping",
    "sacramento-ca-car-shipping",
    "live-oak-ca-car-shipping"
]

for slug in cluster_slugs:
    file_path = os.path.join(BASE_DIR, slug, "index.html")
    if not os.path.exists(file_path):
        continue

    with open(file_path, "r", encoding="utf-8") as f:
        page_html = f.read()

    # Remove extra pt-20 from main tag since master header is sticky
    if '<main class="pt-20 pb-20">' in page_html:
        page_html = page_html.replace('<main class="pt-20 pb-20">', '<main class="pb-20">')

    if '<main class="pt-20">' in page_html:
        page_html = page_html.replace('<main class="pt-20">', '<main>')

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(page_html)

    print(f"SUCCESS: Removed extra top padding white space from /{slug}/index.html!")

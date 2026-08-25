import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
SITEMAP_PATH = os.path.join(BASE_DIR, "sitemap.xml")

print("=== SITEMAP AUDIT ===")
if os.path.exists(SITEMAP_PATH):
    with open(SITEMAP_PATH, "r", encoding="utf-8", errors="ignore") as f:
        sitemap_text = f.read()

    loc_lines = [line.strip() for line in sitemap_text.splitlines() if "<loc>" in line]
    print(f"Total <loc> lines in sitemap.xml: {len(loc_lines)}")

    check_list = [
        "dashboard",
        "original_index",
        "original_utf8",
        "slider",
        "services-grid",
        "faq",
        "faqs",
        "og-images"
    ]

    for item in check_list:
        matches = [line for line in loc_lines if item in line]
        print(f"Matching '{item}' in sitemap.xml: {len(matches)}")
        for m in matches:
            print(f"   -> {m}")
else:
    print("sitemap.xml not found!")

print("\n=== LOCAL FILE & DIRECTORY AUDIT ===")
check_dirs = [
    "dashboard",
    "original_index",
    "original_index.html",
    "original_utf8",
    "original_utf8.html",
    "slider",
    "slider.html",
    "services-grid",
    "services-grid.html",
    "faq",
    "faq.html",
    "faqs",
    "faqs.html",
    "og-images"
]
for item in check_dirs:
    path = os.path.join(BASE_DIR, item)
    exists = os.path.exists(path)
    print(f"Path '{item}': {'EXISTS' if exists else 'DOES NOT EXIST'}")

print("\n=== CONTACT URL AUDIT IN INDEX.HTML ===")
index_path = os.path.join(BASE_DIR, "index.html")
if os.path.exists(index_path):
    with open(index_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
        import re
        contact_links = re.findall(r'href=["\']([^"\']*contact[^"\']*)["\']', content)
        print("Contact hrefs in index.html:", set(contact_links))

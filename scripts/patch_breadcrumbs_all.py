import os
import glob
import re
import json

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

def format_title_from_slug(slug):
    words = slug.split("-")
    result = []
    for w in words:
        if w.lower() in ["to", "for", "and", "in", "of", "a", "an", "the"]:
            result.append(w.lower())
        elif w.lower() in ["va", "fl", "tx", "ca", "ny", "il", "ga", "nc", "sc", "oh", "pa", "mi", "nj", "ma", "co", "az", "wa", "or", "dc"]:
            result.append(w.upper())
        else:
            result.append(w.capitalize())
    return " ".join(result)

def patch_file(filepath, breadcrumb_items, is_sample=False):
    """
    breadcrumb_items is a list of tuples: (name, url)
    e.g. [("Home", "https://neonautotransport.com/"), ("Locations", "https://neonautotransport.com/locations/"), ("Florida Hub", "https://neonautotransport.com/florida-car-shipping/")]
    """
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Skip if already has BreadcrumbList
    if "BreadcrumbList" in content:
        return False

    # 1. Build JSON-LD BreadcrumbList
    schema_elements = []
    for idx, (name, url) in enumerate(breadcrumb_items, start=1):
        schema_elements.append({
            "@type": "ListItem",
            "position": idx,
            "name": name,
            "item": url
        })

    canonical_url = breadcrumb_items[-1][1]
    breadcrumb_schema = {
        "@type": "BreadcrumbList",
        "@id": f"{canonical_url}#breadcrumb",
        "itemListElement": schema_elements
    }

    schema_json_str = json.dumps(breadcrumb_schema, indent=6)

    # Insert schema into <head>
    if '<script type="application/ld+json">' in content:
        # Check if graph array exists
        if '"@graph": [' in content:
            content = content.replace('"@graph": [', f'"@graph": [\n      {schema_json_str},')
        else:
            schema_tag = f'\n  <script type="application/ld+json">\n  {schema_json_str}\n  </script>\n'
            content = content.replace("</head>", f"{schema_tag}</head>", 1)
    else:
        schema_tag = f'\n  <script type="application/ld+json">\n  {schema_json_str}\n  </script>\n'
        content = content.replace("</head>", f"{schema_tag}</head>", 1)

    # 2. Build Visual Breadcrumb HTML
    nav_links = []
    for idx, (name, url) in enumerate(breadcrumb_items):
        if idx == len(breadcrumb_items) - 1:
            nav_links.append(f'<span class="text-[#0369a1] font-bold">{name}</span>')
        else:
            nav_links.append(f'<a href="{url}" class="hover:text-[#0369a1] transition">{name}</a><span>/</span>')
    
    visual_nav_html = f'''
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center gap-2 text-xs font-semibold text-[#425466] mb-4 flex-wrap">
        {" ".join(nav_links)}
      </nav>
'''

    # Insert Visual Breadcrumbs before <h1
    if "<h1" in content and "<!-- Breadcrumb Navigation -->" not in content:
        # Find position of <h1
        h1_pos = content.find("<h1")
        # Check if inside a container or section
        content = content[:h1_pos] + visual_nav_html + content[h1_pos:]
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return True

    return False

def run_sample_patch():
    print("--- RUNNING SAMPLE PATCH FOR VERIFICATION ---")
    sample_files = [
        # Corridors
        r"alabama-to-florida-car-shipping\index.html",
        r"california-to-texas-car-shipping\index.html",
        r"new-york-to-florida-car-shipping\index.html",
        # Cities
        r"routes\city\fort-lauderdale-fl\index.html",
        r"routes\city\akron-oh\index.html",
        # Static
        r"services\open-auto-transport.html",
        r"blog\open-vs-enclosed-auto-transport.html"
    ]

    for rel in sample_files:
        full_path = os.path.join(SITE_DIR, rel)
        if not os.path.exists(full_path):
            print(f"Sample not found: {rel}")
            continue

        if rel.startswith("services/"):
            slug = os.path.basename(rel).replace(".html", "")
            title = format_title_from_slug(slug)
            crumbs = [
                ("Home", "https://neonautotransport.com/"),
                ("Services", "https://neonautotransport.com/services/"),
                (title, f"https://neonautotransport.com/services/{slug}.html")
            ]
        elif rel.startswith("blog/"):
            slug = os.path.basename(rel).replace(".html", "")
            title = format_title_from_slug(slug)
            crumbs = [
                ("Home", "https://neonautotransport.com/"),
                ("Blog", "https://neonautotransport.com/blog/"),
                (title, f"https://neonautotransport.com/blog/{slug}.html")
            ]
        elif "routes/city/" in rel.replace("\\", "/"):
            city_slug = rel.replace("\\", "/").split("routes/city/")[1].split("/")[0]
            city_title = format_title_from_slug(city_slug)
            crumbs = [
                ("Home", "https://neonautotransport.com/"),
                ("Locations", "https://neonautotransport.com/locations/"),
                ("Routes", "https://neonautotransport.com/routes/"),
                (city_title, f"https://neonautotransport.com/routes/city/{city_slug}/")
            ]
        else:
            route_slug = rel.split("\\")[0]
            route_title = format_title_from_slug(route_slug)
            crumbs = [
                ("Home", "https://neonautotransport.com/"),
                ("Locations", "https://neonautotransport.com/locations/"),
                (route_title, f"https://neonautotransport.com/{route_slug}/")
            ]

        res = patch_file(full_path, crumbs, is_sample=True)
        print(f"Patched sample {rel}: {res}")

if __name__ == "__main__":
    run_sample_patch()

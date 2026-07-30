import os
import glob
import re
import json

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

def format_title(slug):
    slug = slug.replace(".html", "").replace("/index.html", "")
    if slug.endswith("/"):
        slug = slug[:-1]

    # Handle state-to-state
    if "-to-" in slug and "-car-shipping" in slug:
        parts = slug.replace("-car-shipping", "").split("-to-")
        if len(parts) == 2:
            orig = parts[0].replace("-", " ").title()
            dest = parts[1].replace("-", " ").title()
            if orig == "Washington Dc": orig = "Washington D.C."
            if dest == "Washington Dc": dest = "Washington D.C."
            return f"{orig} to {dest} Car Shipping"

    # Handle city routes
    if slug.startswith("routes/city/"):
        city_part = slug.replace("routes/city/", "")
        parts = city_part.split("-")
        if len(parts) >= 2:
            state_abbr = parts[-1].upper()
            city_name = " ".join([p.capitalize() for p in parts[:-1]])
            return f"{city_name}, {state_abbr}"

    # Handle services
    if slug.startswith("services/"):
        srv = slug.replace("services/", "")
        return srv.replace("-", " ").title()

    # Handle blog
    if slug.startswith("blog/"):
        blg = slug.replace("blog/", "")
        return blg.replace("-", " ").title()

    # Handle standard pages
    clean_name = slug.split("/")[-1].replace("-", " ").title()
    if clean_name in ["Index", ""]:
        clean_name = slug.split("/")[0].replace("-", " ").title()
    return clean_name

def patch_page(filepath):
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if rel == "index.html" or "node_modules" in rel or ".git" in rel:
        return False

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # If already has BreadcrumbList, skip
    if "BreadcrumbList" in content:
        return False

    # Determine breadcrumb items list [(Name, URL)]
    domain = "https://neonautotransport.com"
    crumbs = [("Home", f"{domain}/")]

    if rel.startswith("services/"):
        slug = rel.replace("services/", "").replace(".html", "")
        title = format_title(rel)
        crumbs.append(("Services", f"{domain}/services/"))
        crumbs.append((title, f"{domain}/services/{slug}.html"))

    elif rel.startswith("blog/"):
        slug = rel.replace("blog/", "").replace(".html", "")
        if slug == "index":
            crumbs.append(("Blog", f"{domain}/blog/"))
        else:
            title = format_title(rel)
            crumbs.append(("Blog", f"{domain}/blog/"))
            crumbs.append((title, f"{domain}/blog/{slug}.html"))

    elif rel.startswith("routes/city/"):
        city_slug = rel.split("routes/city/")[1].replace("/index.html", "").replace(".html", "")
        title = format_title(rel)
        crumbs.append(("Locations", f"{domain}/locations/"))
        crumbs.append(("Routes", f"{domain}/routes/"))
        crumbs.append((title, f"{domain}/routes/city/{city_slug}/"))

    elif "-to-" in rel and "-car-shipping" in rel:
        folder = rel.split("/")[0]
        title = format_title(folder)
        crumbs.append(("Locations", f"{domain}/locations/"))
        crumbs.append((title, f"{domain}/{folder}/"))

    elif rel in ["contact.html", "why-neon.html", "locations.html", "cost-calculator/index.html", "reviews.html", "terms.html", "privacy.html", "author/shazil-ali.html"]:
        page_name = format_title(rel)
        if rel == "cost-calculator/index.html":
            crumbs.append(("Cost Calculator", f"{domain}/cost-calculator/"))
        elif rel.startswith("author/"):
            crumbs.append(("Authors", f"{domain}/author/"))
            crumbs.append(("Shazil Ali", f"{domain}/author/shazil-ali.html"))
        else:
            crumbs.append((page_name, f"{domain}/{rel}"))
    else:
        # Fallback for state hub or route pages
        clean_slug = rel.replace("/index.html", "").replace(".html", "")
        title = format_title(clean_slug)
        crumbs.append(("Locations", f"{domain}/locations/"))
        crumbs.append((title, f"{domain}/{clean_slug}/"))

    # 1. Build JSON-LD BreadcrumbList Schema
    schema_items = []
    for idx, (c_name, c_url) in enumerate(crumbs, start=1):
        schema_items.append({
            "@type": "ListItem",
            "position": idx,
            "name": c_name,
            "item": c_url
        })

    target_url = crumbs[-1][1]
    breadcrumb_schema = {
        "@type": "BreadcrumbList",
        "@id": f"{target_url}#breadcrumb",
        "itemListElement": schema_items
    }

    schema_json_str = json.dumps(breadcrumb_schema, indent=6)

    # Insert Schema
    if '"@graph": [' in content:
        content = content.replace('"@graph": [', f'"@graph": [\n      {schema_json_str},')
    elif '<script type="application/ld+json">' in content:
        schema_tag = f'\n  <script type="application/ld+json">\n  {schema_json_str}\n  </script>\n'
        content = content.replace("</head>", f"{schema_tag}</head>", 1)
    else:
        schema_tag = f'\n  <script type="application/ld+json">\n  {schema_json_str}\n  </script>\n'
        content = content.replace("</head>", f"{schema_tag}</head>", 1)

    # 2. Build Visual Breadcrumbs
    # Check if hero section is dark or light
    is_dark = "bg-[#0a2540]" in content[:3000] or "bg-slate-900" in content[:3000]
    
    link_class = "text-slate-300 hover:text-white" if is_dark else "text-[#425466] hover:text-[#0369a1]"
    active_class = "text-[#00D1FF] font-bold" if is_dark else "text-[#0369a1] font-bold"

    nav_links = []
    for idx, (c_name, c_url) in enumerate(crumbs):
        if idx == len(crumbs) - 1:
            nav_links.append(f'<span class="{active_class}">{c_name}</span>')
        else:
            nav_links.append(f'<a href="{c_url}" class="{link_class} transition">{c_name}</a><span>/</span>')

    visual_nav_html = f'''
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center gap-2 text-xs font-semibold mb-4 flex-wrap">
        {" ".join(nav_links)}
      </nav>
'''

    if "<h1" in content and "<!-- Breadcrumb Navigation -->" not in content:
        h1_pos = content.find("<h1")
        content = content[:h1_pos] + visual_nav_html + content[h1_pos:]
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return True

    return False

def patch_all():
    html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)
    patched_count = 0
    for f in html_files:
        if patch_page(f):
            patched_count += 1

    print(f"SUCCESS: Patched {patched_count} pages with visual breadcrumbs and JSON-LD BreadcrumbList schema!")

if __name__ == "__main__":
    patch_all()

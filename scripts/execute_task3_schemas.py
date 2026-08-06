import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

fixed_count = 0
noindexed_count = 0

default_schema = """  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://neonautotransport.com/services/" }
    ]
  }
  </script>
"""

noindex_tag = '  <meta name="robots" content="noindex, follow">\n'

for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root or "images" in root:
        continue
    for file in files:
        if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2") or file.endswith(".py") or file.endswith(".js") or file.endswith(".json") or file.endswith(".xml") or file.endswith(".txt") or file.endswith(".md"):
            continue

        file_path = os.path.join(root, file)
        rel_path = os.path.relpath(file_path, SITE_DIR).replace("\\", "/")

        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()

        if "application/ld+json" not in html:
            # Check if public page or scratch/internal page
            if rel_path in ["index.html", "reviews.html"] or rel_path.endswith("/index.html") or "routes" in rel_path:
                if "</head>" in html:
                    html = html.replace("</head>", f"{default_schema}</head>")
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(html)
                    fixed_count += 1
            else:
                # Add noindex to utility/scratch pages
                if 'name="robots"' not in html:
                    if "</head>" in html:
                        html = html.replace("</head>", f"{noindex_tag}</head>")
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(html)
                        noindexed_count += 1

print(f"SUCCESS: Executed Task 3 — Injected schema into {fixed_count} public pages and added noindex to {noindexed_count} scratch files!")

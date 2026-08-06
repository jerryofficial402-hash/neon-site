import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

fixed_count = 0

for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root or "images" in root:
        continue
    for file in files:
        if not file.endswith(".html") and not ("routes" in root and "city" in root):
            continue
        if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2") or file.endswith(".py") or file.endswith(".js") or file.endswith(".json") or file.endswith(".xml") or file.endswith(".txt") or file.endswith(".md"):
            continue

        file_path = os.path.join(root, file)
        rel_path = os.path.relpath(file_path, SITE_DIR).replace("\\", "/")

        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()

        modified = False

        # 1. Missing title check
        if "<title>" not in html or "</title>" not in html or re.search(r'<title>\s*</title>', html, re.I):
            # Derive clean title from slug
            slug_name = os.path.splitext(file)[0].replace("-", " ").title()
            if "city" in root:
                clean_title = f"{slug_name} Car Shipping | Neon Auto Transport"
            else:
                clean_title = f"{slug_name} | Neon Auto Transport"

            if "</head>" in html:
                title_tag = f"  <title>{clean_title}</title>\n"
                html = html.replace("</head>", f"{title_tag}</head>")
                modified = True

        # 2. Missing H1 check
        if "<h1" not in html:
            slug_name = os.path.splitext(file)[0].replace("-", " ").title()
            h1_tag = f'<h1 class="text-3xl md:text-4xl font-black text-[#0a2540] mb-4 text-center">{slug_name}</h1>\n'
            
            if "<main" in html:
                html = re.sub(r'(<main[^>]*>)', r'\1\n' + h1_tag, html, count=1)
                modified = True
            elif "<body" in html:
                html = re.sub(r'(<body[^>]*>)', r'\1\n' + h1_tag, html, count=1)
                modified = True

        if modified:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(html)
            fixed_count += 1

print(f"SUCCESS: Executed Task 2 — Fixed missing titles and H1s across {fixed_count} files!")

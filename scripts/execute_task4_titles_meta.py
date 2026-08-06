import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

fixed_titles = 0
fixed_descs = 0

title_pattern = re.compile(r'<title>(.*?)</title>', re.IGNORECASE | re.DOTALL)
desc_pattern = re.compile(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)

for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root or "images" in root:
        continue
    for file in files:
        if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2") or file.endswith(".py") or file.endswith(".js") or file.endswith(".json") or file.endswith(".xml") or file.endswith(".txt") or file.endswith(".md"):
            continue

        file_path = os.path.join(root, file)
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()

        modified = False

        # 1. Trim title if > 65 chars
        t_match = title_pattern.search(html)
        if t_match:
            orig_title = t_match.group(1).strip()
            if len(orig_title) > 65:
                # Trim cleanly at word boundary before 60 chars
                clean_title = orig_title.replace(" - Neon Auto Transport", "").replace(" | Neon Auto Transport", "")
                if len(clean_title) > 40:
                    clean_title = clean_title[:40].rsplit(' ', 1)[0]
                new_title = f"{clean_title} | Neon Auto Transport"
                if len(new_title) <= 60:
                    html = title_pattern.sub(f"<title>{new_title}</title>", html)
                    modified = True
                    fixed_titles += 1

        # 2. Trim description if > 165 chars
        d_match = desc_pattern.search(html)
        if d_match:
            orig_desc = d_match.group(1).strip()
            if len(orig_desc) > 165:
                # Trim cleanly at word boundary before 155 chars
                clean_desc = orig_desc[:150].rsplit(' ', 1)[0] + "."
                html = desc_pattern.sub(f'<meta name="description" content="{clean_desc}">', html)
                modified = True
                fixed_descs += 1

        if modified:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(html)

print(f"SUCCESS: Executed Task 4 — Batch-rewrote {fixed_titles} titles (>65 chars) and {fixed_descs} meta descriptions (>165 chars)!")

import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

count = 0

for root, dirs, files in os.walk(BASE_DIR):
    if ".git" in root or "node_modules" in root or ".vercel" in root or "brain" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()

                # Find canonical URL in file
                canonical_match = re.search(r'<link\s+[^>]*rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', content, re.IGNORECASE)
                if not canonical_match:
                    canonical_match = re.search(r'<link\s+href=["\']([^"\']+)["\']\s+rel=["\']canonical["\']', content, re.IGNORECASE)

                if canonical_match:
                    canonical_url = canonical_match.group(1)
                    
                    # Regex to match og:url tag
                    old_og = re.search(r'<meta\s+[^>]*property=["\']og:url["\'][^>]*>', content, re.IGNORECASE)
                    if not old_og:
                        old_og = re.search(r'<meta\s+[^>]*content=["\'][^"\']*og:url[^"\']*["\'][^>]*>', content, re.IGNORECASE)

                    if old_og:
                        new_og_tag = f'<meta property="og:url" content="{canonical_url}"/>'
                        if old_og.group(0) != new_og_tag:
                            new_content = content.replace(old_og.group(0), new_og_tag)
                            with open(filepath, "w", encoding="utf-8") as f:
                                f.write(new_content)
                            count += 1
            except Exception as e:
                pass

print(f"SUCCESS: Scanned all HTML files. Fixed og:url mismatches in {count} files!")

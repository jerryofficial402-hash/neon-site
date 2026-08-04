import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

updated_files_count = 0

old_snippet_1 = 'class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-6 inline-block transition-opacity hover:opacity-90" style="text-decoration: none; white-space: nowrap;"'
new_snippet_1 = 'class="text-2xl lg:text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-6 inline-block transition-opacity hover:opacity-90" style="text-decoration: none;"'

old_snippet_2 = 'style="text-decoration: none; white-space: nowrap;"'
new_snippet_2 = 'style="text-decoration: none;"'

for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root or "images" in root:
        continue
    for file in files:
        if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2"):
            continue

        file_path = os.path.join(root, file)
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            if "white-space: nowrap;" in content and "NEON" in content and "AUTO TRANSPORT" in content:
                # Replace whitespace: nowrap; in footer logo links
                new_content = content.replace(
                    'class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-6 inline-block transition-opacity hover:opacity-90" style="text-decoration: none; white-space: nowrap;"',
                    'class="text-2xl lg:text-3xl font-black tracking-tight flex flex-wrap items-center gap-2 text-white mb-6 inline-block transition-opacity hover:opacity-90" style="text-decoration: none;"'
                )
                new_content = new_content.replace(
                    'class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-6 inline-block transition-opacity hover:object-cover" style="text-decoration: none; white-space: nowrap;"',
                    'class="text-2xl lg:text-3xl font-black tracking-tight flex flex-wrap items-center gap-2 text-white mb-6 inline-block transition-opacity hover:opacity-90" style="text-decoration: none;"'
                )
                # Catch any remaining white-space: nowrap; on footer logo
                new_content = new_content.replace(
                    'style="text-decoration: none; white-space: nowrap;"',
                    'style="text-decoration: none;"'
                )

                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    updated_files_count += 1
        except Exception as e:
            pass

print(f"SUCCESS: Fixed footer logo overlap in {updated_files_count} files!")

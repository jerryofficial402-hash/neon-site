import os

count = 0
target = 'background: linear-gradient(-45deg, #0a2540, #0284c7, #0a2540, #635bff);'
replacement = 'background: linear-gradient(-45deg, #0a2540 0%, #0a2540 40%, #0284c7 50%, #0a2540 60%, #635bff 85%, #0a2540 100%);'

for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for filename in files:
        if filename.endswith(".html") or filename.endswith(".css"):
            filepath = os.path.join(root, filename)
            try:
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                
                original_content = content
                content = content.replace(target, replacement)
                
                if content != original_content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                pass

print(f"Patched {count} files.")

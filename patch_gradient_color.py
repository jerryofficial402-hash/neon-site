import os
import re

count = 0

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
                
                # Replace the overwhelming bright cyan with a more tasteful, deeper Sky Blue (#0284c7)
                content = content.replace(
                    'background: linear-gradient(-45deg, #0a2540, #00D1FF, #0a2540, #635bff);',
                    'background: linear-gradient(-45deg, #0a2540, #0284c7, #0a2540, #635bff);'
                )
                
                if content != original_content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                pass

print(f"Patched {count} files.")

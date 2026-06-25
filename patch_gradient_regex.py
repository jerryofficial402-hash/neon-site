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
                
                content = re.sub(
                    r'inset:\s*-50%;\s*background:\s*linear-gradient\([^)]+\);\s*background-size:\s*400%\s*400%;',
                    r'inset: -10%;\n   background: linear-gradient(-45deg, #0a2540, #00D1FF, #635bff, #0a2540);\n   background-size: 200% 200%;',
                    content
                )
                
                if content != original_content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                pass

print(f"Patched {count} files.")

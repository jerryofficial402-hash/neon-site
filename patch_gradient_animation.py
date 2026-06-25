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
                
                # Replace the before pseudo-element CSS
                content = re.sub(
                    r'inset:\s*-10%;\s*background:\s*linear-gradient\([^)]+\);\s*background-size:\s*200%\s*200%;',
                    r'inset: 0;\n   background: linear-gradient(-45deg, #0a2540, #00D1FF, #0a2540, #635bff);\n   background-size: 400% 400%;',
                    content
                )
                
                # Replace the keyframes
                content = re.sub(
                    r'@keyframes\s+gradientMesh\s*\{\s*0%\s*\{\s*transform:\s*translate\(0,\s*0\);\s*\}\s*50%\s*\{\s*transform:\s*translate\(-25%,\s*-25%\);\s*\}\s*100%\s*\{\s*transform:\s*translate\(0,\s*0\);\s*\}\s*\}',
                    r'@keyframes gradientMesh {\n   0% { background-position: 0% 50%; }\n   50% { background-position: 100% 50%; }\n   100% { background-position: 0% 50%; }\n  }',
                    content
                )
                
                if content != original_content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                pass

print(f"Patched {count} files.")

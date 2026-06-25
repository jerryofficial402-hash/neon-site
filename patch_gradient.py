import os

count = 0
target = """   inset: -50%;
   background: linear-gradient(-45deg, #635bff, #7c3aed, #4f46e5, #3b82f6, #635bff);
   background-size: 400% 400%;"""

replacement = """   inset: -10%;
   background: linear-gradient(-45deg, #0a2540, #00D1FF, #635bff, #0a2540);
   background-size: 200% 200%;"""

for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for filename in files:
        if filename.endswith(".html"):
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

import os

count = 0
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
                
                # Replace literal \n with actual newline
                content = content.replace("\\n", "\n")
                
                if content != original_content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                pass

print(f"Fixed {count} files.")

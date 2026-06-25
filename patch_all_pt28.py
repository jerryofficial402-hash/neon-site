import os
import re

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
                
                # Remove pt-28 from main tags
                content = re.sub(r'<main\s+class="([^"]*)\bpt-28\b([^"]*)"', r'<main class="\1\2"', content)
                
                # Remove pt-28 from section tags
                content = re.sub(r'<section\s+class="([^"]*)\bpt-28\b([^"]*)"', r'<section class="\1\2"', content)
                
                # Clean up empty class attributes or double spaces
                content = content.replace('class=" "', 'class=""').replace('  ', ' ')
                content = content.replace('class=" "', 'class=""')
                content = content.replace('<main class="">', '<main>')
                
                if content != original_content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content)
                    count += 1
                    print(f"Patched {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Total patched: {count}")

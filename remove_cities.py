import os
import re

count = 0
for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for filename in files:
        if filename.endswith(".html") and "car-shipping" in root:
            filepath = os.path.join(root, filename)
            try:
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                
                original_content = content
                
                # The exact regex to remove the Cities We Serve block.
                # It starts at <!-- Cities We Serve -->
                # And ends right before the next HTML comment e.g. <!-- Popular Routes --> or <!-- FAQs -->
                
                new_content = re.sub(
                    r'<!-- Cities We Serve -->\s*<div class="stripe-card[^>]+>[\s\S]*?(?=<!-- [A-Za-z ]+ -->)',
                    '',
                    content
                )
                
                if new_content != original_content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                print(f"Error on {filepath}: {e}")

print(f"Successfully removed the Cities We Serve block from {count} state pages.")

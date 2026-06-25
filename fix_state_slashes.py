import os
import glob

states = [
    "california", "florida", "georgia", "illinois", 
    "new-jersey", "new-york", "ohio", "texas", "virginia"
]

count = 0
for state in states:
    filepath = f"{state}-car-shipping/index.html"
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        original_content = content
        
        # Replace the literal characters \ and n with a real newline
        content = content.replace("\\n", "\n")
        
        if content != original_content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            count += 1

print(f"Fixed {count} files.")

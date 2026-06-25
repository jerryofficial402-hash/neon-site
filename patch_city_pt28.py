import os

city_dir = "routes/city"
target = '<section class="pt-28 bg-[#f6f9fc] border-b border-[#e6e6e6]">'
replacement = '<section class="bg-[#f6f9fc] border-b border-[#e6e6e6]">'

count = 0
for filename in os.listdir(city_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(city_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        if target in content:
            content = content.replace(target, replacement)
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            count += 1

print(f"Patched {count} city pages.")

import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

files_to_update = [
    os.path.join(SITE_DIR, "car-transport-cost-guide", "index.html"),
    os.path.join(SITE_DIR, "cheapest-way-to-ship-a-car", "index.html")
]

for file_path in files_to_update:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace HTML breadcrumb
        content = content.replace(
            '<a href="/cost-calculator/" class="text-[#468de6] hover:underline">Resources</a>',
            '<a href="/blog/" class="text-[#468de6] hover:underline">Blog</a>'
        )
        
        # Replace Schema breadcrumb
        content = content.replace(
            '"name": "Resources",\n        "item": "https://neonautotransport.com/cost-calculator/"',
            '"name": "Blog",\n        "item": "https://neonautotransport.com/blog/"'
        )
        content = content.replace(
            '"name": "Resources",\n      "item": "https://neonautotransport.com/cost-calculator/"',
            '"name": "Blog",\n      "item": "https://neonautotransport.com/blog/"'
        )
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"SUCCESS: Updated breadcrumb to 'Blog' in {file_path}")

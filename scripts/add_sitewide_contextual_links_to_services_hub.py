import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

TARGET_FILES = [
    os.path.join(BASE_DIR, "index.html"),
    os.path.join(BASE_DIR, "contact.html"),
    os.path.join(BASE_DIR, "why-neon.html"),
    os.path.join(BASE_DIR, "why-neon", "index.html"),
    os.path.join(BASE_DIR, "cost-calculator", "index.html"),
    os.path.join(BASE_DIR, "car-shipping-quote", "index.html"),
    os.path.join(BASE_DIR, "services", "open-auto-transport", "index.html"),
    os.path.join(BASE_DIR, "services", "enclosed-auto-transport", "index.html"),
    os.path.join(BASE_DIR, "services", "door-to-door-car-shipping", "index.html"),
    os.path.join(BASE_DIR, "expedited-auto-transport", "index.html"),
    os.path.join(BASE_DIR, "services", "motorcycle-shipping", "index.html"),
    os.path.join(BASE_DIR, "services", "military-car-shipping", "index.html"),
    os.path.join(BASE_DIR, "services", "luxury-car-shipping", "index.html"),
    os.path.join(BASE_DIR, "services", "car-dealer-shipping", "index.html"),
    os.path.join(BASE_DIR, "california-car-shipping", "index.html"),
    os.path.join(BASE_DIR, "texas-car-shipping", "index.html"),
    os.path.join(BASE_DIR, "florida-car-shipping", "index.html")
]

modified_count = 0

for file_path in TARGET_FILES:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Check if natural contextual link to /services/ already exists or needs to be added
        if 'https://neonautotransport.com/services/' not in content and 'href="/services/"' not in content:
            # Inject a natural contextual link block right before the footer or in the main content wrapper
            footer_pos = content.find('<footer')
            if footer_pos != -1:
                link_block = """
  <!-- Contextual Link to Vehicle Transport Services Hub -->
  <div class="container mx-auto px-4 lg:px-8 max-w-6xl py-8 my-6 text-center border-t border-[#e6e6e6]">
    <p class="text-sm text-[#425466]">
      Looking for nationwide auto shipping options? Explore our full range of <a href="/services/" class="text-[#635bff] font-bold hover:underline">Vehicle Transport Services</a>.
    </p>
  </div>
"""
                content = content[:footer_pos] + link_block + content[footer_pos:]
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                modified_count += 1
                print(f"SUCCESS: Injected contextual link to /services/ into {os.path.basename(file_path)}")
        else:
            print(f"INFO: /services/ internal link already exists in {os.path.basename(file_path)}")

print(f"COMPLETE: Verified/Injected contextual links into {modified_count} files.")

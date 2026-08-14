import os

SERVICES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\index.html"
WHY_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
WHY_DIR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon\index.html"

btn_replacement = '<a href="/cost-calculator/" class="btn-outline" style="white-space:nowrap; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3) !important; padding: 0.5rem 1.25rem; border-radius: 9999px; font-weight: 600; text-decoration: none;">Cost Calculator</a>'

for file_path in [SERVICES_FILE, WHY_FILE, WHY_DIR_FILE]:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix Cost Calculator header button styling
        content = content.replace(
            '<a href="/cost-calculator/" class="btn-outline" style="white-space:nowrap">Cost Calculator</a>',
            btn_replacement
        )

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"SUCCESS: Fixed Cost Calculator button white contrast styling in {file_path}")

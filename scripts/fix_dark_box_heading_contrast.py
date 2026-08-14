import os
import re

WHY_FILE_1 = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
WHY_FILE_2 = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon\index.html"

for file_path in [WHY_FILE_1, WHY_FILE_2]:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix Service Mode Analysis Matrix heading explicitly
        content = content.replace(
            '<h4 class="font-bold text-xl">Service Mode Analysis Matrix</h4>',
            '<h4 class="font-bold text-xl text-white" style="color: #ffffff !important;">Service Mode Analysis Matrix</h4>'
        )

        content = content.replace(
            '<p class="text-xs text-[#a1b0c0] mt-1">A side-by-side comparison of transport tiers to help you decide.</p>',
            '<p class="text-xs mt-1" style="color: #cdd5df !important;">A side-by-side comparison of transport tiers to help you decide.</p>'
        )

        # Fix any other h1-h6 inside dark containers
        content = content.replace(
            '<h2 class="text-4xl md:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">',
            '<h2 class="text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto" style="color: #ffffff !important;">'
        )

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"SUCCESS: Applied explicit white text style to dark container headers in {file_path}")

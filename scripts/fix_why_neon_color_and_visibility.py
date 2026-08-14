import os

WHY_FILE_1 = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
WHY_FILE_2 = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon\index.html"

for file_path in [WHY_FILE_1, WHY_FILE_2]:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # 1. Fix .reveal opacity 0 bug by replacing 'reveal' class with 'active' or removing reveal from section headers
        content = content.replace(" mb-16 reveal", " mb-16")
        content = content.replace(" reveal", "")

        # 2. Fix comparison table text colors
        # Table header backgrounds and text contrast
        content = content.replace('class="bg-[#f0f5fa] border-b-2 border-[#e6e6e6]"', 'class="bg-[#0a2540] text-white border-b-2 border-[#e6e6e6]"')
        content = content.replace('class="p-6 font-bold text-[#0a2540] whitespace-nowrap"', 'class="p-6 font-bold text-white whitespace-nowrap"')
        content = content.replace('class="p-6 font-medium text-[#425466] whitespace-nowrap"', 'class="p-6 font-bold text-slate-200 whitespace-nowrap"')
        content = content.replace('class="p-6 font-black text-[#4338ca] text-xl whitespace-nowrap"', 'class="p-6 font-black text-[#39FF14] text-xl whitespace-nowrap"')

        # Service Mode Analysis Matrix table text contrast
        content = content.replace('class="p-6 bg-[#0a2540] text-white"', 'class="p-6 bg-[#0a2540] text-white border-b border-white/10"')
        content = content.replace('class="bg-[#f6f9fc] border-b border-[#e6e6e6] text-[#0a2540]"', 'class="bg-[#0a2540] border-b border-white/10 text-white"')
        content = content.replace('class="px-6 py-4">Transport Option', 'class="px-6 py-4 font-bold text-white">Transport Option')
        content = content.replace('class="px-6 py-4">Cost Level', 'class="px-6 py-4 font-bold text-white">Cost Level')
        content = content.replace('class="px-6 py-4">Safety &amp; Protection', 'class="px-6 py-4 font-bold text-white">Safety &amp; Protection')
        content = content.replace('class="px-6 py-4">Avg. Speed', 'class="px-6 py-4 font-bold text-white">Avg. Speed')
        content = content.replace('class="px-6 py-4">Best For', 'class="px-6 py-4 font-bold text-white">Best For')
        content = content.replace('class="px-6 py-4">Action', 'class="px-6 py-4 font-bold text-white">Action')

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"SUCCESS: Fixed visibility and table color contrast in {file_path}")

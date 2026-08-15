import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace hero trust badge line with clickable Google Business Profile link
old_trust_line = re.compile(r'<div class="flex flex-wrap items-center gap-4 mb-8">\s*<div class="flex items-center gap-2 text-white text-sm font-bold">.*?Nationwide Service • Open &amp; Enclosed Options • Door-to-Door Coordination\s*</div>\s*</div>', re.DOTALL)

new_trust_line = """<div class="flex flex-wrap items-center gap-4 mb-8">
       <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" aria-label="View Neon Auto Transport Google reviews" class="flex items-center gap-2 text-white text-sm font-bold hover:underline" style="text-decoration: none;">
        <div class="flex text-yellow-400 text-sm tracking-wider">★★★★★</div>
        <span>5.0 / 5 on Google</span>
       </a>
       <div class="hidden sm:block w-px h-6 bg-white/20 mx-2"></div>
       <div class="hidden sm:flex items-center gap-2 text-white text-sm font-bold">
        <svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Nationwide Service • Open &amp; Enclosed Options • Door-to-Door Coordination
       </div>
      </div>"""

if old_trust_line.search(content):
    content = old_trust_line.sub(new_trust_line, content)
    print("SUCCESS: Linked 5.0 / 5 on Google badge to genuine Google Business Profile link")
else:
    print("WARNING: Pattern not matched directly, trying fallback replacement")
    content = content.replace(
        '<div class="flex items-center gap-2 text-white text-sm font-bold">\n        <svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\n        Nationwide Service • Open &amp; Enclosed Options • Door-to-Door Coordination\n       </div>',
        '<a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" aria-label="View Neon Auto Transport Google reviews" class="flex items-center gap-2 text-white text-sm font-bold hover:underline" style="text-decoration: none;"><div class="flex text-yellow-400 text-sm tracking-wider">★★★★★</div><span>5.0 / 5 on Google</span></a>\n       <div class="hidden sm:block w-px h-6 bg-white/20 mx-2"></div>\n       <div class="hidden sm:flex items-center gap-2 text-white text-sm font-bold"><svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Nationwide Service • Open &amp; Enclosed Options • Door-to-Door Coordination</div>'
    )

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Google Reviews link added to hero section!")

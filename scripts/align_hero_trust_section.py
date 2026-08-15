import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the messy hero trust bar with a beautifully aligned glassmorphic pill bar
old_trust_bar_pattern = re.compile(r'<div class="flex flex-wrap items-center gap-4 mb-8 pointer-events-auto relative z-30">\s*<a href="https://maps\.app\.goo\.gl/8sytHbRV3BsnPBUD6".*?</div>\s*</div>', re.DOTALL)

new_trust_bar = """<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 mb-2 max-w-lg pointer-events-auto relative z-30">
       <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" aria-label="View Neon Auto Transport Google reviews" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-bold transition-all shadow-sm shrink-0" style="text-decoration: none;">
        <span class="text-yellow-400 text-sm tracking-wider">★★★★★</span>
        <span>5.0 / 5 on Google</span>
       </a>

       <div class="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-white/10 px-3.5 py-1.5 rounded-full text-white/90 text-xs font-semibold">
        <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Nationwide Service • Open &amp; Enclosed • Door-to-Door</span>
       </div>
      </div>"""

if old_trust_bar_pattern.search(content):
    content = old_trust_bar_pattern.sub(new_trust_bar, content)
    print("SUCCESS: Replaced hero trust bar with aligned glassmorphic pills")
else:
    print("WARNING: Pattern not matched directly, trying string replacement fallback")
    fallback_old = '<div class="flex flex-wrap items-center gap-4 mb-8 pointer-events-auto relative z-30">\n       <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" aria-label="View Neon Auto Transport Google reviews" class="flex items-center gap-2 text-white text-sm font-bold hover:underline pointer-events-auto relative z-30" style="text-decoration: none;">\n        <div class="flex text-yellow-400 text-sm tracking-wider">★★★★★</div>\n        <span>5.0 / 5 on Google</span>\n       </a>\n       <div class="hidden sm:block w-px h-6 bg-white/20 mx-2"></div>\n       <div class="hidden sm:flex items-center gap-2 text-white text-sm font-bold">\n        <svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\n        Nationwide Service • Open &amp; Enclosed Options • Door-to-Door Coordination\n       </div>\n      </div>'
    if fallback_old in content:
        content = content.replace(fallback_old, new_trust_bar)
        print("SUCCESS: Replaced hero trust bar via string replacement")
    else:
        print("ERROR: Fallback target string not found")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Hero trust section alignment completed!")

import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old_trust_pattern = re.compile(r'<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 mb-2 max-w-lg pointer-events-auto relative z-30">.*?</div>\s*</div>', re.DOTALL)

new_trust_markup = """<div class="flex flex-col space-y-3 pt-2 max-w-xl pointer-events-auto relative z-30">
        <!-- Row 1: Verified Google Reviews Link -->
        <div class="flex items-center">
         <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" aria-label="View Neon Auto Transport Google reviews" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-bold transition-all shadow-sm" style="text-decoration: none;">
          <span class="text-yellow-400 text-sm tracking-wider">★★★★★</span>
          <span>5.0 / 5 on Google Reviews</span>
         </a>
        </div>

        <!-- Row 2: Clean Checkmarked Feature Row -->
        <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-white/90 text-xs font-semibold">
         <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Nationwide Service</span>
         </span>
         <span class="text-white/30 font-normal">•</span>
         <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Open &amp; Enclosed Options</span>
         </span>
         <span class="text-white/30 font-normal">•</span>
         <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Door-to-Door Delivery</span>
         </span>
        </div>
       </div>"""

if old_trust_pattern.search(content):
    content = old_trust_pattern.sub(new_trust_markup, content)
    print("SUCCESS: Updated hero trust section layout to 2 clean aligned rows")
else:
    print("ERROR: Could not match old trust pattern")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Hero trust layout updated!")

import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove duplicate/legacy JSON-LD blocks between line 450 and favicon tags
schema_purge_pattern = re.compile(r'<!-- JSON-LD: HowTo -->.*?<link rel="icon"', re.DOTALL)
new_favicon_start = '<link rel="icon"'

if schema_purge_pattern.search(content):
    content = schema_purge_pattern.sub(new_favicon_start, content)
    print("SUCCESS: Purged duplicate legacy JSON-LD blocks (HowTo, duplicate WebSite, SpeakableSpecification)")

# Also remove duplicate Sitelinks searchbox script block if present after favicons
sitelinks_purge_pattern = re.compile(r'<!-- JSON-LD: WebSite Sitelinks Searchbox & SiteNavigationElement -->.*?</script>', re.DOTALL)
if sitelinks_purge_pattern.search(content):
    content = sitelinks_purge_pattern.sub('', content)
    print("SUCCESS: Purged duplicate Sitelinks Searchbox JSON-LD script")

# 2. Clean up minified stats bar on line 2201 (replace 10K+ and $0 deposit with safe factual features)
old_stats_bar = '<div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal" style="transition-delay:400ms"><div class="text-center"><p class="text-3xl font-black text-[#0a2540]">10K+</p><p class="text-[#425466] text-xs font-medium mt-1">Vetted Carriers</p></div><div class="text-center"><p class="text-3xl font-black text-[#0a2540]">$0</p><p class="text-[#425466] text-xs font-medium mt-1">Upfront Deposit</p></div><div class="text-center"><p class="text-3xl font-black text-[#0a2540]">5.0</p><p class="text-[#425466] text-xs font-medium mt-1">Average Rating</p></div><div class="text-center"><p class="text-3xl font-black text-[#0a2540]">50</p><p class="text-[#425466] text-xs font-medium mt-1">States Covered</p></div></div>'

new_stats_bar = '<div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal" style="transition-delay:400ms"><div class="text-center"><p class="text-2xl md:text-3xl font-black text-[#0a2540]">Licensed Broker</p><p class="text-[#425466] text-xs font-medium mt-1">MC #1703787 • USDOT #4355879</p></div><div class="text-center"><p class="text-2xl md:text-3xl font-black text-[#0a2540]">Door-to-Door</p><p class="text-[#425466] text-xs font-medium mt-1">Nationwide Coordination</p></div><div class="text-center"><p class="text-2xl md:text-3xl font-black text-[#0a2540]">Open & Enclosed</p><p class="text-[#425466] text-xs font-medium mt-1">Transport Options</p></div><div class="text-center"><p class="text-2xl md:text-3xl font-black text-[#0a2540]">50 States</p><p class="text-[#425466] text-xs font-medium mt-1">Full US Coverage</p></div></div>'

if old_stats_bar in content:
    content = content.replace(old_stats_bar, new_stats_bar)
    print("SUCCESS: Replaced minified legacy stats bar with safe factual features")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Purged all legacy schema blocks and claims from index.html!")

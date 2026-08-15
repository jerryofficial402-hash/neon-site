import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title, Meta Description, Canonical
old_title_meta = """  <!-- Primary SEO -->
  <title>Car Shipping Company | Nationwide Auto Transport Quotes | Neon</title>
  <meta name="description" content="Get a free car shipping quote from Neon Auto Transport. Nationwide door-to-door open and enclosed auto transport, transparent pricing, and vetted carrier options.">"""

new_title_meta = """  <!-- Primary SEO -->
  <title>Car Shipping Company | Nationwide Auto Transport Quotes | Neon</title>
  <meta name="description" content="Get a free nationwide car shipping quote from Neon Auto Transport. Compare open and enclosed auto transport, door-to-door delivery, and estimated pricing for your route.">"""

if old_title_meta in content:
    content = content.replace(old_title_meta, new_title_meta)
    print("SUCCESS: Updated primary SEO title & meta description")

# 2. Update JSON-LD WebPage description
old_jsonld_desc = '"description": "Get a free car shipping quote from Neon Auto Transport. Nationwide door-to-door open and enclosed auto transport, transparent pricing, and vetted carrier options."'
new_jsonld_desc = '"description": "Get a free nationwide car shipping quote from Neon Auto Transport. Compare open and enclosed auto transport, door-to-door delivery, and estimated pricing for your route."'
if old_jsonld_desc in content:
    content = content.replace(old_jsonld_desc, new_jsonld_desc)
    print("SUCCESS: Updated WebPage JSON-LD description")

# 3. Update Speakable JSON-LD description
old_speakable_desc = '"description": "FMCSA approved door-to-door auto transport across all 50 states. Open and enclosed car shipping with fully insured carriers."'
new_speakable_desc = '"description": "Get a free nationwide car shipping quote from Neon Auto Transport. Compare open and enclosed auto transport, door-to-door delivery, and estimated pricing for your route."'
if old_speakable_desc in content:
    content = content.replace(old_speakable_desc, new_speakable_desc)
    print("SUCCESS: Updated Speakable JSON-LD description")

# 4. Update Hero Section (H1, Description, Broker Disclosure, CTAs)
import re

hero_copy_pattern = re.compile(
    r'<div class="text-white lg:col-span-6 xl:col-span-7".*?<div class="flex flex-wrap items-center gap-4 mb-8">',
    re.DOTALL
)

new_hero_copy = """<div class="text-white lg:col-span-6 xl:col-span-7" style="opacity:1;transform:none;">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-xs font-bold mb-6">
       <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
       FMCSA Registered • USDOT #4355879 • MC #1703787
      </div>
      <h1 id="hero-heading" class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-white tracking-tighter">
       Nationwide Car Shipping With Fast, Transparent Quotes
      </h1>
      <p id="hero-description" class="text-lg text-[rgba(255,255,255,0.9)] mb-4 max-w-lg leading-relaxed font-medium">
       Arrange door-to-door auto transport for your car, SUV, truck, motorcycle, or specialty vehicle anywhere in the United States. Compare open and enclosed shipping options, use our cost calculator for an estimated rate, or request a free car shipping quote.
      </p>
      <p class="text-xs text-slate-300 max-w-lg leading-relaxed mb-6 font-normal">
       Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange vehicle transportation through independently owned motor carriers.
      </p>
      <div class="flex flex-wrap items-center gap-4 mb-8 font-semibold">
       <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] py-3.5 px-6 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]" style="text-decoration: none;">Get a Free Car Shipping Quote →</a>
       <a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition" style="text-decoration: none;">Calculate Car Shipping Cost →</a>
      </div>
      <div class="flex flex-wrap items-center gap-4 mb-8">"""

if hero_copy_pattern.search(content):
    content = hero_copy_pattern.sub(new_hero_copy, content)
    print("SUCCESS: Updated Hero copy, H1, description, broker disclosure, and CTAs")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Homepage index.html updated successfully!")

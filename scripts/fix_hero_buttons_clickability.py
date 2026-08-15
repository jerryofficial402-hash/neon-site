import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Fix 1: Make the hero copy container pointer-events-auto
content = content.replace(
    '<div class="text-white lg:col-span-6 xl:col-span-7" style="opacity:1;transform:none;">',
    '<div class="text-white lg:col-span-6 xl:col-span-7 pointer-events-auto" style="opacity:1;transform:none;z-index:30;position:relative;">'
)

# Fix 2: Add pointer-events-auto to the hero button container
content = content.replace(
    '<div class="flex flex-wrap items-center gap-4 mb-8 font-semibold">',
    '<div class="flex flex-wrap items-center gap-4 mb-8 font-semibold pointer-events-auto relative z-30">'
)

# Fix 3: Ensure both button anchor tags have pointer-events-auto and relative z-30
content = content.replace(
    '<a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] py-3.5 px-6 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]" style="text-decoration: none;">Get a Free Car Shipping Quote →</a>',
    '<a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] py-3.5 px-6 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)] pointer-events-auto relative z-30" style="text-decoration: none;">Get a Free Car Shipping Quote →</a>'
)

content = content.replace(
    '<a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition" style="text-decoration: none;">Calculate Car Shipping Cost →</a>',
    '<a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition pointer-events-auto relative z-30" style="text-decoration: none;">Calculate Car Shipping Cost →</a>'
)

content = content.replace(
    '<a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition" style="text-decoration: none;">Estimate My Car Shipping Cost →</a>',
    '<a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition pointer-events-auto relative z-30" style="text-decoration: none;">Calculate Car Shipping Cost →</a>'
)

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Hero buttons clickability fixed!")

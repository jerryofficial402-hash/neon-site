import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CONTACT_FILE = os.path.join(BASE_DIR, "contact.html")
LIVE_OAK_FILE = os.path.join(BASE_DIR, "live-oak-ca-car-shipping", "index.html")

# 1. Update contact.html with enhanced hover effects and exact GMB redirect links
with open(CONTACT_FILE, "r", encoding="utf-8") as f:
    contact_html = f.read()

# Replace Woodbridge Google Reviews link with exact requested GMB link: https://share.google/HsmqJyEArbWjqBI4v
contact_html = contact_html.replace(
    'https://www.google.com/maps/place/Neon+Auto+Transport+LLC/@38.6243733,-77.2943229,17z',
    'https://share.google/HsmqJyEArbWjqBI4v'
)

# Update Live Oak card to include both Get Directions, View Google Reviews (https://share.google/oRmW1jDXC3hz93IYZ), and Location Page
old_live_oak_buttons = '''         <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
           <a href="https://maps.google.com/?q=8333+CA-99+Office+101+Live+Oak+CA+95953" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
             Get Directions →
           </a>
           <a href="/live-oak-ca-car-shipping/" class="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e011] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
             View Live Oak Car Shipping →
           </a>
         </div>'''

new_live_oak_buttons = '''         <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
           <a href="https://maps.google.com/?q=8333+CA-99+Office+101+Live+Oak+CA+95953" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
             Get Directions →
           </a>
           <a href="https://share.google/oRmW1jDXC3hz93IYZ" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
             View Google Reviews ⭐
           </a>
           <a href="/live-oak-ca-car-shipping/" class="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e011] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
             View Live Oak Car Shipping →
           </a>
         </div>'''

if old_live_oak_buttons in contact_html:
    contact_html = contact_html.replace(old_live_oak_buttons, new_live_oak_buttons)

# Add enhanced hover class styles to stripe-card and location boxes
contact_html = contact_html.replace(
    'class="stripe-card p-6 flex items-start gap-5 hover:border-[#635bff] transition duration-300 block"',
    'class="stripe-card p-6 flex items-start gap-5 hover:border-[#635bff] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 transform block"'
)

contact_html = contact_html.replace(
    'class="stripe-card p-6 flex items-start gap-5 hover:border-[#39FF14] transition duration-300 block"',
    'class="stripe-card p-6 flex items-start gap-5 hover:border-[#39FF14] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 transform block"'
)

contact_html = contact_html.replace(
    'class="stripe-card p-2 hover:border-[#00D4FF] transition duration-300 overflow-hidden mt-6"',
    'class="stripe-card p-2 hover:border-[#00D4FF] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 transform overflow-hidden mt-6"'
)

contact_html = contact_html.replace(
    'class="lg:col-span-7 bg-white rounded-3xl stripe-card p-8 md:p-10"',
    'class="lg:col-span-7 bg-white rounded-3xl stripe-card p-8 md:p-10 hover:shadow-2xl hover:border-[#635bff] transition-all duration-300 transform"'
)

contact_html = contact_html.replace(
    'class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-sm hover:border-[#635bff] transition duration-300 flex flex-col justify-between"',
    'class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-md hover:border-[#635bff] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 transform flex flex-col justify-between"'
)

contact_html = contact_html.replace(
    'class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-sm hover:border-[#00D4FF] transition duration-300 flex flex-col justify-between"',
    'class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-md hover:border-[#00D4FF] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 transform flex flex-col justify-between"'
)

with open(CONTACT_FILE, "w", encoding="utf-8") as f:
    f.write(contact_html)

print("SUCCESS: Updated contact.html with interactive box hover effects & GMB redirect links!")

# 2. Update /live-oak-ca-car-shipping/index.html with Live Oak GMB link
with open(LIVE_OAK_FILE, "r", encoding="utf-8") as f:
    live_oak_html = f.read()

if 'https://share.google/oRmW1jDXC3hz93IYZ' not in live_oak_html:
    live_oak_html = live_oak_html.replace(
        '<div class="inline-flex items-center gap-2 px-3 py-1 bg-[#0a2540] text-white text-xs font-bold rounded-full">',
        '<div class="flex flex-wrap items-center gap-3 mb-3">\n            <a href="https://share.google/oRmW1jDXC3hz93IYZ" target="_blank" rel="noopener noreferrer" class="px-4 py-1.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-full shadow-sm" style="text-decoration:none;">View Google Reviews ⭐</a>\n          </div>\n          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#0a2540] text-white text-xs font-bold rounded-full">'
    )
    with open(LIVE_OAK_FILE, "w", encoding="utf-8") as f:
        f.write(live_oak_html)
    print("SUCCESS: Added GMB review button to Live Oak landing page!")

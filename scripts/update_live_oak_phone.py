import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CONTACT_FILE = os.path.join(BASE_DIR, "contact.html")
LIVE_OAK_FILE = os.path.join(BASE_DIR, "live-oak-ca-car-shipping", "index.html")

# 1. Update contact.html
with open(CONTACT_FILE, "r", encoding="utf-8") as f:
    contact_html = f.read()

# Update Live Oak phone in contact.html
contact_html = contact_html.replace(
    'Phone: <a href="tel:5715767711" class="text-[#0891b2] font-black hover:underline">(571) 576-7711</a>',
    'Phone: <a href="tel:5307255383" class="text-[#0891b2] font-black hover:underline">+1 530-725-5383</a>'
)

with open(CONTACT_FILE, "w", encoding="utf-8") as f:
    f.write(contact_html)

print("SUCCESS: Updated Live Oak phone in contact.html")

# 2. Update /live-oak-ca-car-shipping/index.html
with open(LIVE_OAK_FILE, "r", encoding="utf-8") as f:
    live_oak_html = f.read()

# Update LocalBusiness schema phone
live_oak_html = live_oak_html.replace(
    '"telephone": "+1-571-576-7711"',
    '"telephone": "+1-530-725-5383"'
)

# Update header phone link on Live Oak page
live_oak_html = live_oak_html.replace(
    '<a href="tel:5715767711" class="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#00d4ff] transition">\n          (571) 576-7711\n        </a>',
    '<a href="tel:5307255383" class="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#00d4ff] transition">\n          +1 530-725-5383\n        </a>'
)

with open(LIVE_OAK_FILE, "w", encoding="utf-8") as f:
    f.write(live_oak_html)

print("SUCCESS: Updated Live Oak phone & schema in /live-oak-ca-car-shipping/index.html")

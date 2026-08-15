import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace spans in FAQ buttons with h3 elements for crawlability
content = content.replace(
    '<span class="font-bold text-[#0a2540]">Is my vehicle insured during transit?</span>',
    '<h3 class="font-bold text-[#0a2540] text-base text-left">Is my vehicle insured during transit?</h3>'
)
content = content.replace(
    '<span class="font-bold text-[#0a2540]">How Much Does It Cost to Ship a Car 300 Miles?</span>',
    '<h3 class="font-bold text-[#0a2540] text-base text-left">How Much Does It Cost to Ship a Car 300 Miles?</h3>'
)
content = content.replace(
    '<span class="font-bold text-[#0a2540]">Can I track my shipment?</span>',
    '<h3 class="font-bold text-[#0a2540] text-base text-left">Can I track my shipment?</h3>'
)
content = content.replace(
    '<span class="font-bold text-[#0a2540]">How do I prepare my car for shipping?</span>',
    '<h3 class="font-bold text-[#0a2540] text-base text-left">How do I prepare my car for shipping?</h3>'
)
content = content.replace(
    '<span class="font-bold text-[#0a2540]">Do you offer Door to Door Service?</span>',
    '<h3 class="font-bold text-[#0a2540] text-base text-left">Do you offer Door to Door Service?</h3>'
)
content = content.replace(
    '<span class="font-bold text-[#0a2540]">Can you ship non-running vehicles?</span>',
    '<h3 class="font-bold text-[#0a2540] text-base text-left">Can you ship non-running vehicles?</h3>'
)
content = content.replace(
    '<span class="font-bold text-[#0a2540]">Can I ship multiple vehicles?</span>',
    '<h3 class="font-bold text-[#0a2540] text-base text-left">Can I ship multiple vehicles?</h3>'
)

# Update tracking answer to safer wording
old_track_ans = "Yes! Our dispatch team provides regular updates. You also get the driver's direct contact information so you can check in at any time during the trip."
new_track_ans = "Yes. Your assigned coordinator provides updates throughout shipment and coordinates directly with the motor carrier for timing updates."

if old_track_ans in content:
    content = content.replace(old_track_ans, new_track_ans)
    print("SUCCESS: Updated tracking FAQ answer to safer wording")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Homepage FAQ question headings updated to h3 tags!")

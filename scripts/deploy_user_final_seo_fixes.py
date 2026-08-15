import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Fix leftover twitter description containing $500K
old_twitter_meta = '<meta name="twitter:description" content="Ship your car nationwide with Neon Auto Transport. Instant quotes, door-to-door open or enclosed transport, $500K insurance coverage, no deposit required.">'
new_twitter_meta = '<meta name="twitter:description" content="Get a free nationwide car shipping quote and compare open or enclosed auto transport options.">'

if old_twitter_meta in content:
    content = content.replace(old_twitter_meta, new_twitter_meta)
    print("SUCCESS: Cleaned up Twitter meta description")

# 2. Fix footer line 2321 "FMCSA Approved"
old_footer_approved = '<svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> FMCSA Approved'
new_footer_approved = '<svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Licensed Broker'

if old_footer_approved in content:
    content = content.replace(old_footer_approved, new_footer_approved)
    print("SUCCESS: Replaced footer 'FMCSA Approved' with 'Licensed Broker'")

# 3. Update Popular Route section description
old_route_desc = "Direct door-to-door auto transport across America's highest-volume vehicle shipping lanes. Compare route distances, transit windows, and transparent rates."
new_route_desc = "Explore popular interstate vehicle shipping routes. Transit estimates and carrier availability vary by route, vehicle, pickup dates, weather, access conditions, and scheduling."

if old_route_desc in content:
    content = content.replace(old_route_desc, new_route_desc)
    print("SUCCESS: Updated Popular Route section description")

# 4. Update Blog Article 3 Title and Description
old_blog_title = "The True Cost of Car Shipping in 2026"
new_blog_title = "The True Cost of Car Shipping"

old_blog_desc = "Real pricing factors, hidden fee breakdowns, and a broker comparison to help you avoid overpaying for auto transport."
new_blog_desc = "Learn what affects car shipping prices, including distance, vehicle size, transport type, route demand, timing, and pickup or delivery access."

if old_blog_title in content:
    content = content.replace(old_blog_title, new_blog_title)
    print("SUCCESS: Updated Blog Article 3 Title")

if old_blog_desc in content:
    content = content.replace(old_blog_desc, new_blog_desc)
    print("SUCCESS: Updated Blog Article 3 Description")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: All user final SEO fixes applied to index.html!")

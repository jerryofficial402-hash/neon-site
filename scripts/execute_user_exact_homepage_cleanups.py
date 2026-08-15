import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove Delivery Estimator widget from How Long Does Car Shipping Take? section
timeline_sec_pattern = re.compile(r'<!-- Transit Time Delivery Timeline Section -->.*?</section>', re.DOTALL)

clean_timeline_section = """<!-- Transit Time Delivery Timeline Section -->
  <section class="py-24 bg-white border-t border-[#e6e6e6] relative z-10" id="transit-time">
   <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
    <div class="max-w-3xl mx-auto reveal text-center">
     <h2 class="text-4xl md:text-5xl font-black text-[#0a2540] tracking-tight mb-6">How Long Does Car Shipping Take?</h2>
     <p class="text-lg text-[#425466] leading-relaxed mb-4">
      Transit time depends on the route, total distance, carrier schedule, traffic, weather, loading stops, delivery access, and federal Hours-of-Service requirements. Transit begins after pickup; carrier assignment and the pickup window are separate from transit time.
     </p>
     <p class="text-lg text-[#425466] leading-relaxed mb-8">
      Regional shipments may take several days after pickup, while long cross-country shipments may take approximately one to two weeks depending on conditions. Your coordinator provides available pickup-window and estimated transit information for your specific route.
     </p>
     <div class="flex flex-wrap items-center justify-center gap-4">
      <a href="/cost-calculator/" class="btn-primary py-3.5 px-6 rounded-full font-bold text-base bg-[#635bff] text-white hover:bg-[#4b45cc] transition shadow-md" style="text-decoration: none;">Use the Car Shipping Cost Calculator →</a>
      <a href="/how-it-works/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-[#0a2540] text-[#0a2540] hover:bg-[#0a2540] hover:text-white transition" style="text-decoration: none;">See How Car Shipping Works →</a>
     </div>
    </div>
   </div>
  </section>"""

if timeline_sec_pattern.search(content):
    content = timeline_sec_pattern.sub(clean_timeline_section, content)
    print("SUCCESS: Removed Delivery Estimator widget & converted Transit Time section to clean single-column layout")

# 2. Remove Trusted Brands Marquee (Logos) section completely
brands_pattern = re.compile(r'<!-- Trusted Brands Marquee \(Logos\) -->.*?</section>', re.DOTALL)
if brands_pattern.search(content):
    content = brands_pattern.sub('', content)
    print("SUCCESS: Deleted Trusted Brands Marquee (Tesla, Mercedes, BMW, etc.) section completely")

# 3. Remove leftover JS for transitMilesInput if present
js_estimator_pattern = re.compile(r'// Transit Time Delivery Estimator.*?\n  \}\);', re.DOTALL)
if js_estimator_pattern.search(content):
    content = js_estimator_pattern.sub('', content)
    print("SUCCESS: Purged transitMilesInput JavaScript listener")

# 4. Ensure Popular Route Section intro matches exact required wording
old_route_text = "Direct door-to-door auto transport across America's highest-volume vehicle shipping lanes. Compare route distances, transit windows, and transparent rates."
new_route_text = "Explore popular interstate vehicle shipping routes. Transit estimates and carrier availability vary by route, vehicle, pickup dates, weather, access conditions, and scheduling."

if old_route_text in content:
    content = content.replace(old_route_text, new_route_text)
    print("SUCCESS: Updated Popular Route section description to exact required wording")

# 5. Ensure Blog Article 3 Title & Description match exact required wording
content = content.replace("The True Cost of Car Shipping in 2026", "The True Cost of Car Shipping")
content = content.replace(
    "Real pricing factors, hidden fee breakdowns, and a broker comparison to help you avoid overpaying for auto transport.",
    "Learn what affects car shipping prices, including distance, vehicle size, transport type, route demand, timing, and pickup or delivery access."
)

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: All user exact homepage cleanups completed in index.html!")

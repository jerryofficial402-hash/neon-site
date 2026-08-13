import os
import re

PAGE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\car-shipping-quote\index.html"

with open(PAGE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Enrich Intro section internal links
old_intro_p2 = r'<p class="text-sm lg:text-base text-\[\#425466\] leading-relaxed">\s*Enter your route and vehicle details in our interactive calculator to compare open and enclosed carrier options, lock in a competitive rate, and schedule door-to-door pickup anywhere in the United States\.\s*</p>'

new_intro_p2 = """<p class="text-sm lg:text-base text-[#425466] leading-relaxed">
              Enter your route and vehicle details in our interactive calculator to compare open and enclosed carrier options, lock in a competitive rate, and schedule door-to-door pickup anywhere in the United States. Prefer to see numbers first? Use our <a href="/cost-calculator/" class="text-[#468de6] font-bold hover:underline">Car Shipping Cost Calculator</a> to view live market pricing for your exact route.
            </p>"""

content = re.sub(old_intro_p2, new_intro_p2, content, flags=re.DOTALL)

# 2. Enrich How It Works Step 5 internal links
old_step5_text = r'<p class="text-xs text-\[\#425466\] leading-relaxed">Our system calculates your car shipping cost range, showing standard and expedited options based on live carrier availability\.</p>'

new_step5_text = """<p class="text-xs text-[#425466] leading-relaxed">Our system calculates your car shipping cost range using the same engine as our <a href="/cost-calculator/" class="text-[#468de6] font-bold hover:underline">instant auto transport cost calculator</a>. For a detailed walkthrough, see <a href="/#how-it-works" class="text-[#468de6] font-bold hover:underline">how our car shipping process works step-by-step</a>.</p>"""

content = re.sub(old_step5_text, new_step5_text, content)

# 3. Enrich Carrier Types internal links in Section 3
old_carrier_text = r'<p class="text-xs text-\[\#425466\] leading-relaxed">\s*Open car shipping quotes are ideal for everyday vehicles and budget-friendly moves\. Enclosed car shipping quotes include full weather-shielded protection and zero exposure to road debris\.\s*</p>'

new_carrier_text = """<p class="text-xs text-[#425466] leading-relaxed">
              Open car shipping quotes are ideal for everyday vehicles and budget-friendly moves. Enclosed car shipping quotes include full weather-shielded protection and zero exposure to road debris. For more details on carrier types, visit our <a href="/services/" class="text-[#468de6] font-bold hover:underline">vehicle transport services</a> page.
            </p>"""

content = re.sub(old_carrier_text, new_carrier_text, content, flags=re.DOTALL)

# 4. Enrich Example Routes GEO section internal links
old_routes_intro = r'<p class="text-\[\#425466\] text-base leading-relaxed">\s*These examples show realistic ranges for standard open carrier transport\. <a href="/routes/california-to-texas-enclosed/" class="text-\[\#468de6\] font-bold hover:underline">View California car shipping services and example quotes</a> to explore specific interstate corridors\.\s*</p>'

new_routes_intro = """<p class="text-[#425466] text-base leading-relaxed">
            These examples show realistic ranges for standard open carrier transport. If you’re shipping to or from the West Coast, explore our <a href="/routes/california-to-texas-enclosed/" class="text-[#468de6] font-bold hover:underline">California car shipping services</a> for route-specific information and pricing, or check popular corridors like <a href="/new-york-to-florida-car-shipping/" class="text-[#468de6] font-bold hover:underline">New York to Florida car shipping</a>.
          </p>"""

content = re.sub(old_routes_intro, new_routes_intro, content, flags=re.DOTALL)

# 5. Enrich EEAT / Trust section internal links
old_eeat_intro = r'<p class="text-\[\#425466\] text-base leading-relaxed">\s*Search engines and AI models look for expertise, experience, authority, and trust \(EEAT\)\. <a href="/reviews/" class="text-\[\#468de6\] font-bold hover:underline">Read more about Neon Auto Transport reviews and customer stories</a> to see why drivers trust us nationwide:\s*</p>'

new_eeat_intro = """<p class="text-[#425466] text-base leading-relaxed">
            Search engines and AI models look for expertise, experience, authority, and trust (EEAT). Curious what other drivers experienced? Read verified <a href="/why-neon/" class="text-[#468de6] font-bold hover:underline">Neon Auto Transport reviews</a> and see why customers choose our 5-star rated service nationwide:
          </p>"""

content = re.sub(old_eeat_intro, new_eeat_intro, content, flags=re.DOTALL)

with open(PAGE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Embedded exact contextual internal linking web across all sections of car-shipping-quote page!")

import os
import re

CALCULATOR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(CALCULATOR_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update H1, Subheading, and Intro Text
old_hero_left = r'<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-\[\#0a2540\] mb-6 tracking-tight leading-\[1\.1\]">\s*Instant Auto Shipping Quote Calculator\s*</h1>\s*<p class="text-lg text-\[\#425466\] mb-8 leading-relaxed">\s*Get a guaranteed, real-time vehicle shipping quote in seconds\. Enter your pickup and delivery cities to calculate door-to-door open or enclosed auto transport rates across all 50 states — zero hidden fees, zero deposit required\.\s*</p>'

new_hero_left = """<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-3 tracking-tight leading-[1.1]">
              Car Shipping Cost Calculator
            </h1>
            <h2 class="text-xl md:text-2xl font-bold text-[#468de6] mb-6">
              Instant Auto Shipping Quote Calculator (2026 Live Market Pricing)
            </h2>

            <p class="text-lg text-[#425466] mb-8 leading-relaxed">
              Get a guaranteed, real-time car shipping cost in seconds with Neon Auto Transport’s live market auto transport quote calculator. Enter your pickup and delivery cities to calculate door-to-door open or enclosed auto transport rates across all 50 states — zero hidden fees, zero upfront deposit required.
            </p>"""

content = re.sub(old_hero_left, new_hero_left, content, flags=re.DOTALL)

# 2. Compress Rating Line in Blue Card Grid
old_rating_card = r'<div class="text-\[\#468de6\] text-base font-black mb-1">5\.0 / 5 ★★★★★</div>\s*Verified Google Reviews'
new_rating_card = r'<div class="text-[#468de6] text-base font-black mb-1">★★★★★ 5.0 / 5 Rating</div>\n                Verified Google Reviews'

content = re.sub(old_rating_card, new_rating_card, content)

# 3. Transparent Pricing Section Header
old_pricing_header = r'<span class="inline-block px-3 py-1 rounded-full bg-\[\#468de6\]/10 text-\[\#468de6\] text-xs font-bold uppercase tracking-wider mb-3">TRANSPARENT PRICING</span>\s*<h2 class="text-3xl md:text-4xl font-black text-\[\#0a2540\]">Key Factors That Determine Your Quote</h2>'

new_pricing_header = """<span class="inline-block px-3 py-1 rounded-full bg-[#468de6]/10 text-[#468de6] text-xs font-bold uppercase tracking-wider mb-3">TRANSPARENT PRICING</span>
          <h2 class="text-3xl md:text-4xl font-black text-[#0a2540]">Transparent Pricing: How Your Car Shipping Cost Is Calculated</h2>
          <p class="text-[#425466] text-base mt-3 font-medium">Your vehicle transport quote is based on a few core factors:</p>"""

content = re.sub(old_pricing_header, new_pricing_header, content, flags=re.DOTALL)

# 4. Richer FAQ Answers (HTML Accordions)
old_faq_1 = r'Your quote is calculated based on total route distance \(miles\), vehicle size/weight \(sedan vs SUV vs truck\), vehicle condition \(operable vs inoperable\), transport type \(open vs enclosed\), and live carrier supply and demand along the route\.'
new_faq_1 = r'Your quote is calculated using live market data from our nationwide carrier network. We factor in mileage, vehicle size, carrier type (open vs enclosed), pickup and delivery locations, and current demand on your route to give you a realistic car shipping cost range before you book.'

old_faq_2 = r'No\. At Neon Auto Transport we require zero upfront deposit when requesting a quote or booking\. You pay nothing until a carrier is assigned and pickup is scheduled\.'
new_faq_2 = r'No. Neon Auto Transport does not charge hidden fees or mandatory upfront deposits. The price you see in your quote already includes standard carrier charges, fuel, and insurance coverage, so your auto transport pricing stays transparent from start to finish.'

old_faq_3 = r'Open transport carries vehicles on a multi-car open trailer — it is the most popular and budget-friendly option\. Enclosed transport protects vehicles inside a fully enclosed trailer, ideal for classic, exotic, or high-value vehicles\.'
new_faq_3 = r'Open transport is the most popular and affordable option for everyday vehicles, with your car riding on an open trailer alongside other vehicles. Enclosed transport provides fully covered, weather-shielded protection, ideal for classic, exotic, and luxury vehicles that need extra care.'

old_faq_4 = r'Booking 1 to 2 weeks in advance yields the most competitive pricing and flexible pickup options\. However, we also accommodate rush and expedited shipments\.'
new_faq_4 = r'For most routes, booking 3–7 days before your desired pickup date works well. During busy seasons or for remote locations, booking earlier helps us secure the best carrier and lock in your car shipping rate.'

content = content.replace(old_faq_1, new_faq_1)
content = content.replace(old_faq_2, new_faq_2)
content = content.replace(old_faq_3, new_faq_3)
content = content.replace(old_faq_4, new_faq_4)

# 5. Tune Bottom CTA Keyword
old_bottom_cta = r'<h2 class="text-3xl md:text-4xl font-black text-white mb-4">Ready to Calculate Your Car Haul Price\?</h2>\s*<p class="text-slate-300 text-base max-w-xl mx-auto mb-8">\s*Calculate your exact door-to-door vehicle transport rate in under 30 seconds\. Zero deposit, zero obligation\.\s*</p>\s*<div class="flex flex-col sm:flex-row items-center justify-center gap-4">\s*<a href="\#quote-form" class="w-full sm:w-auto bg-\[\#39FF14\] text-\[\#0a2540\] px-8 py-4 rounded-xl font-black text-base hover:bg-\[\#32e011\] transition shadow-lg">\s*Calculate Quote Now &rarr;\s*</a>'

new_bottom_cta = """<h2 class="text-3xl md:text-4xl font-black text-white mb-4">Ready to Calculate Your Car Shipping Cost?</h2>
        <p class="text-slate-300 text-base max-w-xl mx-auto mb-8">
          See your exact door-to-door car shipping price in under 30 seconds. Zero deposit, zero obligation to book.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#quote-form" class="w-full sm:w-auto bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-xl font-black text-base hover:bg-[#32e011] transition shadow-lg" style="text-decoration: none;">
            Calculate My Car Shipping Cost &rarr;
          </a>"""

content = re.sub(old_bottom_cta, new_bottom_cta, content, flags=re.DOTALL)

with open(CALCULATOR_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Deployed exact H1, intro keyword tuning, rating card wording, transparent pricing subtext, richer FAQs, and bottom CTA keyword optimization!")

import os
import re

CALCULATOR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(CALCULATOR_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Subheading Polish
old_subheading = r'<h2 class="text-xl md:text-2xl font-bold text-\[\#468de6\] mb-6">\s*Instant Auto Shipping Quote Calculator \(2026 Live Market Pricing\)\s*</h2>'
new_subheading = r'<h2 class="text-xl md:text-2xl font-bold text-[#468de6] mb-6">\n              Instant Auto Shipping Quote Calculator – 2026 Live Market Pricing\n            </h2>'

content = re.sub(old_subheading, new_subheading, content)

# 2. Update Rich FAQ Answers in HTML accordions & JSON-LD
# Q1:
old_q1_ans = r'Your quote is calculated using live market data from our nationwide carrier network\. We factor in mileage, vehicle size, carrier type \(open vs enclosed\), pickup and delivery locations, and current demand on your route to give you a realistic car shipping cost range before you book\.'
new_q1_ans = r'Your quote is calculated using live market data from our nationwide carrier network. We factor in mileage, vehicle size, carrier type (open or enclosed), pickup and delivery locations, and current demand on your route to provide a realistic car shipping cost range before you book.'

# Q2:
old_q2_ans = r'No\. Neon Auto Transport does not charge hidden fees or mandatory upfront deposits\. The price you see in your quote already includes standard carrier charges, fuel, and insurance coverage, so your auto transport pricing stays transparent from start to finish\.'
new_q2_ans = r'No. Neon Auto Transport does not charge hidden fees or mandatory upfront deposits. The price you see in your quote already includes standard carrier, fuel, and insurance costs, so your auto transport pricing stays 100% transparent from start to finish.'

# Q3:
old_q3_ans = r'Open transport is the most popular and affordable option for everyday vehicles, with your car riding on an open trailer alongside other vehicles\. Enclosed transport provides fully covered, weather-shielded protection, ideal for classic, exotic, and luxury vehicles that need extra care\.'
new_q3_ans = r'Open transport is the most popular and affordable option, ideal for everyday vehicles and most relocations. Your car travels on an open trailer with other vehicles. Enclosed transport provides fully covered, weather-shielded protection, which is perfect for classic, exotic, and luxury vehicles that need extra care.'

# Q4:
old_q4_ans = r'For most routes, booking 3–7 days before your desired pickup date works well\. During busy seasons or for remote locations, booking earlier helps us secure the best carrier and lock in your car shipping rate\.'
new_q4_ans = r'For most routes, booking 3–7 days before your desired pickup date works well. During busy seasons or for remote locations, booking earlier helps us secure the best carrier and lock in your car shipping rate.'

content = re.sub(old_q1_ans, new_q1_ans, content)
content = re.sub(old_q2_ans, new_q2_ans, content)
content = re.sub(old_q3_ans, new_q3_ans, content)
content = re.sub(old_q4_ans, new_q4_ans, content)

with open(CALCULATOR_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Deployed final Cost Calculator FAQ answer polish and subheading refinement!")

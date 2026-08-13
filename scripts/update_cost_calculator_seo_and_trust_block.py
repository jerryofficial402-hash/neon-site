import os
import re

FILE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title Tag
content = re.sub(
    r'<title>.*?</title>',
    '<title>Car Shipping Cost Calculator | Instant Auto Transport Quote</title>',
    content,
    flags=re.DOTALL
)

# 2. Update Meta Description
content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Calculate your car shipping cost instantly with Neon Auto Transport’s live market auto transport quote calculator. Enter your route and vehicle to see door-to-door open or enclosed auto transport rates nationwide — no deposit and no hidden fees.">',
    content,
    flags=re.DOTALL
)

# 3. Update OG Title
content = re.sub(
    r'<meta property="og:title" content=".*?">',
    '<meta property="og:title" content="Car Shipping Cost Calculator | Instant Auto Transport Quote">',
    content,
    flags=re.DOTALL
)

# 4. Update OG Description
content = re.sub(
    r'<meta property="og:description" content=".*?">',
    '<meta property="og:description" content="Get an instant car shipping cost in seconds. Calculate open or enclosed auto transport rates anywhere in the USA with zero deposit and transparent pricing.">',
    content,
    flags=re.DOTALL
)

# 5. Update Twitter Card
content = re.sub(
    r'<meta name="twitter:card" content=".*?">',
    '<meta name="twitter:card" content="summary">',
    content,
    flags=re.DOTALL
)

# 6. Update Twitter Title
content = re.sub(
    r'<meta name="twitter:title" content=".*?">',
    '<meta name="twitter:title" content="Car Shipping Cost Calculator | Instant Auto Transport Quote">',
    content,
    flags=re.DOTALL
)

# 7. Update Twitter Description
content = re.sub(
    r'<meta name="twitter:description" content=".*?">',
    '<meta name="twitter:description" content="See your live market car shipping cost in seconds. No upfront deposit, no hidden fees, and nationwide auto transport coverage.">',
    content,
    flags=re.DOTALL
)

# 8. Update Feature Bullet List in Page Body
old_bullets = r'<!-- Feature Bullet List -->\s*<div class="space-y-3 mb-8 text-sm font-bold text-\[\#0a2540\]">.*?</div>'

new_bullets = """<!-- Feature Bullet List & Trust Rating -->
            <div class="space-y-3 mb-8 text-sm font-bold text-[#0a2540]">
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black text-sm">✓</span>
                Zero upfront deposit required to book
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black text-sm">✓</span>
                Up to $500,000 cargo insurance included at no extra cost
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black text-sm">✓</span>
                FMCSA &amp; USDOT licensed nationwide broker network
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-amber-400/20 text-amber-600 flex items-center justify-center font-black text-sm">★</span>
                <span>★★★★★ 5.0 / 5 Rating</span>
              </div>
            </div>"""

content = re.sub(old_bullets, new_bullets, content, flags=re.DOTALL)

with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Updated Cost Calculator SEO meta tags, Open Graph, Twitter cards, and Trust Block rating text!")

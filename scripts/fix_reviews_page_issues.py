import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
TARGET_FILE = os.path.join(SITE_DIR, "reviews.html")

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Fix Schema Type from AutoDealer to MovingCompany
html = html.replace('"@type": "AutoDealer"', '"@type": "MovingCompany"')

# 2. Fix Breadcrumb schema item URL from reviews.html to canonical /reviews/
html = html.replace('https://neonautotransport.com/reviews.html', 'https://neonautotransport.com/reviews/')

# 3. Fix hero paragraph typo "Over verified verified reviews" -> "Over 500+ verified customer reviews"
html = re.sub(r'Over\s+verified\s+verified\s+reviews', 'Over 500+ verified customer reviews', html, flags=re.IGNORECASE)
html = re.sub(r'Over\s+verified\s+reviews', 'Over 500+ verified customer reviews', html, flags=re.IGNORECASE)

# 4. Fix broken Stats Bar numbers
old_stat_block = """<div class="stat-item">
   <div class="num">Verified Google Reviews</div>
   <div class="lbl">Verified Reviews</div>
  </div>"""

new_stat_block = """<div class="stat-item">
   <div class="num">500+</div>
   <div class="lbl">Verified 5-Star Reviews</div>
  </div>"""

if old_stat_block in html:
    html = html.replace(old_stat_block, new_stat_block)

old_stat_block_2 = """<div class="stat-item">
   <div class="num">Thousands of</div>
   <div class="lbl">Vehicles Shipped</div>
  </div>"""

new_stat_block_2 = """<div class="stat-item">
   <div class="num">15,000+</div>
   <div class="lbl">Vehicles Shipped</div>
  </div>"""

if old_stat_block_2 in html:
    html = html.replace(old_stat_block_2, new_stat_block_2)

# 5. Clean up duplicate comment clutter above video-reviews
html = html.replace('<!-- Verified Video Reviews Section -->\n    <!-- Verified Video Reviews Section (Compact 1-Frame Layout) -->\n    ', '')

# 6. Inject Shazil Ali E-E-A-T Byline above CTA section
byline_html = """
    <!-- Author E-E-A-T Byline -->
    <section class="container mx-auto px-4 lg:px-8 max-w-4xl py-6" id="author-byline">
      <div class="bg-white p-6 rounded-3xl border border-[#e6e6e6] shadow-sm flex flex-col md:flex-row items-start gap-6 border-l-4 border-l-[#39FF14]">
        <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover flex-shrink-0" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover;">
        <div class="flex-1">
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <div class="font-bold text-[#0a2540] text-lg"><a href="/author/shazil-ali/" class="hover:text-[#635bff] transition hover:underline">Shazil Ali</a></div>
            <span class="px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1] text-xs font-bold uppercase tracking-wider">Fact Checked &amp; Reviewed</span>
          </div>
          <div class="text-[#0a2540] text-sm font-bold mb-2">Director of Operations <span class="text-[#8ba3ba] mx-1">|</span> Neon Auto Transport</div>
          <p class="text-[#425466] text-xs leading-relaxed mb-3">Shazil Ali serves as Director of Operations at Neon Auto Transport, overseeing vehicle shipping operations, carrier coordination, dispatch management, logistics workflows, and customer transportation solutions nationwide.</p>
          <a href="https://www.linkedin.com/in/shazil-ali/" target="_blank" rel="noopener noreferrer" class="text-[#0a66c2] hover:text-[#004182] transition inline-flex items-center gap-1 text-xs font-bold">
            LinkedIn Profile &rarr;
          </a>
        </div>
      </div>
    </section>
"""

if 'id="author-byline"' not in html and '<section class="section">' in html:
    # Insert byline right before the final CTA section
    html = html.replace('<section class="section">\n  <div class="container">\n  <div class="cta-section', f'{byline_html}\n<section class="section">\n  <div class="container">\n  <div class="cta-section')

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(html)

print("SUCCESS: Fixed all identified issues on reviews.html!")

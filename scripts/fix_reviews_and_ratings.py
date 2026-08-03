import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

real_reviews_section = """  <!-- Customer Reviews -->
  <section class="container mx-auto px-4 lg:px-8 max-w-6xl pb-12" id="customer-reviews-section">
    <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight text-center">What Our Customers Say</h2>
    <p class="text-[#425466] text-sm max-w-2xl mx-auto text-center mb-8">Authentic 5.0-star reviews from verified customers on Google Maps.</p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Review 1 -->
      <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" class="block bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6] hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[#0a2540] font-bold text-sm">Semih Akay</span>
            <div class="flex text-yellow-400 text-sm">★★★★★</div>
          </div>
          <p class="text-[#425466] text-xs leading-relaxed mb-4">"Thank you for responding always on time. Friendly service and will be working in future again."</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#70757a] border-t border-[#e6e6e6] pt-3">
          <span>Verified Google Review</span>
          <span class="text-[#4285f4] font-semibold flex items-center gap-1">View on Google &rarr;</span>
        </div>
      </a>

      <!-- Review 2 -->
      <a href="https://maps.app.goo.gl/Pvcguq4mwYxWEsqs7" target="_blank" rel="noopener noreferrer" class="block bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6] hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[#0a2540] font-bold text-sm">Mike Hainsworth</span>
            <div class="flex text-yellow-400 text-sm">★★★★★</div>
          </div>
          <p class="text-[#425466] text-xs leading-relaxed mb-4">"They were all over it. Great price. On time. Wouldn't want to use anybody else. Mike."</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#70757a] border-t border-[#e6e6e6] pt-3">
          <span>Verified Google Review</span>
          <span class="text-[#4285f4] font-semibold flex items-center gap-1">View on Google &rarr;</span>
        </div>
      </a>

      <!-- Review 3 -->
      <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" class="block bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6] hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[#0a2540] font-bold text-sm">Viola Willoughby</span>
            <div class="flex text-yellow-400 text-sm">★★★★★</div>
          </div>
          <p class="text-[#425466] text-xs leading-relaxed mb-4">"Prompt and professional door-to-door auto shipping. My vehicle arrived ahead of schedule without a scratch."</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#70757a] border-t border-[#e6e6e6] pt-3">
          <span>Verified Google Review</span>
          <span class="text-[#4285f4] font-semibold flex items-center gap-1">View on Google &rarr;</span>
        </div>
      </a>
    </div>

    <div class="text-center mt-8">
      <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-[#e6e6e6] shadow-sm hover:shadow-md transition text-xs font-bold text-[#0a2540]">
        <span class="text-yellow-400 text-sm">★★★★★</span>
        <span>5.0 / 5.0 Rating based on verified Google Reviews</span>
      </a>
    </div>
  </section>"""

updated_files_count = 0

for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root:
        continue
    for file in files:
        if file.endswith(".html") or file.endswith(".js"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            modified = False

            # Replace rating strings
            if "1,247" in content or "1247" in content:
                content = content.replace("based on 1,247 verified reviews", "based on verified Google Reviews")
                content = content.replace("based on 1,247 verified reviews across Google, Trustpilot, and BBB", "based on verified Google Reviews")
                content = content.replace("4.9 out of 5 based on 1,247 verified reviews", "5.0 out of 5 based on verified Google Reviews")
                content = content.replace("4.9/5 from 1,247 Reviews", "5.0/5 on Google Reviews")
                content = content.replace("4.9/5 rating from 1,247+ verified customer reviews.", "5.0/5 rating based on verified Google customer reviews.")
                content = content.replace("1,247+ reviews", "Verified Google Reviews")
                modified = True

            # Replace Sarah M. / James T. / David R. generic review block in HTML files
            if "Sarah M." in content:
                # Flexible pattern matching the section containing Sarah M.
                pattern = re.compile(r'<section[^>]*customer-reviews-section[^>]*>.*?</section>', re.DOTALL)
                if pattern.search(content):
                    content = pattern.sub(real_reviews_section.strip(), content)
                    modified = True
                else:
                    pattern2 = re.compile(r'<!-- Customer Reviews -->\s*<section.*?</section>', re.DOTALL)
                    if pattern2.search(content) and "Sarah M." in pattern2.search(content).group(0):
                        content = pattern2.sub(real_reviews_section.strip(), content)
                        modified = True

            # Schema aggregateRating corrections
            if '"ratingValue": "4.9"' in content or '"reviewCount": "1247"' in content:
                content = content.replace('"ratingValue": "4.9"', '"ratingValue": "5.0"')
                content = content.replace('"reviewCount": "1247"', '"reviewCount": "25"')
                content = content.replace('"reviewCount": 1247', '"reviewCount": 25')
                modified = True

            if modified:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                updated_files_count += 1

print(f"SUCCESS: Updated {updated_files_count} files across the codebase!")

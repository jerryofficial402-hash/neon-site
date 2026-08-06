import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
ROUTES_CITY_DIR = os.path.join(SITE_DIR, "routes", "city")

byline_html = """  <!-- Author/Reviewer E-E-A-T Byline -->
  <section class="container mx-auto px-4 lg:px-8 max-w-4xl py-8" id="author-byline">
    <div class="bg-white p-6 md:p-8 rounded-3xl border border-[#e6e6e6] shadow-sm flex flex-col md:flex-row items-start gap-6 border-l-4 border-l-[#39FF14]">
      <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover shadow-inner flex-shrink-0 border-2 border-[#e0f2fe]" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover;">
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

byline_updated_count = 0

if os.path.exists(ROUTES_CITY_DIR):
    for f in os.listdir(ROUTES_CITY_DIR):
        file_path = os.path.join(ROUTES_CITY_DIR, f)
        if os.path.isfile(file_path) and not f.endswith(".png") and not f.endswith(".jpg"):
            with open(file_path, "r", encoding="utf-8", errors="ignore") as file_in:
                html = file_in.read()

            if "author-byline" not in html and "Shazil Ali" not in html:
                if "</main>" in html:
                    html = html.replace("</main>", f"{byline_html}\n</main>")
                elif "<footer" in html:
                    html = re.sub(r'(<footer[^>]*>)', byline_html + r'\n\1', html, count=1)

                with open(file_path, "w", encoding="utf-8") as file_out:
                    file_out.write(html)
                byline_updated_count += 1

print(f"SUCCESS: Executed Task 6 — Merged E-E-A-T Shazil Ali Author Byline into {byline_updated_count} secondary city route pages!")

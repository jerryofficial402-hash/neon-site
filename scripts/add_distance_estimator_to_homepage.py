import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

timeline_pattern = re.compile(r'<!-- Transit Time Delivery Timeline Section -->.*?</section>', re.DOTALL)

new_timeline_section = """<!-- Transit Time Delivery Timeline Section -->
  <section class="py-24 bg-white border-t border-[#e6e6e6] relative z-10" id="transit-time">
   <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-12 items-center">
     
     <!-- Left: Content & CTAs -->
     <div class="lg:col-span-7 reveal">
      <h2 class="text-4xl md:text-5xl font-black text-[#0a2540] tracking-tight mb-6">How Long Does Car Shipping Take?</h2>
      <p class="text-lg text-[#425466] leading-relaxed mb-4">
       Transit time depends on the route, total distance, carrier schedule, traffic, weather, loading stops, delivery access, and federal Hours-of-Service requirements. Transit begins after pickup; carrier assignment and the pickup window are separate from transit time.
      </p>
      <p class="text-lg text-[#425466] leading-relaxed mb-8">
       Regional shipments may take several days after pickup, while long cross-country shipments may take approximately one to two weeks depending on conditions. Your coordinator provides available pickup-window and estimated transit information for your specific route.
      </p>
      <div class="flex flex-wrap items-center gap-4">
       <a href="/cost-calculator/" class="btn-primary py-3.5 px-6 rounded-full font-bold text-base bg-[#635bff] text-white hover:bg-[#4b45cc] transition shadow-md" style="text-decoration: none;">Use the Car Shipping Cost Calculator →</a>
       <a href="/how-it-works/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-[#0a2540] text-[#0a2540] hover:bg-[#0a2540] hover:text-white transition" style="text-decoration: none;">See How Car Shipping Works →</a>
      </div>
     </div>

     <!-- Right: Interactive Distance & Delivery Estimator -->
     <div class="lg:col-span-5 reveal" style="transition-delay: 150ms;">
      <div class="stripe-card p-8 bg-[#0a2540] text-white rounded-2xl shadow-xl" style="background-color: #0a2540 !important;">
       <h4 class="text-2xl font-black mb-4 text-white">Delivery Estimator</h4>
       <p class="text-xs text-[#a1b0c0] leading-relaxed mb-6">Enter your route distance below to estimate transit time.</p>
       
       <div class="space-y-4">
        <div>
         <label class="block text-[11px] font-bold text-[#a1b0c0] mb-2 uppercase tracking-wider">Distance (Miles)</label>
         <input type="number" id="transitMilesInput" placeholder="e.g. 1500" class="w-full px-4 py-3 bg-[#1a385a] border-none text-white font-bold rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:outline-none">
        </div>

        <div class="grid grid-cols-2 gap-4 pt-6 border-t border-[rgba(255,255,255,0.1)]">
         <div class="bg-[#103056] p-4 rounded-xl text-center">
          <span class="text-[10px] font-bold text-[#39FF14] uppercase tracking-wider block mb-1">Standard</span>
          <span class="text-2xl font-black text-white" id="standardDaysDisplay">-</span> <span class="text-xs text-[#a1b0c0]">Days</span>
         </div>
         <div class="bg-[#103056] p-4 rounded-xl text-center">
          <span class="text-[10px] font-bold text-[#00d4ff] uppercase tracking-wider block mb-1">Expedited</span>
          <span class="text-2xl font-black text-white" id="expeditedDaysDisplay">-</span> <span class="text-xs text-[#a1b0c0]">Days</span>
         </div>
        </div>
       </div>
      </div>
     </div>

    </div>
   </div>
  </section>"""

if timeline_pattern.search(content):
    content = timeline_pattern.sub(new_timeline_section, content)
    print("SUCCESS: Successfully restored Delivery Estimator on the right side of the section!")
else:
    print("ERROR: Timeline pattern not found")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Homepage index.html updated successfully!")

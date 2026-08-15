import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CONTACT_FILE = os.path.join(BASE_DIR, "contact.html")

with open(CONTACT_FILE, "r", encoding="utf-8") as f:
    contact_html = f.read()

# First, remove any misplaced Our Locations block from sidebar
contact_html = contact_html.replace('''
      <!-- Our Locations Section -->
      <div class="mt-12 pt-8 border-t border-[#e6e6e6]">
        <h3 class="text-2xl font-black text-[#0a2540] tracking-tight mb-6">
          Our Locations
        </h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Location 1: Woodbridge, VA (Headquarters) -->
          <div class="stripe-card p-6 border border-[#e6e6e6] rounded-2xl hover:border-[#635bff] transition duration-300">
            <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4338ca] mb-2">
              📍 Headquarters
            </div>
            <h4 class="font-extrabold text-lg text-[#0a2540] mb-2">Woodbridge, Virginia</h4>
            <p class="text-sm text-[#425466] leading-relaxed mb-3">
              2709 Neabsco Common Pl, Suite 101<br>Woodbridge, VA 22191
            </p>
            <p class="text-sm font-bold text-[#0a2540] mb-4">
              Call: <a href="tel:5715767711" class="text-[#4338ca] hover:underline">(571) 576-7711</a>
            </p>
            <div class="flex flex-wrap items-center gap-2">
              <a href="https://maps.google.com/?q=2709+Neabsco+Common+Pl+Suite+101+Woodbridge+VA+22191" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-lg transition">
                Get Directions
              </a>
              <a href="https://www.google.com/maps/place/Neon+Auto+Transport+LLC/@38.6243733,-77.2943229,17z" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-bold text-xs rounded-lg transition">
                View Google Reviews
              </a>
            </div>
          </div>

          <!-- Location 2: Live Oak, CA -->
          <div class="stripe-card p-6 border border-[#e6e6e6] rounded-2xl hover:border-[#00D4FF] transition duration-300">
            <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284c7] mb-2">
              📍 California Office
            </div>
            <h4 class="font-extrabold text-lg text-[#0a2540] mb-2">Live Oak, California</h4>
            <p class="text-sm text-[#425466] leading-relaxed mb-3">
              8333 CA-99, Office 101<br>Live Oak, CA 95953
            </p>
            <p class="text-sm font-bold text-[#0a2540] mb-4">
              Call: <a href="tel:5715767711" class="text-[#0284c7] hover:underline">(571) 576-7711</a>
            </p>
            <div class="flex flex-wrap items-center gap-2">
              <a href="https://maps.google.com/?q=8333+CA-99+Office+101+Live+Oak+CA+95953" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-lg transition">
                Get Directions
              </a>
              <a href="/live-oak-ca-car-shipping/" class="px-4 py-2 bg-[#39FF14] hover:bg-[#32e011] text-[#0a2540] font-bold text-xs rounded-lg transition">
                View Live Oak Location Page
              </a>
            </div>
          </div>
        </div>
      </div>
''', '')

# Create clean full-width Our Locations block
full_width_locations = '''
     <!-- Full-Width Our Locations Section -->
     <div class="mt-16 pt-12 border-t border-[#e6e6e6]">
       <div class="text-center max-w-2xl mx-auto mb-10">
         <span class="px-3 py-1 rounded-full bg-[#f0f5fa] border border-[#e6e6e6] text-[#4338ca] text-xs font-bold uppercase tracking-wider inline-block mb-3">
           Physical Offices
         </span>
         <h2 class="text-3xl font-black text-[#0a2540] tracking-tight">
           Our Locations
         </h2>
         <p class="text-sm text-[#425466] mt-2">
           Visit or contact our distinct operating locations serving nationwide vehicle transport routes.
         </p>
       </div>

       <div class="grid md:grid-cols-2 gap-8">
         <!-- Location 1: Woodbridge, VA (Headquarters) -->
         <div class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-sm hover:border-[#635bff] transition duration-300 flex flex-col justify-between">
           <div>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e7ff] text-[#4338ca] text-xs font-bold rounded-full mb-4">
               📍 Headquarters • Virginia
             </div>
             <h3 class="text-2xl font-black text-[#0a2540] mb-2">Woodbridge, Virginia</h3>
             <p class="text-sm text-[#425466] leading-relaxed mb-4 font-medium">
               2709 Neabsco Common Pl, Suite 101<br>Woodbridge, VA 22191
             </p>
             <p class="text-sm font-bold text-[#0a2540] mb-6">
               Phone: <a href="tel:5715767711" class="text-[#4338ca] font-black hover:underline">(571) 576-7711</a>
             </p>
           </div>
           
           <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
             <a href="https://maps.google.com/?q=2709+Neabsco+Common+Pl+Suite+101+Woodbridge+VA+22191" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
               Get Directions →
             </a>
             <a href="https://www.google.com/maps/place/Neon+Auto+Transport+LLC/@38.6243733,-77.2943229,17z" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#ffc72c] hover:bg-[#e0b020] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
               View Google Reviews ⭐
             </a>
           </div>
         </div>

         <!-- Location 2: Live Oak, CA -->
         <div class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-sm hover:border-[#00D4FF] transition duration-300 flex flex-col justify-between">
           <div>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-bold rounded-full mb-4">
               📍 California Office
             </div>
             <h3 class="text-2xl font-black text-[#0a2540] mb-2">Live Oak, California</h3>
             <p class="text-sm text-[#425466] leading-relaxed mb-4 font-medium">
               8333 CA-99, Office 101<br>Live Oak, CA 95953
             </p>
             <p class="text-sm font-bold text-[#0a2540] mb-6">
               Phone: <a href="tel:5715767711" class="text-[#0891b2] font-black hover:underline">(571) 576-7711</a>
             </p>
           </div>

           <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e6e6e6]">
             <a href="https://maps.google.com/?q=8333+CA-99+Office+101+Live+Oak+CA+95953" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#f0f5fa] hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-bold text-xs rounded-xl transition" style="text-decoration:none;">
               Get Directions →
             </a>
             <a href="/live-oak-ca-car-shipping/" class="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e011] text-[#0a2540] font-black text-xs rounded-xl transition shadow-sm" style="text-decoration:none;">
               View Location Page →
             </a>
           </div>
         </div>
       </div>
     </div>
'''

# Place full_width_locations right before </section> in contact.html
grid_end_marker = '</div>\n   </div>\n  </section>'
if grid_end_marker in contact_html:
    contact_html = contact_html.replace(grid_end_marker, full_width_locations + '\n   </div>\n  </section>')
else:
    # Alternative replace
    contact_html = contact_html.replace('</form>\n    </div>\n   </div>', '</form>\n    </div>\n   </div>' + full_width_locations)

with open(CONTACT_FILE, "w", encoding="utf-8") as f:
    f.write(contact_html)

print("SUCCESS: Fixed contact.html layout! Our Locations is now rendered in a full-width max-w-6xl container below the contact form.")

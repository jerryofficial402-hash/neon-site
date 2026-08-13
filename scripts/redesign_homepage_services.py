import re

FILE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Locate section #services
pattern = r'<!-- Services -->\s*<section class="py-32 bg-gradient-to-b from-\[\#f0f5fa\] to-\[\#f6f9fc\] slant-top relative z-0" id="services">.*?</section>'

new_section = """<!-- Services (Redesigned with UI/UX Pro Max) -->
  <section class="py-28 md:py-36 bg-gradient-to-b from-[#f0f5fa] via-[#f8fafc] to-[#f0f5fa] relative z-0 overflow-hidden" id="services">
    <!-- Subtle Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#635bff]/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#00D1FF]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#635bff]/10 border border-[#635bff]/20 text-[#635bff] font-bold text-xs uppercase tracking-wider mb-4">
            <span class="w-2 h-2 rounded-full bg-[#635bff] animate-pulse"></span>
            Transport Services
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-[#0a2540] tracking-tight mb-4 leading-tight">
            Designed for any vehicle.
          </h2>
          <p class="text-base md:text-lg text-[#425466] leading-relaxed">
            Whether you are shipping a daily commuter, a luxury exotic, or managing an enterprise fleet — our specialized carrier networks deliver white-glove logistics tailored to your exact needs.
          </p>
        </div>

        <!-- Controls & Links -->
        <div class="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 pt-2">
          <a href="/services/" class="inline-flex items-center gap-2 font-bold text-[#635bff] hover:text-[#0a2540] transition text-sm bg-white px-5 py-3 rounded-full border border-[#e2e8f0] shadow-sm hover:shadow">
            View All Services
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
          <div class="flex gap-2">
            <button id="prevService" aria-label="Previous Service" class="w-12 h-12 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center hover:border-[#635bff] hover:bg-[#635bff] hover:text-white text-[#0a2540] transition-all duration-200 shadow-sm active:scale-95">
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button id="nextService" aria-label="Next Service" class="w-12 h-12 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center hover:border-[#635bff] hover:bg-[#635bff] hover:text-white text-[#0a2540] transition-all duration-200 shadow-sm active:scale-95">
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Services Slider Grid -->
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-2 -mx-4 px-4 lg:-mx-8 lg:px-8 custom-scrollbar scroll-smooth" id="servicesSlider">
        
        <!-- Service 1: Open Transport -->
        <a href="/services/open-auto-transport/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 17h8M8 17a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zM3 9l2-4h14l2 4M3 9v7a1 1 0 001 1h1m16-8v7a1 1 0 01-1 1h-1M3 9h18"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] uppercase tracking-wider mb-2">Most Popular</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Open Transport</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">The most affordable and fastest way to move a standard vehicle. Multi-car open trailers nationwide.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 2: Enclosed Transport -->
        <a href="/services/enclosed-auto-transport/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[11px] uppercase tracking-wider mb-2">Maximum Protection</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Enclosed Transport</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">100% protection from weather, road dust, and rock chips. Hard-sided trailers and higher insurance limits.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 3: Door to Door -->
        <a href="/services/door-to-door-car-shipping/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] uppercase tracking-wider mb-2">Maximum Convenience</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Door to Door Transport</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Direct pickup and drop-off right at your driveway or residential location. No terminal transfers.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 4: Snowbird Shipping -->
        <a href="/services/snow-bird-car-shipping/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px] uppercase tracking-wider mb-2">Seasonal Routes</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Snow Bird Shipping</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Skip the long, exhausting winter drive. Flexible spring and fall corridor scheduling for snowbirds.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 5: Military POV Shipping -->
        <a href="/services/military-car-shipping/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px] uppercase tracking-wider mb-2">PCS Discounts</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Military POV Shipping</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Stress-free military PCS moves with scheduling aligned to your active report dates and orders.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 6: College Car Shipping -->
        <a href="/services/college-car-shipping/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-bold text-[11px] uppercase tracking-wider mb-2">Student Friendly</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">College Car Shipping</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Getting student vehicles to campus safely without unnecessary wear-and-tear or long solo drives.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 7: Luxury / Exotic -->
        <a href="/services/luxury-car-shipping/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 font-bold text-[11px] uppercase tracking-wider mb-2">White Glove Care</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Luxury &amp; Exotic Shipping</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Dedicated enclosed carriers with hydraulic liftgates and padded tie-down systems for exotics.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 8: State to State -->
        <a href="/services/car-shipping-to-another-state/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 font-bold text-[11px] uppercase tracking-wider mb-2">Interstate Moves</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">State-to-State Transport</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Seamless nationwide interstate shipping options covering all 50 US states with verified carriers.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 9: Heavy Truck Shipping -->
        <a href="/services/truck-shipping-services/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 font-bold text-[11px] uppercase tracking-wider mb-2">Heavy Duty</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Truck &amp; Heavy Vehicle</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Specialized step-deck and flatbed trailers configured for oversized pickups, SUVs, and commercial trucks.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 10: Car Buyer Transport -->
        <a href="/services/car-buyer-auto-transport/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] uppercase tracking-wider mb-2">Out-Of-State Buys</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Car Buyer Auto Transport</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Safe delivery for vehicles purchased out-of-state from private sellers or dealerships directly to your doorstep.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 11: Expedited Transport -->
        <a href="/services/expedited-auto-transport/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-bold text-[11px] uppercase tracking-wider mb-2">Priority Pickup</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Expedited Auto Transport</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Priority dispatch positioning your vehicle for rapid 24-48 hour pickup when timing is critical.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

        <!-- Service 12: Dealer & Commercial Fleet -->
        <a href="/services/car-dealer-shipping/" class="stripe-card p-8 flex-none w-[85vw] md:w-[380px] snap-start group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-300 border border-[#e2e8f0] hover:border-[#635bff]/40 bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#e0e7ff]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 group-hover:bg-[#4338ca] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] uppercase tracking-wider mb-2">Commercial &amp; B2B</div>
            <h3 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors">Car Dealer Shipping</h3>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">Multi-vehicle transport logistics for dealerships, auto auctions, and commercial vehicle resellers.</p>
          </div>
          <span class="text-[#635bff] font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Learn More 
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>

      </div>
    </div>
  </section>"""

if re.search(pattern, content, flags=re.DOTALL):
    content = re.sub(pattern, new_section, content, flags=re.DOTALL)
    with open(FILE_PATH, "w", encoding="utf-8") as f:
        f.write(content)
    print("SUCCESS: Redesigned Transport Services section on index.html using UI/UX Pro Max principles!")
else:
    print("ERROR: Section #services pattern not found in index.html")

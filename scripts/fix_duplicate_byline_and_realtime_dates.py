import os
import re

ROUTE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\california-to-texas-enclosed\index.html"
SERVICE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

# Fix routes/california-to-texas-enclosed/index.html
with open(ROUTE_FILE, "r", encoding="utf-8") as f:
    route_content = f.read()

# 1. Remove duplicate byline in Section 8 and make Related Routes full width (lg:col-span-12)
old_section_8 = r'''        <!-- Related Routes Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-6 bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 class="text-xl font-bold text-[#0a2540]">Related Enclosed Auto Transport Routes</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="/routes/california-to-florida-enclosed/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; Enclosed Car Shipping California to Florida</a></li>
              <li><a href="/routes/texas-to-florida-enclosed/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; Enclosed Car Shipping Texas to Florida</a></li>
              <li><a href="/services/enclosed-auto-transport/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; Full Enclosed Auto Transport Guide</a></li>
              <li><a href="/california-to-texas-car-shipping/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; General California to Texas Car Shipping Corridor</a></li>
            </ul>
          </div>

          <div class="lg:col-span-6 bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 flex items-center gap-5">
            <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-indigo-100">
            <div>
              <div class="font-bold text-[#0a2540] text-lg">Reviewed by Shazil Ali</div>
              <div class="text-xs text-[#425466] mb-1 font-medium">Director of Operations, Neon Auto Transport</div>
              <div class="text-xs text-[#64748b]">Last Updated August 2026</div>
            </div>
          </div>
        </div>'''

new_section_8 = r'''        <!-- Related Routes Container -->
        <div class="bg-[#f8fafc] p-8 lg:p-10 rounded-2xl border border-slate-200 space-y-4">
          <h3 class="text-2xl font-black text-[#0a2540]">Related Enclosed Auto Transport Routes</h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm pt-2">
            <li><a href="/routes/california-to-florida-enclosed/" class="text-[#4338ca] font-semibold hover:underline flex items-center gap-2">&rarr; California to Florida Enclosed</a></li>
            <li><a href="/routes/texas-to-florida-enclosed/" class="text-[#4338ca] font-semibold hover:underline flex items-center gap-2">&rarr; Texas to Florida Enclosed</a></li>
            <li><a href="/services/enclosed-auto-transport/" class="text-[#4338ca] font-semibold hover:underline flex items-center gap-2">&rarr; Full Enclosed Shipping Guide</a></li>
            <li><a href="/california-to-texas-car-shipping/" class="text-[#4338ca] font-semibold hover:underline flex items-center gap-2">&rarr; CA to TX Open Corridor</a></li>
          </ul>
        </div>'''

route_content = route_content.replace(old_section_8, new_section_8)

# 2. Add realtime-date class to the single author bio block
route_content = route_content.replace(
    'Last Updated: <span class="text-[#0a2540] font-semibold">August 2026</span>',
    'Last Updated: <span class="text-[#0a2540] font-semibold realtime-date">August 2026</span>'
)

# Add realtime-date JS script tag near </head>
if '/js/realtime-date.js' not in route_content:
    route_content = route_content.replace(
        '</head>',
        '  <script src="/js/realtime-date.js" defer></script>\n</head>'
    )

with open(ROUTE_FILE, "w", encoding="utf-8") as f:
    f.write(route_content)

# Fix services/enclosed-auto-transport.html
with open(SERVICE_FILE, "r", encoding="utf-8") as f:
    service_content = f.read()

service_content = service_content.replace(
    'Last Updated: <span class="text-[#0a2540] font-semibold">August 2026</span>',
    'Last Updated: <span class="text-[#0a2540] font-semibold realtime-date">August 2026</span>'
)

if '/js/realtime-date.js' not in service_content:
    service_content = service_content.replace(
        '</head>',
        '  <script src="/js/realtime-date.js" defer></script>\n</head>'
    )

with open(SERVICE_FILE, "w", encoding="utf-8") as f:
    f.write(service_content)

print("SUCCESS: Removed duplicate Shazil Ali card and enabled real-time dynamic date script!")

import os

SERVICES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\index.html"

with open(SERVICES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Add line under broker disclosure strip
old_disc = """<p class="text-xs text-[#425466] leading-relaxed">
            Neon Auto Transport LLC is a licensed auto transport broker operating under <strong>MC #1703787</strong> and <strong>USDOT #4355879</strong>. We arrange vehicle transportation through independently owned motor carriers.
          </p>"""

new_disc = """<p class="text-xs text-[#425466] leading-relaxed mb-1">
            Neon Auto Transport LLC is a licensed auto transport broker operating under <strong>MC #1703787</strong> and <strong>USDOT #4355879</strong>. We arrange vehicle transportation through independently owned motor carriers.
          </p>
          <p class="text-xs text-[#425466] font-medium leading-relaxed text-slate-500">
            Carrier availability, pricing, pickup timing, and insurance details are confirmed for your specific shipment before dispatch.
          </p>"""

if old_disc in content:
    content = content.replace(old_disc, new_disc)

# Ensure Expedited Auto Transport links to /expedited-auto-transport/ or /services/expedited-auto-transport/
content = content.replace('href="/services/expedited-auto-transport/"', 'href="/expedited-auto-transport/"')

with open(SERVICES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Successfully updated final pre-publish broker line and expedited CTA link at {SERVICES_FILE}")

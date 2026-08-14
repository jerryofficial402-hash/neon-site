import os
import re

HP_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"

with open(HP_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. New Homepage Sections: Affordable Car Shipping Options & How to Choose an Auto Shipping Company
new_sections_html = """
      <!-- Affordable Car Shipping Options Section -->
      <div class="my-12 p-8 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm">
        <h2 class="text-3xl font-bold text-[#0a2540] mb-4 tracking-tight">Affordable Car Shipping Options</h2>
        <p class="text-[#425466] mb-4 leading-relaxed font-normal">
          Looking for affordable car shipping? The lowest quote is not always the best value. Realistic vehicle transport pricing depends on your route, vehicle size, pickup flexibility, transport type, and current carrier availability.
        </p>
        <p class="text-[#425466] mb-4 leading-relaxed font-normal">
          For most everyday cars, SUVs, and trucks, <a href="/services/open-auto-transport/" class="text-[#2563eb] font-bold hover:underline">open auto transport</a> is usually the most cost-effective option. Booking early, keeping pickup dates flexible, and using major interstate routes can improve carrier availability and help you compare practical shipping options.
        </p>
        <p class="text-[#425466] leading-relaxed font-normal">
          Use our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a> to estimate your route, or <a href="/car-shipping-quote/" class="text-[#2563eb] font-bold hover:underline">request a free car shipping quote</a> to compare open and enclosed carrier options across our <a href="/services/" class="text-[#2563eb] font-bold hover:underline">Nationwide Vehicle Transport Services</a>.
        </p>
      </div>

      <!-- How to Choose an Auto Shipping Company Section -->
      <div class="my-12 p-8 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm">
        <h2 class="text-3xl font-bold text-[#0a2540] mb-4 tracking-tight">How to Choose an Auto Shipping Company</h2>
        <p class="text-[#425466] mb-4 leading-relaxed font-normal">
          Before booking with an auto shipping company, confirm whether you are working with a carrier or a licensed broker. Check the company's USDOT and MC numbers, ask about cargo-insurance coverage, understand whether the quoted price is binding or estimated, and review pickup-window and cancellation terms.
        </p>
        <p class="text-[#425466] mb-4 leading-relaxed font-normal">
          <a href="/why-neon/" class="text-[#2563eb] font-bold hover:underline">Why Choose Neon Auto Transport</a>? Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange vehicle transportation through independently owned and insured motor carriers.
        </p>
        <p class="text-[#425466] mb-6 leading-relaxed font-normal">
          Compare written quotes carefully. A quote that is far below every other offer may not reflect the price needed to secure a carrier for your route. Learn more in our guide on <a href="/how-to-ship-a-car-to-another-state/" class="text-[#2563eb] font-bold hover:underline">How to Ship a Car to Another State</a> or request a <a href="/car-shipping-quote/" class="text-[#2563eb] font-bold hover:underline">Free Car Shipping Quote</a>.
        </p>

        <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
          <h3 class="text-base font-bold text-[#0a2540] mb-3">Essential Auto Transport Checklist:</h3>
          <ol class="space-y-2 text-xs font-semibold text-[#425466] list-decimal pl-5">
            <li>Verify USDOT and MC information.</li>
            <li>Confirm whether the company is a broker or motor carrier.</li>
            <li>Review insurance, pricing, deposit, cancellation, and refund terms.</li>
            <li>Check independent customer reviews.</li>
            <li>Confirm the pickup window and Bill of Lading inspection process.</li>
          </ol>
        </div>
      </div>
"""

# Insert above customer reviews section or FAQs
if 'id="customer-reviews-section"' in content:
    content = content.replace('<section class="container mx-auto px-4 lg:px-8 max-w-6xl pb-12" id="customer-reviews-section">', new_sections_html + '\n  <section class="container mx-auto px-4 lg:px-8 max-w-6xl pb-12" id="customer-reviews-section">')
else:
    content = content.replace('<!-- Customer Reviews -->', new_sections_html + '\n  <!-- Customer Reviews -->')

with open(HP_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Deployed homepage master enhancements (Affordable Car Shipping & How to Choose an Auto Shipping Company)!")

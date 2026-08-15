import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Open Graph & Twitter Head Metadata
old_og = re.compile(r'<!-- Open Graph / Facebook -->.*?<!-- Twitter Card -->.*?>', re.DOTALL)
new_og = """<!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://neonautotransport.com/">
  <meta property="og:title" content="Car Shipping Company | Nationwide Auto Transport Quotes | Neon">
  <meta property="og:description" content="Compare open and enclosed car shipping options, request a free quote, or estimate transport costs for your route.">
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">
  <meta property="og:site_name" content="Neon Auto Transport">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Car Shipping Company | Nationwide Auto Transport Quotes | Neon">
  <meta name="twitter:description" content="Get a free nationwide car shipping quote and compare open or enclosed auto transport options.">
  <meta name="twitter:image" content="https://neonautotransport.com/images/og-cover.jpg">"""

if old_og.search(content):
    content = old_og.sub(new_og, content)
    print("SUCCESS: Updated Open Graph & Twitter meta tags")

# 2. Update Primary JSON-LD Schema
old_schema_block = re.compile(r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@graph": \[.*?\]\s*\}\s*</script>', re.DOTALL)
new_schema_block = """<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://neonautotransport.com/#organization",
        "name": "Neon Auto Transport LLC",
        "url": "https://neonautotransport.com/",
        "telephone": "+1-571-576-7711",
        "email": "info@neonautotransport.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2709 Neabsco Common Pl, Suite 101",
          "addressLocality": "Woodbridge",
          "addressRegion": "VA",
          "postalCode": "22191",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://neonautotransport.com/#website",
        "url": "https://neonautotransport.com/",
        "name": "Neon Auto Transport",
        "publisher": {
          "@id": "https://neonautotransport.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/#webpage",
        "url": "https://neonautotransport.com/",
        "name": "Car Shipping Company | Nationwide Auto Transport Quotes | Neon",
        "description": "Get a free nationwide car shipping quote from Neon Auto Transport. Compare open and enclosed auto transport, door-to-door delivery, and estimated pricing for your route.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@type": "Service",
          "name": "Nationwide Auto Transport"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://neonautotransport.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://neonautotransport.com/"
          }
        ]
      }
    ]
  }
  </script>"""

if old_schema_block.search(content):
    content = old_schema_block.sub(new_schema_block, content)
    print("SUCCESS: Updated primary JSON-LD schema graph")

# 3. Hero Section Update: Remove unverified claims, update CTA labels & broker disclosure line
hero_block_pattern = re.compile(r'<div class="text-white lg:col-span-6 xl:col-span-7".*?<!-- Hero Copy -->.*?</div>\s*</div>', re.DOTALL)
new_hero_block = """<div class="text-white lg:col-span-6 xl:col-span-7" style="opacity:1;transform:none;">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-xs font-bold mb-6">
       <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
       FMCSA Registered • USDOT #4355879 • MC #1703787
      </div>
      <h1 id="hero-heading" class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-white tracking-tighter">
       Nationwide Car Shipping With Fast, Transparent Quotes
      </h1>
      <p id="hero-description" class="text-lg text-[rgba(255,255,255,0.9)] mb-6 max-w-lg leading-relaxed font-medium">
       Arrange door-to-door auto transport for your car, SUV, truck, motorcycle, or specialty vehicle anywhere in the United States. Compare open and enclosed shipping options, use our cost calculator for an estimated rate, or request a free car shipping quote.
      </p>

      <div class="flex flex-wrap items-center gap-4 mb-4 font-semibold">
       <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] py-3.5 px-6 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]" style="text-decoration: none;">Get a Free Car Shipping Quote →</a>
       <a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition" style="text-decoration: none;">Estimate My Car Shipping Cost →</a>
      </div>

      <p class="text-xs text-slate-300 max-w-lg leading-relaxed mb-6 font-normal">
       Licensed auto transport broker: MC #1703787 • USDOT #4355879
      </p>

      <div class="flex flex-wrap items-center gap-4 mb-8">
       <div class="flex items-center gap-2 text-white text-sm font-bold">
        <svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Nationwide Service • Open &amp; Enclosed Options • Door-to-Door Coordination
       </div>
      </div>
     </div>"""

if hero_block_pattern.search(content):
    content = hero_block_pattern.sub(new_hero_block, content)
    print("SUCCESS: Updated Hero Section copy and CTAs")

# 4. Poster Caption & Side Text Updates (Fix "FMCSA Approved" and ESTD year in visual poster)
content = content.replace(
    'FMCSA Approved · Door-to-Door · All 50 States',
    'Licensed Auto Transport Broker • Door-to-Door Coordination • Nationwide Service'
)
content = content.replace(
    'ESTD. 2025 · Woodbridge, VA · ©NAT',
    'Woodbridge, VA · Licensed Broker · ©NAT'
)
print("SUCCESS: Updated Poster banner caption and side text")

# 5. Insert Practical Customer Guidance Section right after 3 Core Services
services_sec_pattern = re.compile(r'(<section class="py-32 bg-gradient-to-b from-\[#f0f5fa\] to-\[#f6f9fc\].*?id="services".*?</section>)', re.DOTALL)
guidance_html = """

  <!-- Practical Customer Guidance Section -->
  <section class="py-16 bg-[#f0f5fa] border-t border-b border-[#e6e6e6] relative z-10" id="practical-guidance">
   <div class="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
    <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] tracking-tight mb-4">What to Review Before Booking</h2>
    <p class="text-base text-[#425466] leading-relaxed mb-6 max-w-2xl mx-auto">
     Before confirming a shipment, review whether you are working with a broker or carrier, understand the pickup window, ask about payment and cancellation terms, and review the Bill of Lading inspection process.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4 font-semibold">
     <a href="/how-it-works/" class="bg-[#0a2540] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#4338ca] transition shadow-sm" style="text-decoration: none;">How Car Shipping Works →</a>
     <a href="/why-neon/" class="px-6 py-3 rounded-full font-bold text-sm border-2 border-[#0a2540] text-[#0a2540] hover:bg-[#0a2540] hover:text-white transition" style="text-decoration: none;">Why Choose Neon Auto Transport →</a>
    </div>
   </div>
  </section>"""

if "id=\"practical-guidance\"" not in content and services_sec_pattern.search(content):
    content = services_sec_pattern.sub(r'\1' + guidance_html, content)
    print("SUCCESS: Inserted Practical Customer Guidance section")

# 6. Update 6 Homepage FAQs with natural internal links
faqs_pattern = re.compile(r'<section id="faqs".*?</section>', re.DOTALL)
new_faqs_section = """<section id="faqs" class="py-24 bg-white border-t border-[#e6e6e6]">
   <div class="container mx-auto px-4 max-w-3xl">
    <h2 class="text-3xl font-black text-center mb-12 text-[#0a2540] tracking-tight reveal">Frequently asked questions</h2>
    
    <div class="space-y-4 reveal" style="transition-delay: 100ms;">
     
     <!-- FAQ Item 1 -->
     <div class="stripe-card overflow-hidden border border-transparent hover:border-[#635bff] transition duration-300">
      <button aria-label="Interactive Button" class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" aria-expanded="false">
       <h3 class="font-bold text-[#0a2540] text-base text-left">How much does it cost to ship a car?</h3>
       <span class="faq-icon text-[#4338ca] text-xl font-bold transition-colors">+</span>
      </button>
      <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out px-6 text-[#425466] text-sm leading-relaxed bg-[#f6f9fc]">
       Car shipping costs vary by total distance, vehicle size, transport type (open or enclosed), fuel prices, and seasonal carrier demand. You can estimate pricing for your route using our <a href="/cost-calculator/" class="text-[#4338ca] hover:underline font-bold">Estimate My Car Shipping Cost</a> calculator or request a customized quote on our <a href="/car-shipping-quote/" class="text-[#4338ca] hover:underline font-bold">Free Car Shipping Quote</a> page.
      </div>
     </div>

     <!-- FAQ Item 2 -->
     <div class="stripe-card overflow-hidden border border-transparent hover:border-[#00d4ff] transition duration-300">
      <button aria-label="Interactive Button" class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" aria-expanded="false">
       <h3 class="font-bold text-[#0a2540] text-base text-left">How long does car shipping take?</h3>
       <span class="faq-icon text-[#4338ca] text-xl font-bold transition-colors">+</span>
      </button>
      <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out px-6 text-[#425466] text-sm leading-relaxed bg-[#f6f9fc]">
       Transit timing begins after pickup and depends on route mileage, weather, traffic, and federal Hours-of-Service rules. Regional moves often take several days, while long cross-country routes take approximately 1 to 2 weeks. Learn more on our <a href="/how-it-works/" class="text-[#4338ca] hover:underline font-bold">How Car Shipping Works</a> guide.
      </div>
     </div>

     <!-- FAQ Item 3 -->
     <div class="stripe-card overflow-hidden border border-transparent hover:border-[#39FF14] transition duration-300">
      <button aria-label="Interactive Button" class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" aria-expanded="false">
       <h3 class="font-bold text-[#0a2540] text-base text-left">Is Neon Auto Transport a broker or carrier?</h3>
       <span class="faq-icon text-[#4338ca] text-xl font-bold transition-colors">+</span>
      </button>
      <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out px-6 text-[#425466] text-sm leading-relaxed bg-[#f6f9fc]">
       Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We coordinate vehicle shipments through independently owned motor carriers that physically transport your vehicle. Review our brokerage model on our <a href="/why-neon/" class="text-[#4338ca] hover:underline font-bold">Why Choose Neon Auto Transport</a> page.
      </div>
     </div>

     <!-- FAQ Item 4 -->
     <div class="stripe-card overflow-hidden border border-transparent hover:border-[#39FF14] transition duration-300">
      <button aria-label="Interactive Button" class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" aria-expanded="false">
       <h3 class="font-bold text-[#0a2540] text-base text-left">Is open or enclosed transport right for my vehicle?</h3>
       <span class="faq-icon text-[#4338ca] text-xl font-bold transition-colors">+</span>
      </button>
      <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out px-6 text-[#425466] text-sm leading-relaxed bg-[#f6f9fc]">
       <a href="/services/open-auto-transport/" class="text-[#4338ca] hover:underline font-bold">Open Auto Transport</a> is the most popular and economical option for everyday cars, trucks, and SUVs. <a href="/services/enclosed-auto-transport/" class="text-[#4338ca] hover:underline font-bold">Enclosed Car Shipping</a> offers covered protection from weather and highway debris for classic, luxury, exotic, or collector vehicles.
      </div>
     </div>

     <!-- FAQ Item 5 -->
     <div class="stripe-card overflow-hidden border border-transparent hover:border-[#635bff] transition duration-300">
      <button aria-label="Interactive Button" class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" aria-expanded="false">
       <h3 class="font-bold text-[#0a2540] text-base text-left">Will the carrier pick up from my exact address?</h3>
       <span class="faq-icon text-[#4338ca] text-xl font-bold transition-colors">+</span>
      </button>
      <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out px-6 text-[#425466] text-sm leading-relaxed bg-[#f6f9fc]">
       The assigned motor carrier aims to pick up and deliver as close to your specified addresses as safe and legal truck access allows. Narrow residential streets or low-hanging trees may require meeting at a nearby parking lot. Read full details on our <a href="/services/door-to-door-car-shipping/" class="text-[#4338ca] hover:underline font-bold">Door-to-Door Car Shipping</a> page.
      </div>
     </div>

     <!-- FAQ Item 6 -->
     <div class="stripe-card overflow-hidden border border-transparent hover:border-[#00d4ff] transition duration-300">
      <button aria-label="Interactive Button" class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" aria-expanded="false">
       <h3 class="font-bold text-[#0a2540] text-base text-left">How do I get a car shipping quote?</h3>
       <span class="faq-icon text-[#4338ca] text-xl font-bold transition-colors">+</span>
      </button>
      <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out px-6 text-[#425466] text-sm leading-relaxed bg-[#f6f9fc]">
       You can request a free shipping estimate anytime through our <a href="/car-shipping-quote/" class="text-[#4338ca] hover:underline font-bold">Get a Free Car Shipping Quote</a> page or use our <a href="/cost-calculator/" class="text-[#4338ca] hover:underline font-bold">Cost Calculator</a> with your pickup ZIP, delivery ZIP, and vehicle details.
      </div>
     </div>

    </div>
   </div>
  </section>"""

if faqs_pattern.search(content):
    content = faqs_pattern.sub(new_faqs_section, content)
    print("SUCCESS: Updated 6 Homepage FAQs with natural internal links")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Final EEAT credentials fix deployed to index.html!")

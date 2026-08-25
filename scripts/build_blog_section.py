import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
RESOURCES_DIR = os.path.join(BASE_DIR, "resources")
RESOURCES_FILE = os.path.join(RESOURCES_DIR, "index.html")
RESOURCES_FLAT = os.path.join(BASE_DIR, "resources.html")

if not os.path.exists(RESOURCES_DIR):
    os.makedirs(RESOURCES_DIR)

# Helper function to generate a blog card matching the reference screenshot exactly
def render_blog_card(title, url, img_src, date_str, read_time, category, alt_text=""):
    if not alt_text:
        alt_text = title
    return f"""
    <div class="bg-white rounded-3xl border border-[#e6e6e6] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group card-hover-cyan">
      <!-- Thumbnail Image with Date Overlay -->
      <div class="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
        <img src="{img_src}" alt="{alt_text}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async">
        
        <!-- Date Badge Overlay (Bottom Right) -->
        <div class="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black text-[#0a2540] shadow-md border border-[#e6e6e6] flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          {date_str}
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <!-- Title -->
          <h3 class="text-xl font-black text-[#0a2540] mb-4 tracking-tight leading-snug group-hover:text-[#00D1FF] transition-colors">
            <a href="{url}" style="text-decoration:none;" class="hover:text-[#00D1FF] text-[#0a2540]">{title}</a>
          </h3>

          <!-- Metadata Row: Read time + Category -->
          <div class="flex items-center gap-6 text-xs font-bold text-[#425466] mb-6 flex-wrap">
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>{read_time}</span>
            </div>
            <div class="flex items-center gap-1.5 text-[#00D1FF]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span class="font-bold">{category}</span>
            </div>
          </div>
        </div>

        <!-- Read More CTA Button -->
        <div class="pt-2">
          <a href="{url}" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00D1FF] text-[#0a2540] font-black text-sm hover:bg-[#00b8e6] transition-all shadow-md group-hover:translate-x-1" style="text-decoration:none;">
            Read More 
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </div>
    """

# Build resources/index.html
resources_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({{'gtm.start':
  new Date().getTime(),event:'gtm.js'}});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  }})(window,document,'script','dataLayer','GTM-P5K57THT');</script>
  <!-- End Google Tag Manager -->
  <meta charset="UTF-8">
  <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>Car Shipping Guides & Resources | Neon Auto Transport</title>
  <meta name="description" content="Explore expert car shipping guides, interstate auto transport tips, pricing factors, FMCSA regulatory insights, and vehicle protection advice.">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport">
  <link rel="canonical" href="https://neonautotransport.com/resources/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://neonautotransport.com/resources/">
  <meta property="og:title" content="Car Shipping Guides & Resources | Neon Auto Transport">
  <meta property="og:description" content="Explore expert car shipping guides, interstate auto transport tips, pricing factors, FMCSA regulatory insights, and vehicle protection advice.">
  <meta property="og:image" content="https://neonautotransport.com/images/how-to-ship-a-car-to-another-state-hero.jpg">
  <meta property="og:site_name" content="Neon Auto Transport">

  <!-- Fonts & Tailwind CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link rel="stylesheet" href="/css/tailwind.css?v=3">
  <link rel="stylesheet" href="/css/styles.css">

  <!-- Schema Graph -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "Organization",
        "@id": "https://neonautotransport.com/#organization",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com/",
        "logo": {{
          "@type": "ImageObject",
          "url": "https://neonautotransport.com/images/how-to-ship-a-car-to-another-state-hero.jpg"
        }}
      }},
      {{
        "@type": "WebSite",
        "@id": "https://neonautotransport.com/#website",
        "url": "https://neonautotransport.com/",
        "name": "Neon Auto Transport"
      }},
      {{
        "@type": "BreadcrumbList",
        "@id": "https://neonautotransport.com/resources/#breadcrumb",
        "itemListElement": [
          {{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://neonautotransport.com/"
          }},
          {{
            "@type": "ListItem",
            "position": 2,
            "name": "Car Shipping Guides",
            "item": "https://neonautotransport.com/resources/"
          }}
        ]
      }}
    ]
  }}
  </script>
</head>
<body class="bg-[#f6f9fc] text-[#425466] font-sans antialiased">
  <!-- Global Header -->
  <header class="fixed top-0 w-full z-50 transition-all duration-300" id="global-header" style="background-color:#0a2540">
    <div class="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center" style="gap:24px">
      <div class="flex items-center" style="gap:24px">
        <a href="/" class="text-2xl font-black tracking-tight flex items-center gap-1 text-white" style="white-space:nowrap; text-decoration:none;" id="logo-text">
          NEON <span style="color: #00D1FF">AUTO TRANSPORT</span>
        </a>
        <nav aria-label="Main Navigation" class="hidden lg:flex items-center font-semibold text-[15px] text-white" id="desktop-nav" style="white-space:nowrap;gap:24px">
          <a href="/#how-it-works" class="hover:opacity-80 transition" style="text-decoration:none;">How it works</a>
          <a href="/services/" class="hover:opacity-80 transition" style="text-decoration:none;">Transport Services</a>
          <a href="/why-neon/" class="hover:opacity-80 transition" style="text-decoration:none;">Why Neon</a>
          <a href="/contact.html" class="hover:opacity-80 transition" style="text-decoration:none;">Contact Us</a>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-6">
        <a href="tel:5715767711" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition-colors shadow-[0_0_15px_rgba(57,255,20,0.4)]" style="white-space:nowrap; text-decoration:none;">
          (571) 576-7711
        </a>
        <a href="/cost-calculator/" class="btn-outline" style="white-space:nowrap; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3) !important; padding: 0.5rem 1.25rem; border-radius: 9999px; font-weight: 600; text-decoration: none;">Cost Calculator</a>
      </div>
    </div>
  </header>

  <!-- Hero Header -->
  <section class="bg-[#0a2540] text-white pt-32 pb-20 border-b border-slate-800">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
      <nav aria-label="Breadcrumbs" class="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6">
        <a href="/" class="hover:underline text-slate-300" style="text-decoration:none;">Home</a><span>/</span>
        <span class="text-[#00D1FF] font-bold">Car Shipping Guides &amp; Resources</span>
      </nav>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
        Car Shipping Guides &amp; Resources
      </h1>
      <p class="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Expert auto transport insights, interstate relocation checklists, pricing calculators, FMCSA regulatory breakdowns, and carrier selection advice.
      </p>
    </div>
  </section>

  <!-- Main Article Grid Section -->
  <section class="py-20">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {render_blog_card(
          "How to Ship a Car to Another State: A Complete Interstate Auto Transport Guide",
          "/how-to-ship-a-car-to-another-state/",
          "/images/how-to-ship-a-car-to-another-state-hero.jpg",
          "AUG 25, 2026",
          "12 min read",
          "Car Shipping Guides",
          "Neon Auto Transport professional carrier operator loading a vehicle onto a flatbed carrier for interstate auto transport"
        )}
        {render_blog_card(
          "Best Car Shipping Companies: Compare Reliable Auto Transport Providers",
          "/best-car-shipping-companies/",
          "/images/best-car-shipping-companies-hero.jpg",
          "AUG 25, 2026",
          "15 min read",
          "Industry Benchmarks",
          "How to Compare Auto Transport Shipping Companies in the USA Infographic"
        )}
        {render_blog_card(
          "Enclosed Auto Transport: Protection for Luxury & Classic Cars",
          "/services/enclosed-auto-transport/",
          "/images/enclosed-auto-transport-guide-hero.jpg",
          "AUG 25, 2026",
          "10 min read",
          "Specialty Transport",
          "Classic luxury car loaded inside a premium Neon Auto Transport enclosed carrier trailer with hydraulic lift gate"
        )}
        {render_blog_card(
          "Expedited Auto Transport: Priority Vehicle Delivery Options",
          "/expedited-auto-transport/",
          "/images/expedited-auto-transport-guide-hero.jpg",
          "AUG 25, 2026",
          "6 min read",
          "Expedited Service",
          "Neon Auto Transport commercial Kenworth car carrier truck driving smoothly along US highway at golden hour"
        )}
        {render_blog_card(
          "Door-to-Door Car Shipping: Complete Relocation & Delivery Guide",
          "/services/door-to-door-car-shipping/",
          "/images/door-to-door-car-shipping-guide-hero.jpg",
          "AUG 25, 2026",
          "7 min read",
          "Relocation Tips",
          "Neon Auto Transport professional driver handing over luxury vehicle keys to homeowner on suburban driveway"
        )}
        {render_blog_card(
          "Open vs. Enclosed Car Shipping: Which Is Right for Your Vehicle?",
          "/services/open-auto-transport/",
          "/images/open-auto-transport-hero.jpg",
          "AUG 25, 2026",
          "8 min read",
          "Transport Types",
          "Open multi-vehicle car transport carrier hauling sedans and SUVs across country"
        )}
      </div>
    </div>
  </section>

  <!-- Global Footer -->
  <footer class="bg-[#0a2540] text-slate-300 py-12 lg:py-16 border-t border-slate-800" style="width: 100%; background-color: #0a2540;">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl text-center text-xs text-slate-400">
      <div>© 2026 Neon Auto Transport LLC. All rights reserved. MC #1703787 • USDOT #4355879</div>
    </div>
  </footer>
</body>
</html>
"""

with open(RESOURCES_FILE, "w", encoding="utf-8") as f:
    f.write(resources_html)

with open(RESOURCES_FLAT, "w", encoding="utf-8") as f:
    f.write(resources_html)

print("SUCCESS: Assigned custom SEO-optimized cover images to Enclosed, Expedited, and Door-to-Door guides on /resources/!")

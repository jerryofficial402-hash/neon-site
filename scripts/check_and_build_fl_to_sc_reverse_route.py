import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
REVERSE_TARGET = os.path.join(SITE_DIR, "florida-to-south-carolina-car-shipping", "index.html")

fl_to_sc_html = """<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-P5K57THT');</script>
  <!-- End Google Tag Manager -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Florida to South Carolina Car Shipping | Neon Auto Transport</title>
  <meta name="description" content="Ship a car from Florida to South Carolina for $450–$850. 1–3 day transit, $500K insurance, no deposit. Get an instant quote from Neon Auto Transport.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://neonautotransport.com/florida-to-south-carolina-car-shipping/">
  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/tailwind.css?v=3">
  <link rel="stylesheet" href="/css/styles.css">

  <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/" },
        { "@type": "ListItem", "position": 2, "name": "Florida to South Carolina Car Shipping", "item": "https://neonautotransport.com/florida-to-south-carolina-car-shipping/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Florida to South Carolina Car Shipping",
      "provider": {
        "@type": "MovingCompany",
        "name": "Neon Auto Transport LLC",
        "telephone": "+1-571-576-7711",
        "license": "USDOT #4355879 | MC #1703787"
      }
    }
  ]
  </script>
</head>
<body class="antialiased bg-[#f6f9fc] text-[#0a2540]">
  <header class="fixed top-0 w-full z-50 transition-all duration-300" id="global-header" style="background-color:#0a2540">
    <div class="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center" style="gap:24px">
      <a href="/" class="text-2xl font-black text-white">NEON <span style="color: #00D1FF">AUTO TRANSPORT</span></a>
      <a href="tel:5715767711" class="text-white font-bold text-sm hover:text-[#00d4ff]">(571) 576-7711</a>
    </div>
  </header>

  <main class="pt-24">
    <section class="bg-[#0a2540] text-white py-12 md:py-16">
      <div class="container mx-auto px-4 lg:px-8 max-w-4xl text-center space-y-4">
        <h1 class="text-3xl md:text-5xl font-black">Florida to South Carolina Car Shipping</h1>
        <p class="text-base text-[#8ba3ba] max-w-2xl mx-auto">
          Ship your vehicle north from Florida to South Carolina for <strong>$450–$850</strong> with 1–3 day transit, $500K cargo insurance, and $0 upfront deposit.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-4 lg:px-8 max-w-4xl py-12">
      <div class="bg-white p-6 md:p-8 rounded-3xl border border-[#e6e6e6] space-y-6 text-sm text-[#425466]">
        <h2 class="text-2xl font-black text-[#0a2540]">Northbound Florida to South Carolina Transport</h2>
        <p>Spring snowbird migration (April–May) sees heavy northbound demand as seasonal residents return from Naples, Sarasota, and Palm Beach to Bluffton, Hilton Head, and Myrtle Beach.</p>
        
        <div class="p-4 bg-[#f6f9fc] rounded-2xl border-l-4 border-l-[#635bff]">
          <h3 class="font-bold text-[#0a2540] mb-1">Looking for Southbound Shipping (10–15% Cheaper)?</h3>
          <p class="text-xs">
            Southbound shipments run 10–15% cheaper because carriers price to fill empty trailer space. View our guide for <a href="/south-carolina-to-florida-car-shipping/" class="text-[#635bff] font-bold hover:underline">South Carolina to Florida Car Shipping (Southbound) &rarr;</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Author Byline -->
    <section class="container mx-auto px-4 lg:px-8 max-w-4xl py-6" id="author-byline">
      <div class="bg-white p-6 rounded-3xl border border-[#e6e6e6] shadow-sm flex items-center gap-4">
        <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-12 h-12 rounded-full object-cover">
        <div>
          <div class="font-bold text-[#0a2540]"><a href="/author/shazil-ali/">Shazil Ali</a> &bull; <span class="text-xs text-[#0369a1] font-normal">Director of Operations</span></div>
          <div class="text-xs text-[#425466]">Reviewed for compliance with FMCSA regulations and verified carrier network standards.</div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-[#0a2540] text-white py-8 text-center text-xs text-[#8ba3ba]">
    &copy; 2026 Neon Auto Transport. All rights reserved. USDOT #4355879
  </footer>
  <script src="/js/main.js?v=5" defer></script>
</body>
</html>
"""

os.makedirs(os.path.dirname(REVERSE_TARGET), exist_ok=True)
with open(REVERSE_TARGET, "w", encoding="utf-8") as f:
    f.write(fl_to_sc_html)

print("SUCCESS: Built Reverse Route Page for Florida to South Carolina Car Shipping!")

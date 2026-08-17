import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
TARGET_FILE = os.path.join(BASE_DIR, "services", "open-auto-transport", "index.html")
FLAT_FILE = os.path.join(BASE_DIR, "services", "open-auto-transport.html")

open_transport_html = """<!DOCTYPE html>
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
  <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>Open Auto Transport | Nationwide Car Shipping | Neon</title>
  <meta name="description" content="Ship your car nationwide with open auto transport. Compare carrier options, learn costs and timing, and get a free quote from Neon Auto Transport.">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport">
  <link rel="canonical" href="https://neonautotransport.com/services/open-auto-transport/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://neonautotransport.com/services/open-auto-transport/">
  <meta property="og:title" content="Open Auto Transport | Nationwide Car Shipping">
  <meta property="og:description" content="Ship your car nationwide with open auto transport. Compare carrier options, learn costs and timing, and get a free quote from Neon Auto Transport.">
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">
  <meta property="og:site_name" content="Neon Auto Transport">

  <!-- Structured Data Schema Graph (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://neonautotransport.com/#organization",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com",
        "logo": "https://neonautotransport.com/images/og-cover.jpg"
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
        "@id": "https://neonautotransport.com/services/open-auto-transport/#webpage",
        "url": "https://neonautotransport.com/services/open-auto-transport/",
        "name": "Open Auto Transport: Nationwide Car Shipping",
        "description": "Ship your car nationwide with open auto transport. Compare carrier options, learn costs and timing, and get a free quote from Neon Auto Transport.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@id": "https://neonautotransport.com/services/open-auto-transport/#service"
        }
      },
      {
        "@type": "Service",
        "@id": "https://neonautotransport.com/services/open-auto-transport/#service",
        "name": "Open Auto Transport",
        "serviceType": "Open carrier vehicle transportation",
        "provider": {
          "@id": "https://neonautotransport.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "url": "https://neonautotransport.com/services/open-auto-transport/"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://neonautotransport.com/services/open-auto-transport/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://neonautotransport.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Vehicle Transport Services",
            "item": "https://neonautotransport.com/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Open Auto Transport",
            "item": "https://neonautotransport.com/services/open-auto-transport/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://neonautotransport.com/services/open-auto-transport/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is open auto transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open auto transport is a vehicle shipping method where cars are loaded onto an uncovered, multi-car carrier trailer. It is the standard and most common way to move eligible vehicles nationwide."
            }
          },
          {
            "@type": "Question",
            "name": "Is open auto transport safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open auto transport is widely used for everyday vehicle shipments. Exposure to normal weather and road conditions does not mean the vehicle is expected to experience damage; carriers use standard loading and securement procedures to transport vehicles safely. Document vehicle condition at pickup and delivery on the Bill of Lading."
            }
          },
          {
            "@type": "Question",
            "name": "How much does open auto transport cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open transport pricing depends on shipment distance, route demand, vehicle size and weight, vehicle condition, pickup/delivery accessibility, transport type, pickup-date flexibility, seasonality, carrier availability, and expedited service requirements."
            }
          },
          {
            "@type": "Question",
            "name": "How long does open transport take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cross-country shipments commonly take several days, while regional shipments may be completed more quickly. Actual transit depends on route, carrier scheduling, driver hours-of-service, traffic, weather, and other factors."
            }
          },
          {
            "@type": "Question",
            "name": "Can an inoperable vehicle ship on an open carrier?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, in many cases. Inoperable vehicles can often be shipped if they roll, steer, and brake, but special loading equipment may be required. Inform your transport specialist before booking so suitable carrier options can be reviewed."
            }
          },
          {
            "@type": "Question",
            "name": "Can I put personal items in my vehicle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Carriers primarily transport vehicles, not household goods. Policies on personal items vary by carrier and may be limited by weight, placement, insurance, and applicable regulations. Remove valuables and ask about the assigned carrier policy before pickup."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between open and enclosed transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open transport carries vehicles on an uncovered trailer exposed to normal weather and road conditions. Enclosed transport uses a covered trailer for added protection against weather and road debris, recommended for classic, luxury, or exotic vehicles."
            }
          }
        ]
      }
    ]
  }
  </script>

  <!-- Fonts & Tailwind CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link rel="preload" href="https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2" as="font" type="font/woff2" crossorigin="">
  <link rel="stylesheet" href="/css/tailwind.css?v=3">
  <link rel="stylesheet" href="/css/styles.css">
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
          
          <!-- Mega Menu Wrapper -->
          <div class="relative group flex items-center">
            <a href="/services/" class="hover:opacity-80 transition flex items-center gap-1 cursor-pointer" style="text-decoration:none;">
              Transport Services 
              <svg aria-hidden="true" class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#e6e6e6] p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50 text-left" style="top:100%">
              <div class="grid grid-cols-3 gap-10 text-sm">
                <div>
                  <h3 class="font-bold text-lg text-[#0a2540] mb-2 border-b border-[#e6e6e6] pb-2">Individual</h3>
                  <ul class="space-y-4 mt-4 text-[#425466] font-medium" style="list-style:none; padding:0;">
                    <li><a href="/services/open-auto-transport/" class="hover:text-[#4338ca] flex items-center justify-between group/link font-bold text-[#4338ca]">Open Auto Transport <span class="text-[#00d4ff] text-[10px]">▶</span></a></li>
                    <li><a href="/services/enclosed-auto-transport/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Enclosed Transport <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                    <li><a href="/services/door-to-door-car-shipping/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Door to Door Car Transport <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                    <li><a href="/expedited-auto-transport/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Expedited Auto Transport <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                    <li><a href="/services/motorcycle-shipping/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Motorcycle Shipping <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                    <li><a href="/services/military-car-shipping/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Military Car Shipping <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-[#0a2540] mb-2 border-b border-[#e6e6e6] pb-2">Business</h3>
                  <ul class="space-y-4 mt-4 text-[#425466] font-medium" style="list-style:none; padding:0;">
                    <li><a href="/services/car-dealer-shipping/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Car Dealer &amp; Fleet Shipping <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                    <li><a href="/services/luxury-car-shipping/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Classic &amp; Luxury Transport <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-[#0a2540] mb-2 border-b border-[#e6e6e6] pb-2">Specialized</h3>
                  <ul class="space-y-4 mt-4 text-[#425466] font-medium" style="list-style:none; padding:0;">
                    <li><a href="/car-shipping-quote/" class="hover:text-[#4338ca] flex items-center justify-between group/link">Specialized Shipping Quote <span class="text-[#00d4ff] text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity">▶</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="/why-neon/" class="hover:opacity-80 transition" style="text-decoration:none;">Why Neon</a>
          <a href="/contact.html" class="hover:opacity-80 transition" style="text-decoration:none;">Contact Us</a>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-6">
        <a href="tel:5715767711" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition-colors shadow-[0_0_15px_rgba(57,255,20,0.4)]" id="header-phone-btn" style="white-space:nowrap; text-decoration:none;">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          (571) 576-7711
        </a>
        <a href="/cost-calculator/" class="btn-outline" style="white-space:nowrap; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3) !important; padding: 0.5rem 1.25rem; border-radius: 9999px; font-weight: 600; text-decoration: none;">Cost Calculator</a>
      </div>

      <button id="mobile-menu-btn" aria-label="Toggle mobile menu" class="lg:hidden text-white focus:outline-none">
        <svg aria-hidden="true" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </header>

  <!-- Slanted Hero Header -->
  <section class="relative stripe-gradient-bg overflow-hidden bg-[#0a2540] text-white" style="padding-top:140px;padding-bottom:120px;clip-path:polygon(0 0,100% 0,100% 88%,0 100%)">
    <div class="container mx-auto px-4 lg:px-8 z-10 relative text-center max-w-4xl">
      <nav aria-label="Breadcrumbs" class="flex justify-center items-center gap-2 text-xs font-semibold mb-4 flex-wrap text-slate-300">
        <a href="/" class="hover:underline text-slate-300" style="text-decoration:none;">Home</a><span>/</span>
        <a href="/services/" class="hover:underline text-slate-300" style="text-decoration:none;">Vehicle Transport Services</a><span>/</span>
        <span class="text-white font-bold">Open Auto Transport</span>
      </nav>
      <div class="inline-block bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
        FMCSA Registered • USDOT #4355879 • MC #1703787
      </div>
      <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mb-6 tracking-tighter" style="color: #ffffff !important;">
        Open Auto Transport: <span style="color: #00D1FF">Nationwide Car Shipping</span>
      </h1>
      <p class="text-base md:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
        Open auto transport is a common way to ship standard cars, SUVs, trucks, and other eligible vehicles across the United States. A motor carrier transports your vehicle on an open multi-car trailer and aims to pick up and deliver as close to your addresses as truck access safely allows.
      </p>
      <p class="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-medium mb-8">
        Neon Auto Transport LLC is an auto transport broker authorized to arrange vehicle transportation through independent motor carriers. Request a free quote to compare available open-carrier options for your route, vehicle, dates, and pickup or delivery access.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] px-8 py-3.5 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]" style="text-decoration: none;">
          Get Your Open Auto Transport Quote →
        </a>
        <a href="tel:5715767711" class="px-8 py-3.5 rounded-full font-black text-base border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-[#0a2540] transition" style="text-decoration: none;">
          📞 Call (571) 576-7711
        </a>
      </div>
    </div>
  </section>

  <!-- Main Body Container -->
  <main class="pb-24">
    <div class="container mx-auto px-4 lg:px-8 max-w-5xl relative z-20" style="margin-top:-60px">

      <!-- At a Glance Card Container -->
      <div class="p-8 bg-white rounded-3xl border border-[#e6e6e6] shadow-xl mb-12">
        <h2 class="text-2xl font-black text-[#0a2540] mb-6 tracking-tight flex items-center gap-2">
          <span>📋</span> Open Auto Transport at a Glance
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-sm text-[#425466]">
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Trailer Type:</strong>
            Uncovered multi-car carrier
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Typical Vehicles:</strong>
            Cars, SUVs, pickup trucks, motorcycles, and other eligible vehicles
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Protection Level:</strong>
            Vehicle is exposed to normal weather and road conditions
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Pricing Factors:</strong>
            Depends on distance, vehicle size, route demand, season, timing, and carrier availability
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Pickup / Delivery:</strong>
            As close to your addresses as safe and legal truck access allows
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Insurance Coverage:</strong>
            Ask for insurance information applicable to the assigned carrier before dispatch
          </div>
        </div>
      </div>

      <!-- Section: What Is Open Auto Transport? -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">What Is Open Auto Transport?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-4">
          Open auto transport is a vehicle-shipping option in which a motor carrier loads vehicles onto an uncovered multi-car trailer. Because several vehicles share the trailer, open transport is usually more available and typically costs less than enclosed transport.
        </p>
        <p class="text-base text-[#425466] leading-relaxed mb-4">
          It is commonly used for everyday vehicles, dealership inventory, relocations, and online vehicle purchases. Vehicles remain exposed to weather and road conditions during transit, similar to normal highway driving.
        </p>
        <p class="text-base text-[#425466] leading-relaxed mb-4 font-semibold text-[#0a2540]">
          Exposure to normal weather and road conditions does not mean the vehicle is expected to experience damage; carriers use standard loading and securement procedures to transport vehicles safely.
        </p>
        <p class="text-sm text-[#425466]">
          Learn more about our full range of <a href="/services/" class="text-[#635bff] font-bold hover:underline">Auto Transport Services</a> or explore <a href="/services/door-to-door-car-shipping/" class="text-[#635bff] font-bold hover:underline">Door-to-Door Car Shipping</a> options.
        </p>
      </div>

      <!-- NEW: Why Choose Neon for Open Auto Transport? Section -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">Why Choose Neon for Open Auto Transport?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-6">
          We operate as an authorized auto transport broker, providing clear customer guidance and carrier coordination:
        </p>
        <div class="grid md:grid-cols-2 gap-4 text-xs font-semibold text-[#0a2540] mb-6">
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">✅ Licensed & Bonded Broker — MC #1703787, USDOT #4355879</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">✅ Carrier Matching — Vetted, FMCSA-registered motor carriers</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">✅ Route-Specific Quoting — Clear upfront pricing with no hidden fees</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">✅ Door-to-Door Coordination — Pickup/delivery near your location</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">✅ Bill of Lading Support — Full condition inspection at pickup & delivery</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">✅ Dedicated Support — Responsive customer service throughout transit</div>
        </div>
      </div>

      <!-- Section: Who Should Choose Open Auto Transport? (AEO Decision Module) -->
      <div class="p-8 md:p-10 bg-[#f8fafc] rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">Who Is Open Transport Best For?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-6">
          Open transport is generally suitable for the vast majority of personal and commercial vehicle shipments:
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-semibold text-[#0a2540] mb-6">
          <div class="p-3 bg-white border border-[#e6e6e6] rounded-xl">🚗 Daily drivers & sedans</div>
          <div class="p-3 bg-white border border-[#e6e6e6] rounded-xl">🚙 Family SUVs & crossovers</div>
          <div class="p-3 bg-white border border-[#e6e6e6] rounded-xl">🛻 Pickup trucks & vans</div>
          <div class="p-3 bg-white border border-[#e6e6e6] rounded-xl">🏢 Dealer inventory & fleet moves</div>
          <div class="p-3 bg-white border border-[#e6e6e6] rounded-xl">💻 Vehicles purchased online</div>
          <div class="p-3 bg-white border border-[#e6e6e6] rounded-xl">📦 Relocation & military moves</div>
        </div>
        <p class="text-sm text-[#425466] leading-relaxed">
          <strong>When to consider enclosed?</strong> <a href="/services/enclosed-auto-transport/" class="text-[#635bff] font-bold hover:underline">Enclosed Car Shipping</a> may be more appropriate when protection from weather and road debris is a higher priority, such as classic, luxury, exotic, or collector vehicles.
        </p>
      </div>

      <!-- Section: What Affects Open Auto Transport Cost? -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">What Affects Open Auto Transport Cost?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-6">
          Open transport pricing is based on the specific shipment rather than a fixed national rate. Important cost factors include:
        </p>
        <ul class="space-y-3 text-base text-[#425466] mb-8 pl-5 list-disc">
          <li><strong>Distance and route demand:</strong> Mileage between pickup and delivery locations along major travel corridors.</li>
          <li><strong>Vehicle size and weight:</strong> Larger SUVs, trucks, and vans occupy more space and weight capacity on the trailer.</li>
          <li><strong>Vehicle condition:</strong> Operable vehicles versus inoperable vehicles requiring winch loading.</li>
          <li><strong>Pickup/delivery accessibility:</strong> Restricted-access locations, narrow residential streets, or low trees requiring a meeting spot.</li>
          <li><strong>Transport type:</strong> Open multi-car carrier versus enclosed trailer selection.</li>
          <li><strong>Pickup-date flexibility:</strong> Flexible scheduling window vs. tight timeline requirements.</li>
          <li><strong>Seasonality:</strong> Snowbird seasonal shifts and peak summer moving volume.</li>
          <li><strong>Carrier availability:</strong> Active truck capacity on the route when the vehicle is ready for pickup.</li>
          <li><strong>Expedited service requirements:</strong> Requests for priority dispatch or strict delivery windows.</li>
        </ul>
        <p class="text-base text-[#425466] leading-relaxed">
          Use our <a href="/cost-calculator/" class="text-[#635bff] font-bold hover:underline">Car Shipping Cost Calculator</a> for an instant estimate, then <a href="/car-shipping-quote/" class="text-[#635bff] font-bold hover:underline">Get a Free Car Shipping Quote</a> for your exact shipment details.
        </p>
      </div>

      <!-- Section: Open vs. Enclosed Auto Transport Comparison Table -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12 overflow-x-auto">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">Open vs. Enclosed Auto Transport: Which Should You Choose?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-4">
          Open transport is generally the practical option for standard daily-driver vehicles. Enclosed transport generally costs more because covered carriers have less capacity and operate as a more specialized service.
        </p>
        
        <table class="w-full text-left text-sm border-collapse mb-6 min-w-[500px]">
          <thead>
            <tr class="bg-[#0a2540] text-white">
              <th class="p-4 rounded-tl-xl font-bold">Feature</th>
              <th class="p-4 font-bold">Open Auto Transport</th>
              <th class="p-4 rounded-tr-xl font-bold">Enclosed Car Shipping</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] bg-[#f8fafc]">
            <tr>
              <td class="p-4 font-bold text-[#0a2540]">Trailer Type</td>
              <td class="p-4">Uncovered multi-car carrier</td>
              <td class="p-4">Covered box trailer</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-[#0a2540]">Weather Exposure</td>
              <td class="p-4">Exposed to normal weather & road conditions</td>
              <td class="p-4">Full protection from weather & road debris</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-[#0a2540]">Carrier Availability</td>
              <td class="p-4">Generally higher (most common method)</td>
              <td class="p-4">More limited (specialized carriers)</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-[#0a2540]">Typical Use</td>
              <td class="p-4">Daily drivers, SUVs, trucks, fleet moves</td>
              <td class="p-4">Classic, luxury, exotic, collector vehicles</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-[#0a2540]">Pricing</td>
              <td class="p-4">Typically lower / most cost-effective</td>
              <td class="p-4">Typically higher (specialized capacity)</td>
            </tr>
          </tbody>
        </table>

        <div>
          <a href="/services/enclosed-auto-transport/" class="inline-flex items-center gap-2 font-bold text-[#635bff] hover:text-[#0a2540] transition text-base underline">
            Explore Enclosed Car Shipping →
          </a>
        </div>
      </div>

      <!-- Section: How Open Car Shipping Works -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-6 tracking-tight">How Open Car Shipping Works</h2>
        <div class="space-y-6 text-base text-[#425466]">
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <strong class="text-[#0a2540] block mb-1">Request a quote</strong>
              Share your pickup and delivery locations, vehicle details, preferred dates, and open-transport preference.
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <strong class="text-[#0a2540] block mb-1">Review available options</strong>
              Your transport specialist explains available pricing, pickup windows, and booking terms based on the route and carrier availability. Learn more on <a href="/how-it-works/" class="text-[#635bff] font-bold hover:underline">How Car Shipping Works</a>.
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <strong class="text-[#0a2540] block mb-1">Confirm carrier match</strong>
              Once you book, we work to match your shipment with an available, qualified motor carrier for the route. The carrier contacts you to confirm pickup logistics.
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">4</div>
            <div>
              <strong class="text-[#0a2540] block mb-1">Inspect at pickup and delivery</strong>
              Review the vehicle’s condition with the driver at pickup and delivery. Note existing or new concerns on the Bill of Lading and retain a signed copy.
            </div>
          </div>
        </div>
      </div>

      <!-- NEW: What Can Affect Pickup & Delivery on an Open Carrier? -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">What Can Affect Pickup & Delivery on an Open Carrier?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-6">
          Open car carriers are large commercial vehicles that require significantly more space to maneuver than a normal passenger vehicle. Certain neighborhood conditions can restrict direct door-to-door access:
        </p>
        <div class="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-[#0a2540]">
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">📍 Narrow residential streets or tight corners</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">🌳 Low-hanging tree branches or power lines</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">🏔️ Steep driveways or unpaved rural roads</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">🚧 Gated communities or security weight limits</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">🔄 Cul-de-sacs without adequate turning radius</div>
          <div class="p-4 bg-[#f8fafc] border border-[#e6e6e6] rounded-xl">🅿️ Municipal parking or truck idling restrictions</div>
        </div>
        <p class="text-xs text-[#425466] mt-4 leading-relaxed">
          If truck access is restricted, the driver will request to meet at a nearby spacious public location, such as a shopping center parking lot or highway exit.
        </p>
      </div>

      <!-- NEW: What If My Carrier Is Delayed or My Pickup Changes? (Operational Support) -->
      <div class="p-8 md:p-10 bg-[#f8fafc] rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">What If My Carrier Is Delayed or My Pickup Changes?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-6">
          Commercial vehicle transport involves real-world variables like highway traffic, weather delays, and DOT driver rest requirements. Here is how Neon handles operational scenarios:
        </p>
        <div class="space-y-4 text-xs text-[#425466] leading-relaxed">
          <div class="p-4 bg-white border border-[#e6e6e6] rounded-xl">
            <strong class="text-[#0a2540] block mb-1">Carrier Delays:</strong> If a truck is delayed by weather or traffic, your coordinator updates you with revised ETA windows.
          </div>
          <div class="p-4 bg-white border border-[#e6e6e6] rounded-xl">
            <strong class="text-[#0a2540] block mb-1">Schedule / Location Changes:</strong> If your availability changes, inform us promptly so we can adjust pickup or delivery coordination with the carrier.
          </div>
          <div class="p-4 bg-white border border-[#e6e6e6] rounded-xl">
            <strong class="text-[#0a2540] block mb-1">Unavoidable Carrier Cancellation:</strong> If a scheduled carrier experiences a breakdown, Neon works to re-match your shipment with a qualified replacement carrier.
          </div>
          <div class="p-4 bg-white border border-[#e6e6e6] rounded-xl">
            <strong class="text-[#0a2540] block mb-1">Condition Issues at Delivery:</strong> Any damage or discrepancy must be explicitly noted on the final Bill of Lading before signing. Neon assists with carrier insurance documentation.
          </div>
        </div>
      </div>

      <!-- Section: Prepare Your Vehicle for Open Transport -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Prepare Your Vehicle for Open Transport</h2>
        <ul class="space-y-3 text-base text-[#425466] pl-5 list-disc mb-6">
          <li>Wash the exterior and photograph the vehicle from multiple angles to document condition.</li>
          <li>Check for fluid leaks before pickup.</li>
          <li>Make sure tires are properly inflated and the battery is secured.</li>
          <li>Ensure the vehicle can roll, steer, and brake if it is being shipped as operable.</li>
          <li>Remove valuables and personal belongings; carrier policies on personal items vary.</li>
          <li>Remove or deactivate toll transponders and parking tags.</li>
          <li>Disable alarms or provide required disarm instructions to the carrier.</li>
          <li>Keep the fuel level at the amount requested by your carrier or transport coordinator (typically around 1/4 tank); avoid carrying unnecessary fuel weight.</li>
          <li>Be present at pickup and delivery or authorize a representative to inspect and sign the Bill of Lading.</li>
        </ul>

        <!-- Highlighted Inoperable Warning Box -->
        <div class="p-6 bg-[#fffbeb] border border-[#fef3c7] rounded-2xl text-xs text-[#92400e] leading-relaxed">
          <strong class="text-sm block mb-1 text-[#78350f]">⚠️ Shipping an inoperable vehicle? Tell us before booking.</strong>
          A vehicle that cannot roll, steer, or brake may require specialized equipment (such as a winch or flatbed) or a different loading process. Providing this information upfront helps us identify appropriate carrier options and prevents operational delays.
        </div>
      </div>

      <!-- Section: Open Auto Transport FAQs -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-8 tracking-tight text-center">Open Auto Transport FAQs</h2>
        <div class="space-y-6 max-w-3xl mx-auto">
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">What is open auto transport?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Open auto transport is a vehicle shipping method where cars are loaded onto an uncovered, multi-car carrier trailer. It is the standard and most common way to move eligible vehicles nationwide.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Is open auto transport safe?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Open auto transport is widely used for everyday vehicle shipments. Exposure to normal weather and road conditions does not mean the vehicle is expected to experience damage; carriers use standard loading and securement procedures to transport vehicles safely. Document vehicle condition at pickup and delivery on the Bill of Lading.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">How much does open auto transport cost?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Open transport pricing depends on shipment distance, route demand, vehicle size and weight, vehicle condition, pickup/delivery accessibility, transport type, pickup-date flexibility, seasonality, carrier availability, and expedited service requirements.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">How long does open transport take?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Cross-country shipments commonly take several days, while regional shipments may be completed more quickly. Actual transit depends on route, carrier scheduling, driver hours-of-service, traffic, weather, and other factors.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Can an inoperable vehicle ship on an open carrier?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Yes, in many cases. Inoperable vehicles can often be shipped if they roll, steer, and brake, but special loading equipment may be required. Inform your transport specialist before booking so suitable carrier options can be reviewed.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Can I put personal items in my vehicle?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Carriers primarily transport vehicles, not household goods. Policies on personal items vary by carrier and may be limited by weight, placement, insurance, and applicable regulations. Remove valuables and ask about the assigned carrier policy before pickup.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">What is the difference between open and enclosed transport?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Open transport carries vehicles on an uncovered trailer exposed to normal weather and road conditions. Enclosed transport uses a covered trailer for added protection against weather and road debris.
            </p>
          </div>
        </div>
      </div>

      <!-- Section: Open Auto Transport on Popular Routes -->
      <div class="p-8 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl font-black text-[#0a2540] mb-4 tracking-tight">Open Auto Transport on Popular Routes</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-4">
          Open carrier availability is commonly strong on major interstate corridors. Explore <a href="/california-car-shipping/" class="text-[#635bff] font-bold hover:underline">California Car Shipping</a>, <a href="/texas-car-shipping/" class="text-[#635bff] font-bold hover:underline">Texas Car Shipping</a>, or use the <a href="/cost-calculator/" class="text-[#635bff] font-bold hover:underline">Car Shipping Cost Calculator</a> to estimate your specific route.
        </p>
      </div>

      <!-- Reviewed by & E-E-A-T Author Profile Box -->
      <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] text-center text-xs text-[#425466] space-y-2 mb-12">
        <div>
          <strong>Reviewed by:</strong> <a href="/author/shazil-ali.html" class="text-[#635bff] font-bold hover:underline">Shazil Ali</a>, Auto Transport Specialist, Neon Auto Transport &nbsp;|&nbsp; <strong>Last updated:</strong> August 2026
        </div>
        <p class="text-slate-500 italic max-w-2xl mx-auto">
          Shazil reviews Neon Auto Transport's educational content for accuracy, carrier terminology, shipping processes, and customer-facing claims. Information on this page is for general planning. Pricing, pickup windows, carrier availability, and applicable insurance details vary by shipment and are confirmed during booking.
        </p>
      </div>

      <!-- CTA Box -->
      <div class="p-10 md:p-12 text-center bg-[#0a2540] rounded-3xl shadow-xl text-white">
        <h3 class="text-2xl md:text-3xl font-black mb-4 text-white" style="color: #ffffff !important;">
          Ready to Ship Your Vehicle on an Open Carrier?
        </h3>
        <p class="text-slate-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Get a free open auto transport quote tailored to your route and vehicle, or call our team for direct route assistance.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/car-shipping-quote/" class="px-8 py-3.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e011] transition shadow-md text-base w-full sm:w-auto" style="text-decoration: none;">
            Get Your Open Auto Transport Quote
          </a>
          <a href="tel:5715767711" class="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#0a2540] transition text-base w-full sm:w-auto" style="text-decoration: none;">
            📞 Call (571) 576-7711
          </a>
        </div>
      </div>

    </div>
  </main>

  <!-- Global Footer -->
  <footer class="bg-[#0a2540] text-slate-300 py-12 lg:py-16 border-t border-slate-800 relative overflow-hidden" style="width: 100%; background-color: #0a2540;">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10" style="max-width: 1280px; margin: 0 auto;">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12 items-start">
        <div class="lg:col-span-4 space-y-4">
          <div>
            <a href="/" class="text-2xl font-black tracking-tight text-white uppercase block leading-tight hover:opacity-90 transition" style="text-decoration: none; color: #ffffff; font-size: 1.5rem; font-weight: 900; text-transform: uppercase;">
              NEON <span style="color: #00D1FF;">AUTO TRANSPORT</span>
            </a>
          </div>
          <p class="text-xs leading-relaxed text-slate-300 max-w-sm" style="color: #94a3b8; font-size: 0.85rem; line-height: 1.6;">
            Fast, secure, and reliable nationwide auto transport. We connect you with a highly vetted carrier network to ensure your vehicle arrives safely and on time. Your Journey, Our Priority!
          </p>
        </div>
        <div class="lg:col-span-2 space-y-3">
          <h3 class="text-white font-extrabold text-xs uppercase tracking-wider mb-1" style="color: #ffffff; font-weight: 800; font-size: 0.75rem;">QUICK LINKS</h3>
          <ul class="space-y-2 text-xs font-medium" style="list-style: none; padding: 0;">
            <li><a href="/#how-it-works" style="color: #cbd5e1; text-decoration: none;">How it Works</a></li>
            <li><a href="/cost-calculator/" style="color: #cbd5e1; text-decoration: none;">Cost Calculator</a></li>
            <li><a href="/why-neon/" style="color: #cbd5e1; text-decoration: none;">Why Neon</a></li>
            <li><a href="/contact.html" style="color: #cbd5e1; text-decoration: none;">Contact Us</a></li>
          </ul>
        </div>
        <div class="lg:col-span-3 space-y-3">
          <h3 class="text-white font-extrabold text-xs uppercase tracking-wider mb-1" style="color: #ffffff; font-weight: 800; font-size: 0.75rem;">POPULAR ROUTES</h3>
          <ul class="space-y-2 text-xs font-medium" style="list-style: none; padding: 0;">
            <li><a href="/california-car-shipping/" style="color: #cbd5e1; text-decoration: none;">California Car Shipping</a></li>
            <li><a href="/texas-car-shipping/" style="color: #cbd5e1; text-decoration: none;">Texas Car Shipping</a></li>
            <li><a href="/florida-car-shipping/" style="color: #cbd5e1; text-decoration: none;">Florida Car Shipping</a></li>
          </ul>
        </div>
        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-white font-extrabold text-xs uppercase tracking-wider mb-1" style="color: #ffffff; font-weight: 800; font-size: 0.75rem;">CONTACT SUPPORT</h3>
          <a href="tel:5715767711" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; background-color: #ffc72c; color: #0a2540; font-weight: 900; font-size: 0.95rem; padding: 0.85rem 1rem; border-radius: 0.75rem; text-decoration: none;">
            (571) 576-7711
          </a>
        </div>
      </div>
      <div style="padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #94a3b8; gap: 1rem;">
        <div>© 2026 Neon Auto Transport LLC. All rights reserved. MC #1703787 • USDOT #4355879</div>
      </div>
    </div>
  </footer>
</body>
</html>
"""

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(open_transport_html)

if os.path.exists(FLAT_FILE):
    with open(FLAT_FILE, "w", encoding="utf-8") as f:
        f.write(open_transport_html)

print("SUCCESS: Deployed complete v2 Open Auto Transport pillar page refinements to /services/open-auto-transport/!")

import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
SERVICES_DIR = os.path.join(BASE_DIR, "services")
OPEN_FILE_1 = os.path.join(SERVICES_DIR, "open-auto-transport.html")
OPEN_DIR = os.path.join(SERVICES_DIR, "open-auto-transport")
OPEN_FILE_2 = os.path.join(OPEN_DIR, "index.html")

os.makedirs(OPEN_DIR, exist_ok=True)

html_content = """<!DOCTYPE html>
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
  <title>Open Auto Transport | Affordable Open Car Shipping | Neon</title>
  <meta name="description" content="Explore open auto transport for nationwide car shipping. Learn how open carrier transport works, compare it with enclosed shipping, review price factors, and request a free quote from Neon Auto Transport.">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport">
  <link rel="canonical" href="https://neonautotransport.com/services/open-auto-transport/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://neonautotransport.com/services/open-auto-transport/">
  <meta property="og:title" content="Open Auto Transport | Affordable Open Car Shipping | Neon">
  <meta property="og:description" content="Explore open auto transport for nationwide car shipping. Learn how open carrier transport works, compare it with enclosed shipping, review price factors, and request a free quote from Neon Auto Transport.">
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">
  <meta property="og:site_name" content="Neon Auto Transport">

  <!-- Structured Data Schema (BreadcrumbList, WebPage, Service, FAQPage) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
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
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/services/open-auto-transport/#webpage",
        "url": "https://neonautotransport.com/services/open-auto-transport/",
        "name": "Open Auto Transport | Affordable Open Car Shipping | Neon",
        "description": "Explore open auto transport for nationwide car shipping. Learn how open carrier transport works, compare it with enclosed shipping, review price factors, and request a free quote from Neon Auto Transport.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@type": "Service",
          "name": "Open Auto Transport Services"
        }
      },
      {
        "@type": "Service",
        "@id": "https://neonautotransport.com/services/open-auto-transport/#service",
        "name": "Open Auto Transport",
        "provider": {
          "@type": "Organization",
          "name": "Neon Auto Transport",
          "url": "https://neonautotransport.com"
        },
        "description": "Nationwide open carrier vehicle transport arranged through licensed motor carriers."
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
              "text": "Open auto transport is a vehicle shipping method where cars are loaded onto an uncovered, multi-car carrier trailer. It is the most common and economical way to move vehicles nationwide."
            }
          },
          {
            "@type": "Question",
            "name": "Is open auto transport safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, open auto transport is widely used by manufacturers, dealerships, and individual vehicle owners. Vehicles are securely fastened to the trailer deck using heavy-duty wheel straps or chains."
            }
          },
          {
            "@type": "Question",
            "name": "How much does open auto transport cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open transport pricing depends on shipment distance, vehicle size, condition, route popularity, season, and carrier availability. Request a quote or use our cost calculator for accurate route estimates."
            }
          },
          {
            "@type": "Question",
            "name": "How long does open transport take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Transit time depends on total mileage, driver hours-of-service regulations, weather, and traffic. Typical cross-country shipments take 5 to 9 days, while regional moves take 1 to 4 days."
            }
          },
          {
            "@type": "Question",
            "name": "Can an inoperable vehicle ship on an open carrier?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Inoperable vehicles can often be shipped if they roll, steer, and brake, but special winch equipment is required. Inform your transport specialist before booking so a winch-equipped carrier can be assigned."
            }
          },
          {
            "@type": "Question",
            "name": "Can I put personal items in my vehicle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Carriers primarily transport vehicles, not household goods. Many carriers allow up to 100 lbs of personal items secured in the trunk at owner's risk, but specific carrier policies vary and weight limits must be respected."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between open and enclosed transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open transport carries vehicles on an uncovered trailer exposed to weather and road conditions. Enclosed transport uses a covered trailer for added protection against weather and road debris."
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
        Open Auto Transport: <span style="color: #00D1FF">Affordable Nationwide Car Shipping</span>
      </h1>
      <p class="text-base md:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
        Open auto transport is a common way to ship standard cars, SUVs, trucks, and other eligible vehicles across the United States. An assigned motor carrier transports your vehicle on an open multi-car trailer and aims to pick up and deliver as close to your addresses as truck access safely allows.
      </p>
      <p class="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-medium mb-8">
        Neon Auto Transport LLC is a licensed auto transport broker. We arrange transportation through independently owned motor carriers. Request a free quote to compare available open-carrier options for your route, vehicle, dates, and pickup or delivery access.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] px-8 py-3.5 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]" style="text-decoration: none;">
          Get a Free Open Transport Quote →
        </a>
        <a href="/cost-calculator/" class="px-8 py-3.5 rounded-full font-black text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition" style="text-decoration: none;">
          Calculate Car Shipping Cost
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
            <strong class="text-[#0a2540] block mb-1">Transport Method:</strong>
            Open multi-car trailer
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Best For:</strong>
            Standard cars, SUVs, trucks, and daily drivers
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Protection Level:</strong>
            Vehicle is exposed to normal weather and road conditions
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
            <strong class="text-[#0a2540] block mb-1">Pricing Factors:</strong>
            Depends on distance, vehicle size, route, season, timing, and carrier availability
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
        <p class="text-sm text-[#425466]">
          Learn more about our full range of <a href="/services/" class="text-[#635bff] font-bold hover:underline">Vehicle Transport Services</a> or explore <a href="/services/door-to-door-car-shipping/" class="text-[#635bff] font-bold hover:underline">Door-to-Door Car Shipping</a> options.
        </p>
      </div>

      <!-- Section: What Affects Open Auto Transport Cost? -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">What Affects Open Auto Transport Cost?</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-6">
          Open transport pricing is based on the specific shipment rather than a fixed national rate. Important factors include:
        </p>
        <ul class="space-y-3 text-base text-[#425466] mb-8 pl-5 list-disc">
          <li>Pickup and delivery distance and route demand</li>
          <li>Vehicle size, weight, condition, and modifications</li>
          <li>Open versus enclosed trailer selection</li>
          <li>Urban, rural, gated-community, or restricted-access locations</li>
          <li>Pickup-date flexibility and seasonal demand</li>
          <li><a href="/expedited-auto-transport/" class="text-[#635bff] font-bold hover:underline">Expedited Auto Transport</a> requests</li>
          <li>Carrier availability when the shipment is ready to dispatch</li>
        </ul>
        <p class="text-base text-[#425466] leading-relaxed">
          Use our <a href="/cost-calculator/" class="text-[#635bff] font-bold hover:underline">Car Shipping Cost Calculator</a> for an estimate, then <a href="/car-shipping-quote/" class="text-[#635bff] font-bold hover:underline">Get a Free Car Shipping Quote</a> for your exact shipment details.
        </p>
      </div>

      <!-- Section: Open Auto Transport vs. Enclosed Car Shipping -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">Open Auto Transport vs. Enclosed Car Shipping</h2>
        <p class="text-base text-[#425466] leading-relaxed mb-4">
          Open transport is generally the practical option for standard daily-driver vehicles. <a href="/services/enclosed-auto-transport/" class="text-[#635bff] font-bold hover:underline">Enclosed Car Shipping</a> uses a covered trailer and may be a better fit for collector, luxury, exotic, classic, low-clearance, or condition-sensitive vehicles.
        </p>
        <p class="text-base text-[#425466] leading-relaxed mb-6">
          Choose based on your vehicle’s needs, your desired protection level, budget, route, and available carrier options—not a universal vehicle-value threshold.
        </p>
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
              <strong class="text-[#0a2540] block mb-1">Confirm carrier assignment</strong>
              Once a suitable carrier is assigned, pickup details are coordinated. The carrier may contact you or an authorized pickup representative to confirm access and timing.
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold shrink-0">4</div>
            <div>
              <strong class="text-[#0a2540] block mb-1">Inspect at pickup and delivery</strong>
              Review the vehicle’s condition with the carrier at pickup and delivery. Note existing or new concerns on the Bill of Lading and retain a copy.
            </div>
          </div>
        </div>
      </div>

      <!-- Section: Prepare Your Vehicle for Open Transport -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Prepare Your Vehicle for Open Transport</h2>
        <ul class="space-y-3 text-base text-[#425466] pl-5 list-disc">
          <li>Wash the exterior and photograph the vehicle from multiple angles.</li>
          <li>Document pre-existing damage before pickup.</li>
          <li>Remove valuables and personal belongings; carriers may have restrictions on items left in a vehicle.</li>
          <li>Remove or deactivate toll transponders.</li>
          <li>Disable alarms or provide the required disarm information.</li>
          <li>Keep enough fuel for loading and unloading; confirm the preferred fuel level with your coordinator.</li>
          <li>Check tires, battery, and basic operability.</li>
          <li>Tell your coordinator about modifications, low ground clearance, inoperability, or special loading needs.</li>
          <li>Be present at pickup/delivery or authorize a representative to inspect and sign the Bill of Lading.</li>
        </ul>
        <p class="mt-6 text-sm text-[#425466]">
          Planning interstate moves? Review <a href="/california-car-shipping/" class="text-[#635bff] font-bold hover:underline">California Car Shipping</a> or <a href="/services/car-shipping-to-another-state/" class="text-[#635bff] font-bold hover:underline">How to Ship a Car to Another State</a>.
        </p>
      </div>

      <!-- Section: Open Auto Transport FAQs -->
      <div class="p-8 md:p-10 bg-white rounded-3xl border border-[#e6e6e6] shadow-sm mb-12">
        <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-8 tracking-tight text-center">Open Auto Transport FAQs</h2>
        <div class="space-y-6 max-w-3xl mx-auto">
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">What is open auto transport?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Open auto transport is a vehicle shipping method where cars are loaded onto an uncovered, multi-car carrier trailer. It is the most common and economical way to move vehicles nationwide.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Is open auto transport safe?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Yes, open auto transport is widely used by manufacturers, dealerships, and individual vehicle owners. Vehicles are securely fastened to the trailer deck using heavy-duty wheel straps or chains.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">How much does open auto transport cost?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Open transport pricing depends on shipment distance, vehicle size, condition, route popularity, season, and carrier availability. Request a quote or use our cost calculator for accurate route estimates.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">How long does open transport take?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Transit time depends on total mileage, driver hours-of-service regulations, weather, and traffic. Typical cross-country shipments take 5 to 9 days, while regional moves take 1 to 4 days.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Can an inoperable vehicle ship on an open carrier?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Inoperable vehicles can often be shipped if they roll, steer, and brake, but special winch equipment is required. Inform your transport specialist before booking so a winch-equipped carrier can be assigned.
            </p>
          </div>
          <div class="border-b border-[#e6e6e6] pb-6">
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">Can I put personal items in my vehicle?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Carriers primarily transport vehicles, not household goods. Many carriers allow up to 100 lbs of personal items secured in the trunk at owner's risk, but specific carrier policies vary and weight limits must be respected.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#0a2540] mb-2">What is the difference between open and enclosed transport?</h3>
            <p class="text-sm text-[#425466] leading-relaxed">
              Open transport carries vehicles on an uncovered trailer exposed to weather and road conditions. Enclosed transport uses a covered trailer for added protection against weather and road debris.
            </p>
          </div>
        </div>
      </div>

      <!-- Reviewed by / Last Updated Line -->
      <div class="p-4 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] text-center text-xs text-[#425466] mb-12">
        <strong>Reviewed by:</strong> Shazil Ali, Auto Transport Specialist, Neon Auto Transport &nbsp;|&nbsp; <strong>Last updated:</strong> August 2026
      </div>

      <!-- CTA Box -->
      <div class="p-10 md:p-12 text-center bg-[#0a2540] rounded-3xl shadow-xl text-white">
        <h3 class="text-2xl md:text-3xl font-black mb-4 text-white" style="color: #ffffff !important;">
          Ready to Ship Your Vehicle on an Open Carrier?
        </h3>
        <p class="text-slate-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Get a free open auto transport quote tailored to your route and vehicle, or use our cost calculator to review estimated pricing.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/car-shipping-quote/" class="px-8 py-3.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e011] transition shadow-md text-base w-full sm:w-auto" style="text-decoration: none;">
            Get a Free Open Transport Quote
          </a>
          <a href="/cost-calculator/" class="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#0a2540] transition text-base w-full sm:w-auto" style="text-decoration: none;">
            Calculate Car Shipping Cost
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
</html>"""

for target in [OPEN_FILE_1, OPEN_FILE_2]:
    with open(target, "w", encoding="utf-8") as f:
        f.write(html_content)

print(f"SUCCESS: Successfully deployed master EEAT Open Auto Transport content to {OPEN_FILE_1} and {OPEN_FILE_2}")

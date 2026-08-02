import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
pillar_dir = os.path.join(SITE_DIR, "should-i-ship-or-drive-my-car")
os.makedirs(pillar_dir, exist_ok=True)
target_file = os.path.join(pillar_dir, "index.html")

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>Should You Ship or Drive Your Car? Real Cost Breakeven</title>
  <meta name="description" content="See the actual mileage breakeven for shipping vs. driving your car, real savings for fleets, and what drives your quote. DOT 4355879.">
  <meta name="keywords" content="should I ship or drive my car, is it cheaper to ship a car or drive, car delivery worth it, fleet vehicle shipping discount, cost to ship a car to Florida">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport LLC">
  <link rel="canonical" href="https://neonautotransport.com/should-i-ship-or-drive-my-car/">

  <!-- Hreflang Tags -->
  <link rel="alternate" hreflang="en-us" href="https://neonautotransport.com/should-i-ship-or-drive-my-car/">
  <link rel="alternate" hreflang="x-default" href="https://neonautotransport.com/should-i-ship-or-drive-my-car/">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://neonautotransport.com/should-i-ship-or-drive-my-car/">
  <meta property="og:title" content="Should You Ship or Drive Your Car? Real Cost Breakeven">
  <meta property="og:description" content="Discover the actual mileage breakeven for driving vs shipping your car. Real cost calculations, lodging/wear factors, and fleet discounts.">
  <meta property="og:image" content="https://neonautotransport.com/images/should-i-ship-or-drive-hero.jpg">
  <meta property="og:site_name" content="Neon Auto Transport">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Should You Ship or Drive Your Car? Real Cost Breakeven">
  <meta name="twitter:description" content="Detailed ship vs drive cost breakeven framework, per-mile rates, and fleet relocation discounts.">
  <meta name="twitter:image" content="https://neonautotransport.com/images/should-i-ship-or-drive-hero.jpg">

  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/tailwind.css?v=3">
  <link rel="stylesheet" href="/css/styles.css">

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-P5K57THT');</script>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Blog",
        "item": "https://neonautotransport.com/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Should You Ship or Drive Your Car?",
        "item": "https://neonautotransport.com/should-i-ship-or-drive-my-car/"
      }
    ]
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it cheaper to ship a car or drive it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Driving is usually cheaper under about 500-750 miles. Shipping becomes cost-competitive or cheaper beyond roughly 1,000-1,500 miles once lodging, meals, wear, and time are counted."
        }
      },
      {
        "@type": "Question",
        "name": "Is car delivery worth it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on distance, vehicle value, and schedule. There is no universal answer, but it is most clearly worth it for long distances or vehicles you want to protect from road wear."
        }
      },
      {
        "@type": "Question",
        "name": "How can I save money on car shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose open transport, book 2-4 weeks ahead with a flexible pickup window, ship in shoulder season, and ship multiple vehicles together if possible."
        }
      },
      {
        "@type": "Question",
        "name": "Are fleet vehicles cheaper to ship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Multi-vehicle shipments typically cost 10-25% less per vehicle than shipping individually, with larger fleets sometimes reaching 20-40% savings."
        }
      },
      {
        "@type": "Question",
        "name": "Is it cheaper to ship shorter distances?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Total cost is lower for short routes, but the price per mile is usually higher. Cross-country routes often have a lower per-mile rate than short regional moves."
        }
      },
      {
        "@type": "Question",
        "name": "Why is car shipping so expensive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing reflects real, verifiable factors including distance, vehicle size, transport method, season, and route demand, not arbitrary markup."
        }
      }
    ]
  }
  </script>

  <!-- JSON-LD: Article & Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Should You Ship or Drive Your Car? The Real Cost Breakeven",
    "description": "Comprehensive decision guide on the mileage breakeven for driving vs shipping a vehicle, per-mile pricing rules, and fleet discounts.",
    "author": {
      "@type": "Organization",
      "name": "Neon Auto Transport LLC",
      "url": "https://neonautotransport.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Neon Auto Transport LLC",
      "logo": "https://neonautotransport.com/images/logo.jpg",
      "url": "https://neonautotransport.com"
    },
    "about": {
      "@type": "Service",
      "serviceType": "Car Transport & Vehicle Shipping",
      "provider": {
        "@type": "MovingCompany",
        "name": "Neon Auto Transport LLC",
        "telephone": "+1-571-576-7711",
        "url": "https://neonautotransport.com"
      }
    }
  }
  </script>

  <style>
    #sticky-widget { display: none !important; }
    #mobile-sticky-cta { position: fixed; bottom: 0; left: 0; width: 100%; z-index: 50; padding: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-top: 1px solid #e6e6e6; box-shadow: 0 -4px 10px -1px rgba(0,0,0,0.1); display: flex; gap: 12px; align-items: center; justify-content: space-between; box-sizing: border-box; }
    @media (min-width: 1024px) { #mobile-sticky-cta { display: none !important; } }
    .mobile-cta-btn { flex: 1; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; border-radius: 8px; font-weight: 900; text-decoration: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif; font-size: 15px; box-sizing: border-box; }
    .mobile-cta-btn.call { background-color: #39FF14; color: #0a2540; }
    .mobile-cta-btn.quote { background-color: #0a2540; color: #ffffff; }
  </style>
</head>

<body class="antialiased bg-[#f6f9fc]">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5K57THT"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <!-- Global Header -->
  <header class="fixed top-0 w-full z-50 transition-all duration-300" id="global-header" style="background-color:#0a2540">
    <div class="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center" style="gap:24px">
      <div class="flex items-center" style="gap:24px">
        <a href="/" class="text-2xl font-black tracking-tight flex items-center gap-1 text-white" id="logo-text">
          NEON <span style="color: #00D1FF">AUTO TRANSPORT</span>
        </a>
        <nav aria-label="Main Navigation" class="hidden lg:flex items-center font-semibold text-[15px] text-white" id="desktop-nav" style="gap:24px">
          <a href="/#how-it-works" class="hover:opacity-80 transition text-white">How it works</a>
          <a href="/services/" class="hover:opacity-80 transition text-white">Transport Services</a>
          <a href="/car-transport-cost-guide/" class="hover:opacity-80 transition text-white">Cost Guide</a>
          <a href="/cheapest-way-to-ship-a-car/" class="hover:opacity-80 transition text-white">Cheapest Way Guide</a>
          <a href="/cost-calculator/" class="hover:opacity-80 transition text-white">Cost Calculator</a>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-4">
        <a href="tel:5715767711" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition-colors shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          (571) 576-7711
        </a>
        <a href="#calculator" class="border border-white/30 text-white hover:bg-white hover:text-[#0a2540] px-5 py-2.5 rounded-full font-bold transition-colors">Get Quote</a>
      </div>

      <button id="mobile-menu-btn" aria-label="Toggle mobile menu" class="lg:hidden text-white focus:outline-none">
        <svg aria-hidden="true" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
    
    <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-slate-200 flex flex-col p-4 space-y-4 text-center font-semibold text-[#425466] shadow-xl">
      <a href="/#how-it-works" class="hover:text-[#635bff]">How it works</a>
      <a href="/car-transport-cost-guide/" class="hover:text-[#635bff]">Cost Guide</a>
      <a href="/cheapest-way-to-ship-a-car/" class="hover:text-[#635bff]">Cheapest Way Guide</a>
      <a href="/cost-calculator/" class="hover:text-[#635bff]">Cost Calculator</a>
      <a href="tel:5715767711" class="bg-[#39FF14] text-[#0a2540] py-3 rounded-xl font-black text-lg shadow-lg">Call (571) 576-7711</a>
    </div>
  </header>

  <main class="pt-24 pb-16">
    
    <!-- Hero Article Banner -->
    <section class="bg-white border-b border-[#e6e6e6] py-12 lg:py-16">
      <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
        <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-semibold mb-6 flex-wrap">
          <a href="/" class="text-[#468de6] hover:underline">Home</a>
          <span class="text-[#8ba3ba]">/</span>
          <a href="/blog/" class="text-[#468de6] hover:underline">Blog</a>
          <span class="text-[#8ba3ba]">/</span>
          <span class="text-[#0a2540] font-bold">Should You Ship or Drive Your Car?</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#468de6]/10 text-[#468de6] text-xs font-extrabold uppercase tracking-wider mb-4">
          DECISION &amp; BREAKEVEN FRAMEWORK &bull; 2026 PILLAR
        </div>

        <h1 class="text-3xl md:text-5xl font-black text-[#0a2540] mb-6 tracking-tight leading-tight">
          Should You Ship or Drive Your Car? The Real Cost Breakeven
        </h1>

        <!-- Front-Loaded Featured Snippet / AI Overview Quick Answer Block -->
        <div class="p-6 bg-[#f6f9fc] rounded-2xl border-l-4 border-[#635bff] mb-8 text-[#0a2540] leading-relaxed">
          <p class="font-semibold text-base md:text-lg mb-3">
            <strong>Quick Answer:</strong> For distances under roughly 500-750 miles, driving your own car is usually cheaper once you count only fuel. Beyond about 1,000-1,500 miles, shipping frequently becomes cost-competitive or cheaper once you honestly count lodging, meals, extra mileage/wear on the vehicle, and the value of your own time.
          </p>
          <p class="text-sm text-[#425466]">
            Neon Auto Transport is a licensed, insured broker (USDOT 4355879, MC 1703787) based in Woodbridge, Virginia, arranging both open and enclosed transport nationwide.
          </p>
        </div>

        <div class="flex items-center gap-4 text-xs text-[#425466] border-t border-b border-[#e6e6e6] py-3">
          <span>By <strong>Neon Operations Desk</strong></span>
          <span>&bull;</span>
          <span>Updated August 2026</span>
          <span>&bull;</span>
          <span>FMCSA License USDOT #4355879</span>
        </div>
      </div>
    </section>

    <!-- Main Content Pillar Body -->
    <section class="py-12 bg-[#f6f9fc]">
      <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div class="bg-white p-8 md:p-12 rounded-3xl border border-[#e6e6e6] shadow-sm space-y-10 text-[#425466] leading-relaxed font-normal text-base">

          <!-- Section 1: Breakeven Framework -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Ship or Drive? The Actual Mileage Breakeven
            </h2>
            <p class="mb-6 text-sm">
              Online claims vary widely — some sites claim driving is always cheaper, while others insist shipping is always worth it. Here is the realistic mileage-based framework based on actual operating costs:
            </p>

            <div class="space-y-4 mb-6">
              <div class="p-5 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <strong class="text-[#0a2540] text-base block mb-1">Under ~500 Miles: Driving Wins</strong>
                <p class="text-xs text-[#425466]">Driving is almost always cheaper. Fuel alone is less than a carrier's minimum dispatch fee, and the trip takes less than a day so hotel costs are zero.</p>
              </div>

              <div class="p-5 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <strong class="text-[#0a2540] text-base block mb-1">~500 – 1,000 Miles: The Toss-Up Zone</strong>
                <p class="text-xs text-[#425466]">Fuel, 1 or 2 nights of hotel lodging, meals, and 1–2 days of lost time start approaching typical open shipping rates ($600–$900). Decision depends on personal schedule.</p>
              </div>

              <div class="p-5 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <strong class="text-[#0a2540] text-base block mb-1">1,000 – 1,500+ Miles: Shipping Takes the Lead</strong>
                <p class="text-xs text-[#425466]">Shipping increasingly wins once every real cost is counted: 2–3 hotel nights, food, added vehicle wear pushing closer to maintenance intervals, and 3+ days of your time.</p>
              </div>

              <div class="p-5 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <strong class="text-[#0a2540] text-base block mb-1">2,000+ Miles (Cross-Country): Shipping Wins On Value &amp; Speed</strong>
                <p class="text-xs text-[#425466]">Shipping is very often the cheaper and safer option when accounting for multi-day road trip costs ($1,000+ in hotels, food, fuel) plus plane tickets if moving one-way.</p>
              </div>
            </div>

            <div class="p-6 bg-blue-50 rounded-2xl border border-blue-200 text-sm text-[#0a2540]">
              <h4 class="font-bold text-base mb-2">1-Minute DIY Breakeven Formula:</h4>
              <p class="text-xs leading-relaxed mb-2 text-[#425466]">
                <strong>Driving Cost</strong> = (Distance ÷ MPG × Gas Price) + Hotel Nights + Food + Value of Your Time
              </p>
              <p class="text-xs leading-relaxed text-[#425466]">
                Compare that total to an instant shipping quote. Whichever number is lower is genuinely cheaper for your specific trip.
              </p>
            </div>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 2: Is Delivery Worth It? -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Is Car Delivery Worth the Cost?
            </h2>
            <p class="text-sm leading-relaxed mb-4">
              Car delivery is worth it when it saves you meaningful time, protects a vehicle whose condition matters (new, classic, high-value), or lets you avoid a long-distance drive you don't want to make.
            </p>
            <p class="text-sm leading-relaxed">
              It is a harder case to make for short in-state moves or low-value vehicles where driving is simple and cheap. There is no universal "worth it" answer — it depends on your specific distance, vehicle condition, and schedule.
            </p>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 3: How to Save Money -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              How to Save Money on Car Shipping
            </h2>
            <div class="space-y-3">
              <div class="p-4 bg-[#f6f9fc] rounded-xl border border-[#e6e6e6] flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] font-black flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <div class="text-sm leading-relaxed text-[#425466]">
                  <strong class="text-[#0a2540]">Choose Open Transport:</strong> Save 30–60% compared to enclosed shipping for daily vehicles.
                </div>
              </div>

              <div class="p-4 bg-[#f6f9fc] rounded-xl border border-[#e6e6e6] flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] font-black flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <div class="text-sm leading-relaxed text-[#425466]">
                  <strong class="text-[#0a2540]">Book 2 to 4 Weeks Ahead:</strong> Flexible 3–5 day pickup windows let brokers slot your vehicle onto passing carriers.
                </div>
              </div>

              <div class="p-4 bg-[#f6f9fc] rounded-xl border border-[#e6e6e6] flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] font-black flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <div class="text-sm leading-relaxed text-[#425466]">
                  <strong class="text-[#0a2540]">Ship During Shoulder Season:</strong> Spring and autumn avoid peak summer relocation surges.
                </div>
              </div>

              <div class="p-4 bg-[#f6f9fc] rounded-xl border border-[#e6e6e6] flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] font-black flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <div class="text-sm leading-relaxed text-[#425466]">
                  <strong class="text-[#0a2540]">Ship Multiple Vehicles Together:</strong> Multi-car shipments earn 10–25% discounts per vehicle.
                </div>
              </div>
            </div>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 4: Per-Mile Pricing Rule -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Does Distance Change the Price Per Mile?
            </h2>
            <p class="text-sm leading-relaxed mb-4">
              Yes — and it moves in a direction that surprises many people: <strong>shorter routes typically cost MORE per mile, not less.</strong>
            </p>
            <p class="text-sm leading-relaxed mb-4">
              A short regional move (300 miles) might run <strong>$0.90–$1.30 per mile</strong>, while a genuine cross-country haul (2,500 miles) drops to <strong>$0.50–$0.65 per mile</strong>.
            </p>
            <p class="text-sm leading-relaxed">
              This occurs because fixed costs (driver dispatch time, fuel to pickup location, minimum carrier loading fees) are spread across fewer total miles on a short trip.
            </p>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 5: Fleet & Multi-Vehicle Discounts -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Fleet &amp; Multi-Vehicle Discounts
            </h2>
            <p class="text-sm leading-relaxed mb-4">
              Shipping multiple vehicles on the same carrier is one of the most reliable ways to lower per-vehicle costs. Multi-car shipments typically run <strong>10–25% cheaper per vehicle</strong> than shipping individually, with corporate fleet moves (5+ vehicles) reaching up to <strong>20–40% savings</strong>.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <a href="/services/" class="p-4 bg-[#f6f9fc] rounded-xl border border-[#e6e6e6] block hover:border-[#468de6] transition">
                <h4 class="font-bold text-[#0a2540] text-sm mb-1">Corporate Fleet Transport &rarr;</h4>
                <p class="text-xs text-[#425466]">Volume discounts for company car relocations and corporate fleets.</p>
              </a>
              <a href="/services/" class="p-4 bg-[#f6f9fc] rounded-xl border border-[#e6e6e6] block hover:border-[#468de6] transition">
                <h4 class="font-bold text-[#0a2540] text-sm mb-1">Dealership Transport &rarr;</h4>
                <p class="text-xs text-[#425466]">Multi-car haulers for auto dealer inventory transfers.</p>
              </a>
            </div>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 6: Florida Route Worked Example -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Cost to Ship a Car to Florida
            </h2>
            <p class="text-sm leading-relaxed mb-4">
              <a href="/florida-car-shipping/" class="text-[#468de6] font-bold hover:underline">Florida</a> is one of the most popular auto shipping destinations in the U.S., driven heavily by seasonal snowbird migrations each autumn and spring.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-5 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <h4 class="font-bold text-[#0a2540] mb-1">East Coast to Florida</h4>
                <p class="text-xs text-[#425466] mb-2">~700 – 1,200 Miles</p>
                <div class="text-lg font-black text-[#468de6]">$600 – $1,200</div>
              </div>
              <div class="p-5 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <h4 class="font-bold text-[#0a2540] mb-1">Cross-Country to Florida</h4>
                <p class="text-xs text-[#425466] mb-2">~2,000 – 2,800 Miles</p>
                <div class="text-lg font-black text-[#468de6]">$900 – $1,800</div>
              </div>
            </div>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 7: Disambiguation -->
          <div class="space-y-4">
            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 class="font-bold text-[#0a2540] text-sm mb-1">Cheapest Way to Ship a Car Engine</h4>
              <p class="text-xs text-[#425466] leading-relaxed">
                Shipping a standalone engine is LTL (less-than-truckload) palletized freight ($100–$400), handled by freight carriers. Neon Auto Transport specializes in <strong>whole-vehicle shipping on specialized car carrier trailers</strong>.
              </p>
            </div>

            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 class="font-bold text-[#0a2540] text-sm mb-1">Is Shipping Cheaper Than Trucking?</h4>
              <p class="text-xs text-[#425466] leading-relaxed">
                "Shipping vs trucking" usually refers to commercial ocean/rail freight vs truck freight. For personal vehicle transport, auto transport car carriers are the standard, most cost-effective method across all 50 states.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CALCULATOR FORM SECTION -->
    <section class="py-16 bg-white border-t border-b border-[#e6e6e6]" id="calculator">
      <div class="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div class="text-center mb-8">
          <span class="inline-block px-3 py-1 rounded-full bg-[#39FF14]/20 text-[#0a2540] text-xs font-black uppercase tracking-wider mb-2">CALCULATE YOUR ROUTE RATE</span>
          <h2 class="text-3xl font-black text-[#0a2540]">Get Your Instant Car Transport Quote</h2>
          <p class="text-sm text-[#425466] mt-2">Zero upfront deposit &bull; Real-time market analytics &bull; 100% insured</p>
        </div>

        <div class="bg-[#f6f9fc] rounded-3xl p-6 lg:p-8 border border-[#e6e6e6] shadow-xl">
          <form id="advancedCalcForm" class="space-y-3" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="5e86dea9-8ed6-476f-b4db-1ab24c5de766">
            <input type="hidden" name="subject" value="New Lead: Should I Ship or Drive Guide">
            
            <div id="step1">
              <div class="grid grid-cols-2 gap-3 mb-3">
                <div class="relative">
                  <label class="block text-[11px] font-bold text-[#425466] mb-1">Pickup ZIP or City</label>
                  <input type="text" id="pickupZip" name="Pickup ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:outline-none" placeholder="e.g. 33101 (Miami)">
                  <ul id="pickupDropdown" class="absolute w-full mt-1 bg-white border border-[#e6e6e6] rounded-xl shadow-lg z-50 hidden max-h-40 overflow-y-auto text-xs"></ul>
                </div>
                <div class="relative">
                  <label class="block text-[11px] font-bold text-[#425466] mb-1">Delivery ZIP or City</label>
                  <input type="text" id="deliveryZip" name="Delivery ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:outline-none" placeholder="e.g. 90001 (Los Angeles)">
                  <ul id="deliveryDropdown" class="absolute w-full mt-1 bg-white border border-[#e6e6e6] rounded-xl shadow-lg z-50 hidden max-h-40 overflow-y-auto text-xs"></ul>
                </div>
              </div>
              
              <div class="mb-3">
                <label class="block text-[11px] font-bold text-[#425466] mb-1">Calculated Route Distance (Miles)</label>
                <input type="number" id="distance" name="Distance" required="" min="10" readonly="" class="w-full px-3.5 py-2.5 text-sm bg-white cursor-not-allowed border border-[#e6e6e6] rounded-xl text-[#0a2540] font-bold" placeholder="Auto-calculated from ZIPs">
              </div>

              <div class="mb-3">
                <label class="block text-[11px] font-bold text-[#425466] mb-1" for="pickupDate">Estimated Pickup Date</label>
                <input type="date" id="pickupDate" name="Pickup Date" required="" onclick="this.showPicker && this.showPicker()" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:outline-none bg-white">
              </div>

              <div id="vehicleGroupsContainer">
                <div class="vehicle-group border border-[#e6e6e6] rounded-2xl p-3.5 mb-2 bg-white">
                  <span id="vehicle1Label" class="block text-[11px] font-bold text-[#468de6] uppercase tracking-wide mb-2">Vehicle 1</span>
                  <div class="grid grid-cols-3 gap-2 mb-2">
                    <input type="text" class="vehicleYear w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Year e.g. 2023" required="">
                    <input type="text" class="vehicleMake w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Make e.g. Honda" required="">
                    <input type="text" class="vehicleModel w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Model e.g. Civic" required="">
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <select class="vehicleType w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl bg-white">
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Truck / Pickup</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="classic">Classic / Exotic</option>
                    </select>
                    <select class="vehicleCondition w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl bg-white">
                      <option value="run">Runs &amp; Drives</option>
                      <option value="inop">Inoperable</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="button" id="btnAddVehicle" class="w-full py-2 mb-2 rounded-xl border-2 border-dashed border-[#e6e6e6] text-[#425466] text-xs font-bold hover:border-[#468de6] hover:text-[#468de6] transition-colors flex items-center justify-center gap-1 bg-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                Add Another Vehicle
              </button>

              <div class="mb-3">
                <label class="block text-[11px] font-bold text-[#425466] mb-1" for="transportType">Carrier Type</label>
                <select id="transportType" name="Transport Type" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl bg-white">
                  <option value="open">Open Carrier (Most Popular &amp; Affordable)</option>
                  <option value="enclosed">Enclosed Carrier (For Luxury / Exotic Cars)</option>
                </select>
              </div>

              <button type="button" id="btnNextStep" class="w-full py-3.5 rounded-xl font-black text-white bg-[#635bff] hover:bg-[#0a2540] transition-colors shadow-lg text-base">
                Continue to View Rate &rarr;
              </button>
            </div>

            <div id="step2" class="hidden">
              <button type="button" id="btnBackStep" class="mb-4 inline-flex items-center text-xs font-bold text-white bg-[#e31837] px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#c41530] transition-colors">
                ← Back to Route Details
              </button>
              
              <h3 class="text-lg font-bold text-[#0a2540] mb-3 flex items-center gap-2">
                Where Should We Send Your Instant Quote?
              </h3>

              <div class="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <input type="text" name="First Name" id="firstName" autocomplete="given-name" required="" class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#e6e6e6] rounded-xl focus:outline-none" placeholder="First Name">
                </div>
                <div>
                  <input type="text" name="Last Name" id="lastName" autocomplete="family-name" required="" class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#e6e6e6] rounded-xl focus:outline-none" placeholder="Last Name">
                </div>
              </div>
              
              <div class="mb-3">
                <input type="email" name="Email" id="email" autocomplete="email" required="" class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#e6e6e6] rounded-xl focus:outline-none" placeholder="Email Address">
              </div>

              <div class="mb-3">
                <input type="tel" name="Phone" id="phone" autocomplete="tel" required="" class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#e6e6e6] rounded-xl focus:outline-none" placeholder="Phone Number">
              </div>

              <input type="hidden" name="Estimated Price" id="estimatedPriceField" value="">

              <button type="submit" class="w-full py-3.5 rounded-xl font-black text-[#0a2540] bg-[#39FF14] hover:bg-[#32e011] transition-all shadow-lg text-base">
                Submit &amp; View Guaranteed Rate &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- FREQUENTLY ASKED QUESTIONS (ACCORDION) -->
    <section class="py-16 bg-[#f6f9fc]">
      <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 class="text-3xl font-black text-[#0a2540] mb-8 text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              Is it cheaper to ship a car or drive it?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Driving is usually cheaper under about 500-750 miles. Shipping becomes cost-competitive or cheaper beyond roughly 1,000-1,500 miles once lodging, meals, wear, and time are counted.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              Is car delivery worth it?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              It depends on distance, vehicle value, and schedule. There is no universal answer, but it is most clearly worth it for long distances or vehicles you want to protect from road wear.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              How can I save money on car shipping?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Choose open transport, book 2-4 weeks ahead with a flexible pickup window, ship in shoulder season, and ship multiple vehicles together if possible.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              Are fleet vehicles cheaper to ship?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Yes. Multi-vehicle shipments typically cost 10-25% less per vehicle than shipping individually, with larger fleets sometimes reaching 20-40% savings.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              Is it cheaper to ship shorter distances?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Total cost is lower for short routes, but the price per mile is usually higher. Cross-country routes often have a lower per-mile rate than short regional moves.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              Why is car shipping so expensive?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Pricing reflects real, verifiable factors including distance, vehicle size, transport method, season, and route demand, not arbitrary markup.
            </div>
          </details>
        </div>
      </div>
    </section>

  </main>

  <!-- Global Footer -->
  <footer class="bg-[#0a2540] text-slate-300 py-16 border-t border-slate-800">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        <div class="lg:col-span-4">
          <a href="/" class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-4 inline-block">
            NEON <span style="color: #00D1FF;">AUTO TRANSPORT</span>
          </a>
          <p class="text-sm leading-relaxed mb-6 text-[#8ba3ba]">
            Fast, secure, and reliable nationwide auto transport. We connect you with a highly vetted carrier network to ensure your vehicle arrives safely and on time.
          </p>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-white font-extrabold text-xs uppercase tracking-widest mb-4">Pillar Resources</h3>
          <ul class="space-y-3 text-sm text-[#8ba3ba]">
            <li><a href="/should-i-ship-or-drive-my-car/" class="hover:text-white transition font-bold text-[#39FF14]">Ship or Drive Guide</a></li>
            <li><a href="/cheapest-way-to-ship-a-car/" class="hover:text-white transition">Cheapest Way Guide</a></li>
            <li><a href="/car-transport-cost-guide/" class="hover:text-white transition">Car Transport Cost Guide</a></li>
            <li><a href="/cost-calculator/" class="hover:text-white transition">Cost Calculator</a></li>
          </ul>
        </div>

        <div class="lg:col-span-5">
          <h3 class="text-white font-extrabold text-xs uppercase tracking-widest mb-4">Contact Operations</h3>
          <p class="text-sm text-[#8ba3ba] mb-2">24/7 Support Desk</p>
          <a href="tel:5715767711" class="text-xl font-black text-[#39FF14] hover:underline inline-block mb-4">(571) 576-7711</a>
          <p class="text-xs text-slate-400">USDOT #4355879 &bull; MC #1703787</p>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8ba3ba]">
        <p>&copy; 2026 Neon Auto Transport LLC. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="/privacy/" class="hover:text-white">Privacy Policy</a>
          <a href="/terms/" class="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/js/main.js?v=5" defer=""></script>
  <script src="/js/calculator.js?v=2" defer=""></script>

  <!-- Neon AI Chat Widget -->
  <link rel="stylesheet" href="/css/chatbot.css?v=2" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="/css/chatbot.css?v=2"></noscript>
  <script src="/js/chatbot.js?v=4" defer=""></script>

  <!-- Mobile Sticky CTA -->
  <div id="mobile-sticky-cta">
    <a href="tel:5715767711" class="mobile-cta-btn call">
      <svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
      Call Now
    </a>
    <a href="#calculator" class="mobile-cta-btn quote">
      Get Free Quote
    </a>
  </div>
</body>
</html>
"""

with open(target_file, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"SUCCESS: Built Should I Ship or Drive pillar page at {target_file}")

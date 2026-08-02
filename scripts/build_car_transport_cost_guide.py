import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
guide_dir = os.path.join(SITE_DIR, "car-transport-cost-guide")
os.makedirs(guide_dir, exist_ok=True)
target_file = os.path.join(guide_dir, "index.html")

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>Car Transport Cost Guide: Cheapest Ways to Ship a Car</title>
  <meta name="description" content="See real car shipping costs by method, when to book for the lowest price, and whether train shipping works for your route. Licensed broker, DOT 4355879.">
  <meta name="keywords" content="car transport, cheapest way to ship a car, car shipping cost guide, ship car by train, Florida to Michigan car shipping cost, open vs enclosed transport">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport LLC">
  <link rel="canonical" href="https://neonautotransport.com/car-transport-cost-guide/">

  <!-- Hreflang Tags -->
  <link rel="alternate" hreflang="en-us" href="https://neonautotransport.com/car-transport-cost-guide/">
  <link rel="alternate" hreflang="x-default" href="https://neonautotransport.com/car-transport-cost-guide/">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://neonautotransport.com/car-transport-cost-guide/">
  <meta property="og:title" content="Car Transport Cost Guide: Cheapest Ways to Ship a Car">
  <meta property="og:description" content="Discover the most cost-effective ways to transport your car. Real rates, carrier data, train shipping limitations, and route pricing examples.">
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">
  <meta property="og:site_name" content="Neon Auto Transport">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Car Transport Cost Guide: Cheapest Ways to Ship a Car">
  <meta name="twitter:description" content="Real auto shipping rates, open vs enclosed comparison, and expert cost-saving strategies.">
  <meta name="twitter:image" content="https://neonautotransport.com/images/og-cover.jpg">

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
        "name": "Resources",
        "item": "https://neonautotransport.com/cost-calculator/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Car Transport Cost Guide",
        "item": "https://neonautotransport.com/car-transport-cost-guide/"
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
        "name": "What is the cheapest way to ship a car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open transport is the cheapest shipping method, typically costing less per mile than enclosed transport on the same route."
        }
      },
      {
        "@type": "Question",
        "name": "Can you ship a car on a train?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only on Amtrak's Auto Train route between Lorton, VA and Sanford, FL. No other train-shipping route exists in the U.S. for personal vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to ship a car from Florida to Michigan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically $900-$1,600 on open transport for the roughly 1,300-1,400 mile route, with delivery in 3-6 days."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cheapest day to ship a car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no single cheapest day of the week — booking 2-4 weeks ahead with a flexible pickup window and shipping during shoulder-season months matters more than the day itself."
        }
      },
      {
        "@type": "Question",
        "name": "How do I ship my car to another state?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get a quote, book a pickup window, and a licensed carrier handles door-to-door pickup, transport, and delivery with condition inspections at both ends."
        }
      },
      {
        "@type": "Question",
        "name": "Is enclosed transport worth the extra cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For classic, exotic, or brand-new vehicles, yes — it protects against weather and road debris that open transport does not shield against."
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
    "headline": "Car Transport: How Much It Costs and the Cheapest Way to Ship a Car",
    "description": "Comprehensive pillar guide on vehicle shipping costs, open vs enclosed transport, train shipping limitations, and route pricing.",
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
          <a href="/why-neon/" class="hover:opacity-80 transition text-white">Why Neon</a>
          <a href="/cost-calculator/" class="hover:opacity-80 transition text-white">Cost Calculator</a>
          <a href="/reviews/" class="hover:opacity-80 transition text-white">Reviews</a>
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
      <a href="/services/" class="hover:text-[#635bff]">Transport Services</a>
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
          <a href="/cost-calculator/" class="text-[#468de6] hover:underline">Resources</a>
          <span class="text-[#8ba3ba]">/</span>
          <span class="text-[#0a2540] font-bold">Car Transport Cost Guide</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#468de6]/10 text-[#468de6] text-xs font-extrabold uppercase tracking-wider mb-4">
          OPERATIONAL INDUSTRY GUIDE &bull; 2026 EDITION
        </div>

        <h1 class="text-3xl md:text-5xl font-black text-[#0a2540] mb-6 tracking-tight leading-tight">
          Car Transport: How Much It Costs and the Cheapest Way to Ship a Car
        </h1>

        <!-- Front-Loaded Featured Snippet / AI Overview Quick Answer Block -->
        <div class="p-6 bg-[#f6f9fc] rounded-2xl border-l-4 border-[#468de6] mb-8 text-[#0a2540] leading-relaxed">
          <p class="font-semibold text-base md:text-lg mb-3">
            <strong>Quick Answer:</strong> Open transport is the cheapest way to ship a car, typically costing less than enclosed transport for the same route. A cross-country shipment on an open carrier commonly runs in the neighborhood of <strong>$0.60–$1.00 per mile</strong>, with shorter routes costing more per mile than longer ones.
          </p>
          <p class="text-sm text-[#425466]">
            Neon Auto Transport is a licensed and insured car shipping broker (USDOT 4355879, MC 1703787) based in Woodbridge, Virginia, arranging both open and enclosed transport nationwide.
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

          <!-- Section 1 -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Cheapest Transport Methods Compared
            </h2>
            <p class="mb-6">
              When transporting a vehicle across states, total costs depend primarily on the carrier type you select, total route distance, and seasonal demand. Below is a realistic breakdown of the primary vehicle transport methods available today.
            </p>

            <div class="space-y-6">
              <div class="p-6 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">1. Open Transport (Cheapest Option)</h3>
                <p class="text-sm">
                  Open transport means your vehicle rides on a double-decker trailer alongside several other cars — the same type of carrier you see hauling new vehicles to dealerships. It's the industry standard for a reason: carriers can move more vehicles per trip, which keeps the per-car price down. Your vehicle is exposed to weather and road debris during transit, which is a non-issue for most daily-driven vehicles and a real consideration for classic, exotic, or brand-new cars.
                </p>
              </div>

              <div class="p-6 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">2. Enclosed Transport (More Expensive, More Protection)</h3>
                <p class="text-sm mb-2">
                  <a href="/services/enclosed-auto-transport/" class="text-[#468de6] font-bold hover:underline">Enclosed transport</a> uses a fully covered trailer, shielding the vehicle from weather and debris. It typically costs 30–60% more than open transport because enclosed trailers carry fewer vehicles per trip and require more specialized equipment.
                </p>
                <p class="text-sm">
                  This is the right call for classic cars, exotics, and any vehicle where cosmetic condition on arrival matters more than saving money.
                </p>
              </div>

              <div class="p-6 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">3. Driving It Yourself</h3>
                <p class="text-sm">
                  For distances under a few hundred miles, driving is often genuinely cheaper than shipping once you factor in fuel and time — but it adds mileage, wear, and your own time to the cost side of the ledger. For longer moves, shipping usually wins once you price in gas, food, lodging, and the wear on a vehicle that's about to sit in a new driveway anyway.
                </p>
              </div>
            </div>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 2: Train Shipping Direct Clarification -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Can You Ship a Car on a Train?
            </h2>
            <div class="p-6 bg-amber-50 rounded-2xl border border-amber-200 text-[#0a2540] mb-4">
              <p class="font-bold text-base mb-1">
                <strong>Direct Answer:</strong> Yes, but only on one specific route: Amtrak's Auto Train runs between Lorton, Virginia and Sanford, Florida, and nowhere else.
              </p>
            </div>
            <p class="text-sm leading-relaxed mb-4">
              If your route is anywhere along that corridor, the Auto Train is a genuine, often cost-competitive option — expect to pay roughly <strong>$500–$900 total</strong> (vehicle fee plus required passenger fare), with a fast ~17-hour transit.
            </p>
            <p class="text-sm leading-relaxed">
              If your route is anywhere else in the country, including Florida-to-Michigan, train shipping simply isn't available, and truck-based open or enclosed transport is your only real option. This is worth stating plainly, because it's easy to find generic "ship your car by train" content online that fails to clarify this strict route restriction.
            </p>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 3: Florida to Michigan Worked Example -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              Florida to Michigan Car Shipping Cost (Worked Example)
            </h2>
            <p class="mb-4 text-sm">
              Shipping a standard sedan from <a href="/florida-car-shipping/" class="text-[#468de6] font-bold hover:underline">Florida</a> to Michigan — a major interstate corridor of roughly 1,300–1,400 miles — typically costs between <strong>$900 and $1,600</strong> on open transport, with delivery completed in 3 to 6 days.
            </p>
            <p class="mb-4 text-sm">
              Enclosed transport on the same route runs higher, reflecting the 30–60% enclosed premium described above. Because this route falls entirely outside the Amtrak Auto Train corridor, truck-based transport is the only shipping method available for it — driving it yourself remains the only non-shipping alternative for this distance.
            </p>

            <div class="p-6 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6] mt-4">
              <h4 class="font-bold text-[#0a2540] text-base mb-2">Florida to Michigan Shipping Summary</h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-semibold text-[#0a2540]">
                <div class="p-3 bg-white rounded-xl border border-[#e6e6e6]">
                  <div class="text-[#468de6] font-black text-sm mb-1">1,350 Mi</div>
                  Avg Distance
                </div>
                <div class="p-3 bg-white rounded-xl border border-[#e6e6e6]">
                  <div class="text-[#468de6] font-black text-sm mb-1">$900 – $1,600</div>
                  Open Transport
                </div>
                <div class="p-3 bg-white rounded-xl border border-[#e6e6e6]">
                  <div class="text-[#468de6] font-black text-sm mb-1">3 – 6 Days</div>
                  Transit Time
                </div>
                <div class="p-3 bg-white rounded-xl border border-[#e6e6e6]">
                  <div class="text-[#468de6] font-black text-sm mb-1">Truck Only</div>
                  No Train Option
                </div>
              </div>
            </div>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 4: When to Book -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              When to Book for the Lowest Price
            </h2>
            <p class="text-sm leading-relaxed mb-4">
              Booking <strong>2 to 4 weeks ahead</strong> and giving carriers a flexible 3 to 5 day pickup window — rather than demanding an exact date — is the single biggest lever for securing a lower quote. Flexibility lets a licensed broker slot your vehicle onto a car carrier trailer that is already scheduled to pass through your location.
            </p>
            <p class="text-sm leading-relaxed">
              Shoulder-season months (spring and autumn, outside of peak summer relocation surges) tend to offer more competitive pricing than peak summer, when household moves and seasonal snowbird traffic drive carrier demand along major interstate highways.
            </p>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 5: Process -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              How the Car Shipping Process Works (Shipping to Another State)
            </h2>
            <ol class="space-y-4 text-sm font-medium text-[#0a2540]">
              <li class="flex items-start gap-3 p-4 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <span class="w-7 h-7 rounded-full bg-[#468de6] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                <div>
                  <strong>Get a Quote:</strong> Request an instant route quote based on your pickup/delivery ZIP codes, vehicle size, and preferred transport type (open vs enclosed).
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <span class="w-7 h-7 rounded-full bg-[#468de6] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                <div>
                  <strong>Book &amp; Confirm Pickup:</strong> Confirm your flexible pickup window with zero upfront deposit required.
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <span class="w-7 h-7 rounded-full bg-[#468de6] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                <div>
                  <strong>Vehicle Pickup &amp; Inspection:</strong> A licensed, insured carrier arrives at your door to inspect and document your car's condition on the official Bill of Lading (BOL).
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <span class="w-7 h-7 rounded-full bg-[#468de6] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">4</span>
                <div>
                  <strong>Transit &amp; Driver Updates:</strong> Your vehicle travels safely across the interstate network with direct driver communication available.
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
                <span class="w-7 h-7 rounded-full bg-[#468de6] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">5</span>
                <div>
                  <strong>Door-to-Door Delivery:</strong> Inspect your vehicle upon arrival against the Bill of Lading and sign off.
                </div>
              </li>
            </ol>
          </div>

          <hr class="border-[#e6e6e6]">

          <!-- Section 6: Verification -->
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">
              What to Look For in a Car Shipping Company
            </h2>
            <p class="text-sm leading-relaxed mb-4">
              Rather than making unverified "we are #1" claims, what actually matters when choosing an auto transport company is verifiable licensing and operational transparency:
            </p>
            <ul class="space-y-3 text-sm text-[#0a2540] font-medium">
              <li class="flex items-center gap-2">✓ <strong>Active FMCSA &amp; USDOT Licensing:</strong> Ask any broker for their license number before booking. Neon Auto Transport's USDOT number is <strong>4355879</strong> (MC #1703787), searchable on the official FMCSA SAFER system.</li>
              <li class="flex items-center gap-2">✓ <strong>Zero Upfront Deposit:</strong> Never pay before a carrier is dispatched to your vehicle.</li>
              <li class="flex items-center gap-2">✓ <strong>Included Cargo Insurance:</strong> Verify that active motor carrier cargo coverage is provided for your shipment.</li>
            </ul>
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
            <input type="hidden" name="subject" value="New Lead: Car Transport Cost Guide">
            
            <div id="step1">
              <div class="grid grid-cols-2 gap-3 mb-3">
                <div class="relative">
                  <label class="block text-[11px] font-bold text-[#425466] mb-1">Pickup ZIP or City</label>
                  <input type="text" id="pickupZip" name="Pickup ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:outline-none" placeholder="e.g. 33101 (Miami)">
                  <ul id="pickupDropdown" class="absolute w-full mt-1 bg-white border border-[#e6e6e6] rounded-xl shadow-lg z-50 hidden max-h-40 overflow-y-auto text-xs"></ul>
                </div>
                <div class="relative">
                  <label class="block text-[11px] font-bold text-[#425466] mb-1">Delivery ZIP or City</label>
                  <input type="text" id="deliveryZip" name="Delivery ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:outline-none" placeholder="e.g. 48201 (Detroit)">
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
              What is the cheapest way to ship a car?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Open transport is the cheapest shipping method, typically costing less per mile than enclosed transport on the same route.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              Can you ship a car on a train?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Only on Amtrak's Auto Train route between Lorton, VA and Sanford, FL. No other train-shipping route exists in the U.S. for personal vehicles.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              How much does it cost to ship a car from Florida to Michigan?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Typically $900-$1,600 on open transport for the roughly 1,300-1,400 mile route, with delivery in 3-6 days.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              What is the cheapest day to ship a car?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              There is no single cheapest day of the week — booking 2-4 weeks ahead with a flexible pickup window and shipping during shoulder-season months matters more than the day itself.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              How do I ship my car to another state?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Get a quote, book a pickup window, and a licensed carrier handles door-to-door pickup, transport, and delivery with condition inspections at both ends.
            </div>
          </details>

          <details class="group bg-white rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 list-none text-base">
              Is enclosed transport worth the extra cost?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              For classic, exotic, or brand-new vehicles, yes — it protects against weather and road debris that open transport does not shield against.
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
            <li><a href="/car-transport-cost-guide/" class="hover:text-white transition font-bold text-[#39FF14]">Car Transport Cost Guide</a></li>
            <li><a href="/cost-calculator/" class="hover:text-white transition">Cost Calculator</a></li>
            <li><a href="/florida-car-shipping/" class="hover:text-white transition">Florida Car Shipping</a></li>
            <li><a href="/georgia-car-shipping/" class="hover:text-white transition">Georgia Car Shipping</a></li>
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

print(f"SUCCESS: Built Car Transport Cost Guide pillar page at {target_file}")

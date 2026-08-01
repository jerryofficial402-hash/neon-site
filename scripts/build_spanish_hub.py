import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
es_dir = os.path.join(SITE_DIR, "es")
os.makedirs(es_dir, exist_ok=True)
target_file = os.path.join(es_dir, "index.html")

html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO Spanish -->
  <title>Neon Auto Transport | Empresa de Transporte de Autos en EE. UU.</title>
  <meta name="description" content="Envíe su vehículo a cualquier estado de EE. UU. con Neon Auto Transport. Cotizaciones al instante, transporte puerta a puerta, cubrimiento de seguro y sin depósito.">
  <meta name="keywords" content="transporte de autos, envio de carros estados unidos, cotizacion envio de autos, transporte de vehiculos puerta a puerta, empresa de transporte de autos">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport">
  <link rel="canonical" href="https://neonautotransport.com/es/">

  <!-- Hreflang Tags -->
  <link rel="alternate" hreflang="en-us" href="https://neonautotransport.com/">
  <link rel="alternate" hreflang="es-us" href="https://neonautotransport.com/es/">
  <link rel="alternate" hreflang="x-default" href="https://neonautotransport.com/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://neonautotransport.com/es/">
  <meta property="og:title" content="Neon Auto Transport | Empresa de Transporte de Autos en EE. UU.">
  <meta property="og:description" content="Envíe su vehículo de forma segura a cualquier estado. Transporte puerta a puerta, camiones abiertos y cerrados, sin depósito y con tarifa garantizada.">
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Neon Auto Transport">
  <meta property="og:locale" content="es_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Neon Auto Transport | Transporte de Vehículos en EE. UU.">
  <meta name="twitter:description" content="Cotización al instante para enviar su auto a cualquier estado de EE. UU. Servicio puerta a puerta y totalmente asegurado.">
  <meta name="twitter:image" content="https://neonautotransport.com/images/og-cover.jpg">

  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/tailwind.css?v=3">
  <link rel="stylesheet" href="/css/styles.css">

  <!-- JSON-LD: Service + BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": ["Service", "Product"],
    "name": "Transporte de Autos en EE. UU.",
    "description": "Servicio profesional de transporte de vehículos puerta a puerta a nivel nacional en Estados Unidos.",
    "serviceType": "Auto Transport",
    "inLanguage": "es-US",
    "provider": {
      "@type": ["MovingCompany", "LocalBusiness"],
      "name": "Neon Auto Transport",
      "telephone": "+15715767711",
      "url": "https://neonautotransport.com/es/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2700 Neabsco Common Pl Suite 101",
        "addressLocality": "Woodbridge",
        "addressRegion": "VA",
        "postalCode": "22191",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "image": [
      "https://neonautotransport.com/images/og-cover.jpg"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Neon Auto Transport"
    },
    "url": "https://neonautotransport.com/es/",
    "offers": {
      "@type": "Offer",
      "price": "500.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Neon Auto Transport"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://neonautotransport.com/es/" },
      { "@type": "ListItem", "position": 2, "name": "Transporte de Autos", "item": "https://neonautotransport.com/es/" }
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
        "name": "¿Cuánto cuesta enviar un auto en Estados Unidos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo varía según la distancia, el tipo de vehículo (sedán, SUV, camioneta) y el tipo de camión (abierto o cerrado). Las rutas cortas comienzan desde $150–$300, mientras que las rutas de costa a costa oscilan entre $1,000 y $1,600. Obtenga una cotización exacta al instante."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funciona el servicio puerta a puerta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El camionero recoge su vehículo lo más cerca posible de la dirección de origen y lo entrega en la puerta de su nuevo destino de forma directa y segura."
        }
      },
      {
        "@type": "Question",
        "name": "¿Debo pagar por adelantado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. En Neon Auto Transport no requerimos ningún depósito inicial al reservar. Usted solo paga cuando se asigna un transportista y se confirma la fecha de recolección."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mi vehículo está asegurado durante el traslado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Todos los transportistas de nuestra red cuentan con seguro de carga comercial requerido por la FMCSA que cubre su auto durante todo el trayecto."
        }
      }
    ]
  }
  </script>

  <style>
    @media (min-width: 1024px) {
      html { font-size: 110%; }
    }
    #sticky-widget { display: none !important; }
    #mobile-sticky-cta { position: fixed; bottom: 0; left: 0; width: 100%; z-index: 50; padding: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-top: 1px solid #e6e6e6; box-shadow: 0 -4px 10px -1px rgba(0,0,0,0.1); display: flex; gap: 12px; align-items: center; justify-content: space-between; box-sizing: border-box; }
    @media (min-width: 1024px) { #mobile-sticky-cta { display: none !important; } }
    .mobile-cta-btn { flex: 1; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; border-radius: 8px; font-weight: 900; text-decoration: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif; font-size: 15px; box-sizing: border-box; }
    .mobile-cta-btn.call { background-color: #39FF14; color: #0a2540; }
    .mobile-cta-btn.quote { background-color: #0a2540; color: #ffffff; }
    .mobile-cta-btn svg { width: 20px; height: 20px; flex-shrink: 0; }
  </style>
</head>

<body class="antialiased bg-[#f6f9fc]">
  <!-- Global Header with Language Switcher -->
  <header class="fixed top-0 w-full z-50 transition-all duration-300" id="global-header" style="background-color:#0a2540">
    <div class="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center" style="gap:24px">
      <!-- Left: Logo + Desktop Nav -->
      <div class="flex items-center" style="gap:24px">
        <a href="/es/" class="text-2xl font-black tracking-tight flex items-center gap-1 text-white" style="white-space:nowrap" id="logo-text">
          NEON <span style="color: #00D1FF">AUTO TRANSPORT</span>
        </a>
        <nav aria-label="Navegación Principal" class="hidden lg:flex items-center font-semibold text-[15px] text-white" id="desktop-nav" style="white-space:nowrap;gap:24px">
          <a href="/es/#como-funciona" class="hover:opacity-80 transition text-white">Cómo Funciona</a>
          <a href="/es/cotizador-envio-de-autos/" class="hover:opacity-80 transition text-white">Cotizador</a>
          <a href="/es/envio-de-autos-florida/" class="hover:opacity-80 transition text-white">Florida</a>
          <a href="/es/envio-de-autos-georgia/" class="hover:opacity-80 transition text-white">Georgia</a>
          <a href="/why-neon/" class="hover:opacity-80 transition text-white">Nosotros</a>
          <a href="/contact/" class="hover:opacity-80 transition text-white">Contacto</a>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-4">
        <!-- Language Switcher Badge -->
        <a href="/" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition">
          <span>🇺🇸</span> English
        </a>
        <a href="tel:5715767711" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition-colors shadow-[0_0_15px_rgba(57,255,20,0.4)]" style="white-space:nowrap">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          (571) 576-7711
        </a>
        <a href="/es/cotizador-envio-de-autos/" class="border border-white/30 text-white hover:bg-white hover:text-[#0a2540] px-5 py-2.5 rounded-full font-bold transition-colors" style="white-space:nowrap">Cotizar Ahora</a>
      </div>

      <!-- Mobile Menu Btn -->
      <button id="mobile-menu-btn" aria-label="Abrir menú" class="lg:hidden text-white focus:outline-none">
        <svg aria-hidden="true" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
    
    <!-- Mobile Nav -->
    <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-slate-200 flex flex-col p-4 space-y-4 text-center font-semibold text-[#425466] shadow-xl">
      <a href="/es/#como-funciona" class="hover:text-[#635bff]">Cómo Funciona</a>
      <a href="/es/cotizador-envio-de-autos/" class="hover:text-[#635bff]">Cotizador Gratis</a>
      <a href="/es/envio-de-autos-florida/" class="hover:text-[#635bff]">Envío a Florida</a>
      <a href="/es/envio-de-autos-georgia/" class="hover:text-[#635bff]">Envío a Georgia</a>
      <a href="/" class="hover:text-[#635bff] font-bold text-[#468de6]">🇺🇸 English Version</a>
      <hr>
      <a href="tel:5715767711" class="bg-[#39FF14] text-[#0a2540] py-3 rounded-xl font-black text-lg shadow-lg">Llamar: (571) 576-7711</a>
      <a href="/es/cotizador-envio-de-autos/" class="bg-[#635bff] text-white py-3 rounded-xl font-bold inline-block mx-auto mt-2 px-8">Obtener Cotización</a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION SPANISH -->
    <section class="bg-[#f6f9fc] border-b border-[#e6e6e6] pt-24 pb-12 lg:pt-28 lg:pb-16">
      <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div class="lg:w-1/2 flex flex-col justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e6e6e6] bg-white shadow-sm text-[#0a2540] text-xs font-bold mb-6 self-start">
              <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
              Empresa Licenciada y Aprobada por la FMCSA
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">
              Transporte de Autos en Estados Unidos
            </h1>
            <p class="text-lg text-[#425466] mb-8 leading-relaxed">
              Envíe su carro a cualquier estado de EE. UU. de forma rápida, segura y al mejor precio. En Neon Auto Transport ofrecemos servicio puerta a puerta, sin depósito inicial, con rastreo en tiempo real y seguro de carga completo.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="/es/cotizador-envio-de-autos/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-xl font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_15px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2">
                Calcular Tarifa Gratis &rarr;
              </a>
              <a href="tel:5715767711" class="bg-[#0a2540] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a385c] transition text-center">
                Llamar (571) 576-7711
              </a>
            </div>

            <!-- Value Badges -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-[#e6e6e6] text-center text-xs font-bold text-[#0a2540]">
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <div class="text-[#468de6] text-base font-black mb-1">100%</div>
                Sin Depósito Inicial
              </div>
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <div class="text-[#468de6] text-base font-black mb-1">Puerta a Puerta</div>
                Servicio Directo
              </div>
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <div class="text-[#468de6] text-base font-black mb-1">Asegurado</div>
                Cobertura Completa
              </div>
            </div>

          </div>

          <div class="lg:w-1/2 relative w-full">
            <div class="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5 bg-white p-3">
              <img src="/images/og-cover.jpg" alt="Transporte de autos en Estados Unidos" class="w-full h-auto rounded-2xl object-cover" width="1200" height="630" fetchpriority="high">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CÓMO FUNCIONA -->
    <section class="py-16 bg-white border-b border-[#e6e6e6]" id="como-funciona">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#468de6]/10 text-[#468de6] text-xs font-bold uppercase tracking-wider mb-3">PASO A PASO</span>
          <h2 class="text-3xl md:text-4xl font-black text-[#0a2540]">¿Cómo Funciona el Envío de su Vehículo?</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 rounded-3xl bg-[#f6f9fc] border border-[#e6e6e6] relative">
            <div class="w-12 h-12 rounded-2xl bg-[#468de6] text-white font-black text-xl flex items-center justify-center mb-6">1</div>
            <h3 class="text-xl font-bold text-[#0a2540] mb-3">Solicite su Cotización</h3>
            <p class="text-sm text-[#425466] leading-relaxed">Ingrese la ciudad de origen, destino y modelo de su vehículo en nuestro cotizador para recibir un precio garantizado en segundos.</p>
          </div>

          <div class="p-8 rounded-3xl bg-[#f6f9fc] border border-[#e6e6e6] relative">
            <div class="w-12 h-12 rounded-2xl bg-[#468de6] text-white font-black text-xl flex items-center justify-center mb-6">2</div>
            <h3 class="text-xl font-bold text-[#0a2540] mb-3">Recolección Puerta a Puerta</h3>
            <p class="text-sm text-[#425466] leading-relaxed">Un camionero certificado inspecciona y carga su auto directamente en la dirección que indique en la fecha acordada.</p>
          </div>

          <div class="p-8 rounded-3xl bg-[#f6f9fc] border border-[#e6e6e6] relative">
            <div class="w-12 h-12 rounded-2xl bg-[#468de6] text-white font-black text-xl flex items-center justify-center mb-6">3</div>
            <h3 class="text-xl font-bold text-[#0a2540] mb-3">Entrega Segura</h3>
            <p class="text-sm text-[#425466] leading-relaxed">Su vehículo se entrega en la puerta de su destino final. Usted inspecciona el auto y firma la entrega sin complicaciones.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ESTADOS DESTACADOS -->
    <section class="py-16 bg-[#f6f9fc] border-b border-[#e6e6e6]">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 class="text-3xl font-black text-[#0a2540] mb-8 text-center">Guías de Envío por Estado en Español</h2>
        <div class="grid md:grid-cols-2 gap-8">
          
          <a href="/es/envio-de-autos-florida/" class="block bg-white p-8 rounded-3xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition group">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-black text-[#0a2540] group-hover:text-[#468de6] transition">Envío de Autos a Florida</h3>
              <span class="text-[#468de6] font-bold text-xl">&rarr;</span>
            </div>
            <p class="text-sm text-[#425466] leading-relaxed">Guía completa para enviar vehículos a Miami, Orlando, Tampa, Jacksonville y todo el estado de Florida con tarifas 2026.</p>
          </a>

          <a href="/es/envio-de-autos-georgia/" class="block bg-white p-8 rounded-3xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition group">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-black text-[#0a2540] group-hover:text-[#468de6] transition">Envío de Autos a Georgia</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Transporte directo a Atlanta, Savannah, Augusta y Columbus. Conozca distancias, costos y tiempos de entrega.</p>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- PREGUNTAS FRECUENTES -->
    <section class="py-16 bg-white border-b border-[#e6e6e6]">
      <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 class="text-3xl font-black text-[#0a2540] mb-8 text-center">Preguntas Frecuentes sobre el Envío de Autos</h2>
        <div class="space-y-4">
          
          <details class="group bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base">
              ¿Cuánto cuesta enviar un auto en Estados Unidos?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              El costo varía según la distancia, el tipo de vehículo (sedán, SUV, camioneta) y el tipo de camión (abierto o cerrado). Las rutas cortas comienzan desde $150–$300, mientras que las rutas de costa a costa oscilan entre $1,000 y $1,600.
            </div>
          </details>

          <details class="group bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base">
              ¿Cómo funciona el servicio puerta a puerta?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              El camionero recoge su vehículo lo más cerca posible de la dirección de origen y lo entrega en la puerta de su nuevo destino de forma directa y segura.
            </div>
          </details>

          <details class="group bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base">
              ¿Debo pagar por adelantado?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              No. En Neon Auto Transport no requerimos ningún depósito inicial al reservar. Usted solo paga cuando se asigna un transportista y se confirma la fecha de recolección.
            </div>
          </details>

          <details class="group bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base">
              ¿Mi vehículo está asegurado durante el traslado?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
              Sí. Todos los transportistas de nuestra red cuentan con seguro de carga comercial requerido por la FMCSA que cubre su auto durante todo el trayecto.
            </div>
          </details>

        </div>
      </div>
    </section>

    <!-- BANNER FINAL CTA -->
    <section class="py-16 bg-[#0a2540] text-white">
      <div class="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <span class="inline-block px-3 py-1 rounded-full bg-[#39FF14] text-[#0a2540] font-black text-xs uppercase tracking-wider mb-4">GARANTÍA DE TARIFA</span>
        <h2 class="text-3xl md:text-4xl font-black text-white mb-4">Cotice el Envío de su Vehículo Hoy Mismo</h2>
        <p class="text-slate-300 text-base max-w-xl mx-auto mb-8">
          Sin compromisos ni cargos ocultos. Obtenga su cotización gratuita y asegure el transporte de su carro con los mejores profesionales.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/es/cotizador-envio-de-autos/" class="w-full sm:w-auto bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-xl font-black text-base hover:bg-[#32e011] transition shadow-lg">
            Obtener Cotización Gratis &rarr;
          </a>
          <a href="tel:5715767711" class="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-base transition">
            Llamar: (571) 576-7711
          </a>
        </div>
      </div>
    </section>

  </main>

  <!-- Global Footer -->
  <footer class="bg-[#0a2540] text-slate-300 py-16 border-t border-slate-800">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        <div class="lg:col-span-4">
          <a href="/es/" class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-4 inline-block">
            NEON <span style="color: #00D1FF;">AUTO TRANSPORT</span>
          </a>
          <p class="text-sm leading-relaxed mb-6 text-[#8ba3ba]">
            Transporte de vehículos confiable y seguro a nivel nacional en Estados Unidos. Conectamos su auto con una red de camioneros certificados y asegurados.
          </p>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-white font-extrabold text-xs uppercase tracking-widest mb-4">Navegación</h3>
          <ul class="space-y-3 text-sm text-[#8ba3ba]">
            <li><a href="/es/cotizador-envio-de-autos/" class="hover:text-white transition">Cotizador de Envío</a></li>
            <li><a href="/es/envio-de-autos-florida/" class="hover:text-white transition">Envío a Florida</a></li>
            <li><a href="/es/envio-de-autos-georgia/" class="hover:text-white transition">Envío a Georgia</a></li>
            <li><a href="/" class="hover:text-white transition">English Version 🇺🇸</a></li>
          </ul>
        </div>

        <div class="lg:col-span-5">
          <h3 class="text-white font-extrabold text-xs uppercase tracking-widest mb-4">Contacto</h3>
          <p class="text-sm text-[#8ba3ba] mb-2">Atención Telefónica y Soporte 24/7</p>
          <a href="tel:5715767711" class="text-xl font-black text-[#39FF14] hover:underline inline-block mb-4">(571) 576-7711</a>
          <p class="text-xs text-slate-400">USDOT #4355879 &bull; MC #1703787</p>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8ba3ba]">
        <p>&copy; 2026 Neon Auto Transport LLC. Todos los derechos reservados.</p>
        <div class="flex gap-6">
          <a href="/privacy-policy/" class="hover:text-white">Política de Privacidad</a>
          <a href="/terms-of-service/" class="hover:text-white">Términos del Servicio</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Neon AI Chat Widget -->
  <link rel="stylesheet" href="/css/chatbot.css?v=2" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="/css/chatbot.css?v=2"></noscript>
  <script src="/js/chatbot.js?v=4" defer=""></script>

  <!-- Mobile Menu Toggle -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var btn = document.getElementById('mobile-menu-btn');
      var menu = document.getElementById('mobile-menu');
      if (btn && menu) btn.addEventListener('click', function() { menu.classList.toggle('hidden'); });
    });
  </script>

  <!-- Header Scroll Shadow -->
  <script>
    window.addEventListener('scroll', () => {
      const header = document.getElementById('global-header');
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  </script>

  <!-- Mobile Sticky CTA -->
  <div id="mobile-sticky-cta">
    <a href="tel:5715767711" class="mobile-cta-btn call">
      <svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
      Llamar
    </a>
    <a href="/es/cotizador-envio-de-autos/" class="mobile-cta-btn quote">
      Cotizar Gratis
    </a>
  </div>
</body>
</html>
"""

with open(target_file, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"SUCCESS: Created Spanish main hub page at {target_file}")

import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
calc_dir = os.path.join(SITE_DIR, "es", "cotizador-envio-de-autos")
os.makedirs(calc_dir, exist_ok=True)
target_file = os.path.join(calc_dir, "index.html")

html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO Spanish -->
  <title>Cotizador de Envío de Autos | Neon Auto Transport</title>
  <meta name="description" content="Calcule el costo de enviar su vehículo a cualquier estado de EE. UU. Cotizaciones al instante, transporte abierto y cerrado, sin depósito inicial.">
  <meta name="keywords" content="cotizador envio de autos, calcular costo envio vehiculo, transporte de autos tarifa, cuanto cuesta enviar un auto">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport">
  <link rel="canonical" href="https://neonautotransport.com/es/cotizador-envio-de-autos/">

  <!-- Hreflang Tags -->
  <link rel="alternate" hreflang="en-us" href="https://neonautotransport.com/cost-calculator/">
  <link rel="alternate" hreflang="es-us" href="https://neonautotransport.com/es/cotizador-envio-de-autos/">
  <link rel="alternate" hreflang="x-default" href="https://neonautotransport.com/cost-calculator/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://neonautotransport.com/es/cotizador-envio-de-autos/">
  <meta property="og:title" content="Cotizador de Envío de Autos | Neon Auto Transport">
  <meta property="og:description" content="Calcule al instante el precio garantizado para enviar su carro dentro de Estados Unidos.">
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">

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
        <a href="/es/" class="text-2xl font-black tracking-tight flex items-center gap-1 text-white" id="logo-text">
          NEON <span style="color: #00D1FF">AUTO TRANSPORT</span>
        </a>
        <nav class="hidden lg:flex items-center font-semibold text-[15px] text-white" style="gap:24px">
          <a href="/es/#como-funciona" class="hover:opacity-80 transition text-white">Cómo Funciona</a>
          <a href="/es/envio-de-autos-florida/" class="hover:opacity-80 transition text-white">Florida</a>
          <a href="/es/envio-de-autos-georgia/" class="hover:opacity-80 transition text-white">Georgia</a>
          <a href="/contact/" class="hover:opacity-80 transition text-white">Contacto</a>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-4">
        <a href="/cost-calculator/" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition">
          <span>🇺🇸</span> English
        </a>
        <a href="tel:5715767711" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition-colors">
          (571) 576-7711
        </a>
      </div>
    </div>
  </header>

  <main class="pt-24 pb-16">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
      
      <div class="text-center mb-10">
        <span class="inline-block px-3 py-1 rounded-full bg-[#468de6]/10 text-[#468de6] text-xs font-bold uppercase tracking-wider mb-3">COTIZACIÓN AL INSTANTE</span>
        <h1 class="text-3xl md:text-5xl font-black text-[#0a2540] mb-4">Cotizador de Envío de Autos</h1>
        <p class="text-base text-[#425466] max-w-2xl mx-auto">Complete el formulario a continuación para calcular la tarifa exacta de transporte de su vehículo a cualquier estado de EE. UU.</p>
      </div>

      <!-- Quote Calculator Card -->
      <div class="bg-white rounded-3xl p-6 lg:p-10 border border-[#e6e6e6] shadow-xl max-w-2xl mx-auto">
        
        <div class="flex items-center justify-between mb-4 border-b border-[#e6e6e6] pb-4">
          <div>
            <h2 class="text-2xl font-black text-[#0a2540]">Obtenga su Cotización Gratis</h2>
            <p class="text-[#425466] text-xs font-medium">Cálculo instantáneo &bull; Sin compromiso de reserva</p>
          </div>
          <span class="px-3 py-1 bg-[#468de6]/10 text-[#468de6] text-xs font-bold rounded-full uppercase tracking-wider">Rápido y Gratis</span>
        </div>

        <form id="advancedCalcForm" class="space-y-3" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="5e86dea9-8ed6-476f-b4db-1ab24c5de766">
          <input type="hidden" name="subject" value="New Spanish Lead: Auto Transport Quote">
          
          <!-- Step 1: Shipment Details -->
          <div id="step1">
            <div class="grid grid-cols-2 gap-3 mb-3">
              <div class="relative">
                <label class="block text-[11px] font-bold text-[#425466] mb-1">Código Postal u Origen</label>
                <input type="text" id="pickupZip" name="Pickup ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:ring-2 focus:ring-[#468de6]/20 focus:outline-none" placeholder="Ej. 33101 (Miami)">
                <ul id="pickupDropdown" class="absolute w-full mt-1 bg-white border border-[#e6e6e6] rounded-xl shadow-lg z-50 hidden max-h-40 overflow-y-auto text-xs"></ul>
              </div>
              <div class="relative">
                <label class="block text-[11px] font-bold text-[#425466] mb-1">Código Postal o Destino</label>
                <input type="text" id="deliveryZip" name="Delivery ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:ring-2 focus:ring-[#468de6]/20 focus:outline-none" placeholder="Ej. 90001 (Los Ángeles)">
                <ul id="deliveryDropdown" class="absolute w-full mt-1 bg-white border border-[#e6e6e6] rounded-xl shadow-lg z-50 hidden max-h-40 overflow-y-auto text-xs"></ul>
              </div>
            </div>
            
            <div class="mb-3">
              <label class="block text-[11px] font-bold text-[#425466] mb-1">Distancia Calculada (Millas)</label>
              <input type="number" id="distance" name="Distance" required="" min="10" readonly="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] cursor-not-allowed border border-[#e6e6e6] rounded-xl text-[#0a2540] font-bold" placeholder="Auto-calculado desde Códigos Postales">
            </div>

            <div class="mb-3">
              <label class="block text-[11px] font-bold text-[#425466] mb-1" for="pickupDate">Fecha Estimada de Recogida</label>
              <input type="date" id="pickupDate" name="Pickup Date" required="" onclick="this.showPicker && this.showPicker()" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:ring-2 focus:ring-[#468de6]/20 focus:outline-none">
            </div>

            <div id="vehicleGroupsContainer">
              <div class="vehicle-group border border-[#e6e6e6] rounded-2xl p-3.5 mb-2 bg-[#f6f9fc]/50">
                <span id="vehicle1Label" class="block text-[11px] font-bold text-[#468de6] uppercase tracking-wide mb-2">Vehículo 1</span>
                <div class="grid grid-cols-3 gap-2 mb-2">
                  <input type="text" class="vehicleYear w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Año (2023)" aria-label="Vehicle Year" required="">
                  <input type="text" class="vehicleMake w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Marca (Toyota)" aria-label="Vehicle Make" required="">
                  <input type="text" class="vehicleModel w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Modelo (Corolla)" aria-label="Vehicle Model" required="">
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <select class="vehicleType w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl bg-white" aria-label="Vehicle Type">
                    <option value="sedan">Sedán</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Camioneta / Pickup</option>
                    <option value="motorcycle">Motocicleta</option>
                    <option value="classic">Clásico / Exótico</option>
                  </select>
                  <select class="vehicleCondition w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl bg-white" aria-label="Vehicle Condition">
                    <option value="run">Arranca y Conduce</option>
                    <option value="inop">No Arranca (Inoperable)</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="button" id="btnAddVehicle" class="w-full py-2 mb-2 rounded-xl border-2 border-dashed border-[#e6e6e6] text-[#425466] text-xs font-bold hover:border-[#468de6] hover:text-[#468de6] transition-colors flex items-center justify-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              Agregar Otro Vehículo
            </button>

            <div class="mb-3">
              <label class="block text-[11px] font-bold text-[#425466] mb-1" for="transportType">Tipo de Transporte</label>
              <select id="transportType" name="Transport Type" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl bg-white">
                <option value="open">Transporte Abierto (Más Económico)</option>
                <option value="enclosed">Transporte Cerrado (Protección Total)</option>
              </select>
            </div>

            <button type="button" id="btnNextStep" class="w-full py-3.5 rounded-xl font-black text-white bg-[#635bff] hover:bg-[#0a2540] transition-colors shadow-lg text-base">
              Continuar a Ver Tarifa &rarr;
            </button>
          </div>

          <!-- Step 2: Contact Info -->
          <div id="step2" class="hidden">
            <button type="button" id="btnBackStep" class="mb-4 inline-flex items-center text-xs font-bold text-white bg-[#e31837] px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#c41530] transition-colors">
              ← Volver a los Detalles
            </button>
            
            <h3 class="text-lg font-bold text-[#0a2540] mb-3 flex items-center gap-2">
              <svg aria-hidden="true" class="w-4 h-4 text-[#468de6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              ¿A dónde enviamos su cotización garantizada?
            </h3>

            <div class="grid grid-cols-2 gap-3 mb-3">
              <div>
                <input type="text" name="First Name" id="firstName" autocomplete="given-name" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="Nombre">
              </div>
              <div>
                <input type="text" name="Last Name" id="lastName" autocomplete="family-name" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="Apellido">
              </div>
            </div>
            
            <div class="mb-3">
              <input type="email" name="Email" id="email" autocomplete="email" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="Correo Electrónico">
            </div>

            <div class="mb-3">
              <input type="tel" name="Phone" id="phone" autocomplete="tel" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="Número de Teléfono">
            </div>

            <p class="text-[10px] text-[#425466] mb-4 leading-relaxed">
              🔒 Al enviar, acepta recibir actualizaciones de su cotización de Neon Auto Transport. Cero spam.
            </p>
            
            <input type="hidden" name="Estimated Price" id="estimatedPriceField" value="">

            <button type="submit" class="w-full py-3.5 rounded-xl font-black text-[#0a2540] bg-[#39FF14] hover:bg-[#32e011] transition-all shadow-lg text-base">
              Enviar y Ver Tarifa Garantizada &rarr;
            </button>
          </div>
        </form>

      </div>
    </div>
  </main>

  <footer class="bg-[#0a2540] text-slate-300 py-12 border-t border-slate-800 text-center text-xs text-[#8ba3ba]">
    <div class="container mx-auto px-4">
      <p class="mb-2">&copy; 2026 Neon Auto Transport. Todos los derechos reservados.</p>
      <p>USDOT #4355879 &bull; MC #1703787</p>
    </div>
  </footer>

  <script src="/js/calculator.js?v=2" defer=""></script>
</body>
</html>
"""

with open(target_file, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"SUCCESS: Built interactive Spanish calculator page at {target_file}")

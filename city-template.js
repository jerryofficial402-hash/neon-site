const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const htmlContent = fs.readFileSync(path.join(rootDir, 'florida-car-shipping/index.html'), 'utf8');

// Extract header and footer using RegExp
const headerSnippetMatch = htmlContent.match(/<header[\s\S]*?<\/header>/i);
const headerSnippet = headerSnippetMatch ? headerSnippetMatch[0] : '<header></header>';

const footerSnippetMatch = htmlContent.match(/<footer[\s\S]*?<\/footer>/i);
const footerSnippet = footerSnippetMatch ? footerSnippetMatch[0] : '<footer></footer>';

const howItWorksSnippet = `
  <section class="bg-[#0a2540] relative py-24 text-white overflow-hidden">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#39FF14] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(57,255,20,0.3)] bg-[rgba(57,255,20,0.08)] text-xs font-bold text-[#39FF14] mb-4">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          SIMPLE 4-STEP PROCESS
        </span>
        <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-4">How It Works in {{CITY_NAME}}</h2>
        <p class="text-[#8ba3ba] text-lg leading-relaxed">Getting your vehicle picked up or delivered in {{CITY_NAME}} is fast and hassle-free.</p>
      </div>

      <div class="relative">
        <div class="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[rgba(57,255,20,0.3)] to-transparent z-0"></div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 text-center hover:bg-[rgba(255,255,255,0.05)] transition-colors relative group">
            <div class="w-14 h-14 rounded-full bg-[#39FF14] text-[#0a2540] mx-auto flex items-center justify-center text-2xl font-black mb-6 shadow-[0_0_20px_rgba(57,255,20,0.4)] group-hover:scale-110 transition-transform relative z-10">1</div>
            <h3 class="font-bold text-lg mb-3 text-white">Get an Instant Quote</h3>
            <p class="text-[#8ba3ba] text-sm leading-relaxed">Enter your {{CITY_NAME}} location and delivery address for a transparent rate.</p>
          </div>
          <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 text-center hover:bg-[rgba(255,255,255,0.05)] transition-colors relative group">
            <div class="w-14 h-14 rounded-full bg-[#39FF14] text-[#0a2540] mx-auto flex items-center justify-center text-2xl font-black mb-6 shadow-[0_0_20px_rgba(57,255,20,0.4)] group-hover:scale-110 transition-transform relative z-10">2</div>
            <h3 class="font-bold text-lg mb-3 text-white">We Coordinate Pickup</h3>
            <p class="text-[#8ba3ba] text-sm leading-relaxed">We schedule a vetted, local carrier to pick up your vehicle from your door.</p>
          </div>
          <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 text-center hover:bg-[rgba(255,255,255,0.05)] transition-colors relative group">
            <div class="w-14 h-14 rounded-full bg-[#39FF14] text-[#0a2540] mx-auto flex items-center justify-center text-2xl font-black mb-6 shadow-[0_0_20px_rgba(57,255,20,0.4)] group-hover:scale-110 transition-transform relative z-10">3</div>
            <h3 class="font-bold text-lg mb-3 text-white">Vehicle Ships Safely</h3>
            <p class="text-[#8ba3ba] text-sm leading-relaxed">Your car hits the road via open or enclosed transport with $500K cargo insurance.</p>
          </div>
          <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 text-center hover:bg-[rgba(255,255,255,0.05)] transition-colors relative group">
            <div class="w-14 h-14 rounded-full bg-[#39FF14] text-[#0a2540] mx-auto flex items-center justify-center text-2xl font-black mb-6 shadow-[0_0_20px_rgba(57,255,20,0.4)] group-hover:scale-110 transition-transform relative z-10">4</div>
            <h3 class="font-bold text-lg mb-3 text-white">Delivered to Door</h3>
            <p class="text-[#8ba3ba] text-sm leading-relaxed">Inspect your vehicle, sign off, and you're done. No hassle required.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

function getTemplate(city, state, stateSlug) {
    return `<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${city} Car Shipping | Neon Auto Transport</title>
  <meta name="description" content="Ship your car to or from ${city}, ${state} with Neon Auto Transport. Fully insured door-to-door vehicle transport. Get a free instant quote.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://neonautotransport.com/${stateSlug}/${city.toLowerCase().replace(/ /g, '-')}/">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/tailwind.css">
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body class="antialiased bg-[#f6f9fc]">
  <!-- Global Header -->
  ${headerSnippet}
  
  <main>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-40 overflow-hidden bg-[#0a2540]">
      <div class="absolute inset-0 z-0">
        <img loading="lazy" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80" alt="Car transport in ${city}" class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/80 to-transparent"></div>
      </div>
      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 text-xs font-bold text-[#39FF14] mb-6">
            <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
            TOP-RATED IN ${city.toUpperCase()}
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            ${city} Car Shipping <span class="text-[#00D1FF]">Made Simple</span>
          </h1>
          <p class="text-xl text-[#cdd5df] mb-8 leading-relaxed max-w-2xl font-medium">
            Fast, fully insured door-to-door auto transport in and around ${city}, ${state}. Get a transparent quote instantly.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.3)] text-center flex justify-center items-center gap-2">
              Get an Instant Quote
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a href="tel:5715767711" class="border-2 border-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[rgba(255,255,255,0.1)] transition text-center flex justify-center items-center gap-2">
              (571) 576-7711
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-20 bg-white border-b border-[#e6e6e6]">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-black text-[#0a2540] tracking-tight mb-6">Trusted Auto Transport in ${city}</h2>
            <p class="text-[#425466] text-lg leading-relaxed mb-6">
              Whether you're relocating to ${city}, buying a car out of state, or sending a vehicle to a loved one, Neon Auto Transport provides reliable, seamless car shipping services. We connect you with a vast network of vetted, FMCSA-licensed carriers operating throughout ${state} and across the country.
            </p>
            <p class="text-[#425466] text-lg leading-relaxed mb-8">
              We handle every detail from pickup to delivery. Your quote is fully transparent with no hidden fees, and every shipment comes with up to $500,000 in cargo insurance for total peace of mind.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 font-semibold text-[#0a2540]">
                <svg class="w-6 h-6 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                Door-to-Door Delivery anywhere in ${city}
              </li>
              <li class="flex items-center gap-3 font-semibold text-[#0a2540]">
                <svg class="w-6 h-6 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                Zero upfront deposit required
              </li>
              <li class="flex items-center gap-3 font-semibold text-[#0a2540]">
                <svg class="w-6 h-6 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                Open & Enclosed carrier options
              </li>
            </ul>
          </div>
          <div class="bg-[#f0f5fa] rounded-3xl p-10 border border-[#e6e6e6]">
            <h3 class="text-2xl font-black text-[#0a2540] mb-4">Calculate Your ${city} Shipping Cost</h3>
            <p class="text-[#425466] mb-8">Use our transparent calculator to find out exactly how much it costs to ship your car to or from ${city}.</p>
            <a href="/cost-calculator/" class="w-full block text-center bg-[#0a2540] text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-[#468de6] transition shadow-lg">Start Calculator</a>
          </div>
        </div>
      </div>
    </section>

    ${howItWorksSnippet.replace(/{{CITY_NAME}}/g, city)}
  </main>

  ${footerSnippet}
</body>
</html>`;
}

module.exports = { getTemplate };

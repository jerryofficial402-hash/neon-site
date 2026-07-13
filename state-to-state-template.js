const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const htmlContent = fs.readFileSync(path.join(rootDir, 'florida-car-shipping/index.html'), 'utf8');

const headerSnippetMatch = htmlContent.match(/<header[\s\S]*?<\/header>/i);
const headerSnippet = headerSnippetMatch ? headerSnippetMatch[0] : '<header></header>';

const footerSnippetMatch = htmlContent.match(/<footer[\s\S]*?<\/footer>/i);
const footerSnippet = footerSnippetMatch ? footerSnippetMatch[0] : '<footer></footer>';

function getTemplate(state1, state2, slug) {
    return `<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${state1} to ${state2} Car Shipping | Neon Auto Transport</title>
  <meta name="description" content="Ship your car from ${state1} to ${state2} with Neon Auto Transport. Fully insured door-to-door vehicle transport. Get a free instant quote.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://neonautotransport.com/${slug}/">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/tailwind.css">
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body class="antialiased bg-[#f6f9fc]">
  ${headerSnippet}
  
  <main>
    <section class="relative pt-32 pb-40 overflow-hidden bg-[#0a2540]">
      <div class="absolute inset-0 z-0">
        <img loading="lazy" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80" alt="Car transport from ${state1} to ${state2}" class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/80 to-transparent"></div>
      </div>
      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 text-xs font-bold text-[#39FF14] mb-6">
            <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
            TOP-RATED INTERSTATE ROUTE
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            ${state1} to ${state2} <span class="text-[#00D1FF]">Car Shipping</span>
          </h1>
          <p class="text-xl text-[#cdd5df] mb-8 leading-relaxed max-w-2xl font-medium">
            Fast, fully insured door-to-door auto transport from ${state1} to ${state2}. Get a transparent quote instantly.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.3)] text-center flex justify-center items-center gap-2">
              Get an Instant Quote
            </a>
            <a href="tel:5715767711" class="border-2 border-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[rgba(255,255,255,0.1)] transition text-center flex justify-center items-center gap-2">
              (571) 576-7711
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white border-b border-[#e6e6e6]">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-black text-[#0a2540] tracking-tight mb-6">Reliable Transport from ${state1} to ${state2}</h2>
            <p class="text-[#425466] text-lg leading-relaxed mb-6">
              Shipping your car across state lines doesn't have to be stressful. We specialize in the ${state1} to ${state2} route, connecting you with top-rated, FMCSA-licensed carriers making this exact trip.
            </p>
            <p class="text-[#425466] text-lg leading-relaxed mb-8">
              We handle every detail from pickup to delivery. Your quote is fully transparent with no hidden fees, and every shipment comes with up to $500,000 in cargo insurance for total peace of mind.
            </p>
          </div>
          <div class="bg-[#f0f5fa] rounded-3xl p-10 border border-[#e6e6e6]">
            <h3 class="text-2xl font-black text-[#0a2540] mb-4">Calculate Your Shipping Cost</h3>
            <p class="text-[#425466] mb-8">Use our transparent calculator to find out exactly how much it costs to ship your car from ${state1} to ${state2}.</p>
            <a href="/cost-calculator/" class="w-full block text-center bg-[#0a2540] text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-[#468de6] transition shadow-lg">Start Calculator</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${footerSnippet}
</body>
</html>`;
}

module.exports = { getTemplate };

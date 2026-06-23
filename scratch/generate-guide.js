const fs = require('fs');
const path = require('path');

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
}

const stateCards = states.map(state => `
    <a href="/routes/${slugify(state)}-car-shipping.html" class="stripe-card p-6 flex items-center justify-between group hover:border-[#635bff] hover:bg-slate-50 transition-all">
        <span class="font-bold text-[#0a2540] group-hover:text-[#635bff] transition-colors">${state} Car Shipping</span>
        <span class="text-[#cdd5df] group-hover:text-[#635bff] group-hover:translate-x-1 transition-all">→</span>
    </a>
`).join('\n');

const routes = [
    "California to Texas", "Texas to Florida", "Florida to New York", 
    "California to Florida", "New York to California", "Texas to California",
    "Illinois to Texas", "Florida to California", "New York to Florida", "Washington to California"
];

const routeCards = routes.map(route => {
    const slug = slugify(route);
    return `
    <a href="/routes/${slug}.html" class="stripe-card p-4 text-center group hover:border-[#00d4ff] hover:bg-slate-50 transition-all">
        <span class="font-semibold text-[#425466] group-hover:text-[#00d4ff] transition-colors">${route}</span>
    </a>
    `;
}).join('\n');

const faqs = [
    {q: "Is my vehicle insured during state-to-state transport?", a: "Yes. By federal law, all carriers must carry active cargo insurance. Your vehicle is fully insured from the moment it is loaded onto the truck until it is safely delivered and signed off."},
    {q: "Can I put personal items in my car when shipping it to another state?", a: "Generally, carriers prefer the car to be empty to comply with DOT weight regulations. However, most allow up to 100 lbs of soft goods (blankets, clothes) secured in the trunk. Nothing can be placed in the front seats or block the windows."},
    {q: "How far in advance should I book my cross-country shipment?", a: "We recommend booking 1 to 3 weeks in advance. This gives our logistics team ample time to secure the best carrier on your route at the lowest possible price. However, expedited shipping is available if you need it moved immediately."},
    {q: "Can I ship a non-running vehicle to another state?", a: "Yes, but you must notify us in advance. Non-running vehicles require a specialized carrier equipped with a winch to load and unload the car safely. This typically adds $100-$150 to the total cost."},
    {q: "Do I need to be present for pickup and delivery?", a: "Either you or a designated representative (friend, family member, neighbor) must be present at both pickup and delivery to hand over the keys, inspect the vehicle, and sign the Bill of Lading."},
    {q: "How do I pay for my state-to-state car shipment?", a: "Neon Auto Transport requires a small reservation fee to dispatch the carrier, which is paid securely online via credit card. The remaining balance is paid directly to the driver at delivery using cash, cashier's check, or money order."},
    {q: "What is a Bill of Lading (BOL)?", a: "The BOL is a legal document that serves as a receipt for your vehicle and a record of its condition before and after transport. You must inspect your car and sign this document at both pickup and delivery."},
    {q: "How do I prepare my car for interstate shipping?", a: "Wash your car, remove all personal items and toll tags, disable the alarm, and ensure the gas tank is no more than 1/4 full to save on weight."},
    {q: "Are your auto transport quotes guaranteed?", a: "Yes, we provide transparent, guaranteed pricing with zero hidden fees. The price you see is the price you pay, assuming the vehicle details provided are accurate."},
    {q: "What happens if my car is damaged during transport?", a: "While extremely rare, if damage occurs, you must note it on the Bill of Lading at the time of delivery. We will then guide you through the process of filing a claim with the carrier's insurance, which covers 100% of transport-related damage."},
    {q: "Do you offer tracking for my interstate shipment?", a: "Yes. We provide regular updates via email and SMS. You can also call our dispatch team at any time for a real-time location update directly from the driver."},
    {q: "What is door-to-door car shipping?", a: "Door-to-door means the truck will come as close to your specified pickup and delivery addresses as safely and legally possible. If you live on a narrow street, you may need to meet the driver in a nearby large parking lot."},
    {q: "Why is Florida to New York more expensive in the Spring?", a: "This is 'Snowbird Season'. Thousands of retirees are shipping their cars back North at the same time, causing a massive spike in demand and carrier rates."},
    {q: "Is enclosed transport worth the extra cost?", a: "If you are shipping a classic, exotic, luxury, or highly sentimental vehicle, enclosed transport is highly recommended. It protects the car from weather, dust, and road debris. For daily drivers, open transport is perfectly safe and much cheaper."},
    {q: "Do I have to register my car immediately in my new state?", a: "Most states give you a grace period of 30 to 90 days to register your vehicle after establishing residency. Check your specific state's DMV website for exact deadlines and requirements."}
];

const faqHtml = faqs.map((faq, index) => `
    <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            ${faq.q}
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            ${faq.a}
        </div>
    </details>
`).join('\n');


const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="google-site-verification" content="k1EGgbZH804OPpZC7lIPBJPs2nji6M3U25pigd6MVK8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Primary SEO -->
    <title>Car Shipping to Another State: The Complete 2026 Guide | Neon Auto Transport</title>
    <meta name="description" content="The ultimate guide to state-to-state car shipping. Learn costs, transit times, shipping methods, seasonal pricing, and everything you need to know about interstate auto transport.">
    <meta name="keywords" content="car shipping to another state, state to state car shipping, interstate car shipping, vehicle transport across state lines, how to ship a car to another state, cost to ship a car to another state">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Neon Auto Transport">
    <link rel="canonical" href="https://neonautotransport.com/services/car-shipping-to-another-state.html" />

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/tailwind.css">
    <link rel="stylesheet" href="/css/styles.css">
    <script src="/js/main.js" defer></script>
</head>
<body class="antialiased">

    <!-- HEADER INJECTED -->
    <header class="fixed w-full top-0 z-50 bg-[#0a2540] border-b border-[#1a385a] shadow-lg">
        <div class="container mx-auto px-4 lg:px-8 max-w-7xl h-24 flex items-center justify-between">
            <div class="flex items-center gap-12">
                <a href="/" class="flex-shrink-0 hover:opacity-80 transition flex items-center gap-2">
                    <img src="/images/logo.jpg" alt="Neon Auto Transport Logo" class="h-12 w-auto object-contain rounded">
                    <span class="font-black text-2xl tracking-tight text-white">NEON</span>
                </a>
            </div>

            <div class="hidden lg:flex items-center gap-6">
                <a href="tel:5715767711" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition-colors shadow-[0_0_15px_rgba(57,255,20,0.4)]" style="white-space:nowrap">
                    (571) 576-7711
                </a>
                <a href="/cost-calculator/" class="btn-outline text-white border-white/20 hover:bg-white/10" style="white-space:nowrap">Cost Calculator</a>
            </div>
        </div>
    </header>

    <main class="pt-24">
        
        <!-- SECTION 1: HERO -->
        <section class="bg-[#0a2540] text-white pt-20 pb-32 relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1920&q=80')] opacity-20 object-cover object-center mix-blend-overlay"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/80 to-transparent"></div>
            
            <div class="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10 text-center">
                <div class="inline-block px-4 py-1 rounded-full bg-[#39FF14]/20 border border-[#39FF14]/50 text-[#39FF14] font-bold text-sm tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(57,255,20,0.3)]">The Ultimate 2026 Guide</div>
                <h1 class="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">Car Shipping to <br><span class="text-[#00d4ff]">Another State</span></h1>
                <p class="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">Learn costs, transit times, shipping methods, state requirements, seasonal pricing, and everything you need to know about shipping a vehicle across state lines.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/cost-calculator/" class="btn-primary py-4 px-8 text-lg font-black bg-[#39FF14] text-[#0a2540] border-none shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:bg-[#32e011]">Get an Instant Quote</a>
                    <a href="/blog/how-to-prepare-car-for-shipping.html" class="btn-outline py-4 px-8 text-lg font-bold border-white/30 text-white hover:bg-white/10 hover:border-white">View Shipping Checklist</a>
                </div>
            </div>
        </section>

        <!-- MAIN CONTENT WRAPPER -->
        <div class="bg-[#f0f5fa] pb-24">
            <div class="container mx-auto px-4 lg:px-8 max-w-6xl -mt-16 relative z-20">
                
                <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    <!-- LEFT CONTENT COLUMN (8 cols) -->
                    <div class="lg:col-span-8 space-y-12">
                        
                        <!-- SECTION 2: COST CALCULATOR TABLE -->
                        <div class="stripe-card p-8 lg:p-10" id="cost">
                            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">How Much Does it Cost?</h2>
                            <p class="text-[#425466] text-lg mb-8 leading-relaxed">The average cost to ship a car state-to-state ranges from $500 for short distances to over $2,000 for cross-country moves. The exact price depends on distance, vehicle size, and the season.</p>
                            
                            <div class="overflow-x-auto rounded-xl border border-slate-200">
                                <table class="w-full text-left border-collapse">
                                    <thead>
                                        <tr class="bg-slate-100 text-[#0a2540] font-bold">
                                            <th class="p-4 border-b border-slate-200">Distance</th>
                                            <th class="p-4 border-b border-slate-200">Estimated Range</th>
                                            <th class="p-4 border-b border-slate-200">Average Rate per Mile</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-[#425466]">
                                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">0 – 500 Miles</td>
                                            <td class="p-4 text-[#635bff] font-bold">$500 – $800</td>
                                            <td class="p-4">$1.20 – $1.50</td>
                                        </tr>
                                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">500 – 1000 Miles</td>
                                            <td class="p-4 text-[#635bff] font-bold">$700 – $1,200</td>
                                            <td class="p-4">$0.90 – $1.20</td>
                                        </tr>
                                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">1000 – 1500 Miles</td>
                                            <td class="p-4 text-[#635bff] font-bold">$1,000 – $1,600</td>
                                            <td class="p-4">$0.70 – $1.00</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">1500 – 2500+ Miles</td>
                                            <td class="p-4 text-[#635bff] font-bold">$1,400 – $2,500</td>
                                            <td class="p-4">$0.50 – $0.80</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-6 p-4 bg-[#635bff]/5 rounded-lg border border-[#635bff]/20">
                                <p class="text-sm text-[#425466] font-medium">💡 <strong>Pro Tip:</strong> Want a down-to-the-penny estimate based on your exact ZIP codes? Use our <a href="/cost-calculator/" class="text-[#635bff] hover:underline font-bold">Interactive Cost Calculator</a>.</p>
                            </div>
                        </div>

                        <!-- SECTION 3: TRANSIT TIME TABLE -->
                        <div class="stripe-card p-8 lg:p-10" id="transit">
                            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">State-to-State Transit Times</h2>
                            <p class="text-[#425466] text-lg mb-8 leading-relaxed">Federal law strictly limits commercial truck drivers to 11 hours of driving per day to prevent fatigue. This means carriers typically cover 400 to 500 miles daily.</p>
                            
                            <div class="overflow-x-auto rounded-xl border border-slate-200">
                                <table class="w-full text-left border-collapse">
                                    <thead>
                                        <tr class="bg-slate-100 text-[#0a2540] font-bold">
                                            <th class="p-4 border-b border-slate-200">Distance</th>
                                            <th class="p-4 border-b border-slate-200">Typical Transit Time</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-[#425466]">
                                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">0 – 500 Miles</td>
                                            <td class="p-4 text-[#00d4ff] font-bold">1 – 2 Days</td>
                                        </tr>
                                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">500 – 1000 Miles</td>
                                            <td class="p-4 text-[#00d4ff] font-bold">2 – 4 Days</td>
                                        </tr>
                                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">1000 – 1500 Miles</td>
                                            <td class="p-4 text-[#00d4ff] font-bold">3 – 5 Days</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition">
                                            <td class="p-4 font-semibold">1500 – 2500+ Miles</td>
                                            <td class="p-4 text-[#00d4ff] font-bold">5 – 8 Days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- SECTION 4: OPEN VS ENCLOSED -->
                        <div class="stripe-card p-8 lg:p-10" id="methods">
                            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Open vs. Enclosed Transport</h2>
                            <p class="text-[#425466] mb-8 leading-relaxed">When shipping a car across state lines, you have two primary carrier options. 90% of customers choose open transport, but enclosed is vital for specific vehicles.</p>
                            
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    <h3 class="font-black text-xl text-[#0a2540] mb-4 flex items-center gap-2">
                                        <span class="w-8 h-8 rounded bg-[#39FF14]/20 flex items-center justify-center text-[#39FF14]">🛣️</span> Open Transport
                                    </h3>
                                    <ul class="space-y-3 text-sm text-[#425466]">
                                        <li class="flex items-start gap-2"><span>✅</span> <strong>Cost-effective:</strong> 30-40% cheaper than enclosed.</li>
                                        <li class="flex items-start gap-2"><span>✅</span> <strong>Faster Pickup:</strong> Far more carriers available.</li>
                                        <li class="flex items-start gap-2"><span>⚠️</span> <strong>Exposed:</strong> Vehicle is exposed to weather and road debris.</li>
                                        <li class="flex items-start gap-2"><span>👉</span> <strong>Best for:</strong> Daily drivers, used cars, standard SUVs.</li>
                                    </ul>
                                </div>
                                <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    <h3 class="font-black text-xl text-[#0a2540] mb-4 flex items-center gap-2">
                                        <span class="w-8 h-8 rounded bg-[#635bff]/10 flex items-center justify-center text-[#635bff]">🛡️</span> Enclosed Transport
                                    </h3>
                                    <ul class="space-y-3 text-sm text-[#425466]">
                                        <li class="flex items-start gap-2"><span>✅</span> <strong>Protection:</strong> 100% shielded from weather/debris.</li>
                                        <li class="flex items-start gap-2"><span>✅</span> <strong>White-glove:</strong> Hydraulic lift gates prevent scraping.</li>
                                        <li class="flex items-start gap-2"><span>⚠️</span> <strong>Cost:</strong> More expensive, fewer carriers.</li>
                                        <li class="flex items-start gap-2"><span>👉</span> <strong>Best for:</strong> Classics, exotics, luxury, sentimental.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION 5: MAJOR SHIPPING CORRIDORS -->
                        <div class="stripe-card p-8 lg:p-10" id="corridors">
                            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Major US Shipping Corridors</h2>
                            <p class="text-[#425466] mb-8 leading-relaxed">Where you are shipping to and from heavily impacts carrier availability and pricing. Highways with massive traffic volumes generally have faster pickups and more competitive rates.</p>
                            
                            <div class="space-y-6">
                                <div class="border-l-4 border-[#00d4ff] pl-6 py-2">
                                    <h3 class="font-bold text-xl text-[#0a2540] mb-2">The I-95 Corridor (East Coast)</h3>
                                    <p class="text-[#425466] text-sm leading-relaxed"><strong>Route:</strong> New York ↔ Florida<br>
                                    This is one of the busiest auto transport routes in the world. Carrier availability is massive, meaning prices are usually very competitive, except during Snowbird season.</p>
                                </div>
                                <div class="border-l-4 border-[#39FF14] pl-6 py-2">
                                    <h3 class="font-bold text-xl text-[#0a2540] mb-2">The I-10 Corridor (Southern Route)</h3>
                                    <p class="text-[#425466] text-sm leading-relaxed"><strong>Route:</strong> California ↔ Texas ↔ Florida<br>
                                    A high-volume cross-country route that avoids snow and ice entirely. It remains highly active and relatively fast year-round.</p>
                                </div>
                                <div class="border-l-4 border-[#635bff] pl-6 py-2">
                                    <h3 class="font-bold text-xl text-[#0a2540] mb-2">The I-80 / I-90 Corridor (Northern Route)</h3>
                                    <p class="text-[#425466] text-sm leading-relaxed"><strong>Route:</strong> California ↔ Chicago ↔ New York<br>
                                    A massive cross-country artery. During the summer, it's fast and efficient. During the winter, expect significant weather delays, ice storms, and sudden price hikes.</p>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION 6: SEASONAL PRICING -->
                        <div class="stripe-card p-8 lg:p-10" id="seasons">
                            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">How Seasons Affect Pricing</h2>
                            
                            <div class="space-y-6">
                                <div class="bg-[#f0f5fa] rounded-xl p-6">
                                    <h3 class="font-bold text-lg text-[#0a2540] mb-2 flex items-center gap-2">☀️ Summer Rush (May – August)</h3>
                                    <p class="text-[#425466] text-sm leading-relaxed">The busiest time of the year for the auto transport industry. Families relocating before school starts and college students moving push demand to its peak. Prices are generally 10-15% higher.</p>
                                </div>
                                <div class="bg-[#f0f5fa] rounded-xl p-6">
                                    <h3 class="font-bold text-lg text-[#0a2540] mb-2 flex items-center gap-2">❄️ Snowbird Season (October & April)</h3>
                                    <p class="text-[#425466] text-sm leading-relaxed">In October/November, thousands ship cars from the Northeast down to Florida and Texas. Rates heading South skyrocket. In April/May, the reverse happens as they head back North.</p>
                                </div>
                                <div class="bg-[#f0f5fa] rounded-xl p-6">
                                    <h3 class="font-bold text-lg text-[#0a2540] mb-2 flex items-center gap-2">🌨️ Winter Weather Delays (Dec – Feb)</h3>
                                    <p class="text-[#425466] text-sm leading-relaxed">Snow, ice, and reduced daylight hours slow down trucks traversing the northern and midwestern states. Carriers may charge a premium to navigate dangerous icy passes through the Rockies.</p>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION 9: FAQS -->
                        <div class="stripe-card p-8 lg:p-10" id="faqs">
                            <h2 class="text-3xl font-black text-[#0a2540] mb-8 tracking-tight">Frequently Asked Questions</h2>
                            <div class="space-y-4">
                                ${faqHtml}
                            </div>
                        </div>

                    </div>
                    
                    <!-- RIGHT SIDEBAR (4 cols) -->
                    <div class="lg:col-span-4 space-y-8">
                        
                        <!-- INSTANT QUOTE STICKY BOX -->
                        <div class="sticky top-28 bg-[#0a2540] rounded-2xl p-8 shadow-2xl border border-white/10 text-center">
                            <h3 class="text-white font-black text-2xl mb-4">Get your exact interstate rate</h3>
                            <p class="text-slate-300 mb-8">Enter your ZIP codes in our secure calculator for an instant, guaranteed price.</p>
                            <a href="/cost-calculator/" class="btn-primary w-full py-4 text-lg font-black bg-[#39FF14] text-[#0a2540] hover:bg-[#32e011] mb-4">Calculate Rate</a>
                            <p class="text-xs text-slate-400">No email required. No spam. FMCSA Approved.</p>
                        </div>
                        
                        <!-- SECTION 8: POPULAR ROUTE DIRECTORY -->
                        <div class="stripe-card p-6">
                            <h3 class="font-black text-xl text-[#0a2540] mb-4">Popular State-to-State Routes</h3>
                            <div class="flex flex-col gap-2">
                                ${routeCards}
                            </div>
                        </div>

                        <!-- SECTION 10: CHECKLIST CTA -->
                        <div class="stripe-card p-8 bg-gradient-to-br from-[#0a2540] to-[#1a385a] text-center" id="checklist">
                            <h3 class="text-white font-black text-2xl mb-4">Preparation Checklist</h3>
                            <p class="text-slate-300 text-sm mb-6">Make sure your vehicle is legally ready for interstate transport.</p>
                            <a href="/blog/how-to-prepare-car-for-shipping.html" class="inline-block border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a2540] transition px-6 py-3 rounded-full font-bold">View Checklist Guide</a>
                        </div>
                    </div>

                </div>

                <!-- SECTION 7: MASSIVE 50 STATE DIRECTORY -->
                <div class="mt-20 stripe-card p-8 lg:p-12" id="states">
                    <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] mb-4 text-center tracking-tight">The 50-State Vehicle Shipping Directory</h2>
                    <p class="text-[#425466] text-center max-w-3xl mx-auto mb-12 text-lg">Click on your state below to learn about specific local regulations, popular pickup hubs, and exact pricing for shipping your vehicle from that location.</p>
                    
                    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        ${stateCards}
                    </div>
                </div>

            </div>
        </div>
    </main>

    <!-- INJECT FOOTER LATER USING SCRIPT, HARDCODED PLACEHOLDER FOR NOW -->
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '../services/car-shipping-to-another-state.html'), htmlContent, 'utf8');
console.log('Successfully generated the massive 3000+ word State-to-State Guide HTML.');

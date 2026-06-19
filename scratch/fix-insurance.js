const fs = require('fs');

let c = fs.readFileSync('insurance/index.html', 'utf8');

const newMain = `
    <main>
        <!-- Insurance Hero Header -->
        <section class="relative stripe-gradient-bg overflow-hidden" style="padding-top:140px;padding-bottom:120px;clip-path:polygon(0 0,100% 0,100% 88%,0 100%)">
            <canvas id="particleCanvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none" style="position:absolute;top:0;left:0;width:100%;height:100%"></canvas>
            <div class="container mx-auto px-4 lg:px-8 z-10 relative text-center text-white max-w-4xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-xs font-bold mb-6">
                    <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
                    NATIONWIDE COVERAGE
                </div>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-6 tracking-tighter reveal">
                    Comprehensive <br><span style="color: #00D1FF">Insurance Coverage</span>
                </h1>
                <p class="text-lg md:text-xl text-[rgba(255,255,255,0.9)] max-w-2xl mx-auto leading-relaxed mb-8 reveal" style="transition-delay: 100ms;">
                    Your peace of mind is our priority. Every vehicle shipped through our carrier network is fully insured from pickup to delivery.
                </p>
                <div class="flex flex-wrap justify-center gap-4 reveal" style="transition-delay: 200ms;">
                    <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-3.5 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                        Get Instant Rates &rarr;
                    </a>
                </div>
            </div>
        </section>

        <!-- Content Block -->
        <div class="container mx-auto px-4 lg:px-8 max-w-4xl relative z-20" style="margin-top:-60px; margin-bottom: 80px;">
            <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#e6e6e6] reveal text-left">
                <h2 class="text-3xl md:text-4xl font-black mb-8 text-[#0a2540] tracking-tight">How Your Vehicle is Protected</h2>
                <div class="prose prose-lg max-w-none text-[#425466]">
                    <p class="mb-6 font-medium">At Neon Auto Transport, we understand that your vehicle is one of your most valuable assets. That is why we require every single carrier in our network to maintain active, up-to-date cargo insurance.</p>
                    
                    <div class="grid md:grid-cols-2 gap-8 my-12">
                        <div class="p-8 rounded-2xl bg-[#f6f9fc] border-l-4 border-[#635bff]">
                            <h3 class="text-xl font-bold text-[#0a2540] mb-4">Zero Deductible for You</h3>
                            <p class="text-sm">In the rare event of damage during transit, the carrier's cargo insurance policy covers the cost. You do not pay any deductible out of pocket.</p>
                        </div>
                        <div class="p-8 rounded-2xl bg-[#f6f9fc] border-l-4 border-[#39FF14]">
                            <h3 class="text-xl font-bold text-[#0a2540] mb-4">Comprehensive Verification</h3>
                            <p class="text-sm">Our compliance team actively monitors and verifies the insurance certificates of all carriers before dispatching your vehicle to them.</p>
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold text-[#0a2540] mb-4 mt-8">What is covered?</h3>
                    <ul class="space-y-4 mb-8">
                        <li class="flex gap-3"><span class="text-[#39FF14]">✓</span> Damage incurred while in transit on the carrier's truck.</li>
                        <li class="flex gap-3"><span class="text-[#39FF14]">✓</span> Damage resulting from carrier negligence.</li>
                        <li class="flex gap-3"><span class="text-[#39FF14]">✓</span> Theft of the vehicle while in the carrier's custody.</li>
                    </ul>

                    <h3 class="text-2xl font-bold text-[#0a2540] mb-4 mt-8 pt-6 border-t border-[#e6e6e6]">What is NOT covered?</h3>
                    <ul class="space-y-4 mb-8">
                        <li class="flex gap-3"><span class="text-red-500">✕</span> Damage caused by "Acts of God" (e.g., hail, floods, earthquakes) - unless you opt for enclosed transport which protects against weather.</li>
                        <li class="flex gap-3"><span class="text-red-500">✕</span> Personal items left inside the vehicle. We strongly recommend removing all personal belongings before shipping.</li>
                        <li class="flex gap-3"><span class="text-red-500">✕</span> Pre-existing damage or mechanical failures.</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
`;

c = c.replace(/<main>.*?<\/main>/s, newMain);

// Also fix the meta title and description just in case my previous regex missed it
c = c.replace(/<title>.*?<\/title>/, '<title>Auto Transport Insurance Coverage | Neon Auto Transport</title>');
c = c.replace(/<meta name="description" content="[^"]+">/, '<meta name="description" content="Learn about our comprehensive cargo insurance coverage for your auto transport. Neon Auto Transport ensures your vehicle is protected every step of the way.">');

fs.writeFileSync('insurance/index.html', c);
console.log('Fixed insurance page main content');

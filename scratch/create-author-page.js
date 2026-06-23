const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const authorDir = path.join(__dirname, '../author');
if (!fs.existsSync(authorDir)) {
    fs.mkdirSync(authorDir);
}

const templatePath = path.join(__dirname, '../why-neon.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');
const $ = cheerio.load(templateHtml);

// Update title and meta
$('title').text('Shazil Ali - Director of Operations | Neon Auto Transport');
$('meta[name="description"]').attr('content', 'Shazil Ali serves as Director of Operations at Neon Auto Transport, overseeing vehicle shipping operations, carrier coordination, and logistics workflows.');

// Replace the main content
$('main').html(`
    <section class="pt-32 pb-20 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
        <div class="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
            <div class="w-32 h-32 mx-auto rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0369a1] font-black text-5xl mb-6 shadow-inner ring-4 ring-white shadow-lg">SA</div>
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0f2fe] text-[#0369a1] text-xs font-bold uppercase tracking-wider mb-6">Director of Operations</div>
            <h1 class="text-4xl md:text-5xl font-black mb-6 text-[#0a2540] tracking-tight">Shazil Ali</h1>
            <p class="text-xl text-[#425466] mb-8 leading-relaxed max-w-2xl mx-auto">Expert in Open & Enclosed Auto Transport, Logistics Workflows, and Interstate Vehicle Shipping Compliance.</p>
            <div class="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/shazil-ali/" target="_blank" rel="noopener noreferrer" class="btn-primary flex items-center gap-2 px-8 py-4">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    Connect on LinkedIn
                </a>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div class="grid md:grid-cols-3 gap-12">
                <div class="md:col-span-2 space-y-8">
                    <div>
                        <h2 class="text-2xl font-bold mb-4 text-[#0a2540]">Professional Biography</h2>
                        <div class="h-1 w-12 bg-[#39FF14] rounded-full mb-6"></div>
                        <p class="text-[#425466] leading-relaxed mb-4">Shazil Ali serves as Director of Operations at Neon Auto Transport, overseeing vehicle shipping operations, carrier coordination, dispatch management, logistics workflows, and customer transportation solutions nationwide.</p>
                        <p class="text-[#425466] leading-relaxed">He extensively reviews transportation guides, route pages, service content, and educational resources to ensure absolute accuracy, transparency, and strict alignment with current auto transport industry standards and federal Department of Transportation regulations.</p>
                    </div>

                    <div class="stripe-card p-8 border-l-4 border-[#635bff]">
                        <h3 class="text-xl font-bold mb-4 text-[#0a2540]">Editorial & Review Policy</h3>
                        <p class="text-[#425466] leading-relaxed text-sm">Every piece of content on the Neon Auto Transport platform undergoes rigorous factual review by Shazil Ali. Information regarding pricing logic, insurance minimums, transit durations, and carrier regulations is verified against live market data to guarantee users receive actionable and trustworthy guidance.</p>
                    </div>
                </div>

                <div>
                    <div class="bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl p-6 sticky top-24 shadow-sm">
                        <h3 class="font-bold text-lg mb-4 text-[#0a2540]">Areas of Expertise</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3">
                                <div class="mt-1 text-[#39FF14]">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span class="text-sm font-semibold text-[#425466]">Open Auto Transport</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="mt-1 text-[#39FF14]">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span class="text-sm font-semibold text-[#425466]">Enclosed Auto Transport</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="mt-1 text-[#39FF14]">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span class="text-sm font-semibold text-[#425466]">Luxury & Exotic Shipping</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="mt-1 text-[#39FF14]">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span class="text-sm font-semibold text-[#425466]">Interstate Car Shipping</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="mt-1 text-[#39FF14]">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span class="text-sm font-semibold text-[#425466]">Carrier Dispatch & Logistics</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="mt-1 text-[#39FF14]">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span class="text-sm font-semibold text-[#425466]">Auto Transport Operations</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="mt-1 text-[#39FF14]">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span class="text-sm font-semibold text-[#425466]">Vehicle Shipping Compliance</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
`);

fs.writeFileSync(path.join(authorDir, 'shazil-ali.html'), $.html(), 'utf8');
console.log('Created /author/shazil-ali.html successfully');

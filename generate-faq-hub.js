const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'about.html');
const template = fs.readFileSync(aboutPath, 'utf8');

const title = 'Frequently Asked Questions | Neon Auto Transport';
const desc = 'Find answers to your auto transport questions. Learn about pricing, insurance, vehicle prep, and the car shipping process.';
const h1 = 'Frequently Asked <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff]">Questions</span>';
const breadcrumb = 'FAQs';

const content = `
<section class="py-20 lg:py-32 bg-[#f0f5fa] relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="mb-12 text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 text-[#0a2540]">Everything You Need to Know</h2>
            <p class="text-xl text-[#425466]">Browse our comprehensive FAQ to get immediate answers about the shipping process.</p>
        </div>

        <div class="space-y-4">
            <!-- FAQ 1 -->
            <details class="group bg-white rounded-xl shadow-md border border-[#e6e6e6] cursor-pointer open:border-[#468de6] transition">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                    Is my vehicle insured during transit?
                    <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                    Yes. Every carrier in the Neon Auto Transport network is required to carry active cargo insurance (minimum $100,000 for open, up to $250,000+ for enclosed). Your vehicle is fully covered from pickup to delivery.
                </div>
            </details>

            <!-- FAQ 2 -->
            <details class="group bg-white rounded-xl shadow-md border border-[#e6e6e6] cursor-pointer open:border-[#468de6] transition">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                    How do I prepare my car for shipping?
                    <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                    Please wash the exterior so pre-existing damage can be noted. Remove all toll tags, parking passes, and personal items. Ensure your gas tank is no more than 1/4 full to save on weight, and disable any active car alarms.
                </div>
            </details>

            <!-- FAQ 3 -->
            <details class="group bg-white rounded-xl shadow-md border border-[#e6e6e6] cursor-pointer open:border-[#468de6] transition">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                    Can I track my shipment?
                    <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                    Yes. Unlike many brokers, we provide you with the direct phone number of the driver handling your shipment. You can call or text them anytime for a real-time ETA.
                </div>
            </details>

            <!-- FAQ 4 -->
            <details class="group bg-white rounded-xl shadow-md border border-[#e6e6e6] cursor-pointer open:border-[#468de6] transition">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                    Do you offer Door to Door Service?
                    <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                    Absolutely. Your vehicle is picked up and delivered as close to your chosen addresses as legally and safely possible for a commercial 18-wheeler truck.
                </div>
            </details>

            <!-- FAQ 5 -->
            <details class="group bg-white rounded-xl shadow-md border border-[#e6e6e6] cursor-pointer open:border-[#468de6] transition">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                    Can you ship non-running vehicles?
                    <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                    Yes, we can transport inoperable vehicles. Please inform us during the quoting process so we can dispatch a carrier equipped with a winch to safely load and unload the car.
                </div>
            </details>

            <!-- FAQ 6 -->
            <details class="group bg-white rounded-xl shadow-md border border-[#e6e6e6] cursor-pointer open:border-[#468de6] transition">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                    Do I have to pay an upfront deposit?
                    <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                    No! Neon Auto Transport never charges an upfront deposit to quote or post your vehicle. You only pay once we have successfully secured a carrier for your dates and you approve the dispatch.
                </div>
            </details>
        </div>

        <div class="mt-12 text-center">
            <p class="text-lg text-[#425466] mb-6">Still have questions? Our transport specialists are available 24/7.</p>
            <a href="tel:5715767711" class="btn-primary py-4 px-8 text-lg font-bold">Call (571) 576-7711</a>
        </div>
    </div>
</section>
`;

let newPage = template;

// Replace Title
newPage = newPage.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
newPage = newPage.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`);
newPage = newPage.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://neonautotransport.com/faqs/">`);

// Replace H1 and Hero Block
const heroContent = `
<section class="relative bg-[#0a2540] pt-32 pb-16">
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
        <nav class="mb-6 text-sm text-white/50">
            <a href="/" class="hover:text-white/80 transition">Home</a>
            <span class="mx-2">/</span>
            <span class="text-[#00d4ff]">${breadcrumb}</span>
        </nav>
        <h1 class="text-4xl md:text-5xl font-black text-white mb-4" style="text-shadow: 0 0 30px rgba(0,212,255,0.3);">
            ${h1}
        </h1>
    </div>
</section>

<!-- Main Content -->
<main class="bg-[#f6f9fc] py-16">
    ${content}
</main>
`;

const bodyRegex = /<section class="relative bg-\[#0a2540\] pt-32 pb-16">[\s\S]*?<\/main>/;
newPage = newPage.replace(bodyRegex, heroContent);

// Fix up relative paths
newPage = newPage.replace(/href="css\//g, 'href="/css/');
newPage = newPage.replace(/src="images\//g, 'src="/images/');

const outputPath = path.join(__dirname, 'faqs', 'index.html');
fs.writeFileSync(outputPath, newPage);
console.log(`Generated faqs/index.html`);

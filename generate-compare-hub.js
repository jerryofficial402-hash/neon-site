const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'about.html');
const template = fs.readFileSync(aboutPath, 'utf8');

const title = 'Auto Transport Comparison Guides | Neon Auto Transport';
const desc = 'Compare auto transport services, brokers vs carriers, and our direct competitors. Make an informed decision before shipping your vehicle.';
const h1 = 'Auto Transport <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff]">Comparison Guides</span>';
const breadcrumb = 'Comparison Guides';

const content = `
<section class="py-20 lg:py-32 bg-[#f0f5fa] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="mb-12 text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 text-[#0a2540]">Make an Informed Decision</h2>
            <p class="text-xl text-[#425466]">Whether you're deciding between open or enclosed transport, or comparing Neon against a major competitor, our comprehensive guides will help you choose the best option for your vehicle.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Guide 1 -->
            <div class="bg-white rounded-2xl shadow-lg border border-[#e6e6e6] overflow-hidden flex flex-col transition hover:-translate-y-2 hover:shadow-xl duration-300">
                <div class="h-48 bg-[#0a2540] relative flex items-center justify-center p-6 text-center">
                    <div class="absolute inset-0 opacity-[0.1]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <h3 class="text-2xl font-black text-white relative z-10 leading-tight">Neon vs<br><span class="text-[#39FF14]">Montway</span></h3>
                </div>
                <div class="p-8 flex-grow flex flex-col">
                    <p class="text-[#425466] leading-relaxed mb-6 flex-grow">Compare Neon Auto Transport's direct-driver contact and zero-deposit model against industry giant Montway.</p>
                    <a href="/compare/neon-vs-montway.html" class="inline-flex items-center justify-center px-6 py-3 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg hover:bg-[#e1ecf7] transition w-full">Read Comparison &rarr;</a>
                </div>
            </div>

            <!-- Guide 2 -->
            <div class="bg-white rounded-2xl shadow-lg border border-[#e6e6e6] overflow-hidden flex flex-col transition hover:-translate-y-2 hover:shadow-xl duration-300">
                <div class="h-48 bg-[#635bff] relative flex items-center justify-center p-6 text-center">
                    <div class="absolute inset-0 opacity-[0.1]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <h3 class="text-2xl font-black text-white relative z-10 leading-tight">Broker vs<br><span class="text-[#00d4ff]">Carrier</span></h3>
                </div>
                <div class="p-8 flex-grow flex flex-col">
                    <p class="text-[#425466] leading-relaxed mb-6 flex-grow">Understand the auto transport ecosystem. Learn why booking through a vetted broker provides faster dispatch and better insurance coverage than a direct carrier.</p>
                    <a href="/compare/broker-vs-carrier.html" class="inline-flex items-center justify-center px-6 py-3 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg hover:bg-[#e1ecf7] transition w-full">Read Comparison &rarr;</a>
                </div>
            </div>

            <!-- Guide 3 -->
            <div class="bg-white rounded-2xl shadow-lg border border-[#e6e6e6] overflow-hidden flex flex-col transition hover:-translate-y-2 hover:shadow-xl duration-300">
                <div class="h-48 bg-slate-900 relative flex items-center justify-center p-6 text-center">
                    <div class="absolute inset-0 opacity-[0.1]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <h3 class="text-2xl font-black text-white relative z-10 leading-tight">Open vs<br><span class="text-[#00d4ff]">Enclosed</span></h3>
                </div>
                <div class="p-8 flex-grow flex flex-col">
                    <p class="text-[#425466] leading-relaxed mb-6 flex-grow">A detailed breakdown of Open Transport (standard) vs Enclosed Transport (premium protection). Compare costs, speed, and safety factors.</p>
                    <a href="/compare/open-vs-enclosed.html" class="inline-flex items-center justify-center px-6 py-3 bg-[#f0f5fa] text-[#0a2540] font-bold rounded-lg hover:bg-[#e1ecf7] transition w-full">Read Comparison &rarr;</a>
                </div>
            </div>
        </div>
    </div>
</section>
`;

let newPage = template;

// Replace Title
newPage = newPage.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

// Replace Meta Description
newPage = newPage.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`);

// Replace Canonical
newPage = newPage.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://neonautotransport.com/compare/">`);

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

const outputPath = path.join(__dirname, 'compare', 'index.html');
fs.writeFileSync(outputPath, newPage);
console.log(`Generated compare/index.html`);

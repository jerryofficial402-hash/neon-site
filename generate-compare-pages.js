const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'about.html');
const template = fs.readFileSync(aboutPath, 'utf8');

const pages = [
    {
        filename: 'neon-vs-montway.html',
        title: 'Neon Auto Transport vs Montway | Comparison',
        desc: 'Comparing Neon Auto Transport vs Montway Auto Transport. See why Neon offers better price locks, zero upfront deposits, and direct driver contact.',
        h1: 'Neon Auto Transport <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff]">vs Montway</span>',
        content: `
            <section class="py-20 lg:py-32 bg-[#f0f5fa] relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="mb-12">
                        <h2 class="text-3xl font-bold mb-4 text-[#0a2540]">Why Choose Neon Over Montway?</h2>
                        <p class="text-xl text-[#425466]">While Montway is a large broker, Neon Auto Transport focuses on a premium customer experience with direct driver communication and zero upfront fees.</p>
                    </div>

                    <div class="overflow-hidden bg-white shadow-xl rounded-2xl border border-[#e6e6e6]">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-[#0a2540] text-white">
                                    <th class="p-6 text-lg font-semibold w-1/3">Feature</th>
                                    <th class="p-6 text-lg font-semibold border-l border-[#203a55] w-1/3">Neon Auto Transport</th>
                                    <th class="p-6 text-lg font-semibold border-l border-[#203a55] w-1/3">Montway</th>
                                </tr>
                            </thead>
                            <tbody class="text-[#425466]">
                                <tr class="border-b border-[#e6e6e6]">
                                    <td class="p-6 font-semibold">Direct Driver Contact</td>
                                    <td class="p-6 border-l border-[#e6e6e6] text-[#2e865f] font-bold">Yes - You get the driver's direct cell phone.</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">No - Must route through dispatch.</td>
                                </tr>
                                <tr class="border-b border-[#e6e6e6] bg-[#f8fafc]">
                                    <td class="p-6 font-semibold">Upfront Deposit Required</td>
                                    <td class="p-6 border-l border-[#e6e6e6] text-[#2e865f] font-bold">No - $0 until a carrier is dispatched.</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Yes - Often requires a booking fee.</td>
                                </tr>
                                <tr class="border-b border-[#e6e6e6]">
                                    <td class="p-6 font-semibold">Price Lock Guarantee</td>
                                    <td class="p-6 border-l border-[#e6e6e6] text-[#2e865f] font-bold">Yes - Guaranteed quotes available.</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Variable - Subject to carrier bidding.</td>
                                </tr>
                                <tr class="border-b border-[#e6e6e6] bg-[#f8fafc]">
                                    <td class="p-6 font-semibold">Carrier Vetting</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Top 10% of FMCSA compliant carriers.</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Standard FMCSA verification.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        `
    },
    {
        filename: 'broker-vs-carrier.html',
        title: 'Auto Transport Broker vs Carrier | What\'s the Difference?',
        desc: 'Understand the difference between an auto transport broker and a carrier. Learn why using a trusted broker network provides better coverage and insurance.',
        h1: 'Auto Transport Broker <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff]">vs Carrier</span>',
        content: `
            <section class="py-20 lg:py-32 bg-[#f0f5fa] relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="mb-12">
                        <h2 class="text-3xl font-bold mb-4 text-[#0a2540]">Understanding the Auto Transport Ecosystem</h2>
                        <p class="text-xl text-[#425466]">When shipping a car, you will encounter two types of companies: Brokers (like Neon Auto Transport) and Direct Carriers. Here is why using a vetted broker is safer.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div class="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#635bff]">
                            <h3 class="text-2xl font-bold mb-4 text-[#0a2540]">What is a Broker?</h3>
                            <p class="text-[#425466] leading-relaxed mb-4">A broker acts as your logistics manager. They do not own the trucks. Instead, they have access to a network of thousands of vetted, FMCSA-compliant carriers.</p>
                            <ul class="list-disc pl-5 space-y-2 text-[#425466]">
                                <li><strong>Access to capacity:</strong> 10,000+ trucks available nationwide.</li>
                                <li><strong>Vetting:</strong> Brokers check insurance and safety records daily.</li>
                                <li><strong>Speed:</strong> Can find a driver for your specific route in 1-3 days.</li>
                            </ul>
                        </div>
                        <div class="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#0a2540]">
                            <h3 class="text-2xl font-bold mb-4 text-[#0a2540]">What is a Carrier?</h3>
                            <p class="text-[#425466] leading-relaxed mb-4">A carrier is the actual owner-operator of the truck that moves your vehicle. They manage the physical driving, loading, and unloading.</p>
                            <ul class="list-disc pl-5 space-y-2 text-[#425466]">
                                <li><strong>Limited routes:</strong> They usually only drive specific lanes (e.g. FL to NY).</li>
                                <li><strong>Availability:</strong> If their truck breaks down, your shipment is delayed indefinitely.</li>
                                <li><strong>Verification:</strong> You must verify their DOT and insurance status yourself.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    {
        filename: 'open-vs-enclosed.html',
        title: 'Open vs Enclosed Auto Transport | Which is Right for You?',
        desc: 'Compare open carrier vs enclosed auto transport. We breakdown the cost, safety, and speed differences for shipping your car.',
        h1: 'Open <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff]">vs Enclosed</span> Transport',
        content: `
            <section class="py-20 lg:py-32 bg-[#f0f5fa] relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="mb-12">
                        <h2 class="text-3xl font-bold mb-4 text-[#0a2540]">Choosing the Right Service Type</h2>
                        <p class="text-xl text-[#425466]">The majority of vehicles are shipped via Open Transport, but Enclosed offers premium protection. Compare the options below.</p>
                    </div>

                    <div class="overflow-hidden bg-white shadow-xl rounded-2xl border border-[#e6e6e6]">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-[#0a2540] text-white">
                                    <th class="p-6 text-lg font-semibold w-1/4">Comparison</th>
                                    <th class="p-6 text-lg font-semibold border-l border-[#203a55] w-3/8">Open Auto Transport</th>
                                    <th class="p-6 text-lg font-semibold border-l border-[#203a55] w-3/8">Enclosed Auto Transport</th>
                                </tr>
                            </thead>
                            <tbody class="text-[#425466]">
                                <tr class="border-b border-[#e6e6e6]">
                                    <td class="p-6 font-semibold">Protection</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Exposed to weather and road debris. Safe, but dirty upon arrival.</td>
                                    <td class="p-6 border-l border-[#e6e6e6] text-[#2e865f] font-bold">100% protected from weather, dust, and rocks.</td>
                                </tr>
                                <tr class="border-b border-[#e6e6e6] bg-[#f8fafc]">
                                    <td class="p-6 font-semibold">Cost</td>
                                    <td class="p-6 border-l border-[#e6e6e6] text-[#2e865f] font-bold">Most affordable. Industry standard.</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">30% to 50% more expensive than open transport.</td>
                                </tr>
                                <tr class="border-b border-[#e6e6e6]">
                                    <td class="p-6 font-semibold">Speed & Availability</td>
                                    <td class="p-6 border-l border-[#e6e6e6] text-[#2e865f] font-bold">High availability. 90% of all carriers are open. Fast dispatch.</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Lower availability. May take longer to schedule a pickup.</td>
                                </tr>
                                <tr class="border-b border-[#e6e6e6] bg-[#f8fafc]">
                                    <td class="p-6 font-semibold">Best For</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Daily drivers, used cars, standard SUVs and sedans.</td>
                                    <td class="p-6 border-l border-[#e6e6e6]">Classic cars, exotics, luxury vehicles, high-value cars.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        `
    }
];

pages.forEach(page => {
    let content = template;

    // Replace Title
    content = content.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
    
    // Replace Meta Description
    content = content.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${page.desc}">`);
    
    // Replace Canonical
    content = content.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://neonautotransport.com/compare/${page.filename}">`);

    // Replace H1
    content = content.replace(/<h1[^>]*>.*?<\/h1>/, `<h1 class="text-4xl md:text-6xl font-black mb-6 text-[#0a2540] tracking-tight leading-[1.1]">${page.h1}</h1>`);

    // Replace Main Content (between Hero and Footer)
    // We'll replace the entire sections below the hero.
    // The hero in about.html ends before <!-- Stats Section --> or <!-- Why Choose Us -->
    const mainBodyRegex = /(<section class="py-20 lg:py-32 bg-white relative overflow-hidden" id="about-us">)[\s\S]*?(<!-- CTA Section -->)/;
    
    // Replace it
    content = content.replace(mainBodyRegex, page.content + '\n\n$2');

    // Fix up relative paths for /compare/ directory if needed
    // Since /compare/ is one level deep, same as /services/ and /routes/, CSS and image paths that are absolute '/' work.
    // Ensure all links like 'href="css/styles.css"' are absolute or relative correctly. The template should be fine if it uses '/css/'.
    content = content.replace(/href="css\//g, 'href="/css/');
    content = content.replace(/src="images\//g, 'src="/images/');
    
    const outputPath = path.join(__dirname, 'compare', page.filename);
    fs.writeFileSync(outputPath, content);
    console.log(`Generated compare/${page.filename}`);
});

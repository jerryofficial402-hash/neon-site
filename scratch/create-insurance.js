const fs = require('fs');

let c = fs.readFileSync('why-neon.html', 'utf8');

// Update Meta Tags
c = c.replace(/<title>.*<\/title>/, '<title>Auto Transport Insurance Coverage | Neon Auto Transport</title>');
c = c.replace(/<meta name="description" content="[^"]+">/, '<meta name="description" content="Learn about our comprehensive cargo insurance coverage for your auto transport. Neon Auto Transport ensures your vehicle is protected every step of the way.">');
c = c.replace(/<link rel="canonical" href="[^"]+" \/>/, '<link rel="canonical" href="https://neonautotransport.com/insurance/" />');

// Update og: tags
c = c.replace(/<meta property="og:url" content="[^"]+">/, '<meta property="og:url" content="https://neonautotransport.com/insurance/">');
c = c.replace(/<meta property="og:title" content="[^"]+">/, '<meta property="og:title" content="Auto Transport Insurance Coverage | Neon Auto Transport">');
c = c.replace(/<meta property="og:description" content="[^"]+">/, '<meta property="og:description" content="Neon Auto Transport ensures your vehicle is protected with comprehensive cargo insurance during transit.">');

// Update Hero
c = c.replace(/<h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-lg reveal">.*?<\/h1>/s, '<h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-lg reveal">Comprehensive <span class="text-[#39FF14]">Insurance Coverage</span></h1>');
c = c.replace(/<p class="text-xl md:text-2xl text-\[#e0e7ff\] mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md reveal" style="transition-delay: 100ms;">.*?<\/p>/s, '<p class="text-xl md:text-2xl text-[#e0e7ff] mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md reveal" style="transition-delay: 100ms;">Your peace of mind is our priority. Every vehicle shipped through our carrier network is fully insured from pickup to delivery.</p>');

// Update Content Block (Replacing the Why Choose Neon grid with Insurance details)
const newContent = `
            <div class="max-w-4xl mx-auto mb-20 reveal">
                <h2 class="text-3xl md:text-4xl font-black mb-8 text-[#0a2540] tracking-tight text-center">How Your Vehicle is Protected</h2>
                <div class="prose prose-lg max-w-none text-[#425466]">
                    <p class="mb-6">At Neon Auto Transport, we understand that your vehicle is one of your most valuable assets. That is why we require every single carrier in our network to maintain active, up-to-date cargo insurance.</p>
                    
                    <div class="grid md:grid-cols-2 gap-8 my-12">
                        <div class="stripe-card p-8 border-t-4 border-t-[#635bff]">
                            <h3 class="text-xl font-bold text-[#0a2540] mb-4">Zero Deductible for You</h3>
                            <p class="text-sm">In the rare event of damage during transit, the carrier's cargo insurance policy covers the cost. You do not pay any deductible out of pocket.</p>
                        </div>
                        <div class="stripe-card p-8 border-t-4 border-t-[#39FF14]">
                            <h3 class="text-xl font-bold text-[#0a2540] mb-4">Comprehensive Verification</h3>
                            <p class="text-sm">Our compliance team actively monitors and verifies the insurance certificates of all carriers before dispatching your vehicle to them.</p>
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold text-[#0a2540] mb-4 mt-8">What is covered?</h3>
                    <ul class="list-disc pl-6 space-y-3 mb-8">
                        <li>Damage incurred while in transit on the carrier's truck.</li>
                        <li>Damage resulting from carrier negligence.</li>
                        <li>Theft of the vehicle while in the carrier's custody.</li>
                    </ul>

                    <h3 class="text-2xl font-bold text-[#0a2540] mb-4 mt-8">What is NOT covered?</h3>
                    <ul class="list-disc pl-6 space-y-3 mb-8">
                        <li>Damage caused by "Acts of God" (e.g., hail, floods, earthquakes) - unless you opt for enclosed transport which protects against weather.</li>
                        <li>Personal items left inside the vehicle. We strongly recommend removing all personal belongings before shipping.</li>
                        <li>Pre-existing damage or mechanical failures.</li>
                    </ul>
                </div>
            </div>
`;

// Replace everything between the hero and the footer
c = c.replace(/<!-- Main Content -->.*?<!-- Ready to experience -->/s, '<!-- Main Content -->\n<div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-20" style="margin-top:-60px">\n' + newContent + '\n</div>\n<!-- Ready to experience -->');

fs.writeFileSync('insurance/index.html', c);
console.log('Done');

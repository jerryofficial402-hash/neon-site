const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const newReviewerBlock = `
    <!-- Author/Reviewer Byline -->
    <section class="container mx-auto px-4 lg:px-8 max-w-6xl pb-16" id="author-byline">
        <div class="stripe-card p-8 flex flex-col md:flex-row items-start gap-6 border-l-4 border-l-[#39FF14]">
            <div class="w-16 h-16 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0369a1] font-black text-2xl flex-shrink-0 shadow-inner">SA</div>
            <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-1">
                    <div class="font-bold text-[#0a2540] text-lg"><a href="/author/shazil-ali/" class="hover:text-[#635bff] transition hover:underline">Shazil Ali</a></div>
                    <span class="px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1] text-xs font-bold uppercase tracking-wider">Fact Checked & Reviewed</span>
                </div>
                <div class="text-[#0a2540] text-sm font-bold mb-3">Director of Operations <span class="text-[#8ba3ba] mx-1">|</span> Neon Auto Transport</div>
                <p class="text-[#425466] text-sm leading-relaxed mb-3">Shazil Ali serves as Director of Operations at Neon Auto Transport, overseeing vehicle shipping operations, carrier coordination, dispatch management, logistics workflows, and customer transportation solutions nationwide. He reviews transportation guides, route pages, service content, and educational resources to ensure accuracy, transparency, and alignment with current auto transport industry standards.</p>
                <div class="flex items-center gap-4">
                    <div class="text-xs text-[#8ba3ba] font-medium">Last Updated: <span class="text-[#0a2540] font-semibold">${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span></div>
                    <a href="https://www.linkedin.com/in/shazil-ali/" target="_blank" rel="noopener noreferrer" class="text-[#0a66c2] hover:text-[#004182] transition inline-flex items-center gap-1 text-xs font-bold">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </div>
    </section>
`;

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let replacedCount = 0;

    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === 'css' || file === 'js' || file === 'images') continue;
        
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            replacedCount += processDirectory(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // 1. Simple text replacements
            const textTargets = [
                { regex: /Marcus Reid/g, replacement: "Shazil Ali" },
                { regex: /Senior Logistics Coordinator/g, replacement: "Director of Operations" }
            ];

            textTargets.forEach(t => {
                if (t.regex.test(content)) {
                    content = content.replace(t.regex, t.replacement);
                    modified = true;
                }
            });

            // 2. Schema Object Replacement
            // We need to match {"@type":"Person","name":"Shazil Ali"} or {"@type":"Person","name":"Marcus Reid"}
            // and replace it with the rich object. Since we already replaced Marcus with Shazil above:
            const oldSchemaRegex = /\{\s*"@type"\s*:\s*"Person"\s*,\s*"name"\s*:\s*"Shazil Ali"\s*\}/g;
            const richSchema = `{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shazil Ali",
              "jobTitle": "Director of Operations",
              "worksFor": {
                "@type": "Organization",
                "name": "Neon Auto Transport"
              },
              "sameAs": [
                "https://www.linkedin.com/in/shazil-ali/"
              ]
            }`;

            if (oldSchemaRegex.test(content)) {
                content = content.replace(oldSchemaRegex, richSchema);
                modified = true;
            }

            // 3. Cheerio DOM replacement for the Author block
            if (content.includes('id="author-byline"')) {
                const $ = cheerio.load(content);
                $('#author-byline').replaceWith(newReviewerBlock);
                content = $.html();
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                replacedCount++;
            }
        }
    }
    return replacedCount;
}

const count = processDirectory(path.join(__dirname, '..'));
console.log(`Successfully completed E-E-A-T persona override in ${count} files.`);

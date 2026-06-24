const fs = require('fs');

let content = fs.readFileSync('routes/generate-routes-v2.js', 'utf8');

// 1. Fix the city links bug (commit 167af49 attempted this but messed up)
const oldCitiesHTML = `    state.cities.forEach(city => {
        // We will generate links to actual city pages in Phase 4
        citiesHTML += \`
                            <a href="#" class="flex items-center gap-2 text-[#425466] hover:text-[#635bff] font-medium transition group">`;

const newCitiesHTML = `    state.cities.forEach(city => {
        const citySlug = city.toLowerCase().replace(/\\s+/g, '-');
        const stateAbbr = state.abbr.toLowerCase();
        citiesHTML += \`
                            <a href="/routes/city/\${citySlug}-\${stateAbbr}/" class="flex items-center gap-2 text-[#425466] hover:text-[#635bff] font-medium transition group">`;

content = content.replace(oldCitiesHTML, newCitiesHTML);

// 2. Change /quote/ to /cost-calculator/ (commit 0e0a0f8)
content = content.replace(/"\/quote\/"/g, '"/cost-calculator/"');

// 3. Fix the Woodbridge TX bug
content = content.replace(
    `content = content.replace(/"addressRegion":\\s*"[^"]*"/, '"addressRegion": "VA"');`,
    `content = content.replace(/"addressRegion":\\s*"[^"]*"/, '"addressRegion": "VA"');
    content = content.replace(/Woodbridge, [A-Z]{2}/g, 'Woodbridge, VA');`
);

// 4. Fix Canonical, OG URL, Footer links (commit c447ed9 attempted this)
content = content.replace(
    `content = content.replace(/virginia-car-shipping/g, \`\${slug}-car-shipping\`);`,
    `content = content.replace(/virginia-car-shipping\\.html/g, \`\${slug}-car-shipping/\`);
    content = content.replace(/virginia-car-shipping/g, \`\${slug}-car-shipping\`);
    content = content.replace(/<link rel="canonical" href="([^"]+)\\.html"/g, '<link rel="canonical" href="$1/"');
    content = content.replace(/<meta property="og:url" content="([^"]+)\\.html"/g, '<meta property="og:url" content="$1/"');
    content = content.replace(/href="\\/compare\\/([^"]+)\\.html"/g, 'href="/compare/$1/"');
    
    // Marcus Reid strip
    content = content.replace(/<div class="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">[\\s\\S]*?<\\/div>\\s*<\\/div>/, '');`
);

// 5. Fix Fake Testimonial
content = content.replace(
    `content = content.replace(/Old Dominion State/g, sData.nickname);`,
    `content = content.replace(/Old Dominion State/g, sData.nickname);
    
    // Fix testimonial
    content = content.replace(/"Neon Auto Transport shipped my vehicle from [a-zA-Z\\s]+ to [a-zA-Z\\s]+ in just 5 days\\./g, '"Neon Auto Transport shipped my vehicle across the country in just 5 days.');
    content = content.replace(/California to California in just 5 days/g, 'across the country in just 5 days');`
);

fs.writeFileSync('routes/generate-routes-v2.js', content);
console.log('Fixed generator perfectly from pristine commit!');

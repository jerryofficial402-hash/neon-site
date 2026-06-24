const fs = require('fs');

let content = fs.readFileSync('routes/generate-routes-v2.js', 'utf8');

const footerFix = `    // 3.1 Fix URL slugs in canonical, OG URL, and breadcrumb schema
    content = content.replace(/virginia-car-shipping\\.html/g, \`\${slug}-car-shipping/\`);
    content = content.replace(/virginia-car-shipping/g, \`\${slug}-car-shipping\`);
    content = content.replace(/<link rel="canonical" href="([^"]+)\\.html"/g, '<link rel="canonical" href="$1/"');
    content = content.replace(/<meta property="og:url" content="([^"]+)\\.html"/g, '<meta property="og:url" content="$1/"');
    content = content.replace(/href="\\/compare\\/([^"]+)\\.html"/g, 'href="/compare/$1/"');
    
    // Marcus Reid strip
    content = content.replace(/<div class="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">[\\s\\S]*?<\\/div>\\s*<\\/div>/, '');

    // Fix Footer Popular Cities
    const footerCitiesRegex = /<div class="font-bold text-\\[#635bff\\] mb-4 text-sm uppercase tracking-wider">Popular Cities in [A-Za-z\\s]+<\\/div>\\s*<div class="flex flex-col gap-2 text-sm text-\\[#468de6\\] font-semibold">[\\s\\S]*?<\\/div>/;
    let footerCitiesHTML = '<div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">Popular Cities in ' + state.name + '</div>\\n                          <div class="flex flex-col gap-2 text-sm text-[#468de6] font-semibold">\\n                              ';
    state.cities.forEach(city => {
        const citySlug = city.toLowerCase().replace(/\\s+/g, '-');
        const stateAbbr = state.abbr.toLowerCase();
        footerCitiesHTML += \`<a href="/routes/city/\${citySlug}-\${stateAbbr}/" class="hover:text-[#0a2540] transition">\${city}</a>\`;
    });
    footerCitiesHTML += '\\n                          </div>';
    content = content.replace(footerCitiesRegex, footerCitiesHTML);`;

content = content.replace(/    \/\/ 3\.1 Fix URL slugs in canonical, OG URL, and breadcrumb schema[\s\S]*?\/\/ Marcus Reid strip[\s\S]*?''\);/, footerFix);

fs.writeFileSync('routes/generate-routes-v2.js', content);
console.log('Fixed footer cities in generator!');

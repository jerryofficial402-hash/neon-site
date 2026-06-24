const fs = require('fs');

let content = fs.readFileSync('routes/generate-routes-v2.js', 'utf8');

// 1. Remove the "Cities We Serve" links by replacing generateCitiesHTML logic entirely to just return empty string
content = content.replace(
    /function generateCitiesHTML\(state\) {[\s\S]*?return '<!-- Unique Local Content Section[\s\S]*?<\/div>';\n}/,
    `function generateCitiesHTML(state) {
    return '<!-- Cities We Serve section temporarily removed to prevent 404s -->';
}`
);

// 2. Remove the "Popular Cities" footer logic from the script
const oldFooterCitiesLogic = `    // Fix Footer Popular Cities
    const footerCitiesRegex = /<div class="font-bold text-\\[#635bff\\] mb-4 text-sm uppercase tracking-wider">Popular Cities in [A-Za-z\\s]+<\\/div>\\s*<div class="flex flex-col gap-2 text-sm text-\\[#468de6\\] font-semibold">[\\s\\S]*?<\\/div>/;
    let footerCitiesHTML = '<div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">Popular Cities in ' + state.name + '</div>\\n                          <div class="flex flex-col gap-2 text-sm text-[#468de6] font-semibold">\\n                              ';
    state.cities.forEach(city => {
        const citySlug = city.toLowerCase().replace(/\\s+/g, '-');
        const stateAbbr = state.abbr.toLowerCase();
        footerCitiesHTML += \`<a href="/routes/city/\${citySlug}-\${stateAbbr}/" class="hover:text-[#0a2540] transition">\${city}</a>\`;
    });
    footerCitiesHTML += '\\n                          </div>';
    content = content.replace(footerCitiesRegex, footerCitiesHTML);`;

content = content.replace(oldFooterCitiesLogic, `    // Footer Popular Cities temporarily removed to prevent 404s
    const footerCitiesRegex = /<div>\\s*<div class="font-bold text-\\[#635bff\\] mb-4 text-sm uppercase tracking-wider">Popular Cities in [\\s\\S]*?<\\/div>\\s*<\\/div>/;
    content = content.replace(footerCitiesRegex, '<!-- Footer Cities Removed -->');`);


// 3. Fix Footer Popular Routes (virginia-to-* and California to California)
const fixFooterRoutes = `    // Fix Footer Popular Routes
    const footerRoutesRegex = /<div>\\s*<div class="font-bold text-\\[#635bff\\] mb-4 text-sm uppercase tracking-wider">Popular Routes<\\/div>\\s*<div class="flex flex-col gap-2 text-sm text-\\[#468de6\\] font-semibold">[\\s\\S]*?<\\/div>\\s*<\\/div>/;
    
    const popRouteTargets = ["California", "Texas", "Florida", "New York", "Illinois", "Washington"].filter(t => t !== state.name).slice(0, 4);
    let footerRoutesHTML = '<div>\\n                          <div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">Popular Routes</div>\\n                          <div class="flex flex-col gap-2 text-sm text-[#468de6] font-semibold">\\n';
    
    popRouteTargets.forEach(target => {
        const targetSlug = target.toLowerCase().replace(/\\s+/g, '-');
        footerRoutesHTML += \`                              <a href="/routes/\${slug}-to-\${targetSlug}-car-shipping/" class="hover:text-[#0a2540] transition">\${state.name} to \${target}</a>\\n\`;
    });
    footerRoutesHTML += '                          </div>\\n                      </div>';
    
    content = content.replace(footerRoutesRegex, footerRoutesHTML);`;

// Insert the new logic right where the old logic was
content = content.replace(`    // Footer Popular Cities temporarily removed to prevent 404s
    const footerCitiesRegex = /<div>\\s*<div class="font-bold text-\\[#635bff\\] mb-4 text-sm uppercase tracking-wider">Popular Cities in [\\s\\S]*?<\\/div>\\s*<\\/div>/;
    content = content.replace(footerCitiesRegex, '<!-- Footer Cities Removed -->');`, 
`    // Footer Popular Cities temporarily removed to prevent 404s
    const footerCitiesRegex = /<div>\\s*<div class="font-bold text-\\[#635bff\\] mb-4 text-sm uppercase tracking-wider">Popular Cities in [\\s\\S]*?<\\/div>\\s*<\\/div>/;
    content = content.replace(footerCitiesRegex, '<!-- Footer Cities Removed -->');\n\n` + fixFooterRoutes);

fs.writeFileSync('routes/generate-routes-v2.js', content);
console.log('Patch complete!');

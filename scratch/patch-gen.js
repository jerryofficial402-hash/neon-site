const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../routes/generate-routes-v2.js');
let content = fs.readFileSync(file, 'utf-8');

// 1. Update generateCitiesHTML to remove the grid of cities
const oldFuncRegex = /function generateCitiesHTML\(state\) \{[\s\S]*?    \n    <div class="font-bold text-\[\#635bff\] mb-4 text-sm uppercase tracking-wider">'\ \+\ state\.cities\.length \+\ ' major cities served in '\ \+\ state\.name \+\ '<\/div>\\n' \+\n           '    <div class="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-sm text-\[\#468de6\] font-semibold">\\n' \+\n           '        ' \+\ citiesLinks \+\ '\\n' \+\n           '    <\/div>\\n' \+\n           '<\/div>';\n\}/m;

content = content.replace(oldFuncRegex, `function generateCitiesHTML(state) {
    return '<!-- Unique Local Content Section to satisfy E-E-A-T and eliminate thin content -->\\n' +
           '<div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12">\\n' +
           '    <h2 class="text-2xl font-bold mb-4 text-[#0a2540]">Local Auto Transport Insights for ' + state.name + '</h2>\\n' +
           '    <p class="text-[#425466] mb-4 leading-relaxed">\\n' +
           '        Shipping a car in or out of <strong>' + state.name + '</strong> requires specialized knowledge of the region\\'s logistics infrastructure. \\n' +
           '        As a ' + state.type + ', ' + state.name + ' features major transport corridors including <strong>' + state.highways + '</strong>. \\n' +
           '    </p>\\n' +
           '    <p class="text-[#425466] mb-6 leading-relaxed">\\n' +
           '        Our network of 10,000+ verified carriers is highly experienced with ' + state.name + '\\'s ' + state.weather + '. \\n' +
           '        Whether you\\'re moving to ' + state.cities[0] + ' for corporate relocation, buying a car from an auction in ' + (state.cities[1] || 'a major metro') + ', or needing seasonal transport, we ensure compliance with all local Department of Transportation regulations.\\n' +
           '    </p>\\n' +
           '</div>';
}`);

// 2. Fix the regex in step 5
content = content.replace('const originalCitiesRegex = /<div class="stripe-card p-8 lg:p-10 bg-white">[\\s\\S]*?<!-- FAQs -->/m;', 'const originalCitiesRegex = /<!-- Cities We Serve -->[\\s\\S]*?<!-- FAQs -->/m;');
content = content.replace('const newCitiesHTML = generateCitiesHTML(state) + "\\n\\n                    <!-- FAQs -->";', 'const newCitiesHTML = "<!-- Cities We Serve -->\\n" + generateCitiesHTML(state) + "\\n\\n                    <!-- FAQs -->";');

fs.writeFileSync(file, content);
console.log("Patched generate-routes-v2.js");

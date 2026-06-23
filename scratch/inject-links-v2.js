const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const routesDir = path.join(__dirname, '../routes');
const stateDataPath = path.join(routesDir, 'state-data.json');
const stateData = JSON.parse(fs.readFileSync(stateDataPath, 'utf8'));
const allStates = Object.keys(stateData);

const files = fs.readdirSync(routesDir).filter(f => f.endsWith('-car-shipping.html'));
let totalInjections = 0;

for (const file of files) {
    const filePath = path.join(routesDir, file);
    const html = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(html);

    // Extract current state from file name
    const currentStateSlug = file.replace('-car-shipping.html', '');
    let currentStateName = currentStateSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    
    // Correct DC
    if (currentStateName === 'Washington Dc') currentStateName = 'Washington D.C.';

    // 1. Gather all city links available on this state page
    const cities = [];
    $('div.grid a[href^="/routes/city/"]').each((i, el) => {
        cities.push({
            name: $(el).text().trim(),
            url: $(el).attr('href')
        });
    });

    const linkedCities = new Set();
    let injectionsInFile = 0;

    // 2. Inject Contextual Links in paragraphs
    $('main p').each((i, el) => {
        let textNode = $(el).html();
        if (!textNode) return;

        // Skip if the paragraph already has links inside it to avoid breaking nested HTML
        if (textNode.includes('<a ')) return;

        let modified = false;

        for (const city of cities) {
            if (linkedCities.has(city.name)) continue;

            const variations = [
                { regex: new RegExp(`\\bcar shipping in ${city.name}\\b`, 'i') },
                { regex: new RegExp(`\\b${city.name} auto transport services\\b`, 'i') },
                { regex: new RegExp(`\\b${city.name} vehicle transport\\b`, 'i') },
                { regex: new RegExp(`\\b${city.name} auto transport\\b`, 'i') },
                { regex: new RegExp(`\\b${city.name}\\b`, 'g') } // just the name
            ];

            for (const v of variations) {
                const match = textNode.match(v.regex);
                if (match) {
                    // Replace the FIRST occurrence only
                    textNode = textNode.replace(match[0], `<a href="${city.url}" class="text-[#635bff] font-semibold hover:underline">${match[0]}</a>`);
                    linkedCities.add(city.name);
                    modified = true;
                    injectionsInFile++;
                    break;
                }
            }
        }

        if (modified) {
            $(el).html(textNode);
        }
    });

    totalInjections += injectionsInFile;

    // 3. Build the 3 new sections
    // Get 4 random related states
    const relatedStates = [];
    while(relatedStates.length < 4) {
        const rand = allStates[Math.floor(Math.random() * allStates.length)];
        if (rand !== currentStateName && !relatedStates.includes(rand)) {
            relatedStates.push(rand);
        }
    }

    const stateToSlug = (name) => name.toLowerCase().replace(/ /g, '-').replace(/\./g, '') + '-car-shipping';

    const relatedStatesHTML = relatedStates.map(s => 
        `<a href="/routes/${stateToSlug(s)}/" class="hover:text-[#0a2540] transition">${s}</a>`
    ).join('');

    const popularRoutesHTML = `
        <a href="/routes/${currentStateSlug}-to-texas-car-shipping/" class="hover:text-[#0a2540] transition">${currentStateName} to Texas</a>
        <a href="/routes/${currentStateSlug}-to-california-car-shipping/" class="hover:text-[#0a2540] transition">${currentStateName} to California</a>
        <a href="/routes/${currentStateSlug}-to-florida-car-shipping/" class="hover:text-[#0a2540] transition">${currentStateName} to Florida</a>
        <a href="/routes/${currentStateSlug}-to-new-york-car-shipping/" class="hover:text-[#0a2540] transition">${currentStateName} to New York</a>
    `;

    const citiesHTML = cities.slice(0, 8).map(c => 
        `<a href="${c.url}" class="hover:text-[#0a2540] transition">${c.name}</a>`
    ).join('');

    // Locate the "Cities We Serve in" block to replace/augment
    const citiesBlock = $('h2:contains("Cities We Serve in")').parent();
    
    if (citiesBlock.length > 0) {
        // Replace it with the new comprehensive Internal Linking Hub
        const newHub = `
            <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl">
                <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">Auto Transport Hub: ${currentStateName}</h2>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Popular Cities -->
                    <div>
                        <div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">Popular Cities in ${currentStateName}</div>
                        <div class="flex flex-col gap-2 text-sm text-[#468de6] font-semibold">
                            ${citiesHTML}
                        </div>
                    </div>
                    
                    <!-- Related States -->
                    <div>
                        <div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">Related States</div>
                        <div class="flex flex-col gap-2 text-sm text-[#468de6] font-semibold">
                            ${relatedStatesHTML}
                        </div>
                    </div>

                    <!-- Popular Routes -->
                    <div>
                        <div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">Popular Routes</div>
                        <div class="flex flex-col gap-2 text-sm text-[#468de6] font-semibold">
                            ${popularRoutesHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
        citiesBlock.replaceWith(newHub);
    }

    fs.writeFileSync(filePath, $.html(), 'utf8');
}

console.log(`Successfully injected ${totalInjections} contextual links and appended the Internal Linking Hubs across ${files.length} state pages.`);

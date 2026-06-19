const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'routes');
const stateFiles = fs.readdirSync(routesDir);

const statesData = [
    { name: "Alabama", abbr: "AL" },
    { name: "Alaska", abbr: "AK" },
    { name: "Arizona", abbr: "AZ" },
    { name: "Arkansas", abbr: "AR" },
    { name: "California", abbr: "CA" },
    { name: "Colorado", abbr: "CO" },
    { name: "Connecticut", abbr: "CT" },
    { name: "Delaware", abbr: "DE" },
    { name: "Florida", abbr: "FL" },
    { name: "Georgia", abbr: "GA" },
    { name: "Hawaii", abbr: "HI" },
    { name: "Idaho", abbr: "ID" },
    { name: "Illinois", abbr: "IL" },
    { name: "Indiana", abbr: "IN" },
    { name: "Iowa", abbr: "IA" },
    { name: "Kansas", abbr: "KS" },
    { name: "Kentucky", abbr: "KY" },
    { name: "Louisiana", abbr: "LA" },
    { name: "Maine", abbr: "ME" },
    { name: "Maryland", abbr: "MD" },
    { name: "Massachusetts", abbr: "MA" },
    { name: "Michigan", abbr: "MI" },
    { name: "Minnesota", abbr: "MN" },
    { name: "Mississippi", abbr: "MS" },
    { name: "Missouri", abbr: "MO" },
    { name: "Montana", abbr: "MT" },
    { name: "Nebraska", abbr: "NE" },
    { name: "Nevada", abbr: "NV" },
    { name: "New Hampshire", abbr: "NH" },
    { name: "New Jersey", abbr: "NJ" },
    { name: "New Mexico", abbr: "NM" },
    { name: "New York", abbr: "NY" },
    { name: "North Carolina", abbr: "NC" },
    { name: "North Dakota", abbr: "ND" },
    { name: "Ohio", abbr: "OH" },
    { name: "Oklahoma", abbr: "OK" },
    { name: "Oregon", abbr: "OR" },
    { name: "Pennsylvania", abbr: "PA" },
    { name: "Rhode Island", abbr: "RI" },
    { name: "South Carolina", abbr: "SC" },
    { name: "South Dakota", abbr: "SD" },
    { name: "Tennessee", abbr: "TN" },
    { name: "Texas", abbr: "TX" },
    { name: "Utah", abbr: "UT" },
    { name: "Vermont", abbr: "VT" },
    { name: "Virginia", abbr: "VA" },
    { name: "Washington", abbr: "WA" },
    { name: "Washington DC", abbr: "DC" }, // Adjust as needed
    { name: "West Virginia", abbr: "WV" },
    { name: "Wisconsin", abbr: "WI" },
    { name: "Wyoming", abbr: "WY" }
];

let filesFixed = 0;

for (const file of stateFiles) {
    const fullPath = path.join(routesDir, file);
    if (fs.statSync(fullPath).isFile() && fullPath.endsWith('-car-shipping.html')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Find the state for this file
        // e.g. "california-car-shipping.html" -> "California"
        const stateNameSlug = file.replace('-car-shipping.html', '').replace(/-/g, ' ');
        const stateData = statesData.find(s => s.name.toLowerCase() === stateNameSlug || (s.name === 'Washington DC' && stateNameSlug === 'washington-dc'));
        
        if (stateData) {
            // Regex to match: <a href="#" class="...">CityName</a>
            const linkRegex = /<a href="#"([^>]*)>([^<]+)<\/a>/g;
            let updatedContent = content.replace(linkRegex, (match, classes, cityName) => {
                // If the link text looks like a city name (and not something else we missed)
                // We generate the slug: cityname-st/
                const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
                const stateAbbr = stateData.abbr.toLowerCase();
                const newHref = `/routes/city/${citySlug}-${stateAbbr}/`;
                return `<a href="${newHref}"${classes}>${cityName}</a>`;
            });
            
            if (content !== updatedContent) {
                fs.writeFileSync(fullPath, updatedContent);
                console.log(`Updated city links in ${file}`);
                filesFixed++;
            }
        }
    }
}

console.log(`Fixed city links in ${filesFixed} state pages.`);

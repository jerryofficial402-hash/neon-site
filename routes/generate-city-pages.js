const fs = require('fs');
const path = require('path');

const statesData = [
    { name: "Alabama", abbr: "AL", cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile"], highways: "I-65, I-20, I-85", weather: "humid subtropical conditions", type: "southern logistics hub" },
    { name: "Alaska", abbr: "AK", cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka"], highways: "Alaska Route 1 (Glenn Highway)", weather: "extreme winter conditions and icy roads", type: "specialized remote shipping route" },
    { name: "Arizona", abbr: "AZ", cities: ["Phoenix", "Tucson", "Mesa", "Chandler"], highways: "I-10, I-40, I-17", weather: "extreme summer heat requiring fast transit", type: "major southwestern desert corridor" },
    { name: "Arkansas", abbr: "AR", cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"], highways: "I-40, I-30", weather: "variable midwestern seasonal weather", type: "crucial cross-country transit state" },
    { name: "California", abbr: "CA", cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno"], highways: "I-5, I-10, US-101, I-80", weather: "diverse microclimates from coastal fog to desert heat", type: "premium coastal auto transport hub" },
    { name: "Colorado", abbr: "CO", cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"], highways: "I-70, I-25", weather: "mountainous terrain and unpredictable snowstorms", type: "high-elevation Rocky Mountain route" },
    { name: "Connecticut", abbr: "CT", cities: ["Bridgeport", "New Haven", "Stamford", "Hartford"], highways: "I-95, I-84, I-91", weather: "harsh northeastern winters", type: "busy New England transit corridor" },
    { name: "Delaware", abbr: "DE", cities: ["Wilmington", "Dover", "Newark", "Middletown"], highways: "I-95", weather: "coastal mid-atlantic weather", type: "key eastern seaboard logistics point" },
    { name: "Florida", abbr: "FL", cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg"], highways: "I-95, I-75, I-4", weather: "heavy rain and peak snowbird seasonal demand", type: "massive southern snowbird destination" },
    { name: "Georgia", abbr: "GA", cities: ["Atlanta", "Augusta", "Columbus", "Macon"], highways: "I-75, I-85, I-20", weather: "hot, humid summers", type: "central southeastern freight hub" },
    { name: "Hawaii", abbr: "HI", cities: ["Honolulu", "Pearl City", "Hilo", "Kailua"], highways: "H-1, H-2", weather: "tropical maritime climate", type: "specialized overseas port destination" },
    { name: "Idaho", abbr: "ID", cities: ["Boise", "Meridian", "Nampa", "Idaho Falls"], highways: "I-84, I-15", weather: "winter snow and mountainous passes", type: "northern rocky mountain transit state" },
    { name: "Illinois", abbr: "IL", cities: ["Chicago", "Aurora", "Naperville", "Joliet"], highways: "I-90, I-55, I-80", weather: "severe lake-effect snow and icy winters", type: "primary midwestern transport crossroads" },
    { name: "Indiana", abbr: "IN", cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"], highways: "I-65, I-70, I-69", weather: "midwestern winter conditions", type: "the crossroads of America" },
    { name: "Iowa", abbr: "IA", cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"], highways: "I-80, I-35", weather: "heavy snow and open plains winds", type: "central agricultural transit route" },
    { name: "Kansas", abbr: "KS", cities: ["Wichita", "Overland Park", "Kansas City", "Olathe"], highways: "I-70, I-35", weather: "tornado alley winds and severe storms", type: "dead-center cross-country route" },
    { name: "Kentucky", abbr: "KY", cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro"], highways: "I-65, I-75, I-64", weather: "variable seasonal transitions", type: "mid-south auto manufacturing hub" },
    { name: "Louisiana", abbr: "LA", cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"], highways: "I-10, I-49, I-20", weather: "tropical storms and high humidity", type: "major gulf coast port state" },
    { name: "Maine", abbr: "ME", cities: ["Portland", "Lewiston", "Bangor", "South Portland"], highways: "I-95", weather: "extreme northern winter snowfalls", type: "northernmost eastern seaboard destination" },
    { name: "Maryland", abbr: "MD", cities: ["Baltimore", "Columbia", "Germantown", "Silver Spring"], highways: "I-95, I-70", weather: "variable mid-atlantic conditions", type: "busy capital-region transit corridor" },
    { name: "Massachusetts", abbr: "MA", cities: ["Boston", "Worcester", "Springfield", "Cambridge"], highways: "I-90 (Mass Pike), I-95", weather: "severe nor'easter snowstorms", type: "dense New England commercial hub" },
    { name: "Michigan", abbr: "MI", cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"], highways: "I-75, I-94, I-96", weather: "intense lake-effect snow and ice", type: "historic heart of the US auto industry" },
    { name: "Minnesota", abbr: "MN", cities: ["Minneapolis", "St. Paul", "Rochester", "Duluth"], highways: "I-35, I-94", weather: "sub-zero winter temperatures", type: "upper midwest shipping terminus" },
    { name: "Mississippi", abbr: "MS", cities: ["Jackson", "Gulfport", "Southaven", "Biloxi"], highways: "I-55, I-20", weather: "humid southern climate with storm risks", type: "crucial mid-south transit state" },
    { name: "Missouri", abbr: "MO", cities: ["Kansas City", "St. Louis", "Springfield", "Columbia"], highways: "I-70, I-44, I-55", weather: "central US variable weather patterns", type: "gateway to the western auto routes" },
    { name: "Montana", abbr: "MT", cities: ["Billings", "Missoula", "Great Falls", "Bozeman"], highways: "I-90, I-15", weather: "extreme mountain winter conditions", type: "vast northern mountain transit route" },
    { name: "Nebraska", abbr: "NE", cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island"], highways: "I-80", weather: "high plains winds and winter snow", type: "major straight-line western transit corridor" },
    { name: "Nevada", abbr: "NV", cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas"], highways: "I-15, I-80", weather: "extreme desert heat and mountain passes", type: "essential western casino and resort hub" },
    { name: "New Hampshire", abbr: "NH", cities: ["Manchester", "Nashua", "Concord", "Derry"], highways: "I-93, I-89", weather: "heavy New England snows", type: "northern eastern seaboard route" },
    { name: "New Jersey", abbr: "NJ", cities: ["Newark", "Jersey City", "Paterson", "Elizabeth"], highways: "I-95 (NJ Turnpike), I-80", weather: "variable coastal and winter weather", type: "extremely dense logistics and port hub" },
    { name: "New Mexico", abbr: "NM", cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"], highways: "I-40, I-25", weather: "desert heat and high-altitude cold", type: "scenic southwestern transit route" },
    { name: "New York", abbr: "NY", cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"], highways: "I-87, I-90", weather: "upstate snow and dense city traffic", type: "massive northeastern commercial destination" },
    { name: "North Carolina", abbr: "NC", cities: ["Charlotte", "Raleigh", "Greensboro", "Durham"], highways: "I-85, I-40, I-95", weather: "variable coastal to mountain conditions", type: "rapidly growing mid-atlantic tech and finance hub" },
    { name: "North Dakota", abbr: "ND", cities: ["Fargo", "Bismarck", "Grand Forks", "Minot"], highways: "I-94, I-29", weather: "bitterly cold and snowy winters", type: "northern border plains route" },
    { name: "Ohio", abbr: "OH", cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo"], highways: "I-71, I-75, I-70, I-80", weather: "lake-effect snow in northern regions", type: "vital midwestern manufacturing crossroads" },
    { name: "Oklahoma", abbr: "OK", cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"], highways: "I-40, I-35, I-44", weather: "tornado alley severe weather risks", type: "south-central transit crossroads" },
    { name: "Oregon", abbr: "OR", cities: ["Portland", "Salem", "Eugene", "Gresham"], highways: "I-5, I-84", weather: "heavy coastal rain and mountain snow", type: "pacific northwest logistics corridor" },
    { name: "Pennsylvania", abbr: "PA", cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie"], highways: "I-76 (PA Turnpike), I-80", weather: "variable winter snow and mountain ice", type: "major eastern industrial and port state" },
    { name: "Rhode Island", abbr: "RI", cities: ["Providence", "Cranston", "Warwick", "Pawtucket"], highways: "I-95", weather: "coastal New England storms", type: "dense coastal transit point" },
    { name: "South Carolina", abbr: "SC", cities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant"], highways: "I-26, I-95", weather: "humid coastal summers", type: "growing southeastern port and manufacturing hub" },
    { name: "South Dakota", abbr: "SD", cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"], highways: "I-90, I-29", weather: "severe winter plains weather", type: "central northern transit route" },
    { name: "Tennessee", abbr: "TN", cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"], highways: "I-40, I-24, I-65", weather: "variable mid-south weather", type: "crucial cross-country shipping crossroads" },
    { name: "Texas", abbr: "TX", cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"], highways: "I-10, I-35, I-20, I-45", weather: "extreme summer heat and vast distances", type: "massive southern logistics and port hub" },
    { name: "Utah", abbr: "UT", cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan"], highways: "I-15, I-80", weather: "mountain snow and desert heat", type: "high-altitude western transit center" },
    { name: "Vermont", abbr: "VT", cities: ["Burlington", "South Burlington", "Rutland", "Barre"], highways: "I-89, I-91", weather: "severe New England winter snows", type: "scenic northern border route" },
    { name: "Virginia", abbr: "VA", cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond"], highways: "I-95, I-81, I-64", weather: "variable mid-atlantic conditions", type: "major eastern seaboard naval and commercial hub" },
    { name: "Washington", abbr: "WA", cities: ["Seattle", "Spokane", "Tacoma", "Vancouver"], highways: "I-5, I-90", weather: "heavy rain and Cascade mountain snow", type: "key pacific northwest port destination" },
    { name: "Washington D.C.", abbr: "DC", cities: ["Washington"], highways: "I-495 (Capital Beltway)", weather: "mid-atlantic seasonal weather", type: "dense capital city destination" },
    { name: "West Virginia", abbr: "WV", cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg"], highways: "I-79, I-64, I-77", weather: "mountainous terrain and winter snow", type: "Appalachian transit corridor" },
    { name: "Wisconsin", abbr: "WI", cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha"], highways: "I-94, I-39, I-43", weather: "severe freezing temperatures and snow", type: "northern midwestern dairy and manufacturing state" },
    { name: "Wyoming", abbr: "WY", cities: ["Cheyenne", "Casper", "Laramie", "Gillette"], highways: "I-80, I-25", weather: "high winds and extreme mountain snow", type: "vast high-plains western transit route" }
];

const templatePath = path.join(__dirname, 'virginia-car-shipping.html');
const template = fs.readFileSync(templatePath, 'utf-8');

let count = 0;

statesData.forEach(state => {
    state.cities.forEach(city => {
        const slugCity = city.toLowerCase().replace(/, /g, '-').replace(/\s+/g, '-').replace(/\./g, '');
        const slug = `${slugCity}-${state.abbr.toLowerCase()}`;
        const outputPath = path.join(__dirname, 'city', `${slug}.html`);

        let content = template;

        const title = `Car Shipping in ${city}, ${state.abbr}`;
        
        // 1. Replace Title Tag
        content = content.replace(/<title>Virginia Car Shipping.*?<\/title>/, `<title>${title} | Auto Transport Company</title>`);
        
        // 2. Replace H1
        content = content.replace(/<h1[^>]*>.*?<\/h1>/, `<h1 class="text-4xl md:text-6xl font-black mb-6 text-[#0a2540] tracking-tight leading-[1.1]"><span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff] mb-2">Ship Your Car</span>To or From ${city}, ${state.abbr}</h1>`);

        // 3. Replace Description Meta
        const metaDescRegex = /<meta name="description" content="[^"]*">/;
        content = content.replace(metaDescRegex, `<meta name="description" content="Get an instant quote for car shipping in ${city}, ${state.abbr}. Fully insured door-to-door auto transport. Reliable carrier network.">`);

        // 4. Update Schema
        content = content.replace(/"name": "Virginia Car Shipping"/, `"name": "${title}"`);
        content = content.replace(/"description": "[^"]*"/, `"description": "Door-to-door auto transport to and from ${city}, ${state.name}."`);
        content = content.replace(/https:\/\/neonautotransport\.com\/virginia-car-shipping\.html/g, `https://neonautotransport.com/routes/city/${slug}.html`);
        content = content.replace(/"Virginia Car Shipping"/g, `"${title}"`);
        
        // Restore Address Region
        content = content.replace(/"addressRegion":\s*"[^"]*"/, '"addressRegion": "VA"');

        // 5. Replace unique route content block
        const uniqueBlock = `
                    <!-- City Specific Details -->
                    <div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12">
                        <h2 class="text-2xl font-bold mb-4 text-[#0a2540]">Local Auto Transport Insights for ${city}, ${state.abbr}</h2>
                        <p class="mt-6 text-[#425466] leading-relaxed">
                            Neon Auto Transport provides top-tier vehicle shipping directly to and from ${city}, ${state.name}. 
                            Whether you are buying a car locally, relocating for business, or shipping a classic car, our 10,000+ verified carriers cover the ${city} metro area. 
                            Located near major ${state.name} highways like ${state.highways}, ${city} is a highly accessible route for both Open and Enclosed auto transport carriers.
                        </p>
                        <p class="mt-6 text-[#425466] leading-relaxed">
                            Due to the ${state.weather} common in ${state.name}, we offer specialized enclosed shipping for exotic and luxury vehicles. We guarantee price locks and direct driver contact.
                        </p>
                    </div>
        `;

        const citiesRegex = /<div class="stripe-card p-8 lg:p-10 bg-white">[\s\S]*?<!-- FAQs -->/i;
        if (content.match(citiesRegex)) {
            content = content.replace(citiesRegex, uniqueBlock + "\n\n                    <!-- FAQs -->");
        } else {
            const backupRegex = /<div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12">[\s\S]*?<!-- FAQs -->/i;
            content = content.replace(backupRegex, uniqueBlock + "\n\n                    <!-- FAQs -->");
        }

        // Remove the Popular Routes Section
        content = content.replace(/<!-- Popular Routes Section -->[\s\S]*?<!-- End Popular Routes -->/i, '');

        // Update the flag image to a generic city icon or keep state flag
        const flagRegex = /<img src="https:\/\/flagcdn\.com\/w320\/us-va\.png"[^>]*>/;
        content = content.replace(flagRegex, `<img src="https://flagcdn.com/w320/us-${state.abbr.toLowerCase()}.png" alt="${state.name} State Flag for ${city}" class="w-full h-full object-cover border-4 border-white shadow-lg rounded-xl transform rotate-3 hover:rotate-0 transition duration-500">`);

        fs.writeFileSync(outputPath, content);
        count++;
    });
});

console.log('Generated '+count+' standalone city pages successfully!');

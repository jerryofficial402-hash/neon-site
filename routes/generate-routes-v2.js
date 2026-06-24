const fs = require('fs');
const path = require('path');
const stateDataMap = require('./state-data.json');

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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const stateCoords = {
  "Alabama": { lat: 33.5186, lng: -86.8104 },
  "Alaska": { lat: 61.2181, lng: -149.9003 },
  "Arizona": { lat: 33.4484, lng: -112.0740 },
  "Arkansas": { lat: 34.7465, lng: -92.2896 },
  "California": { lat: 34.0522, lng: -118.2437 },
  "Colorado": { lat: 39.7392, lng: -104.9903 },
  "Connecticut": { lat: 41.7637, lng: -72.6851 },
  "Delaware": { lat: 39.7447, lng: -75.5484 },
  "Florida": { lat: 25.7617, lng: -80.1918 },
  "Georgia": { lat: 33.7490, lng: -84.3880 },
  "Hawaii": { lat: 21.3069, lng: -157.8583 },
  "Idaho": { lat: 43.6150, lng: -116.2023 },
  "Illinois": { lat: 41.8781, lng: -87.6298 },
  "Indiana": { lat: 39.7684, lng: -86.1581 },
  "Iowa": { lat: 41.5868, lng: -93.6250 },
  "Kansas": { lat: 37.6872, lng: -97.3301 },
  "Kentucky": { lat: 38.2527, lng: -85.7585 },
  "Louisiana": { lat: 29.9511, lng: -90.0715 },
  "Maine": { lat: 43.6591, lng: -70.2568 },
  "Maryland": { lat: 39.2904, lng: -76.6122 },
  "Massachusetts": { lat: 42.3601, lng: -71.0589 },
  "Michigan": { lat: 42.3314, lng: -83.0458 },
  "Minnesota": { lat: 44.9778, lng: -93.2650 },
  "Mississippi": { lat: 32.2988, lng: -90.1848 },
  "Missouri": { lat: 38.6270, lng: -90.1994 },
  "Montana": { lat: 45.7833, lng: -108.5007 },
  "Nebraska": { lat: 41.2565, lng: -95.9345 },
  "Nevada": { lat: 36.1716, lng: -115.1398 },
  "New Hampshire": { lat: 42.9956, lng: -71.4548 },
  "New Jersey": { lat: 40.7357, lng: -74.1724 },
  "New Mexico": { lat: 35.0844, lng: -106.6504 },
  "New York": { lat: 40.7128, lng: -74.0060 },
  "North Carolina": { lat: 35.2271, lng: -80.8431 },
  "North Dakota": { lat: 46.8772, lng: -96.7898 },
  "Ohio": { lat: 39.9612, lng: -82.9988 },
  "Oklahoma": { lat: 35.4676, lng: -97.5164 },
  "Oregon": { lat: 45.5152, lng: -122.6784 },
  "Pennsylvania": { lat: 39.9526, lng: -75.1652 },
  "Rhode Island": { lat: 41.8240, lng: -71.4128 },
  "South Carolina": { lat: 32.7765, lng: -79.9311 },
  "South Dakota": { lat: 43.5460, lng: -96.7313 },
  "Tennessee": { lat: 36.1627, lng: -86.7816 },
  "Texas": { lat: 29.7604, lng: -95.3698 },
  "Utah": { lat: 40.7608, lng: -111.8910 },
  "Vermont": { lat: 44.4759, lng: -73.2121 },
  "Virginia": { lat: 37.5407, lng: -77.4360 },
  "Washington": { lat: 47.6062, lng: -122.3321 },
  "Washington D.C.": { lat: 38.9072, lng: -77.0369 },
  "West Virginia": { lat: 38.3498, lng: -81.6326 },
  "Wisconsin": { lat: 43.0389, lng: -87.9065 },
  "Wyoming": { lat: 41.1400, lng: -104.8203 }
};

function getHaversineDistance(coords1, coords2) {
    if (!coords1 || !coords2) return 1000;
    const R = 3958.8; // Radius of Earth in miles
    const lat1 = coords1.lat * Math.PI / 180;
    const lat2 = coords2.lat * Math.PI / 180;
    const deltaLat = (coords2.lat - coords1.lat) * Math.PI / 180;
    const deltaLng = (coords2.lng - coords1.lng) * Math.PI / 180;

    const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLng/2) * Math.sin(deltaLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return Math.round(d * 1.18); // Convert to road miles roughly
}

function estimateCost(distance) {
    let perMile;
    if (distance < 500) {
        perMile = 1.40;
    } else if (distance < 1000) {
        perMile = 1.10;
    } else if (distance < 1800) {
        perMile = 0.78;
    } else {
        perMile = 0.52;
    }
    let mid = Math.round(distance * perMile);
    if (mid < 450) mid = 450;
    
    let lower = Math.round(mid * 0.85 / 25) * 25;
    let upper = Math.round(mid * 1.15 / 25) * 25;
    return `$${lower} - $${upper}`;
}

function estimateTransit(distance) {
    if (distance < 400) return "1 to 3 days";
    if (distance < 800) return "2 to 4 days";
    if (distance < 1500) return "3 to 6 days";
    if (distance < 2000) return "4 to 7 days";
    if (distance < 2500) return "5 to 8 days";
    return "6 to 10 days";
}

function generatePopularRoutesHTML(sourceState) {
    const popularTargets = ["California", "Texas", "Florida", "Washington", "Arizona", "New York", "Illinois", "Georgia", "North Carolina", "Ohio"];
    const targets = popularTargets.filter(t => t !== sourceState).slice(0, 5);

    const sourceCoords = stateCoords[sourceState];
    
    let routesCardsHTML = '';
    let tableRowsHTML = '';

    targets.forEach((target, index) => {
        const targetCoords = stateCoords[target];
        const dist = getHaversineDistance(sourceCoords, targetCoords);
        const cost = estimateCost(dist);
        const transit = estimateTransit(dist);

        const cardNum = index + 1;

        if (cardNum <= 3) {
            routesCardsHTML += `
                    <!-- Route ${cardNum} -->
                    <div class="bg-white rounded-2xl shadow-sm border border-[#e6e6e6] p-4 flex flex-col md:flex-row items-center gap-6 transition hover:shadow-md">
                        <div class="bg-black text-white text-3xl font-black rounded-xl w-[70px] h-[70px] flex items-center justify-center shrink-0">${cardNum}</div>
                        <div class="flex-1 text-center md:text-left min-w-[150px]">
                            <h4 class="font-bold text-[#0a2540] text-xl">${sourceState}</h4>
                            <p class="text-[#468de6] italic text-[15px] font-semibold">to <span class="text-[#0a2540] not-italic">${target}</span></p>
                        </div>
                        <div class="flex-1 text-center px-4 hidden md:block">
                            <div class="text-[11px] text-[#468de6] font-bold mb-1 uppercase tracking-wider flex items-center justify-center gap-1.5"><svg class="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> DISTANCE</div>
                            <div class="font-bold text-[#0a2540] text-sm">${dist.toLocaleString()} mi</div>
                        </div>
                        <div class="flex-1 text-center px-4 hidden md:block">
                            <div class="text-[11px] text-[#468de6] font-bold mb-1 uppercase tracking-wider flex items-center justify-center gap-1.5"><svg class="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> EST. COST</div>
                            <div class="font-bold text-[#0a2540] text-sm">${cost}</div>
                        </div>
                        <div class="flex-1 text-center px-4 hidden md:block">
                            <div class="text-[11px] text-[#468de6] font-bold mb-1 uppercase tracking-wider flex items-center justify-center gap-1.5"><svg class="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> TRANSIT</div>
                            <div class="font-bold text-[#0a2540] text-sm">${transit}</div>
                        </div>
                        <div class="shrink-0 w-full md:w-auto mt-4 md:mt-0 px-4">
                            <a href="/cost-calculator/" class="bg-[#468de6] hover:bg-[#3273c5] text-white font-bold py-2.5 px-8 rounded-lg w-full md:w-auto block text-center transition shadow-sm text-sm">Get Quote</a>
                        </div>
                    </div>`;
        }

        const borderClass = index === targets.length - 1 ? '' : 'border-b border-[#e6e6e6]';
        tableRowsHTML += `
                            <tr class="${borderClass} hover:bg-[#f8fafc] transition">
                                <td class="py-6 px-6">
                                    <div class="font-bold text-[#0a2540] text-lg">${sourceState}</div>
                                    <div class="text-[#468de6] italic font-medium">to ${target}</div>
                                </td>
                                <td class="py-6 px-6 font-bold text-[#0a2540] text-center">${dist.toLocaleString()} mi</td>
                                <td class="py-6 px-6 font-bold text-[#0a2540] text-center">${cost}</td>
                                <td class="py-6 px-6 font-bold text-[#0a2540] text-center">${transit}</td>
                                <td class="py-6 px-6 text-center"><a href="/cost-calculator/" class="bg-[#468de6] hover:bg-[#3273c5] text-white text-xs font-bold py-3 px-6 rounded-lg transition shadow-sm">Get Quote</a></td>
                            </tr>`;
    });

    return `<!-- Popular Routes Section -->
            <div class="mb-16">
                <h2 class="text-4xl font-bold mb-6 text-[#0a2540] tracking-tight">Popular Routes from ${sourceState}</h2>
                
                <!-- Top 3 Routes -->
                <h3 class="font-bold text-[#0a2540] flex items-center gap-2 mb-6 uppercase tracking-wider text-sm">
                    <svg class="w-4 h-4 text-[#468de6]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    TOP 3 ROUTES
                </h3>
                
                <div class="space-y-4 mb-8">
                    ${routesCardsHTML}
                </div>

                <!-- Full Table -->
                <div class="overflow-x-auto bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#e6e6e6]">
                    <table class="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr class="bg-[#468de6] text-white text-[12px] font-bold uppercase tracking-wider">
                                <th class="py-5 px-6">ROUTE</th>
                                <th class="py-5 px-6 text-center">DISTANCE</th>
                                <th class="py-5 px-6 text-center">AVG COST</th>
                                <th class="py-5 px-6 text-center">TRANSIT TIME</th>
                                <th class="py-5 px-6 text-center">QUOTE</th>
                            </tr>
                        </thead>
                        <tbody class="text-[15px]">
                            ${tableRowsHTML}
                        </tbody>
                    </table>
                </div>
            </div>`;
}

// Extract cities section and replace it with a dynamically generated one
function generateCitiesHTML(state) {
    let citiesLinks = state.cities.map(city => '<a href="#" class="hover:text-[#0a2540] transition">' + city + '</a>').join('\n                            ');
    
    return '<!-- Unique Local Content Section to satisfy E-E-A-T and eliminate thin content -->\n' +
           '<div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12">\n' +
           '    <h2 class="text-2xl font-bold mb-4 text-[#0a2540]">Local Auto Transport Insights for ' + state.name + '</h2>\n' +
           '    <p class="text-[#425466] mb-4 leading-relaxed">\n' +
           '        Shipping a car in or out of <strong>' + state.name + '</strong> requires specialized knowledge of the region\'s logistics infrastructure. \n' +
           '        As a ' + state.type + ', ' + state.name + ' features major transport corridors including <strong>' + state.highways + '</strong>. \n' +
           '    </p>\n' +
           '    <p class="text-[#425466] mb-6 leading-relaxed">\n' +
           '        Our network of 10,000+ verified carriers is highly experienced with ' + state.name + '\'s ' + state.weather + '. \n' +
           '        Whether you\'re moving to ' + state.cities[0] + ' for corporate relocation, buying a car from an auction in ' + (state.cities[1] || 'a major metro') + ', or needing seasonal transport, we ensure compliance with all local Department of Transportation regulations.\n' +
           '    </p>\n' +
           '</div>\n\n' +
           '<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl">\n' +
           '    <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Cities We Serve in ' + state.name + '</h2>\n' +
           '    <p class="text-[#425466] mb-8 leading-relaxed">Neon Auto Transport provides car shipping services to cities throughout ' + state.name + '. Click on any major metro area below to learn more about auto transport options in that region.</p>\n' +
           '    \n' +
           '    <div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">' + state.cities.length + ' major cities served in ' + state.name + '</div>\n' +
           '    <div class="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-sm text-[#468de6] font-semibold">\n' +
           '        ' + citiesLinks + '\n' +
           '    </div>\n' +
           '</div>';
}

statesData.forEach(state => {
    // Generate safe slug
    let slug = state.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
    const outputPath = path.join(__dirname, `${slug}-car-shipping.html`);

    // Skip virginia since it's the template
    if (state.name === "Virginia") return;

    let content = template;

    // 1. Replace State Name globally
    content = content.replace(/Virginia/g, state.name);
    
    // 2. Replace "VA" abbreviations
    content = content.replace(/\bVA\b/g, state.abbr);
    
    // 2.1 Restore provider.address.addressRegion to VA (company is in Woodbridge, VA)
    content = content.replace(/"addressRegion":\s*"[^"]*"/, '"addressRegion": "VA"');
    content = content.replace(/Woodbridge, [A-Z]{2}/g, 'Woodbridge, VA');
    
    // 3. Replace Richmond, Norfolk
    content = content.replace(/Richmond, Norfolk/g, state.cities.slice(0, 2).join(', '));

    // 3.1 Fix URL slugs in canonical, OG URL, and breadcrumb schema
    content = content.replace(/virginia-car-shipping\.html/g, `${slug}-car-shipping/`);
    content = content.replace(/virginia-car-shipping/g, `${slug}-car-shipping`);
    content = content.replace(/<link rel="canonical" href="([^"]+)\.html"/g, '<link rel="canonical" href="$1/"');
    content = content.replace(/<meta property="og:url" content="([^"]+)\.html"/g, '<meta property="og:url" content="$1/"');
    content = content.replace(/href="\/compare\/([^"]+)\.html"/g, 'href="/compare/$1/"');
    
    // Marcus Reid strip
    content = content.replace(/<div class="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">[\s\S]*?<\/div>\s*<\/div>/, '');

    // Fix Footer Popular Cities
    const footerCitiesRegex = /<div class="font-bold text-\[#635bff\] mb-4 text-sm uppercase tracking-wider">Popular Cities in [A-Za-z\s]+<\/div>\s*<div class="flex flex-col gap-2 text-sm text-\[#468de6\] font-semibold">[\s\S]*?<\/div>/;
    let footerCitiesHTML = '<div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">Popular Cities in ' + state.name + '</div>\n                          <div class="flex flex-col gap-2 text-sm text-[#468de6] font-semibold">\n                              ';
    state.cities.forEach(city => {
        const citySlug = city.toLowerCase().replace(/\s+/g, '-');
        const stateAbbr = state.abbr.toLowerCase();
        footerCitiesHTML += `<a href="/routes/city/${citySlug}-${stateAbbr}/" class="hover:text-[#0a2540] transition">${city}</a>`;
    });
    footerCitiesHTML += '\n                          </div>';
    content = content.replace(footerCitiesRegex, footerCitiesHTML);

    // 3.2 Rebuild meta description with state-specific data
    const metaDescRegex = /<meta name="description" content="[^"]*">/;
    content = content.replace(metaDescRegex, `<meta name="description" content="Ship your car to or from ${state.name} with Neon Auto Transport. Fully insured door-to-door vehicle transport serving ${state.cities[0]} and all of ${state.name}. FMCSA approved. Get a free instant quote.">`);

    // 3.3 Rebuild OG description
    const ogDescRegex = /<meta property="og:description" content="[^"]*">/;
    content = content.replace(ogDescRegex, `<meta property="og:description" content="Reliable, FMCSA approved car shipping to and from ${state.name}. Serving ${state.cities[0]} and all cities in ${state.name}. Door-to-door auto transport. Call (571) 576-7711.">`);

    // 3.4 Rebuild Twitter description
    const twitterDescRegex = /<meta name="twitter:description" content="[^"]*">/;
    content = content.replace(twitterDescRegex, `<meta name="twitter:description" content="Ship your car to or from ${state.name} with Neon Auto Transport. Door-to-door delivery serving ${state.cities[0]}. Instant quote available.">`);

    // 3.5 Inject unique state data into Hero paragraph and Multi-Layout Engine
    const sData = stateDataMap[state.name];
    if (sData) {
        const heroDesc = `Planning to ship a car to or from ${state.name}? Whether you're relocating to ${sData.nickname} or sending a vehicle across the country, navigating ${sData.highway} and dealing with ${sData.climate} can be challenging. Neon Auto Transport ensures a stress-free experience tailored for ${sData.terrain}, with upfront pricing and a highly vetted carrier network ready to handle ${sData.challenge}.`;
        
                const stateImages = {
  "Alabama": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/1280px-Flag_of_Alabama.svg.png",
  "Alaska": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/1280px-Flag_of_Alaska.svg.png",
  "Arizona": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/1280px-Flag_of_Arizona.svg.png",
  "Arkansas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/1280px-Flag_of_Arkansas.svg.png",
  "California": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1280px-Flag_of_California.svg.png",
  "Colorado": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/1280px-Flag_of_Colorado.svg.png",
  "Connecticut": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/1280px-Flag_of_Connecticut.svg.png",
  "Delaware": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/1280px-Flag_of_Delaware.svg.png",
  "Florida": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/1280px-Flag_of_Florida.svg.png",
  "Georgia": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_the_State_of_Georgia.svg/1280px-Flag_of_the_State_of_Georgia.svg.png",
  "Hawaii": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/1280px-Flag_of_Hawaii.svg.png",
  "Idaho": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/1280px-Flag_of_Idaho.svg.png",
  "Illinois": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/1280px-Flag_of_Illinois.svg.png",
  "Indiana": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/1280px-Flag_of_Indiana.svg.png",
  "Iowa": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/1280px-Flag_of_Iowa.svg.png",
  "Kansas": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/1280px-Flag_of_Kansas.svg.png",
  "Kentucky": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/1280px-Flag_of_Kentucky.svg.png",
  "Louisiana": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/1280px-Flag_of_Louisiana.svg.png",
  "Maine": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/1280px-Flag_of_Maine.svg.png",
  "Maryland": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/1280px-Flag_of_Maryland.svg.png",
  "Massachusetts": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/1280px-Flag_of_Massachusetts.svg.png",
  "Michigan": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/1280px-Flag_of_Michigan.svg.png",
  "Minnesota": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/1280px-Flag_of_Minnesota.svg.png",
  "Mississippi": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/1280px-Flag_of_Mississippi.svg.png",
  "Missouri": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/1280px-Flag_of_Missouri.svg.png",
  "Montana": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/1280px-Flag_of_Montana.svg.png",
  "Nebraska": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/1280px-Flag_of_Nebraska.svg.png",
  "Nevada": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/1280px-Flag_of_Nevada.svg.png",
  "New Hampshire": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/1280px-Flag_of_New_Hampshire.svg.png",
  "New Jersey": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/1280px-Flag_of_New_Jersey.svg.png",
  "New Mexico": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/1280px-Flag_of_New_Mexico.svg.png",
  "New York": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/1280px-Flag_of_New_York.svg.png",
  "North Carolina": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/1280px-Flag_of_North_Carolina.svg.png",
  "North Dakota": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/1280px-Flag_of_North_Dakota.svg.png",
  "Ohio": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/1280px-Flag_of_Ohio.svg.png",
  "Oklahoma": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/1280px-Flag_of_Oklahoma.svg.png",
  "Oregon": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/1280px-Flag_of_Oregon.svg.png",
  "Pennsylvania": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/1280px-Flag_of_Pennsylvania.svg.png",
  "Rhode Island": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/1280px-Flag_of_Rhode_Island.svg.png",
  "South Carolina": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/1280px-Flag_of_South_Carolina.svg.png",
  "South Dakota": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/1280px-Flag_of_South_Dakota.svg.png",
  "Tennessee": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/1280px-Flag_of_Tennessee.svg.png",
  "Texas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/1280px-Flag_of_Texas.svg.png",
  "Utah": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/1280px-Flag_of_Utah.svg.png",
  "Vermont": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/1280px-Flag_of_Vermont.svg.png",
  "Virginia": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/1280px-Flag_of_Virginia.svg.png",
  "Washington": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/1280px-Flag_of_Washington.svg.png",
  "Washington D.C.": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Washington%2C_D.C.svg/1280px-Flag_of_Washington%2C_D.C.svg.png",
  "West Virginia": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/1280px-Flag_of_West_Virginia.svg.png",
  "Wisconsin": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/1280px-Flag_of_Wisconsin.svg.png",
  "Wyoming": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/1280px-Flag_of_Wyoming.svg.png",
        };

        const imgUrl = stateImages[state.name] || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=60";
        
        // Layouts
        const layoutA = `
        <section class="bg-[#0a2540] text-white pt-24 pb-40 slant-bottom relative overflow-hidden">
            <div class="absolute inset-0 w-full h-full opacity-10">
                <img src="${imgUrl}" class="w-full h-full object-cover">
            </div>
            <div class="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-xs font-bold mb-6">
                    <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
                    FMSCA & US Dot Approved
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">${state.name} Car Shipping</h1>
                <p class="text-lg text-[#cdd5df] mb-10 max-w-3xl mx-auto leading-relaxed">${heroDesc}</p>
                <div class="flex justify-center gap-4">
                    <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-lg flex items-center gap-2">
                        Calculate Your Rate Instantly 
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>
        </section>`;

        const layoutB = `
        <section class="relative pt-32 pb-48 flex items-center justify-center border-b-[8px] border-[#39FF14]">
            <div class="absolute inset-0 w-full h-full">
                <img src="${imgUrl}" alt="${state.name} Car Shipping" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-[#0a2540]/85"></div>
            </div>
            <div class="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-sm font-bold mb-8">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse"></span>
                    Premium ${state.name} Auto Transport
                </div>
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">${state.name} Car Shipping</h1>
                <p class="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">${heroDesc}</p>
                <div class="flex justify-center gap-4">
                    <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-10 py-5 rounded-full font-black text-xl hover:bg-[#32e011] transition hover:-translate-y-1 shadow-[0_10px_30px_rgba(57,255,20,0.3)] flex items-center gap-2">
                        Get an Instant Quote 
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>
        </section>`;

        const layoutC = `
        <section class="bg-[#f6f9fc] border-b border-[#e6e6e6]">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-1/2 px-8 py-20 lg:py-32 lg:px-16 flex flex-col justify-center">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e6e6e6] bg-white shadow-sm text-[#0a2540] text-xs font-bold mb-6 self-start">
                        <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
                        FMSCA & US Dot Approved
                    </div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">${state.name} Car Shipping</h1>
                    <p class="text-lg text-[#425466] mb-10 leading-relaxed">${heroDesc}</p>
                    <div class="flex">
                        <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_15px_rgba(57,255,20,0.4)] flex items-center gap-2">
                            Calculate Your Rate Instantly 
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2 relative min-h-[400px]">
                    <img src="${imgUrl}" alt="${state.name} Auto Transport" class="absolute inset-0 w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-r from-[#f6f9fc] to-transparent w-32"></div>
                </div>
            </div>
        </section>`;

        const selectedLayout = layoutC;

        // Replace remaining standalone Richmond references with state hub
        content = content.replace(/Richmond/g, sData.hub);

        // Replace I-95 references with state highway (safe: I-95 only appears in meta/schema)
        content = content.replace(/I-95/g, sData.highway);

        // Replace state nickname
        content = content.replace(/Old Dominion State/g, sData.nickname);
    
    // Fix testimonial
    content = content.replace(/"Neon Auto Transport shipped my vehicle from [a-zA-Z\s]+ to [a-zA-Z\s]+ in just 5 days\./g, '"Neon Auto Transport shipped my vehicle across the country in just 5 days.');
    content = content.replace(/California to California in just 5 days/g, 'across the country in just 5 days');

        const heroRegex = /<!-- Hero Section -->\s*<section[\s\S]*?<\/section>/;
        content = content.replace(heroRegex, `<!-- Hero Section -->\n        ` + selectedLayout);

        content = content.replace(
            new RegExp(`For pickups and drop-offs in ${state.name}, choose a location near major highways\\. Spots close to [^<]+attract more carriers`, 'g'),
            `For pickups and drop-offs in ${state.name}, choose a location near major highways. Spots close to ${sData.highway} or near ${sData.hub} attract more carriers`
        );

        // 5. Replace cities section BEFORE component shuffling (shuffle breaks the regex order)
        const originalCitiesRegex = /<div class="stripe-card p-8 lg:p-10 bg-white">[\s\S]*?<!-- FAQs -->/m;
        const newCitiesHTML = generateCitiesHTML(state) + "\n\n                    <!-- FAQs -->";
        content = content.replace(originalCitiesRegex, newCitiesHTML);

        // Component Shuffling
        const factorsRegex = /(<!-- Factors Impacting Costs -->[\s\S]*?)<!-- TIPS & TRICKS -->/;
        const tipsRegex = /(<!-- TIPS & TRICKS -->[\s\S]*?)<!-- Cities We Serve -->/;
        const citiesRegex = /(<!-- Cities We Serve -->[\s\S]*?)<!-- FAQs -->/;
        const faqsRegex = /(<!-- FAQs -->[\s\S]*?)(?=<\/div>\s*<!-- Right Sidebar Sticky -->)/;

        const factorsMatch = content.match(factorsRegex);
        const tipsMatch = content.match(tipsRegex);
        const citiesMatch = content.match(citiesRegex);
        const faqsMatch = content.match(faqsRegex);

        if (factorsMatch && tipsMatch && citiesMatch && faqsMatch) {
            let components = [
                factorsMatch[1],
                tipsMatch[1],
                citiesMatch[1],
                faqsMatch[1]
            ];
            
            // Shuffle deterministically based on state name length so it stays consistent but unique
            let currentIndex = components.length, randomIndex;
            let seed = state.name.length;
            while (currentIndex != 0) {
                randomIndex = (seed * 7) % currentIndex;
                currentIndex--;
                seed += 13;
                [components[currentIndex], components[randomIndex]] = [components[randomIndex], components[currentIndex]];
            }

            const replacementContent = components.join('\n');
            const fullBlockRegex = /<!-- Factors Impacting Costs -->[\s\S]*?(?=<\/div>\s*<!-- Right Sidebar Sticky -->)/;
            content = content.replace(fullBlockRegex, replacementContent);
        }
    }

    // 4. Update the Popular Routes dynamically with accurate coordinates, distances, costs, and transits
    const routesRegex = /<!-- Popular Routes Section -->[\s\S]*?<!-- Two Column Layout for the Rest -->/m;
    const popularRoutesHTML = generatePopularRoutesHTML(state.name) + "\n\n                    <!-- Two Column Layout for the Rest -->";
    content = content.replace(routesRegex, popularRoutesHTML);

    // (Cities replacement moved before component shuffle above)

    fs.writeFileSync(outputPath, content);
    console.log(`Generated ${slug}-car-shipping.html`);
});

console.log('All state pages generated successfully!');

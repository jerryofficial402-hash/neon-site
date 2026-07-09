const fs = require('fs');
const path = require('path');

const topRoutes = [
    { origin: "Miami, FL", destination: "New York City, NY", dist: 1280, cost: "$850 - $1150", transit: "3 to 6 days" },
    { origin: "Los Angeles, CA", destination: "Las Vegas, NV", dist: 270, cost: "$350 - $550", transit: "1 to 3 days" },
    { origin: "Dallas, TX", destination: "Houston, TX", dist: 240, cost: "$300 - $500", transit: "1 to 2 days" },
    { origin: "Chicago, IL", destination: "Atlanta, GA", dist: 715, cost: "$650 - $900", transit: "2 to 4 days" },
    { origin: "Boston, MA", destination: "Miami, FL", dist: 1480, cost: "$900 - $1250", transit: "4 to 7 days" },
    { origin: "New York City, NY", destination: "Los Angeles, CA", dist: 2790, cost: "$1300 - $1800", transit: "7 to 10 days" },
    { origin: "Seattle, WA", destination: "San Francisco, CA", dist: 800, cost: "$700 - $950", transit: "3 to 5 days" },
    { origin: "Phoenix, AZ", destination: "Denver, CO", dist: 820, cost: "$750 - $1000", transit: "3 to 5 days" },
    { origin: "Houston, TX", destination: "Los Angeles, CA", dist: 1540, cost: "$950 - $1300", transit: "4 to 7 days" },
    { origin: "Chicago, IL", destination: "Dallas, TX", dist: 920, cost: "$800 - $1050", transit: "3 to 5 days" },
    { origin: "Orlando, FL", destination: "Newark, NJ", dist: 1050, cost: "$800 - $1100", transit: "3 to 6 days" },
    { origin: "Atlanta, GA", destination: "Miami, FL", dist: 660, cost: "$600 - $850", transit: "2 to 4 days" },
    { origin: "San Diego, CA", destination: "Seattle, WA", dist: 1250, cost: "$850 - $1150", transit: "4 to 6 days" },
    { origin: "Austin, TX", destination: "Denver, CO", dist: 920, cost: "$800 - $1050", transit: "3 to 5 days" },
    { origin: "Philadelphia, PA", destination: "Orlando, FL", dist: 980, cost: "$750 - $1050", transit: "3 to 5 days" },
    { origin: "San Francisco, CA", destination: "Los Angeles, CA", dist: 380, cost: "$400 - $600", transit: "1 to 3 days" },
    { origin: "Tampa, FL", destination: "Chicago, IL", dist: 1170, cost: "$850 - $1150", transit: "4 to 6 days" },
    { origin: "Detroit, MI", destination: "Dallas, TX", dist: 1180, cost: "$850 - $1150", transit: "4 to 6 days" },
    { origin: "Las Vegas, NV", destination: "Denver, CO", dist: 750, cost: "$650 - $900", transit: "2 to 4 days" },
    { origin: "Washington, DC", destination: "Miami, FL", dist: 1050, cost: "$800 - $1100", transit: "3 to 6 days" }
];

const templatePath = path.join(__dirname, '..', 'virginia-car-shipping', 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

topRoutes.forEach(route => {
    // Generate slug: miami-fl-to-new-york-city-ny
    const slugOrigin = route.origin.toLowerCase().replace(/, /g, '-').replace(/\s+/g, '-');
    const slugDest = route.destination.toLowerCase().replace(/, /g, '-').replace(/\s+/g, '-');
    const slug = `${slugOrigin}-to-${slugDest}`;
    const outputPath = path.join(__dirname, 'city', `${slug}/`);

    let content = template;

    // We're adapting the Virginia state template for a city-to-city route
    const title = `Car Shipping from ${route.origin} to ${route.destination}`;
    
    // 1. Replace Title Tag
    content = content.replace(/<title>Virginia Car Shipping.*?<\/title>/, `<title>${title} | Neon Auto Transport</title>`);
    
    // 2. Replace H1
    content = content.replace(/<h1[^>]*>.*?<\/h1>/, `<h1 class="text-4xl md:text-6xl font-black mb-6 text-[#0a2540] tracking-tight leading-[1.1]"><span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#635bff] mb-2">Ship Your Car</span>From ${route.origin} to ${route.destination}</h1>`);

    // 3. Replace Description Meta
    const metaDescRegex = /<meta name="description" content="[^"]*">/;
    content = content.replace(metaDescRegex, `<meta name="description" content="Get an instant quote for car shipping from ${route.origin} to ${route.destination}. Fully insured door-to-door auto transport. Distance: ${route.dist} miles.">`);

    // 4. Update Schema
    content = content.replace(/"name": "Virginia Car Shipping"/, `"name": "${title}"`);
    content = content.replace(/"description": "[^"]*"/, `"description": "Door-to-door auto transport from ${route.origin} to ${route.destination}."`);
    content = content.replace(/https:\/\/neonautotransport\.com\/virginia-car-shipping\.html/g, `https://neonautotransport.com/routes/city/${slug}/`);
    content = content.replace(/"Virginia Car Shipping"/g, `"${title}"`);

    // 5. Replace unique route content block
    const uniqueBlock = `
                    <!-- Route Specific Details -->
                    <div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12">
                        <h2 class="text-2xl font-bold mb-4 text-[#0a2540]">Route Details: ${route.origin} to ${route.destination}</h2>
                        <ul class="space-y-4 text-[#425466]">
                            <li><strong>Total Distance:</strong> ~${route.dist} miles</li>
                            <li><strong>Estimated Cost:</strong> ${route.cost} (depending on vehicle type & season)</li>
                            <li><strong>Estimated Transit Time:</strong> ${route.transit}</li>
                            <li><strong>Service Type:</strong> Door-to-Door, Open or Enclosed</li>
                        </ul>
                        <p class="mt-6 text-[#425466] leading-relaxed">
                            Neon Auto Transport provides top-tier vehicle shipping from ${route.origin} directly to ${route.destination}. 
                            This is one of our most popular high-volume routes, allowing us to dispatch verified carriers quickly and keep costs highly competitive.
                        </p>
                    </div>
    `;

    const citiesRegex = /<div class="stripe-card p-8 lg:p-10 bg-[#f8fafc] border border-[#e6e6e6] rounded-2xl mb-12">[\s\S]*?<!-- FAQs -->/i;
    if (content.match(citiesRegex)) {
        content = content.replace(citiesRegex, uniqueBlock + "\n\n                    <!-- FAQs -->");
    } else {
        const backupRegex = /<div class="stripe-card p-8 lg:p-10 bg-white">[\s\S]*?<!-- FAQs -->/i;
        content = content.replace(backupRegex, uniqueBlock + "\n\n                    <!-- FAQs -->");
    }

    // Remove the Popular Routes Section since this is already a specific route
    content = content.replace(/<!-- Popular Routes Section -->[\s\S]*?<!-- End Popular Routes -->/i, '');

    // Write file
    // Contextual CTAs
    content = content.replace(/Calculate Your Rate Instantly/g, `Get a Quote for ${route.origin} to ${route.destination}`);
    content = content.replace(/Talk to an auto transport expert now or get an instant quote online./g, `Talk to an auto transport expert now or get an instant quote for shipping from ${route.origin} to ${route.destination}.`);

    fs.writeFileSync(outputPath, content);
    console.log(`Generated routes/city/${slug}/`);
});

console.log("All 20 city-to-city route pages generated successfully!");

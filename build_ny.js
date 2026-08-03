const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const floridaPath = path.join(__dirname, 'florida-car-shipping', 'index.html');
const nyPath = path.join(__dirname, 'new-york-car-shipping', 'index.html');

let html = fs.readFileSync(floridaPath, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Meta and Title
$('title').text('New York Car Shipping | No Hidden Fees, Instant Quote – Neon Auto Transport');
$('meta[name="description"]').attr('content', 'Ship your car to or from New York with Neon Auto Transport. Transparent pricing, $500K insurance, and door-to-door service statewide. Get your free quote today.');
$('link[rel="canonical"]').attr('href', 'https://neonautotransport.com/new-york-car-shipping/');
$('meta[property="og:url"]').attr('href', 'https://neonautotransport.com/new-york-car-shipping/');
$('meta[property="og:title"]').attr('content', 'New York Car Shipping | Neon Auto Transport');
$('meta[property="og:description"]').attr('content', 'Ship your car to or from New York with Neon Auto Transport. Transparent pricing, $500K insurance, and door-to-door service statewide.');
$('meta[name="twitter:title"]').attr('content', 'New York Car Shipping | Neon Auto Transport');
$('meta[name="twitter:description"]').attr('content', 'Ship your car to or from New York with Neon Auto Transport. Transparent pricing, $500K insurance, and door-to-door service statewide.');

// 2. JSON-LD Schemas
const scripts = $('script[type="application/ld+json"]');
// Breadcrumb
$(scripts[1]).html(`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/"},
    {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://neonautotransport.com/locations/"},
    {"@type": "ListItem", "position": 3, "name": "New York", "item": "https://neonautotransport.com/new-york-car-shipping/"}
  ]
}`);
// Service
$(scripts[0]).html(`
{
  "@context": "https://schema.org",
  "@type": ["Service", "Product", "LocalBusiness", "MovingCompany"],
  "name": "New York Car Shipping",
  "serviceType": "Auto Transport / Car Shipping",
  "provider": {
    "@type": "Organization",
    "name": "Neon Auto Transport",
    "url": "https://neonautotransport.com/"
  },
  "areaServed": {"@type": "State", "name": "New York"},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "25"
  }
}`);
// FAQPage
$(scripts[2]).html(`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much does it cost to ship a car to or from New York?", "acceptedAnswer": {"@type": "Answer", "text": "Shipping a car to or from New York typically costs $450-$1,875 depending on distance, vehicle type, and season."}},
    {"@type": "Question", "name": "How long does it take to ship a car to or from New York?", "acceptedAnswer": {"@type": "Answer", "text": "Transit time ranges from 1-3 days for short regional routes up to 6-8 days for cross-country shipments."}},
    {"@type": "Question", "name": "Is my vehicle insured during transport?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Every shipment includes coverage up to $500,000 per vehicle."}},
    {"@type": "Question", "name": "Do I need to be present at pickup and delivery?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, either you or an authorized representative should be present at both pickup and delivery."}},
    {"@type": "Question", "name": "What's the difference between open and enclosed transport?", "acceptedAnswer": {"@type": "Answer", "text": "Open transport is the most affordable option for standard vehicles. Enclosed transport fully shields vehicles from weather and debris, better for luxury or classic cars."}},
    {"@type": "Question", "name": "Can I ship a car to New York City specifically?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, direct service is available to all five boroughs, Long Island, and the surrounding metro area."}}
  ]
}`);

// 3. Hero Section
const heroSection = $('section').first();
heroSection.find('h1').text('New York Car Shipping');
// Florida's hero text is in the p tag following h1
heroSection.find('p').html(`Shipping a car to or from New York doesn't have to be complicated. Neon
Auto Transport connects you with a vetted, FMCSA-approved carrier network
covering every corner of the state &mdash; from Manhattan to Buffalo, Long Island
to the Adirondacks &mdash; with upfront pricing, no hidden fees, and insurance
coverage up to $500,000 per vehicle. Whether you're relocating, buying a car
out of state, or need business or dealer shipping, our dispatch team makes
New York auto transport straightforward from quote to delivery.`);

// Hero Image
heroSection.find('img').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/1280px-Flag_of_New_York.svg.png');
heroSection.find('img').attr('alt', 'Flag of New York - Car Shipping to New York');

// 4. Main content replacements
const leftCol = $('.lg\\:col-span-2.space-y-12').first();

leftCol.html(`
<div class="mb-12">
<h2>Why Choose Neon Auto Transport for New York Car Shipping</h2>
<ul class="list-disc pl-5 mt-4 space-y-2 text-[#425466]">
  <li><strong>Transparent, upfront pricing</strong> — the quote you receive is the price you pay, with no hidden fees added later.</li>
  <li><strong>Insurance up to $500,000</strong> per vehicle on both open and enclosed transport.</li>
  <li><strong>5.0/5 rating based on verified Google customer reviews.</strong></li>
  <li><strong>FMCSA and USDOT approved</strong>, fully licensed and insured.</li>
  <li><strong>Nationwide carrier network</strong> with direct service to any residential or business address in New York.</li>
  <li><strong>Price-match guarantee</strong> — if you find a lower legitimate quote, we'll match it.</li>
</ul>
</div>

<div class="mb-12">
<h2>How New York Auto Shipping Works</h2>
<p class="mt-4 text-[#425466] leading-relaxed">
Shipping a car to or from New York with Neon Auto Transport takes three simple steps:
</p>
<ol class="list-decimal pl-5 mt-4 space-y-4 text-[#425466]">
  <li><strong>Get an instant quote.</strong> Enter your pickup and delivery details on our <a href="/cost-calculator/" class="text-[#635bff] hover:underline">cost calculator</a> for a transparent, no-obligation price.</li>
  <li><strong>Book your pickup.</strong> Choose a convenient pickup date and location — home, office, or dealership.</li>
  <li><strong>Track delivery.</strong> Your carrier picks up, transports, and delivers your vehicle, with real-time updates along the way.</li>
</ol>
</div>

<div class="mb-12">
<h2>New York Car Shipping Cost & Transit Time Examples</h2>
<div class="overflow-x-auto mt-6 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
<table class="w-full text-left border-collapse min-w-[700px]">
<thead class="bg-[#468de6] text-white text-[12px] font-bold uppercase tracking-wider">
<tr>
<th class="py-5 px-6">Route</th>
<th class="py-5 px-6 text-center">Distance</th>
<th class="py-5 px-6 text-center">Est. Cost</th>
<th class="py-5 px-6 text-center">Transit Time</th>
</tr>
</thead>
<tbody class="text-[15px]">
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to California</td><td class="py-4 px-6 text-center">2,845 mi</td><td class="py-4 px-6 text-center">$1,350 – $1,850</td><td class="py-4 px-6 text-center">6–8 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Florida</td><td class="py-4 px-6 text-center">1,238 mi</td><td class="py-4 px-6 text-center">$850 – $1,150</td><td class="py-4 px-6 text-center">3–5 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Texas</td><td class="py-4 px-6 text-center">1,841 mi</td><td class="py-4 px-6 text-center">$975 – $1,350</td><td class="py-4 px-6 text-center">4–6 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Washington</td><td class="py-4 px-6 text-center">2,919 mi</td><td class="py-4 px-6 text-center">$1,375 – $1,875</td><td class="py-4 px-6 text-center">6–8 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Illinois</td><td class="py-4 px-6 text-center">988 mi</td><td class="py-4 px-6 text-center">$700 – $975</td><td class="py-4 px-6 text-center">2–4 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Arizona</td><td class="py-4 px-6 text-center">2,526 mi</td><td class="py-4 px-6 text-center">$1,225 – $1,675</td><td class="py-4 px-6 text-center">6–8 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Georgia</td><td class="py-4 px-6 text-center">1,003 mi</td><td class="py-4 px-6 text-center">$725 – $1,000</td><td class="py-4 px-6 text-center">3–5 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Virginia</td><td class="py-4 px-6 text-center">474 mi</td><td class="py-4 px-6 text-center">$450 – $650</td><td class="py-4 px-6 text-center">1–3 days</td></tr>
<tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to Colorado</td><td class="py-4 px-6 text-center">1,803 mi</td><td class="py-4 px-6 text-center">$950 – $1,325</td><td class="py-4 px-6 text-center">4–6 days</td></tr>
<tr class="hover:bg-[#f8fafc]"><td class="py-4 px-6 font-bold text-[#0a2540]">New York to North Carolina</td><td class="py-4 px-6 text-center">628 mi</td><td class="py-4 px-6 text-center">$500 – $725</td><td class="py-4 px-6 text-center">2–4 days</td></tr>
</tbody>
</table>
</div>
<p class="mt-4 text-sm text-[#425466] italic">Prices and transit times are estimates and vary by season, vehicle type, and carrier availability. <a href="/cost-calculator/" class="text-[#635bff] hover:underline">Use our calculator</a> for an exact quote.</p>
</div>

<div class="mb-12">
<h2>Car Shipping Services Available in New York</h2>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">Open Auto Transport</h3>
<p class="mt-2 text-[#425466] leading-relaxed">
The most popular and affordable option — your vehicle ships on an open multi-car trailer. Safe and reliable for standard sedans, SUVs, and trucks. See our full <a href="/services/open-auto-transport/" class="text-[#635bff] hover:underline">open auto transport</a> details.
</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">Enclosed Auto Transport</h3>
<p class="mt-2 text-[#425466] leading-relaxed">
Fully enclosed trailers shield your vehicle from weather and road debris — ideal for luxury, classic, or exotic cars. See our <a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline">enclosed auto transport</a> page for pricing and details.
</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">Door-to-Door Delivery</h3>
<p class="mt-2 text-[#425466] leading-relaxed">
Skip the terminal — your vehicle is picked up and delivered as close to your exact address as safely possible. Learn more about <a href="/services/door-to-door/" class="text-[#635bff] hover:underline">door-to-door car shipping</a>.
</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">Terminal-to-Terminal Shipping</h3>
<p class="mt-2 text-[#425466] leading-relaxed">
Save $100–$300 by dropping off and picking up at a secure regional terminal instead of your home address. See our <a href="/services/terminal-to-terminal-car-shipping/" class="text-[#635bff] hover:underline">terminal-to-terminal shipping</a> page.
</p>
</div>

<div class="mb-12">
<h2>How to Save on New York Car Shipping</h2>
<ul class="list-disc pl-5 mt-4 space-y-2 text-[#425466]">
  <li><strong>Book early.</strong> Early bookings typically secure lower rates and more pickup date flexibility.</li>
  <li><strong>Choose open transport.</strong> It's the most cost-effective option for standard vehicles.</li>
  <li><strong>Ship in the off-season.</strong> Late fall through early spring typically sees lower demand and better pricing than peak summer months.</li>
  <li><strong>Stay flexible on pickup dates.</strong> A 3–5 day pickup window often lowers your quote compared to a fixed date.</li>
  <li><strong>Consider terminal-to-terminal.</strong> If you're near a hub, this can save $100–$300 over door-to-door.</li>
</ul>
</div>

<div class="mb-12">
<h2>How to Prepare Your Vehicle for New York Car Transport</h2>
<ol class="list-decimal pl-5 mt-4 space-y-2 text-[#425466]">
  <li>Wash your vehicle so any existing scratches or dents are easy to document at pickup.</li>
  <li>Remove all personal items — carriers are not liable for belongings left inside.</li>
  <li>Keep the fuel tank to about a quarter full to reduce weight.</li>
  <li>Take timestamped photos from all angles before pickup.</li>
  <li>Disable any aftermarket alarm systems to prevent them from triggering in transit.</li>
</ol>
</div>

<div class="mb-12">
<h2>Receiving Your Vehicle in New York</h2>
<p class="mt-4 text-[#425466] leading-relaxed">
When your vehicle arrives, inspect it against your pre-shipment photos before signing anything. Check for any new damage, confirm all personal items and accessories are accounted for, and sign the Proof of Delivery only once you're satisfied with the vehicle's condition.
</p>
</div>

<div class="mb-12">
<h2>New York Cities and Regions We Serve</h2>
<p class="mt-4 text-[#425466] leading-relaxed">
Neon Auto Transport ships to and from every region of New York — from New York City and Long Island to the Adirondacks and Western New York.
</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">New York City & Long Island</h3>
<p class="mt-1 text-[#425466]">New York City (Manhattan, Brooklyn, Queens, the Bronx, Staten Island), Hempstead, Huntington, Babylon, Islip, Long Beach</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Lower Hudson Valley</h3>
<p class="mt-1 text-[#425466]">Yonkers, White Plains, New Rochelle, Scarsdale, Mount Vernon, Peekskill</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Hudson Valley</h3>
<p class="mt-1 text-[#425466]">Poughkeepsie, Kingston, Newburgh, Beacon, Middletown</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Capital Region</h3>
<p class="mt-1 text-[#425466]">Albany, Schenectady, Troy, Saratoga Springs, Glens Falls</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Western New York</h3>
<p class="mt-1 text-[#425466]">Buffalo, Niagara Falls, Amherst, Cheektowaga, Orchard Park</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Central New York</h3>
<p class="mt-1 text-[#425466]">Rochester, Syracuse, Ithaca, Auburn</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Southern Tier</h3>
<p class="mt-1 text-[#425466]">Binghamton, Elmira, Corning</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">North Country & Adirondacks</h3>
<p class="mt-1 text-[#425466]">Watertown, Plattsburgh, Lake Placid</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Finger Lakes</h3>
<p class="mt-1 text-[#425466]">Geneva, Canandaigua, Seneca Falls</p>

<h3 class="text-xl font-bold mt-4 text-[#0a2540]">Catskills & Mohawk Valley</h3>
<p class="mt-1 text-[#425466]">Monticello, Oneonta, Utica, Rome</p>

<p class="mt-6 text-[#425466] italic">Don't see your city? We ship to and from every city and zip code in New York — <a href="/cost-calculator/" class="text-[#635bff] hover:underline font-bold">get a free quote</a> for your exact location.</p>
</div>

<div class="mb-12">
<h2>Major New York Shipping Corridors</h2>
<p class="mt-4 text-[#425466] leading-relaxed">
New York's extensive interstate network — including <strong>I-87, I-90, and I-95</strong> — makes it one of the most carrier-accessible states in the country. Major hubs like New York City, Buffalo, Syracuse, and Albany see especially strong carrier availability, meaning faster dispatch and more competitive pricing for shipments to and from these metro areas.
</p>
</div>

<div class="mb-12">
<h2>About Shipping Cars in New York</h2>
<p class="mt-4 text-[#425466] leading-relaxed">
New York is home to over 19 million residents, with roughly 40% concentrated in New York City — a global center for finance, culture, and business. Beyond the city, the state spans dramatic geography, from the Adirondack and Catskill Mountains to the Finger Lakes region, along with landmarks like Niagara Falls and the Statue of Liberty. This mix of dense urban centers and rural upstate regions is exactly why regional route knowledge matters: carrier availability and pricing can vary significantly between a Manhattan pickup and a rural North Country delivery.
</p>
</div>

<div class="mb-12">
<h2>New York Auto Transport Resources</h2>
<ul class="list-disc pl-5 mt-4 space-y-2 text-[#425466]">
  <li><a href="https://dmv.ny.gov/" target="_blank" rel="noopener" class="text-[#635bff] hover:underline">New York DMV — Official Website</a></li>
  <li><a href="https://dmv.ny.gov/more-info/online-vehicle-transactions" target="_blank" rel="noopener" class="text-[#635bff] hover:underline">New York DMV Online Vehicle Transactions</a></li>
  <li><a href="https://dmv.ny.gov/offices/county-offices" target="_blank" rel="noopener" class="text-[#635bff] hover:underline">New York DMV County Office Locator</a></li>
</ul>
</div>

<div class="mb-12">
<h2>New York Car Shipping FAQs</h2>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">How much does it cost to ship a car to or from New York?</h3>
<p class="mt-2 text-[#425466] leading-relaxed">Shipping a car to or from New York typically costs $450–$1,875 depending on distance, vehicle type, and season. Short regional routes (like New York to Virginia) start around $450–$650, while cross-country routes (like New York to California or Washington) run $1,350–$1,875.</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">How long does it take to ship a car to or from New York?</h3>
<p class="mt-2 text-[#425466] leading-relaxed">Transit time ranges from 1–3 days for short regional routes up to 6–8 days for cross-country shipments, depending on distance and carrier scheduling.</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">Is my vehicle insured during transport?</h3>
<p class="mt-2 text-[#425466] leading-relaxed">Yes. Every shipment includes coverage up to $500,000 per vehicle, with full details provided before pickup.</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">Do I need to be present at pickup and delivery?</h3>
<p class="mt-2 text-[#425466] leading-relaxed">Yes, either you or an authorized representative should be present at both pickup and delivery to inspect the vehicle and sign the required paperwork.</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">What's the difference between open and enclosed transport?</h3>
<p class="mt-2 text-[#425466] leading-relaxed">Open transport is the most affordable option and suits standard vehicles. Enclosed transport fully shields your vehicle from weather and road debris, making it a better fit for luxury, classic, or exotic cars.</p>

<h3 class="text-xl font-bold mt-6 text-[#0a2540]">Can I ship a car to New York City specifically?</h3>
<p class="mt-2 text-[#425466] leading-relaxed">Yes. We provide direct service to all five boroughs, as well as Long Island and the surrounding metro area, though tight city streets may require a nearby meeting point for larger carriers.</p>
</div>
`);

// 5. Replace right column widget content with New York Widget
const rightCol = $('.lg\\:col-span-1.space-y-8').first();

// The right column contains some widgets. I'll insert the Carrier Availability Widget at the top.
const widgetHTML = `
<div class="bg-white rounded-2xl shadow-sm border border-[#e6e6e6] p-6 mb-8">
  <h3 class="font-black text-xl text-[#0a2540] mb-4">Carrier Availability: New York</h3>
  <div class="space-y-3">
    <div class="flex items-start gap-3">
      <div class="mt-1 text-[#39FF14] text-lg">★</div>
      <div>
        <p class="font-bold text-[#0a2540]">5/5</p>
        <p class="text-sm text-[#425466]">Excellent carrier availability statewide</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <div class="mt-1 text-[#00d4ff] text-lg">⏱</div>
      <div>
        <p class="font-bold text-[#0a2540]">Average Pickup Time</p>
        <p class="text-sm text-[#425466]">1–3 days from booking</p>
      </div>
    </div>
  </div>
</div>
`;
rightCol.prepend(widgetHTML);

// Wait, leftCol has the "Popular Routes" section BEFORE the grid? Let's check where the routes table was.
// The "Popular Routes" section in Florida template was OUTSIDE the grid, directly under <section class="container mx-auto px-4 lg:px-8 max-w-6xl overlap-up mb-24">
// I replaced `leftCol.html()` which is INSIDE the grid. The Florida template has a Popular Routes section right before the grid.
// Let's replace the whole container contents except the grid? No, I will just remove the hardcoded Florida Popular Routes block.
// Let's remove the Popular Routes section that was before the grid.
const popularRoutes = $('.mb-16').first();
if (popularRoutes.find('h2').text().includes('Popular Routes')) {
  popularRoutes.remove();
}

// Ensure h2 tags have standard tailwind classes
leftCol.find('h2').addClass('text-3xl font-bold mb-8 text-[#0a2540] tracking-tight');

// Add internal linking to the bottom of the left column
const internalLinksHTML = `
<div class="mb-12 bg-[#f0f5fa] rounded-2xl p-8 border border-[#e6e6e6]">
  <h2 class="text-2xl font-bold mb-4 text-[#0a2540] tracking-tight">Additional Car Shipping Services</h2>
  <ul class="grid md:grid-cols-2 gap-4 text-[#425466]">
    <li><a href="/services/open-auto-transport/" class="text-[#635bff] hover:underline">Open Auto Transport</a></li>
    <li><a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline">Enclosed Auto Transport</a></li>
    <li><a href="/services/door-to-door/" class="text-[#635bff] hover:underline">Door-to-Door Car Shipping</a></li>
    <li><a href="/services/terminal-to-terminal-car-shipping/" class="text-[#635bff] hover:underline">Terminal-to-Terminal Shipping</a></li>
    <li><a href="/florida-car-shipping/" class="text-[#635bff] hover:underline">Florida Car Shipping</a></li>
    <li><a href="/cost-calculator/" class="text-[#635bff] hover:underline">Get a Free Quote</a></li>
  </ul>
</div>
`;
leftCol.append(internalLinksHTML);

// 6. Write out the modified HTML
fs.mkdirSync(path.dirname(nyPath), { recursive: true });
fs.writeFileSync(nyPath, $.html(), 'utf8');

console.log('Successfully built new-york-car-shipping/index.html');

const fs = require('fs');
const path = require('path');

// ==========================================
// 1. DATASET
// ==========================================
const allRoutes = [
  { originState: 'California', originSlug: 'california', destState: 'Texas', destSlug: 'texas', distance: '1,618', openLow: '$950', openHigh: '$1,300', enclosedLow: '$1,400', enclosedHigh: '$1,850', transitLow: '3', transitHigh: '6', highway: 'I-10, I-20' },
  { originState: 'Texas', originSlug: 'texas', destState: 'California', destSlug: 'california', distance: '1,618', openLow: '$950', openHigh: '$1,300', enclosedLow: '$1,400', enclosedHigh: '$1,850', transitLow: '3', transitHigh: '6', highway: 'I-10, I-20' },
  { originState: 'California', originSlug: 'california', destState: 'Florida', destSlug: 'florida', distance: '2,756', openLow: '$1,200', openHigh: '$1,650', enclosedLow: '$1,750', enclosedHigh: '$2,300', transitLow: '6', transitHigh: '10', highway: 'I-10' },
  { originState: 'Florida', originSlug: 'florida', destState: 'California', destSlug: 'california', distance: '2,756', openLow: '$1,200', openHigh: '$1,650', enclosedLow: '$1,750', enclosedHigh: '$2,300', transitLow: '6', transitHigh: '10', highway: 'I-10' },
  { originState: 'New York', originSlug: 'new-york', destState: 'Florida', destSlug: 'florida', distance: '1,281', openLow: '$850', openHigh: '$1,150', enclosedLow: '$1,250', enclosedHigh: '$1,700', transitLow: '3', transitHigh: '5', highway: 'I-95' },
  { originState: 'Florida', originSlug: 'florida', destState: 'New York', destSlug: 'new-york', distance: '1,281', openLow: '$850', openHigh: '$1,150', enclosedLow: '$1,250', enclosedHigh: '$1,700', transitLow: '3', transitHigh: '5', highway: 'I-95' },
  { originState: 'California', originSlug: 'california', destState: 'New York', destSlug: 'new-york', distance: '2,794', openLow: '$1,250', openHigh: '$1,700', enclosedLow: '$1,800', enclosedHigh: '$2,400', transitLow: '6', transitHigh: '10', highway: 'I-80, I-40' },
  { originState: 'New York', originSlug: 'new-york', destState: 'California', destSlug: 'california', distance: '2,794', openLow: '$1,250', openHigh: '$1,700', enclosedLow: '$1,800', enclosedHigh: '$2,400', transitLow: '6', transitHigh: '10', highway: 'I-80, I-40' },
  { originState: 'Illinois', originSlug: 'illinois', destState: 'Florida', destSlug: 'florida', distance: '1,377', openLow: '$875', openHigh: '$1,175', enclosedLow: '$1,300', enclosedHigh: '$1,750', transitLow: '3', transitHigh: '5', highway: 'I-75, I-65' },
  { originState: 'Virginia', originSlug: 'virginia', destState: 'Florida', destSlug: 'florida', distance: '1,053', openLow: '$750', openHigh: '$1,050', enclosedLow: '$1,100', enclosedHigh: '$1,550', transitLow: '2', transitHigh: '4', highway: 'I-95' },
  { originState: 'Texas', originSlug: 'texas', destState: 'Florida', destSlug: 'florida', distance: '1,229', openLow: '$825', openHigh: '$1,125', enclosedLow: '$1,225', enclosedHigh: '$1,675', transitLow: '3', transitHigh: '5', highway: 'I-10' },
  { originState: 'Georgia', originSlug: 'georgia', destState: 'California', destSlug: 'california', distance: '2,174', openLow: '$1,100', openHigh: '$1,500', enclosedLow: '$1,600', enclosedHigh: '$2,150', transitLow: '5', transitHigh: '8', highway: 'I-40, I-10' },
  { originState: 'New Jersey', originSlug: 'new-jersey', destState: 'Florida', destSlug: 'florida', distance: '1,254', openLow: '$850', openHigh: '$1,150', enclosedLow: '$1,250', enclosedHigh: '$1,700', transitLow: '3', transitHigh: '5', highway: 'I-95' },
  { originState: 'Ohio', originSlug: 'ohio', destState: 'Florida', destSlug: 'florida', distance: '1,179', openLow: '$825', openHigh: '$1,100', enclosedLow: '$1,225', enclosedHigh: '$1,650', transitLow: '3', transitHigh: '5', highway: 'I-75' }
];

const stateCities = {
  california: ['Los Angeles', 'San Francisco', 'San Diego'],
  texas:      ['Houston', 'Dallas', 'Austin'],
  florida:    ['Miami', 'Orlando', 'Tampa'],
  'new-york': ['New York City', 'Buffalo', 'Albany'],
  illinois:   ['Chicago', 'Springfield', 'Naperville'],
  virginia:   ['Virginia Beach', 'Richmond', 'Arlington'],
  georgia:    ['Atlanta', 'Savannah', 'Augusta'],
  ohio:       ['Columbus', 'Cleveland', 'Cincinnati'],
  'new-jersey': ['Newark', 'Jersey City', 'Trenton'],
  washington: ['Seattle', 'Spokane', 'Tacoma'],
  arizona:    ['Phoenix', 'Tucson', 'Scottsdale'],
  nevada:     ['Las Vegas', 'Reno', 'Henderson'],
  oregon:     ['Portland', 'Eugene', 'Salem'],
  colorado:   ['Denver', 'Colorado Springs', 'Aurora'],
};

// ==========================================
// 2. EXTRACT HEADER & FOOTER
// ==========================================
const samplePage = fs.readFileSync(path.join(__dirname, '..', 'california-car-shipping', 'index.html'), 'utf8');
const headerMatch = samplePage.match(/<header[\s\S]*?<\/header>/i);
const footerMatch = samplePage.match(/<footer[\s\S]*?<\/footer>/i);
const scriptMatch = samplePage.match(/<script src="\/chat\.js" defer><\/script>/i) || ['<script src="/chat.js" defer></script>'];
const mobileMenuMatch = samplePage.match(/<!-- Mobile Menu -->[\s\S]*?<!-- \/Mobile Menu -->/i);

const headerHTML = headerMatch ? headerMatch[0] : '';
const footerHTML = footerMatch ? footerMatch[0] : '';
const mobileMenuHTML = mobileMenuMatch ? mobileMenuMatch[0] : '';
const scriptHTML = scriptMatch ? scriptMatch[0] : '';

// ==========================================
// 3. READ TEMPLATE
// ==========================================
let template = fs.readFileSync(path.join(__dirname, '..', 'user_template.md'), 'utf8');
// Clean up the markdown wrapping
template = template.split('## FULL HTML PAGE TEMPLATE')[1];
template = template.replace(/```html/, '').replace(/```.*/s, '');
// Since the template was truncated around "hover:te", let's safely recreate the end
const ctaSection = `
        <a href="tel:5715767711" class="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-[#0a2540] transition text-lg">
          Call (571) 576-7711
        </a>
      </div>
    </div>
  </section>
`;

// Splice the end of the file safely
template = template.split('hover:te')[0] + ctaSection + '\n' + footerHTML + '\n' + scriptHTML + '\n</body>\n</html>';
// Inject header
template = template.replace('[EXISTING NAV COMPONENT]', headerHTML + '\n  ' + mobileMenuHTML);

// Inject correct CSS
const correctCSS = `
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/tailwind.css">
    <link rel="stylesheet" href="/css/styles.css">
`;
template = template.replace('<link rel="stylesheet" href="/styles/main.css" />', correctCSS.trim());

// ==========================================
// 4. GENERATE PAGES
// ==========================================
allRoutes.forEach(route => {
  let content = template;

  const originCities = stateCities[route.originSlug] || ['City 1', 'City 2', 'City 3'];
  const destCities = stateCities[route.destSlug] || ['City 1', 'City 2', 'City 3'];

  // Variables
  const replacements = {
    '\\[ORIGIN_STATE\\]': route.originState,
    '\\[ORIGIN_SLUG\\]': route.originSlug,
    '\\[DEST_STATE\\]': route.destState,
    '\\[DEST_SLUG\\]': route.destSlug,
    '\\[DISTANCE_MI\\]': route.distance,
    '\\[OPEN_LOW\\]': route.openLow,
    '\\[OPEN_HIGH\\]': route.openHigh,
    '\\[ENCLOSED_LOW\\]': route.enclosedLow,
    '\\[ENCLOSED_HIGH\\]': route.enclosedHigh,
    '\\[TRANSIT_LOW\\]': route.transitLow,
    '\\[TRANSIT_HIGH\\]': route.transitHigh,
    '\\[HIGHWAY\\]': route.highway,
    '\\[ORIGIN_CITY_1\\]': originCities[0],
    '\\[ORIGIN_CITY_2\\]': originCities[1],
    '\\[ORIGIN_CITY_3\\]': originCities[2],
    '\\[DEST_CITY_1\\]': destCities[0],
    '\\[DEST_CITY_2\\]': destCities[1],
    '\\[DEST_CITY_3\\]': destCities[2],
  };

  for (const [key, val] of Object.entries(replacements)) {
    content = content.replace(new RegExp(key, 'g'), val);
  }

  // Section 9 Linking Logic
  const moreOriginRoutes = allRoutes.filter(r => r.originSlug === route.originSlug && r.destSlug !== route.destSlug);
  const moreDestRoutes = allRoutes.filter(r => r.destSlug === route.destSlug && r.originSlug !== route.originSlug);

  // Re-build Section 9 links manually
  let originLinksHTML = '';
  moreOriginRoutes.forEach(r => {
    originLinksHTML += `            <li><a href="/${r.originSlug}-to-${r.destSlug}-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">${r.originState} to ${r.destState}</a></li>\n`;
  });

  let destLinksHTML = '';
  // Reverse route first
  const reverseRoute = allRoutes.find(r => r.originSlug === route.destSlug && r.destSlug === route.originSlug);
  if (reverseRoute) {
    destLinksHTML += `            <li><a href="/${reverseRoute.originSlug}-to-${reverseRoute.destSlug}-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">${reverseRoute.originState} to ${reverseRoute.destState} ↩</a></li>\n`;
  }
  moreDestRoutes.forEach(r => {
    // skip reverse route since we added it
    if (reverseRoute && r.originSlug === reverseRoute.originSlug && r.destSlug === reverseRoute.destSlug) return;
    destLinksHTML += `            <li><a href="/${r.originSlug}-to-${r.destSlug}-car-shipping/" class="text-[#468de6] hover:text-[#0a2540]">${r.originState} to ${r.destState}</a></li>\n`;
  });

  // Inject links using replacement
  content = content.replace(/<li><a href="\/\[ORIGIN_SLUG\]-to-\[DEST2_SLUG\]-car-shipping.*<\/li>/, originLinksHTML.trim());
  content = content.replace(/<li><a href="\/\[ORIGIN_SLUG\]-to-\[DEST3_SLUG\]-car-shipping.*<\/li>\s*/, '');
  content = content.replace(/<li><a href="\/\[ORIGIN_SLUG\]-to-\[DEST4_SLUG\]-car-shipping.*<\/li>\s*/, '');

  content = content.replace(/<li><a href="\/\[DEST_SLUG\]-to-\[ORIGIN_SLUG\]-car-shipping.*<\/li>/, destLinksHTML.trim());
  content = content.replace(/<li><a href="\/\[DEST2_SLUG\]-to-\[DEST_SLUG\]-car-shipping.*<\/li>\s*/, '');
  content = content.replace(/<li><a href="\/\[DEST3_SLUG\]-to-\[DEST_SLUG\]-car-shipping.*<\/li>\s*/, '');

  // Ensure output is in the ROOT dir
  const dirPath = path.join(__dirname, '..', `${route.originSlug}-to-${route.destSlug}-car-shipping`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'index.html'), content);
});

// ==========================================
// 5. VERIFICATION STEP
// ==========================================
let allPassed = true;
const checkStrings = ['[ORIGIN_STATE]', '[DEST_STATE]', '[OPEN_LOW]', '[TRANSIT_LOW]', 'virginia-to-', '/routes/', 'href="#"'];

allRoutes.forEach(route => {
  const filePath = path.join(__dirname, '..', `${route.originSlug}-to-${route.destSlug}-car-shipping`, 'index.html');
  const content = fs.readFileSync(filePath, 'utf8');

  checkStrings.forEach(badString => {
    // Ignore 'virginia-to-' check if the route is genuinely from Virginia
    if (badString === 'virginia-to-' && route.originSlug === 'virginia') return;

    if (content.includes(badString)) {
      console.error(`❌ FAIL: Found "${badString}" in ${filePath}`);
      allPassed = false;
    }
  });
});

if (allPassed) {
  console.log('✅ ALL 14 PAGES PASSED VERIFICATION — safe to commit and deploy');
} else {
  console.log('⛔ VERIFICATION FAILED — do not commit until errors above are resolved');
  process.exit(1);
}

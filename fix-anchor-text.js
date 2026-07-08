const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'services', 'index.html');
const whyNeonPath = path.join(__dirname, 'why-neon.html');

// Helper to replace "Learn More" based on href
function updateAnchorText(content, href, newAnchor) {
    // Regex matches the anchor tag pointing to the specific href containing "Learn More"
    // and replaces just the text content.
    const regex = new RegExp(`(<a href="${href}"[^>]*>)Learn More(</a>)`, 'gi');
    return content.replace(regex, `$1${newAnchor}$2`);
}

function updateAnchorTextWhyNeon(content, href, newAnchor) {
    const regex = new RegExp(`(<a href="${href}"[^>]*>)Learn more\\s*→(</a>)`, 'gi');
    return content.replace(regex, `$1${newAnchor}$2`);
}

// 1. Services Page
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Explicitly requested replacements:
const servicesReplacements = {
    "/services/open-auto-transport/": "Open Auto Transport",
    "/services/enclosed-auto-transport/": "Enclosed Auto Transport",
    "/services/car-buyer-auto-transport/": "Car Buyer Auto Transport",
    "/services/car-shipping-to-another-state/": "Car Shipping to Another State",
    "/services/truck-shipping-services/": "Truck Shipping Services",
    "/services/luxury-car-shipping/": "Luxury Car Shipping",
    "/services/military-car-shipping/": "Military PCS Car Shipping",
    "/services/snow-bird-car-shipping/": "Snowbird Car Shipping",
    "/services/college-car-shipping/": "College Student Car Shipping",
    "/services/door-to-door-car-shipping/": "Door-to-Door Car Shipping",
    "/services/corporate-relocation/": "Corporate Relocation Transport",
    "/services/auto-auction-shipping/": "Auto Auction Car Shipping",
    "/services/motorcycle-shipping/": "Motorcycle Shipping",
    "/services/rental-car-shipping/": "Rental Car Shipping",
    
    // Derived from card titles for the ones not explicitly listed in the exact command
    "/services/expedited-auto-transport/": "Expedited Auto Transport",
    "/services/car-resellers-auto-transport/": "Car Resellers Auto Transport",
    "/services/car-dealer-shipping/": "Car Dealer Shipping",
    "/services/fleet-management-transportation-services/": "Fleet Management Transportation",
    "/services/alaska-auto-transport/": "Alaska Auto Transport",
    "/services/hawaii-auto-transport/": "Hawaii Auto Transport",
    "/services/international-overseas-car-shipping-services/": "International Overseas Car Shipping",
    "/services/terminal-to-terminal-car-shipping/": "Terminal-to-Terminal Car Shipping"
};

// First replace the anchor texts
for (const [href, newText] of Object.entries(servicesReplacements)) {
    servicesContent = updateAnchorText(servicesContent, href, newText);
}

// Handle Duplicates: 
// The user asked to remove duplicate cards for specific destinations. 
// A card starts with <!-- Service X --> and ends with </div>.
// We will track seen URLs and if we see a card with a URL we've already kept, we strip the card.
const cardRegex = /<!-- Service \d+ -->\s*<div class="stripe-card[^>]*>[\s\S]*?<a href="([^"]+)"[^>]*>.*?<\/a>\s*<\/div>/g;

let seenUrls = new Set();
let duplicatesFound = 0;

servicesContent = servicesContent.replace(cardRegex, (match, href) => {
    if (seenUrls.has(href)) {
        duplicatesFound++;
        return ''; // Remove duplicate card
    } else {
        seenUrls.add(href);
        return match; // Keep first instance
    }
});

console.log(`Removed ${duplicatesFound} duplicate cards from services/index.html`);

fs.writeFileSync(servicesPath, servicesContent, 'utf8');

// 2. Why Neon Page
let whyNeonContent = fs.readFileSync(whyNeonPath, 'utf8');

const whyNeonReplacements = {
    "/services/door-to-door-car-shipping/": "Door-to-Door Car Shipping →",
    "/services/open-auto-transport/": "Open Auto Transport Services →",
    "/services/enclosed-auto-transport/": "Enclosed Auto Transport Services →",
    "/services/expedited-auto-transport/": "Expedited Auto Transport Services →"
};

for (const [href, newText] of Object.entries(whyNeonReplacements)) {
    whyNeonContent = updateAnchorTextWhyNeon(whyNeonContent, href, newText);
}

fs.writeFileSync(whyNeonPath, whyNeonContent, 'utf8');
console.log('Successfully updated anchor texts in why-neon.html');

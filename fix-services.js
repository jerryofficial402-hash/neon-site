const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const servicesHtml = fs.readFileSync('services/index.html', 'utf8');

// Extract everything from <!-- Core Scripts --> to the end from index.html
const startMarker = '<!-- Core Scripts -->';
const scriptsIdx = indexHtml.indexOf(startMarker);
if (scriptsIdx === -1) {
    console.error("Could not find Core Scripts in index.html");
    process.exit(1);
}
let scriptsContent = indexHtml.substring(scriptsIdx);

// Replace everything after </footer> in services/index.html with this content
const footerEndMarker = '</footer>';
const footerIdx = servicesHtml.indexOf(footerEndMarker);
if (footerIdx === -1) {
    console.error("Could not find </footer> in services/index.html");
    process.exit(1);
}

// But wait, the mobile sticky CTA in services/index.html is NOT in index.html, it was injected separately in index.html maybe?
// Actually index.html DOES have the mobile sticky CTA in the script. Let's check if scriptsContent has mobile sticky CTA.
const hasMobileCTA = scriptsContent.includes('id="mobile-sticky-cta"');
if (!hasMobileCTA) {
    // If index.html doesn't have it, we should use texas-car-shipping/index.html instead, or manually append it.
    console.log("index.html lacks mobile sticky cta, using texas-car-shipping/index.html");
    const texasHtml = fs.readFileSync('texas-car-shipping/index.html', 'utf8');
    const texasScriptsIdx = texasHtml.indexOf('<!-- Sticky Side Widget -->');
    if (texasScriptsIdx !== -1) {
        scriptsContent = texasHtml.substring(texasScriptsIdx);
    } else {
        console.error("Could not find scripts in texas");
        process.exit(1);
    }
} else {
    console.log("index.html has mobile sticky cta in scripts section");
}

const newServicesHtml = servicesHtml.substring(0, footerIdx + footerEndMarker.length) + '\n\n' + scriptsContent;

fs.writeFileSync('services/index.html', newServicesHtml);
console.log('Fixed services/index.html scripts!');

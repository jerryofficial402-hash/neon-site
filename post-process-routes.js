const fs = require('fs');
const path = require('path');

const faqSchema = `
    <!-- JSON-LD FAQPage -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is my vehicle insured during transit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every carrier in the Neon Auto Transport network is required to carry active cargo insurance. Your vehicle is fully covered from pickup to delivery."
        }
      },{
        "@type": "Question",
        "name": "How do I prepare my car for shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please wash the exterior so pre-existing damage can be noted. Remove all toll tags, parking passes, and personal items. Ensure your gas tank is no more than 1/4 full to save on weight."
        }
      },{
        "@type": "Question",
        "name": "Can I track my shipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide you with the direct phone number of the driver handling your shipment. You can call or text them anytime for a real-time ETA."
        }
      },{
        "@type": "Question",
        "name": "Do you offer Door to Door Service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Your vehicle is picked up and delivered as close to your chosen addresses as legally and safely possible for a commercial 18-wheeler truck."
        }
      }]
    }
    </script>
</head>`;

function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Fix canonical
    // E.g. <link rel="canonical" href="https://neonautotransport.com/routes/texas-car-shipping.html">
    // Replace .html"> with /">
    const canonicalRegex = /<link rel="canonical" href="(https:\/\/neonautotransport\.com\/routes\/[^"]+?)\.html"([^>]*)>/g;
    if (canonicalRegex.test(content)) {
        content = content.replace(canonicalRegex, '<link rel="canonical" href="$1/"$2>');
        updated = true;
    }

    // Add FAQ schema before </head> if not present
    if (!content.includes('"@type": "FAQPage"')) {
        content = content.replace('</head>', faqSchema);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content);
    }
}

// Process State Pages
const routesDir = path.join(__dirname, 'routes');
const stateFiles = fs.readdirSync(routesDir);
for (const file of stateFiles) {
    const fullPath = path.join(routesDir, file);
    if (fs.statSync(fullPath).isFile() && fullPath.endsWith('.html')) {
        processFile(fullPath);
    }
}

// Process City Pages
const cityDir = path.join(routesDir, 'city');
if (fs.existsSync(cityDir)) {
    const cityFiles = fs.readdirSync(cityDir);
    for (const file of cityFiles) {
        const fullPath = path.join(cityDir, file);
        if (fs.statSync(fullPath).isFile() && fullPath.endsWith('.html')) {
            processFile(fullPath);
        }
    }
}

console.log('Routes post-processing complete (Canonical fixed + FAQ schema added).');

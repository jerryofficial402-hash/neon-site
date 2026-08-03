const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'reviews.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Trustpilot with Transport Reviews
content = content.replace(/Trustpilot/g, 'Transport Reviews');
content = content.replace(/trustpilot/g, 'transportreviews');
content = content.replace(/https:\/\/www\.transportreviews\.com\/review\/neonautotransport\.com/g, 'https://www.transportreviews.com/Company/Neon-Auto-Transport');
content = content.replace(/46 reviews/g, '146 reviews');

// Inject AggregateRating Schema
const schemaBlock = `
  <!-- Schema: AggregateRating + Review -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Neon Auto Transport LLC",
    "url": "https://neonautotransport.com",
    "image": "https://neonautotransport.com/images/logo.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
  </script>`;

// Replace existing partial schema
const oldSchemaRegex = /<!-- Schema: AggregateRating \+ Review -->\s*<script type="application\/ld\+json">\s*{\s*"@context": "https:\/\/schema\.org",\s*"@type": "AutoDealer",\s*"name": "Neon Auto Transport LLC",\s*"url": "https:\/\/neonautotransport\.com",[\s\S]*?<\/script>/;

if (oldSchemaRegex.test(content)) {
    content = content.replace(oldSchemaRegex, schemaBlock);
} else {
    // If not found, insert before </head>
    content = content.replace('</head>', schemaBlock + '\n</head>');
}

fs.writeFileSync(filePath, content);
console.log('Reviews page fixed!');

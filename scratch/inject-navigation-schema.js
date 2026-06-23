const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const navigationSchema = `
    <!-- JSON-LD: SiteNavigationElement (Encourage Sitelinks) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Contact Us",
          "description": "Call us at (571) 576-7711 or email info@neonautotransport.com",
          "url": "https://neonautotransport.com/contact.html"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Customer Reviews",
          "description": "Read what our customers are saying about Neon Auto Transport.",
          "url": "https://neonautotransport.com/reviews/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Transport Services",
          "description": "Explore our door-to-door, open, and enclosed auto transport services.",
          "url": "https://neonautotransport.com/services/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Auto Transport Cost Guide",
          "description": "Learn the true cost to ship a car and use our instant calculator.",
          "url": "https://neonautotransport.com/blog/true-cost-of-car-shipping-2026.html"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "FAQs",
          "description": "Answers to the most common car shipping questions.",
          "url": "https://neonautotransport.com/faqs/"
        }
      ]
    }
    </script>
`;

if (!content.includes('SiteNavigationElement')) {
    content = content.replace('</head>', navigationSchema + '</head>');
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Injected SiteNavigationElement schema into index.html');
} else {
    console.log('SiteNavigationElement schema already exists');
}

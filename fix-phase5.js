const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/DYNABOOK/.gemini/antigravity/scratch/neon-site';

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory() && !filePath.includes('.git') && !filePath.includes('node_modules')) {
      getAllHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// ==========================================
// 1. Remove Trustindex section from index.html
// ==========================================
const indexPath = path.join(rootDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace(/\s*<!-- Trustindex Reviews Section -->[\s\S]*?<\/section>\s*/g, '\n');
fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('1. Trustindex section removed from index.html');

// ==========================================
// 2. Add AggregateRating to index.html LocalBusiness schema
// ==========================================
indexContent = fs.readFileSync(indexPath, 'utf8');
if (!indexContent.includes('"aggregateRating"')) {
  const ratingBlock = `,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "25",
        "bestRating": "5",
        "worstRating": "1"
      }`;
  // Insert before the closing } of the LocalBusiness schema
  indexContent = indexContent.replace(
    /("sameAs":\s*\[[\s\S]*?\])\s*\n\s*\}/,
    `$1${ratingBlock}\n    }`
  );
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('2. AggregateRating added to index.html');
}

// ==========================================
// 3. Process all service and route pages
// ==========================================
const serviceFiles = getAllHtmlFiles(path.join(rootDir, 'services'));
const routeFiles = getAllHtmlFiles(path.join(rootDir, 'routes'));
const allTemplateFiles = [...serviceFiles, ...routeFiles];

const authorName = 'Marcus Reid';
const authorTitle = 'Senior Logistics Coordinator';
const authorBio = `${authorName} is a ${authorTitle} at Neon Auto Transport with over a decade of experience coordinating cross-country freight and specialized vehicle transport for individual, military, and corporate clients.`;

let updatedCount = 0;

for (const file of allTemplateFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Extract page title for dynamic content
  const titleMatch = content.match(/<title>([^|<]+?)(?:\s*\|)/);
  const pageTitle = titleMatch ? titleMatch[1].trim() : 'Auto Transport';

  // 3a. Add AggregateRating to Service schema
  if (content.includes('"@type": "Service"') && !content.includes('"aggregateRating"')) {
    const serviceRating = `,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "25",
        "bestRating": "5",
        "worstRating": "1"
      }`;
    // Insert before the closing of the Service schema offers block
    content = content.replace(
      /("seller":\s*\{[^}]+\}\s*\})\s*\n\s*\}/,
      `$1${serviceRating}\n    }`
    );
  }

  // 3b. Add author byline section before the footer
  if (!content.includes('author-byline')) {
    const authorSection = `
    <!-- Author Byline -->
    <section class="container mx-auto px-4 lg:px-8 max-w-6xl pb-16" id="author-byline">
        <div class="stripe-card p-8 flex items-start gap-6 border-l-4 border-l-[#635bff]">
            <div class="w-16 h-16 rounded-full bg-[#e0e7ff] flex items-center justify-center text-[#635bff] font-black text-2xl flex-shrink-0">MR</div>
            <div>
                <div class="font-bold text-[#0a2540] text-lg">${authorName}</div>
                <div class="text-[#635bff] text-sm font-semibold mb-2">${authorTitle} at Neon Auto Transport</div>
                <p class="text-[#425466] text-sm leading-relaxed">${authorBio}</p>
            </div>
        </div>
    </section>
`;
    content = content.replace(/<footer/, `${authorSection}\n    <footer`);
  }

  // 3c. Add review/testimonial section before author byline
  if (!content.includes('customer-reviews-section')) {
    const reviewSection = `
    <!-- Customer Reviews -->
    <!-- Customer Reviews -->
  <section class="container mx-auto px-4 lg:px-8 max-w-6xl pb-12" id="customer-reviews-section">
    <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight text-center">What Our Customers Say</h2>
    <p class="text-[#425466] text-sm max-w-2xl mx-auto text-center mb-8">Authentic 5.0-star reviews from verified customers on Google Maps.</p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Review 1 -->
      <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" class="block bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6] hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[#0a2540] font-bold text-sm">Semih Akay</span>
            <div class="flex text-yellow-400 text-sm">★★★★★</div>
          </div>
          <p class="text-[#425466] text-xs leading-relaxed mb-4">"Thank you for responding always on time. Friendly service and will be working in future again."</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#70757a] border-t border-[#e6e6e6] pt-3">
          <span>Verified Google Review</span>
          <span class="text-[#4285f4] font-semibold flex items-center gap-1">View on Google &rarr;</span>
        </div>
      </a>

      <!-- Review 2 -->
      <a href="https://maps.app.goo.gl/Pvcguq4mwYxWEsqs7" target="_blank" rel="noopener noreferrer" class="block bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6] hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[#0a2540] font-bold text-sm">Mike Hainsworth</span>
            <div class="flex text-yellow-400 text-sm">★★★★★</div>
          </div>
          <p class="text-[#425466] text-xs leading-relaxed mb-4">"They were all over it. Great price. On time. Wouldn't want to use anybody else. Mike."</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#70757a] border-t border-[#e6e6e6] pt-3">
          <span>Verified Google Review</span>
          <span class="text-[#4285f4] font-semibold flex items-center gap-1">View on Google &rarr;</span>
        </div>
      </a>

      <!-- Review 3 -->
      <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" class="block bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6] hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[#0a2540] font-bold text-sm">Viola Willoughby</span>
            <div class="flex text-yellow-400 text-sm">★★★★★</div>
          </div>
          <p class="text-[#425466] text-xs leading-relaxed mb-4">"Prompt and professional door-to-door auto shipping. My vehicle arrived ahead of schedule without a scratch."</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#70757a] border-t border-[#e6e6e6] pt-3">
          <span>Verified Google Review</span>
          <span class="text-[#4285f4] font-semibold flex items-center gap-1">View on Google &rarr;</span>
        </div>
      </a>
    </div>

    <div class="text-center mt-8">
      <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-[#e6e6e6] shadow-sm hover:shadow-md transition text-xs font-bold text-[#0a2540]">
        <span class="text-yellow-400 text-sm">★★★★★</span>
        <span>5.0 / 5.0 Rating based on verified Google Reviews</span>
      </a>
    </div>
  </section>
`;
    // Insert before author byline
    content = content.replace(/<!-- Author Byline -->/, `${reviewSection}\n    <!-- Author Byline -->`);
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
}

console.log(`3. Updated ${updatedCount} service/route files with AggregateRating, reviews, and author byline.`);

// ==========================================
// 4. Update sitemap with blog pages
// ==========================================
const sitemapPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  if (!sitemap.includes('/blog/')) {
    const blogEntries = `
  <!-- Blog Pages -->
  <url><loc>https://neonautotransport.com/blog/</loc><lastmod>2026-06-06</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://neonautotransport.com/blog/open-vs-enclosed-auto-transport/</loc><lastmod>2026-06-06</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://neonautotransport.com/blog/how-to-prepare-car-for-shipping/</loc><lastmod>2026-06-06</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://neonautotransport.com/blog/true-cost-of-car-shipping-2026/</loc><lastmod>2026-06-06</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
`;
    sitemap = sitemap.replace('</urlset>', `${blogEntries}\n</urlset>`);
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('4. Sitemap updated with blog URLs.');
  }
}

console.log('Phase 5 content script complete.');

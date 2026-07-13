const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Analytics script tag to inject
const analyticsScript = '<script src="/_vercel/insights/script.js" defer></script>';

// Function to inject analytics script into an HTML file
function injectAnalytics(filePath) {
  try {
    const html = fs.readFileSync(filePath, 'utf-8');
    
    // Check if analytics is already injected
    if (html.includes('/_vercel/insights/script.js')) {
      console.log(`✓ Analytics already present in ${filePath}`);
      return false;
    }
    
    const $ = cheerio.load(html);
    
    // Inject before closing </head> tag if possible, otherwise before </body>
    if ($('head').length > 0) {
      $('head').append('\n  ' + analyticsScript);
    } else if ($('body').length > 0) {
      $('body').append('\n  ' + analyticsScript + '\n');
    } else {
      console.log(`⚠ Could not find head or body tag in ${filePath}`);
      return false;
    }
    
    // Write the updated HTML
    fs.writeFileSync(filePath, $.html());
    console.log(`✓ Injected analytics into ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and hidden directories
      if (file !== 'node_modules' && !file.startsWith('.')) {
        findHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('🚀 Starting Vercel Analytics injection...\n');

const htmlFiles = findHtmlFiles('.');
console.log(`Found ${htmlFiles.length} HTML files\n`);

let injected = 0;
let skipped = 0;

htmlFiles.forEach(file => {
  if (injectAnalytics(file)) {
    injected++;
  } else {
    skipped++;
  }
});

console.log(`\n✅ Complete! Injected analytics into ${injected} files, skipped ${skipped} files.`);

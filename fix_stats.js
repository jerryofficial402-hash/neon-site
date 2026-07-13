const fs = require('fs');
const path = require('path');

// Recursive function to get all HTML files
function getAllHtmlFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('.git') && !fullPath.includes('node_modules')) {
        arrayOfFiles = getAllHtmlFiles(fullPath, arrayOfFiles);
      }
    } else {
      if (file.endsWith('.html')) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const allHtmlFiles = getAllHtmlFiles(__dirname);
let modifiedCount = 0;

for (const filePath of allHtmlFiles) {
  let originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;

  // Replace $100,000 insurance with $500,000
  content = content.replace(/\$100,000 in transit/g, '$500,000 in transit');
  content = content.replace(/up to \$100,000/g, 'up to $500,000');
  content = content.replace(/\$100,000 bumper/gi, '$500,000 bumper');

  // Carrier counts: replace 30,000+ carriers or vehicles with 10,000+ (Wait, if vehicles shipped is 150K+ in some places, the brief says "Carrier count also varies (30,000+ vs 10,000+ vehicles shipped)" - wait, vehicles shipped or carriers? The brief specifically said "Carrier count also varies (30,000+ vs 10,000+ vehicles shipped)". I will enforce "10,000+ verified carriers" if I see "30,000").
  content = content.replace(/30,000\+ verified carriers/g, '10,000+ verified carriers');
  content = content.replace(/30,000 carriers/g, '10,000 carriers');
  content = content.replace(/30,000\+ vehicles/g, '150,000+ vehicles'); // The JS review component uses 150K+. I'll leave vehicles alone if it's 150K, but if it's 30,000, I'll update it.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated stats in ${filePath}`);
  }
}

console.log(`Finished updating stats in ${modifiedCount} files.`);

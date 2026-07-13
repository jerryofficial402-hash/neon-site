const fs = require('fs');
const path = require('path');

const dir = 'services';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let changedFiles = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let originalContent = content;
  
  // First, let's target the exact blocks.
  // Replace top-level Service with Service + Product for rich results eligibility
  content = content.replace(/"@type":\s*"Service"/g, '"@type": ["Service", "Product"]');
  
  // Replace MovingCompany with MovingCompany + LocalBusiness so Google accepts it
  content = content.replace(/"@type":\s*"MovingCompany"/g, '"@type": ["MovingCompany", "LocalBusiness"]');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    changedFiles++;
    console.log('Fixed schema in ' + file);
  }
}

console.log(`Finished fixing schema in ${changedFiles} files.`);

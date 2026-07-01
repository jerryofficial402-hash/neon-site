const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function fixBodyPadding(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git', '.vercel', 'images', 'css', 'js', 'scratch'].includes(file)) {
        fixBodyPadding(fullPath);
      }
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let originalContent = content;

      // Remove the inline style adding padding to body
      content = content.replace(/<style>\s*@media\s*\(max-width:\s*1024px\)\s*\{\s*#sticky-widget\s*\{\s*display:\s*none\s*!important;\s*\}\s*body\s*\{\s*padding-bottom:\s*80px\s*!important;\s*\}\s*\}\s*<\/style>\s*/g, '');
      
      // Remove the pb-24 from body tag
      content = content.replace(/<body([^>]*)pb-24([^>]*)>/g, '<body$1$2>');
      // Clean up multiple spaces if any
      content = content.replace(/<body([^>]*)\s{2,}([^>]*)>/g, '<body$1 $2>');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf-8');
      }
    }
  }
}

fixBodyPadding(rootDir);
console.log('Removed all bad body padding from HTML files.');

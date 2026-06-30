const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function inlineAuthorImageStyles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git', '.vercel', 'images', 'css', 'js', 'scratch'].includes(file)) {
        inlineAuthorImageStyles(fullPath);
      }
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let originalContent = content;

      // Match w-16 or w-12
      content = content.replace(/(<img[^>]*src="\/images\/shazil-ali\.jpg"[^>]*class="[^"]*w-16[^"]*")([^>]*)>/g, (match, p1, p2) => {
        if (!match.includes('style=')) {
          return `${p1} style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; flex-shrink: 0;"${p2}>`;
        }
        return match;
      });

      content = content.replace(/(<img[^>]*src="\/images\/shazil-ali\.jpg"[^>]*class="[^"]*w-12[^"]*")([^>]*)>/g, (match, p1, p2) => {
        if (!match.includes('style=')) {
          return `${p1} style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;"${p2}>`;
        }
        return match;
      });

      content = content.replace(/(<img[^>]*src="\/images\/shazil-ali\.jpg"[^>]*class="[^"]*w-32[^"]*")([^>]*)>/g, (match, p1, p2) => {
        if (!match.includes('style=')) {
          return `${p1} style="width: 128px; height: 128px; border-radius: 50%; object-fit: cover; flex-shrink: 0;"${p2}>`;
        }
        return match;
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf-8');
      }
    }
  }
}

inlineAuthorImageStyles(rootDir);
console.log('Inline styles applied to all author images.');

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'services', 'motorcycle-shipping.html');
const content = fs.readFileSync(filePath, 'utf8');

// Basic HTML parser to track open divs/sections
let pos = 0;
const stack = [];
const len = content.length;

function getContext(pos) {
  return content.slice(Math.max(0, pos - 40), Math.min(len, pos + 40)).replace(/\n/g, ' ');
}

while (pos < len) {
  if (content[pos] === '<') {
    if (content.startsWith('<!--', pos)) {
      pos = content.indexOf('-->', pos);
      if (pos === -1) break;
      pos += 3;
      continue;
    }
    
    // Tag
    let endTagPos = content.indexOf('>', pos);
    if (endTagPos === -1) break;
    
    let tagContent = content.slice(pos + 1, endTagPos).trim();
    pos = endTagPos + 1;
    
    if (tagContent.startsWith('/') || tagContent.endsWith('/')) {
      // Closing tag or self-closing
      if (tagContent.startsWith('/')) {
        const tagName = tagContent.slice(1).split(/\s+/)[0].toLowerCase();
        if (['div', 'section', 'main', 'header', 'footer', 'body', 'html'].includes(tagName)) {
          if (stack.length === 0) {
            console.log(`Unmatched closing tag </${tagName}> near pos ${pos}: "${getContext(pos)}"`);
          } else {
            const popped = stack.pop();
            if (popped.name !== tagName) {
              console.log(`Mismatch: expected </${popped.name}> (opened at line ${popped.line}), but got </${tagName}> at line ${content.substring(0, pos).split('\n').length}`);
            }
          }
        }
      }
    } else {
      // Opening tag
      const parts = tagContent.split(/\s+/);
      const tagName = parts[0].toLowerCase();
      if (['div', 'section', 'main', 'header', 'footer', 'body', 'html'].includes(tagName)) {
        const line = content.substring(0, pos).split('\n').length;
        stack.push({ name: tagName, line });
      }
    }
  } else {
    pos++;
  }
}

console.log("Remaining open tags in stack at end of file:");
console.log(stack);

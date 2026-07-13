const fs = require('fs');

const lines = fs.readFileSync('C:\\Users\\DYNABOOK\\.gemini\\antigravity\\brain\\0306b5bf-542e-4da3-9048-05db3adf5016\\.system_generated\\logs\\transcript.jsonl', 'utf8').split('\n');

let fullContent = '';
for (const line of lines) {
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT' && obj.content && obj.content.includes('New York Car Shipping')) {
      fullContent += obj.content + '\n';
    }
  } catch (e) {}
}

fs.writeFileSync('C:\\Users\\DYNABOOK\\.gemini\\antigravity\\brain\\0306b5bf-542e-4da3-9048-05db3adf5016\\scratch\\ny_brief.md', fullContent, 'utf8');

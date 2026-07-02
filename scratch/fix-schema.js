const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function fixSchema(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git', '.vercel', 'images', 'css', 'js', 'scratch'].includes(file)) {
        fixSchema(fullPath);
      }
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let originalContent = content;

      // Use a regex to find all <script type="application/ld+json"> blocks
      const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
      
      content = content.replace(regex, (match, jsonString) => {
        try {
          // Some json strings might have trailing commas or weird formatting, try to parse
          // Clean trailing commas before closing braces if necessary, but standard parse should be attempted first
          // Actually, our previous script injected a comma: } , "aggregateRating": { ... }
          // Let's manually clean it up first just in case
          let cleanedStr = jsonString.replace(/\s*,\s*}/g, '}');
          let jsonObj = JSON.parse(cleanedStr);
          
          if (jsonObj['@type'] === 'Service' && jsonObj.aggregateRating) {
            if (jsonObj.provider && (jsonObj.provider['@type'] === 'MovingCompany' || jsonObj.provider['@type'] === 'LocalBusiness')) {
              jsonObj.provider.aggregateRating = jsonObj.aggregateRating;
              delete jsonObj.aggregateRating;
              return `<script type="application/ld+json">\n${JSON.stringify(jsonObj, null, 2)}\n  </script>`;
            } else {
               // If no provider, just delete the aggregateRating to satisfy Google
               delete jsonObj.aggregateRating;
               return `<script type="application/ld+json">\n${JSON.stringify(jsonObj, null, 2)}\n  </script>`;
            }
          }
        } catch (e) {
          // If parse fails, just return original match
        }
        return match;
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf-8');
      }
    }
  }
}

fixSchema(rootDir);
console.log('Fixed Invalid object type for field parent_node in schema.');

const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `<section id="poster-scroll" style="position: relative; height: 400vh; background-color: #0a0a0a;">`;

const styleToInsert = `  <style>
    @media (max-width: 768px) {
      /* Fix horizontal overflow caused by large text on mobile */
      #poster-text-container {
        padding: 0 1rem !important;
      }
      #poster-word-1, #poster-word-2, #poster-word-3 {
        font-size: 11vw !important;
      }
      #poster-side {
        display: none !important; /* Hide side text on mobile to prevent overlap */
      }
    }
  </style>
  `;

html = html.replace(targetStr, styleToInsert + targetStr);

fs.writeFileSync('index.html', html);
console.log('Successfully injected mobile style fixes above poster-scroll.');

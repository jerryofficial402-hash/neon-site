const fs = require('fs');

function fixMenuJS2(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Replace the menu toggle logic
  const oldJS = "if (btn && menu) btn.addEventListener('click', function() { menu.classList.toggle('hidden'); });";
  const newJS = "if (btn && menu) btn.addEventListener('click', function() { if(menu.style.display === 'none' || menu.classList.contains('hidden')) { menu.classList.remove('hidden'); menu.style.display = 'flex'; } else { menu.style.display = 'none'; } });";
  
  if (content.includes(oldJS)) {
    content = content.replace(oldJS, newJS);
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  } else {
    console.log('Not found in ' + file);
  }
}

fixMenuJS2('services/open-auto-transport.html');

const fs = require('fs');
const path = require('path');

const newCSS = fs.readFileSync('tailwind-output.css', 'utf8');
const rootDir = __dirname;

function injectCSS(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the <style> tag containing tailwindcss
    const styleRegex = /<style>[^]*?tailwindcss[^]*?<\/style>/i;
    
    if (styleRegex.test(content)) {
        content = content.replace(styleRegex, `<style>${newCSS}</style>`);
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;

    for (const file of files) {
        // Skip node_modules or .git
        if (file === 'node_modules' || file === '.git') continue;

        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            count += processDirectory(fullPath);
        } else if (fullPath.endsWith('.html')) {
            if (injectCSS(fullPath)) {
                count++;
            }
        }
    }
    return count;
}

const totalUpdated = processDirectory(rootDir);
console.log('Successfully injected new compiled CSS into ' + totalUpdated + ' HTML files.');

// Update templates
const generateRoutesJsPath = path.join(rootDir, 'routes/generate-routes-v2.js');
let templateContent = fs.readFileSync(generateRoutesJsPath, 'utf8');
const templateStyleRegex = /<style>[^]*?tailwindcss[^]*?<\/style>/i;
if (templateStyleRegex.test(templateContent)) {
    templateContent = templateContent.replace(templateStyleRegex, `<style>${newCSS}</style>`);
    fs.writeFileSync(generateRoutesJsPath, templateContent, 'utf8');
    console.log('Updated template file: routes/generate-routes-v2.js');
}


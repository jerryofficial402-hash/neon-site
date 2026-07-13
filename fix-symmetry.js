const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let htmlFiles = [];

function findHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!['node_modules', '.git', '.vercel', 'og-images', 'dashboard'].includes(file)) {
                findHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

findHtmlFiles(rootDir);

let modifiedCount = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Look for the broken missing </div>s before <!-- Auto Transport Hub -->
    // We expect:
    //               </div>
    //               
    //               <!-- Auto Transport Hub -->
    //
    // But it's missing the two divs for the grid and the wrapper.
    // Let's replace the single </div> with </div></div></div>
    
    // Regex to match the end of Population Density card:
    // </p>\n              </div>\n              \n              <!-- Auto Transport Hub -->
    const regex1 = /<\/p>\s*<\/div>\s*<!-- Auto Transport Hub -->/g;
    const replacement1 = `</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- Auto Transport Hub -->`;
    
    if (regex1.test(content)) {
        content = content.replace(regex1, replacement1);
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    } else {
        // Alternative regex in case TIPS & TRICKS comes first
        const regex2 = /<\/p>\s*<\/div>\s*<!-- TIPS & TRICKS -->/g;
        const replacement2 = `</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- TIPS & TRICKS -->`;
        
        if (regex2.test(content)) {
            // First we need to make sure this is actually the end of Population Density grid!
            // Let's check if the previous lines belong to Population Density
            const index = content.search(regex2);
            if (index > -1) {
                const prevContext = content.substring(Math.max(0, index - 500), index);
                if (prevContext.includes('Population Density')) {
                    content = content.replace(regex2, replacement2);
                    fs.writeFileSync(file, content, 'utf8');
                    modifiedCount++;
                }
            }
        }
    }
});

console.log(`Fixed layout symmetry bug in ${modifiedCount} files.`);

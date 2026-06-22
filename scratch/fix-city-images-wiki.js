const fs = require('fs');
const path = require('path');
const https = require('https');

const stateData = require('../routes/state-data.json');

function fetchWikipediaImage(query) {
    return new Promise((resolve) => {
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(query)}&prop=pageimages&format=json&pithumbsize=1200&redirects=1`;
        
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 neon-auto-transport-bot/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const pages = json.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pageId !== '-1' && pages[pageId].thumbnail) {
                        resolve(pages[pageId].thumbnail.source);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

function capitalize(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

async function run() {
    const dir = path.join(__dirname, '../routes/city');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    
    console.log(`Found ${files.length} city files to process...`);
    
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if (file.includes('-to-')) continue;

        const base = file.replace('.html', '');
        const parts = base.split('-');
        const abbr = parts.pop().toUpperCase();
        const cityHyphen = parts.join('-');
        const city = capitalize(cityHyphen);
        
        const stateNameObj = Object.values(stateData).find(s => s.abbr === abbr);
        const stateName = stateNameObj ? stateNameObj.state : '';
        
        const query = stateName ? `${city}, ${stateName}` : city;
        
        // Wait 2 full seconds between requests to completely avoid Wikimedia rate limiting
        await new Promise(r => setTimeout(r, 2000));
        
        let imgUrl = await fetchWikipediaImage(query);
        
        if (!imgUrl) {
            await new Promise(r => setTimeout(r, 2000));
            imgUrl = await fetchWikipediaImage(city);
        }
        
        if (imgUrl) {
            const filePath = path.join(dir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Replace the pollinations URL or generic URL
            const genericRegex = /https:\/\/image\.pollinations\.ai[^"]+|https:\/\/images\.unsplash\.com\/photo-[^?"]+\?[^"]+/g;
            
            if (genericRegex.test(content)) {
                content = content.replace(genericRegex, imgUrl);
                fs.writeFileSync(filePath, content, 'utf8');
                successCount++;
                console.log(`[${i+1}/${files.length}] Success: ${query} -> ${imgUrl}`);
            }
        } else {
            console.log(`[${i+1}/${files.length}] Failed to find image for: ${query}`);
            failCount++;
        }
    }
    
    console.log(`\nDone! Replaced ${successCount} images with fast static Wikipedia URLs.`);
}

run();

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            if (fs.statSync(dirFile).isDirectory()) {
                if (!dirFile.includes('node_modules') && !dirFile.includes('.git') && !dirFile.includes('.vercel')) {
                    filelist = walkSync(dirFile, filelist);
                }
            } else {
                if (dirFile.endsWith('.html')) {
                    filelist.push(dirFile);
                }
            }
        } catch (e) {
            // Ignore errors
        }
    });
    return filelist;
};

const htmlFiles = walkSync(__dirname);

function toTitleCase(str) {
    return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(content, { decodeEntities: false });
    let modified = false;

    // Fix 5: "Contact us" in footer
    $('footer a').each((i, el) => {
        const text = $(el).text().trim().toLowerCase();
        if (text === 'contact us') {
            $(el).text('Contact Neon Auto Transport');
            modified = true;
        }
    });

    $('a').each((i, el) => {
        const text = $(el).text().trim().toLowerCase();
        const href = $(el).attr('href') || '';
        
        // Skip footer links as they are handled above, unless it's one of the others
        const isFooter = $(el).closest('footer').length > 0;

        // Fix 6: "Get Quote" in service cards or anywhere
        if (text === 'get quote') {
            let contextTitle = '';
            // Try to find a heading in the closest card/container
            const card = $(el).closest('.stripe-card, .card, div[class*="card"], li, article');
            if (card.length > 0) {
                contextTitle = card.find('h2, h3, h4').first().text().trim();
            }
            if (!contextTitle) {
                // Try H1 of the page
                contextTitle = $('h1').first().text().trim();
            }
            
            // Clean up the title (e.g. remove "Auto Transport" if it's too long, but let's just use it)
            if (contextTitle) {
                // Ensure it doesn't get too crazy long, but "Get [Service Name] Quote"
                // If context is "Open Auto Transport", it becomes "Get Open Auto Transport Quote"
                $(el).text(`Get ${contextTitle} Quote`);
                modified = true;
            } else {
                $(el).text('Get an Instant Quote');
                modified = true;
            }
        }

        // Fix 2: "Read more" for blog posts
        if (text === 'read more') {
            let blogTitle = '';
            const card = $(el).closest('.stripe-card, .card, div[class*="card"], li, article');
            if (card.length > 0) {
                blogTitle = card.find('h2, h3, h4').first().text().trim();
            }
            if (!blogTitle && href.includes('/blog/')) {
                const slug = href.split('/').filter(Boolean).pop().replace('.html', '');
                blogTitle = toTitleCase(slug);
            }
            if (blogTitle) {
                $(el).text(blogTitle);
                modified = true;
            }
        }

        // Fix 4: "this page"
        if (text === 'this page') {
            let targetName = 'Our Website';
            if (href.startsWith('/')) {
                const slug = href.split('/').filter(Boolean).pop().replace('.html', '');
                targetName = toTitleCase(slug);
            }
            $(el).text(targetName);
            modified = true;
        }

        // Fix 3: "here" in the context of "Get a quote here"
        if (text === 'here') {
            // Need to check parent text node
            const parent = $(el).parent();
            const parentText = parent.text().toLowerCase();
            if (parentText.includes('get a quote here')) {
                $(el).text('Get an instant car shipping quote');
                // We should ideally remove "Get a quote " from the parent, 
                // but manipulating mixed text nodes in cheerio is tricky. 
                // We can do a string replace on the parent's HTML.
                const oldHtml = parent.html();
                const newHtml = oldHtml.replace(/Get a quote\s*<a/i, '<a');
                parent.html(newHtml);
                modified = true;
            } else if (parentText.includes('click here')) {
                 // Handled below, but just in case it's split
                 $(el).text('View Details');
                 const oldHtml = parent.html();
                 const newHtml = oldHtml.replace(/Click\s*<a/i, '<a');
                 parent.html(newHtml);
                 modified = true;
            } else {
                // Generic "here"
                if (href.includes('/contact/')) {
                    $(el).text('Contact Us');
                } else if (href.includes('cost-calculator')) {
                    $(el).text('Get an instant car shipping quote');
                } else {
                    $(el).text('Learn More About This');
                }
                const oldHtml = parent.html();
                const newHtml = oldHtml.replace(/(click |get a quote )?<a/i, '<a');
                parent.html(newHtml);
                modified = true;
            }
        }

        // Fix 1: "Click here"
        if (text === 'click here') {
            let newText = 'View Details';
            if (href.includes('/cost-calculator/')) newText = 'Get a Free Quote';
            else if (href.includes('/contact/')) newText = 'Contact Us Today';
            else if (href.includes('/locations/')) newText = 'View All Locations';
            else if (href.includes('/services/')) newText = 'View Our Services';
            else if (href.includes('/reviews/')) newText = 'Read Customer Reviews';
            else if (href.startsWith('/')) {
                const slug = href.split('/').filter(Boolean).pop().replace('.html', '');
                newText = `Explore ${toTitleCase(slug)}`;
            }
            $(el).text(newText);
            modified = true;
        }
    });

    if (modified) {
        // Beautify slightly if needed, or just dump
        fs.writeFileSync(file, $.html(), 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log('Finished updating bonus anchor texts site-wide!');

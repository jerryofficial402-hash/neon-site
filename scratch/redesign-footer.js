const fs = require('fs');
const path = require('path');

const newFooter = `    <footer class="bg-[#0a2540] text-slate-300 py-16 lg:py-24 border-t border-slate-800 relative overflow-hidden">
        <!-- Background Glow -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#635bff] to-transparent opacity-50"></div>
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-[#635bff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                <!-- Brand Column -->
                <div class="lg:col-span-2">
                    <a href="/" class="text-2xl font-black tracking-tight flex items-center gap-1 text-white mb-6 inline-block">
                        NEON <span class="text-[#00D1FF]">AUTO TRANSPORT</span>
                    </a>
                    <p class="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                        Fast, secure, and reliable nationwide auto transport. We connect you with a highly vetted carrier network to ensure your vehicle arrives safely and on time. Your Journey, Our Priority!
                    </p>
                    <div class="flex items-center gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61577115704216" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#635bff] hover:text-white hover:border-[#635bff] transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,91,255,0.4)]">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#635bff] hover:text-white hover:border-[#635bff] transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,91,255,0.4)]">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/neon-auto-transport" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#635bff] hover:text-white hover:border-[#635bff] transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,91,255,0.4)]">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="https://www.youtube.com/@neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                        <a href="https://www.tiktok.com/@neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#00f2fe] hover:text-black hover:border-[#00f2fe] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
                    <ul class="space-y-3 text-sm font-medium">
                        <li><a href="/" class="hover:text-[#00D1FF] transition-colors">Home</a></li>
                        <li><a href="/why-neon/" class="hover:text-[#00D1FF] transition-colors">Why Neon</a></li>
                        <li><a href="/services/" class="hover:text-[#00D1FF] transition-colors">Transport Services</a></li>
                        <li><a href="/reviews/" class="hover:text-[#00D1FF] transition-colors">Customer Reviews</a></li>
                        <li><a href="/insurance/" class="hover:text-[#00D1FF] transition-colors">Insurance Coverage</a></li>
                        <li><a href="/blog/" class="hover:text-[#00D1FF] transition-colors">Auto Transport Blog</a></li>
                        <li><a href="/faqs/" class="hover:text-[#00D1FF] transition-colors">FAQs</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Top Routes</h3>
                    <ul class="space-y-3 text-sm font-medium">
                        <li><a href="/routes/california-car-shipping/" class="hover:text-[#00D1FF] transition-colors">California Car Shipping</a></li>
                        <li><a href="/routes/florida-car-shipping/" class="hover:text-[#00D1FF] transition-colors">Florida Car Shipping</a></li>
                        <li><a href="/routes/texas-car-shipping/" class="hover:text-[#00D1FF] transition-colors">Texas Car Shipping</a></li>
                        <li><a href="/routes/new-york-car-shipping/" class="hover:text-[#00D1FF] transition-colors">New York Car Shipping</a></li>
                        <li><a href="/routes/illinois-car-shipping/" class="hover:text-[#00D1FF] transition-colors">Illinois Car Shipping</a></li>
                        <li><a href="/locations/" class="hover:text-[#39FF14] text-[#00D1FF] transition-colors mt-2 inline-block font-bold">View All States &rarr;</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h3 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h3>
                    <ul class="space-y-4 text-sm font-medium">
                        <li>
                            <a href="tel:5715767711" class="inline-flex items-center gap-2 text-[#39FF14] bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg font-black hover:bg-slate-800 hover:border-[#39FF14] transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> 
                                (571) 576-7711
                            </a>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <a href="mailto:info@neonautotransport.com" class="hover:text-[#00D1FF] transition-colors break-all">info@neonautotransport.com</a>
                        </li>
                        <li class="flex items-start gap-2 text-slate-400 leading-snug">
                            <svg class="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>2709 Neabsco Common Pl Suite 101<br>Woodbridge, VA 22191</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs font-medium gap-4">
                <div class="flex items-center gap-4 flex-wrap justify-center">
                    <span class="text-slate-400">&copy; 2026 Neon Auto Transport. All rights reserved.</span>
                    <span class="px-2 py-1 bg-slate-800 rounded text-slate-300">DOT: 4355879</span>
                    <span class="px-2 py-1 bg-slate-800 rounded text-slate-300">MC: 1703787</span>
                    <span class="px-2 py-1 bg-[#39FF14]/10 text-[#39FF14] rounded flex items-center gap-1 border border-[#39FF14]/20"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> FMCSA Approved</span>
                </div>
                <div class="flex items-center gap-6">
                    <a href="/privacy/" class="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms/" class="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>`;

function updateFooterInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the footer using regex
    // It starts with <footer and ends with </footer>
    const footerRegex = /<footer[\s\S]*?<\/footer>/i;
    
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, newFooter);
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;

    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            count += processDirectory(fullPath);
        } else if (fullPath.endsWith('.html')) {
            if (updateFooterInFile(fullPath)) {
                count++;
            }
        }
    }
    return count;
}

const rootDir = path.join(__dirname, '..');
const totalUpdated = processDirectory(rootDir);

console.log('Successfully redesigned and structured footer in ' + totalUpdated + ' HTML files.');

// Update templates
const generateRoutesJsPath = path.join(rootDir, 'routes/generate-routes-v2.js');
let templateContent = fs.readFileSync(generateRoutesJsPath, 'utf8');
const templateFooterRegex = /<footer[\s\S]*?<\/footer>/i;
if (templateFooterRegex.test(templateContent)) {
    templateContent = templateContent.replace(templateFooterRegex, newFooter);
    fs.writeFileSync(generateRoutesJsPath, templateContent, 'utf8');
    console.log('Updated template file: routes/generate-routes-v2.js');
}


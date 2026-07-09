const fs = require('fs');
const path = require('path');

const newFooter = `    <footer class="bg-[#0a2540] text-slate-300 py-20 lg:py-24 border-t border-slate-800 relative overflow-hidden">
        <!-- Background Glows -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-40"></div>
        <div class="absolute -top-60 -right-60 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[150px] opacity-[0.07] pointer-events-none"></div>
        <div class="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-[#39FF14] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
        
        <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <!-- 12 Column Grid Layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                
                <!-- Brand Column (Spans 4) -->
                <div class="lg:col-span-4 lg:pr-12">
                    <a href="/" class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-6 inline-block hover:opacity-90 transition-opacity">
                        NEON <span class="text-[#00D1FF]">AUTO TRANSPORT</span>
                    </a>
                    <p class="text-slate-400 text-[15px] leading-relaxed mb-8">
                        Fast, secure, and reliable nationwide auto transport. We connect you with a highly vetted carrier network to ensure your vehicle arrives safely and on time. Your Journey, Our Priority!
                    </p>
                    <div class="flex items-center gap-3">
                        <a href="https://www.facebook.com/profile.php?id=61577115704216" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-10 h-10 rounded-full bg-[#1a385a] border border-[#2a4d7a] flex items-center justify-center text-slate-400 hover:bg-[#635bff] hover:text-white hover:border-[#635bff] transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,91,255,0.4)] hover:-translate-y-1">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full bg-[#1a385a] border border-[#2a4d7a] flex items-center justify-center text-slate-400 hover:bg-[#635bff] hover:text-white hover:border-[#635bff] transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,91,255,0.4)] hover:-translate-y-1">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/neon-auto-transport" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-10 h-10 rounded-full bg-[#1a385a] border border-[#2a4d7a] flex items-center justify-center text-slate-400 hover:bg-[#635bff] hover:text-white hover:border-[#635bff] transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,91,255,0.4)] hover:-translate-y-1">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="https://www.youtube.com/@neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-10 h-10 rounded-full bg-[#1a385a] border border-[#2a4d7a] flex items-center justify-center text-slate-400 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:-translate-y-1">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Company Quick Links (Spans 2) -->
                <div class="lg:col-span-2">
                    <h3 class="text-white font-black mb-8 text-[13px] uppercase tracking-[0.15em] border-b border-[#1a385a] pb-3 inline-block">Company</h3>
                    <ul class="space-y-4 text-[15px] font-medium">
                        <li><a href="/why-neon/" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Why Neon</a></li>
                        <li><a href="/services/" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Transport Options</a></li>
                        <li><a href="/reviews/" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Customer Reviews</a></li>
                        <li><a href="/insurance/" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Insurance Coverage</a></li>
                        <li><a href="/blog/" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Shipping Blog</a></li>
                        <li><a href="/faqs/" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> FAQs</a></li>
                    </ul>
                </div>

                <!-- Top Routes (Spans 3) -->
                <div class="lg:col-span-3">
                    <h3 class="text-white font-black mb-8 text-[13px] uppercase tracking-[0.15em] border-b border-[#1a385a] pb-3 inline-block">Popular Routes</h3>
                    <ul class="space-y-4 text-[15px] font-medium">
                        <li><a href="/routes/california-car-shipping.html" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> California Car Shipping</a></li>
                        <li><a href="/routes/florida-car-shipping.html" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Florida Car Shipping</a></li>
                        <li><a href="/routes/texas-car-shipping.html" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Texas Car Shipping</a></li>
                        <li><a href="/routes/new-york-car-shipping.html" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> New York Car Shipping</a></li>
                        <li><a href="/routes/illinois-car-shipping.html" class="text-slate-400 flex items-center gap-2 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 group"><span class="text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span> Illinois Car Shipping</a></li>
                        <li class="pt-2"><a href="/locations.html" class="text-[#39FF14] hover:text-[#32e011] transition-colors inline-flex items-center gap-1 font-bold">View All 50 States <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></li>
                    </ul>
                </div>

                <!-- Contact (Spans 3) -->
                <div class="lg:col-span-3">
                    <h3 class="text-white font-black mb-8 text-[13px] uppercase tracking-[0.15em] border-b border-[#1a385a] pb-3 inline-block">Contact Support</h3>
                    <ul class="space-y-6 text-[15px] font-medium">
                        <li>
                            <a href="tel:5715767711" class="inline-flex items-center gap-3 text-[#39FF14] bg-[#1a385a] border border-[#2a4d7a] px-5 py-3 rounded-xl font-black hover:bg-[#2a4d7a] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:-translate-y-1">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> 
                                (571) 576-7711
                            </a>
                        </li>
                        <li class="flex items-start gap-3 text-slate-400 group">
                            <div class="w-8 h-8 rounded-full bg-[#1a385a] flex items-center justify-center shrink-0 group-hover:bg-[#00D1FF] group-hover:text-[#0a2540] transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <a href="mailto:info@neonautotransport.com" class="hover:text-[#00D1FF] transition-colors break-all mt-1">info@neonautotransport.com</a>
                        </li>
                        <li class="flex items-start gap-3 text-slate-400 group leading-relaxed">
                            <div class="w-8 h-8 rounded-full bg-[#1a385a] flex items-center justify-center shrink-0 group-hover:bg-[#00D1FF] group-hover:text-[#0a2540] transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <span class="mt-1">2709 Neabsco Common Pl<br>Suite 101<br>Woodbridge, VA 22191</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div class="pt-8 border-t border-[#1a385a] flex flex-col md:flex-row justify-between items-center text-[13px] font-medium gap-6">
                <div class="flex items-center gap-6 flex-wrap justify-center text-slate-400">
                    <span>&copy; 2026 Neon Auto Transport. All rights reserved.</span>
                    <div class="flex gap-4">
                        <span class="px-3 py-1.5 bg-[#1a385a] rounded-md text-slate-300 shadow-inner">DOT: 4355879</span>
                        <span class="px-3 py-1.5 bg-[#1a385a] rounded-md text-slate-300 shadow-inner">MC: 1703787</span>
                    </div>
                    <span class="px-3 py-1.5 bg-[#39FF14]/10 text-[#39FF14] rounded-md flex items-center gap-1.5 border border-[#39FF14]/20 shadow-[0_0_10px_rgba(57,255,20,0.1)]"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> FMCSA Approved</span>
                </div>
                <div class="flex items-center gap-8">
                    <a href="/privacy.html" class="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms.html" class="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>`;

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === 'css' || file === 'js' || file === 'images') continue;
        
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Replace existing footer. Existing footer starts with: <footer class="bg-[#0a2540] text-slate-300 py-12 lg:py-16
            const footerStartRegex = /<footer class="bg-\[#0a2540\][^>]*>/;
            const footerEndTag = '</footer>';
            
            const match = content.match(footerStartRegex);
            if (match) {
                const startIndex = match.index;
                const endIndex = content.indexOf(footerEndTag, startIndex);
                if (endIndex !== -1) {
                    const before = content.substring(0, startIndex);
                    const after = content.substring(endIndex + footerEndTag.length);
                    content = before + newFooter + after;
                    fs.writeFileSync(fullPath, content, 'utf8');
                }
            } else {
                // For safety, if it still uses the very old inline footer
                const oldInlineFooter = /<footer[^>]*>[\s\S]*?<\/footer>/;
                const match2 = content.match(oldInlineFooter);
                if(match2) {
                     content = content.replace(oldInlineFooter, newFooter);
                     fs.writeFileSync(fullPath, content, 'utf8');
                }
            }
        }
    }
}

processDirectory(path.join(__dirname, '..'));
console.log('Successfully redesigned and structured 12-column footer in all HTML files.');

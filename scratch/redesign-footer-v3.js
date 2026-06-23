const fs = require('fs');
const path = require('path');

const newFooter = `    <footer class="bg-[#0a2540] text-slate-300 py-16 lg:py-24 border-t border-slate-800 relative overflow-hidden" style="width: 100%;">
        <!-- Background Glows -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px opacity-40" style="background: linear-gradient(to right, transparent, #00d4ff, transparent);"></div>
        
        <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10" style="max-width: 1280px; margin: 0 auto;">
            <!-- Perfect Horizontal Flexbox Layout -->
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 3rem; margin-bottom: 4rem;">
                
                <!-- Brand Column -->
                <div style="flex: 1 1 300px; max-width: 400px;">
                    <a href="/" class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-6 inline-block" style="text-decoration: none;">
                        NEON <span style="color: #00D1FF;">AUTO TRANSPORT</span>
                    </a>
                    <p class="text-slate-400 text-[15px] leading-relaxed mb-8" style="line-height: 1.6; color: #94a3b8; font-size: 15px;">
                        Fast, secure, and reliable nationwide auto transport. We connect you with a highly vetted carrier network to ensure your vehicle arrives safely and on time. Your Journey, Our Priority!
                    </p>
                    <div style="display: flex; gap: 0.75rem; align-items: center;">
                        <a href="https://www.facebook.com/profile.php?id=61577115704216" target="_blank" rel="noopener noreferrer" style="width: 40px; height: 40px; border-radius: 50%; background: #1a385a; display: flex; align-items: center; justify-content: center; color: #94a3b8; text-decoration: none;">
                            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/neonautotransport" target="_blank" rel="noopener noreferrer" style="width: 40px; height: 40px; border-radius: 50%; background: #1a385a; display: flex; align-items: center; justify-content: center; color: #94a3b8; text-decoration: none;">
                            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Company Quick Links -->
                <div style="flex: 1 1 150px;">
                    <h3 style="color: white; font-weight: 900; margin-bottom: 1.5rem; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; border-bottom: 1px solid #1a385a; padding-bottom: 0.75rem; display: inline-block;">Company</h3>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; font-size: 15px;">
                        <li><a href="/why-neon/" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Why Neon</a></li>
                        <li><a href="/services/" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Transport Options</a></li>
                        <li><a href="/reviews/" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Customer Reviews</a></li>
                        <li><a href="/insurance/" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Insurance Coverage</a></li>
                        <li><a href="/blog/" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Shipping Blog</a></li>
                        <li><a href="/faqs/" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> FAQs</a></li>
                    </ul>
                </div>

                <!-- Top Routes -->
                <div style="flex: 1 1 200px;">
                    <h3 style="color: white; font-weight: 900; margin-bottom: 1.5rem; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; border-bottom: 1px solid #1a385a; padding-bottom: 0.75rem; display: inline-block;">Popular Routes</h3>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; font-size: 15px;">
                        <li><a href="/routes/california-car-shipping.html" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> California Car Shipping</a></li>
                        <li><a href="/routes/florida-car-shipping.html" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Florida Car Shipping</a></li>
                        <li><a href="/routes/texas-car-shipping.html" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Texas Car Shipping</a></li>
                        <li><a href="/routes/new-york-car-shipping.html" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> New York Car Shipping</a></li>
                        <li><a href="/routes/illinois-car-shipping.html" style="color: #94a3b8; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #00D1FF; font-size: 12px;">▶</span> Illinois Car Shipping</a></li>
                        <li style="padding-top: 0.5rem;"><a href="/locations.html" style="color: #39FF14; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 0.25rem;">View All 50 States <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div style="flex: 1 1 250px;">
                    <h3 style="color: white; font-weight: 900; margin-bottom: 1.5rem; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; border-bottom: 1px solid #1a385a; padding-bottom: 0.75rem; display: inline-block;">Contact Support</h3>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.5rem; font-size: 15px;">
                        <li>
                            <a href="tel:5715767711" style="display: inline-flex; align-items: center; gap: 0.75rem; color: #39FF14; background: #1a385a; border: 1px solid #2a4d7a; padding: 0.75rem 1.25rem; border-radius: 0.75rem; font-weight: 900; text-decoration: none; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                                <svg aria-hidden="true" style="width: 20px; height: 20px;" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> 
                                (571) 576-7711
                            </a>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.75rem; color: #94a3b8;">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: #1a385a; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                                <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <a href="mailto:info@neonautotransport.com" style="color: #94a3b8; text-decoration: none; word-break: break-all; margin-top: 4px;">info@neonautotransport.com</a>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.75rem; color: #94a3b8; line-height: 1.6;">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: #1a385a; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                                <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <span style="margin-top: 4px;">2709 Neabsco Common Pl<br>Suite 101<br>Woodbridge, VA 22191</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div style="padding-top: 2rem; border-top: 1px solid #1a385a; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 500; gap: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; color: #94a3b8;">
                    <span>&copy; 2026 Neon Auto Transport. All rights reserved.</span>
                    <div style="display: flex; gap: 1rem;">
                        <span style="padding: 0.25rem 0.75rem; background: #1a385a; border-radius: 0.375rem; color: #cbd5e1;">DOT: 4355879</span>
                        <span style="padding: 0.25rem 0.75rem; background: #1a385a; border-radius: 0.375rem; color: #cbd5e1;">MC: 1703787</span>
                    </div>
                    <span style="padding: 0.25rem 0.75rem; background: rgba(57,255,20,0.1); color: #39FF14; border-radius: 0.375rem; display: flex; align-items: center; gap: 0.375rem; border: 1px solid rgba(57,255,20,0.2);">
                        <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> FMCSA Approved
                    </span>
                </div>
                <div style="display: flex; align-items: center; gap: 2rem;">
                    <a href="/privacy.html" style="color: #94a3b8; text-decoration: none;">Privacy Policy</a>
                    <a href="/terms.html" style="color: #94a3b8; text-decoration: none;">Terms of Service</a>
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
            
            // Replace broken grid-cols-12 footer. Starts with: <footer class="bg-[#0a2540] text-slate-300 py-20 lg:py-24
            const footerStartRegex = /<footer class="bg-\[#0a2540\] text-slate-300 py-20 lg:py-24[^>]*>/;
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
                // Check if it's the v1 footer (<footer class="bg-[#0a2540] text-slate-300 py-16)
                const footerStartRegexV1 = /<footer class="bg-\[#0a2540\] text-slate-300 py-16[^>]*>/;
                const matchV1 = content.match(footerStartRegexV1);
                if (matchV1) {
                    const startIndex = matchV1.index;
                    const endIndex = content.indexOf(footerEndTag, startIndex);
                    if (endIndex !== -1) {
                        const before = content.substring(0, startIndex);
                        const after = content.substring(endIndex + footerEndTag.length);
                        content = before + newFooter + after;
                        fs.writeFileSync(fullPath, content, 'utf8');
                    }
                }
            }
        }
    }
}

processDirectory(path.join(__dirname, '..'));
console.log('Successfully replaced broken footer with perfectly aligned Flexbox footer.');

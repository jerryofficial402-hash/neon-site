const fs = require('fs');
const path = require('path');

const newFooter = `    <footer class="bg-[#0a2540] text-slate-300 py-12 lg:py-16 border-t border-slate-800 relative overflow-hidden" style="width: 100%;">
        <!-- Premium Ambient Glows -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px opacity-40" style="background: linear-gradient(to right, transparent, #00d4ff, transparent);"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div class="absolute top-20 -left-20 w-72 h-72 bg-[#39FF14] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"></div>
        
        <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10" style="max-width: 1280px; margin: 0 auto;">
            <!-- Perfect Horizontal Flexbox Layout -->
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 3rem; margin-bottom: 4rem;">
                
                <!-- Brand Column -->
                <div style="flex: 1 1 320px; max-width: 420px;">
                    <a href="/" class="text-3xl font-black tracking-tight flex items-center gap-2 text-white mb-6 inline-block transition-opacity hover:opacity-90" style="text-decoration: none; white-space: nowrap;">
                        NEON <span style="color: #00D1FF;">AUTO TRANSPORT</span>
                    </a>
                    <p class="text-[15px] leading-relaxed mb-8" style="color: #8ba3ba; font-weight: 400; line-height: 1.7;">
                        Fast, secure, and reliable nationwide auto transport. We connect you with a highly vetted carrier network to ensure your vehicle arrives safely and on time. Your Journey, Our Priority!
                    </p>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <a href="https://www.facebook.com/profile.php?id=61577115704216" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1" style="background: rgba(26,56,90,0.4); border: 1px solid rgba(255,255,255,0.05); color: #8ba3ba; text-decoration: none;" onmouseover="this.style.color='#00d4ff'; this.style.borderColor='rgba(0,212,255,0.3)'; this.style.boxShadow='0 0 15px rgba(0, 212, 255, 0.2)';" onmouseout="this.style.color='#8ba3ba'; this.style.borderColor='rgba(255,255,255,0.05)'; this.style.boxShadow='none';">
                            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1" style="background: rgba(26,56,90,0.4); border: 1px solid rgba(255,255,255,0.05); color: #8ba3ba; text-decoration: none;" onmouseover="this.style.color='#00d4ff'; this.style.borderColor='rgba(0,212,255,0.3)'; this.style.boxShadow='0 0 15px rgba(0, 212, 255, 0.2)';" onmouseout="this.style.color='#8ba3ba'; this.style.borderColor='rgba(255,255,255,0.05)'; this.style.boxShadow='none';">
                            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/neon-auto-transport" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1" style="background: rgba(26,56,90,0.4); border: 1px solid rgba(255,255,255,0.05); color: #8ba3ba; text-decoration: none;" onmouseover="this.style.color='#00d4ff'; this.style.borderColor='rgba(0,212,255,0.3)'; this.style.boxShadow='0 0 15px rgba(0, 212, 255, 0.2)';" onmouseout="this.style.color='#8ba3ba'; this.style.borderColor='rgba(255,255,255,0.05)'; this.style.boxShadow='none';">
                            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="https://www.youtube.com/@neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1" style="background: rgba(26,56,90,0.4); border: 1px solid rgba(255,255,255,0.05); color: #8ba3ba; text-decoration: none;" onmouseover="this.style.color='#ff0000'; this.style.borderColor='rgba(255,0,0,0.3)'; this.style.boxShadow='0 0 15px rgba(255, 0, 0, 0.2)';" onmouseout="this.style.color='#8ba3ba'; this.style.borderColor='rgba(255,255,255,0.05)'; this.style.boxShadow='none';">
                            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                        <a href="https://www.tiktok.com/@neonautotransport" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1" style="background: rgba(26,56,90,0.4); border: 1px solid rgba(255,255,255,0.05); color: #8ba3ba; text-decoration: none;" onmouseover="this.style.color='#00f2fe'; this.style.borderColor='rgba(0,242,254,0.3)'; this.style.boxShadow='0 0 15px rgba(0, 242, 254, 0.2)';" onmouseout="this.style.color='#8ba3ba'; this.style.borderColor='rgba(255,255,255,0.05)'; this.style.boxShadow='none';">
                            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Company Quick Links -->
                <div style="flex: 1 1 150px;">
                    <div style="margin-bottom: 2rem;">
                        <h3 style="color: white; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; margin: 0;">Company</h3>
                        <div style="width: 32px; height: 3px; background: #00D1FF; margin-top: 10px; border-radius: 3px; box-shadow: 0 0 10px rgba(0,209,255,0.4);"></div>
                    </div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; font-size: 15px; font-weight: 500;">
                        <li><a href="/why-neon/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Why Neon</a></li>
                        <li><a href="/services/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Transport Options</a></li>
                        <li><a href="/reviews/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Customer Reviews</a></li>
                        <li><a href="/insurance/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Insurance Coverage</a></li>
                        <li><a href="/blog/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Shipping Blog</a></li>
                        <li><a href="/faqs/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> FAQs</a></li>
                    </ul>
                </div>

                <!-- Top Routes -->
                <div style="flex: 1 1 200px;">
                    <div style="margin-bottom: 2rem;">
                        <h3 style="color: white; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; margin: 0;">Popular Routes</h3>
                        <div style="width: 32px; height: 3px; background: #00D1FF; margin-top: 10px; border-radius: 3px; box-shadow: 0 0 10px rgba(0,209,255,0.4);"></div>
                    </div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; font-size: 15px; font-weight: 500;">
                        <li><a href="/routes/california-car-shipping.html" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> California Shipping</a></li>
                        <li><a href="/routes/florida-car-shipping.html" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Florida Shipping</a></li>
                        <li><a href="/routes/texas-car-shipping.html" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Texas Shipping</a></li>
                        <li><a href="/routes/new-york-car-shipping.html" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> New York Shipping</a></li>
                        <li><a href="/routes/illinois-car-shipping.html" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Illinois Shipping</a></li>
                        <li style="padding-top: 0.5rem;"><a href="/locations.html" style="color: #39FF14; text-decoration: none; font-weight: 800; display: inline-flex; align-items: center; gap: 0.25rem; transition: all 0.3s;" onmouseover="this.style.color='#fff'; this.style.textShadow='0 0 10px rgba(57,255,20,0.5)';" onmouseout="this.style.color='#39FF14'; this.style.textShadow='none';">View All 50 States <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div style="flex: 1 1 250px;">
                    <div style="margin-bottom: 2rem;">
                        <h3 style="color: white; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; margin: 0;">Contact Support</h3>
                        <div style="width: 32px; height: 3px; background: #00D1FF; margin-top: 10px; border-radius: 3px; box-shadow: 0 0 10px rgba(0,209,255,0.4);"></div>
                    </div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.5rem; font-size: 15px; font-weight: 500;">
                        <li>
                            <a href="tel:5715767711" style="display: inline-flex; align-items: center; gap: 0.75rem; color: #0a2540; background: #39FF14; padding: 0.85rem 1.5rem; border-radius: 999px; font-weight: 900; text-decoration: none; box-shadow: 0 0 20px rgba(57,255,20,0.25); transition: all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 0 30px rgba(57,255,20,0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 0 20px rgba(57,255,20,0.25)';">
                                <svg aria-hidden="true" style="width: 18px; height: 18px;" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> 
                                (571) 576-7711
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@neonautotransport.com" style="display: flex; align-items: center; gap: 0.85rem; color: #8ba3ba; text-decoration: none; transition: all 0.3s; padding: 0.5rem 0;" onmouseover="this.style.color='#00D1FF';" onmouseout="this.style.color='#8ba3ba';">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(26,56,90,0.4); border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #00D1FF; box-shadow: inset 0 0 10px rgba(0,209,255,0.1);">
                                    <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <span style="word-break: break-all;">info@neonautotransport.com</span>
                            </a>
                        </li>
                        <li>
                            <div style="display: flex; align-items: flex-start; gap: 0.85rem; color: #8ba3ba; line-height: 1.6; padding: 0.5rem 0;">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(26,56,90,0.4); border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #00D1FF; box-shadow: inset 0 0 10px rgba(0,209,255,0.1); margin-top: 2px;">
                                    <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <span>2709 Neabsco Common Pl<br>Suite 101<br>Woodbridge, VA 22191</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div style="padding-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.05); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 500; gap: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; color: #8ba3ba;">
                    <span>&copy; 2026 Neon Auto Transport. All rights reserved.</span>
                    <div style="display: flex; gap: 1rem;">
                        <span style="padding: 0.35rem 0.85rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 999px; color: #94a3b8;">DOT: 4355879</span>
                        <span style="padding: 0.35rem 0.85rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 999px; color: #94a3b8;">MC: 1703787</span>
                    </div>
                    <span style="padding: 0.35rem 0.85rem; background: rgba(57,255,20,0.1); color: #39FF14; border-radius: 999px; display: flex; align-items: center; gap: 0.375rem; border: 1px solid rgba(57,255,20,0.2); box-shadow: 0 0 15px rgba(57,255,20,0.05);">
                        <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> FMCSA Approved
                    </span>
                </div>
                <div style="display: flex; align-items: center; gap: 2.5rem;">
                    <a href="/privacy.html" style="color: #8ba3ba; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#fff';" onmouseout="this.style.color='#8ba3ba';">Privacy Policy</a>
                    <a href="/terms.html" style="color: #8ba3ba; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#fff';" onmouseout="this.style.color='#8ba3ba';">Terms of Service</a>
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
            
            // Replace any version of the global footer
            const footerStartRegex = /<footer class="bg-\[#0a2540\] text-slate-300 py-16[^>]*>|<footer class="bg-\[#0a2540\] text-slate-300 py-20[^>]*>/;
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
            }
        }
    }
}

processDirectory(path.join(__dirname, '..'));
console.log('Successfully upgraded footer UI/UX with perfect brand alignment and beautiful aesthetics.');

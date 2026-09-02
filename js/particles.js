(function(){
function initParticles() {
    // Skip on mobile or low-power devices — canvas animation is decorative
    if (window.innerWidth < 768) return;
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    
    let width = 0, height = 0;
    let needsResize = true;
    let isVisible = true;
    let animationFrameId = null;

    function resizeCanvas() {
        const hero = document.getElementById("hero-section");
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        width = canvas.width = rect.width;
        height = canvas.height = rect.height;
        needsResize = false;
    }
    
    window.addEventListener("resize", () => { needsResize = true; }, { passive: true });
    resizeCanvas();
    
    // Optimized particle config for silky 60-120fps performance
    const particles = [];
    const maxParticles = 28;
    const connectionDistance = 130;
    const mouseDistance = 160;
    
    let mouse = { x: null, y: null };
    let mouseTicking = false;
    
    canvas.parentElement.addEventListener("mousemove", (e) => {
        if (!mouseTicking) {
            window.requestAnimationFrame(() => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
                mouseTicking = false;
            });
            mouseTicking = true;
        }
    }, { passive: true });
    
    canvas.parentElement.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    }, { passive: true });
    
    class Particle {
        constructor() {
            this.x = Math.random() * (width || 800);
            this.y = Math.random() * (height || 600);
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 1.5 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        if (!isVisible) return;

        if (needsResize) resizeCanvas();
        if (width === 0 || height === 0) {
            animationFrameId = requestAnimationFrame(animate);
            return;
        }
        
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            p1.update();
            p1.draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.hypot(dx, dy);
                
                if (dist < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    const opacity = 1 - (dist / connectionDistance);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.25})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
            
            if (mouse.x !== null && mouse.y !== null) {
                const dx = p1.x - mouse.x;
                const dy = p1.y - mouse.y;
                const dist = Math.hypot(dx, dy);
                
                if (dist < mouseDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    const opacity = 1 - (dist / mouseDistance);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isVisible = entry.isIntersecting;
            if (isVisible) {
                cancelAnimationFrame(animationFrameId);
                animate();
            } else {
                cancelAnimationFrame(animationFrameId);
            }
        });
    }, { threshold: 0.05 });
    
    observer.observe(canvas);
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initParticles();
} else {
    document.addEventListener('DOMContentLoaded', initParticles);
}
})();

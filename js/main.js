// js/main.js — Neon Auto Transport Main Website Script

function initDispatchNetwork() {
    const canvas = document.getElementById("dispatchNetwork");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.scale(ratio, ratio);

    window.addEventListener("resize", () => {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        reprojectMap();
    });

    const minLon = -125, maxLon = -66, minLat = 24, maxLat = 50;

    function projectCoords(lon, lat) {
        const padding = 100;
        const availableHeight = height - 200;
        return {
            x: padding + ((lon - minLon) / (maxLon - minLon)) * (width - 200),
            y: padding + (availableHeight - ((lat - minLat) / (maxLat - minLat)) * availableHeight)
        };
    }

    let mapGeoJson = null;
    let mapPaths = [];

    function reprojectMap() {
        if (!mapGeoJson) return;
        mapPaths = [];
        mapGeoJson.features.forEach(feature => {
            if (feature.properties.name !== "Alaska" && feature.properties.name !== "Hawaii" && feature.properties.name !== "Puerto Rico") {
                if (feature.geometry.type === "Polygon") {
                    const pts = feature.geometry.coordinates[0].map(pt => projectCoords(pt[0], pt[1]));
                    mapPaths.push(pts);
                } else if (feature.geometry.type === "MultiPolygon") {
                    feature.geometry.coordinates.forEach(poly => {
                        const pts = poly[0].map(pt => projectCoords(pt[0], pt[1]));
                        mapPaths.push(pts);
                    });
                }
            }
        });
    }

    fetch("https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json")
        .then(res => res.json())
        .then(data => {
            mapGeoJson = data;
            reprojectMap();
        })
        .catch(err => console.error("Could not load map data", err));

    const cities = [
        { name: "Seattle", lon: -122.33, lat: 47.6, pulse: 0 },
        { name: "San Francisco", lon: -122.41, lat: 37.77, pulse: 0 },
        { name: "Los Angeles", lon: -118.24, lat: 34.05, pulse: 0 },
        { name: "Denver", lon: -104.99, lat: 39.73, pulse: 0 },
        { name: "Dallas", lon: -96.79, lat: 32.77, pulse: 0 },
        { name: "Chicago", lon: -87.62, lat: 41.87, pulse: 0 },
        { name: "New York", lon: -74.00, lat: 40.71, pulse: 0 },
        { name: "Atlanta", lon: -84.38, lat: 33.74, pulse: 0 },
        { name: "Miami", lon: -80.19, lat: 25.76, pulse: 0 }
    ];

    const routes = [[0,3],[1,3],[2,4],[2,3],[3,5],[3,4],[4,7],[5,6],[5,7],[7,6],[7,8],[4,5],[0,1],[1,2]];
    const activeVehicles = [];
    const numVehicles = window.innerWidth > 768 ? 20 : 10;

    for (let i = 0; i < numVehicles; i++) {
        activeVehicles.push({
            routeIndex: Math.floor(Math.random() * routes.length),
            progress: Math.random(),
            speed: 0.002 + 0.003 * Math.random()
        });
    }

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

    function transformPoint(x, y, zOffset = 0) {
        let relX = x - width / 2;
        let relY = y - height / 2;
        const rotX = 1 + 0.2 * targetY;
        const rotY = 0.3 * targetX;
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        let px = relX * cosY - relY * sinY;
        let py = relX * sinY + relY * cosY;
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const depth = -py * sinX - zOffset * cosX + 700;
        if (depth <= 0) return { x: 0, y: 0, scale: 0 };
        const scale = 800 / depth;
        return {
            x: px * scale + width / 2,
            y: (py * cosX - zOffset * sinX) * scale + height / 2 + 20,
            scale: scale
        };
    }

    function drawMap() {
        if (mapPaths.length === 0) return;
        ctx.strokeStyle = "rgba(99, 91, 255, 0.1)";
        mapPaths.forEach(path => {
            ctx.beginPath();
            let started = false;
            path.forEach(pt => {
                const projected = transformPoint(pt.x, pt.y, 0);
                if (projected.scale > 0) {
                    ctx.lineWidth = 1 * projected.scale;
                    if (started) {
                        ctx.lineTo(projected.x, projected.y);
                    } else {
                        ctx.moveTo(projected.x, projected.y);
                        started = true;
                    }
                }
            });
            ctx.stroke();
        });
    }

    function renderFrame() {
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, width, height);

        targetX += 0.05 * (mouseX - targetX);
        targetY += 0.05 * (mouseY - targetY);

        drawMap();

        ctx.globalCompositeOperation = "screen";

        routes.forEach(route => {
            const startCity = cities[route[0]];
            const endCity = cities[route[1]];
            const p1 = projectCoords(startCity.lon, startCity.lat);
            const p2 = projectCoords(endCity.lon, endCity.lat);
            const arcHeight = 0.4 * Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

            ctx.beginPath();
            let started = false;
            for (let t = 0; t <= 1; t += 0.05) {
                const pt = transformPoint(
                    p1.x + (p2.x - p1.x) * t,
                    p1.y + (p2.y - p1.y) * t,
                    Math.sin(t * Math.PI) * arcHeight
                );
                if (pt.scale > 0) {
                    if (started) {
                        ctx.lineTo(pt.x, pt.y);
                    } else {
                        ctx.moveTo(pt.x, pt.y);
                        started = true;
                    }
                }
            }
            ctx.strokeStyle = "rgba(99, 91, 255, 0.2)";
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });

        cities.forEach(city => {
            const pt = projectCoords(city.lon, city.lat);
            const basePt = transformPoint(pt.x, pt.y, 0);
            const topPt = transformPoint(pt.x, pt.y, 40);

            if (basePt.scale > 0) {
                ctx.beginPath();
                ctx.moveTo(basePt.x, basePt.y);
                ctx.lineTo(topPt.x, topPt.y);

                const gradient = ctx.createLinearGradient(basePt.x, basePt.y, topPt.x, topPt.y);
                gradient.addColorStop(0, "rgba(0, 212, 255, 0.0)");
                gradient.addColorStop(1, "rgba(0, 212, 255, 0.4)");
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2 * basePt.scale;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(topPt.x, topPt.y, 3 * topPt.scale, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(99, 91, 255, 0.9)";
                if (city.pulse > 0) {
                    ctx.shadowBlur = 20 * topPt.scale * city.pulse;
                    ctx.shadowColor = "#00d4ff";
                    city.pulse -= 0.05;
                } else {
                    ctx.shadowBlur = 5 * topPt.scale;
                    ctx.shadowColor = "rgba(99, 91, 255, 0.5)";
                }
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        });

        activeVehicles.forEach(veh => {
            const startCity = cities[routes[veh.routeIndex][0]];
            const endCity = cities[routes[veh.routeIndex][1]];
            const p1 = projectCoords(startCity.lon, startCity.lat);
            const p2 = projectCoords(endCity.lon, endCity.lat);
            const arcHeight = 0.4 * Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
            const prog = veh.progress;

            const pt = transformPoint(
                p1.x + (p2.x - p1.x) * prog,
                p1.y + (p2.y - p1.y) * prog,
                Math.sin(prog * Math.PI) * arcHeight
            );

            if (pt.scale > 0) {
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 2.5 * pt.scale, 0, 2 * Math.PI);
                ctx.fillStyle = "#00d4ff";
                ctx.shadowBlur = 12 * pt.scale;
                ctx.shadowColor = "#00d4ff";
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            veh.progress += veh.speed;
            if (veh.progress >= 1) {
                endCity.pulse = 1;
                veh.progress = 0;
                veh.routeIndex = Math.floor(Math.random() * routes.length);
                veh.speed = 0.002 + 0.003 * Math.random();
            }
        });

        if (isCanvasVisible) {
            requestAnimationFrame(renderFrame);
        }
    }

    window.addEventListener("mousemove", e => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    let isCanvasVisible = true;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            isCanvasVisible = entry.isIntersecting;
            if (isCanvasVisible) {
                canvas.style.opacity = "1";
                renderFrame();
            } else {
                canvas.style.opacity = "0";
            }
        });
    }, { threshold: 0.1 });

    observer.observe(canvas);
}

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.add("js-loaded");

    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => el.classList.add("active"));
    }, 300);

    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: "0px 0px 50px 0px" });

    reveals.forEach(el => revealObserver.observe(el));

    // FAQ Accordion Buttons
    document.querySelectorAll(".faq-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".faq-icon");
            if (!content) return;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.opacity = "0";
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
                if (icon) {
                    icon.textContent = "+";
                    icon.classList.remove("text-[#1E90FF]");
                    icon.classList.add("text-[#00FFFF]");
                }
            } else {
                content.style.maxHeight = content.scrollHeight + 40 + "px";
                content.style.opacity = "1";
                content.style.paddingTop = "1rem";
                content.style.paddingBottom = "1rem";
                if (icon) {
                    icon.textContent = "−";
                    icon.classList.remove("text-[#00FFFF]");
                    icon.classList.add("text-[#1E90FF]");
                }
            }
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Hero Parallax Effect
    const parallaxEl = document.querySelector(".hero-parallax");
    if (parallaxEl) {
        window.addEventListener("scroll", () => {
            const scrollY = window.pageYOffset;
            parallaxEl.style.transform = `translateY(${0.4 * scrollY}px)`;
        });
    }

    // Lazy Init Dispatch Network Canvas
    if ("requestIdleCallback" in window) {
        requestIdleCallback(initDispatchNetwork);
    } else {
        setTimeout(initDispatchNetwork, 1);
    }
});
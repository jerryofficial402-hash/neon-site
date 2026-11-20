// Homepage "How it works": realistic WebGL fly-through. A car carrier (Freightliner Cascadia + car
// transport trailer, CC-BY models) drives along a road in a clean white studio, past five devices
// that show Neon screens. Built with esbuild into /js/journey3d.js (loaded lazily by journey.js).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export function initJourney3D(root, opts = {}) {
  const V = opts.v || '';
  const stage = root.querySelector('.nx-j3-gl');
  const hud = root.querySelector('.nx-j3-hud');
  const bars = [].slice.call(root.querySelectorAll('.nx-j3-progress i'));
  const playBtn = root.querySelector('.nx-j3-play');
  const items = [].slice.call(document.querySelectorAll('.nx-jr-steps li'));
  const reduce = opts.instant || window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- renderer / scene ----------
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  const mobile = window.innerWidth < 760;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.6 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  stage.appendChild(renderer.domElement);

  const BG = new THREE.Color('#eef2f7');
  const scene = new THREE.Scene();
  scene.background = BG;
  scene.fog = new THREE.Fog(BG, 55, 150);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.85;

  const camera = new THREE.PerspectiveCamera(32, 2, 0.5, 400);

  scene.add(new THREE.HemisphereLight('#ffffff', '#c9d3df', 0.9));
  const sun = new THREE.DirectionalLight('#fff6ea', 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -38, right: 38, top: 26, bottom: -26, near: 1, far: 140 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03; sun.shadow.radius = 4;
  scene.add(sun, sun.target);

  // ---------- ground, road ----------
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(900, 300), new THREE.MeshStandardMaterial({ color: '#f5f7fb', roughness: 0.92 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  const grid = new THREE.GridHelper(900, 300, '#dde4ec', '#e6ebf2');
  grid.position.y = 0.002; grid.material.transparent = true; grid.material.opacity = 0.55; scene.add(grid);

  const ROAD_W = 9;
  const road = new THREE.Mesh(new THREE.PlaneGeometry(900, ROAD_W), new THREE.MeshStandardMaterial({ color: '#3b4250', roughness: 0.82, metalness: 0.05 }));
  road.rotation.x = -Math.PI / 2; road.position.y = 0.01; road.receiveShadow = true; scene.add(road);
  const lineMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.6 });
  for (const z of [-ROAD_W / 2 + 0.35, ROAD_W / 2 - 0.35]) {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(900, 0.18), lineMat);
    l.rotation.x = -Math.PI / 2; l.position.set(0, 0.015, z); l.receiveShadow = true; scene.add(l);
  }
  const dashGeo = new THREE.PlaneGeometry(3, 0.16);
  const dashes = new THREE.InstancedMesh(dashGeo, new THREE.MeshStandardMaterial({ color: '#ffd35c', roughness: 0.6 }), 150);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
  for (let i = 0; i < 150; i++) { m4.compose(new THREE.Vector3(-150 + i * 6, 0.016, 0), q, new THREE.Vector3(1, 1, 1)); dashes.setMatrixAt(i, m4); }
  dashes.receiveShadow = true; scene.add(dashes);
  // curbs
  const curbMat = new THREE.MeshStandardMaterial({ color: '#dfe5ec', roughness: 0.7 });
  for (const z of [-ROAD_W / 2 - 0.25, ROAD_W / 2 + 0.25]) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(900, 0.16, 0.5), curbMat);
    c.position.set(0, 0.08, z); c.receiveShadow = true; c.castShadow = true; scene.add(c);
  }

  // ---------- devices ----------
  const STEP = 42, DEV_Z = -11, LANE_Z = 2.2, DEV_S = 1.3;
  const STATIONS = [0, 1, 2, 3, 4].map(i => i * STEP);
  const tl = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  function screenMat(i) {
    const t = tl.load(`/images/3d/screen-${i + 1}.webp?v=${V}`);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso;
    return new THREE.MeshBasicMaterial({ map: t, toneMapped: false });
  }
  const alu = new THREE.MeshStandardMaterial({ color: '#c4cad3', metalness: 0.85, roughness: 0.32 });
  const darkAlu = new THREE.MeshStandardMaterial({ color: '#5b6370', metalness: 0.8, roughness: 0.35 });
  const bezel = new THREE.MeshStandardMaterial({ color: '#0d1117', metalness: 0.3, roughness: 0.25 });
  function shadowAll(o) { o.traverse(m => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); return o; }
  function panel(w, h, d, r, i, bez = 0.18) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), bezel); g.add(body);
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(w - bez * 2, h - bez * 2), screenMat(i));
    scr.position.z = d / 2 + 0.006; g.add(scr);
    shadowAll(body); return g;
  }
  function laptop(i) {
    const g = new THREE.Group();
    const W = 8.2, D = 5.6;
    const base = new THREE.Mesh(new RoundedBoxGeometry(W, 0.28, D, 4, 0.12), alu); base.position.y = 0.14; g.add(base);
    const kb = new THREE.Mesh(new THREE.BoxGeometry(W * 0.86, 0.02, D * 0.42), darkAlu); kb.position.set(0, 0.29, -0.55); g.add(kb);
    const pad = new THREE.Mesh(new THREE.BoxGeometry(W * 0.3, 0.02, D * 0.26), new THREE.MeshStandardMaterial({ color: '#b7bec8', metalness: .7, roughness: .4 })); pad.position.set(0, 0.29, 1.65); g.add(pad);
    const lid = new THREE.Group(); lid.position.set(0, 0.28, -D / 2 + 0.05); lid.rotation.x = -0.2;
    const l = panel(W, 5.25, 0.16, 0.1, i, 0.22); l.position.y = 5.25 / 2; lid.add(l);
    const back = new THREE.Mesh(new RoundedBoxGeometry(W, 5.25, 0.08, 4, 0.04), alu); back.position.set(0, 5.25 / 2, -0.1); lid.add(back);
    g.add(lid); return shadowAll(g);
  }
  function monitor(i) {
    const g = new THREE.Group();
    const p = panel(9.6, 6.0, 0.3, 0.12, i, 0.2); p.position.y = 5.0; g.add(p);
    const neck = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.4, 0.28), alu); neck.position.set(0, 1.4, -0.35); g.add(neck);
    const foot = new THREE.Mesh(new RoundedBoxGeometry(3.6, 0.22, 2.6, 4, 0.1), alu); foot.position.set(0, 0.11, 0); g.add(foot);
    return shadowAll(g);
  }
  function tablet(i) {
    const g = new THREE.Group();
    const p = panel(6.6, 5.0, 0.22, 0.4, i, 0.26); p.position.y = 3.7; p.rotation.x = -0.18; g.add(p);
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.4, 0.16), alu); leg.position.set(0, 1.7, -1.3); leg.rotation.x = 0.42; g.add(leg);
    const foot = new THREE.Mesh(new RoundedBoxGeometry(5.2, 0.2, 2.6, 4, 0.09), alu); foot.position.set(0, 0.1, -0.4); g.add(foot);
    return shadowAll(g);
  }
  function phone(i) {
    const g = new THREE.Group();
    const p = panel(3.1, 6.6, 0.26, 0.42, i, 0.14); p.position.y = 4.0; p.rotation.x = -0.08; g.add(p);
    const puck = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.2, 0.32, 48), alu); puck.position.y = 0.16; g.add(puck);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.0, 0.4), alu); arm.position.set(0, 0.75, -0.1); g.add(arm);
    return shadowAll(g);
  }
  const makers = [laptop, monitor, tablet, phone, phone];
  const devs = STATIONS.map((x, i) => {
    const d = makers[i](i); d.position.set(x, 0, DEV_Z); d.rotation.y = 0.1; d.scale.setScalar(DEV_S * (i >= 3 ? 1.3 : i === 2 ? 1.12 : 1)); scene.add(d); return d;
  });
  // floor ring under the active device
  const ringMat = new THREE.MeshBasicMaterial({ color: '#1d6fd8', transparent: true, opacity: 0, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(7.4, 7.8, 96), ringMat);
  ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.02, DEV_Z + 0.5); scene.add(ring);
  // floor print: step number + title in front of each device
  const titles = items.map(li => (li.querySelector('b') || {}).textContent || '');
  STATIONS.forEach((x, i) => {
    const c = document.createElement('canvas'); c.width = 1024; c.height = 160;
    const g = c.getContext('2d');
    g.font = '800 92px Geist, Inter, Arial, sans-serif'; g.fillStyle = 'rgba(29,111,216,.9)';
    g.fillText(String(i + 1).padStart(2, '0'), 8, 112);
    g.font = '700 74px Geist, Inter, Arial, sans-serif'; g.fillStyle = 'rgba(10,37,64,.78)';
    g.fillText(titles[i] || '', 150, 108);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 1.5), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity: 0.9 }));
    m.rotation.x = -Math.PI / 2; m.position.set(x + 0.6, 0.02, DEV_Z + 5.2); scene.add(m);
  });

  // ---------- truck + trailer ----------
  const rig = new THREE.Group(); scene.add(rig);
  const wheels = [];
  function fit(obj, { up = 0, rotY = 0, height }) {
    const holder = new THREE.Group(); holder.add(obj);
    obj.rotation.y = rotY;
    let box = new THREE.Box3().setFromObject(holder);
    if (height) { const s = height / (box.max.y - box.min.y); obj.scale.multiplyScalar(s); box = new THREE.Box3().setFromObject(holder); }
    const c = box.getCenter(new THREE.Vector3());
    obj.position.x -= c.x; obj.position.z -= c.z; obj.position.y -= box.min.y + up;
    holder.userData.box = new THREE.Box3().setFromObject(holder);
    return holder;
  }
  const PAINT = new THREE.Color(opts.paint || '#1f5fbf');
  function repaint(mat) {
    if (mat.userData.rp) return; mat.userData.rp = 1;
    mat.onBeforeCompile = sh => {
      sh.uniforms.uPaint = { value: PAINT };
      sh.fragmentShader = 'uniform vec3 uPaint;\n' + sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
        { vec3 c = diffuseColor.rgb; float r = c.r, o = max(c.g, c.b);
          float k = smoothstep(1.6, 2.6, r / max(o, 0.02)) * step(0.08, r);
          diffuseColor.rgb = mix(c, uPaint * clamp(r * 1.6, 0.25, 1.15), k); }`);
    };
    mat.needsUpdate = true;
  }
  function prep(o, paint) {
    o.traverse(m => {
      if (!m.isMesh) return;
      if (paint) [].concat(m.material).forEach(repaint);
      m.castShadow = true; m.receiveShadow = true;
      const n = (m.name + ' ' + (m.material && m.material.name || '')).toLowerCase();
      if (/wheel|tire|tyre|rim/.test(n)) wheels.push(m);
    });
  }
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  const load = u => new Promise((res, rej) => loader.load(u, g => res(g.scene), undefined, rej));

  let ready = false;
  Promise.all([load(`/models/truck.glb?v=${V}`), load(`/models/trailer.glb?v=${V}`)]).then(([truck, trailer]) => {
    prep(truck, true); prep(trailer);
    const T = fit(truck, { rotY: opts.truckRot != null ? opts.truckRot : Math.PI / 2, height: 4.1 });
    const R = fit(trailer, { rotY: opts.trailerRot || 0, height: 4.15 });
    const tb = T.userData.box, rb = R.userData.box;
    const tLen = tb.max.x - tb.min.x, rLen = rb.max.x - rb.min.x;
    T.position.x = -tLen / 2;                       // cab front at rig x = 0
    R.position.x = -tLen + (opts.hitch != null ? opts.hitch : 3.4) - rLen / 2;
    rig.add(T, R);
    rig.userData.len = tLen + rLen - (opts.hitch != null ? opts.hitch : 3.4);
    ready = true; root.classList.add('is-ready');
    start();
  }).catch(e => { root.classList.add('is-failed'); console.error('journey3d', e); });

  // ---------- camera rig / timeline ----------
  const PARK = 23;                // cab front this far past the station, so the cars sit in front of the device
  const DRIVE = 3200, DWELL = 5600;
  let step = 0, playing = !reduce, visible = true, started = false, timer = null;
  let rigX = STATIONS[0] - 80, camX = STATIONS[0] - 30, tween = null, t0 = performance.now();
  const look = new THREE.Vector3(), camPos = new THREE.Vector3();
  function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function size() {
    const w = stage.clientWidth, h = stage.clientHeight || 1;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = camera.aspect < 1.2 ? 40 : 32; camera.updateProjectionMatrix();
  }
  size(); window.addEventListener('resize', size);

  let lastWheel = 0;
  function frame(now) {
    raf = null;
    let moving = 0;
    if (tween) {
      const k = Math.min(1, (now - tween.start) / tween.dur), e = ease(k);
      const prevRig = rigX;
      rigX = tween.r0 + (tween.r1 - tween.r0) * e;
      camX = tween.c0 + (tween.c1 - tween.c0) * ease(Math.min(1, k * 1.04));
      moving = rigX - prevRig;
      if (k >= 1) { const cb = tween.done; tween = null; if (cb) cb(); }
    }
    rig.position.set(rigX, 0, LANE_Z);
    rig.position.y = moving ? Math.sin(now / 90) * 0.012 : 0;
    if (wheels.length && moving) { for (const w of wheels) w.rotation.x -= moving / 0.55; }
    const a = camera.aspect, tall = a < 1.2;
    const far = tall ? THREE.MathUtils.clamp(26 / a, 30, 44) : THREE.MathUtils.clamp(31 * Math.pow(2.0 / a, 0.8), 31, 70);
    const idle = reduce ? 0 : Math.sin((now - t0) / 3200);
    camPos.set(camX + (tall ? 6 : 3) + idle * 1.4, tall ? 8 : 11.5, far);
    look.set(camX + (tall ? 5 : 6.5), tall ? 6.2 : 4.0, tall ? -6 : -3.5);
    camera.position.lerp(camPos, started ? 0.12 : 1);
    if (reduce) camera.position.copy(camPos);
    camera.lookAt(look);
    sun.position.set(camX + 26, 42, 30); sun.target.position.set(camX, 0, -4);
    ringMat.opacity += ((root.dataset.lit === '1' ? 0.85 : 0) - ringMat.opacity) * 0.08;
    renderer.render(scene, camera);
    if (visible && (playing || tween || Math.abs(camera.position.x - camPos.x) > 0.01)) raf = requestAnimationFrame(frame);
  }
  let raf = null;
  function loop() { if (!raf) raf = requestAnimationFrame(frame); }

  function drive(toStation, dur, done) {
    const r1 = STATIONS[toStation] + PARK, c1 = STATIONS[toStation];
    if (reduce) { rigX = r1; camX = c1; loop(); if (done) done(); return; }
    tween = { r0: rigX, r1, c0: camX, c1, start: performance.now(), dur, done };
    root.dataset.lit = '0'; loop();
  }
  function show(i) {
    ring.position.x = STATIONS[i] + 0.3; root.dataset.lit = '1';
    const li = items[i];
    if (li) {
      hud.querySelector('.nx-j3-num').textContent = i + 1;
      hud.querySelector('b').textContent = li.querySelector('b').textContent;
      hud.querySelector('p').textContent = li.querySelector('.nx-jr-t').textContent;
    }
    hud.classList.remove('is-out');
    bars.forEach((b, k) => { b.classList.toggle('is-done', k < i); b.classList.remove('is-on'); });
    void root.offsetWidth;
    root.style.setProperty('--dwell', DWELL + 'ms');
    if (bars[i]) bars[i].classList.add(playing ? 'is-on' : 'is-done');
    items.forEach((s, k) => s.classList.toggle('is-on', k === i));
    root.setAttribute('data-step', i);
    loop();
  }
  function clear() { clearTimeout(timer); timer = null; }
  function go(i) {
    clear(); step = i; hud.classList.add('is-out');
    drive(i, DRIVE, () => { show(i); if (playing && visible) timer = setTimeout(next, DWELL); });
  }
  function next() {
    if (step < STATIONS.length - 1) return go(step + 1);
    clear(); hud.classList.add('is-out'); root.dataset.lit = '0';
    // drive off to the right, then come back in from the left
    tween = { r0: rigX, r1: rigX + 70, c0: camX, c1: camX + 20, start: performance.now(), dur: 2600, done: () => { rigX = STATIONS[0] - 70; camX = STATIONS[0] - 30; camera.position.x = camX + 5; go(0); } };
    loop();
  }
  function setPlaying(p) {
    playing = p; root.classList.toggle('is-paused', !p);
    playBtn.setAttribute('aria-label', p ? 'Pause animation' : 'Play animation');
    clear(); if (p && visible && !tween) timer = setTimeout(next, 1500);
    loop();
  }
  playBtn.addEventListener('click', () => setPlaying(!playing));
  items.forEach((li, k) => li.querySelector('button').addEventListener('click', () => { setPlaying(false); if (ready) go(k); }));
  function start() { if (started || !ready) return; started = true; if (reduce) root.classList.add('is-paused'); go(opts.step || 0); }
  function setVisible(v) {
    if (v === visible) return;
    visible = v;
    if (v) { loop(); if (started && playing && !timer && !tween) timer = setTimeout(next, 1200); } else clear();
  }
  function checkVis() { const r = root.getBoundingClientRect(), h = window.innerHeight || 800; setVisible(r.bottom > 0 && r.top < h); }
  if ('IntersectionObserver' in window) new IntersectionObserver(es => setVisible(es[0].isIntersecting), { threshold: 0 }).observe(root);
  window.addEventListener('scroll', checkVis, { passive: true });
  window.addEventListener('resize', checkVis);
  checkVis();
  loop();
  return { go, setPlaying };
}

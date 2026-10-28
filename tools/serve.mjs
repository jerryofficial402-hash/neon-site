// Local preview that mimics Vercel cleanUrls + trailingSlash. /api/leads is mocked:
// payloads are appended to tools/out/leads.log and never forwarded to the real CRM.
// node tools/serve.mjs [port]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = +(process.argv[2] || 4173);
// Serve the site folder (parent of tools/) whatever directory this is started from
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
process.chdir(ROOT);
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.md': 'text/markdown', '.mp4': 'video/mp4', '.avif': 'image/avif', '.woff2': 'font/woff2' };

function file(p) { try { return fs.statSync(p).isFile() ? p : null; } catch { return null; } }
function resolve(urlPath) {
  const rel = decodeURIComponent(urlPath).replace(/^\/+/, '');
  const base = path.join(ROOT, rel);
  if (path.extname(rel)) return file(base);
  const clean = rel.replace(/\/$/, '');
  return file(path.join(ROOT, clean + '.html')) || file(path.join(ROOT, clean, 'index.html'));
}
function rewrite(p) {
  for (const r of vercel.rewrites || []) {
    if (r.has || r.destination.startsWith('/api/gone')) continue;
    if (r.source === p || r.source + '/' === p) return r.destination;
  }
  return p;
}

http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  let p = u.pathname;
  if (p.replace(/\/$/, '') === '/api/leads') {
    let body = '';
    req.on('data', c => (body += c));
    req.on('end', () => {
      fs.mkdirSync('tools/out', { recursive: true });
      fs.appendFileSync('tools/out/leads.log', JSON.stringify({ at: new Date().toISOString(), body: JSON.parse(body || '{}') }) + '\n');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, leadId: 'mock', message: 'mock lead stored locally' }));
    });
    return;
  }
  if (p.startsWith('/api/')) { res.writeHead(200, { 'Content-Type': 'application/json' }); res.end('{"reply":"(chat disabled in local preview)"}'); return; }
  for (const r of vercel.redirects || []) {
    if (!/[(:*]/.test(r.source) && (r.source === p || r.source + '/' === p)) { res.writeHead(r.permanent === false ? 307 : 308, { Location: r.destination }); res.end(); return; }
  }
  if (!path.extname(p) && !p.endsWith('/')) { res.writeHead(308, { Location: p + '/' + u.search }); res.end(); return; }
  p = rewrite(p);
  const f = resolve(p);
  if (!f) { res.writeHead(404, { 'Content-Type': 'text/html' }); res.end(fs.existsSync('404.html') ? fs.readFileSync('404.html') : 'Not found'); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(f).pipe(res);
}).listen(PORT, () => console.log('preview on http://localhost:' + PORT));

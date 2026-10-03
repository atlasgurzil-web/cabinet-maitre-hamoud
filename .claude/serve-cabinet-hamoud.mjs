import http from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = normalize('c:/Users/TOSHIBA/Desktop/hamoud archi/cabinet-hamoud');
const PORT = process.env.PORT || 4385;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.json': 'application/json'
};

http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://localhost');
    let path = decodeURIComponent(u.pathname);
    if (path === '/__iframe_test') {
      const w = parseInt(u.searchParams.get('w') || '375', 10);
      const h = parseInt(u.searchParams.get('h') || '812', 10);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(`<!DOCTYPE html><html><body style="margin:0;background:#000"><iframe id="f" src="/" width="${w}" height="${h}" style="border:0;display:block"></iframe></body></html>`);
      return;
    }
    if (path === '/__contact_sheet') {
      const files = (await readdir(join(ROOT, 'images'))).filter(f => f.endsWith('.jpg')).sort();
      const cards = files.map(f => `<div style="background:#1c1b18;padding:8px;border-radius:4px;color:#eee;font-family:monospace;font-size:11px"><img src="/images/${f}" style="width:100%;height:auto;display:block;margin-bottom:6px" onload="this.nextElementSibling.textContent=this.naturalWidth+'×'+this.naturalHeight"><div>${f} — <span class="dim">...</span></div></div>`).join('');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(`<!DOCTYPE html><html><body style="margin:20px;background:#111;color:#fff;font-family:sans-serif"><h2>Planche-contact — Cabinet Hamoud (40 visuels Unsplash)</h2><div style="display:grid;grid-template-columns:repeat(6,1fr);gap:12px">${cards}</div></body></html>`);
      return;
    }
    if (path === '/') path = '/index.html';
    const file = normalize(join(ROOT, path));
    if (!file.toLowerCase().startsWith(ROOT.toLowerCase())) throw new Error('forbidden');
    const data = await readFile(file);
    res.writeHead(200, {
      'Content-Type': MIME[extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(PORT, () => console.log(`Cabinet Hamoud dev server on http://localhost:${PORT}`));

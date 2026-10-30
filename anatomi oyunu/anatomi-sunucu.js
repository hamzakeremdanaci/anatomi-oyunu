/* İnsan Anatomisi — yerel ve Wi-Fi üzerinden paylaşım sunucusu
   Yalnızca sitenin dosyalarını servis eder; klasördeki diğer projelere erişim vermez. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = __dirname;
const IMAGES = path.join(ROOT, 'images');
const PORT = Number(process.env.PORT || 4322);

const ALLOWED = new Set(['/index.html', '/data.js', '/app.js']);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function resolveFile(urlPath) {
  let clean;
  try {
    clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  } catch {
    return null;
  }
  if (clean === '/' || clean === '') return path.join(ROOT, 'index.html');
  if (ALLOWED.has(clean)) return path.join(ROOT, clean.slice(1));
  if (clean.startsWith('/images/')) {
    const file = path.normalize(path.join(ROOT, clean));
    if (file.startsWith(IMAGES + path.sep)) return file;
  }
  return null;
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url);
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Bulunamadı');
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Bulunamadı');
    }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(data);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('');
    console.log('  Port ' + PORT + ' zaten kullanımda.');
    console.log('  Sunucu zaten açık olabilir. Tarayıcıdan şunu dene:');
    console.log('  http://localhost:' + PORT);
    console.log('');
  } else {
    console.error(err);
  }
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = Object.values(os.networkInterfaces())
    .flat()
    .filter(i => i && i.family === 'IPv4' && !i.internal)
    .map(i => i.address);

  console.log('');
  console.log('  İnsan Anatomisi hazır!');
  console.log('  Bu bilgisayar : http://localhost:' + PORT);
  ips.forEach(ip => console.log('  Aynı Wi-Fi     : http://' + ip + ':' + PORT));
  console.log('');
  console.log('  Kapatmak için bu pencereyi kapat veya Ctrl+C.');
});

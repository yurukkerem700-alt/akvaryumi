// Kök dizindeki web oyununu store/www içine kopyalar ve Three.js'i yerel dosyaya bağlar (çevrimdışı çalışma, CDN yok).
import { cp, rm, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const www = path.resolve(here, '../www');
await rm(www, { recursive: true, force: true });
await mkdir(www, { recursive: true });
for (const f of ['index.html','expedition.css','ocean.mjs','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','cover.webp','screenshot.webp','og-image.jpg','privacy.html','version.json'])
  await cp(path.join(root, f), path.join(www, f));
// Three.js yerel kopya
const three = path.resolve(here, '../node_modules/three');
await cp(path.join(three, 'build'), path.join(www, 'vendor/three/build'), { recursive: true });
await cp(path.join(three, 'examples/jsm'), path.join(www, 'vendor/three/examples/jsm'), { recursive: true });
let html = await readFile(path.join(www, 'index.html'), 'utf8');
const cdn = 'https://cdn.jsdelivr.net/npm/three@0.180.0/';
html = html.split(cdn + 'build/').join('./vendor/three/build/').split(cdn + 'examples/jsm/').join('./vendor/three/examples/jsm/');
html = html.replace('<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>', '');
// Service worker mağaza paketinde gereksiz (dosyalar uygulamayla gelir); sw.js kopyalanmaz.
await writeFile(path.join(www, 'index.html'), html);
const left = (html.match(/cdn\.jsdelivr\.net\/npm\/three/g) || []).length; // PeerJS yalnızca çevrimiçi çok oyunculuda tembel yüklenir
console.log('www hazır; kalan CDN başvurusu:', left);
if (left) process.exitCode = 1;

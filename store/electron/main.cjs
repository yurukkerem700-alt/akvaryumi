// Steam / masaüstü kabuğu. file:// altında ES modülleri çalışmadığı için www klasörü özel app:// şemasıyla sunulur.
const { app, BrowserWindow, session, protocol, net } = require('electron');
const path = require('node:path');
const fs = require('node:fs');
const { pathToFileURL } = require('node:url');
let steam = null;
try { steam = require('steamworks.js').init(Number(process.env.STEAM_APP_ID) || undefined); } catch { /* Steam yoksa bağımsız çalışır */ }
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }]);
const www = fs.existsSync(path.join(__dirname, '../www')) ? path.join(__dirname, '../www') : path.join(process.resourcesPath, 'www');
function create() {
  const win = new BrowserWindow({ width: 1600, height: 900, backgroundColor: '#04202e', autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true, nodeIntegration: false } });
  win.loadURL('app://game/index.html');
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('app://game/')) e.preventDefault(); });
  if (process.env.AKVARYUM_SMOKE) win.webContents.on('did-finish-load', () => setTimeout(() => { win.webContents.executeJavaScript('document.title+"|"+!!document.querySelector("canvas")').then(r => { console.log('SMOKE', r); app.quit(); }); }, 6000));
}
app.whenReady().then(() => {
  protocol.handle('app', req => {
    const rel = decodeURIComponent(new URL(req.url).pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.normalize(path.join(www, rel));
    if (!file.startsWith(www)) return new Response('forbidden', { status: 403 });
    return net.fetch(pathToFileURL(file).toString());
  });
  session.defaultSession.setPermissionRequestHandler((_w, _p, cb) => cb(false));
  create();
  app.on('activate', () => BrowserWindow.getAllWindows().length || create());
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

// electron/main.cjs
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const Store = require("electron-store");

//Init data store
const store = new Store({
  encryptionKey: process.env.ENCRYPTION_KEY,
  name : 'user-preferences'
})

const setupIPC = () => {
  ipcMain.handle("get-connection-string", () => {
    return store.get('connectionString', '');
  })

  ipcMain.handle('save-connection-string', async (event, value) => {
    store.set('connectionString', value);
    return true; // Return success
  });
}

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      // 2. UPDATE THIS LINE
      preload: path.join(__dirname, 'preload.cjs') 
    },
    autoHideMenuBar: true
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }
}

app.whenReady().then(() => {
  setupIPC();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Get the main window to control it
function getMainWindow() {
  return BrowserWindow.getAllWindows()[0];
}

ipcMain.handle('minimize-window', () => {
  getMainWindow()?.minimize();
});

ipcMain.handle('maximize-window', () => {
  const win = getMainWindow();
  if (win?.isMaximized()) {
    win?.unmaximize();
  } else {
    win?.maximize();
  }
});

ipcMain.handle('close-window', () => {
  getMainWindow()?.close();
});
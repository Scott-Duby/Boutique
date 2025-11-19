// electron/preload.cjs
const { contextBridge, ipcRenderer } = require('electron');

// Expose secure functions to your React app (the "renderer" process)
contextBridge.exposeInMainWorld('electronAPI', {
  // Functions to control the window
  minimize: () => ipcRenderer.invoke('minimize-window'),
  maximize: () => ipcRenderer.invoke('maximize-window'),
  close: () => ipcRenderer.invoke('close-window'),

  // We also keep the versions info from before
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
  },
  settings: {
    getConnectionString: () => ipcRenderer.invoke('get-connection-string'),
    saveConnectionString: (value) => ipcRenderer.invoke('save-connection-string', value)
  }
});


console.log('Preload script loaded.');
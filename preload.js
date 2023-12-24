const { contextBridge, ipcRenderer } = require('electron')

const LIVISAPI = {
    sendVersion: () => ipcRenderer.send("app_version"),
    restartApp: () => ipcRenderer.send("restart_app"),
    getVersion: (callback) => ipcRenderer.on("app_version", (event, args) => {
        callback(args);
    }),
    updateAvailable: (callback) => ipcRenderer.on("update_available", (event, args) => {
        callback(args);
    }),
    updateDownload: (callback) => ipcRenderer.on("update_downloaded", (event, args) => {
        callback(args);
    }),
}

contextBridge.exposeInMainWorld("livisapi", LIVISAPI)
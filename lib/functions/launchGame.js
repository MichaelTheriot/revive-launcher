const { app, ipcMain, ipcRenderer } = require('electron');
const { spawn } = require('child_process');
ipcMain.on('launchGame', (event, data) => {
    switch (data.game) {
        case "battlefield2": {
            break;
        }
        case "stella": {
            break;
        }
    }
})

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
  win = new BrowserWindow({
      width: 1080,
      minWidth: 800,
      height: 840,
      minHeight: 400,
      title: app.getName(),
      frame: false,
      backgroundColor: '#151515'
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/web/index2.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => win = null);
};

app
  .on('ready', createWindow)
  .on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  })
  .on('activate', () => {
    if (win === null) {
      createWindow()
    }
  });

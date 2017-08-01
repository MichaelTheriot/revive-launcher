const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const constants = require('./lib/contants.js');
require('./require-file');

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
  constants.window = win
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
    protocol.registerFileProtocol('revive', (request, callback) => {
      /**
       * request.url - full url on which the protocol was intercepted
       * referrer - referred by
       * method - HTTP method
       * uploadData - https://github.com/electron/electron/blob/master/docs/api/structures/upload-data.md
       */
      /**
       * the callback should be called. you can optionally give it a parameter to the filePath if any
       */
      request.url = request.url.split("revive://")[1];
      callback();
    })
  });

(async function () {

  const isNode = ('process' in this) && ('versions' in this.process) && ('node' in this.process.versions);

  if (isNode) {
    const electron = require('electron');

    const win = electron.remote.getCurrentWindow();
    const domLoaded = new Promise(resolve => document.readyState === 'complete' ? resolve(null) : document.addEventListener('DOMContentLoaded', resolve));


    await domLoaded;

    const [windowBar, mnmzBtn, unmxBtn, mxmzBtn, exitBtn] = ['#window-bar', '#button-minimize', '#button-overlap', '#button-maximize', '#button-close'].map(s => document.querySelector(s));
    const onMinMaxMize = () => windowBar.setAttribute('data-maximized', win.isMaximized());

    windowBar.setAttribute('data-desktop', '');
    onMinMaxMize();

    win
      .on('maximize',   onMinMaxMize)
      .on('unmaximize', onMinMaxMize);

    mnmzBtn.addEventListener('click', () => win.minimize());
    unmxBtn.addEventListener('click', () => win.unmaximize());
    mxmzBtn.addEventListener('click', () => win.maximize());
    exitBtn.addEventListener('click', () => win.close());

  }

})();

const { app, ipcMain, ipcRenderer } = require('electron');
const md5 = require('md5-file/promise');
const path = require('path');
ipcMain.on('check-files', (event, data) => {
    if (constants.games.includes(data)) {
        if (constants[`${data}_dir`]) {
            checkFiles(data, constants[`${data}_dir`]).then(c => console.log("corrupted files " + c));
        }
    }
    else {
        constants.games.map(g => {
            if (constants[`${g}_dir`]) {
                checkFiles(data, constants[`${g}_dir`]).then(c => console.log("corrupted files " + c));
            }
        })
    }
})


const checkFiles = async function (game, dir) {
    let dataset = require(`./../data/${game}_md5.json`);
    if (!dataset)
        throw `Hash Dataset not found - ${game}_md5.json`;
    let corrupted = (
        await Promise.all(Object.entries(dataset).map(async function (filename, hash) {
            let md5edData = await md5(path.join(dir, filename))
            if (md5edData != hash)
                return filename;
            else return false;
        }))
    ).filter(a => a);
    ipcRenderer.emit('check-files-complete', corrupted);
    return corrupted;
}
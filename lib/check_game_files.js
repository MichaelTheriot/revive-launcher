const { app, ipcMain } = require('electron');
const md5 = require('md5-file/promise');
const constants = require('./constants');
const path = require('path');
ipcMain.on('check-files', (event, data) => {
    if (constants.games.includes(data)) {
        if (constants[`${data}_dir`]) {
            console.log("corrupted files " + checkFiles(data, constants[`${data}_dir`]));
        }
    }
    else {
        constants.games.map(g => {
            if (constants[`${g}_dir`]) {
                console.log("corrupted files " + checkFiles(g, constants[`${g}_dir`]));
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
    return corrupted;
}
const { app, ipcMain, ipcRenderer } = require('electron');
const { spawn } = require('child_process');
const { MD5 } = require("crypto-js");

ipcMain.on('launchGame', (event, data) => {
    let args = [];
    if (constants.settings.windowed) {
        args.push("+fullscreen", 0)
        args.push('+szx', constants.settings.screenWidth)
        args.push('+szy', constants.settings.screenHeight)
    }
    else {
        args.push("+fullscreen", 1)
    }
    if (constants.settings.widescreen === true) {
        args.push('+widescreen', 1);
        args.push('+menu', '1.5')
    }
    if (constants.settings.showIntroMovies !== true) {
        args.push('+restart', 1);
    }
    let exec_path = "";
    switch (data.game) {
        case "battlefield2": {
            if (!constants.settings.disableAutologin) {
                append.push('+playerName', data.soldier, '+playerPassword', constants.password);
            }
            constants.game_process = spawn(path.join(constants.battlefield2_dir, "bf2.exe").toString(), args, { stdio: 'inherit' })
            break;
        }
        case "stella": {
            if (!constants.settings.disableAutologin) {
                append.push('+eaAccountName', MD5(constants.user.username).toString(), '+eaAccountPassword', MD5(constants.password).toString(), '+soldierName', data.soldier);
            }
            constants.game_process = spawn(path.join(constants.stella_dir, "bf2142.exe").toString(), args, { stdio: 'inherit' })
            break;
        }
        default:
            throw new Error("Game not supported");
    }
    constants.game_process.on('exit', () => constants.game_process = false);
})

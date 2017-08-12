let { remote } = require('electron');
const CryptoJS = require("crypto-js");
module.exports = {
    get battlefield2_dir() {
        return remote.getGlobal('localStorage').getItem('battlefield2_dir');
    },
    set battlefield2_dir(dir) {
        return remote.getGlobal('localStorage').setItem('battlefield2_dir', dir);
    },
    get stella_dir() {
        return remote.getGlobal('localStorage').getItem('stella_dir');
    },
    set stella_dir(dir) {
        return remote.getGlobal('localStorage').setItem('stella_dir', dir);
    },
    get access_token() {
        return remote.getGlobal('localStorage').getItem('access_token');
    },
    set access_token(token) {
        return remote.getGlobal('localStorage').setItem('access_token', token);
    },
    get settings() {
        return remote.getGlobal('localStorage').getItem('settings');
    },
    set settings(setting) {
        return remote.getGlobal('localStorage').setItem('settings', setting);
    },
    get password() {
        return CryptoJS.AES.decrypt(remote.getGlobal('localStorage').getItem('password'), 'ju5t4funl0lz').toString(CryptoJS.enc.Utf8);;
    },
    set password(pass) {
        return remote.getGlobal('localStorage').setItem('password', CryptoJS.AES.encrypt(pass, 'ju5t4funl0lz').toString());
    },
    get user() {
        return remote.getGlobal('localStorage').getItem('user');
    },
    game_process: false,
    window: false,
    games: [
        "battlefield2",
        "stella"
    ]
}
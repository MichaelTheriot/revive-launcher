let { remote } = require('electron');
module.exports = {
    get current_game() {
        return remote.getGlobal('localStorage').getItem('current_game');
    },
    get current_soldier() {
        return remote.getGlobal('localStorage').getItem('current_soldier');
    },
    get battlefield2_dir() {
        return remote.getGlobal('localStorage').getItem('battlefield2_dir');
    },
    get stella_dir() {
        return remote.getGlobal('localStorage').getItem('stella_dir');
    },
    set current_game(game) {
        return remote.getGlobal('localStorage').setItem('current_game', game);
    },
    set current_soldier(soldier) {
        return remote.getGlobal('localStorage').setItem('current_soldier', soldier);
    },
    set battlefield2_dir(dir) {
        return remote.getGlobal('localStorage').setItem('battlefield2_dir', dir);
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
    get soldiers() {
        return remote.getGlobal('localStorage').getItem('soldiers');
    },
    set soldiers(soldiers) {
        return remote.getGlobal('localStorage').setItem('soldiers', soldiers);
    },
    window: false,
    games: [
        "battlefield2",
        "stella"
    ]
}
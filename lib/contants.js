let { remote } = require('electron')
let localStorage = remote.getGlobal(' localStorage');
module.exports = {
    get current_game() {
        return localStorage.getItem('current_game');
    },
    get current_soldier() {
        return localStorage.getItem('current_soldier');
    },
    get battlefield2_dir() {
        return localStorage.getItem('battlefield2_dir');
    },
    get stella_dir() {
        return localStorage.getItem('stella_dir');
    },
    set current_game(game) {
        return localStorage.setItem('current_game', game);
    },
    set current_soldier(soldier) {
        return localStorage.setItem('current_soldier', soldier);
    },
    set battlefield2_dir(dir) {
        return localStorage.setItem('battlefield2_dir', dir);
    },
    set stella_dir(dir) {
        return localStorage.setItem('stella_dir', dir);
    },
    get access_token() {
        return localStorage.getItem('access_token');
    },
    set access_token(token) {
        return localStorage.setItem('access_token', token);
    },
    get soldiers() {
        return localStorage.getItem('soldiers');
    },
    set soldiers(soldiers) {
        return localStorage.setItem('soldiers', soldiers);
    },
    window: false,
    games: [
        "battlefield2",
        "stella"
    ]
}
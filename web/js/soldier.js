var soldiers = getCachedUser().soldiers;
new Vue({
    el: '#games',
    data: {
        currentSoldier: soldiers[0].nickname,
        soldiers: soldiers,
        currentGame: null
    },
    methods: {
        launchBFH: function () {
            if (isNode)
                require('electron').shell.openExternal("https://heroesawaken.com");
            else
                location = "https://heroesawaken.com";
        },
        launchGame: function () {
            if (isNode)
                require('electron').ipcRenderer.emit('launchGame', {
                    game: this.currentGame,
                    soldier: this.currentSoldier
                })
            else
                location = `revive://launchGame/${this.currentGame}/${this.currentSoldier}`;
        }
    }
})
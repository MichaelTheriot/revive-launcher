var soldiers = getCachedUser().soldiers;
new Vue({
    el: '#games',
    data: {
        showModal: false,
        currentSoldier: soldiers[0].nickname,
        soldiers: soldiers,
        currentGame: null
    },
    methods: {
        launchBFH: function () {
            if (this.isNode)
                require('electron').shell.openExternal("https://heroesawaken.com");
            else
                location = "https://heroesawaken.com";
        },
        launchGame: function () {
            if (this.isNode)
                require('electron').ipcRenderer.emit('launchGame', {
                    game: this.currentGame,

                })
            else
                location = `revive://launchGame/${this.currentGame}/${this.currentSoldier}`;
        }
    }
})
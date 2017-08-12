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
            const isNode = ('process' in this) && ('versions' in this.process) && ('node' in this.process.versions);
            if (isNode)
                require('electron').shell.openExternal("https://heroesawaken.com");
            else
                location = "https://heroesawaken.com";
        },
        launchGame: function () {
            const isNode = ('process' in this) && ('versions' in this.process) && ('node' in this.process.versions);
            if (isNode)
                require('electron').ipcRenderer.emit('launchGame', {
                    game: this.currentGame,

                })
            else
                location = `revive://launchGame/${this.currentGame}/${this.currentSoldier}`;
        }
    }
})
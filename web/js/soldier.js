
new Vue({
    el: '#games',
    data: {
        showModal: false,
        currentSoldier: false,
        soldiers: getCachedUser().soldiers
    }
})
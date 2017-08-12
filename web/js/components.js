
Vue.mixin({
    data: function () {
        return {
            process: !(typeof process === "undefined") ? process : false,
            require: !(typeof require === "undefined") ? require : false,
            site_url: site_url
        }
    },
    methods: function () {
        return {
            getCachedUser: getCachedUser,
            onProfileClick: onProfileClick
        }
    }
})
Vue.component('user', {
    props: ['user'],
    template: "#user-template"
});
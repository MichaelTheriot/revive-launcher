
Vue.mixin({
    data: function () {
        return {
            process: !(typeof process === "undefined") ? process : false,
            require: !(typeof require === "undefined") ? require : false,
            site_url: site_url,
            isNode: ('process' in this) && ('versions' in this.process) && ('node' in this.process.versions)
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
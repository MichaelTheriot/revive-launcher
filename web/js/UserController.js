
const getCachedUser = function () {
    let user = localStorage.getItem("user");
    if (typeof user == "string")
        user = JSON.parse(user);
    return user;
}
Vue.http.headers.common.Authorization = "Bearer " + localStorage.getItem("access_token");

window.addEventListener('load', function () {
    var aside = new Vue({
        el: '#aside',
        data: {
            user: getCachedUser(),
            site_url: site_url
        },
        methods: {
            getCachedUser: getCachedUser,
            onProfileClick: () => {
                if (isNode)
                    require('electron').shell.openExternal(this.site_url + '/profile/' + this.user.id);
                else
                    location = this.site_url + '/profile/' + this.user.id;
            }
        },
        created: function () {
            this.$http.get(site_url + "/api/me")
                .then(response => {
                    this.user = response.data;
                    localStorage.setItem("user", JSON.stringify(response.data));
                })
                .catch(() => {
                    let user = getCachedUser();
                    user.online = false;
                    this.user = user;
                });
        }
    })
});
Vue.component('user', {
    props: ['user'],
    template: "<div class=\"user\" v-on:click='onProfileClick()' :data-status=\"user.online?\'online\':\'offline\'\">\r\n    <figure class=\"avatar\"><img alt=\"avatar\" :src=\"\'https:\/\/www.gravatar.com\/avatar\/\'+user.avatar\" draggable=\"false\" \/> <\/figure>\r\n    <span class=\"username\">{{ user.username }}<\/span>\r\n<\/div>"
})
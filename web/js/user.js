
const getCachedUser = function () {
    let user = localStorage.getItem("user");
    if (typeof user == "string")
        user = JSON.parse(user);
    return user;
}
const onProfileClick = (id) => {
    const isNode = ('process' in this) && ('versions' in this.process) && ('node' in this.process.versions);
    if (isNode)
        require('electron').shell.openExternal(site_url + '/profile/' + user.id);
    else
        location = site_url + '/profile/' + id;
}
Vue.http.headers.common.Authorization = "Bearer " + localStorage.getItem("access_token");

var aside = new Vue({
    el: '#aside',
    data: {
        user: getCachedUser()
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
});
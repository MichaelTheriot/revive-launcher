
const getCachedUser = function () {
    let user = localStorage.getItem("user");
    if (typeof user == "string")
        user = JSON.parse(user);
    return user;
}

const UserController = function ($scope, $http) {
    $http.defaults.headers.common.Authorization = "Bearer " + localStorage.getItem("access_token");
    $scope.user = getCachedUser();
    $scope.site_url = site_url;
    $http.get(site_url + "/api/me")
        .then(response => {
            response.data.status = response.data.online ? "online" : "offline";
            $scope.user = response.data;
            localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch(() => {
            let user = getCachedUser();
            user.status = "offline";
            $scope.user = user;
        });
}
angular.module("Revive", []).controller('UserController', ['$scope', '$http', UserController]);
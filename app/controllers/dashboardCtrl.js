app.controller('dashboardCtrl', function($scope, dataService, $state) {
    // $scope.jason = "Jason.. I see you";
    // var user = {};
    // console.log(user);
    var userData = {};

    // log out function //
    $scope.fbLogout = function() {
        dataService.fbLogout();
    }

    // gets user data when logged in //
    var getLogUser = function() {
        $scope.user = dataService.getLogUser();
        console.log($scope.user);
    }();

    // gets user id for testing //
    $scope.getUserId = function() {
        $scope.me = dataService.showUserId();

    }

    var getUserFriends = function() {
        dataService.getUserFriends().then(function(response){
            $scope.userData = response;
            console.log(response);
        });
    }();

    console.log(userData);

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
        } else {
            FB.login();
        }
    });


});

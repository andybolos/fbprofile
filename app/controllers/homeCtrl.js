app.controller('homeCtrl',['$scope', 'dataService', '$state', function($scope, dataService, $state) {


    // $scope.fbLogin = function() {
    //     dataService.fbLogin();
    // }

    $scope.fbLogin = function() {
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    var user = response;
                    dataService.setUser(user);
                    console.log(response);
                    var accessToken = FB.getAuthResponse().accessToken;
                    dataService.setAccessToken(accessToken);
                    $state.go('/dashboard')
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }


}]);

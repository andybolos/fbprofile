app.service('dataService', function($q, $http, $state, $rootScope) {

// Temporary User //
    var logUser = {};

// Set Temporary User on Login //
    this.setUser = function(user) {
        logUser = user;
        console.log(user);
    }

// Return Logged in User //
    this.getLogUser = function() {
        return logUser;
    }







    // Login function //

    // this.fbLogin = function() {
    //     FB.login(function(response) {
    //         if (response.authResponse) {
    //             console.log('Welcome!  Fetching your information.... ');
    //             FB.api('/me', function(response) {
    //                 console.log('Good to see you, ' + response.name + '.');
    //                 console.log(response);
    //                 var userId = response.id;
    //                 var accessToken = FB.getAuthResponse().accessToken;
    //                 console.log(accessToken);
    //                 console.log(userId);
    //                 $state.go('/dashboard')
    //             });
    //         } else {
    //             console.log('User cancelled login or did not fully authorize.');
    //         }
    //     });
    // }


    // Logout function //
    this.fbLogout = function() {
        FB.logout(function(response) {
            console.log('You have been logged out', response);
            $state.go('/');
        });
    }


    var meuserId = '';
    var authToken= '';
    // Set Access Token //
    this.setAccessToken = function(accessToken) {
        authToken = accessToken;
    };
    // Set User Id //
    this.setUserId = function(userId) {
        meuserId = userId;
        console.log('meuserId', meuserId);
    }
    // For testing purporses //
    this.showUserId = function() {
        return meuserId;
    }


    // Get Access Token //
    this.getAccessToken = function() {
        authToken;

    };

    // Supposed to get user info.. does not do its job //
    this.getUserInfo = function() {

        FB.api('/' + meuserId, function(response){
            user = response
            console.log(user);
        })

    }
console.log(authToken);
    this.getUserFriends = function() {
        console.log(authToken);
// {access_token: authToken},
        var deferred = $q.defer();
        FB.api('/me?fields=age_range,name,picture{url},email,gender', 'GET', function(response){
            if(!response){
                deferred.reject('ERROR')
            }
            else{
                deferred.resolve(response)
            }
        });
        return deferred.promise;
    }




});

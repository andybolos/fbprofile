var app = angular.module('fb-view', ['ui.router']);


window.fbAsyncInit = function() {
    FB.init({
        appId: '628524140622486',
        xfbml: true,
        version: 'v2.4'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'homeCtrl'
        })
        .state('/dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/dashboard.html',
            controller: 'dashboardCtrl',
            // resolve: {
            //     authenticate: authenticate
            // }
        })

    // Checking authentication function for route //
    // function authenticate($q, user, $state, $timeout) {
    //     console.log($state);
    //     console.log($timeout);
    //     console.log(user);
    //     if (user.isAuthenticated()) {
    //         // Resolve the promise successfully
    //         return $q.when()
    //
    //     } else {
    //         // The next bit of code is asynchronously tricky.
    //
    //         $timeout(function() {
    //             // This code runs after the authentication promise has been rejected.
    //             // Go to the log-in page
    //             $state.go('/')
    //         })
    //
    //         // Reject the authentication promise to prevent the state from loading
    //         return $q.reject()
    //     }
    // }

});

app.run(['$rootScope', '$state', 'dataService', function($rootScope, $state, dataService) {

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                    // console.log(event);
                    // console.log(toState);

                    // if ()
                })



            }]);

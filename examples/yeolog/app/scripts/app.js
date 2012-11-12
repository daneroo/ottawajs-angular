'use strict';

var yeologApp = angular.module('yeologApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).run(function($rootScope, $location){
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( !$rootScope.loggedIn ) {
        if ( next && next.controller && next.controller !== "LoginCtrl") {
          // console.log('should login');
          $location.path( "/login" );
        }
      }         
    });
  });

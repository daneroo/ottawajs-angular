'use strict';

yeologApp.controller('LoginCtrl', function($scope,$location,$rootScope) {
  $scope.login = function () {
    $rootScope.loggedIn=true;
  }
});

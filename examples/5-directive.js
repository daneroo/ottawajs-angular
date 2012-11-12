var app = angular.module('loggerApp', []);
/* Directives */
app.directive('logtable', function() {
  return {
    templateUrl: '5-partial.html',
    restrict: 'EC',
    scope:{
      entries:'=',
      level:"@",
      limit:'@'
    }
  };
});

function LogCtrl($scope,$filter) {
  var now=+new Date();
  $scope.entries = [
    {stamp:new Date(),level:'error',msg:'Something bad happened'},
    {stamp:new Date(now-32000),level:'warning',msg:'It\'s getting warm in here'},
    {stamp:new Date(now-61000),level:'info',msg:'Operations Normal'},
    {stamp:new Date(now-161000),level:'success',msg:'Operations Start'}
  ];

  $scope.addOne = function (level,msg) {
    var entry = {
      stamp: new Date(),
      level: level || 'info',
      msg: msg || 'Hello '+rand()
    };
    $scope.entries.unshift(entry);
  };

  $scope.rand = function rand() {
    return Math.floor(Math.random()*9973)%100;
  }

}

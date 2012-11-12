function LogCtrl($scope,$filter) {
  var now=+new Date();
  $scope.entries = [
    {stamp:new Date(now-161000),level:'success',msg:'Operations Start'},
    {stamp:new Date(now-61000),level:'info',msg:'Operations Normal'},
    {stamp:new Date(now-32000),level:'warning',msg:'It\'s getting warm in here'},
    {stamp:new Date(),level:'error',msg:'Something bad happened'}
  ];

  $scope.addOne = function (level,msg) {
    var entry = {
      stamp: new Date(),
      level: level || 'info',
      msg: msg || 'Hello'
    };
    $scope.entries.push(entry);
  };

  $scope.areVisible = function () {
    return $filter('filter')($scope.entries,$scope.search).length;
  }
}


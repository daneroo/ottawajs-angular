function LogCtrl($scope) {
  var now=+new Date();
  $scope.entries = [
    {stamp:new Date(now-161000),level:'success',msg:'Operations Start'},
    {stamp:new Date(now-61000),level:'info',msg:'Operations Normal'},
    {stamp:new Date(now-32000),level:'warning',msg:'It\'s getting warm in here'},
    {stamp:new Date(),level:'error',msg:'Something bad happened'}
  ];
}
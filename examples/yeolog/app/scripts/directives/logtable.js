'use strict';

yeologApp.directive('logtable', function() {
  return {
    templateUrl: 'views/logtable.html',
    restrict: 'EC',
    scope: {
      entries: '=',
      level: "@",
      limit: '@'
    }
  };

});
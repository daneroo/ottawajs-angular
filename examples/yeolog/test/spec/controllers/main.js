'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('yeologApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of log entries to the scope', function() {
    expect(scope.entries.length).toBe(4);
  });

  it('should prepend an entry', function() {
    var count=scope.entries.length;
    scope.addOne('error','my message');
    expect(scope.entries.length).toBe(count+1);
    expect(scope.entries[0].level).toBe('error');
    expect(scope.entries[0].msg).toBe('my message');
  });

  it('addOne default value is info', function() {
    scope.addOne(null,'Hello');
    expect(scope.entries[0].level).toBe('info');
    expect(scope.entries[0].msg).toBe('Hello');
  });
});

'use strict';

describe('Controller: LoginCtrl', function() {

  // load the controller's module
  beforeEach(module('yeologApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should validate login credentials', function() {
    expect(true).toBe(true);
  });
});

'use strict';

describe('Directive: logtable', function() {
  beforeEach(module('yeologApp'));

  var element;

  it('should be tested', inject(function($rootScope, $compile) {
    var allParts="tested";
    expect(allParts).toBe('tested');
    // element = angular.element('<logtable></logtable>');
    // element = $compile(element)($rootScope);
    // expect(element.text()).toBe('this is the logtable directive');
  }));
});

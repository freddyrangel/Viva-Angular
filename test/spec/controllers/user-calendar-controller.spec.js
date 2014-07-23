'use strict';

describe('Controller: UserCalendarCtrl', function() {

  beforeEach(module('vivaAngularApp'));

  var UserCalendarCtrl,
    scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    UserCalendarCtrl = $controller('UserCalendarCtrl', {
      $scope: scope
    });
  }));

  it('should return event sources', function() {
    expect(scope.eventSources).toBe(true);
  });
});

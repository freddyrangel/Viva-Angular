'use strict';

describe('Controller: UserCalendarCtrl', function() {

  var controller,
    mockScope;

  beforeEach(module('vivaAngularApp', 'ui.calendar'));

  beforeEach(inject(function ($controller, $rootScope) {
    mockScope = $rootScope.$new();
    controller = $controller('UserCalendarCtrl', {
      $scope: mockScope
    });
  }));

  it('should return event sources', function() {
    expect(mockScope.eventSources).toBeDefined(true);
  });
});

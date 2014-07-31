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
    expect(mockScope.eventSources).toEqual([mockScope.eventSource]);
  });

  it('should take event source', function(){
    expect(mockScope.eventSource.url).toEqual('http://162.243.222.54/fullcalendar/new_fechas_insp.php');
  });
});

'use strict';

app.controller('UserCalendarCtrl', function($scope) {
  var date = new Date(),
  d = date.getDate(),
  m = date.getMonth(),
  y = date.getFullYear();

  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        left: 'month basicWeek basicDay agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
      dayClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize
    }
  };

  $scope.eventSources = {
    url: 'http://162.243.222.54/fullcalendar/new_fechas_admin.php'
  };

	//$scope.calendar.fullCalendar('addEventSource', source);
});

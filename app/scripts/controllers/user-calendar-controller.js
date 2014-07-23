'use strict';

app.controller('UserCalendarCtrl', function($scope) {
	
	var date = new Date(),
  d = date.getDate(),
  m = date.getMonth(),
  y = date.getFullYear();

	$scope.eventSource = {
		    $http.get('http://162.243.222.54/fullcalendar/new_fechas_admin.php')
        .success(function(data) {
        });



		// url: 'http://162.243.222.54/fullcalendar/new_fechas_admin.php'
	};

	console.log($scope.eventSource);
	$scope.calendar.fullCalendar('addEventSource', source);

});

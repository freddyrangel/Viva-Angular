'use strict';

var app = angular
  .module('vivaAngularApp', [
    'ui.calendar'
  ]);

app.run(function($rootScope, $log) {
  $rootScope.$log = $log;
});

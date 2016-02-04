'use strict';

var app = angular.module('blueSuedeApp', [
  'ngRoute',
  'ngResource',
  'app.controllers',
  'app.services',
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'appCtrl'
      }).

      otherwise({
        redirectTo: '/'
      });
  }]);

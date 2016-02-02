'use strict';

var app = angular.module('blueSeudeApp', [
  'ngRoute',
  'ngResource',
  'app.controllers',
  'app.services',
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/cart.html',
        controller: 'cartCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

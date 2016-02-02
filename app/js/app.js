'use strict';

var app = angular.module('phonecatApp', [
  'ngRoute',
  'app.controllers',
]);

phonecatApp.config(['$routeProvider',
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

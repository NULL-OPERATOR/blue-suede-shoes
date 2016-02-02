'use strict';
angular.module('app.controllers', [])

.controller('appCtrl', ['$scope', "$http",
  function($scope, $http) {
    $scope.cart = [];

    $http.get('/items.json').success(function(data) {
      $scope.items = data;
    });

    this.reduceQuantity = function(item) {
      $scope.items[item.id]["quantity"] -= 1;
    }

    this.addToCart = function(item) {
      this.reduceQuantity(item);
      $scope.cart.push(item);
    };

  }]);

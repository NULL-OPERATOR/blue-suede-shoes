'use strict';
angular.module('app.controllers', [])

.controller('appCtrl', ['shopItems', function(shopItems) {
    this.cart = [];
    this.items = shopItems.query();

  this.reduceQuantity = function(item) {
    this.items[item.id]["quantity"] -= 1;
  }

  this.addToCart = function(item) {
    this.reduceQuantity(item);
    this.cart.push(item);
  };
}]);

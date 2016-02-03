'use strict';
angular.module('app.controllers', [])

.controller('appCtrl', ['shopItems', "$filter", function(shopItems, $filter) {
  this.cart = [];
  this.items = shopItems.query();

  this.reduceStock = function(item) {
    this.items[item.id].quantity --;
  };

  this.increaseStock = function(item) {
    this.items[item.id].quantity ++;
  };

  this.checkCart = function(item) {
    for(var i = 0; i < this.cart.length; i ++) {
      if(this.cart[i].name === item.name) {
        return i;
      }
    }
  };

  this.addItem = function(item) {
    var index = this.checkCart(item)
    this.reduceStock(item);
    if (index === undefined) {
      this.cart.push({
        "name": item.name,
        "quantity": 1
      });
    } else {
      this.cart[index].quantity ++
    }
  };

  this.cleanCart = function() {
    for (var i = this.cart.length - 1; i >= 0; i--) {
      if (this.cart[i] === undefined) {
        this.cart.splice(i, 1);
      }
    }
  }

  this.removeCartItem = function(index) {
    delete this.cart[index]
    this.cleanCart()
  };

  this.removeItem = function(item) {
    var index = this.checkCart(item)
    this.increaseStock(item)
    if (this.cart[index].quantity === 1) {
      this.removeCartItem(index);
    } else {
      this.cart[index].quantity --;
    }
  }

}]);

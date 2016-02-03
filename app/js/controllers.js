'use strict';
angular.module('app.controllers', [])

.controller('appCtrl', ['shopItems', "$filter", function(shopItems, $filter) {
  this.cart = [];
  this.items = shopItems.query();
  // this.total = 0;

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
        "price": item.price,
        "quantity": 1
      });
    } else {
      this.cart[index].quantity ++;
    }
  };

  this.removeCartItem = function(index) {
    for (var i = this.cart.length - 1; i >= 0; i--) {
      if (i === index) {
        this.cart.splice(i, 1);
      }
    }
  };

  this.removeItem = function(item) {
    var index = this.checkCart(item);
    this.increaseStock(item);
    if (this.cart[index].quantity === 1) {
      this.removeCartItem(index);
    } else {
      this.cart[index].quantity --;
    }
  }

  this.findTotal = function() {
    var total = 0
    for (var i = this.cart.length -1; i >=0; i--) {
      total += this.cart[i].price * this.cart[i].quantity;
    }
    return total;
  }

}]);

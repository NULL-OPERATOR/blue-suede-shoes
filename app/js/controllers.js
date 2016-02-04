'use strict';
angular.module('app.controllers', [])

.controller('appCtrl', ['shopItems', '$scope', function(shopItems, $scope) {
  this.cart = [];
  this.categories = ["All","Women’s Footwear","Men’s Footwear","Women’s Casualwear","Men’s Casualwear","Men’s Formalwear","Women’s Formalwear"]
  this.items = shopItems.query();
  this.subTotal = 0;
  this.total = 0;
  this.error = false;


  this.addItem = function(item) {
    this._addToCart(item)
    item.quantity --;
    this._updateTotal();
  };

  this.removeItem = function(item) {
    this._removeFromCart(item);
    this.items[this._itemsIndex(item)].quantity ++;
    this._updateTotal();
  }


  this.showError = function(input){
    $scope.errorFade = false;
    this.error = true;
    this.errorMessage = input;
    $timeout(function(){
      $scope.errorFade = true;
    }, 2500);
  };

  this._cartIndex = function(item) {
    for(var i = 0; i < this.cart.length; i ++) {
      if(this.cart[i].name === item.name) {
        return i;
      }
    }
  };
  this._itemsIndex = function(item) {
    for(var i = 0; i < this.items.length; i ++) {
      if(this.items[i].name === item.name) {
        return i;
      }
    }
  };

  this._addToCart = function(item) {
    var index = this._cartIndex(item)
    if (index === undefined) {
      this.cart.push({"name":item.name, "price":item.price, "quantity": 1});
    } else {
      this.cart[index].quantity ++;
    }
  };

  this._removeFromCart = function(item) {
    var index = this.cart.indexOf(item);
    if (this.cart[index].quantity === 1) {
      this.cart.splice(index, 1);
    } else {
      this.cart[index].quantity --;
    }
  };

  this._updateTotal = function() {
    var total = 0
    for (var i = this.cart.length -1; i >=0; i--) {
      total += this.cart[i].price * this.cart[i].quantity;
    }
    this.total = total;
  }

}]);

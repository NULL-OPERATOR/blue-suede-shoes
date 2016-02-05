'use strict';
(function() {
  function CartService (ItemsService) {

    var CartService = {};
    var self = CartService;
    self.categories = ["All","Women’s Footwear","Men’s Footwear","Women’s Casualwear","Men’s Casualwear","Men’s Formalwear","Women’s Formalwear"]
    self.cart = [];
    self.items = ItemsService.query();

    self.addItem = function(item) {
      self._addToCart(item);
      item.quantity --;
    };

    self.removeItem = function(item) {
      self._removeFromCart(item);
      self.items[self._itemsIndex(item)].quantity ++;
    }

    self.hasFootwear = function() {
      for (var i = self.cart.length -1; i >=0; i--) {
        if (self.cart[i].category.includes('Footwear')) {
          return true;
        }
      }
    }

    self.getSubTotal = function() {
      var total = 0
      for (var i = self.cart.length -1; i >=0; i--) {
        total += self.cart[i].price * self.cart[i].quantity;
      }
      return total;
    }

    self._cartIndex = function(item) {
      for (var i = self.cart.length -1; i >=0; i--) {
        if (self.cart[i].name === item.name) {
          return i;
        }
      }
    };

    self._itemsIndex = function(item) {
      for (var i = self.items.length -1; i >=0; i--) {
        if (self.items[i].name === item.name) {
          return i;
        }
      }
    };

    self._addToCart = function(item) {
      var index = self._cartIndex(item)
      if (index === undefined) {
        self.cart.push({"name":item.name, "price":item.price, "category":item.category, "quantity": 1});
      } else {
        self.cart[index].quantity ++;
      }
    };

    self._removeFromCart = function(item) {
      var index = self.cart.indexOf(item);
      if (self.cart[index].quantity === 1) {
        self.cart.splice(index, 1);
      } else {
        self.cart[index].quantity --;
      }
    };

  return CartService;

  };
angular
  .module('app')
  .factory('CartService', ['ItemsService', CartService]);
})();

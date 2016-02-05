'use strict';
(function () {
  function MainCtrl (CartService, DiscountsService) {
    var self = this;

    self.total = 0;
    self.subTotal = 0;
    self.buttonSearch = '';
    self.cart = CartService.cart;
    self.items = CartService.items;
    self.categories = CartService.categories;
    self.codesUsed = DiscountsService.codesUsed;

    self.addItem = function(item) {
      CartService.addItem(item);
      self.updateTotal();
    }

    self.removeItem = function(item) {
      CartService.removeItem(item);
      self.updateTotal();
    }

    self.addVoucher = function(code) {
      var hasFootwear = CartService.hasFootwear();
      DiscountsService.addVoucher(code, self.subTotal, hasFootwear);
      self.updateTotal();
    }

    self.updateTotal = function() {
      self.subTotal = CartService.getSubTotal();
      self.total = self.subTotal - DiscountsService.total;
    }

    self.searchButton = function(item) {
      if (this.buttonSearch === item || item === 'All') {
        this.buttonSearch = '';
      } else {
        this.buttonSearch = item
      }
    }

  }
  angular
    .module('app')
    .controller('MainCtrl',[
      'CartService',
      'DiscountsService',
      MainCtrl
    ]);
})();

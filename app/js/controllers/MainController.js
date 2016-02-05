'use strict';
(function () {
  function MainCtrl (CartService, DiscountsService) {
    var self = this;

    self.total = 0;
    self.subTotal = 0;
    self.cart = CartService.cart;
    self.items = CartService.items;
    self.categories = CartService.categories;

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

  }
  angular
    .module('app')
    .controller('MainCtrl',[
      'CartService',
      'DiscountsService',
      MainCtrl
    ]);
  // // AnotherCtrl.js
  // function AnotherCtrl () {
  // }
  // angular
  //   .module('app')
  //   .controller('AnotherCtrl', AnotherCtrl);
})();

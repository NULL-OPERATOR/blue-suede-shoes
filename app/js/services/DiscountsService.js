'use strict';
(function() {
  function DiscountsService ($rootScope, $timeout) {

    var DiscountsService = {};
    var self = DiscountsService;
    self.codes = ["GIMME-FIVE","OVER-50","OVER-75"];
    self.codesUsed = [];
    self.total = 0;
    self.error = false;
    self.errorMessage = ''

    self.addVoucher = function(code, subTotal, hasFootwear) {
      if (self.codes.includes(code)) {
        if (!self.codesUsed.includes(code)) {
          self._addDiscount(code, subTotal, hasFootwear);
        } else {
          self._showError('Voucher: '+ code +' is already in use');
        }
      } else {
        self._showError('Voucher: '+ code +' not found');
      }
    }


    self._addDiscount = function(code, subTotal, hasFootwear) {
      if (code === self.codes[1] && subTotal >= 50) {
        self.total += 10;
      } else if (code === self.codes[2] && subTotal >= 75 && hasFootwear) {
        self.total += 15;
      } else {
        self.total += 5;
      }
      self.codesUsed.push(code)
    }


    self._showError = function(input){
      $rootScope.errorFade = false;
      self.error = true;
      self.errorMessage = input;
      $timeout(function(){
        $rootScope.errorFade = true;
      }, 1800);
    };


  return DiscountsService;

  };
angular
  .module('app')
  .factory('DiscountsService', ['$rootScope', '$timeout', DiscountsService]);
})();

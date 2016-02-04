"use strict";
describe('blueSuedeApp controllers', function(){

  beforeEach(function(){
    jasmine.addMatchers({
      toEqualData: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            return { pass: angular.equals(actual, expected) };
          }
        };
      }
    });
  });

  beforeEach(module('blueSuedeApp'));

  describe('appCtrl', function() {
    var scope, ctrl, $httpBackend;
    var itemsIn = [{ "id":0, "name":"shoes", "price":2, "discount": 0, "quantity": 5 }];
    var basket = [{ "name":"shoes", "price":2, "quantity":1 }];
    var shoes = itemsIn[0]


    beforeEach(inject(function($rootScope, _$httpBackend_, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('items.json').respond(itemsIn);
      scope = $rootScope.$new();
      ctrl = $controller('appCtrl', {$scope: scope});
    }));

    it('should import a list of items', function() {
      expect(ctrl.items).toEqualData([]);
      $httpBackend.flush();
      expect(ctrl.items).toEqualData(itemsIn);
    });

    it('should start with an empty cart', function() {
      expect(ctrl.cart).toEqualData([]);
    });

    describe("adding to the cart", function() {
      beforeEach(function() {
        $httpBackend.flush();
        var shoes = ctrl.items[0]
        ctrl.addItem(shoes);
      });

      it('should reduce the current stock of the item by 1', function() {
        expect(ctrl.items[0].quantity).toBe(4);
      });

      it('should be able to add a product to the cart', function() {
        expect(ctrl.cart).toEqualData(basket);
      });

      it('should be able to add multiples of the same product', function() {
        ctrl.addItem(shoes)
        expect(ctrl.cart[0].quantity).toBe(2);
      });

      it('can remove a product from the cart', function() {
        var cart_shoes = ctrl.cart[0]
        ctrl.removeItem(cart_shoes)
        expect(ctrl.cart).toEqualData([]);
      });

      it('can remove one from a multiple order', function() {
        ctrl.addItem(shoes)
        var cart_shoes = ctrl.cart[0]
        ctrl.removeItem(cart_shoes)
        expect(ctrl.cart[0].quantity).toBe(1);
      });
    });
    describe("finding the total", function() {
      beforeEach(function() {
        $httpBackend.flush();
        ctrl.addItem(shoes);
        ctrl.addItem(shoes);
      });

      it('should calculate the total', function() {
        expect(ctrl.total).toEqualData(4);
      });
    });

  });
});

"use strict";
describe('blueSeudeApp controllers', function(){

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

  beforeEach(module('blueSeudeApp'));

  describe('appCtrl', function() {
    var ctrl, $httpBackend;
    var itemsIn = [{ id:0, name:"shoes", discount: 0, quantity: 5 }];
    var itemsOut = [{ id:0, name:"shoes", discount: 0, quantity: 4 }];
    var basket = [{ "name":"shoes", "quantity":1 }];
    var shoes = itemsIn[0];

    beforeEach(inject(function(_$httpBackend_, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/items.json').respond(itemsIn);
      // ctrl = $rootctrl.$new();
      ctrl = $controller('appCtrl');
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
        ctrl.addItem(shoes);
      });

      it('should reduce the current stock of the item by 1', function() {
        // var shoes = ctrl.items[0];
        expect(ctrl.items[shoes.id].quantity).toEqualData(4);
      });

      it('should be able to add a product to the cart', function() {
        expect(ctrl.cart).toEqualData(basket);
      });

      it('can remove a product from the cart', function() {
        ctrl.removeItem(shoes)
        expect(ctrl.cart).toEqualData([]);
      });
    });

  });
});

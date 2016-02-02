"use strict";
describe('appCtrl', function(){
  var scope, ctrl, $httpBackend;
  var itemsIn = [{ id:0, name:"shoes", discount: 0, quantity: 5 }];
  var itemsOut = [{ id:0, name:"shoes", discount: 0, quantity: 4 }];
  beforeEach(module('blueSeudeApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/items.json').respond(itemsIn);
    scope = $rootScope.$new();
    ctrl = $controller('appCtrl', {$scope: scope});
  }));

  it('should import a list of items', function() {
    expect(scope.items).toBeUndefined();
    $httpBackend.flush();
    expect(scope.items).toEqual(itemsIn);
  });

  it('should start with an empty cart', function() {

  });
  describe("adding to the cart", function() {
    beforeEach(function() {
      $httpBackend.flush();
      var shoes = scope.items[0];
      ctrl.addToCart(shoes);
    });

    it('should reduce the current stock of the item by 1', function() {
      var shoes = scope.items[0];
      expect(scope.items[shoes.id].quantity).toEqual(4);
    });
    it('should be able to add a product to the cart', function() {
      expect(scope.cart).toEqual(itemsOut);
    });
  });




});

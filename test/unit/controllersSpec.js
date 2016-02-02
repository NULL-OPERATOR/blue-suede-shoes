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
  // beforeEach(function() {
  // });
  it('should be able to add a product to the cart', function() {
    $httpBackend.flush();
    var shoes = scope.items[0];
    ctrl.addToCart(shoes);
    expect(scope.cart).toEqual(itemsOut);
  });

  it('should reduce the current stock of the item by 1', function() {
    $httpBackend.flush();
    var shoes = scope.items[0];
    ctrl.addToCart(shoes);
    expect(scope.items[shoes.id].quantity).toEqual(4);
  });




});

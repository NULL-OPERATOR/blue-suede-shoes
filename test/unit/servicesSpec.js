'use strict';

describe('shopItems', function() {

  beforeEach(module('blueSuedeApp'));
  it('check Data factory exists', inject(function(shopItems) {
      expect(shopItems).toBeDefined();
    }));
});

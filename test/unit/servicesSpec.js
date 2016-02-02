'use strict';

describe('shopItems', function() {

  beforeEach(module('blueSeudeApp'));
  it('check Data factory exists', inject(function(shopItems) {
      expect(shopItems).toBeDefined();
    }));
});

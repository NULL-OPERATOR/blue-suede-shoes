'use strict';

describe('ItemsService', function() {

  beforeEach(module('app'));
  it('check service exists', inject(function(ItemsService) {
      expect(ItemsService).toBeDefined();
    }));
});

'use strict';
(function() {
  function ItemsService ($resource) {
    return $resource('items.json', {}, {
      query: {method:'GET', isArray:true}
    });
  };
angular
  .module('app')
  .factory('ItemsService', ['$resource', ItemsService]);
})();

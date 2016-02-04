'use strict';
angular.module('app.services', [])
.factory('shopItems', ['$resource',
 function($resource) {
    return $resource('items.json', {}, {
      query: {method:'GET', isArray:true}
    });
}])

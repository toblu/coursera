(function () {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function () {
      // Return promise with all categories
      return $http({
        method: 'GET',
        url: ApiBasePath + '/categories.json'
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      // Return promise with all items in category

      return $http({
        method: 'GET',
        url: ApiBasePath + '/menu_items.json',
        params: {
          category: categoryShortName
        }
      });
    };

  }

})();

(function () {
  'use strict';

  angular.module('Data')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['MenuDataService', 'items']
  function CategoryItemsController(MenuDataService, items) {
    var category = this;
    category.items = categories.data;
  }

})();

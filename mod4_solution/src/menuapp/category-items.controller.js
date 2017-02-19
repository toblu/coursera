(function () {
  'use strict';

  angular.module('Data')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['items']
  function CategoryItemsController(items) {
    var category = this;
    category.title = items.data.category.name;
    category.items = items.data.menu_items;
  }

})();

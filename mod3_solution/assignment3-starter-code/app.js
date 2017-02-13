(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        noResult: '<',
        onRemove: '&',
        isEmpty: '&',
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var found = this;
    found.items = [];

    found.searchItems = function () {
      if (found.searchTerm != "") {
        var promise = MenuSearchService.getMatchedMenuItems(found.searchTerm);
        promise.then(function(response) {
          found.items = response;
          if (found.isEmpty()) {
            found.noResult = true;
          }
          else {
            found.noResult = false;
          }
        })
        .catch(function(error) {
          console.log("Something went wrong");
        });
      } else {
        found.items = [];
        found.noResult = true;
      }
    };

    found.removeItem = function(itemIndex) {
      found.items.splice(itemIndex, 1);;
    };

    found.isEmpty = function() {
      return found.items.length === 0;
    };
  }


  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var foundItems = [];

      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function(response) {
        var menuItems = response.data.menu_items;
        var foundItems = [];
        for (var i=0; i<menuItems.length; i++) {
          if (menuItems[i].description.includes(searchTerm)) {
            foundItems.push(menuItems[i]);
          }
        }

        return foundItems;
      });
    };
  }
  
})();

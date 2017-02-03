(function () {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.checkItem = function(itemIndex) {
    ShoppingListCheckOffService.checkItemFromList(itemIndex);
  };

  toBuyList.isEmpty = function() {
    return ShoppingListCheckOffService.isEmpty(toBuyList.items);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItemList = this;

  boughtItemList.items = ShoppingListCheckOffService.getCheckedItems();

  boughtItemList.isEmpty = function() {
    return ShoppingListCheckOffService.isEmpty(boughtItemList.items);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems =
  [
    { name: 'Cookies',
      quantity: 10  },
    { name: 'Milk'  ,
      quantity: 2   },
    { name: 'Bread' ,
      quantity: 1   },
    { name: 'Beer'  ,
      quantity: 4   },
    { name: 'Chips' ,
      quantity: '5' }
  ];

var checkedItems = [];

service.checkItemFromList = function(itemIndex) {
  checkedItems.push(toBuyItems[itemIndex]);
  toBuyItems.splice(itemIndex, 1);
};

service.getItemsToBuy = function() {
  return toBuyItems;
};

service.getCheckedItems = function() {
  return checkedItems;
};

service.isEmpty = function(list) {
  return list.length === 0;
};
}

})();

(function () {
'use strict';

angular.module('public')
.controller('MenuItemController', MenuItemController);

MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();

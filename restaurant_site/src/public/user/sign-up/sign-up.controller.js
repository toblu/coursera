(function () {
'use strict';

angular.module('public')
.controller('SignUpUserController', SignUpUserController);

SignUpUserController.$inject = ['menuItems'];
function SignUpUserController (menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems.menu_items;
}



})();

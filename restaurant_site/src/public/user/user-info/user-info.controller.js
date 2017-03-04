(function () {
'use strict';

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['UserService', 'MenuService'];
function UserInfoController (UserService, MenuService) {
  var $ctrl = this;
  $ctrl.signedUp = UserService.userIsSignedUp();

  if ($ctrl.signedUp) {
    $ctrl.userInfo = UserService.getUserInfo();
    MenuService.getSingleMenuItem($ctrl.userInfo.favDish).then(function (response) {
      $ctrl.menuItem = response;
    });
    console.log($ctrl.menuItem);
  }

}

})();

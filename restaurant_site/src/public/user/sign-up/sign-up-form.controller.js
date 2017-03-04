(function () {
'use strict';

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

SignUpFormController.$inject = ['UserService'];
function SignUpFormController (UserService) {
  var $ctrl = this;
  $ctrl.msg = '';
  $ctrl.displayMsg = false;

  $ctrl.userInfo = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    favDish: ''
                  };

  $ctrl.submit = function () {
    $ctrl.msg = 'Your information has been saved';
    $ctrl.userInfo.favDish = $ctrl.userInfo.favDish.toUpperCase();
    UserService.signUpUser($ctrl.userInfo);
    $ctrl.displayMsg = true;
}

// $ctrl.validMenu = function(shortName) {
//   // var promise = MenuService.getSingleMenuItem(shortName.toUpperCase());
//   // var promise = MenuService.getMenuItems();
//
//     for (var item in $ctrl.menuItems) {
//       // console.log(response.menu_items[item].short_name);
//       if ($ctrl.menuItems[item].short_name.contains(shortName.toUpperCase())) {
//         return true;
//       }
//     }
//     return false;
//   };
}

})();

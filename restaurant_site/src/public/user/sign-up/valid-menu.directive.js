(function () {
'use strict';

angular.module('public')
.directive('validMenu', function () {
  return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.menu = function(modelValue, viewValue) {
          var menuItems = scope.$parent.signUpController.menuItems;

          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }

          for (var item in menuItems) {
            // console.log(response.menu_items[item].short_name);
            if (menuItems[item].short_name === modelValue.toUpperCase()) {
              return true;
            }
          }

          // it is invalid
          return false;
        };
      }
    };
});


})();

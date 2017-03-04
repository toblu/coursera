(function () {
'use strict';

angular.module('public')
.component('signUpForm', {
  templateUrl: 'src/public/user/sign-up/sign-up-form.html',
  controller: 'SignUpFormController',
  controllerAs: 'regForm',
  bindings: {
    menuItems: '<'
  }
});

})();

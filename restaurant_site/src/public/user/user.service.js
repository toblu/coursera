(function () {
'use strict';

angular.module('public')
.service('UserService', UserService);

UserService.$inject = ['$http'];
function UserService ($http) {
  var service = this;
  service.signedUp = false;

  service.userInfo = null;

  service.getUserInfo = function () {
    return service.userInfo;
  };

  service.userIsSignedUp = function () {
    return service.signedUp;
  };

  service.signUpUser = function (userInfo) {
    service.userInfo = userInfo;
    service.signedUp = true;
  };
}

})();

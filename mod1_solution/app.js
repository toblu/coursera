(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.totalNoOfDishes = 0;
    $scope.message = "";

    $scope.displayMessage = function () {
      $scope.totalNoOfDishes = countDishes($scope.dishes);
      if (isTooMany($scope.totalNoOfDishes) == true) {
        $scope.message="Too much!";
      } else {
        $scope.message="Enjoy!";
      }
    };

    function countDishes(dishes) {
      var totalNoOfDishes = dishes.split(',').length;
      return totalNoOfDishes;
    }

    function isTooMany(noOfDishes) {
      return noOfDishes > 3;
    };
  }

})();

(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.totalNoOfDishes = 0;
    $scope.message = "";
    $scope.colour = "";

    /**
    Displays message to the user. Does not count empty elements.
    */
    $scope.displayMessage = function () {
      var dishes = $scope.dishes.replace(/\s/g, ''); //Remove all white spaces
      $scope.totalNoOfDishes = countDishes(dishes); //Count dishes
      if (dishes == "") {
        $scope.message = "Please enter data first"; //Nothing but whitespace inputed
        $scope.colour = "red"; //Set font and border colour to red
      } else if ($scope.totalNoOfDishes < 4) {
        $scope.message = "Enjoy!"; //3 or less dishes
        $scope.colour = "green"; // Set font and border colour to green
      } else {
        $scope.message = "Too much!"; //4 or more dishes
        $scope.colour = "red"; //Set font and border colour to red
      }
    };

    /**
    Counts the number of dishes. Does not consider empty elements to the count.
    */
    function countDishes(dishes) {
      var totalNoOfDishes = dishes.split(',').filter(String).length; //Split comma-separated values, and filter out empty elements
      return totalNoOfDishes; // Number of non-empty elements
    }
  }

})();

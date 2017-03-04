(function() {
'use strict';

angular.module('common')
.component('loading', {
  template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
  controller: 'LoadingController'
});

})();

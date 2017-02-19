(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {


    // Redirect to home page if no URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
    .state('home', {
      templateUrl: 'src/templates/home.template.html',
      url: '/'
    })

    // Categories page
    .state('categories', {
      templateUrl: 'src/templates/main-category-list.template.html',
      url: '/categories',
      controller: 'CategoryListController as categoryList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // Items in category page
    .state('categories.categoryItems', {
      templateUrl: 'src/templates/category-items.template.html',
      url: '/category-items/{categoryShortName}',
      controller: 'CategoryItemsController as categoryItems',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }


})();

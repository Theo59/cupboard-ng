(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.category', {
        url: '/cupboard/:categoryName',
        views: {
          'tab-cupboard': {
            templateUrl: 'category/category.html',
            controller: 'CategoryController'
          }
        }
      })
  }

})();

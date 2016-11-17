(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.subcategory', {
        url: '/cupboard/:categoryName/:subcategoryName',
        views: {
          'tab-cupboard': {
            templateUrl: 'subcategory/subcategory.html',
            controller: 'SubcategoryController'
          }
        }
      })
  }

})();

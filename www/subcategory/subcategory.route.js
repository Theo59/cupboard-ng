/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tabs.subcategory', {
        url: '/cupboard/:categoryId/:subcategoryId',
        views: {
          'tab-cupboard': {
            templateUrl: 'subcategory/subcategory.html',
            controller: 'SubcategoryController'
          }
        }
      })
  }

})();

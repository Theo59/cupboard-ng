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
      .state('tabs.category', {
        url: '/cupboard/:categoryId',
        views: {
          'tab-cupboard': {
            templateUrl: 'category/category.html',
            controller: 'CategoryController'
          }
        }
      })
  }

})();

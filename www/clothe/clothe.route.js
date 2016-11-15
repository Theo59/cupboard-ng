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
      .state('tabs.clothe', {
        url: '/cupboard/:categoryId/:subcategoryId/clotheId',
        views: {
          'tab-cupboard': {
            templateUrl: 'clothe/clothe.html',
            controller: 'ClotheController'
          }
        }
      })
  }

})();

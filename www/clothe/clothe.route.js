(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.clothe', {
        url: '/cupboard/:categoryName/:subcategoryName/:clotheId',
        views: {
          'tab-cupboard': {
            templateUrl: 'clothe/clothe.html',
            controller: 'ClotheController'
          }
        }
      })
  }

})();

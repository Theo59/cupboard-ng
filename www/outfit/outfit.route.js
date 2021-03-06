(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.outfit', {
        url: '/outfit',
        views: {
          'tab-outfit': {
            templateUrl: 'outfit/outfit.html',
            controller: 'OutfitController'
          }
        }

      })
  }

})();

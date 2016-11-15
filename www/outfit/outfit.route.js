(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('outfit', {
        url: '/outfit',
        templateUrl: 'outfit/outfit.html',
        controller: 'OutfitController'


      })

  }

})();

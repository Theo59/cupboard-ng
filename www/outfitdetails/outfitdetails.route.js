(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.outfitdetails', {
        url: '/outfit/:outfitdetailsId',
        views: {
          'tab-outfit': {
            templateUrl: 'outfitdetails/outfitdetails.html',
            controller: 'OutfitdetailsController'
          }
        }
      })
  }
})();


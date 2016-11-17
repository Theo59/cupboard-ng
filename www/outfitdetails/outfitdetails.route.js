(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('outfitdetails', {
        url: '/outfit/:outfitdetailsId',
       /* url: '/outfitdetails',*/
        templateUrl: 'outfitdetails/outfitdetails.html',
        controller: 'OutfitdetailsController'
      })
  }
})();


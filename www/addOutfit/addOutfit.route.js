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
      .state('tab.add-outfit', {
        /* url: '/outfit/:outfitdetailsId',*/
        url: '/outfit/addOutfit',
        views: {
          'tab-outfit': {
            templateUrl: 'addOutfit/addOutfit.html',
            controller: 'AddOutfitController'
          }
        }

      })
  }

})();

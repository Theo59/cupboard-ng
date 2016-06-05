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
      .state('menu.clothe', {
        url: '/garderobe/clothes/one',
        views: {
          'home': {
            templateUrl: 'clothe/clothe.html',
            controller: 'ClotheController'
          }
        }
      })
  }

})();

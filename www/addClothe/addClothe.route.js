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
      // .state('add-clothe', {
      //   url: '/add-clothe',
      //   templateUrl: 'addClothe/addClothe.html',
      //   controller: 'AddClotheController'
      // })
      .state('menu.add-clothe', {
        url: '/garderobe/add-clothe',
        views: {
          'home': {
            templateUrl: 'addClothe/addClothe.html',
            controller: 'AddClotheController'
          }
        }
      })
  }

})();

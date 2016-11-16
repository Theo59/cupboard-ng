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
      .state('tab.add-clothe', {
        url: '/cupboard/add-clothe',
        views: {
          'tab-cupboard': {
            templateUrl: 'addClothe/addClothe.html',
            controller: 'AddClotheController'
          }
        }

      })
  }

})();

/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('menu', {
        url: '/home',
        templateUrl: 'templates/menu.html',
        abstract:true
      });

    $urlRouterProvider
      .otherwise('signup');

  }

})();

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
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/footer.html'
      });
    //
    // $urlRouterProvider
    //  .otherwise('login');

    $urlRouterProvider
     .otherwise('login');

  }

})();

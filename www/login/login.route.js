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
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginController'
      })
  }

})();

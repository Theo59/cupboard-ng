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
      .state('reset', {
        url: '/reset',
        templateUrl: 'reset/reset.html',
        controller: 'ResetController'
      })
  }

})();



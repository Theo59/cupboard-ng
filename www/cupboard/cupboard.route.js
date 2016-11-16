(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.cupboard', {
        url: '/cupboard',
        views: {
          'tab-cupboard': {
            templateUrl: 'cupboard/cupboard.html',
            controller: 'CupboardController'
          }
        }
      })

  }

})();

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
      .state('menu.home', {
        url: '/',
        views: {
          'home': {
            templateUrl: 'home/home.html',
            controller: 'HomeController'
            //resolve: {
            //  /* @ngInject */
            //  user: function (UserService) {
            //    return UserService.getUser();
            //  }
            //}

          }
        }
      })
  }

})();

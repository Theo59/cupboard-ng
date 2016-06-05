/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('LogoutController', LogoutController);

  /* @ngInject */
  function LogoutController($scope, UserService, $ionicHistory) {

    $scope.logOut = logOut;


    function logOut() {
      UserService.logOut();
    }
  }

})();

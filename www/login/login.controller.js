/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($scope, UserConnexion, $ionicHistory) {

    $scope.user = {};
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $scope.$watchGroup(['user.username', 'user.password'], function (newVal) {
      var user = newVal[0] != undefined && newVal[0].length > 4,
        password = newVal[1] != undefined && newVal[1].length > 4;

      $scope.ready = !!(user && password);
    });


    $scope.login = function (user) {
      UserConnexion.userLogin(user.username, user.password);
    };
  }

})();

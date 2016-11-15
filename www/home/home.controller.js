/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController($scope, ClotheService) {

    $scope.users = [];
    $scope.saveUser = saveUser;

    activate();

    function activate() {
      getClothe();
    }

    function getClothe() {
      // ClotheService.getClothes();
    }

    function saveUser(userName){
      var User = Parse.Object.extend("users");
      var user = new User();

      user.set("username", userName);

      user.save(null, {
        success: function(user) {
          $scope.users = user;
          alert('New object created with objectId: ' + user.id);
        },
        error: function(user, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });
    }
  }

})();

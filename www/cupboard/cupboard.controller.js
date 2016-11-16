/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('CupboardController', CupboardController);

  /* @ngInject */
  function CupboardController($scope) {

    $scope.categories = [];

    activate();

    function activate() {
      getCategories();
    }

    function getCategories() {
      var Categorie = Parse.Object.extend("Categorie");
      var query = new Parse.Query(Categorie);
      query.find({
        success: function(results) {
          console.log(results);
          $scope.categories = results;
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }
  }

})();

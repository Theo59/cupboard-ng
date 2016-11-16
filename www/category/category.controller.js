/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('CategoryController', CategoryController);

  /* @ngInject */
  function CategoryController($scope, $stateParams) {

    activate();

    function activate () {
      getCategoriy();
    }

    function getCategoriy () {
      var Categorie = Parse.Object.extend("Categorie");
      var query = new Parse.Query(Categorie);
      query.get($stateParams.categoryId, {
        success: function(results) {
          $scope.category = results;
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

  }

})();

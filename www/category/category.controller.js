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
    $scope.categorie= {};

    activate();

    function activate () {
      getCategoriy();
    }

    function getCategoriy () {
      var Categorie = Parse.Object.extend("Categorie");
      var query = new Parse.Query(Categorie);
      query.get($stateParams.categoryId, {
        success: function(result) {
          $scope.categorie = {
            id: result.id,
            subcategories: result.get('subcategories')
          }
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

  }

})();

/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('SubcategoryController', SubcategoryController);

  /* @ngInject */
  function SubcategoryController($scope, $stateParams) {

    $scope.clothes = [];

    getClothes();

    function getClothes () {
      var Clothe = Parse.Object.extend("Clothe");
      var query = new Parse.Query(Clothe);
      query.equalTo("subCategorie", $stateParams.subcategoryName);
      query.find({
        success: function(results) {
          angular.forEach(results, function(result) {
            $scope.clothes.push({
              id: result.id,
              name: result.get('name'),
              pictureUrl: result.get('picture')
            });
          });
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

  }

})();

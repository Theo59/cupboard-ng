/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('ClotheInSellController', ClotheInSellController);

  /* @ngInject */
  function ClotheInSellController($scope, $stateParams) {


    getClotheInSell();

    function getClotheInSell () {
      var Clothe = Parse.Object.extend("Clothe");
      var query = new Parse.Query(Clothe);
      query.get($stateParams.clotheId, {
        success: function(result) {
          $scope.clothe = {
            id: result.id,
            name: result.get('name'),
            size: result.get('size'),
            color: result.get('color'),
            brandt: result.get('brandt'),
            categorie: result.get('categorie'),
            subcategorie: result.get('subCategorie'),
            picture: result.get('picture'),
            sellState: result.get('sellState')
          };
          if ($scope.clothe.sellState === 1) {
            $scope.clothe.inSell = false;
          } else if ($scope.clothe.sellState === 2) {
            $scope.clothe.inSell = true;
          }
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

    function toggleChange () {
      alert($scope.clothe.inSell);
    }
  }

})();

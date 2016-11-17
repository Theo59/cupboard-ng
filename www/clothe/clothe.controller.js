/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('ClotheController', ClotheController);

  /* @ngInject */
  function ClotheController($scope, $stateParams) {

    $scope.toggleChange = toggleChange;

    getClothe();

    function getClothe () {
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
          } else if (!$scope.clothe.sellState) {
            $scope.clothe.inSell = false;
          }
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

    function toggleChange () {
      var Clothe = Parse.Object.extend("Clothe");
      var clothe = new Clothe();
      clothe.id = $scope.clothe.id;

      if ($scope.clothe.inSell) {
        clothe.set("sellState", 2);
      } else {
        clothe.set("sellState", 1);
      }

      clothe.save(null, {
        success: function(clothe) {
        },
        error: function () {
          alert('fail');
        }
      });
    }
  }

})();

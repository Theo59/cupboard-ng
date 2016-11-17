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
            picture: result.get('picture')
          }
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }
  }

})();

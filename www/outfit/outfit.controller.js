/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('OutfitController', OutfitController);

  /* @ngInject */
  function OutfitController($scope) {

    $scope.outfits = [];

    activate();

    function activate() {
      getOutfits();
    }

    function getOutfits() {
      var Outfit = Parse.Object.extend("Outfit");
      var query = new Parse.Query(Outfit);
      query.find({
        success: function(results) {
          console.log(results);
          angular.forEach(results, function(result) {
            $scope.outfits.push({
              name: result.get('name'),
              //subcategories: result.get('subcategories')
              id: result.id,
              update: result.get('updatedAt')
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
          angular.forEach(results, function(result) {
            $scope.categories.push({
              name: result.get('name'),
              subcategories: result.get('subcategories')
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


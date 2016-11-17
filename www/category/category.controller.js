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
      query.equalTo("name", $stateParams.categoryName);
      query.find().then(function (result) {
        $scope.categorie = {
          id: result[0].id,
          name: result[0].get('name'),
          subcategories: result[0].get('subcategories')
        }
      });
    }
  }

})();

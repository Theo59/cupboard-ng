/**
 * Created by Theo on 05/06/2016.
 */
(function () {
  'use strict';

  angular
    .module('cupboard-ng')
    .factory('CategorieService', function () {

      var categorieService = {};
      categorieService.getCategories = getCategories;

      function getCategories() {
        var data = [];
        var Categorie = Parse.Object.extend("Categorie");
        var query = new Parse.Query(Categorie);
        query.find({
          success: function(results) {
            console.log(results);
            return results;
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

      }

      return categorieService;

    })

})();

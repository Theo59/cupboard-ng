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
        var result = query.find({
          success: function(results) {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              data[i] = object.get('name');
            }
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

        return result;
      }

      return categorieService;

    })

})();

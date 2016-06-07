/**
 * Created by Theo on 05/06/2016.
 */
(function () {
  'use strict';

  angular
    .module('cupboard-ng')
    .factory('ClotheService', function () {

      var clotheService = {};

      clotheService.save = save;
      clotheService.getClothes = getClothes;

      function save(newClothe){
        var user = Parse.User.current();

        var Clothe = Parse.Object.extend("Clothe");
        var clothe = new Clothe();

        clothe.set("name", newClothe.name);
        clothe.set("brandt", newClothe.brandt);
        clothe.set("color", newClothe.color);
        clothe.set("size", newClothe.size);
        clothe.set("categorie", newClothe.categorie);
        clothe.set("subCategorie", newClothe.subcategorie);
        clothe.set("pictureUrl", newClothe.pictureUrl);
        clothe.set("user", user);

        clothe.save(null, {
          success: function(newClothe) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created by user: ' + newClothe.name);
          },
          error: function(newClothe, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
          }
        });
      }

      function getClothes() {
        var user = Parse.User.current();
        var Clothe = Parse.Object.extend("Clothe");
        var query = new Parse.Query(Clothe);
        query.equalTo("user", user);
        query.find({
          success: function(results) {
            alert("Successfully retrieved " + results.length + " clothes.");
            // Do something with the returned Parse.Object values
            //for (var i = 0; i < results.length; i++) {
            //  var object = results[i];
            //  alert(object.id + ' - ' + object.get('playerName'));
            //}
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
      }

      return clotheService;

    })

})();

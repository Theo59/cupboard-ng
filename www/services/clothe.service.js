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

      function save(newClothe, uri){

        var user = Parse.User.current();

        var Clothe = Parse.Object.extend("Clothe");
        var clothe = new Clothe();

        // alert(uri);
        var file = {base64:uri};
        var name = "photo.png";

        var parseFile = new Parse.File(name, file);


        // alert(parseFile);

        parseFile.save().then(function(response) {

        }, function(error) {
        });

        clothe.save().then(function() {
          clothe.set("name", newClothe.name);
          clothe.set("brandt", newClothe.brandt);
          clothe.set("color", newClothe.color);
          clothe.set("size", newClothe.size);
          clothe.set("categorie", newClothe.selectedCat.name);
          clothe.set("subCategorie", newClothe.selectedSubcat);
          clothe.set("user", user);
          clothe.set("picture", parseFile);

          clothe.save(null, {
            success: function(newClothe) {
              toastr.success(newClothe.get('name') + ' ajouté');

            },
            error: function(newClothe, error) {
              // Execute any logic that should take place if the save fails.
              // error is a Parse.Error with an error code and message.
              alert('Failed to create new object, with error code: ' + error.message);
            }
          });
        }, function(error) {
          alert(error);
        });


      }

      function getClothes() {
        var user = Parse.User.current();
        var Clothe = Parse.Object.extend("Clothe");
        var query = new Parse.Query(Clothe);
        query.equalTo("user", user);
        query.find({
          success: function(results) {
            // alert("Successfully retrieved " + results.length + " clothes.");
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

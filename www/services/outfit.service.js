(function () {
  'use strict';

  angular
    .module('cupboard-ng')
    .factory('OutfitService', function () {

      var outfitService = {};

      outfitService.save = save;
      outfitService.getoutfit = getoutfits;

      function save(newOutfine){

        var Outfit = Parse.Object.extend("Outfit");
        var outfit = new Outfit();

        outfine.save().then(function() {
          outfit.set("top", newOutfine.top);
          outfit.set("middle", newOutfine.middle);
          outfit.set("bottom", newOutfine.bottom);

          outfit.save(null, {
            success: function(newOutfit) {
              // Execute any logic that should take place after the object is saved.
              alert('New outfit created by user: ' + newOutfit.top);
            },
            error: function(newOutfit, error) {
              // Execute any logic that should take place if the save fails.
              // error is a Parse.Error with an error code and message.
              alert('Failed to create new object, with error code: ' + error.message);
            }
          });
        }, function(error) {
          alert(error);
        });


      }

      function getOutfit() {

       /*
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
        */
      }

      return outfitService;

    })

})();

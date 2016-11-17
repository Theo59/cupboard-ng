/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('OutfitdetailsController', OutfitdetailsController);

  /* @ngInject */
  function OutfitdetailsController($scope, $stateParams, $ionicModal) {

    $scope.outfitdetails = {};
    $scope.clothes = [];

    activate();

    function activate () {
      getDetails();
      getClothe();
    }

    function getDetails() {
      $scope.outfitdetails.clothes = [];
      var Outfit = Parse.Object.extend("Outfit");
      var query = new Parse.Query(Outfit);
      query.get($stateParams.outfitdetailsId, {
        success: function(result) {
          $scope.outfitdetails.id = result.id;
          $scope.outfitdetails.name = result.get('name');
          $scope.outfitdetails.clothes.push({id: result.get('hat'), type: 'Chapeau'});
          $scope.outfitdetails.clothes.push({id: result.get('accesorie'), type: 'Accessoire'});
          $scope.outfitdetails.clothes.push({id: result.get('chest'), type: 'Torse'});
          $scope.outfitdetails.clothes.push({id: result.get('trouser'), type: 'Pantalon'});
          $scope.outfitdetails.clothes.push({id: result.get('foot'), type: 'Pieds'});


          angular.forEach($scope.outfitdetails.clothes, function (clothe) {
            var Clothe = Parse.Object.extend("Clothe");
            var query = new Parse.Query(Clothe);
            query.get(clothe.id, {
              success: function (result) {
                clothe.name = result.get('name');
                clothe.picture = result.get('picture');

              },
              error: function (error) {
              }
            })
          })
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

    function getClothe(){

      var Clothe = Parse.Object.extend("Clothe");
      var query = new Parse.Query(Clothe);
     // query.equalTo("subCategorie", $stateParams.subcategoryName);
      query.find({
        success: function(result) {
          angular.forEach(result, function(result) {
            $scope.clothes.push({
              id: result.id,
              name: result.get('name'),
              picture: result.get('picture')
            });
          });
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

    $ionicModal.fromTemplateUrl('outfitdetails/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function(selectedType) {
      $scope.selectedType = selectedType;
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.updateElement = function($param){
      //alert($stateParams.outfitdetailsId);
      //alert($paxram.id);
      //alert($scope.selectedType);

      var sType = "";
      var Outfit = Parse.Object.extend("Outfit");
      var outfit = new Outfit();
      outfit.id = $stateParams.outfitdetailsId;


      switch($scope.selectedType) {
        case "Chapeau":
          sType = 'hat';
          break;
        case "Accessoire":
          sType = 'accesorie';
          break;
        case "Torse":
          sType = 'chest';
          break;
        case "Pantalon":
          sType = 'trouser';
          break;
        case "Pieds":
          sType = 'foot';
          break;
        default:
          break;
      }

      outfit.set(sType, $param.id);

      outfit.save(null, {
        success: function(outfit) {
          $scope.outfitdetails = {};
          getDetails();
        },
        error: function () {
          alert('fail');
        }
      });

      $scope.modal.hide();



      /*
      var Outfit = Parse.Object.extend("Outfit");
      var outfit = new Outfit();
      outfit.id = $stateParams.outfitdetailsId;


      outfit.set("chest", $scope.outfit);
      outfit.set("sellState", 1);
      */




      //document.getElementById('elementHead').innerHTML = "<i class='icon ion-happy'></i> test vetement";



      /*
      var Outfit = Parse.Object.extend("Outfit");
        var outfit = new Outfit();
        outfit.id = $scope.outfit.id;
        clothe.set("chest", $scope.outfit);
        clothe.set("sellState", 1);


        clothe.save(null, {
          success: function(clothe) {
          },
          error: function () {
            alert('fail');
          }
        });
      $scope.modal.hide();
    }*/
    }
  }

})();

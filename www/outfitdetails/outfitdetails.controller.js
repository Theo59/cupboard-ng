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
    $scope.outfitdetails.clothes = [];
    $scope.clothes = [];

    activate();

    function activate () {
      getDetails();
      getClothe();
    }

    function getDetails() {
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

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };


  }

})();

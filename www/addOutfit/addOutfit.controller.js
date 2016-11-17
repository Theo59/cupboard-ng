/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('AddOutfitController', AddOutfitController);

  /* @ngInject */
  function AddOutfitController($scope, $stateParams, $ionicModal) {

    $scope.outfitdetails = {};
    $scope.outfitdetails.clothes = [];
    $scope.clothes = [];

    activate();

    function activate () {
      getClothe();
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

    $ionicModal.fromTemplateUrl('addOutfit/modal.html', {
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

    $scope.addElement = function(){
      //document.getElementById('elementHead').innerHTML = "<i class='icon ion-happy'></i> test vetement";
      $scope.modal.hide();
    }


    function saveOutfit(outfit) {
        alert("Enregistrer");
       //OutfitService.save(outfit);
     }
  }

})();

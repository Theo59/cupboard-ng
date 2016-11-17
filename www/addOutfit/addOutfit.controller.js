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
    $scope.types = [
      'Chapeau',
      'Accessoire',
      'Torse',
      'Pantalon',
      'Pieds'
    ];

    activate();

    function activate() {
      getClothe();
    }

    function getClothe() {
      var Clothe = Parse.Object.extend("Clothe");
      var query = new Parse.Query(Clothe);
      // query.equalTo("subCategorie", $stateParams.subcategoryName);
      query.find({
        success: function (result) {
          angular.forEach(result, function (result) {
            $scope.clothes.push({
              id: result.id,
              name: result.get('name'),
              picture: result.get('picture')
            });
          });
        },
        error: function (error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

    $ionicModal.fromTemplateUrl('addOutfit/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

     $scope.openModal = function() {
        $scope.modal.show();
     };

    /*
    $scope.openModal = function (selectedType) {
      $scope.selectedType = selectedType;
      $scope.modal.show();
    };
    */
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
/*
    $scope.addElement = function ($param) {
      var sType = "";
      var Outfit = Parse.Object.extend("Outfit");
      var outfit = new Outfit();

      switch ($scope.selectedType) {
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
      */
      /* document.getElementById('elementHead').innerHTML = "<i class='icon ion-happy'></i> test vetement";*/

     /* $scope.modal.hide();*/
    }

    function saveOutfit(outfit) {

      var sType = "";
      var Outfit = Parse.Object.extend("Outfit");
      var outfit = new Outfit();

      angular.forEach(outfit, function (outfit) {

        switch ($scope.selectedType) {
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
      });


      outfit.save(null, {
        success: function (outfit) {
          //$scope.outfitdetails = {};
          //getDetails();
        },
        error: function () {
          //alert('fail');
        }
      });
    }
})();

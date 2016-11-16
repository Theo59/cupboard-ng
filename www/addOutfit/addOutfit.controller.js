/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('AddOutfitController', AddOutfitController);

  /* @ngInject */
  function AddOutfitController($scope,$ionicModal) {

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
      document.getElementById('elementHead').innerHTML = "<i class='icon ion-happy'></i> test vetement";
      $scope.modal.hide();
    }
    // function saveOutfit(outfit) {
    //   OutfitService.save(outfit);
    // }
  }

})();

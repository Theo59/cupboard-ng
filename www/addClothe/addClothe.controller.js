/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('AddClotheController', AddClotheController);

  /* @ngInject */
  function AddClotheController($scope, $cordovaCamera, ClotheService, $state) {

    $scope.takePicture = takePicture;
    $scope.saveClothe = saveClothe;
    $scope.categories = [];

    var imageData = '';

    getCategories();

    function getCategories() {
      var Categorie = Parse.Object.extend("Categorie");
      var query = new Parse.Query(Categorie);
      query.find({
        success: function(results) {
          console.log(results);
          angular.forEach(results, function(result) {
            $scope.categories.push({
              name: result.get('name'),
              subcategories: result.get('subcategories')
            });
          });
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

    $scope.pictureTaken = false;

    function takePicture() {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true
      };

      $cordovaCamera.getPicture(options).then(function (ResponseImageData) {
        imageData = ResponseImageData;
        $scope.imgURI = "data:image/jpeg;base64," + ResponseImageData;
      }, function (err) {
        // An error occured. Show a message to the user
      });

      $scope.pictureTaken = true;
    }

    function saveClothe(clothe) {
      ClotheService.save(clothe, imageData);
      $state.go('tab.cupboard');
    }
  }

})();

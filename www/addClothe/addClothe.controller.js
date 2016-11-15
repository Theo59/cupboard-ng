/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('AddClotheController', AddClotheController);

  /* @ngInject */
  function AddClotheController($scope, $cordovaCamera, ClotheService) {

    $scope.takePicture = takePicture;
    $scope.saveClothe = saveClothe;

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

      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        // An error occured. Show a message to the user
      });

      $scope.pictureTaken = true;
    }

    function saveClothe(clothe) {
      ClotheService.save(clothe, $scope.pictureTaken);
    }
  }

})();

/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('AddClotheController', AddClotheController);

  /* @ngInject */
  function AddClotheController($scope, CameraService) {

    $scope.images = [];
    $scope.getPhoto = getPhoto;
    $scope.urlForImage = urlForImage;

    function getPhoto() {
      CameraService.getPicture().then(function(imageURI) {
        console.log(imageURI);
        $scope.lastPhoto = imageURI;
      }, function(err) {
        console.err(err);
      }, {
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: false
      });
    }

    function urlForImage(imageName) {
      var name = imageName.substr(imageName.lastIndexOf('/') + 1);
      var trueOrigin = cordova.file.dataDirectory + name;
      return trueOrigin;
    }


  }

})();

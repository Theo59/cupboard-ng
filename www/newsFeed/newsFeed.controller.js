/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('NewsFeedController', NewsFeedController);

  /* @ngInject */
  function NewsFeedController($scope) {

    $scope.clothesInSell = [];

    $scope.reload = reload;

    getClothesInSell();

    function getClothesInSell() {
      var Clothe = Parse.Object.extend("Clothe");
      var query = new Parse.Query(Clothe);
      query.equalTo('sellState', 2);
      query.find({
        success: function(results) {
          angular.forEach(results, function(result) {
            $scope.clothesInSell.push({
              id: result.id,
              name: result.get('name'),
              brandt: result.get('brandt'),
              size: result.get('size'),
              picture: result.get('picture')
            });
          });
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

    function reload () {
      $scope.clothesInSell = [];
      getClothesInSell();
      $scope.$broadcast('scroll.refreshComplete');

    }
  }

})();

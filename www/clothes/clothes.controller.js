/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .controller('ClothesController', ClothesController);

  /* @ngInject */
  function ClothesController($scope) {
    $scope.clothes = [
        {
            "id": 1,
            "name": "Robe Tommy",
            "categories": [
                "Robe"
            ],
            "subcategories": [
                "Longue Robe"
            ],
            "marque": "Tommy Hilfiger",
            "colors": [
                "bleu",
                "rouge",
                "blanc"
            ],
            "size": "38",
            "picture": [
                "https://s-media-cache-ak0.pinimg.com/236x/0d/49/53/0d49535360f0d3f64834d8a69db7343f.jpg"
            ]
        },
        {
            "id": 2,
            "name": "Robe Nafnaf",
            "categories": [
                "Robe"
            ],
            "subcategories": [
                "Longue Robe"
            ],
            "marque": "Nafnaf",
            "colors": [
                "noire",
                "blanc"
            ],
            "size": "38",
            "picture": [
                "https://photos6.spartoo.com/photos/104/1043058/1043058_1200_A.jpg"
            ]
        },
        {
            "id": 3,
            "name": "Robe Tommy Hilfiger",
            "categories": [
                "Robe"
            ],
            "subcategories": [
                "Longue Robe"
            ],
            "marque": "Tommy Hilfiger",
            "colors": [
                "bleu",
                "blanc"
            ],
            "size": "38",
            "picture": [
                "http://photos6.shoes.fr/photos/817/817124/817124_350_A.jpg"
            ]
        }
    ]

  }

})();

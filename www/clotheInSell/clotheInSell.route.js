(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.clothe-in-sell', {
        url: '/newsFeed/:clotheId',
        views: {
          'tab-news-feed': {
            templateUrl: 'clotheInSell/clotheInSell.html',
            controller: 'ClotheInSellController'
          }
        }
      })
  }

})();

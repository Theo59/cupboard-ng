/**
 * Created by Theo on 05/06/2016.
 */
(function() {
  'use strict';

  angular
    .module('cupboard-ng')
    .config(RouteConfiguration);

  /* @ngInject */
  function RouteConfiguration ($stateProvider) {
    $stateProvider
      .state('tab.news-feed', {
        url: '/newsFeed',
        views: {
          'tab-news-feed': {
            templateUrl: 'newsFeed/newsFeed.html',
            controller: 'NewsFeedController'
          }
        }
      })
  }

})();

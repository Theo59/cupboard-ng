angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('menu.home', {
    url: '/',
    views: {
      'home': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/home',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.cupboard', {
    url: '/garderobe',
    views: {
      'home': {
        templateUrl: 'templates/cupboard.html',
        controller: 'CupboardCtrl'
      }
    }
  })

  .state('menu.looks', {
    url: '/looks',
    views: {
      'home': {
        templateUrl: 'templates/looks.html',
        controller: 'LooksCtrl'
      }
    }
  })

  .state('menu.clothes', {
    url: '/garderobe/clothes',
    views: {
      'home': {
        templateUrl: 'templates/clothes.html',
        controller: 'ClothesCtrl'
      }
    }
  })

  .state('menu.a_clothe', {
    url: '/garderobe/clothes/one',
    views: {
      'home': {
        templateUrl: 'templates/a_clothe.html',
        controller: 'AclothesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home/')



});

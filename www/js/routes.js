angular.module('cupboard-ng.routes', [])

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
        templateUrl: 'home/home.html',
        controller: 'HomeController'
        //resolve: {
        //  /* @ngInject */
        //  user: function (UserService) {
        //    return UserService.getUser();
        //  }
        //}

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
        templateUrl: 'cupboard/cupboard.html',
        controller: 'CupboardController'
      }
    }
  })

  .state('menu.looks', {
    url: '/looks',
    views: {
      'home': {
        templateUrl: 'looks/looks.html',
        controller: 'LooksController'
      }
    }
  })

  .state('menu.clothes', {
    url: '/garderobe/clothes',
    views: {
      'home': {
        templateUrl: 'clothes/clothes.html',
        controller: 'ClothesController'
      }
    }
  })

  .state('menu.clothe', {
    url: '/garderobe/clothes/one',
    views: {
      'home': {
        templateUrl: 'clothe/clothe.html',
        controller: 'ClotheController'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'signup/signup.html',
    controller: 'SignupController'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  })
  .state('reset', {
    url: '/reset',
    templateUrl: 'reset/reset.html',
    controller: 'ResetController'
  })

$urlRouterProvider.otherwise('signup');



});

angular.module('app', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'mainController',
    })
    .when('/main', {
      templateUrl: 'partials/_main.html',
    })
    .when('/endBid', {
      templateUrl: 'partials/_endBid.html',
    })
    .when('/addQuestion', {
      templateUrl: 'partials/_addQuestion.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);

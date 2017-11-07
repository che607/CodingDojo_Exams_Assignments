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
    .when('/play', {
      templateUrl: 'partials/_play.html',
    })
    .when('/addQuestion', {
      templateUrl: 'partials/_addQuestion.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);

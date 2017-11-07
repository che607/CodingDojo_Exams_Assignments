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
    .when('/addQuestion', {
      templateUrl: 'partials/_addQuestion.html',
    })
    .when('/answerQuestion/:id', {
      templateUrl: 'partials/_answerQuestion.html',
    })
    .when('/showAnswer/:id', {
      templateUrl: 'partials/_showAnswer.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);

angular.module('app')
  .controller('qaController',
  [ '$scope', '$location', '$route', 'qaFactory', 'authService', 'userService', '$routeParams', '$window',
  function($scope, $location, $route, qaFactory, authService, userService, $routeParams, $window){
    $scope.isAuthed = authService.isAuthed();

    console.log("route: ", $routeParams);
    $scope.param = $routeParams

    $scope.getQuestion = function(id){
      console.log("route", id)
      qaFactory.getQuestion(id, function(errorsArray, question){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $scope.question = question;
        console.log("QUESTION: ", $scope.question);
      });
    };


    $scope.getQuestions = function(){
      qaFactory.getQuestions(function(questions){
        $scope.questions = questions;
      });
    };
    $scope.getQuestions();

    $scope.addQuestion = function(newQuestion){
      newQuestion.answerCount = 0;
      console.log("new question: ", newQuestion);
      qaFactory.addQuestion(newQuestion, function(errorsArray, question){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $location.path('/main');
      });

    };

    $scope.addAnswer = function(newAnswer, questionId){
      newAnswer.user = $scope.currentUser
      console.log("new answer: ", newAnswer);
      qaFactory.addAnswer(newAnswer, questionId, function(errorsArray, answer){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        console.log("go to main");
        $location.path('/main');
      });
    };

    $scope.getAnswers = function(id){
      console.log("route", id)
      qaFactory.getAnswers(id, function(errorsArray, answers){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $scope.questionWithAnswers = answers;
        console.log("QUESTION, line 60: ", $scope.questionWithAnswers);
      });
    };

    $scope.init = function(id){
      $scope.getQuestion(id);
      $scope.getAnswers(id);
    };

    $scope.currentUser = function(){
      userService.currentUser(function(currentUser){
        $scope.currentUser = currentUser
      })
    };
    $scope.currentUser();

    $scope.answerQuestion = function(){
        $location.path('/answerQuestion');
    };
    //
    // $scope.endBid = function(){
    //   if($scope.bids11[0] && $scope.bids21[0] && $scope.bids31[0]){
    //     $location.path('/endBid');
    //   }
    //   else{
    //     $location.path('/main');
    //   }
    // };

    function displayErrors(errorArrayOrString){
      $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString];
    };

  }]);

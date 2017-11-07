angular.module('app')
  .controller('triviaController',
  [ '$scope', '$location', '$route', 'triviaFactory', 'authService', 'userService',
  function($scope, $location, $route, triviaFactory, authService, userService){
    $scope.isAuthed = authService.isAuthed();

    $scope.questions = [];

    $scope.randomize = function () {
        return 0.5 - Math.random();
    };

    $scope.addQuestion = function(newQuestion){
      console.log("new question: ",newQuestion)

      triviaFactory.addQuestion(newQuestion, function(errorsArray, question){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        // $scope.added = "Question successfully added!";
        $location.path('/main');
      });
    };

    $scope.playTrivia = function(newPlay){
      console.log("newplay: ", newPlay);
      triviaFactory.playTrivia(newPlay, function(errorsArray, question){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $location.path('/main');
      });
    }

    $scope.getQuestions = function(){
      console.log("1")
      triviaFactory.getQuestions(function(questions){
        $scope.questions = questions;
      });
    };
    $scope.getQuestions();
    //
    // $scope.cancel = function(appointment){
    //   console.log("cancel #1")
    //   appointmentFactory.cancel(appointment, function(){
    //     console.log("MADE THE CALLBACK 2");
    //     $scope.getAppointments();
    //   });
    // };

    $scope.currentUser = function(){
      console.log("#1 - inside currentUser function - clientside controller");
      userService.currentUser(function(currentUser){
        console.log("#6: ", currentUser);
        $scope.currentUser = currentUser
      })
    };
    $scope.currentUser();

    function displayErrors(errorArrayOrString){
      $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString];
    };

  }]);

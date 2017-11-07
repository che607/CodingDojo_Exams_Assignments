angular.module('app')
  .factory('triviaFactory', ['$http', function($http){
    const factory = {}
    factory.questions = [];

    factory.addQuestion = function(newQuestion, callBackToController){
      $http.post('/auth/addQuestion', newQuestion)
      .then(function(res){
        console.log("Got question.");
        factory.questions.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.playTrivia = function(newPlay, callBackToController){
      $http.post('/auth/playTrivia', newPlay)
      .then(function(res){
        console.log("Got Play.");
        factory.questions.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.getQuestions = function(callbackToController){
      console.log("2")
      $http.get('/index')
      .then(function(res){
        console.log("4")
        factory.questions = res.data;
        console.log(factory.questions)
        callbackToController(factory.questions)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };
    //
    // factory.cancel = function(appointment, callBackToController){
    //   $http.post('/auth/cancel', appointment)
    //   .then(function(){
    //     callBackToController()
    //   })
    //   .catch(function(errorResponse){
    //     console.log(errorResponse);
    //
    //     callBackToController(errorResponse.data);
    //   });
    // };

    return factory
  }])

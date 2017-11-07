angular.module('app')
  .factory('qaFactory', ['$http', function($http){
    const factory = {}
    factory.question = [];
    factory.answer = [];

    factory.addQuestion = function(newQuestion, callBackToController){
      $http.post('/auth/addQuestion', newQuestion)
      .then(function(res){
        console.log("Got question.");
        factory.question.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.getAnswers = function(id, callbackToController){
      console.log("Answer ID: ", id );
      $http.post('/auth/getAnswers', id)
      .then(function(res){
        factory.answers = res.data;
        console.log("factory, getAnswers: ", factory.answers);
        callbackToController(null, factory.answers)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callbackToController(errorResponse.data);
      });
    };

    factory.addAnswer = function(newAnswer, questionId, callBackToController){
      console.log("newAnswer: ", newAnswer);
      console.log("questionId: ", questionId);
      let params = { name: newAnswer,
                     name2: questionId,
                   };
      $http.post('/auth/addAnswer', params)
      .then(function(res){
        console.log("Got answer.");
        factory.answer.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.getQuestion = function(id, callbackToController){
      console.log("YO", id );
      $http.post('/auth/getQuestion', id)
      .then(function(res){
        factory.question = res.data;
        console.log("factory, getQuestion: ", factory.question);
        callbackToController(null, factory.question)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callbackToController(errorResponse.data);
      });
    };

    factory.getQuestions = function(callbackToController){
      $http.get('/auth/getQuestions')
      .then(function(res){
        factory.questions = res.data;
        console.log("factory, getQuestions: ", factory.questions);
        callbackToController(factory.questions)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callbackToController(errorResponse.data);
      });
    };

    factory.startBid = function(callBackToController){
      $http.get('/auth/startBid')
      .then(function(response){
        callBackToController(response)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    return factory
  }])

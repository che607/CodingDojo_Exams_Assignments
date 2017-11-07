angular.module('app')
  .factory('bidFactory', ['$http', function($http){
    const factory = {}
    factory.bids1 = [];
    factory.bids2 = [];
    factory.bids3 = [];


    factory.productOneBid = function(newBid, callBackToController){
      $http.post('/auth/productOneBid', newBid)
      .then(function(res){
        console.log("Got bid.");
        factory.bids1.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.productTwoBid = function(newBid, callBackToController){
      $http.post('/auth/productTwoBid', newBid)
      .then(function(res){
        console.log("Got bid.");
        factory.bids2.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.productTwoBid = function(newBid, callBackToController){
      $http.post('/auth/productTwoBid', newBid)
      .then(function(res){
        console.log("Got bid.");
        factory.bids2.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.productThreeBid = function(newBid, callBackToController){
      $http.post('/auth/productThreeBid', newBid)
      .then(function(res){
        console.log("Got bid.");
        factory.bids3.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.getBids1 = function(callbackToController){
      $http.get('/auth/getBids1')
      .then(function(res){
        factory.bids1 = res.data;
        console.log("factory, bids1: ", factory.bids1);
        callbackToController(factory.bids1)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.getBids2 = function(callbackToController){
      $http.get('/auth/getBids2')
      .then(function(res){
        factory.bids2 = res.data;
        console.log("factory, bids2: ", factory.bids2);
        callbackToController(factory.bids2)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.getBids3 = function(callbackToController){
      $http.get('/auth/getBids3')
      .then(function(res){
        factory.bids3 = res.data;
        console.log("factory, bids3: ", factory.bids3);
        callbackToController(factory.bids3)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
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

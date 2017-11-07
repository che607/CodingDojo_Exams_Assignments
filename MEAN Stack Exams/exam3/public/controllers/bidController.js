angular.module('app')
  .controller('bidController',
  [ '$scope', '$location', '$route', 'bidFactory', 'authService', 'userService', '$filter', '$window',
  function($scope, $location, $route, bidFactory, authService, userService, $filter, $window){
    $scope.isAuthed = authService.isAuthed();

    $scope.getBids1 = function(){
      bidFactory.getBids1(function(bids){
        $scope.bids1 = bids;
        $scope.bids11 = $filter('orderBy')(bids, '-bid');
      });
    };
    $scope.getBids1();

    $scope.productOneBid = function(newBid){
      console.log("CHECK: ", $scope.bids11[0]);
      if(newBid === undefined){
        console.log("1");
        $scope.error = "Bid cannot be blank.  Bid must be higher than current highest bid.  All Items must have bid before ending auction."
      }
      else if($scope.bids11[0] !== undefined){
        console.log("2");
        if(newBid.bid > $scope.bids11[0].bid){
          newBid.user = $scope.currentUser;
          console.log("new bid1: ",newBid.user);

          bidFactory.productOneBid(newBid, function(errorsArray, bid){
            if (errorsArray){
              return displayErrors(errorsArray);
            }
            $window.location.reload();
            $scope.error = null;
          });
        }
        else{
          console.log("3");
          $scope.error = "Bid cannot be blank.  Bid must be higher than current highest bid.  All Items must have bid before ending auction."
        }

      }
      else {
        console.log("4");
        newBid.user = $scope.currentUser;
        console.log("new bid1: ",newBid.user);

        bidFactory.productOneBid(newBid, function(errorsArray, bid){
          if (errorsArray){
            return displayErrors(errorsArray);
          }
          $window.location.reload();
          $scope.error = null;
        });
      }
    };

    $scope.getBids2 = function(){
      console.log("GET")
      bidFactory.getBids2(function(bids){
        $scope.bids2 = bids;
        $scope.bids21 = $filter('orderBy')(bids, '-bid');
      });
    };
    $scope.getBids2();

    $scope.productTwoBid = function(newBid){
      console.log("CHECK: ", $scope.bids21[0]);
      if(newBid === undefined){
        console.log("1");
        $scope.error = "Bid cannot be blank.  Bid must be higher than current highest bid.  All Items must have bid before ending auction."
      }
      else if($scope.bids21[0] !== undefined){
        console.log("2");
        if(newBid.bid > $scope.bids21[0].bid){
          newBid.user = $scope.currentUser;
          console.log("new bid1: ",newBid.user);

          bidFactory.productTwoBid(newBid, function(errorsArray, bid){
            if (errorsArray){
              return displayErrors(errorsArray);
            }
            $window.location.reload();
            $scope.error = null;
          });
        }
        else{
          console.log("3");
          $scope.error = "Bid cannot be blank.  Bid must be higher than current highest bid.  All Items must have bid before ending auction."
        }

      }
      else {
        console.log("4");
        newBid.user = $scope.currentUser;
        console.log("new bid1: ",newBid.user);

        bidFactory.productTwoBid(newBid, function(errorsArray, bid){
          if (errorsArray){
            return displayErrors(errorsArray);
          }
          $window.location.reload();
          $scope.error = null;
        });
      }
    };

    $scope.getBids3 = function(){
      bidFactory.getBids3(function(bids){
        $scope.bids3 = bids;
        $scope.bids31 = $filter('orderBy')(bids, '-bid');
      });
    };
    $scope.getBids3();

    $scope.productThreeBid = function(newBid){
      console.log("CHECK: ", $scope.bids31[0]);
      if(newBid === undefined){
        console.log("1");
        $scope.error = "Bid cannot be blank.  Bid must be higher than current highest bid.  All Items must have bid before ending auction."
      }
      else if($scope.bids31[0] !== undefined){
        console.log("2");
        if(newBid.bid > $scope.bids31[0].bid){
          newBid.user = $scope.currentUser;
          console.log("new bid1: ",newBid.user);

          bidFactory.productThreeBid(newBid, function(errorsArray, bid){
            if (errorsArray){
              return displayErrors(errorsArray);
            }
            $window.location.reload();
            $scope.error = null;
          });
        }
        else{
          console.log("3");
          $scope.error = "Bid cannot be blank.  Bid must be higher than current highest bid.  All Items must have bid before ending auction."
        }

      }
      else {
        console.log("4");
        newBid.user = $scope.currentUser;
        console.log("new bid1: ",newBid.user);

        bidFactory.productThreeBid(newBid, function(errorsArray, bid){
          if (errorsArray){
            return displayErrors(errorsArray);
          }
          $scope.error = null;
          $window.location.reload();
        });
      }
    };

    $scope.currentUser = function(){
      userService.currentUser(function(currentUser){
        $scope.currentUser = currentUser
      })
    };
    $scope.currentUser();

    $scope.startBid = function(){
      bidFactory.startBid(function(){
        $location.path('/main');
      })
    };

    $scope.endBid = function(){
      if($scope.bids11[0] && $scope.bids21[0] && $scope.bids31[0]){
        $location.path('/endBid');
      }
      else{
        $location.path('/main');
      }
    };

    function displayErrors(errorArrayOrString){
      $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString];
    };

  }]);


/*
  Our controllers: Modularize these into a folder called:
  'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
*/
app.controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {

  /* Private Methods */
  var usersIndex = function() {
      userFactory.index(function beingPassedToTheFactoryIndexByThisController(usersFromTheFactory) {
        $scope.users = usersFromTheFactory;
      } /* end args passed to userFactor index */ ); //end userFactory method invokation
    } //end usersIndex

  /* Scope Methods */
  $scope.show = function(user_id) {
      $location.url('/edit/' + user_id);
    }
    /* on load time */
  console.log("loading the controller");
  console.log(userFactory);
  console.log(this);
  usersIndex();
}]);
/* EDIT CONTROLLER: this controller uses 'this', and the controlValue seems to not update (a bug for you to fix! possibly one new line of code ~ 14 characters, and one modification of something that already exists)*/
app.controller('editController', ['userFactory', '$location', '$routeParams', function(userFactory, $location, $routeParams) {
  console.log("routeParams: ",$routeParams)
  /* Public Properties */
  this.controlValue = "Current Name:";
  /* Public Methods */
  this.getUser = function() {
    userFactory.show($routeParams.id, function passedToUserFactoryShow(user) {
      this.user = user;
      console.log("This is the user(in function): ", this.user)
    })
  }
  this.updateUser = function(){
    userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
      $scope.user = userFromFactory;
      // what is this?
      this.controlValue = "Updated Name: "
    });
  }
  /* on load time */
  this.getUser();
  console.log(this);
  console.log("This is the user(outside function): ", this.user)
}]);

app.controller('newController', ['$scope','userFactory', function($scope, userFactory) {
  $scope.addUser = function(){
    console.log($scope.user);
  }
}]);

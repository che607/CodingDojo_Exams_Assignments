const User = require('mongoose').model('User');
const Product1 = require('mongoose').model('Product1');
const Product2 = require('mongoose').model('Product2');
const Product3 = require('mongoose').model('Product3');


module.exports = {
  index(request,response) {

  },
  login(request, response) {
    console.log('inside serverside controller - auth.js');
    User.findOne({ name: request.body.name })
    .then(function(user){
      if (!user) throw new Error('no credentials match');
      console.log("user: ", user)
      login(request, response, user)
    })
    .catch(errorHandler.bind(response));
  },
  register(request, response) {
      User.create(request.body)
        .then(function(user){
          login(request, response, user)
        })
        .catch(errorHandler.bind(response));
  },
  productOneBid(request,response) {
    console.log("REQUEST: ", request.body.bid);
    Product1.create(request.body)
      .then(function(bid){
        response.json(bid)
      })
      .catch(errorHandler.bind(response));
  },
  productTwoBid(request,response) {
    console.log("YOOOOOOO")
    Product2.create(request.body)
      .then(function(bid){
        response.json(bid)
      })
      .catch(errorHandler.bind(response));
  },
  productThreeBid(request,response) {
    Product3.create(request.body)
      .then(function(bid){
        response.json(bid)
      })
      .catch(errorHandler.bind(response));
  },
  logout(request, response) {
    console.log('serverside - auth.js logout');
    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');
    response.json(true);
  },
  getBids1(request, response){
    Product1.find({}, function(error,bids){
      if(error){
        return console.log("error: ",error)
      }
      response.json(bids);
    })
  },
  getBids2(request, response){
    Product2.find({}, function(error,bids){
      if(error){
        return console.log("error: ",error)
      }
      response.json(bids);
    })
  },
  getBids3(request, response){
    Product3.find({}, function(error,bids){
      if(error){
        return console.log("error: ",error)
      }
      response.json(bids);
    })
  },
  startBid(request, response){
    console.log("DROOOOOOOOOOOOOP");
    Product1.remove({})
    .then(function(response){
      Product2.remove({})
      .then(function(response){
        Product3.remove({})
        .then(function(response){

        })
      })
    })
    .catch(errorHandler.bind(response));
  },
  currentUser(request, response){
    response.json(request.session.user.name);
  }
};

function login(request, response, user){
  console.log("request.session.user: ", request.session.user);
  request.session.user = user.toObject();
  console.log("request.session.user(update): ", request.session.user);
  delete request.session.user.password;

  response.cookie('userID', user._id);
  response.cookie('expiration', Date.now() * 86400 * 1000);

  response.json(true);
}

function errorHandler(error){
  let errors = [];

  if (error.errors){
    errors = Object.keys(error.errors).map(key => error.errors[key].message);
  }
  else if(typeof error === 'string'){
    errors.push(error)
  }
  else{
    errors.push(error.message);
  }

  console.log(errors);

  this.status(422).json(errors);
}

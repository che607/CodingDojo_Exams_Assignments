const User = require('mongoose').model('User');
const Question = require('mongoose').model('Question');
const playTrivia = require('mongoose').model('playTrivia');

module.exports = {
  index(request,response) {
    console.log("3")
    Question.find({}, function(error,questions){
      if(error){
        return console.log("error: ",error)
      }
      // console.log("appointments: ", appointments)
      response.json(questions);
    })
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
  addQuestion(request,response) {
    Question.create(request.body)
      .then(function(question){
        response.json(question)
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
  playTrivia(request, response){
    playTrivia.create(request.body)
      .then(function(newPlay){
        response.json(newPlay)
      })
      .catch(errorHandler.bind(response));
  },
  currentUser(request, response){
    console.log("#3 - server controller - request.session.user: ", request.session.user.name);
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

const User = require('mongoose').model('User');
const Question = require('mongoose').model('Question');
const Answer = require('mongoose').model('Answer');




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
  addQuestion(request,response) {
    Question.create(request.body)
      .then(function(question){
        response.json(question)
      })
      .catch(errorHandler.bind(response));
  },
  addAnswer(request,response) {
    console.log("ADD ANSWER INFO: ", request.body.name, request.body.name2.id);
  //   Answer.create(request.body)
  //     .then(function(answer){
  //       response.json(answer)
  //     })
  //     .catch(errorHandler.bind(response));
   //
    Question.findOne({_id: request.body.name2.id}, function(err, question){
         console.log("answer: ", request.body.name)
         let answer = new Answer(request.body.name);
         console.log("answer test, line 47: ", answer);
         console.log("question test, LINE 48: ", question)
         answer._question = question._id;
         console.log("answer test, line 50: ", answer);
         console.log("answer type of(should be object): ", typeof(answer));
         question.answers.push(answer);
         console.log("question test, line 53: ", question)
         answer.save(function(err){
           console.log("inside answer save function");
                 question.save(function(err){
                   console.log("inside question save function");
                   if(err) {
                     console.log('Error')
                   }
                 });
         });
         response.json(question);
   });

  },
  logout(request, response) {
    console.log('serverside - auth.js logout');
    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');
    response.json(true);
  },
  getQuestions(request, response){
    Question.find({}, function(error,bids){
      if(error){
        return console.log("error: ",error)
      }
      response.json(bids);
    })
  },
  getQuestion(request, response){
    console.log("getQuestion ID: ", request.body.id);
    Question.find({_id: request.body.id}, function(error,question){
      if(error){
        // return console.log("error: ",error)
      }
      response.json(question);
    })
  },
  getAnswers(request, response){
    console.log("getAnswers - getQuestion ID: ", request.body.id);
    Question.find({_id: request.body.id})
      .populate('answers')
      .then(function(question) {
        console.log("question: ", question);
        response.json(question);
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

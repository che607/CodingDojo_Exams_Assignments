var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 8000
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/tigersDB');

var TigerSchema = new mongoose.Schema({
 name: { type: String, required: [true,"Name is required!"], minlength: 1},
 height: { type: String, required: [true,"Height is required!"], minlength: 1},
 weight: { type: String, required: [true,"Weight is required!"], minlength: 1},
 location: { type: String, required: [true,"Location is required!"], minlength: 1}
}, {
  timestamps: true
});

mongoose.model('Tiger', TigerSchema);
var Tiger = mongoose.model('Tiger')
mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
  Tiger.find({})
    .sort("-createdAt")
    .then(function(messages){
      console.log(messages);
      res.render('index', { messages });
    })
    .catch(function (error){
      console.log(error)
    })
});

app.get('/tigers/new', function(req, res) {
  res.render('new');
});

app.get('/tigers/:id', function(req, res) {
  console.log("id: ", req.params.id)
  var id = req.params.id
  console.log("id: ", id)
  Tiger.find({ _id: id })
    .then(function(tiger){
      res.render('display', { tiger });
    })
});

app.get('/tigers/edit/:id', function(req, res) {
  var id = req.params.id
  console.log("id: ", id)
  Tiger.find({ _id: id })
    .then(function(tiger){
      console.log(tiger);
      res.render('edit', { tiger });
    })
});

app.post('/tigers', function(req, res) {
  console.log("POST DATA", req.body);
  Tiger.create(req.body, function(err) {
    if(err) {
      console.log(err)
      res.render('new', {errors: Tiger.errors})
    }
    else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
});

app.post('/tigers/:id', function(req, res) {
  console.log("POST DATA", req.body);
  Tiger.update({ _id: req.params.id }, req.body, function(err) {
    if(err) {
      console.log(err)
      res.render('new', {errors: Tiger.errors})
    }
    else {
      console.log('successfully updated a user!');
      res.redirect('/');
    }
  })
});

app.post('/tigers/destroy/:id', function(req, res) {

  if(err) {
      Tiger.remove({ _id: req.params.id }, function(err) {
      console.log(err)
      res.render('new')
      })
  }
    else {
      console.log('successfully deleted a user!');
      res.redirect('/');
    }
});


app.listen(port, function() {
    console.log("listening on port: ", port);
});

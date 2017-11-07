const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 8000
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
mongoose.connect('mongodb://localhost/namesDB');
app.use(bodyParser.json());

const NameSchema = new mongoose.Schema({
 name: { type: String }
}, {
  timestamps: true
});

mongoose.model('Name', NameSchema);
var Name = mongoose.model('Name');
mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
  Name.find({})
    .sort("-createdAt")
    .then(function(names){
      console.log(names);
      res.send(JSON.stringify({ names: names }));
    })
    .catch(function(error){
      console.log(error)
    })
});

app.get('/new/:name', function(req, res) {
  console.log("name: ", req.params.name)
  const name = new Name({name: req.params.name});
  name.save(req.params.name, function(err) {
    if(err) {
      console.log("line 37: ", err)
      res.render('/', {errors: Name.errors})
    }
    else {
      console.log('successfully added a name!');
      res.redirect('/');
    }
  })
});

app.get('/remove/:name', function(req, res) {
  console.log("name: ", req.params.name)
  Name.remove({ name: req.params.name }, function(err) {
    if(err) {
      console.log(err)
      res.render('/', {errors: Name.errors})
    }
    else {
      console.log('successfully deleted name!');
      res.redirect('/');
    }
  })
});

app.get('/:name', function(req, res) {
  Name.find({ name: req.params.name })
    .then(function(name){
      console.log(name);
      res.send(JSON.stringify({ name: name }));
    })
    .catch(function(error){
      console.log(error)
    })
});


app.listen(port, function() {
    console.log("listening on port: ", port);
});

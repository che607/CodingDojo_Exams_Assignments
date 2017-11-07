var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/quotesDB');

var UserSchema = new mongoose.Schema({
 name: { type: String, required: [true,"Name is required!"], minlength: 1},
 quote: { type: String, required: [true,"Quote is required!"], minlength: 1}
}, {
  timestamps: true
});

mongoose.model('Quote', UserSchema);
var Quote = mongoose.model('Quote')
mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/quotes', function(req, res) {
  Quote.find({})
  .sort("-createdAt")
  .then(function(quotes){
    console.log(quotes);
    res.render('quotes', { quotes });
  })
  .catch(function(error){
    console.log(error)
  })

})

app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);
  var user = new Quote({name: req.body.name, quote: req.body.quote});
  user.save(function(err) {
    if(err) {
      console.log(err)
      res.render('index', {title: 'you have errors!', errors: user.errors})
    }
    else {
      console.log('successfully added a user!');
      res.redirect('/quotes');
    }
  })
})

app.post('/users', function (req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            res.render('index', {title: 'you have errors!', errors: user.errors})
        }
        else {
            res.redirect('/users');
        }
    });
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 8000
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
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
var Tiger = mongoose.model('Tiger');
mongoose.Promise = global.Promise;

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function() {
    console.log("listening on port: ", port);
});

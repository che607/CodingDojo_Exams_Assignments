const mongoose = require('mongoose');
const Tiger = mongoose.model('Tiger');

const tigers = require('../controllers/tigers.js');

module.exports = function(app){

  app.get('/', function(req, res) {
    tigers.show(req,res)
  });

  app.get('/tigers/new', function(req, res) {
    res.render('new');
  });

  app.get('/tigers/:id', function(req, res) {
    tigers.showbyid(req,res)
  });

  app.get('/tigers/edit/:id', function(req, res) {
    tigers.showtiger(req,res)
  });

  app.post('/tigers', function(req, res) {
    tigers.createtiger(req,res)
  });

  app.post('/tigers/:id', function(req, res) {
    tigers.update(req,res)
  });

  app.post('/tigers/destroy/:id', function(req, res) {
    tigers.destroy(req,res)
  });
}

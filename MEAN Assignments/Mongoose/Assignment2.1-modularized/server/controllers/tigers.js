const mongoose = require('mongoose');
const Tiger = mongoose.model('Tiger');

module.exports = {
  show: function(req,res){
    Tiger.find({})
    .sort("-createdAt")
    .then(function(tigers){
      console.log(tigers);
      res.render('index', { tigers });
    })
    .catch(function(error){
      console.log(error)
    })
  },
  showtiger: function(req,res){
    var id = req.params.id
    console.log("id: ", id)
    Tiger.find({ _id: id })
      .then(function(tiger){
        console.log(tiger);
        res.render('edit', { tiger });
      })
      .catch(function(error){
        console.log(error)
      })
  },
  createtiger: function(req,res){
    console.log("POST DATA", req.body);
    Tiger.create(req.body, function(err) {
      if(err) {
        console.log(err)
        res.render('new', {errors: tiger.errors})
      }
      else {
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  },
  showbyid: function(req,res){
    console.log("id: ", req.params.id)
    var id = req.params.id
    console.log("id: ", id)
    Tiger.find({ _id: id })
      .then(function(tiger){
        console.log(tiger, "and ", tiger[0]);
        res.render('display', { tiger });
      })
      .catch(function(error){
        console.log(error)
      })
  },
  update: function(req,res){
  console.log("POST DATA", req.body);
  Tiger.update({ _id: req.params.id }, req.body, function(err) {
    if(err) {
      console.log(err)
      res.render('new', {errors: tiger.errors})
    }
    else {
      console.log('successfully updated a user!');
      res.redirect('/');
    }
  })
 },
 destroy: function(req,res){
   console.log("POST DATA", req.body);
   Tiger.remove({ _id: req.params.id }, function(err) {
     if(err) {
       console.log(err)
       res.render('new', {errors: tiger.errors})
     }
     else {
       console.log('successfully deleted a user!');
       res.redirect('/');
     }
   })
 }
}

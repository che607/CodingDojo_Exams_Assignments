module.exports = function Route(app){
  app.get('/', function(req, res) {
   res.render("index");
  })

  app.post('/result', function(req, res) {
   console.log("POST DATA", req.body);
   var infoserv = req.body
   res.render("result", {infotemp: infoserv});
  })
}

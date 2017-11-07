module.exports = function Route(app,server){

  var io = require('socket.io').listen(server);

  counter = 0

  io.sockets.on('connection', function (socket) {
    socket.on("count", function (data){
      counter += 1
      socket.emit('server_response', {response: counter});
    })

    socket.on("reset", function (data){
      counter = 0
      socket.emit('server_response1', {response: counter});
    })
  })

  app.get('/', function(req, res) {
   res.render("index");
  })





}

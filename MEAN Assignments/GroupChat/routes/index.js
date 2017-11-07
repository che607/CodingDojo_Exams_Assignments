module.exports = function Route(app,server){
  const queryString = require('query-string');
  var io = require('socket.io').listen(server);
  var users = []
  var messages = []
  var currentUser = " "
  var is_user = function(user){
    var users_count = users.length
    for(var i = 0; i < users_count; i++){
      if(user === users[i]){
        return true
      }
    }
    return false
  }


  io.sockets.on('connection', function (socket) {
    socket.on("name", function (data){
      if(is_user(data.name) === true){
        socket.emit('error_response', {error: "This user already exists!"});
      }
      else{
        users.push(data.name)
        console.log(users)
        socket.emit('user_response', {user: data.name});
      }
    })

    socket.on("submit", function (data){
      console.log("comment & user: ", data)
      console.log("comment that was posted: ",data.message);
      console.log("currentUser who posted comment: ", data.user);
      // const parsed = queryString.parse(data.message);
      // console.log(parsed);
      // console.log(parsed.postmessage);
      messages.push(data.user + ": " + data.message)
      console.log("messages' objects: ",messages)
      io.emit('user_response1', {user: data.user, message: data.message});
    })
})

    app.get('/', function(req, res) {
      res.render("index");
    })
}

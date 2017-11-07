var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){

  console.log('client request URL: ', request.url);
  var splitURL = request.url.split('/');
  console.log(splitURL)
  var pinpointer = splitURL[1]

  switch (pinpointer){
    case "images":
      servejpg(splitURL[2], response);
      break;
    case "stylesheets":
      serveCSS(splitURL[2], response);
      break;
    default:
      switch (splitURL[1]){
        case "cats":
          serveHTML('index.html', response);
          break;
        case "cars":
          serveHTML('car.html', response);
          break;
        case "dojo":
          serveHTML2('new1.html', response);
          break;
        default:
          serve404(response);
          };
      };


  function serveHTML2(filename, response){
    fs.readFile(`views/${filename}`,  'utf8', function(errors, contents){
      if(errors) { return serve404(response) }

      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  function serveHTML(filename, response){
    fs.readFile(`views/${filename}`,  'utf8',function(errors, contents){
      if(errors) { return serve404(response) }

      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  function servejpg(filename, response){
    fs.readFile(`images/${filename}`, function(errors, contents){
      if(errors) { return serve404(response) }

      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  function serveCSS(filename, response){
    fs.readFile(`images/${filename}`,  'utf8', function(errors, contents){
      if(errors) { return serve404(response) }

      response.writeHead(200, {'Content-type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  function serve404(response){
    response.writeHead(404);
    response.end("File not found!");
  }
});

server.listen(6790);

console.log("Running in localhost at port 6790");

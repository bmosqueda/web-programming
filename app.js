const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  if(req.url === '/') {
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream(__dirname + '/index.htm').pipe(res);

  } else if(req.url === '/api') {
    res.writeHead(200, {'Content-type': 'application/json'});
    var obj = {
      firstname: 'Brandon',
      lastname: 'Mosqueda'
    };

    res.end(JSON.stringify(obj));

  } else {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>404 NOT FOUND</h1>');

  }

}).listen(1337, '127.0.0.1');
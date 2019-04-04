const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  var message = 'Hello Brandon';
  html = html.replace('{Message}', message);
  res.end(html);

}).listen(1337, '127.0.0.1');
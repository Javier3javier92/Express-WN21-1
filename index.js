mejia2javier@node-wn21:~/app$ cat index.js
var http = require("http");
http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world');
}).listen(process.env.PORT || 3000);

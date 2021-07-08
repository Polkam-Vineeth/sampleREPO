var http = require('http');
var dt = require('./DemoModule');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time: " + dt.myDateTime());
  res.end();
})

server.listen(9000);
console.log("Server started successfully...")
console.log(`Listening on http://localhost:9000`);
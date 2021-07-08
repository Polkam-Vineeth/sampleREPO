var http = require('http');
//create a server object:
var server = http.createServer(function (req, res) {
  fs = require('fs')
  var data = "My mitochondria comprise a very large proportion of me!!!"
  fs.appendFile('./sam1.txt', data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("data updated");
  });
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
})

server.listen(8000);



console.log("I am the Writing data by overwriting existing data xD!")
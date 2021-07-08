var http = require('http');
const fs = require('fs')

var server = http.createServer(function (req, res) {
  // var name = prompt("Please enter your name", "Vin");
  // res.write(name);
  fs.readFile('sam.txt', 'utf8' , (err, data) => {
    if(req.url == '/'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
    else if(req.url == '/student'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("Welcome Student!!");
      res.end();
    }
    else if(req.url == '/emp'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("Have a nice day!!");
      res.end();
    }
    // console.log(data);
    // res.write(data);
    res.end();
  })
})
server.listen(8000); //server obj which listens on port 8000
console.log("Server started successfully...")
console.log(`Listening on http://localhost:8000`);



// Synchronous 
// var syn = fs.readFileSync("sam.txt")
// console.log(syn)
// console.log("I am Late!!")
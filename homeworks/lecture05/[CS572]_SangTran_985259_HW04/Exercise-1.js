/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  Maharishi University of Management
  Department of Computer Science 
  Professor: ASAAD SAAD
  Student: SANG TRAN (#985259)
  Lecture 4 / Exercise 1
************************************************/

/* Exercise - Make an HTTP server that serves files. 
The file path is provided in the URL like this: http://localhost:4000/path/to/my/file.txt*/

// using these libraries
var fs = require('fs');
var http = require('http');
var url = require('url');


http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;
  var file_path = __dirname + action;
  fs.exists(file_path, (exist)=>{
    if(exist)
    {
      var fileContents = fs.readFileSync(file_path);
      res.writeHead(200, {'Content-Type': 'text/plain' });
      res.end(fileContents, 'binary');
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end('<h1 style="color:red">File not found.</h1>');
    }
  });
  
}).listen(8080);
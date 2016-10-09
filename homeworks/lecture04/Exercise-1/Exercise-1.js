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

  if (action == '/path/to/my/file.txt') {
     var myfile = fs.readFileSync('./path/to/my/file.txt');
     res.writeHead(200, {'Content-Type': 'text/plain' });
     res.end(myfile, 'binary');
  } else { 
     res.writeHead(200, {'Content-Type': 'text/plain' });
     res.end('Welcome to ours course about NodeJS \n');
  }
}).listen(8080);
/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  Maharishi University of Management
  Department of Computer Science 
  Professor: ASAAD SAAD
  Student: SANG TRAN (#985259)
  Lecture 3 / Image serves exercise / 
        'image bigger than 3MB'
************************************************/

/* Exercise - Create a web server that's going to send a big image (bigger then 3MB)
to any client that send a request to your specified server:port. Use the best way for performance.*/

// using these libraries
var fs = require('fs');
var http = require('http');

// create a server for image serving
http.createServer(function(req, res){
  var img = fs.readFileSync(__dirname + '/big-image.png');
  res.writeHead(200, {'Content-Type': 'image/png' });
  res.end(img, 'binary');
}).listen(8080);

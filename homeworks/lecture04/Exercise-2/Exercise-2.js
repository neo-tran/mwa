/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  Maharishi University of Management
  Department of Computer Science 
  Professor: ASAAD SAAD
  Student: SANG TRAN (#985259)
  Lecture 4 / Exercise 2
************************************************/

/* Exercise - Make an HTTP server that saves the request body into a file. */

const http = require('http');
const fs = require('fs');

const html =
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Your Fist Name: <input name="firsname"><br>' +
  'Your Last Name: <input name="lastname"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () { 
    if (body != ''){

      // write to file
      fs.writeFile('request-body.json', body);
      
      // return message
      res.end('Your data have posted to: "' + __dirname + '/request-body.json"');
      return;
    }
    res.writeHead(200);
    res.end(html);
  });
}).listen(8080, ()=>{
  console.log('Localhost server started on the port number: 8080');
});

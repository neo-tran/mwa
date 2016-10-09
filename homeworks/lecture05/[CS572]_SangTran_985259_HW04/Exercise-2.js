/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  Maharishi University of Management
  Department of Computer Science 
  Professor: ASAAD SAAD
  Student: SANG TRAN (#985259)
  Lecture 4 / Exercise 2
************************************************/

/* Exercise - Make an HTTP server that saves the request body into a file. */

// To test: http://localhost:8080/start?foo=bar&hello=world
const http = require('http');
const url = require('url');
const querystring = require('querystring');
var fs = require('fs');

function onRequest(request, response){

  // reading request data
  const urlStr = request.url;
  const pathName = url.parse(urlStr).pathname;
  const query = url.parse(urlStr).query;
  const jsonRequestData = JSON.stringify(querystring.parse(query));

  // write to file
  fs.writeFile('request-body.json', jsonRequestData);

  // end response
  response.end('Please check the file: "' + __dirname + '/request-body.json"');
}

// actived server on port 8080 with the onRequest as a callback function
http.createServer(onRequest).listen('8080');
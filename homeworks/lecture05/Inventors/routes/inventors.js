/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  Maharishi University of Management
  Department of Computer Science 
  Professor: ASAAD SAAD
  Student: SANG TRAN (#985259)
  Lecture 5 / Exercise 
************************************************/

var express = require('express');
var router = express.Router();
var fs = require('fs');

// path to json data file
const DATA_FILE_PATH = require('path').join(__dirname, '../data/', 'inventors.json');

/* GET inventors listing. */
router.get('/', function(req, res, next) {
	
	fs.readFile(DATA_FILE_PATH, 'utf8', function (err,data) {

		// check error
		if (err) {
	    	return console.log('###### Error while reading file: ' + err);
	  	}

	  	// render html
	  	res.render('inventors', { title: 'Inventors', data: JSON.parse(data.toString()) }, function(err, html) {
		  	if(err)
		  		return console.log('###### Error while render html: ' + err);
		  	else
		  	{
		  		// send html content to client
		  		console.log('>>> HTML rendered successfully!');
		  		res.end(html);
		  	}
	  	});
	  	
	});
});

module.exports = router;

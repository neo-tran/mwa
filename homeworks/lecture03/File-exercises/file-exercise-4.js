/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / File exercise 4 / 
				'we have a file named CS572.txt'
************************************************/

/* Exercise 4 - append UTF-8 encoded string "" to the file. */

// using file system library
var fs = require('fs');

// define the path to file
const FILE_PATH = __dirname + '/CS572.txt';

// append text to the file
fs.appendFile(FILE_PATH, 'abc', encoding='utf8', function (err) {
    if (err) 
    	throw err;
    else
    	console.log('The UTF-8 encoded string "abc" has been appended to the file.');    
});
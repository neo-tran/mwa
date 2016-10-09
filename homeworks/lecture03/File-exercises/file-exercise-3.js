/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / File exercise 3 / 
				'we have a file named CS572.txt'
************************************************/

/* Exercise 3 - Overwrite the file with the UTF-8-encoded string
				"ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz". */

// using file system library.
var fs = require('fs');

// write to file
fs.writeFile('CS572.txt', 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz', 'utf8', function (err) {
  if (err) 
  	return console.log(err);
  else
  	console.log('File contents just overried by the UTF-8 encoded string "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz"');
});
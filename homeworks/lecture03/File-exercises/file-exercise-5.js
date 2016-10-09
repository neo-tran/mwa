/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / File exercise 5 / 
				'we have a file named CS572.txt'
************************************************/

/* Exercise 5 - change byte at pos 10 to the UTF-8 value of "7" */

// using file system library
var fs = require('fs');

// define the path to file
const FILE_PATH = __dirname + '/CS572.txt';

fs.readFile(FILE_PATH, 'utf8', function (err,data) {
  if (err)	return console.log(err);

  // buffer file contents by UTF-8 encoding
  var buffer = Buffer.from(data, 'utf8')
  
  // overwrite byte at the pos 10th by value '7' in UTF-8 encoding
  buffer.write('7', 10);

  // write back the buffer to file
  fs.writeFile(FILE_PATH, buffer.toString(), 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
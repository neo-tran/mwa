/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / File exercise 1 / 
				'we have a file named CS572.txt'
************************************************/

/* Exercise 1 - print the size of that file in bytes. */

// using file system library
var fs = require("fs");

// defined file path
const FILE_PATH = __dirname + "/CS572.txt";

// get stat information of that file
fs.stat(FILE_PATH, function(err, stat){
	if(err)
		return console.log(err);
	else
	{
		console.log('File path: ' + FILE_PATH);
		console.log('Size: ' + stat.size + '(bytes)');
	}
	
});

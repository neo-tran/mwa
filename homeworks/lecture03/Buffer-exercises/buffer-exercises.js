/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / Buffer exercises
************************************************/

/* Exercise 1 - Create an uninitialized buffer with 100 bytes length and fill it with bytes with
values starting from 0 to 99. And then print its contents. */

// create a buffer object with 100 bytes length
var buffer = new Buffer(100);

// fill buffter's values
buffer.write('This is the string in my buffer. Note that the slice function doesn\'t create new buffer memory');

// print buffer's contents
console.log('buffer: ' + buffer.toString());

/* Exercise 2 - Slice the previous buffer with bytes ranging 40 to 60. And then print it. */

// slice the buffer object
var slice = buffer.slice(40, 60);

// print slice's contents
console.log('slice: ' + slice.toString());

/* Exercise 3 - Do what is asked on exercise 1 and then copy bytes ranging 40 to 60 into a new buffer. And then print it. */

// create target buffer object. Ranging 40 to 60. So we have 20 bytes length.
var targetBuffer = new Buffer(20);

// start writing from first byte on target buffer object
var targetStart = 0;

// start copy from 40th byte on source buffer object
var sourceStart = 40;

// copy until 60th byte on source buffer object
var sourceEnd = 60;

// start copying
buffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd);

// print contents of target buffer object
console.log('targetBuffer: ' + targetBuffer.toString()); 
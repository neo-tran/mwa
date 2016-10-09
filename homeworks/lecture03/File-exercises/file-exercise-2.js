/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / File exercise 2 / 
				'we have a file named CS572.txt'
************************************************/

/* Exercise 2 - read a chunk from a file, print bytes 10 to 14. */

// using file system library
var fs = require('fs');

// initialize a read stream 
const readable = fs.createReadStream('CS572.txt', 'utf8');

// defined chunk size is 15 bytes
const CHUNK_SIZE = 15;

// count the number of chunks
var chunkCounter = 0;

// value on bytes from 10th to 14th
var b1014 = '';

// handle readable event
readable.on('readable', (chunk) => {
  while ((chunk = readable.read(CHUNK_SIZE)) !== null) {
    console.log(`Chunk[${chunkCounter}] size: ${chunk.length}. ['${chunk}']`);
    if(chunkCounter == 0)
      b1014 = chunk.slice(10,14);
    chunkCounter ++;
  }
});

// handle end of read event
readable.on('end', ()=>{
  console.log(`Bytes from 10 to 14: ${b1014}`);
});
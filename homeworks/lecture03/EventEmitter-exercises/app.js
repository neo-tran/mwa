
/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / Event Emitter exercise 2
************************************************/

/* Exercise 2 - Build a script that instantiates one Ticker and bind to the "tick" event, 
printing "TICK" every time it gets one. */

// create a Ticker instance object
var Ticker = require('./Ticker');
var ticker = new Ticker();

// handle on 'tick' event
ticker.on('tick', function(){
  console.log('TICK');
});

ticker.startTicker();

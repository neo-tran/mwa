/*********************************************** 
	CS572 - MODERN WEB APPLICATION PROGRAMMING
	Maharishi University of Management
	Department of Computer Science 
	Professor: ASAAD SAAD
	Student: SANG TRAN (#985259)
	Lecture 3 / Event Emitter exercise 1
************************************************/

/* Exercise 1 - Build a pseudo-class named "Ticker" that emits a "tick" event every 1 second. */

// references libraries
var EventEmitter = require('events').EventEmitter;
var util = require('util');

// define the Ticker
function Ticker(){
  EventEmitter.call(this);
}

// let Ticker inherits from EventEmitter
util.inherits(Ticker, EventEmitter);

// emits a "tick" event every one second.
Ticker.prototype.startTicker = function(){
  var obj = this;
  setInterval(function(){
    obj.emit('tick'); // be careful when use this object at here
  }, 1000);
}

// export Ticker
module.exports = Ticker;

// var fs = require('fs');
// var rs = fs.createReadStream('./file1.txt');
// rs.on('open',function(){console.log('File is opened!!!')});
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I have eaten!');
}

//Assign the event handler to an event:
eventEmitter.on('eat', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('eat');
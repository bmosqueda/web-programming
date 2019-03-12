// var Emitter = require('./emitter');
var Emitter = require('events');
var eventsConfig = require('./config').events;

var emitter = new Emitter();

emitter.on(eventsConfig.GREET, function() {
  console.log('Greet 1');
});

emitter.on(eventsConfig.GREET, function() {
  console.log('Greet 2');
});

emitter.emit(eventsConfig.GREET);
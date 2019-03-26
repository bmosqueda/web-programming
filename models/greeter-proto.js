var EventEmitter = require('events');
var util = require('util');

function Greeter(greeting) {
  EventEmitter.call(this);
  this.greeting = greeting;
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function() {
  this.emit('greet');
}

module.exports = Greeter;
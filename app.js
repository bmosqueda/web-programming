var EventEmitter = require('events');
var util = require('util');

function Greeter() {
  this.greeting = 'Hello world!';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
} 

var greeter = new Greeter();

greeter.on('greet', function() {
  console.log('Someone greeted!');
});

greeter.greet();
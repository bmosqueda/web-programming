var EventEmitter = require('events');

class Greeter extends EventEmitter {
  constructor(greeting) {
    super();
    this.greeting = greeting;
  }

  greet() {
    this.emit('greet');
  }
}

module.exports = Greeter;
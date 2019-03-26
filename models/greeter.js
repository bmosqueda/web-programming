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

var greeter = new Greeter('Hola mundo');

greeter.on('greet', function() {
  console.log('Someone greeted! ', this.greeting);
});

greeter.greet();
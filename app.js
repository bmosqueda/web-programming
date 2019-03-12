var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function() {
  console.log('Greet 1');
});

emitter.on('greet', function() {
  console.log('Greet 2');
});

emitter.emit('greet');
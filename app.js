const GreeterProto = require('./models/greeter-proto.js');
const GreeterClass = require('./models/greeter-class.js');

const greeterP = new GreeterProto('Brandon');
const greeterC = new GreeterClass('Mosqueda');

greeterP.on('greet', function() {
  console.log('GreeterProto emit: ', this.greeting);
});

greeterC.on('greet', function() {
  console.log('GreeterClass emit: ', this.greeting);
});

greeterP.greet();
greeterC.greet();
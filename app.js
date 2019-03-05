var greet = require('./greet');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
console.log(greet3);
greet3.greet();

var test = require('./test');
test.hola()

var Greet4 = require('./greet4');
var child = new Greet4();
child.greet();

var greet5 = require('./greet5');
greet5.greet();
console.log(greet5);
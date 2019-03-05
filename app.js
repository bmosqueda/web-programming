var greet = require('./greet');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
console.log(greet3);
// console.log(greet3.greeting);
console.log(greet3.greet());
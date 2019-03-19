var util = require('util');

function Policeman() {
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
console.log(officer);
console.log(officer.__proto__);
console.log(officer.__proto__.__proto__);
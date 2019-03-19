'use strict';

var util = require('util');
var Person = require('./person');

function Policeman() {
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
console.log(officer);
console.log(officer.__proto__);
console.log(officer.__proto__.__proto__);
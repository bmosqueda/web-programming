'use strict';

var util = require('util');
var Person = require('./person-proto');

function Policeman(firstname, lastname, badgenumber = 1234) {
  Person.call(this, firstname, lastname);
  this.badgenumber = badgenumber;
}

util.inherits(Policeman, Person);

module.exports = Policeman;
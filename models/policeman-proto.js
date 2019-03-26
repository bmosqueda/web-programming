'use strict';

var util = require('util');
var Person = require('./person');

function Policeman(badgenumber) {
  this.badgenumber = badgenumber;
}

util.inherits(Policeman, Person);

module.exports = Policeman;
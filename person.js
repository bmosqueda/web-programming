var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  /*
    Se llama al constructor de la clase padre porque
    util.inherits no inicializa las variables, sólo
    liga los prototipos en la cadena
   */
  Person.call(this);
  console.log(`Hello ${this.firstname} ${this.lastname}`);
}

function Policeman() {
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
console.log(officer);
console.log(officer.__proto__);
console.log(officer.__proto__.__proto__);
var greet = require('./greet.js');
greet();

var person = {
  firstname: "Brandon",
  lastname: "Mosqueda",
  greet: function() {
    console.log("Hello, " + this.firstname + " " + this.lastname);
  }
};

person.greet();

console.log(person['firstname']);
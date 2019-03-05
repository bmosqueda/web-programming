/*
  Third pattern, return a new instance of a class (or function constructor)
 */
function Greeter() {
  this.greeting = 'Hello world from Greeter class';

  this.greet = function greet() {
    console.log(this.greeting);
  }; 
};

module.exports = new Greeter();
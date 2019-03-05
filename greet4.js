/*
  Fourth pattern, return the entire class, not only a instance
 */
function Greeter() {
  this.greeting = 'Hello world from Greeter class 4!!';

  this.greet = function greet() {
    console.log(this.greeting);
  }; 
};

module.exports = Greeter;
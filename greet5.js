/*
  Fifth pattern, revealing module pattern, to protect my code
  only expose the necessary
 */
var greeting = 'Hello world from greeting 5';

function greet() {
  console.log(greeting);
};

module.exports = {
  greet: greet
};
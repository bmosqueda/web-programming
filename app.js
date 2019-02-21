function greet() {
  console.log('Hi');
} 

greet();

function logGreeting(fn) {
  fn();
}

logGreeting(greet);

var greetMe = function() {
  console.log('Hi Tony!');
}   

greetMe();

logGreeting(greetMe);

logGreeting(function() {
  console.log("Hi tony! 2.0");
});
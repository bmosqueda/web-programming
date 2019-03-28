/*
  Callbacks basics
 */
function greet(callback) {
  console.log('Hello!');
  var data = {
    name: 'Brandon Mosqueda'
  };

  callback(data);
} 

greet(function(data) {
  console.log('Callback function');
  console.log(data);
});

greet(function(data) {
  console.log('Another callback function');
  console.log(data.name);
});
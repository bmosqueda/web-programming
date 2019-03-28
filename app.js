const fs = require('fs');

//Read the file syncronously
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

//Read the file asyncronously and pass it a callback that it will be invoked when it finish
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(error, data) {
  console.log(data);
});

//This is printed before the asyncronous call of readFile
console.log('Done!');
function asyncFunc(callback) {
  console.log('asyncFunc');
  callback();
}

asyncFunc(function() {
  console.log('From callback');
});

console.log('Done!');
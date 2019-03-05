module.exports = (function() {
  var greeting = 'Hello world';
  var name = 'Brandon';

  function hola() {
    console.log(greeting);
  };

  return {
    name,
    hola
  };
})();
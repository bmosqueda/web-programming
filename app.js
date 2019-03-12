var person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname + ' ' + this.lastname;
  }
};

var brandon = Object.create(person);
brandon.firstname = 'Brandon';
brandon.lastname = 'Mosqueda';

var alejandro = Object.create(person);
alejandro.firstname = 'Alejandro';
alejandro.lastname = 'González';

console.log(brandon.greet());
console.log(alejandro.greet());
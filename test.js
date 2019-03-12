const person = {
  firstname: 'Person',
  greet() {
    return 'Hola ' + this.firstname;
  }
};

const brandon = Object.create(person);
brandon.firstname = 'Brandon';

person.firstname = 'Person EDIT';

console.log(person.greet());
console.log(brandon.greet());

console.log(Object.getPrototypeOf(brandon));
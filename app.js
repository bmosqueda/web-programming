const Person = require('./models/person-class');
const Policeman = require('./models/policeman-proto');

const person = new Person('Brandon', 'Mosqueda', 1698);
const police = new Policeman('Alejandro', 'González');

police.greet();

console.log(person);
console.log(person.__proto__.__proto__);
console.log('**************');
console.log(police);
console.log(police.__proto__.__proto__);
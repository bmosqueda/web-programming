const Person = require('./models/person-class');
const Policeman = require('./models/policeman-proto');

const police = new Policeman('Brandon', 'Mosqueda', 1698);

police.greet();
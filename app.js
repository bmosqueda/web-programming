const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin22@ds257640.mlab.com:57640/addressbook');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String
});

const Person = mongoose.model('Person', personSchema);

const brandon = Person({
  firstname: 'Brandon',
  lastname: 'Mosqueda',
  address: 'Colima, Col.'
});

brandon.save((error) => {
  if(error) throw error;

  console.log('Brandon Saved');
});
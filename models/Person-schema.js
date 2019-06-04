const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String
});

module.exports = mongoose.model('Person', personSchema);
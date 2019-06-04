const PATH_TO_ROOT = './';

const mongoose = require('mongoose');

const PersonSchema = require(`${PATH_TO_ROOT}models/Person-schema`);

mongoose.connect('mongodb://admin:admin22@ds257640.mlab.com:57640/addressbook');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send(`
    <html>
      <head></head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  `);
});

app.get('/api', function(req, res) {
  console.log(req);
})

app.get('/person/:name', function (req, res) {
  const person = PersonSchema({
    firstname: req.params.name,
    lastname: "",
    address: ""
  });

  person.save((error) => {
    if(error) {
      res.status(500).send(`<h1>Hubo un problema al guardar el usuario</h1>`);
      return;
    }

    console.log(person);
    res.send(`
      <html>
        <head></head>
        <body>
          <h1>Person: ${req.params.name} guardada correctamente</h1>
        </body>
      </html>
    `);
  });

});

app.listen(port);
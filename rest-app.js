const PATH_TO_ROOT = './';

const express = require('express');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000;

const app = express();

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  let response = {
    error: false,
    code: 500,
    message: 'Failure'
  };

  res.send('Hola mundo');
});

app.route('/person/:personId')
  .get((req, res) => {
    let personId = Number(req.params.personId);

    if(isValidId(personId)) {
      res.status(400).send('Usuario no inválido');
    } else {
      res.send(`Usuario con id: ${personId}`);
    }
  })

app.post('/person', (req, res) => {
  let personId = Number(req.body.personId);

  if(isValidId(personId)) {
    res.status(400).send('Usuario no inválido');
  } else {
    res.send(`Usuario con id: ${personId}`);
  }
});

function isValidId(id) {
  console.log(id);
  return isNaN(id) || id > 50;
}

app.listen(PORT);
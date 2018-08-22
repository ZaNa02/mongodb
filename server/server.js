var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log('initialising...');
  var todo = new Todo({
    text: req.body.text

  });


    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
//User model
// email - require it and trim it-set type and min length of 1
// var user = new User({
//   email: 'ania@gmail.com    '
// });
//
// user.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to create user', e);
// });

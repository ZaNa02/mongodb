var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
  text: {
    type: String,  //it's always gonna be a text so string...
    required: true,
    minlength: 1,
    trim: true  //deletes any whitespaces or rather ignores them...
  },
  completed: {
    type: Boolean,  //it's either true or false...
    default: false
  },
  completedAt: {
    type: Number, // always gonna be a number
    default: null
  }
});

// var anotherTodo = new Todo({
//   text: '   NANANANA NANANANA BATMAN!!   '
// });
// anotherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo')
// });


//User model
// email - require it and trim it-set type and min length of 1
var User = mongoose.model('User', {
  email: {
    type: String,  //it's always gonna be a text so string...
    required: true,
    minlength: 1,
    trim: true  //deletes any whitespaces or rather ignores them...
  }
});

var user = new User({
  email: 'ania@gmail.com    '
});

user.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to create user', e);
});

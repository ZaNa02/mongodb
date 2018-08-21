var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String  //it's always gonna be a text so string...
  },
  completed: {
    type: Boolean  //it's either true or false...
  },
  completedAt: {
    type: Number // always gonna be a number
  }
});

// var newTodo = new Todo({
//   text: 'Make dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

var anotherTodo = new Todo({
  text: 'Eat your avocado',
  completed: true,
  completedAt: 11
});
anotherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo')
});

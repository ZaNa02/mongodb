var mongoose = require('mongoose');

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

module.exports = {Todo};

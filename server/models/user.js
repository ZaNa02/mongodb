var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,  //it's always gonna be a text so string...
    required: true,
    minlength: 1,
    trim: true  //deletes any whitespaces or rather ignores them...
  }
});

module.exports = {User};

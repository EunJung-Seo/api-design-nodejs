var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos')

var TodoSchema = new mongoose.Schema({
  name: String,
  complete: Boolean
});

// creat a Collection
var Todo = mongoose.model('todo', TodoSchema);

// create todo data
Todo.create({
  name: 'clean up the room',
  complete: false
}).then(function(err, todo){
  console.log(err, todo);
});

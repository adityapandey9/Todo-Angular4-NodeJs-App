var mongoose = require('mongoose');

//Creating the Table for storing the todo list
var ListSchema = new mongoose.Schema({
    name: String,
    lables: {
      type: [{
        type: String,
        enum: ['Personal', 'Work', 'Shopping', 'Others']
      }],
      default: ['Personal']
    },
    status: {
      type: [{
        type: String,
        enum: ['New', 'In progress', 'Completed']
      }],
      default: ['New']
    },
    hidden: Boolean,
    postedby: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    due_date: { type: Date, default: Date.now },
  });
  
  //Exporting the model
  module.exports = mongoose.model('list', ListSchema);
const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    list_title: {
      type: String,
      required: true,
    },
    tasks: [
      {
        id: String,
        taskName: String,
        completed: Boolean,
      },
    ],
  });
  
  const List = mongoose.model('List', listSchema);
  
  module.exports = List;
const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    list_title: {
      type: String,
      required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  const List = mongoose.model('List', listSchema);
  
  module.exports = List;
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: String,
  taskDescription: String,
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'list' }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

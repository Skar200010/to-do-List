const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: String,
  taskDescription: String,
  duration: String,
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

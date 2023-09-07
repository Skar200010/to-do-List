const mongoose = require('mongoose');

const taskDurationSchema = new mongoose.Schema({
  duration: String,
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
});

const TaskDuration = mongoose.model('TaskDuration', taskDurationSchema);

module.exports = TaskDuration;

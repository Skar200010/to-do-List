// const mongoose = require('mongoose');

// const taskDurationSchema = new mongoose.Schema({
//   taskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
//   duration: String,
//   priority: {
//     type: String,
//     //enum: ['low', 'medium', 'high'],
//   },
// });

// const TaskDuration = mongoose.model('TaskDuration', taskDurationSchema);

// module.exports = TaskDuration;






// //{const mongoose = require('mongoose');

// // const taskDurationSchema = new mongoose.Schema({
// //   taskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
// //   duration: String,
// //   priority: String, // Changed this line to accept any string as priority
// // });

// // const TaskDuration = mongoose.model('TaskDuration', taskDurationSchema);

// // module.exports = TaskDuration;}




// models/taskDurationModel.js
//const TaskDuration = require('../models/taskDurationModel');


const mongoose = require('mongoose');

const taskDurationSchema = new mongoose.Schema({
  taskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  duration: String,
  priority: {
    type: String,
    //enum: ['low', 'medium', 'high'],
  },
  taskID: String
});

const TaskDuration = mongoose.model('TaskDuration', taskDurationSchema);

module.exports = TaskDuration;

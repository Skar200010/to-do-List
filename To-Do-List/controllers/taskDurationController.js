const TaskDuration = require('../models/TaskDuration')
const createTaskDuration = async (req, res) => {
    try {
      const { duration } = req.body;
  
      const newTaskDuration = new TaskDuration({ duration });
      await newTaskDuration.save();
  
      res.status(201).json({ message: 'Task duration created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating task duration' });
    }
  }


// Functions related to task priority
const createTaskPriority = async (req, res) => {
try {
  const { priority } = req.body;

  const newTaskPriority = new TaskPriority({ priority });
  await newTaskPriority.save();

  res.status(201).json({ message: 'Task priority created successfully' });
} catch (error) {
  res.status(500).json({ error: 'An error occurred while creating task priority' });
}
}

module.exports = { createTaskDuration , createTaskPriority };

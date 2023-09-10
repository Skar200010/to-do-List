// const { body, validationResult } = require('express-validator');

// const createTaskValidation = [
//   body('taskName').notEmpty().withMessage('Task name is required'),
//   body('taskDescription').notEmpty().withMessage('Task description is required'),
//   body('taskID').notEmpty().withMessage('task ID is required'),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   },
// ];


// module.exports = { createTaskValidation };





const TaskDuration = require('../models/taskDurationModel');

const validateTaskDuration = async (req, res, next) => {
  try {
    const { duration, priority,taskID } = req.body;

    // Validate duration and priority (add more validation if needed)
    if (!duration || !priority) {
      return res.status(400).json({ error: 'Duration and priority are required' });
    }

    // Check if priority is valid
    if (!['low', 'medium', 'high'].includes(priority)) {
      return res.status(400).json({ error: 'Invalid priority' });
    }

    // Add the validated task duration to the request object
    req.validatedTaskDuration = { duration, priority,taskID };

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while validating task duration' });
  }
};

module.exports = validateTaskDuration;

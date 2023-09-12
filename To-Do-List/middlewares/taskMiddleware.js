const { body, validationResult } = require('express-validator');
const Task = require('../models/Task'); // Import your Task model

const createTaskValidation = [
  body('taskName')
    .notEmpty()
    .withMessage('Task name is required')
    .custom(async (value, { req }) => {
      // Check if the task name is already in use
      const existingTask = await Task.findOne({ taskName: value });
      if (existingTask) {
        throw new Error('Task name must be unique');
      }
      return true;
    }),
  body('taskDescription').notEmpty().withMessage('Task description is required'),
  body('listId').notEmpty().withMessage('List ID is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { createTaskValidation };

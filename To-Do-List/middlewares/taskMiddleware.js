const { body, validationResult } = require('express-validator');

const createTaskValidation = [
  body('taskName').notEmpty().withMessage('Task name is required'),
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

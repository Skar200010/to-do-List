const { body, validationResult } = require('express-validator');

const validateList = [
  body('title').notEmpty().withMessage('Title cannot be empty'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateList };
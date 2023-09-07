const express = require('express');
const router = express.Router();
const taskDurationController = require('../controllers/taskDurationController');


// Route for creating a task duration
router.post('/createDuration', taskDurationController.createTaskDuration);

// Route for creating a task priority
router.post('/createPriority', taskDurationController.createTaskPriority);

// Implement other duration and priority related routes as needed

module.exports = router;

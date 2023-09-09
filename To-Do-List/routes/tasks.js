
const express = require('express');
const router = express.Router();
//const authenticateToken = require('../middlewares/authMiddleware');
const taskController = require('../controllers/taskController');


router.post('/',taskController.createTask);//Route for create task
router.get('/',taskController.getTask);//route for get task info
router.put('/:id',taskController.updateTask); // Route for updating a task
router.delete('/:id',taskController.deleteTask); // Route for deleting a task
// Implement other task routes

module.exports = router;

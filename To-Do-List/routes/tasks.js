
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const taskController = require('../controllers/taskController');


router.post('/tasks',taskController.createTask);//Route for create task
router.get('/tasks',taskController.getTask);//route for get task info
router.put('/tasks/:id',taskController.updateTask); // Route for updating a task
router.delete('/tasks/:id',authenticateToken,taskController.deleteTask); // Route for deleting a task
// Implement other task routes

module.exports = router;

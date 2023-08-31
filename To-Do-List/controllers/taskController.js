//const { promiseImpl } = require('ejs');
const Task = require('../models/Task');

//create new task 
const createTask = async (req, res) => {
  try {
    const { taskName, taskDescription, duration, priority } = req.body;
    const userId = req.user.userId;

    if (!['low', 'medium', 'high'].includes(priority)) {
      return res.status(400).json({ error: 'Invalid priority value' });
    }

    const newTask = new Task({
      taskName,
      taskDescription,
      duration,
      priority,
      userId
    });
     
    await newTask.save();
    res.status(201).json({Message : 'Task created Succesfully' });
} catch (error){
    res.status(500).json({Messasge : 'An error occured while creating the task '});
}
};
//update task
const updateTask = async (req, res) =>{
    try {
        const taskId = req.params.id;
        const { taskName , taskDescription , duration , priority } = req.body;

        //find by task by ID 
        const task = await Task.findById(taskId);
        if (!task){
            return res.status(404).json({error: 'Task not found'})
        }

        //Update Task fields
        task.taskName = taskName;
        task.taskDescription = taskDescription;
        task.duration = duration;
        task.priority = priority;

        await task.save();
        res.json({ message: 'Task upadted successfuly'})
    }catch (error){
        res.status(500).json({ error: 'An error occurred while upadating the task '})
    }
};

const deleteTask = async (req , res) => {
    try {
        const taskId = req.params.id;

        if (!deleteTask){
            return res.status(404).json({error: 'Task not found'});
        }

        res.json({ message: 'Task deleted Successfully' });
     } catch(error){
        res.status(500).json({ error: 'An error ocurred while deleting task'});

        }
    }
    // get tasks using by ID
    
    const getTask = async (req , res) => {
        try {
            const userId = req.user.userId;

            const tasks = await Task.findById({userId});
            res.json(tasks);   
        }
            catch (error) {
                res.status(500).json({ error: 'An error ocurred while fetching tasks'});   
            }
    }
    module.exports = {createTask , updateTask , deleteTask , getTask};

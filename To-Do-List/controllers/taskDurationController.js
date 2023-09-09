// const TaskDuration = require('../models/TaskDuration')
// const createTaskDuration = async (req, res) => {
//   console.log("ok");
//     try {
//       const { duration,priority,taskID} = req.body;
//       //console.log(req.body);
  
//       const newTaskDuration = new TaskDuration({ duration,priority,taskID });
//       console.log(newTaskDuration);

      
//       await newTaskDuration.save();
//      //console.log("ok");
  
//       res.status(201).json({ message: 'Task duration created successfully' });
//     } catch (error) {
//       //console.log("kjgf");
//       console.log(err);
//       res.status(500).json({ error: 'An error occurred while creating task duration' });
//     }
//   }



// module.exports = { createTaskDuration };




// taskDurationController.js

// controllers/taskDurationController.js

// // controllers/taskDurationController.js
// const TaskDuration = require('../models/TaskDuration')




// const createTaskDuration = async (req, res) => {
//   try {
//     const { duration, priority, taskID } = req.body;

//     const newTaskDuration = new TaskDuration({ duration, priority, taskID });

//     await newTaskDuration.save();

//     res.status(201).json({ message: 'Task duration created successfully' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'An error occurred while creating task duration' });
//   }
// }

// module.exports = { createTaskDuration };



// controllers/taskDurationController.js

const TaskDuration = require('../models/TaskDuration')
const createTaskDuration = async (req, res) => {
  try {
    const { duration, priority, taskID } = req.body;

    const newTaskDuration = new TaskDuration({ duration, priority, taskID });

    await newTaskDuration.save();

    res.status(201).json({ message: 'Task duration created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating task duration' });
  }
}

const getTaskDurations = async (req, res) => {
  try {
    const taskDurations = await TaskDuration.find();
    res.json(taskDurations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while retrieving task durations' });
  }
}

module.exports = { createTaskDuration, getTaskDurations };

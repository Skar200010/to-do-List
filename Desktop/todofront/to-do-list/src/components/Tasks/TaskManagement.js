// TaskManagement.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTaskForm from './CreateTaskForm'; // Import the CreateTaskForm component
import TaskList from './TaskList'; // Import the TaskList component

function TaskManagement() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API when the component mounts
    axios
      .get('http://localhost:3000/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleCreateTask = (newTask) => {
    // Send a POST request to create a new task
   console.log('Sending create task request with data:', newTask);
    axios
      .post('http://localhost:3000/tasks', newTask)
      .then((response) => {
        setTasks((prevTasks) => [...prevTasks, response.data]);
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  const handleUpdateTask = (updatedTask) => {
    // Assuming you have a specific route or endpoint to update a task
    axios
      .put(`http://localhost:3000/tasks/${updatedTask._id}`, updatedTask)
      .then((response) => {
        // Handle success, e.g., update the task in your state or show a success message
        console.log('Task updated successfully:', response.data);

        const updatedTasks = tasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        );
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
  };

  const handleDeleteTask = (taskId) => {
    // Send a DELETE request to delete the task
    axios
      .delete(`http://localhost:3000/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== taskId));
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <div>
      <h2>Task Management</h2>
      <CreateTaskForm onCreateTask={handleCreateTask} />
      <TaskList
        key={tasks.length} // Change the key when tasks are updated
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default TaskManagement;

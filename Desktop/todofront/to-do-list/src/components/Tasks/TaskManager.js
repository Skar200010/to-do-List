import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskManager.css'; // Import your CSS file

function TaskManager() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [listId, setListId] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching tasks');
    }
  };

  const createTask = async () => {
    try {
      const response = await axios.post('http://localhost:3000/tasks', {
        taskName,
        taskDescription,
        listId,
      });

      alert(response.data.Message);
      setTaskName('');
      setTaskDescription('');
      setListId('');
      getTasks();
    } catch (error) {
      console.error(error);
      alert('Error creating task');
    }
  };

  const updateTask = async (taskId, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:3000/tasks/${taskId}`, updatedData);
      return response.data.message;
    } catch (error) {
      console.error(error);
      return 'Error updating task';
    }
  };

  const toggleEdit = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId) {
        if (task.isEditing) {
          return { ...task, isEditing: false, taskName: task.originalTaskName, taskDescription: task.originalTaskDescription };
        } else {
          return { ...task, isEditing: true, originalTaskName: task.taskName, originalTaskDescription: task.taskDescription };
        }
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleSave = async (taskId, updatedData) => {
    const message = await updateTask(taskId, updatedData);
    if (message === 'Task updated successfully') {
      alert(message);
      toggleEdit(taskId); // Exit edit mode
      getTasks(); // Refresh the task list
    } else {
      alert(message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      alert(response.data.message);
      getTasks();
    } catch (error) {
      console.error(error);
      alert('Error deleting task');
    }
  };

  return (
    <div className="task-manager-container">
      <h1 className="task-manager-heading">Task Manager</h1>
      <div>
        <label>Task Name:</label>
        <input
          className="task-input"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <label>Task Description:</label>
        <input
          className="task-input"
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <label>List ID:</label>
        <input
          className="task-input"
          type="text"
          value={listId}
          onChange={(e) => setListId(e.target.value)}
        />
      </div>
      <button className="task-button" onClick={createTask}>Create Task</button>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            {task.isEditing ? (
              <div>
                Task Name:
                <input
                  type="text"
                  value={task.taskName}
                  onChange={(e) => {
                    const updatedTask = { ...task, taskName: e.target.value };
                    setTasks((prevTasks) =>
                      prevTasks.map((t) => (t._id === task._id ? updatedTask : t))
                    );
                  }}
                />
                Description:
                <input
                  type="text"
                  value={task.taskDescription}
                  onChange={(e) => {
                    const updatedTask = { ...task, taskDescription: e.target.value };
                    setTasks((prevTasks) =>
                      prevTasks.map((t) => (t._id === task._id ? updatedTask : t))
                    );
                  }}
                />
                <button className="task-button" onClick={() => handleSave(task._id, task)}>Save</button>
                <button className="task-button" onClick={() => toggleEdit(task._id)}>Cancel</button>
              </div>
            ) : (
              <div>
                Task Name: {task.taskName}, Description: {task.taskDescription}
              </div>
            )}
            <div className="task-item-buttons">
              {task.isEditing ? null : (
                <button className="task-button" onClick={() => toggleEdit(task._id)}>Edit</button>
              )}
              <button className="task-button" onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;

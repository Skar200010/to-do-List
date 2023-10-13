import React, { useState } from 'react';

function CreateTaskForm({ onCreateTask }) {
  const [newTask, setNewTask] = useState({ taskName: '', taskDescription: '' ,listId:''});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to create a new task
    onCreateTask(newTask);
    setNewTask({ taskName: '', taskDescription: '',listId :''});
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name</label>
          <input
            type="text"
            name="taskName"
            value={newTask.taskName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Task Description</label>
          <input
            type="text"
            name="taskDescription"
            value={newTask.taskDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>listId</label>
          <input
            type="text"
            name="listId"
            value={newTask.listId}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTaskForm;

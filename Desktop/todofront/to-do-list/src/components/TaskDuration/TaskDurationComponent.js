// CreateTaskDurationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function TaskDurationComponent() {
  const [duration, setDuration] = useState('');
  const [priority, setPriority] = useState('');
  const [taskID, setTaskID] = useState('');

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleTaskIDChange = (e) => {
    setTaskID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform task duration creation logic here
    const newTaskDuration = {
      duration,
      priority,
      taskID,
    };

    axios
      .post('http://localhost:3000/createDuration', newTaskDuration) // Use the appropriate API endpoint
      .then((response) => {
        console.log('Task duration created successfully:', response.data);
       
        // You can handle successful creation here, such as displaying a success message.
      })
      .catch((error) => {
        console.error('Task duration creation failed:', error);
        // Handle creation errors here.
      });

    // Reset form fields
    setDuration('');
    setPriority('');
    setTaskID('');
  };

  return (
    <div>
      <h2>Create Task Duration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Duration:</label>
          <input type="text" value={duration} onChange={handleDurationChange} />
        </div>
        <div>
          <label>Priority:</label>
          <input type="text" value={priority} onChange={handlePriorityChange} />
        </div>
        <div>
          <label>Task ID:</label>
          <input type="text" value={taskID} onChange={handleTaskIDChange} />
        </div>
        <button type="submit">Create Task Duration</button>
      </form>
    </div>
  );
}

export default TaskDurationComponent;

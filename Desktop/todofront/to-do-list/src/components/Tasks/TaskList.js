import React, { useState } from 'react';

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const [updateTaskData, setUpdateTaskData] = useState({ taskId: '', taskName: '', taskDescription: '' });

  const handleUpdateClick = (task) => {
    // Set the task data for updating
    setUpdateTaskData({
      taskId: task._id,
      taskName: task.taskName,
      taskDescription: task.taskDescription,
    });
  };

  const handleUpdateSubmit = () => {
    // Send a PUT request to update the task on the server
    onUpdateTask(updateTaskData);
    // Clear the update task data
    setUpdateTaskData({ taskId: '', taskName: '', taskDescription: '' });
  };

  const handleDeleteClick = (taskId) => {
    // Send a DELETE request to delete the task
    onDeleteTask(taskId);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.taskName} - {task.taskDescription}
            <button onClick={() => handleUpdateClick(task)}>Update</button>
            <button onClick={() => handleDeleteClick(task._id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Update Task Form */}
      {updateTaskData.taskId && (
        <div>
          <h2>Update Task</h2>
          <form onSubmit={handleUpdateSubmit}>
            <input
              type="text"
              name="taskName"
              placeholder="Task Name"
              value={updateTaskData.taskName}
              onChange={(e) => setUpdateTaskData({ ...updateTaskData, taskName: e.target.value })}
            />
            <input
              type="text"
              name="taskDescription"
              placeholder="Task Description"
              value={updateTaskData.taskDescription}
              onChange={(e) =>
                setUpdateTaskData({ ...updateTaskData, taskDescription: e.target.value })
              }
            />
            <button type="submit">Update Task</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskList;

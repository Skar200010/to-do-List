import React, { useState} from 'react';
//import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegistrationForm from'./components/Users/UserRegistrationForm';
import UserLoginForm from './components/Users/UserLoginForm';
//  import CreateTaskForm from './components/Tasks/CreateTaskForm';
//  import TaskList from './components/Tasks/TaskList';
//import TaskManagement from './components/Tasks/TaskManagement';
import TaskManager from './components/Tasks/TaskManager';
import UserProfile from './components/Users/UserProfile';
import TaskDurationComponent from './components/TaskDuration/TaskDurationComponent'; 
import Lists from './components/Lists/Lists';
function App() {
 
  const [authenticatedUserId, setAuthenticatedUserId] = useState(null);

  const handleLogin = (userId) => {
    setAuthenticatedUserId(userId);
  };


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>To-Do List</h2> {/* Changed h1 to h2 */}
        </header>
        <Routes>
          <Route path="/register" element={<UserRegistrationForm />} />
          <Route path="/login" element={<UserLoginForm onLogin={handleLogin} />} />
          {/* <Route path="/tasklist" element={<TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />} />
          <Route path="/create" element={<CreateTaskForm onCreateTask={handleCreateTask} />} /> */}
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/profile"element={<UserProfile userId={authenticatedUserId} />}/>
          <Route path="/TaskDurationComponent" element={<TaskDurationComponent />} />
          <Route path="/creatlist" element={<Lists/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

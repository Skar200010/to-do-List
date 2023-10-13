import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import UserRegistrationForm from './components/Users/UserRegistrationForm';
import UserLoginForm from './components/Users/UserLoginForm';
import TaskManager from './components/Tasks/TaskManager';
import UserProfile from './components/Users/UserProfile';
import TaskDurationComponent from './components/TaskDuration/TaskDurationComponent';
import Lists from './components/Lists/Lists';
import ListsDel from './components/Lists/ListsDel';
function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>To-Do List Tasks</h2> {/* Changed h1 to h2 */}
        </header>
        <Link to="/register">Register</Link>
        <Routes>
        <Route path="/creatlist" element={<Lists />} />
          <Route path="/listdel" element={<ListsDel />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;

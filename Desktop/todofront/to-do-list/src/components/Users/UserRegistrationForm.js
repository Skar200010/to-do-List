import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserRegistrationForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/user', user) // Use the appropriate API endpoint
      .then((response) => {
        console.log('Registration successful:', response.data);
        // You can handle successful registration here, such as redirecting to the login page.
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Handle registration errors (e.g., duplicate email) here.
      });
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default UserRegistrationForm;

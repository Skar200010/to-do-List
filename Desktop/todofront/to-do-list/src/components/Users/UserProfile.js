// src/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile
    axios
      .get('http://localhost:3000/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }) // Replace with your backend API URL
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Welcome, {user.username}!</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;

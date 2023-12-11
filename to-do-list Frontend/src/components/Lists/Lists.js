import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Lists = () => {
  const [lists, setLists] = useState([]);// Store the lists fetched from the API
  const [newListTitle, setNewListTitle] = useState('');
// useEffect is used to fetch data from the API when the component mounts
  useEffect(() => {
    // Fetch lists from your backend API when the component mounts
    fetch('http://localhost:3000/lists')
      .then((response) => response.json())
      .then((data) => setLists(data.lists))// Update the 'lists' state with the fetched data
      .catch((error) => console.error('Error fetching lists:', error));
  }, []);
 
  // This *-function is responsible for creating a new list
  const handleCreateList = async () => {
    if (!newListTitle) {
      console.error('Title cannot be empty');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/lists', {
        method: 'POST',// Send a POST request to create a new list
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ list_title: newListTitle }),//// Send the title of the new list in the request body
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();// Parse the response JSON
      setLists([...lists, data]);// Update the 'lists' state with the new list
      setNewListTitle('');// Clear the input field after creating the list
      window.alert('List created successfully!');
    } catch (error) {
      console.error('Error creating a list:', error);
    }
  };
   return (
    <div>
      <h1>To-Do Lists</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new list title"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
        />
        <button onClick={handleCreateList}>Create List</button>
      </div>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            {/* {list.list_title} */}
            {/* Create a Link to the Task component with the list name as the route */}
            <Link to={`/tasks`}>{list.list_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
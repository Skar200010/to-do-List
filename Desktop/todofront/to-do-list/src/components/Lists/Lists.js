// src/components/Lists.js
import React, { useState, useEffect } from 'react';

const Lists = () => {
  const [lists, setLists] = useState([]);
  //const [newListTitle, setNewListTitle] = useState('');
  const [selectedListId, setSelectedListId] = useState('');
  const [updatedListTitle, setUpdatedListTitle] = useState('');

  const fetchLists = () => {
    // Fetch lists from your backend API
    fetch('http://localhost:3000/lists')
      .then((response) => response.json())
      .then((data) => setLists(data.lists))
      .catch((error) => console.error('Error fetching lists:', error));
  };

  useEffect(() => {
    // Fetch lists when the component mounts
    fetchLists();
  }, []);

  // const handleCreateList = () => {
  //   // Send a POST request to create a new list
  //   fetch('http://localhost:3000/lists', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ list_title: newListTitle }),
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       setNewListTitle('');
  //       fetchLists(); // Fetch the updated list after creating a new one
  //     })
  //     .catch((error) => console.error('Error creating a list:', error));
  // };
  const handleGetAllLists = () => {
    // Send a GET request to fetch all lists
    fetch('http://localhost:3000/lists')
      .then((response) => response.json())
      .then((data) => {
        console.log('All Lists:', data.lists);
      })
      .catch((error) => console.error('Error fetching all lists:', error));
  };
  const handleGetListById = () => {
    // Send a GET request to retrieve a list by ID
    fetch(`http://localhost:3000/lists/${selectedListId}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data as needed
        console.log('List by ID:', data);
      })
      .catch((error) => console.error('Error fetching list by ID:', error));
  };

  const handleUpdateListById = () => {
    // Send a PUT request to update a list by ID
    fetch(`http://localhost:3000/lists/${selectedListId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ list_title: updatedListTitle }),
    })
      .then((response) => response.json())
      .then(() => {
        setUpdatedListTitle('');
        fetchLists();
      })
      .catch((error) => console.error('Error updating list by ID:', error));
  };

  const handleDeleteListById = () => {
    if (!selectedListId) {
      console.error('Selected list ID is empty or invalid');
      return;
    }
  
    // Debugging log
    console.log(`Deleting list with ID: ${selectedListId}`);
    // Send a DELETE request to delete a list by ID
    fetch(`http://localhost:3000/lists/${selectedListId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchLists();
        setSelectedListId('');
      })
      .catch((error) => console.error('Error deleting list by ID:', error));
  };


  return (
    <div>
      <h2>To-Do List</h2>
      {/* <div>
        <input
          type="text"
          placeholder="Enter a new list title"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
        />
        <button onClick={handleCreateList}>Create List</button>
      </div> */}
      <div>
        <input
          type="text"
          placeholder="Enter list ID for operations"
          value={selectedListId}
          onChange={(e) => setSelectedListId(e.target.value)}
        />
        <button onClick={handleGetAllLists}>Get All Lists</button>
        <button onClick={handleGetListById}>Get List by ID</button>
        <button onClick={handleUpdateListById}>Update List by ID</button>
        <button onClick={handleDeleteListById}>Delete List by ID</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter updated list title"
          value={updatedListTitle}
          onChange={(e) => setUpdatedListTitle(e.target.value)}
        />
      </div>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>{list.list_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
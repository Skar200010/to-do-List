import React, { useState, useEffect } from 'react';
import './ListsDel.css';
const ListsDel = () => {
  const [lists, setLists] = useState([]);
  const [listMapping, setListMapping] = useState({});
  const [selectedListNumber, setSelectedListNumber] = useState('');
  const [updatedListTitle, setUpdatedListTitle] = useState('');

  const fetchLists = () => {
    // Fetch lists from your backend API
    fetch('http://localhost:3000/lists')
      .then((response) => response.json())
      .then((data) => {
        const newListMapping = {};
        data.lists.forEach((list, index) => {
          newListMapping[index + 1] = list._id;
        });
        setLists(data.lists);
        setListMapping(newListMapping);
      })
      .catch((error) => console.error('Error fetching lists:', error));
  };

  useEffect(() => {

  }, []);

  
  const handleGetAllLists = () => {

    fetchLists();
  };
  const handleGetListById = () => {
    const listId = listMapping[selectedListNumber];
    if (!listId) {
      alert('Invalid list number');
      return;
    }
    // Send a GET request to retrieve a list by ID
    fetch(`http://localhost:3000/lists/${listId}`)
      .then((response) => response.json())
      .then((data) => {
        setLists([data]); // Set the state with an array containing only the fetched list
        // Handle the data as needed
        console.log('List by ID:', data);
      })
      .catch((error) => console.error('Error fetching list by ID:', error));
  };

  const handleUpdateListById = () => {
    const listId = listMapping[selectedListNumber];
    if (!listId) {
      alert('Invalid list number');
      return;
    }
    // Check if updatedListTitle is empty
    if (!updatedListTitle) {
      alert('Please enter an updated list title.');
      return;
    }
    // Send a GET request to retrieve the current list title
    fetch(`http://localhost:3000/lists/${listId}`)
      .then((response) => response.json())
      .then((data) => {
        const currentListTitle = data.list_title;

        // Check if the updated title is different from the current title
        if (currentListTitle !== updatedListTitle) {
          // Send a PUT request to update the list title
          fetch(`http://localhost:3000/lists/${listId}`, {
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
              alert('List updated successfully');
            })
            .catch((error) =>
              console.error('Error updating list by ID:', error)
            );
        } else {
          alert('No changes were made to the list.');
        }
      })
      .catch((error) =>
        console.error('Error fetching current list title:', error)
      );
  };
  const handleDeleteListById = () => {
    const listId = listMapping[selectedListNumber];
    if (!listId) {
      alert('Invalid list number');
      return;
    }

    // Debugging log
    console.log(`Deleting list with ID: ${listId}`);
    // Send a DELETE request to delete a list by ID
    fetch(`http://localhost:3000/lists/${listId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchLists();
        setSelectedListNumber('');
        alert('List deleted successfully');
      })
      .catch((error) => console.error('Error deleting list by ID:', error));
  };
  return (
    <div className='main'>
      <h2>To-Do List</h2>
     
      <div>
        <input
          type="text"
          placeholder="Enter list number for operations"
          value={selectedListNumber}
          onChange={(e) => setSelectedListNumber(e.target.value)}
        />
        <button onClick={handleGetAllLists}>Get All Lists</button>
        <button onClick={handleGetListById}>Get List by List Number</button>
        <button onClick={handleUpdateListById}>Update List by List Number</button>
        <button onClick={handleDeleteListById}>Delete List by List Number</button>
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

export default ListsDel;

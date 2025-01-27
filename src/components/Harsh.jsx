import React, { useState } from 'react';
import axios from 'axios';

export const Harsh = () => {
  const [data, setData] = useState(null);
  const [fetchId, setFetchId] = useState('');
  const [newId, setNewId] = useState('');
  const [newName, setNewName] = useState('');
  const [newMarks, setNewMarks] = useState('');

  // Function to fetch data by ID
  const getData = async (id) => {
    try {
      const res = await axios.get(`http://localhost:9000/data/${id}`); // Fetch data by ID
      setData(res.data); // Set the fetched data in state
    } catch (error) {
      console.error('Error fetching data:', error);
      setData({ error: 'No data found for the given ID' }); // Handle errors
    }
  };

  // Function to send new data to the server
  const sendData = async () => {
    try {
      const res = await axios.post('http://localhost:9000/data', {
        id: newId,
        name: newName,
        marks: Number(newMarks), // Ensure marks are a number
      });
      console.log(res.data.message);
      alert('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Failed to send data');
    }
  };

  return (
    <div>
      <h1>Fetch Student Data</h1>
      <input
        type="text"
        value={fetchId}
        onChange={(e) => setFetchId(e.target.value)} // Update ID on input change
        placeholder="Enter ID"
      />
      <button onClick={() => getData(fetchId)}>Fetch Data</button> {/* Fetch data on button click */}

      <div>
        {data ? (
          data.error ? (
            <p style={{ color: 'red' }}>{data.error}</p> // Display error message
          ) : (
            <div>
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Marks:</strong> {data.marks}</p>
            </div>
          )
        ) : (
          'No data loaded yet.'
        )}
      </div>

      <h1>Add Student Data</h1>
      <input
        type="text"
        value={newId}
        onChange={(e) => setNewId(e.target.value)}
        placeholder="Enter ID"
      />
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={newMarks}
        onChange={(e) => setNewMarks(e.target.value)}
        placeholder="Enter Marks"
      />
      <button onClick={sendData}>Send Data</button> {/* Send data on button click */}
    </div>
  );
};

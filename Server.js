const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Import the fs module to handle file operations
const path = require('path'); // Import path for file resolution
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Enable JSON parsing

// Path to the JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Load data from the JSON file
let data = require('./data.json');

// API endpoint to retrieve data by ID
app.get('/data/:id', (req, res) => {
  const { id } = req.params; // Extract ID from the request parameters
  const studentData = data[id]; // Retrieve data using the ID as the key

  if (studentData) {
    res.json(studentData); // Send the matched data as JSON
  } else {
    res.status(404).json({ error: 'Data not found for the given ID' }); // Handle missing data
  }
});

// API endpoint to add or update data by ID
app.post('/data', (req, res) => {
  const { id, name, marks } = req.body; // Extract data from the request body

  if (!id || !name || marks === undefined) {
    return res.status(400).json({ error: 'Invalid input. ID, name, and marks are required.' });
  }

  // Add or update data
  data[id] = { name, marks };

  // Write the updated data to the file
  fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ error: 'Failed to update data.' });
    }

    res.status(201).json({ message: 'Data added/updated successfully', data: data[id] });
  });
});

// Start the server
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Create Web Server

// Import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Import files
const comments = require('./comments.js');

// Set up the server
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the route
app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.send(newComment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
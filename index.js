const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to FitZone! Achieve your health and wellness goals with our wide range of accessible workouts and resources.');
});

app.get('/workouts', (req, res) => {
  res.send('Choose from a variety of workouts designed to be accessible to anyone, regardless of fitness level or experience.');
});

app.get('/resources', (req, res) => {
  res.send('Access our collection of resources, including nutrition guides and wellness tips, to support your fitness journey.');
});

app.get('/register', (req, res) => {
  res.send('Ready to join FitZone? Register for our platform today and start your fitness journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('FitZone server is running on port 3000.');
});
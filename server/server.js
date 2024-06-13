const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const FormData = require('./Models/Form.models');

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Ensure this matches your frontend's URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Routes
app.post('/api/submit', async (req, res) => {
  console.log('Received request with data:', req.body);

  try {
    const formData = new FormData(req.body);
    await formData.save();
    console.log('Data saved successfully');
    res.json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
});

app.get('/getdata', async (req, res) => {
  const { City, BloodGroup } = req.query;

  console.log(`Fetching data for City: ${City} and BloodGroup: ${BloodGroup}`);

  if (!City || !BloodGroup) {
    return res.status(400).json({ error: 'City and BloodGroup are required query parameters' });
  }

  try {
    const results = await FormData.find({ City: City, BloodGroup: BloodGroup });
    console.log('Query results:', results);
    if (results.length === 0) {
      console.log('No data found');
      return res.status(404).json({ message: 'No data found' });
    }
    res.json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
});

app.listen(8000, () => {
  console.log('Server is running on port number: 8000');
});
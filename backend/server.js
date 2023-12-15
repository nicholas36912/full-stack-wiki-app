const express = require('express');
const mongoose = require('mongoose');
const Article = require('./articles'); // Assuming you have a separate file for the Article model
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/wikipedia_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Check for MongoDB connection errors
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Middleware for JSON parsing
app.use(express.json());

// CORS middleware
app.use(cors());

// API routes
app.get('/api/random-article', async (req, res) => {
  try {
    const response = await axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    const randomArticle = {
      title: response.data.title,
      summary: response.data.extract,
    };
    res.json(randomArticle);
  } catch (error) {
    console.error('Error fetching random article:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const searchQuery = req.query.q; // Extract the search query from the request query parameters
    const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchQuery}`);
    const searchResult = {
      title: response.data.title,
      summary: response.data.extract,
    };
    res.json(searchResult);
  } catch (error) {
    console.error('Error searching articles:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/save-article', async (req, res) => {
  try {
    const { title, summary } = req.body;

    // Save the article to MongoDB
    const newArticle = new Article({ title, summary });
    await newArticle.save();

    res.json({ message: 'Article saved successfully.' });
  } catch (error) {
    console.error('Error saving article:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/favorite-articles', async (req, res) => {
  try {
    // Retrieve all saved articles from MongoDB
    const savedArticles = await Article.find();

    // Respond with the array of saved articles
    res.json(savedArticles);
  } catch (error) {
    // Handle errors by logging and responding with a server error status
    console.error('Error fetching saved articles:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add a catch-all route for other requests
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

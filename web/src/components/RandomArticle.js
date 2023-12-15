// RandomArticle.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomArticle = ({ onAddToFavorites }) => {
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    fetchRandomArticles();
  }, []);

  const fetchRandomArticles = async () => {
    try {
      const responses = await Promise.all(
        Array.from({ length: 5 }, () => axios.get('http://localhost:3001/api/random-article'))
      );
  
      const newRandomArticles = responses.map(response => ({
        title: response.data.title,
        summary: response.data.summary || 'No summary available.',
      }));
  
      setRandomArticles(newRandomArticles);
    } catch (error) {
      console.error('Error fetching random articles:', error);
    }
  };
  
  
  const handleAddToFavorites = async (article) => {
    try {
      if (onAddToFavorites) {
        // Make an API request to save the article to favorites
        await axios.post('http://localhost:3001/api/save-article', {
          title: article.title,
          summary: article.summary,
        });
        // Callback to parent component to update its state
        onAddToFavorites({ title: article.title, summary: article.summary });
      }
    } catch (error) {
      console.error('Error adding article to favorites:', error);
    }
  };

  return (
    <div>
      <h1>Random Articles</h1>
      {randomArticles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <button onClick={() => handleAddToFavorites(article)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default RandomArticle;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favoriteArticles, setFavoriteArticles] = useState([]);

  useEffect(() => {
    fetchFavoriteArticles();
  }, []);

  const fetchFavoriteArticles = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/favorite-articles');
      setFavoriteArticles(response.data);
    } catch (error) {
      handleAxiosError(error, 'Error fetching favorite articles');
    }
  };

  const handleAxiosError = (error, message) => {
    console.error(message, error);

    if (error.response) {
      console.error('Server responded with:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received from the server.');
    } else {
      console.error('Error setting up the request:', error.message);
    }
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteArticles.length === 0 ? (
        <p>No favorite articles yet.</p>
      ) : (
        <ul>
          {favoriteArticles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;



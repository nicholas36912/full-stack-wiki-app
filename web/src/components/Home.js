import React, { useState } from 'react';
import RandomArticle from './RandomArticle';

const Home = () => {
  const [favoriteArticles, setFavoriteArticles] = useState([]);

  const addToFavorites = (article) => {
    setFavoriteArticles((prevFavorites) => [...prevFavorites, article]);
  };

  return (
    <div>
      <h2>Home</h2>
      <RandomArticle onAddToFavorites={addToFavorites} />
    </div>
  );
};

export default Home;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Favorites from './components/Favorites';

const App = () => {
  const [favoriteArticles, setFavoriteArticles] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search articles</Link>
            </li>
            <li>
              <Link to="/favorites">Favorite Articles</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites favoriteArticles={favoriteArticles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

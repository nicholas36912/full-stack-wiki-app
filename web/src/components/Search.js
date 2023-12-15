// Search.js

import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
const response = await axios.get(`http://localhost:3001/api/search?q=${query}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error searching articles:', error);
    }
  };

  return (
    <div>
      <h2>Search a topic</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {searchResult && (
        <div>
          <h3>{searchResult.title}</h3>
          <p>{searchResult.summary}</p>
        </div>
      )}
    </div>
  );
};

export default Search;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css'; // Add styles for the search page

function Search() {
    const navigate = useNavigate();
  
    return (
      <div className="search-container">
        <h3 className="search-header">Search Person</h3>
        <div className="search-input-container">
          <input type="text" placeholder="Search users..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
    );
}

export default Search;

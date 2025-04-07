// Header.js - Top navigation component
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header>
      <div className="store-home">
        <Link to="/">
          <img src="/images/amazon-logo.png" alt="." />
        </Link>
      </div>
      
      <nav className="top-navigation">
        <div className="category-nav">
          <Link to="/categories">CATEGORY OVERVIEW</Link>
        </div>
        
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">SEARCH</button>
          </form>
        </div>
        
        <div className="account-nav">
          <Link to="/login">LOG IN</Link>
          <span> / </span>
          <Link to="/create-account">CREATE ACCOUNT</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
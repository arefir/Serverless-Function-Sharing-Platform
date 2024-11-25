import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();
    navigate('/search');
  }
  return (
    <div className="search-container">
      <form className="search-form" role="search" onSubmit={handleSubmit}>
        <button type="submit" className="search-button" aria-label="Submit search">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/97cacca744d61baedb25817fc539af94e3514d20acd9107a94bdc22dc4456358?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="search-icon" />
        </button>
        <label htmlFor="search-input" className="visually-hidden">Search</label>
        <input type="search" id="search-input" className="search-input" placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchBar;


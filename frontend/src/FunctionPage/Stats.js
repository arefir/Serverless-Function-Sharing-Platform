import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-wrapper">
        {/* Rating and Stars */}
        <div className="rating-stars-group">
          <h2 className="rating">Rating</h2>
          <div className="stars-container">
            {/* Add star icons here */}
            ★★★★☆
          </div>
        </div>
        {/* Views and Uses Side by Side */}
        <div className="views-uses-group">
          <p className="views">5,200 Views</p>
          <p className="uses-count">5,200 Uses</p>
        </div>
        <p className="author">by Dhiya</p>
      </div>
    </div>
  );
};

export default Stats;

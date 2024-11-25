import React, {useState} from 'react';
import './ToggleSwitch.css';

function ToggleSwitch() {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div className="toggle-container">
      <button 
        className={`toggle-button ${activeTab === 'latest' ? 'active' : ''}`}
        onClick={() => setActiveTab('latest')}>
          Latest Uploads
          </button>
      <button
       className={`toggle-button ${activeTab === 'popular' ? 'active' : ''}`}
        onClick={() => setActiveTab('popular')}>
          Popular Uploads
          </button>
    </div>
  );
}

export default ToggleSwitch;
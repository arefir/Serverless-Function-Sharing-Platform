import React from 'react';
import './ButtonGroup.css';

function ButtonGroup() {
  return (
    <div className="button-group">
      <button className="language-button">
        EN
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/83e05f7bfb8a7d6531adca27cb80d7bcb324951bcef92f58a01c0ceda7e44019?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="dropdown-icon" />
      </button>
      <button className="icon-button" aria-label="Notifications">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfbcc5f84437b8195f54f188350e8fb54f94ec826f0715c88794bd23e9764a3b?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="notification-icon" />
      </button>
      <button className="icon-button" aria-label="User profile">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef6ff77b05bb9948bb8bbdea9b124d5016f90b3a214a21156c741811359aa4e2?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="profile-icon" />
      </button>
    </div>
  );
}

export default ButtonGroup;

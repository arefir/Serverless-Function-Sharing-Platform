import React from 'react';
import './ActionButton.css';

function ActionButton({toggleModal}) {
  return (
    <div className="action-buttons">
      <button className="action-button">Download</button>
      <button className="action-button" onClick={toggleModal}>Try Out</button>
      <button className="deploy-button">Deploy</button>
    </div>
  );
}

export default ActionButton;
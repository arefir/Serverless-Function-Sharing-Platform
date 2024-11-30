import React from 'react';
import './ActionButton.css';

function ActionButton({toggleModal, toggleDeployModal}) {
  return (
    <div className="action-buttons">
      <button className="action-button">Download</button>
      <button className="action-button" onClick={toggleModal}>Try Out</button>
      <button className="deploy-button" onClick={toggleDeployModal}>Deploy</button>
    </div>
  );
}

export default ActionButton;
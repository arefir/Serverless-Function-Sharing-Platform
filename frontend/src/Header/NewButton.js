import React from 'react';
import './NewButton.css';

function NewButton() {
  return (
    <button className="new-button">
      <span>New</span>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/70905d878e97853e493745224d6878485f6a48ccedddda31a9ff59dbe58952a6?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="new-icon" />
    </button>
  );
}

export default NewButton;

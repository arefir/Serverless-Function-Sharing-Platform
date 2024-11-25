// TestOverlay.js
import React, {useState, useEffect} from 'react';
import './TestOverlay.css';

function TestOverlay({ toggleModal,code, setCode }) {
    const [codeText, setCodeText] = useState(code);

const [eventText, setEventText] = useState(`{
    key: value
  }`);

//   const codeEditorRef = useRef(null);

  useEffect(() => {
    setCodeText(code); // Update codeText when code prop changes
  }, [code]);
  
  const handleRun = () => {
    setCode(codeText);
    toggleModal();
  };

//   useEffect(() => {
//     if (codeEditorRef.current) {
//       codeEditorRef.current.style.height = 'auto'; // Reset height to auto
//       codeEditorRef.current.style.height = `${codeEditorRef.current.scrollHeight}px`; // Set to scrollHeight to fit content
//     }
//   }, [codeText]); // Run effect when codeText changes

  return (
    <div className="overlay">
      <div className="darken" onClick={toggleModal}></div>
      <div className="modal-content">
        <div className="code-container">
        <textarea
            // ref={codeEditorRef}
            className="code-editor"
            value={codeText}
            onChange={(e) => setCodeText(e.target.value)}
          />
        </div>
        <div className="event-object">
          <h2>Event Object</h2>
          <div className="code-container">
          <textarea
              className="code-editor"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
            />
          </div>
        </div>
        <div className="button-container">
        <button className="run-button" onClick={handleRun}>Run</button>
        </div>
      </div>
    </div>
  );
}

export default TestOverlay;

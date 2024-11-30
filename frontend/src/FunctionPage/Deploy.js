import React, {useState} from 'react';
import './Deploy.css';

function Deploy({toggleDeployModal}) {
  const [functionText, setFunctionText] = useState(``);
  const [nameText, setNameText] = useState(``);

  const [iamRole, setIamRole] = useState('Select IAM Role');
  const [runtime, setRuntime] = useState('Select Runtime');

  const handleRun = () => {
    console.log('Function:', functionText);
    console.log('Function Name:', nameText);
    console.log('IAM Role:', iamRole);
    console.log('Runtime:', runtime);
    toggleDeployModal();
  };

  return (
    <div className="deploy-function">
      <div className="darken" onClick={toggleDeployModal}></div>
      <div className="deploy-content">
        <div className="function-container">
        <textarea
            // ref={codeEditorRef}
            className="function-editor"
            value={functionText}
            onChange={(e) => setFunctionText(e.target.value)}
          />
        </div>
        <div className="function-name">
          <h2>Function Name</h2>
          <div className="function-container">
          <input
              className="name-editor"
              value={nameText}
              onChange={(e) => setNameText(e.target.value)}
            />
          </div>
        </div>
        <div className="dropdown-container">
          <div className="dropdown">
            <label htmlFor="iam">IAM</label>
            <select
              id="iam"
              value={iamRole}
              onChange={(e) => setIamRole(e.target.value)}
            >
              <option value="Select IAM Role">Select IAM Role</option>
              <option value="Admin">Admin</option>
              <option value="Developer">Developer</option>
              <option value="ReadOnly">ReadOnly</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="runtime">Runtime</label>
            <select
              id="runtime"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
            >
              <option value="Select Runtime">Select Runtime</option>
              <option value="Node.js 14.x">Node.js 14.x</option>
              <option value="Node.js 16.x">Node.js 16.x</option>
              <option value="Python 3.9">Python 3.9</option>
            </select>
          </div>
        </div>
        <div className="button-container">
        <button className="ok-button" onClick={handleRun}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Deploy;

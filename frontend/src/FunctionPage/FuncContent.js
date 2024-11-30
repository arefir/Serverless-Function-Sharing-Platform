import React, {useState} from 'react';
import CodeBlock from './CodeBlock';
import Stats from './Stats';
import ActionButton from './ActionButton';
import ReviewSection from './ReviewSection';
import Deploy from './Deploy';
import './FuncContent.css';

function FuncContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [code, setCode] = useState(`exports.handler = async (event) => {
    const name = event.name || "World";
  
    const response = {
      statusCode: 200,
      body: JSON.stringify(\`Hello, \${name}!\`)
    };
  
    return response;
  };`);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDeployModal = () => {
    setIsDeployModalOpen(!isDeployModalOpen);
  };

  return (
    <main className="func-column">
      <div className="func-content-wrapper">
        <h1 className="function-title">Function</h1>
        <CodeBlock 
          code={code} 
          setCode={setCode} 
          isModalOpen={isModalOpen} 
          toggleModal={toggleModal}
          />
        <div className="stats-action-container">
          <Stats />
          <ActionButton 
          toggleModal={toggleModal}
          toggleDeployModal={toggleDeployModal}/>
        </div>
        <ReviewSection />
        {isDeployModalOpen && (
          <Deploy 
            toggleDeployModal={toggleDeployModal} 
            code={code} 
            setCode={setCode} 
          />
        )}
      </div>
    </main>
  );
};

export default FuncContent;

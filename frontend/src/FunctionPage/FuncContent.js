import React, {useState} from 'react';
import CodeBlock from './CodeBlock';
import Stats from './Stats';
import ActionButton from './ActionButton';
import ReviewSection from './ReviewSection';
import './FuncContent.css';

function FuncContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <ActionButton toggleModal={toggleModal}/>
        </div>
        <ReviewSection />
      </div>
    </main>
  );
};

export default FuncContent;

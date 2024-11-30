import React from 'react';
import './CodeBlock.css';
import CodeTry from './CodeTry';

function CodeBlock({code, setCode, isModalOpen, toggleModal}) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [code, setCode] = useState(`exports.handler = async (event) => {
  //   const name = event.name || "World";
  
  //   const response = {
  //     statusCode: 200,
  //     body: JSON.stringify(\`Hello, \${name}!\`)
  //   };
  
  //   return response;
  // };`);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const handleRun = (updatedCode) => {
  //   setCode(updatedCode);
  // };

  return (
    <div>
    <pre className="code-block">
      <code> {code}
      </code>
    </pre>

    {isModalOpen && (<CodeTry toggleModal={toggleModal} code={code} setCode={setCode}/>)}
    </div>
  );
}

export default CodeBlock;
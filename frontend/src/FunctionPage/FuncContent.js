import React from 'react';
import CodeBlock from './CodeBlock';
import Stats from './Stats';
import ActionButton from './ActionButton';
import ReviewSection from './ReviewSection';
import './FuncContent.css';

function FuncContent() {
  return (
    <main className="func-column">
      <div className="func-content-wrapper">
        <h1 className="function-title">Function</h1>
        <CodeBlock />
        <div className="stats-action-container">
          <Stats />
          <ActionButton />
        </div>
        <ReviewSection />
      </div>
    </main>
  );
};

export default FuncContent;

import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import FuncContent from './FuncContent';
import './ExampleFunc.css';

function ExampleFunc() {
  return (
    <>
      <div className="example-function">
        <div className="top-bar">
          <Header />
        </div>
        <div className="main-content">
          <div className="content-wrapper">
            <SideBar />
            <FuncContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleFunc;

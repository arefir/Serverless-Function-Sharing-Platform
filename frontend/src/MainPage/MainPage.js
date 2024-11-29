import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import ContentArea from './ContentArea';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="content-area">
        <ContentArea />
        </main>
      </div>
    </div>
  );
}

export default MainPage;

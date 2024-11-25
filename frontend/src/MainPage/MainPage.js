import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import ContentArea from './ContentArea';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <main className="content-wrapper">
        <Sidebar />
        <ContentArea />
      </main>
    </div>
  );
}

export default MainPage;

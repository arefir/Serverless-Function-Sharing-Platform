import React from "react";
import Header from "../Header/Header";
import Sidebar from "../SideBar/SideBar";
import ItemContent from "./ItemContent";
import './SearchResult.css';

function SearchResult() {
  return (
    <div className="searchResult">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="itemContent">
        <ItemContent />
        </main>
      </div>
    </div>
  );
}

export default SearchResult;

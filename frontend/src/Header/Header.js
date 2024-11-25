import React from 'react';
import SearchBar from './SearchBar';
import NewButton from './NewButton';
import ButtonGroup from './ButtonGroup';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <SearchBar />
        <NewButton />
      </div>
      <div className="header-right">
      <ButtonGroup />
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Welcome to the symphony of colors</h1>
      <nav>
        <a href="#gallery">Gallery</a>
        <a href="#artists">Artists</a>
        <a href="#contact">Contact us</a>
      </nav>
    </header>
  );
}
export default Header;
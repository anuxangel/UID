import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Welcome to the symphony of colors</h1>
      <nav>
        <Link to="/">Home</Link>
       
        <Link to="/gallery">Gallery</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/AdminPanel">AdminPanel</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;

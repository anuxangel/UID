import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './pages/AuthContext';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import Artists from './pages/Artists';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import Cart from './pages/Cart';
import ArtistDetail from './pages/ArtistDetail'; // New page for artist details
import Payment from './pages/payment'; // Import Payment page

function App() {
  const [cartItems, setCartItems] = useState([]); // Declare cartItems and setCartItems
  const [selectedArtwork, setSelectedArtwork] = useState(null); // State to hold the selected artwork for payment

  // Define the handleAddToCart function
  const handleAddToCart = (artwork) => {
    setCartItems((prevItems) => [...prevItems, artwork]); // Add the artwork to the cart
  };

  // Define the handleBuyNow function
  const handleBuyNow = (artwork) => {
    setSelectedArtwork(artwork); // Set the selected artwork for payment
  };

  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/payment" element={<Payment artwork={selectedArtwork} />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;

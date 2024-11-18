import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleRemoveFromCart = (itemToRemove) => {
    // Remove the item from the cart
    setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Artist: {item.artist}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item)} className="remove-btn">Remove</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => navigate('/gallery')} className="continue-shopping-btn">Continue Shopping</button>
    </div>
  );
}

export default Cart;

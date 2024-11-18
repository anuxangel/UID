import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css';

function Gallery({ onAddToCart, onBuyNow }) {
  const artworks = [
    { id: 1, title: 'Starry Night', artist: 'Vincent van Gogh', price: 500, imageUrl: "https://tse4.mm.bing.net/th?id=OIP.XcCgyg58Qf03X7HVXFBKWQHaEK&pid=Api&P=0&h=180" },
    { id: 2, title: 'Craped Pictures', artist: 'Leonardo da Vinci', price: 300, imageUrl: "https://images.pexels.com/photos/12519255/pexels-photo-12519255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: 'Landslides in Winter', artist: 'Anuxlia', price: 200, imageUrl: "https://tse4.explicit.bing.net/th?id=OIP.Xlb9D94gxH8hddEZi9U_kgHaEK&pid=Api&P=0&h=180" },
    { id: 4, title: 'Crashed Living Under Earth', artist: 'Harshith', price: 400, imageUrl: "https://tse4.mm.bing.net/th?id=OIP.0flUwRM3r3bkfIZmNnHA4wHaEK&pid=Api&P=0&h=180" },
    { id: 5, title: 'Comics for Life', artist: 'Hina Joseph', price: 350, imageUrl: "https://tse4.mm.bing.net/th?id=OIP.Z9Bx5CKT-LWEJeDEuMleeQHaEK&pid=Api&P=0&h=180" },
    { id: 6, title: 'Creative Bites', artist: 'Maya Shankar', price: 250, imageUrl: "https://tse2.mm.bing.net/th?id=OIP.obaWOHkSlekCL5GjG_hRzgHaEo&pid=Api&P=0&h=180" },
    { id: 7, title: 'Chipi chipi', artist: 'priya muthz', price: 400, imageUrl: "https://i.pinimg.com/originals/8f/16/8d/8f168d05eb1df0066c8549721ec77643.jpg" },
    { id: 6, title: 'monalithz', artist: 'Aradhya', price: 300, imageUrl: "https://i.pinimg.com/736x/8b/53/ff/8b53ffd95eddb6481ab848133114defb.jpg" },
    { id: 6, title: 'linkelisd', artist: 'kerlin', price: 550, imageUrl: "https://i.pinimg.com/originals/b9/23/cc/b923cc9ef89cf5ebc68adc05cc365fb0.jpg" },
    { id: 6, title: 'channa mereya', artist: 'arjith singh', price: 430, imageUrl: "https://s3.amazonaws.com/showflipper/product/27951533985755.jpg" },
    { id: 6, title: 'tenticals', artist: 'kirthi Shankar', price: 250, imageUrl: "https://i.pinimg.com/originals/f2/b8/d5/f2b8d5a9e39ccd58f77ceedd771a8d92.jpg" },
    { id: 6, title: 'Crent sixles', artist: 'sanam ', price: 240, imageUrl: "https://i.pinimg.com/originals/8f/16/8d/8f168d05eb1df0066c8549721ec77643.jpg" },
  ];

  const navigate = useNavigate();

  const handleAddToCart = (artwork) => {
    onAddToCart(artwork);
    navigate('/cart');
    alert(`${artwork.title} added to cart`);
  };

  const handleBuyNow = (artwork) => {
    onBuyNow(artwork); // Call the function to set the selected artwork
    navigate('/payment'); // Navigate to the payment page directly
  };

  return (
    <section id="gallery" className="gallery">
      <h2 style={{ color: 'black' }}>Gallery</h2>
      <div className="artwork-list">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <img src={artwork.imageUrl} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>{artwork.artist}</p>
            <p>Price: ${artwork.price}</p>
            <button onClick={() => handleAddToCart(artwork)} className="add-to-cart-btn">Add to Cart</button>
            <button onClick={() => handleBuyNow(artwork)} className="buy-now-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

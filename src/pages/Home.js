import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Header with Logo, Search Bar, and Auth Links */}
      <header className="header">
        <div className="logo">
          <h1>Symphony of Colors</h1>
          <p>Finest Indian Contemporary Art</p>
        </div>
        
        
      </header>

      {/* Carousel Section */}
      <Carousel className="art-carousel">
        <Carousel.Item>
          <img src="https://m.media-amazon.com/images/I/81TxCybEsDL.jpg" alt="Artwork 1" className="carousel-image"/>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="http://cdn.theculturetrip.com/wp-content/uploads/2013/03/ngv-steve-collis-flickr1.jpg" alt="Artwork 2" className="carousel-image"/>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>

      {/* Masterpieces Section */}
      <section className="masterpieces-section">
        <h2>Masterpieces</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://i.pinimg.com/originals/84/dd/88/84dd8881147752c418ee37873d449437.jpg" alt="Masterpiece 1"/>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/736x/32/f3/47/32f3470a43f184921c36781c7c4b5ca1--painting-portraits-abstract-portrait.jpg" alt="Masterpiece 2"/>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/originals/25/87/8f/25878fd91d46d7649a2e7c20c19bdfba.jpg" alt="Masterpiece 3"/>
          </div>
          <div className="gallery-item">
            <img src="https://cdn.pixabay.com/photo/2022/11/30/01/02/abstract-7625603_640.jpg" alt="Masterpiece 4"/>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/originals/e1/51/61/e15161e135607d237a85eda6e9f8e6ff.jpg" alt="Masterpiece 4"/>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/736x/c8/55/9d/c8559d2fc2f08278a115a7923928f7e9.jpg" alt="Masterpiece 4"/>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <h2>New Arrivals</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="http://abstractartist.org/wp-content/uploads/2011/04/abstract-art-gallery3-07.jpg" alt="New Arrival 1"/>
          </div>
          <div className="gallery-item">
            <img src="https://www.artistsandillustrators.co.uk/uploads/tinymce/images/abstract-painting.jpg" alt="New Arrival 2"/>
          </div>
          <div className="gallery-item">
            <img src="http://abstractartist.org/wp-content/uploads/2011/04/abstract-art-gallery10-19.jpg" alt="New Arrival 3"/>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/originals/2a/79/99/2a79993ebf418dcf9a66ced7e36d4b5d.jpg" alt="New Arrival 4"/>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/originals/c5/32/d0/c532d000e666fc01446e0080e9ae8b6a.jpg" alt="New Arrival 4"/>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/originals/84/6c/3c/846c3cd98f4597dca4011285bde74253.jpg" alt="New Arrival 4"/>
          </div>
        </div>
      </section>

      {/* Let's Get Started Section */}
      <section className="get-started-section">
        <h2>Let’s Get Started</h2>
        <p>Explore our vast collection and find the perfect piece of art that speaks to you.</p>
        {/* Link to the Login Page */}
        <Link to="/Login">
          <button className="get-started-button">Explore Now</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;

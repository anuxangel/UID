import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>Vibrant colors with attractive Artworks</h2>
        <p className="about-intro">
          Symphony of Colors is an online art gallery that brings together artists and art enthusiasts from around the world. Our platform showcases a diverse range of artwork, celebrating the beauty and transformative power of art.
        </p>
      </div>

      <div className="about-sections">
        {/* Mission Section */}
        <div className="about-section">
          <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/486533/1555631/restricted" alt="Our Mission" className="about-image"/>
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At Symphony of Colors, our mission is to create a space where creativity can flourish, and people can connect through a shared love of art. We aim to support artists by providing them a platform to reach new audiences, while offering art lovers a curated selection of original pieces.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-section">
          <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/483878/1004983/restricted" alt="Our Values" className="about-image"/>
          <div className="about-text">
            <h3>Our Values</h3>
            <p>
              We believe that art should be accessible and inspiring. We prioritize diversity, inclusion, and innovation in the art world. Each artwork is selected with care, ensuring that our gallery remains a source of inspiration and reflection for everyone.
            </p>
          </div>
        </div>

        {/* Connect Section */}
        <div className="about-section">
          <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/482447/1004984/restricted" alt="Connect with Us" className="about-image"/>
          <div className="about-text">
            <h3>Connect with Us</h3>
            <p>
              Join us on a journey through color and expression. Connect with us on social media, subscribe to our newsletter, and be the first to learn about new exhibitions, featured artists, and exclusive collections. Let’s celebrate art, together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

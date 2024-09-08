import React from 'react';
import '../styles/ArtworkDetail.css';

function ArtworkDetail({ title, artist, description, imageUrl }) {
  return (
    <div className="artwork-detail">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p><strong>Artist:</strong> {artist}</p>
      <p>{description}</p>
    </div>
  );
}

export default ArtworkDetail;

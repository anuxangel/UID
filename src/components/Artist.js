import React from 'react';
import '../styles/Artist.css';

function Artist({ name, bio, imageUrl }) {
  return (
    <div className="artist">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}

export default Artist;
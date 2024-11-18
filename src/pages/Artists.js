import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Artists.css';

const artistData = [
  { id: '1', name: 'Sophia Elmora', image: "https://toptenfamous.com/wp-content/uploads/2021/05/Katy-Perry.jpg", description: 'Sophia Elmore is a renowned abstract artist' },
  { id: '2', name: 'Daniel Cruz', image: "https://wallpapercave.com/wp/wp3988683.jpg", description: 'Daniel Cruz is an influential contemporary landscape artist' },
  { id: '3', name: 'Nina Brooks', image: 'https://tse1.mm.bing.net/th?id=OIP.woI5XKNDAQk3B6pPSUeP3QHaE8&pid=Api&P=0&h=180', description: 'Surrealist artist and good in abstract painints' },
  { id: '4', name: 'Kiara Geni ', image: 'https://images.pexels.com/photos/8381944/pexels-photo-8381944.jpeg?auto=compress&cs=tinysrgb&h=750&w=12608', description: 'Pallete artist and a wonderfull monalithic painting' },
];

function Artists() {
  return (
    <div className="artists-page">
      <h2>Meet Our Featured Artists</h2>
      <div className="artist-list">
        {artistData.map(artist => (
          <div className="artist-card" key={artist.id}>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.description}</p>
            <Link to={`/artists/${artist.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artists;

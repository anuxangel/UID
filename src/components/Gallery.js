import React from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const artworks = [
    { id: 1, title: 'Starry Night', artist: 'Vincent van Gogh', imageUrl:"https://tse4.mm.bing.net/th?id=OIP.Itt21U2qMVAcrmNthqSMfAHaEK&pid=Api&P=0&h=180"},
    { id: 2, title: 'Mona Lisa', artist: 'Leonardo da Vinci', imageUrl:"https://images.pexels.com/photos/12519255/pexels-photo-12519255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: 'landslides in winter', artist: 'Anuxlia', imageUrl:"https://tse4.explicit.bing.net/th?id=OIP.Xlb9D94gxH8hddEZi9U_kgHaEK&pid=Api&P=0&h=180" },
  
  ];
  const a={
    color:"black",
  }
  return (
    <section id="gallery" className="gallery">
      <h2 style={a}>Gallery</h2>
      <div className="artwork-list">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <img src={artwork.imageUrl} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>{artwork.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Gallery;
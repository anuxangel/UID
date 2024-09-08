import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Artist from './components/Artist';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const artist = {
    name: 'Vincent van Gogh',
    bio: 'Vincent van Gogh was a Dutch post-impressionist painter.',
    imageUrl: '/images/van-gogh.jpg',
  };

  return (
    <div className="App">
      <Header />
      <Gallery />
      <Artist name={artist.name} bio={artist.bio} imageUrl={artist.imageUrl} />
      <Footer />
    </div>
  );
}

export default App;